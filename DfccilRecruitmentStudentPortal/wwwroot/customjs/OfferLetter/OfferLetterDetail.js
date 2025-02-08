//var apiBaseUrlServices = "https://uat.dfccilrecruitmentservices.cetpainfotech.com";

var rollNumberGlobal;
var CandidateIdGlobal = 0;
var CandidateNameGlobal = "";
function setRollNumberAndCandidateId() {

    rollNumberGlobal = localStorage.getItem('candidateRollNo');
    CandidateIdGlobal = localStorage.getItem('candidateId');
    CandidateNameGlobal = localStorage.getItem('candidateName');

}

var today = new Date().toISOString().split('T')[0];

document.getElementById("inputExtentionDate").setAttribute("min", today);

function getOfferLatterDetails() {
    
    
    var url = apiBaseUrlHr + "/api/Offer/GetOfferDetails/" + CandidateIdGlobal;

    url = url.replace(/[\u200B-\u200D\uFEFF]/g, '');
    $.ajax({
        type: "GET",
        url: url,

        contentType: "application/json; charset=utf-8",
        dataType: "json",

        beforeSend: function () {

            $('.page-loader').show();

        },
        success: function (response) {
          //  response.data.offerStatusByCandidate = 'Request for Extension';
            
            if (response.statusCode == 200) {
                $("#btnExtention").css('display', 'inline');
                if (response.data.offerStatusByCandidate == 'Accept') {

                    $("#divNotFound").css('display', 'block');
                    $("#headingMessage").html('Congratulations! You have successfully accepted the offer. You will receive the link to complete your joining formalities at your registered email address. For any further queries, you may reach us at recruitment@dfccil.com');
                   
                }
                else if (response.data.offerStatusByCandidate == 'Reject') {

                        $("#divNotFound").css('display', 'block');
                    $("#headingMessage").html('We are sorry to hear that you do not wish to join our Organization. In case you wish to discuss something, you may reach at recruitment@dfccil.com');
                   
                    }

                else if (response.data.offerStatusByCandidate == 'Request for Extension') {

                    $("#divNotFound").css('display', 'block');
                    $("#headingMessage").html('Your request for the extension of the Joining Date has been received and is under review by the HR Team. Please note that HR will get back to you. For any further query, you may reach at recruitment@dfccil.com');
                }
                    else if (response.data.offerStatusByCandidate =='Extension Rejected') {

                    $("#btnExtention").css('display', 'none');
                    $("#divNotFound").css('display', 'block');
                    $("#divCandidateOffer").css('display', 'block'); 
                    $("#headingMessage").html('We are sorry to inform you that your request for the extension of the Joining Date has been Rejected.You may still join as per the original offer please consider the offer details below. For any further query, you may reach at recruitment@dfccil.com');

                }
                else if (response.data.offerStatusByCandidate == 'Extension Accepted') {
                    $("#btnExtention").css('display', 'none');
                    $("#divNotFound").css('display', 'block');
                    $("#divCandidateOffer").css('display', 'block');                  
                    $("#headingMessage").val('Your request for the extension of the Joining Date has been Accepted. Please consider the offer details below. For any further query, you may reach at recruitment@dfccil.com');

                }
                else if (response.data.offerStatusByCandidate == 'Pending') {                    
                    $("#divNotFound").css('display', 'none');
                    $("#divCandidateOffer").css('display', 'block');

                    // $("#headingMessage").val('We are sorry to inform you that your request for the extension of the Joining Date has been Rejected. For any further query, you may reach at gknim@dfcc.co.in');

                }
               
            }
            else {
                $("#divCandidateOffer").css('display', 'none');
                $("#divNotFound").css('display', 'block');
                $("#headingMessage").html('You are not authorised');
            }
            console.log(response)
            LoadCandidateData(response.data)

            $('.page-loader').hide();

        },
        error: function (err) {
            $('.page-loader').hide();

        },

        failure: function (response) {
            alert(response.d);
            $('.page-loader').hide();
        }
    });
}

function LoadCandidateData(data) {
    
    $('#inputDearCandidate').html(data.name);
    var tabletbody = $('#tbodyOfferDetails');

    var row = `  <tr>
                               <td>${data.post}</td>
                                <td>${data.grade}</td>
                                <td>${data.payScale}</td>
                                <td>${data.doj}</td>
                     </tr>`
    tabletbody.append(row);




}

function AcceptOffer_Click() {
    
    
    var OfferObject = {
        "candidateId": CandidateIdGlobal,
        "status": "Accept",
        "isExtension": false,
        "extensionDate": null,
        "extensionRemark": ''
    }

    var _url = apiBaseUrlHr + "/api/Offer/UpdateOfferStatus";
    _url = _url.replace(/[\u200B-\u200D\uFEFF]/g, '');

    $.ajax({
        type: "POST",
        url: _url,
        data: JSON.stringify(OfferObject),

        contentType: 'application/json',

        beforeSend: function () {

            $('.page-loader').show();

        },
        success: function (response) {
            $('.page-loader').hide();

            if (response.statusCode == 201 || response.statusCode == 200) {
                Swal.fire({
                    title: 'Success !',
                    text: response.message,
                    icon: "success"
                }).then(function () {
                    /* resetAll();*/
                    window.location.href = "/Home/Joinning"
                })
            }
            else {
                Swal.fire({
                    title: 'Invalid !',
                    text: response.message,
                    icon: 'error'
                }).then(function () {
                    resetAll();
                })
            }

        },
        error: function (jqXHR, status) {
            e.disabled = false;
            $('.page-loader').hide();

            Swal.fire({
                title: 'Invalid !',
                text: jqXHR.responseJSON.title,
                icon: 'error'
            });

        }
    });
}
function RejectOffer_Click() {
    
    var OfferObject = {
        "candidateId": CandidateIdGlobal,
        "status": "Reject",
        "isExtension": false,
        "extensionDate": null,
        "extensionRemark": ''
    }

    var _url = apiBaseUrlHr + "/api/Offer/UpdateOfferStatus";
    _url = _url.replace(/[\u200B-\u200D\uFEFF]/g, '');

    $.ajax({
        type: "POST",
        url: _url,
        data: JSON.stringify(OfferObject),

        contentType: 'application/json',

        beforeSend: function () {

            $('.page-loader').show();

        },
        success: function (response) {
            $('.page-loader').hide();

            if (response.statusCode == 201 || response.statusCode == 200) {
                Swal.fire({
                    title: 'Success !',
                    text: response.message,
                    icon: "success"
                }).then(function () {
                    //resetAll();
                    window.location.reload()
                })
            }
            else {
                Swal.fire({
                    title: 'Invalid !',
                    text: response.message,
                    icon: 'error'
                }).then(function () {
                    resetAll();
                });
            }

        },
        error: function (jqXHR, status) {
            e.disabled = false;
            $('.page-loader').hide();

            Swal.fire({
                title: 'Invalid !',
                text: jqXHR.responseJSON.title,
                icon: 'error'
            });

        }
    });
}
function ExtensionConfirm_Click() {
    
    var extensionDate = $("#inputExtentionDate").val();
    var extensionArea = $("#txtExtensionArea").val();


    var OfferObject = {
        "candidateId": CandidateIdGlobal,
        "status": "Request for Extension",
        "isExtension": true,
        "extensionDate": extensionDate,
        "extensionRemark": extensionArea
    }

    var _url = apiBaseUrlHr + "/api/Offer/UpdateOfferStatus";
    _url = _url.replace(/[\u200B-\u200D\uFEFF]/g, '');

    $.ajax({
        type: "POST",
        url: _url,
        data: JSON.stringify(OfferObject),

        contentType: 'application/json',

        beforeSend: function () {

            $('.page-loader').show();

        },
        success: function (response) {
            $('.page-loader').hide();

            if (response.statusCode == 201 || response.statusCode == 200) {
                Swal.fire({
                    title: 'Success !',
                    text: response.message,
                    icon: "success"
                }).then(function () {
                    //resetAll();
                    window.location.reload()
                })
            }
            else {
                Swal.fire({
                    title: 'Invalid !',
                    text: response.message,
                    icon: 'error'
                }).then(function () {
                    resetAll();
                });
            }

        },
        error: function (jqXHR, status) {
            e.disabled = false;
            $('.page-loader').hide();

            Swal.fire({
                title: 'Invalid !',
                text: jqXHR.responseJSON.title,
                icon: 'error'
            });

        }
    });

}

$(document).ready(function () {

    setRollNumberAndCandidateId();
    getOfferLatterDetails();

});