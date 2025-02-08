

var IsEditModeJoining = true;
var rollNumber = '0'
var candidateId = "0";
var candidateName = "";
//var candidateAssignedDetails = "";
var globalObjectFormat = { elementType: 'input', frontFieldName: '', apiFieldName: '', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, };
//Code to Upload Files Start From Here
var empObject = {};
var uploadType = '';
var uploadKey = '';
var fileData = [];
var isSaveAll = false;
//var uploadDetails = { TourEstimate: [], AccommodationEstimate: [], TourNomination: [] };
var uploadDetails = {};
var rowCount = 1;
var rowLength = 2;
var rowLength2 = 2;
var rowLength3 = 2;
var rowLength4 = 2;
var rowLength5 = 2;
var rowLength6 = 2;

function formatToIsodateFormate(inputDate) {
    var parts = inputDate.split("-");
    var day = parseInt(parts[0]);
    var month = parseInt(parts[1]);
    var year = parseInt(parts[2]);

    // Construct a new Date object using the parts
    var dateObj = new Date(year, month - 1, day);

    // Add one day
    dateObj.setDate(dateObj.getDate() + 1);

    var isoString = dateObj.toISOString();

    return isoString;
}


var trBodyUploadDoc = document.getElementById('trBodyUploadDoc'); function loadUploadedFile(key) {
    var row = '';
    let count = 1;
    if (!(key in uploadDetails)) {
        uploadDetails[key] = [];
    }
    if (uploadDetails[key].length == 0) {
        trBodyUploadDoc.innerHTML = '';
        return;
    }
    for (let e of uploadDetails[key]) {
        row += `<tr>
               <td class="py-1">${count}</td>
                <td>
                    ${uploadType}
                                           
                </td>
               

                <td>
					<a href="${e.clientPath}" target='_blank'>
                    <i style="font-size:20px; color:red;" class="fa-solid fa-file-lines" aria-hidden="true"></i>
					</a>
                </td>

                <td>
                    <i onclick="delete_file(${count - 1})" class="fa fa-trash trashFontAwesome" aria-hidden="true"></i>
                </td>
                </tr>`;
        count++;

    }
    trBodyUploadDoc.innerHTML = row;
}

var checkboxTemporaryAddressPersonalInformationFormFirst = false
var checkboxHomeTownSameAddressAsPermanentFirst = false
var checkboxHomeTownSameAddressAsTemporaryFirst = false
$(document).ready(function () {
    setInterval(function () {
        $(".datepickerr").datepicker({
            changeMonth: true,
            changeYear: true,
            dateFormat: "dd-mm-yy"
             // Set desired date format
        });
    },500)
   
     
    //$('#selectMaritalStatusPersonalInformationForm').change(function () {
    //    if ($(this).find('option:selected').attr('id') == '2') {
    //        $('.trMarried').show();
    //    } else {
    //        $('.trMarried').hide();
    //    }
    //});  

    //$('#selectExServicemenPersonalInformationForm').change(function () {
    //    if ($(this).find('option:selected').attr('id') == '1') {
    //        
    //    } else {
    //       
    //    }
    //});
    //$('#selectDisabilityPersonalInformationForm').change(function () {
    //    if ($(this).find('option:selected').attr('id') == '1') {
    //        $('.disabilityYes').show();
    //    } else {
    //        $('.disabilityYes').hide();
    //    }
    //});

    $('#checkboxTemporaryAddressPersonalInformationForm').change(function () {
        if ($(this).is(':checked')) {
            //$('.temporarySame').hide();
            let inputPermanentHouseNoPersonalInformationForm = $('#inputPermanentHouseNoPersonalInformationForm').val()
            let inputPermanentAddressPersonalInformationForm = $('#inputPermanentAddressPersonalInformationForm').val()
            let inputPermanentAddress2PersonalInformationForm = $('#inputPermanentAddress2PersonalInformationForm').val()
            let inputPermanentCityPersonalInformationForm = $('#inputPermanentCityPersonalInformationForm').val()
            let inputPermanentStatePersonalInformationForm = $('#inputPermanentStatePersonalInformationForm').val()
            let inputPermanentPinCodePersonalInformationForm = $('#inputPermanentPinCodePersonalInformationForm').val()



            $('#inputTemporaryHouseNoPersonalInformationForm').val(inputPermanentHouseNoPersonalInformationForm)

            $('#inputTemporaryAddressPersonalInformationForm').val(inputPermanentAddressPersonalInformationForm)
            $('#inputTemporaryAddress2PersonalInformationForm').val(inputPermanentAddress2PersonalInformationForm)
            $('#inputTemporaryCityPersonalInformationForm').val(inputPermanentCityPersonalInformationForm)
            $('#inputTemporaryStatePersonalInformationForm').val(inputPermanentStatePersonalInformationForm)
            $('#inputTemporaryPinCodePersonalInformationForm').val(inputPermanentPinCodePersonalInformationForm)



            $('#checkboxTemporaryAddressPersonalInformationForm').attr('checked', true)

            $('#inputTemporaryHouseNoPersonalInformationForm').prop('readonly', true)
            $('#inputTemporaryHouseNoPersonalInformationForm').prop('disabled', true)

            $('#inputTemporaryAddressPersonalInformationForm').prop('readonly', true)
            $('#inputTemporaryAddressPersonalInformationForm').prop('disabled', true)

            $('#inputTemporaryAddress2PersonalInformationForm').prop('readonly', true)
            $('#inputTemporaryAddress2PersonalInformationForm').prop('disabled', true)

            $('#inputTemporaryCityPersonalInformationForm').prop('readonly', true)
            $('#inputTemporaryCityPersonalInformationForm').prop('disabled', true)

            $('#inputTemporaryStatePersonalInformationForm').prop('readonly', true)
            $('#inputTemporaryStatePersonalInformationForm').prop('disabled', true)


            $('#inputTemporaryPinCodePersonalInformationForm').prop('readonly', true)
            $('#inputTemporaryPinCodePersonalInformationForm').prop('disabled', true)

            checkboxTemporaryAddressPersonalInformationFormFirst = true
        } else {
            $('.temporarySame').show();

            //let inputTemporaryHouseNoPersonalInformationForm = $('#inputTemporaryHouseNoPersonalInformationForm').val()
            //let inputTemporaryAddressPersonalInformationForm = $('#inputTemporaryAddressPersonalInformationForm').val()
            //let inputTemporaryAddress2PersonalInformationForm = $('#inputTemporaryAddress2PersonalInformationForm').val()
            //let inputTemporaryCityPersonalInformationForm = $('#inputTemporaryCityPersonalInformationForm').val()
            //let inputTemporaryStatePersonalInformationForm = $('#inputTemporaryStatePersonalInformationForm').val()
            //let inputTemporaryPinCodePersonalInformationForm = $('#inputTemporaryPinCodePersonalInformationForm').val()

            $('#inputTemporaryHouseNoPersonalInformationForm').val("")

            $('#inputTemporaryAddressPersonalInformationForm').val("")
            $('#inputTemporaryAddress2PersonalInformationForm').val("")
            $('#inputTemporaryCityPersonalInformationForm').val("")
            $('#inputTemporaryStatePersonalInformationForm').val("")
            $('#inputTemporaryPinCodePersonalInformationForm').val("")


            $('#checkboxTemporaryAddressPersonalInformationForm').attr('checked', false)

            $('#inputTemporaryHouseNoPersonalInformationForm').prop('readonly', false)
            $('#inputTemporaryHouseNoPersonalInformationForm').prop('disabled', false)

            $('#inputTemporaryAddressPersonalInformationForm').prop('readonly', false)
            $('#inputTemporaryAddressPersonalInformationForm').prop('disabled', false)

            $('#inputTemporaryAddress2PersonalInformationForm').prop('readonly', false)
            $('#inputTemporaryAddress2PersonalInformationForm').prop('disabled', false)

            $('#inputTemporaryCityPersonalInformationForm').prop('readonly', false)
            $('#inputTemporaryCityPersonalInformationForm').prop('disabled', false)

            $('#inputTemporaryStatePersonalInformationForm').prop('readonly', false)
            $('#inputTemporaryStatePersonalInformationForm').prop('disabled', false)


            $('#inputTemporaryPinCodePersonalInformationForm').prop('readonly', false)
            $('#inputTemporaryPinCodePersonalInformationForm').prop('disabled', false)
            checkboxTemporaryAddressPersonalInformationFormFirst = false
        }
    });
    $('#checkboxHomeTownSameAddressAsPermanent').change(function () {
        if ($(this).is(':checked')) {
            $('.homeTownSame').hide();
            $('#divTemporary').hide();

            $('#inputHomeTownHouseNoPersonalInformationForm').prop('readonly', true)
            $('#inputHomeTownHouseNoPersonalInformationForm').prop('disabled', true)

            $('#inputHomeTownAddressPersonalInformationForm').prop('readonly', true)
            $('#inputHomeTownAddressPersonalInformationForm').prop('disabled', true)

            $('#inputHomeTownAddress2PersonalInformationForm').prop('readonly', true)
            $('#inputHomeTownAddress2PersonalInformationForm').prop('disabled', true)

            $('#inputHomeTownCityPersonalInformationForm').prop('readonly', true)
            $('#inputHomeTownCityPersonalInformationForm').prop('disabled', true)

            $('#inputHomeTownStatePersonalInformationForm').prop('readonly', true)
            $('#inputHomeTownStatePersonalInformationForm').prop('disabled', true)


            $('#inputHomeTownPinCodePersonalInformationForm').prop('readonly', true)
            $('#inputHomeTownPinCodePersonalInformationForm').prop('disabled', true)

            checkboxHomeTownSameAddressAsPermanentFirst = true
        } else {
            $('.homeTownSame').show();
            $('#divTemporary').hide();



            $('#inputHomeTownHouseNoPersonalInformationForm').prop('readonly', false)
            $('#inputHomeTownHouseNoPersonalInformationForm').prop('disabled', false)

            $('#inputHomeTownAddressPersonalInformationForm').prop('readonly', false)
            $('#inputHomeTownAddressPersonalInformationForm').prop('disabled', false)

            $('#inputHomeTownAddress2PersonalInformationForm').prop('readonly', false)
            $('#inputHomeTownAddress2PersonalInformationForm').prop('disabled', false)

            $('#inputHomeTownCityPersonalInformationForm').prop('readonly', false)
            $('#inputHomeTownCityPersonalInformationForm').prop('disabled', false)

            $('#inputHomeTownStatePersonalInformationForm').prop('readonly', false)
            $('#inputHomeTownStatePersonalInformationForm').prop('disabled', false)


            $('#inputHomeTownPinCodePersonalInformationForm').prop('readonly', false)
            $('#inputHomeTownPinCodePersonalInformationForm').prop('disabled', false)
            checkboxHomeTownSameAddressAsPermanentFirst = false
        }
    });
    $('#checkboxHomeTownSameAddressAsTemporary').change(function () {
        if ($(this).is(':checked')) {
            $('.homeTownSame').hide();



            $('#inputHomeTownHouseNoPersonalInformationForm').prop('readonly', true)
            $('#inputHomeTownHouseNoPersonalInformationForm').prop('disabled', true)

            $('#inputHomeTownAddressPersonalInformationForm').prop('readonly', true)
            $('#inputHomeTownAddressPersonalInformationForm').prop('disabled', true)

            $('#inputHomeTownAddress2PersonalInformationForm').prop('readonly', true)
            $('#inputHomeTownAddress2PersonalInformationForm').prop('disabled', true)

            $('#inputHomeTownCityPersonalInformationForm').prop('readonly', true)
            $('#inputHomeTownCityPersonalInformationForm').prop('disabled', true)

            $('#inputHomeTownStatePersonalInformationForm').prop('readonly', true)
            $('#inputHomeTownStatePersonalInformationForm').prop('disabled', true)


            $('#inputHomeTownPinCodePersonalInformationForm').prop('readonly', true)
            $('#inputHomeTownPinCodePersonalInformationForm').prop('disabled', true)
            $('#divPermanent').hide();
            checkboxHomeTownSameAddressAsTemporaryFirst = true
        } else {
            $('.homeTownSame').show();
            $('#divPermanent').show();

            $('#inputHomeTownHouseNoPersonalInformationForm').prop('readonly', false)
            $('#inputHomeTownHouseNoPersonalInformationForm').prop('disabled', false)

            $('#inputHomeTownAddressPersonalInformationForm').prop('readonly', false)
            $('#inputHomeTownAddressPersonalInformationForm').prop('disabled', false)

            $('#inputHomeTownAddress2PersonalInformationForm').prop('readonly', false)
            $('#inputHomeTownAddress2PersonalInformationForm').prop('disabled', false)

            $('#inputHomeTownCityPersonalInformationForm').prop('readonly', false)
            $('#inputHomeTownCityPersonalInformationForm').prop('disabled', false)

            $('#inputHomeTownStatePersonalInformationForm').prop('readonly', false)
            $('#inputHomeTownStatePersonalInformationForm').prop('disabled', false)


            $('#inputHomeTownPinCodePersonalInformationForm').prop('readonly', false)
            $('#inputHomeTownPinCodePersonalInformationForm').prop('disabled', false)
            checkboxHomeTownSameAddressAsTemporaryFirst = false
        }
    });





    $('#checkboxUndertakingForOBCDissable').change(function () {
        if ($(this).is(':checked')) {
            $('#divObcUndertakingDetails').hide();
        } else {
            $('#divObcUndertakingDetails').show();
        }
    });
    $('#checkBoxDeclarationDatePersonalInformationForm').change(function () {
        if ($(this).is(':checked')) {
            $('#buttonSubmitDatePersonalInformationForm').removeAttr('disabled');
        } else {
            $('#buttonSubmitDatePersonalInformationForm').attr('disabled', 'disabled');
        }
    });
    //$('#checkBoxDeclarationJoiningReport').change(function () {
    //    if ($(this).is(':checked')) {
    //        $('#buttonJoiningReportFormSubmit').removeAttr('disabled');
    //    } else {
    //        $('#buttonJoiningReportFormSubmit').attr('disabled', 'disabled');
    //    }
    //});
    //$('#checkBoxDeclarationRequisitionForm').change(function () {
    //    if ($(this).is(':checked')) {
    //        $('#buttonRequisitionFormSubmit').removeAttr('disabled');
    //    } else {
    //        $('#buttonRequisitionFormSubmit').attr('disabled', 'disabled');
    //    }
    //});
    $('#checkBoxDeclarationNominationGratuity').change(function () {
        if ($(this).is(':checked')) {
            $('#buttonNominationGratuitySubmit').removeAttr('disabled');
        } else {
            $('#buttonNominationGratuitySubmit').attr('disabled', 'disabled');
        }
    });
    //$('#checkBoxDeclarationOptionForm').change(function () {
    //    if ($(this).is(':checked')) {
    //        $('#buttonOptionFormSubmit').removeAttr('disabled');
    //    } else {
    //        $('#buttonOptionFormSubmit').attr('disabled', 'disabled');
    //    }
    //});
    //$('#checkBoxDeclarationUndertakingForm').change(function () {
    //    if ($(this).is(':checked')) {
    //        $('#buttonUndertakingFormSubmit').removeAttr('disabled');
    //    } else {
    //        $('#buttonUndertakingFormSubmit').attr('disabled', 'disabled');
    //    }
    //});
});
function setRollNumberAndCandidateId() {

    rollNumber = localStorage.getItem('candidateRollNo');
    candidateId = localStorage.getItem('candidateId');
    candidateName = localStorage.getItem('candidateName');
    $("#spanDeclarationName").html(candidateName);
    // alert('ProfileTemp_' + rollNumber);
}
$(document).ready(function () {

    $('.submitCheckbox').change(function () {
        var checkbox = $(this);
        var submitButton = $('#btn-submit');

        // Enable/disable button based on checkbox state
        submitButton.prop('disabled', !checkbox.prop('checked'));

        // Update button background color based on disabled state
        submitButton.css('background-color', submitButton.prop('disabled') ? 'lightgray' : '#4b49ac');
    });

    setRollNumberAndCandidateId();
    loadAllDataOfCandidateData();
    loadAllDataOfJoiningCandidate();
    loadCandidateEducationData()

    getOfferLatterDetails();
    ////

    // loadEmployerDetails();
    //loadFamilyDetails()
    getEmployerDataFromApi();
    getFamilyDetailsDataFromApi()
    getNominationForGratuityDataFromApi()
    getNominationForProvidentFundDataFromApi()
    getUnderTakingDataFromApi()
    getSet5NpominationForGratutityFromApi()
    getSet7ImmovablePropertyDataFromApi()
    getSet7MovablePropertyDataFromApi()
    getSet7Pf()
    getSet7Insurence()
    getSet7DebtsAndOtherLiabilities()
    getSet7StatementofLiquidAsset()


    getUploadedDocuments();
    PrintFormA();
    PrintFormB();
    PrintFormC();
    PrintFormD();
    PrintFormE();
    PrintFormF();
    PrintFormG();
    PrintFormH();
   

    getEmploymentDetailsJoiningDataFromApi()
    getEducationDetailsJoiningDataFromApi()
    getFormHSubmitData(); 
    getFamilyForeignDetailsJoiningDataFromApi()
    getGetFamilyDetailsJoiningDataFromApi()
    getGetPakistanLivingDetailsjoiningDataFromApi()

});





function getOfferLatterDetails() {

    
    var url = apiBaseUrlHr + "/api/Offer/GetOfferDetails/" + candidateId;

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
            debugger
            console.log(response.data);
            if (response.statusCode == 200) {
                //$("#btnExtention").css('display', 'inline');
                if (response.data.offerStatusByCandidate == 'Accept') {
                    let postwithgrade = response.data.post.split('(')
                    console.log(postwithgrade[0])
                    $('#inputEmpPostNominationGratuity').val(postwithgrade[0] + `(${response.data.grade})`)
                    $('#inputEmpPostNominationGratuity').attr('disabled', true)
                    $('#inputEmpPostNominationGratuity').attr('readonly', true)
                    //$("#divNotFound").css('display', 'block');
                    //$("#headingMessage").html('Congratulations! Your have succesfully accepted the offer. You will receive the link to complete your joining formalities by 28th March 2024 on your registered email adress. For any further query, you may reach at gknim@dfcc.co.in');

                }
                else {

  window.location.href = '/Home/MyProfile';

                }



            }


            if (response.statusCode == 404) {
                //$("#btnExtention").css('display', 'inline');


                //$("#divNotFound").css('display', 'block');
                //$("#headingMessage").html('Congratulations! Your have succesfully accepted the offer. You will receive the link to complete your joining formalities by 28th March 2024 on your registered email adress. For any further query, you may reach at gknim@dfcc.co.in');



            window.location.href = '/Home/MyProfile';




            }
            //LoadCandidateData(response.data)

            $('.page-loader').hide();

        },
        error: function (err) {
            $('.page-loader').hide();
            window.location.href = '/Home/MyProfile';
        },

        failure: function (response) {
           window.location.href = '/Home/MyProfile';
            //alert(response.d);
            $('.page-loader').hide();
        }
    });
}
var oldParticularsPersonal = [];
var newParticularsPersonal = [];
var educationPersonal = [];
var newJoiningReportInfomation = [];
var newOptionFormPlaceOfPostiongInformation = [];
var newNominationAndGratuityInformation = []
function loadOldParticularsPersonalInformationForm() {
    
    function getFrontEndObject() {
        var arrObjects = [
            { modelName: '', elementType: 'img', frontFieldName: 'imgProfilePicLayout', apiFieldName: 'ProfilePic', attrName: 'src', getFunction: 'attr', setFunction: 'attr', isReadOnly: true, isDisabled: true, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputJoiningDatePersonalInformationForm', apiFieldName: 'JoiningDate', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false, },
            { modelName: '', elementType: 'input', frontFieldName: 'inputReportDateHindiJoiningReport', apiFieldName: 'JoiningDate', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false, },
            { modelName: '', elementType: 'input', frontFieldName: 'inputReportDateEngJoiningReport', apiFieldName: 'JoiningDate', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false, },
            { modelName: '', elementType: 'input', frontFieldName: 'inputDateJoiningReport', apiFieldName: 'JoiningDate', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false, },
            { modelName: '', elementType: 'input', frontFieldName: 'inputDateUndertaking', apiFieldName: 'JoiningDate', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false, },


            ///// Set 3 Old Start
            { modelName: '', elementType: 'input', frontFieldName: 'inputNameHindiOptionForm', apiFieldName: 'Name', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputDateHindiOptionForm', apiFieldName: 'JoiningDate', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputTimeHindiOptionForm', apiFieldName: 'PostName', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputTimeEngOptionForm', apiFieldName: 'PostName', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputNameEngOptionForm', apiFieldName: 'Name', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputDateEngOptionForm', apiFieldName: 'JoiningDate', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },
            //{ modelName: '', elementType: 'input', frontFieldName: 'inputTimeEngOptionForm', apiFieldName: 'AppointmentNoEngJoiningReport', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'select', frontFieldName: 'inputDeclarationDateOptionForm', apiFieldName: '', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },
            ///// Set 3 Old End

            ///Set 2 old start
            { modelName: '', elementType: 'input', frontFieldName: 'inputReportTimeHindiJoiningReport', apiFieldName: 'JoiningTime', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputReportTimeEngJoiningReport', apiFieldName: 'JoiningTime', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },
            //{ modelName: '', elementType: 'inputdate', frontFieldName: 'inputAppointmentDateHindiJoiningReport', apiFieldName: 'JoiningDate', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputPostHindiJoiningReport', apiFieldName: 'PostName', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },
            //{ modelName: '', elementType: 'inputdate', frontFieldName: 'inputAppointmentDateEngJoiningReport', apiFieldName: 'JoiningDate', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputPostEngJoiningReport', apiFieldName: 'PostName', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },

            { modelName: '', elementType: 'input', frontFieldName: 'inputNameDeclarationJoiningReport', apiFieldName: 'Name', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputDesignationDeclarationJoiningReport', apiFieldName: 'PostName', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },


            { modelName: '', elementType: 'input', frontFieldName: 'inputNameDeclarationJoiningReport', apiFieldName: 'Name', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputDesignationDeclarationJoiningReport', apiFieldName: 'PostName', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },


            { modelName: '', elementType: 'input', frontFieldName: 'inputNameDeclarationJoiningReport', apiFieldName: 'Name', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputDesignationDeclarationJoiningReport', apiFieldName: 'PostName', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },


            ///// Set 2 Old End

            // set 3 start

            //{ modelName: '', elementType: 'input', frontFieldName: 'inputDateHindiOptionForm', apiFieldName: 'JoiningDate', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },

            //{ modelName: '', elementType: 'input', frontFieldName: 'inputTimeHindiOptionForm', apiFieldName: 'Name', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputDeclarationNameOptionForm', apiFieldName: 'Name', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputDeclarationDesignationOptionForm', apiFieldName: 'PostName', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },
            //set 3 end



            // set 4 start
            { modelName: '', elementType: 'input', frontFieldName: 'inputDeclarationNameUndertaking', apiFieldName: 'Name', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputDeclarationRollNoUndertaking', apiFieldName: 'RollNo', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputDeclarationPostUndertaking', apiFieldName: 'PostName', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputDeclarationJoiningDateUndertaking', apiFieldName: 'JoiningDate', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },
            //set 4 end

            ///Set 5 old start

            { modelName: 'CandidateProfile.', elementType: 'span', frontFieldName: 'spanNameNominationGratuity', apiFieldName: 'Name', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: 'CandidateProfile.', elementType: 'input', frontFieldName: 'inputDowryProhibitionActIndianPenal', apiFieldName: 'Name', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },
            { modelName: 'CandidateProfile.', elementType: 'input', frontFieldName: 'inputEmployeeNameNominationGratuity', apiFieldName: 'Name', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'selectEmpGenderNominationGratuity', apiFieldName: 'Gender', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputEmpReligionNominationGratuity', apiFieldName: 'Religion', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputEmpMartialStatusNominationGratuity', apiFieldName: 'MartialStatus', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },
            //{ modelName: '', elementType: 'input', frontFieldName: 'inputEmpDepartmentNominationGratuity', apiFieldName: 'PostName', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: true, isEditable: false },
            //{ modelName: '', elementType: 'input', frontFieldName: 'inputEmpPostNominationGratuity', apiFieldName: 'PostName', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: true, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputEmpAppointmentDateNominationGratuity', apiFieldName: 'JoiningDate', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: true, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputDesignationNominationGratuity', apiFieldName: '', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },


            { modelName: '', elementType: 'input', frontFieldName: 'inputDesignationNominationGratuity', apiFieldName: 'PostName', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },



            // { modelName: '', elementType: 'textarea', frontFieldName: 'textareaEmpPermAddressNominationGratuity', apiFieldName: 'address1', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: true, isEditable: false },
            ///// Set 5 Old End


            ///Set 6 old start   
            { modelName: '', elementType: 'input', frontFieldName: 'inputEmployeeDojRequisition', apiFieldName: 'JoiningDate', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputEmployeePostRequisition', apiFieldName: 'PostName', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },

            //{ modelName: '', elementType: 'input', frontFieldName: 'inputFirstNameRequisition', apiFieldName: 'Name', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },
          //  { modelName: '', elementType: 'input', frontFieldName: 'inputLastNameRequisition', apiFieldName: 'Name', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },
            //{ modelName: '', elementType: 'input', frontFieldName: 'inputDobRequisition', apiFieldName: 'DateOfBirth', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputDesignationRequisition', apiFieldName: 'PostName', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },


            //{ modelName: '', elementType: 'input', frontFieldName: 'inputMiddleNameRequisition', apiFieldName: 'Name', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },

           // { modelName: '', elementType: 'input', frontFieldName: 'inputDepartmentRequisition', apiFieldName: 'PostName', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },

            { modelName: '', elementType: 'input', frontFieldName: 'inputMobileNoRequisition', apiFieldName: 'MobileNo', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },

            { modelName: '', elementType: 'input', frontFieldName: 'inputNameDeclarationRequisition', apiFieldName: 'Name', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputRollNoDeclarationRequisition', apiFieldName: 'RollNo', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputAlternateEmailNameRequisition', apiFieldName: 'AlternateEmailId', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },

            ///// Set 6 Old End

            ///Set 7 old start
            { modelName: '', elementType: 'input', frontFieldName: 'inputSet3verificationOfCharacter', apiFieldName: 'Name', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputselectSet3verificationOfCharacterHindi', apiFieldName: 'Name', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputDeclareThatTheRequisite', apiFieldName: 'Name', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputDeclareThatTheRequisiteHindi', apiFieldName: 'Name', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputTeaningOfSection314OfTheCompany', apiFieldName: 'Name', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputTeaningOfSection314OfTheCompanyHindi', apiFieldName: 'Name', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputOneSpouseLiving', apiFieldName: 'Name', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputOneSpouseLivingHindi', apiFieldName: 'Name', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputDeclaratiOnOfFidelity', apiFieldName: 'Name', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputDowryProhibitionAct', apiFieldName: 'Name', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputhavenobusinessinterest', apiFieldName: 'Name', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputUndertakingForOBCCandidatesOnly', apiFieldName: 'Name', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputReturnofAssetsandLiabilitiesameinfull', apiFieldName: 'Name', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },

            { modelName: '', elementType: 'input', frontFieldName: 'inpuTeaningOfSection314OfTheCompanyParentsName', apiFieldName: 'Name', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inpuTeaningOfSection314OfTheCompanyParentsDate', apiFieldName: '', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inpuTeaningOfSection314OfTheCompanyParentPlace', apiFieldName: '', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },



            { modelName: '', elementType: 'input', frontFieldName: 'inputAnotherPersonDuringName', apiFieldName: 'Name', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputAnotherPersonDuringDate', apiFieldName: '', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputAnotherPersonDuringPlace', apiFieldName: '', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },

            //{ modelName: '', elementType: 'input', frontFieldName: 'inputUndertakingForOBCCandidatescommunitywhichrecognized', apiFieldName: 'ReservationCategory', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },


            { modelName: '', elementType: 'input', frontFieldName: 'inputDeclaratiOnOfFidelityName', apiFieldName: 'Name', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputDeclaratiOnOfFidelityDate', apiFieldName: '', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputDeclaratiOnOfFidelityPlace', apiFieldName: '', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },


            { modelName: '', elementType: 'input', frontFieldName: 'btnDowryProhibitionActName', apiFieldName: 'Name', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'btnDowryProhibitionActDate', apiFieldName: '', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'btnDowryProhibitionActPlace', apiFieldName: '', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },


            { modelName: '', elementType: 'input', frontFieldName: 'inputhavenobusinessinterestName', apiFieldName: 'Name', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputhavenobusinessinterestDate', apiFieldName: '', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputhavenobusinessinterestPlace', apiFieldName: '', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },



            // { modelName: '', elementType: 'input', frontFieldName: 'UndertakingForOBCCandidatesOnlyName', apiFieldName: 'Name', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'UndertakingForOBCCandidatesOnlyDate', apiFieldName: '', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'UndertakingForOBCCandidatesOnlyPlace', apiFieldName: '', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },




            ///// Set 7 Old End


            { modelName: '', elementType: 'input', frontFieldName: 'inputDesignationPersonalInformationForm', apiFieldName: 'PostName', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },
            { modelName: 'CandidateProfile.', elementType: 'input', frontFieldName: 'inputNamePersonalInformationForm', apiFieldName: 'Name', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },
            { modelName: 'CandidateProfile.', elementType: 'input', frontFieldName: 'inputFatherNamePersonalInformationForm', apiFieldName: 'FatherName', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputMotherNamePersonalInformationForm', apiFieldName: 'MotherName', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },
            { modelName: '', elementType: 'inputdate', frontFieldName: 'inputDobPersonalInformationForm', apiFieldName: 'ApplicantDOB', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputGenderPersonalInformationForm', apiFieldName: 'Gender', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },
            // { modelName: '', elementType: 'select', frontFieldName: 'selectReligionPersonalInformationForm', apiFieldName: 'Religion', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },
            //{ modelName: '', elementType: 'input', frontFieldName: 'inputReligionPersonalInformationForm', apiFieldName: 'Religion', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },
            //{ modelName: '', elementType: 'input', frontFieldName: 'inputCastePersonalInformationForm', apiFieldName: 'ReservationCategory', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'selectDisabilityPersonalInformationForm', apiFieldName: 'AreYouPWD', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputDisabilityTypePersonalInformationForm', apiFieldName: 'TypeOfDisability', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputDisabilityPercentagePersonalInformationForm', apiFieldName: 'Percentageofdisability', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'selectDisabilityDetailsPersonalInformationForm', apiFieldName: 'SubDisability', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'selectExServicemenPersonalInformationForm', apiFieldName: 'ExServiveMan', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputMilitaryServiceYearPersonalInformationForm', apiFieldName: 'ExServicemenDuration', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },
            { modelName: '', elementType: 'inputdate', frontFieldName: 'inputEntryDatePersonalInformationForm', apiFieldName: 'ExServicemenJoiningDate', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },
            { modelName: '', elementType: 'inputdate', frontFieldName: 'inputDischargeDatePersonalInformationForm', apiFieldName: 'ExServicemenEndDate', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputIdentificationIdentificationPersonalInformationForm', apiFieldName: 'MarkOfIdentification', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'selectMaritalStatusPersonalInformationForm', apiFieldName: 'MartialStatus', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputPhoneNumberPersonalInformationForm', apiFieldName: 'MobileNo', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputEmailPersonalInformationForm', apiFieldName: 'EmailId', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputPanNumberPersonalInformationForm', apiFieldName: 'PanNo', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputAadhaarNumberPersonalInformationForm', apiFieldName: 'AdharNo', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },


            // FORM H

            //{ modelName: '', elementType: 'input', frontFieldName: 'inputDeclarationNameUndertaking', apiFieldName: 'Name', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },


        ];
        oldParticularsPersonal = arrObjects;
        return arrObjects;

    }

    if (allData.length != 0) {

        var objApiData = {};
        $("#spanExedata").html(allData.otherEducationDetailUploaded.qualificationName);
        for (let e in allData.candidate.advertisementDetails) {
            objApiData[capitalizeFirstLetter(e)] = allData.candidate.advertisementDetails[e];
        }
        for (let e in allData.candidate) {
            objApiData[capitalizeFirstLetter(e)] = allData.candidate[e];
        }


        for (let e in allData.addressDetail) {
            objApiData[capitalizeFirstLetter(e)] = allData.addressDetail[e];
        }
        for (let e in allData.candidateProfile) {
            objApiData[capitalizeFirstLetter(e)] = allData.candidateProfile[e];
        }
        for (let e in allData.matricDetailUploaded) {
            objApiData[capitalizeFirstLetter(e)] = allData.matricDetailUploaded[e];
        }
        for (let e in allData.otherEducationDetailUploaded) {
            objApiData[capitalizeFirstLetter(e)] = allData.otherEducationDetailUploaded[e];
        }
        for (let e in allData.matricDetail) {
            objApiData[capitalizeFirstLetter(e)] = allData.matricDetail[e];
        }
        for (let e in allData.intermediateDetail) {
            objApiData[capitalizeFirstLetter(e)] = allData.intermediateDetail[e];
        }
        for (let e in allData.itiDetail) {
            objApiData[capitalizeFirstLetter(e)] = allData.itiDetail[e];
        }
        for (let e in allData.apprenticeDetail) {
            objApiData[capitalizeFirstLetter(e)] = allData.apprenticeDetail[e];
        }
        for (let e in allData.diplomaDetail) {
            objApiData[capitalizeFirstLetter(e)] = allData.diplomaDetail[e];
        }
        for (let e in allData.graduationDetail) {
            objApiData[capitalizeFirstLetter(e)] = allData.graduationDetail[e];
        }
        for (let e in allData.postGraduationDetail) {
            objApiData[capitalizeFirstLetter(e)] = allData.postGraduationDetail[e];
        }
        for (let e in allData.otherDetailUploaded) {
            objApiData[capitalizeFirstLetter(e)] = allData.otherDetailUploaded[e];
        }
        ;
        for (let e in allData.candidateOfferDetails) {
            objApiData[capitalizeFirstLetter(e)] = allData.candidateOfferDetails[e];
        }

        var enddate = new Date(objApiData.ExServicemenEndDate);
        var startdate = new Date(objApiData.ExServicemenJoiningDate);

        var timeperiods = calculateduration(startdate, enddate);

        
        FillApiDataIntoFrontEnd(getFrontEndObject(), objApiData, 5);
        $("#inputMilitaryServiceYearPersonalInformationForm").val(timeperiods);






        let selectExServicemenPersonalInformationFormValue = $('#selectExServicemenPersonalInformationForm').val()

        if (selectExServicemenPersonalInformationFormValue == 'Yes') {

            $('.exServicemen').show();
        } else {
            $('.exServicemen').hide();
        }
        let selectDisabilityPersonalInformationFormValue = $('#selectDisabilityPersonalInformationForm').val()


        if (selectDisabilityPersonalInformationFormValue == 'Yes') {

            $('.disabilityYes').show();
        } else {
            $('.disabilityYes').hide();
        }

        let selectMaritalStatusPersonalInformationFormValue = $('#selectMaritalStatusPersonalInformationForm').val()


        if (selectMaritalStatusPersonalInformationFormValue.toUpperCase() == "MARRIED") {

            $('.trMarried').show();
        } else {
            $('.trMarried').hide();
        }


    }
}

function convertNaNDatesToBlank() {
    var sdateFieldValue = $('#inputEntryDatePersonalInformationForm').val();
    var edateFieldValue = $('#inputDischargeDatePersonalInformationForm').val();
    //var emdateFieldValue = $('#inputDepartmentStateGovtDoj').val();
    if (isNaNDates(sdateFieldValue)) {
        $('#inputEntryDatePersonalInformationForm').val('');
    }
    if (isNaNDates(edateFieldValue)) {
        $('#inputDischargeDatePersonalInformationForm').val('');
    }


}
function calculateduration(startDate, endDate) {

    //var endDate = new Date();

    var start = new Date(startDate);
    var end = new Date(endDate);

    var years = end.getFullYear() - start.getFullYear();
    var months = end.getMonth() - start.getMonth();
    var days = end.getDate() - start.getDate();

    // Adjust for negative months (if endDate's month is before startDate's month)
    if (months < 0) {
        years--;
        months += 12;
    }

    // Adjust for negative days (if endDate's day is before startDate's day)
    if (days < 0) {
        if (months == 0) {
            years--;
            months = 11;
        }
        else {
            months--;
        }
        // Get the last day of the previous month
        var tempDate = new Date(end.getFullYear(), end.getMonth(), 0);
        days += tempDate.getDate();
    }

    var calculatedAge = years + " Yr. " + months + " Mth. " + days + " Days. ";
    return calculatedAge;
}

function loadNewParticularsPersonalInformationForm() {

    function getFrontEndObject() {
        var arrObjects = [

            { modelName: '', elementType: 'select', frontFieldName: 'selectRecruitmentModePersonalInformationForm', apiFieldName: 'ModeOfRecruitment', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'select', frontFieldName: 'inputAppointmentNoHindiJoiningReport', apiFieldName: 'FileNumber', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },
            { modelName: '', elementType: 'select', frontFieldName: 'inputAppointmentNoEngJoiningReport', apiFieldName: 'FileNumber', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },
            { modelName: '', elementType: 'select', frontFieldName: 'inputReligionPersonalInformationForm', apiFieldName: 'Religion', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },


            ///// Set 3 New Start
            { modelName: '', elementType: 'input', frontFieldName: 'inputFirstEmailRequisition', apiFieldName: 'Choice_of_Email_Address_1', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputSecondEmailRequisition', apiFieldName: 'Choice_of_Email_Address_2', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            //{ modelName: '', elementType: 'input', frontFieldName: 'inputPlaceDeclarationRequisition', apiFieldName: 'CandidateLocation', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },



            ///// Set 3 New End

            ///// Set 3 New Start

            { modelName: '', elementType: 'select', frontFieldName: 'selectPlaceOfPosting1', apiFieldName: 'Options_for_Place_of_Posting_Option1', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'select', frontFieldName: 'selectPlaceOfPosting2', apiFieldName: 'Options_for_Place_of_Posting_Option2', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'select', frontFieldName: 'selectPlaceOfPosting3', apiFieldName: 'Options_for_Place_of_Posting_Option3', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },







            ///// Set 3 New End


            ///// Set 7 New Start

            { modelName: '', elementType: 'input', frontFieldName: 'inputdeclareThatTheRequisiteYears', apiFieldName: 'DeclareExaminationOrDegree', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputdeclareThatTheRequisiteExamination', apiFieldName: 'DeclareDivision', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputdeclareThatTheRequisiteDivision', apiFieldName: 'DeclarePercentage', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputdeclareThatTheRequisiteAggregateintheYear', apiFieldName: 'DeclareYear', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputdeclareThatTheRequisiteFromAggregateintheYear', apiFieldName: 'DeclareBoard_University_Institute', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputReturnofAssetsandCalendaryearimmediatelypreceding', apiFieldName: 'Liabilities_On_First_Appointment_From_Year', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputReturnofAssetsandTotalannualincomefromall', apiFieldName: 'Liabilities_On_First_Appointment_From_Year', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },


            { modelName: '', elementType: 'input', frontFieldName: 'inputdeclareThatTheRequisiteYearsHindi', apiFieldName: 'DeclareExaminationOrDegree', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputdeclareThatTheRequisiteExaminationHindi', apiFieldName: 'DeclareDivision', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputdeclareThatTheRequisiteDivisionHindi', apiFieldName: 'DeclarePercentage', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputdeclareThatTheRequisiteAggregateintheYearHindi', apiFieldName: 'DeclareYear', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputdeclareThatTheRequisiteFromAggregateintheYearHindi', apiFieldName: 'DeclareBoard_University_Institute', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'Fidelity_Name', apiFieldName: 'Declaration_Of_Fidelity_Name', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },

            { modelName: '', elementType: 'select', frontFieldName: 'selectNominationGratuityNameTitle', apiFieldName: 'CandidateTitle', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'select', frontFieldName: 'selectDowryProhibitionAct', apiFieldName: 'CandidateTitle', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },
            { modelName: '', elementType: 'select', frontFieldName: 'selecthavenobusinessinterest', apiFieldName: 'CandidateTitle', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },
            { modelName: '', elementType: 'select', frontFieldName: 'selectAssetandLiabilities', apiFieldName: 'CandidateTitle', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },
            //{ modelName: '', elementType: 'select', frontFieldName: 'selectUndertakingForOBCCandidatesOnly', apiFieldName: 'CandidateTitle', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },
            // { modelName: '', elementType: 'select', frontFieldName: 'selectUndertakingForOBCCandidatesOnlyParents', apiFieldName: 'GuardianTitle', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },
            { modelName: '', elementType: 'select', frontFieldName: 'selecthavenobusinessinterestParents', apiFieldName: 'GuardianTitle', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },
            { modelName: '', elementType: 'select', frontFieldName: 'selectDowryProhibitionActParents', apiFieldName: 'GuardianTitle', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },
            //{ modelName: '', elementType: 'input', frontFieldName: 'inputUndertakingForOBCCandidatesOnlyParents', apiFieldName: 'GuardianName', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputhavenobusinessinterestParents', apiFieldName: 'GuardianName', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputDowryProhibitionActParents', apiFieldName: 'GuardianName', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },
            { modelName: '', elementType: 'select', frontFieldName: 'selectSet3verificationOfCharacter', apiFieldName: 'CandidateTitle', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'select', frontFieldName: 'selectselectSet3verificationOfCharacterHindi', apiFieldName: 'CandidateTitle', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'select', frontFieldName: 'selectSet3verificationOfCharacterParents', apiFieldName: 'GuardianTitle', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'select', frontFieldName: 'selectSet3verificationOfCharacterParentsHindi', apiFieldName: 'GuardianTitle', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputSet3verificationOfCharacterParents', apiFieldName: 'GuardianName', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputSet3verificationOfCharacterParentsHindi', apiFieldName: 'GuardianName', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputDeclaratiOnOfFidelityParents', apiFieldName: 'GuardianName', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: true },
            { modelName: '', elementType: 'select', frontFieldName: 'selectDeclaratiOnOfFidelityParents', apiFieldName: 'GuardianTitle', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },
            { modelName: '', elementType: 'select', frontFieldName: 'selectDeclaratiOnOfFidelity', apiFieldName: 'CandidateTitle', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },




            { modelName: '', elementType: 'select', frontFieldName: 'selectdeclareThatTheRequisite', apiFieldName: 'CandidateTitle', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: true },
            { modelName: '', elementType: 'select', frontFieldName: 'selectOneSpouseLiving', apiFieldName: 'CandidateTitle', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: true },
            { modelName: '', elementType: 'select', frontFieldName: 'selectOneSpouseLivingHindi', apiFieldName: 'CandidateTitle', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: true },
            { modelName: '', elementType: 'select', frontFieldName: 'selectdeclareThatTheRequisiteHindi', apiFieldName: 'CandidateTitle', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: true },
            { modelName: '', elementType: 'select', frontFieldName: 'selectdeclareThatTheRequisitePrents', apiFieldName: 'GuardianTitle', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: true },
            { modelName: '', elementType: 'select', frontFieldName: 'selecteaningOfSection314OfTheCompanyParents', apiFieldName: 'GuardianTitle', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: true },
            { modelName: '', elementType: 'select', frontFieldName: 'selecteaningOfSection314OfTheCompanyParentsHindi', apiFieldName: 'GuardianTitle', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: true },
            { modelName: '', elementType: 'select', frontFieldName: 'selectDeclareThatTheRequisitePrentsHindi', apiFieldName: 'GuardianTitle', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: true },
            { modelName: '', elementType: 'select', frontFieldName: 'selectOneSpouseLivingParents', apiFieldName: 'GuardianTitle', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: true },
            { modelName: '', elementType: 'select', frontFieldName: 'selectOneSpouseLivingParentsHindi', apiFieldName: 'GuardianTitle', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: true },
            { modelName: '', elementType: 'input', frontFieldName: 'inputTeaningOfSection314OfTheCompanyParents', apiFieldName: 'GuardianName', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: true },
            { modelName: '', elementType: 'input', frontFieldName: 'inputTeaningOfSection314OfTheCompanyParentsHindi', apiFieldName: 'GuardianName', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: true },
            { modelName: '', elementType: 'input', frontFieldName: 'inputDeclareThatTheRequisitePrents', apiFieldName: 'GuardianName', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: true },
            { modelName: '', elementType: 'input', frontFieldName: 'InputDeclareThatTheRequisitePrentsHindi', apiFieldName: 'GuardianName', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: true },
            { modelName: '', elementType: 'input', frontFieldName: 'inputOneSpouseLivingParents', apiFieldName: 'GuardianName', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: true },
            { modelName: '', elementType: 'input', frontFieldName: 'inputOneSpouseLivingParentsHindi', apiFieldName: 'GuardianName', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: true },
            { modelName: '', elementType: 'select', frontFieldName: 'selecteaningOfSection314OfTheCompany', apiFieldName: 'CandidateTitle', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: true },
            { modelName: '', elementType: 'select', frontFieldName: 'selecteaningOfSection314OfTheCompanyHindi', apiFieldName: 'CandidateTitle', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: true },
            { modelName: '', elementType: 'select', frontFieldName: 'selectSet3verificationOfCharacterParentsHindi', apiFieldName: 'GuardianTitle', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },


            { modelName: '', elementType: 'input', frontFieldName: 'inputReturnofAssetsandDesignationandplaceofpostingl', apiFieldName: 'Return_of_Asset_Place_of_Posting', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputReturnofAssetsandotallengthofpast', apiFieldName: 'Return_of_Asset_Total_length_of_Past_Service', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            //{ modelName: '', elementType: 'inputdate', frontFieldName: 'inputReturnofAssetsanreturnenclosednamely', apiFieldName: 'Return_of_Asset_Year', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },

            ///// Set 7 New End 

            //  { modelName: '', elementType: 'input', frontFieldName: 'inputEmployeeCodePersonalInformationForm', apiFieldName: 'EmployeeCodePersonalInformationForm', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputBirthCountryPersonalInformationForm', apiFieldName: 'PiF_Country_of_Birth', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputBirthPlacePersonalInformationForm', apiFieldName: 'PiF_Place_City_of_Birth', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputNationalityPersonalInformationForm', apiFieldName: 'PiF_Nationality', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputMotherTonguePersonalInformationForm', apiFieldName: 'PiF_Mother_Tongue', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'select', frontFieldName: 'inputBloodGroupPersonalInformationForm', apiFieldName: 'PiF_Blood_Group', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            //{ modelName: '', elementType: 'inputdate', frontFieldName: 'inputMarriageDatePersonalInformationForm', apiFieldName: 'PiF_Date_of_Marriage', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputSpouseNamePersonalInformationForm', apiFieldName: 'PiF_Name_of_Spouse', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'select', frontFieldName: 'selectSpouseWorkingStatusPersonalInformationForm', apiFieldName: 'PiF_Spouse_Working_or_Not', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputSpouseWorkCompanyPersonalInformationForm', apiFieldName: 'PiF_Name_of_Company_Spouse_Working', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputSpouseEmployeeCodePersonalInformationForm', apiFieldName: 'PiF_In_case_Employee_working_in_DFCCIl_then_provide_Employee_Code', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputChildrenNumberPersonalInformationForm', apiFieldName: 'PiF_Number_of_Children', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputPermanentHouseNoPersonalInformationForm', apiFieldName: 'PiF_H_No', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            //{ modelName: '', elementType: 'input', frontFieldName: 'inputPermanentAddressPersonalInformationForm', apiFieldName: 'PiF_Permanent_Address_1', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            //{ modelName: '', elementType: 'input', frontFieldName: 'inputPermanentAddress2PersonalInformationForm', apiFieldName: 'PiF_Permanent_Address_2', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            //{ modelName: '', elementType: 'input', frontFieldName: 'inputPermanentCityPersonalInformationForm', apiFieldName: 'PiF_Permanent_City', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            //{ modelName: '', elementType: 'input', frontFieldName: 'inputPermanentStatePersonalInformationForm', apiFieldName: 'PiF_Permanent_State', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            //{ modelName: '', elementType: 'input', frontFieldName: 'inputPermanentPinCodePersonalInformationForm', apiFieldName: 'PiF_Permanent_Pin_Code', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            //{ modelName: '', elementType: 'input', frontFieldName: 'checkboxTemporaryAddressPersonalInformationForm', apiFieldName: 'TemporaryAddressPersonalInformationForm', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            //{ modelName: '', elementType: 'input', frontFieldName: 'inputTemporaryHouseNoPersonalInformationForm', apiFieldName: 'PiF_Present_H_No', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            //{ modelName: '', elementType: 'input', frontFieldName: 'inputTemporaryAddressPersonalInformationForm', apiFieldName: 'PiF_Present_Address_1', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            //{ modelName: '', elementType: 'input', frontFieldName: 'inputTemporaryAddress2PersonalInformationForm', apiFieldName: 'PiF_Present_Address_2', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            //{ modelName: '', elementType: 'input', frontFieldName: 'inputTemporaryCityPersonalInformationForm', apiFieldName: 'PiF_Present_City', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            //{ modelName: '', elementType: 'input', frontFieldName: 'inputTemporaryStatePersonalInformationForm', apiFieldName: 'PiF_Present_State', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            //{ modelName: '', elementType: 'input', frontFieldName: 'inputTemporaryPinCodePersonalInformationForm', apiFieldName: 'PiF_Present_Pin_Code', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            //{ modelName: '', elementType: 'input', frontFieldName: 'checkboxHomeTownSameAddressAsPermanent', apiFieldName: 'TownSameAddressAsPermanent', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            //{ modelName: '', elementType: 'input', frontFieldName: 'checkboxHomeTownSameAddressAsTemporary', apiFieldName: 'HomeTownSameAddressAsTemporary', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            //{ modelName: '', elementType: 'input', frontFieldName: 'inputHomeTownHouseNoPersonalInformationForm', apiFieldName: 'PiF_HomeTown_HNo', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            //{ modelName: '', elementType: 'input', frontFieldName: 'inputHomeTownAddressPersonalInformationForm', apiFieldName: 'PiF_HomeTown_Address1', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            //{ modelName: '', elementType: 'input', frontFieldName: 'inputHomeTownAddress2PersonalInformationForm', apiFieldName: 'PiF_HomeTown_Address2', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            //{ modelName: '', elementType: 'input', frontFieldName: 'inputHomeTownCityPersonalInformationForm', apiFieldName: 'PiF_HomeTown_City', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            //{ modelName: '', elementType: 'input', frontFieldName: 'inputHomeTownStatePersonalInformationForm', apiFieldName: 'PiF_HomeTown_State', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            //{ modelName: '', elementType: 'input', frontFieldName: 'inputHomeTownPinCodePersonalInformationForm', apiFieldName: 'PiF_HomeTown_Pin_Code', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputEmergencyNumberPersonalInformationForm', apiFieldName: 'PiF_Emergency_Contact_Number', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputEmergencyNamePersonalInformationForm', apiFieldName: 'PiF_Name_of_the_Person_along_with_Relationship_in_Emergency', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputLeftThumbImpressionPersonalInformationForm', apiFieldName: 'LeftThumbImpressionPersonalInformationForm', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputPassportNumberPersonalInformationForm', apiFieldName: 'PiF_Passport_Number', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputSpfPersonalInformationForm', apiFieldName: 'PiF_SPF_PRAN_EPF_UAN', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputBankNamePersonalInformationForm', apiFieldName: 'PiF_Bank_Name', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputBranchAddressPersonalInformationForm', apiFieldName: 'PiF_Branch_Address', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputAccountNumberPersonalInformationForm', apiFieldName: 'PiF_Account_Number', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputMicrCodePersonalInformationForm', apiFieldName: 'PiF_MICR_Code', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputIfscCodePersonalInformationForm', apiFieldName: 'PiF_IFSC_Code', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'select', frontFieldName: 'selectBankNaturePersonalInformationForm', apiFieldName: 'PiF_Nature_of_Bank', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputGrossTaxablePersonalInformationForm', apiFieldName: 'Income_from_Parent_Organization', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputTaxDeductedPersonalInformationForm', apiFieldName: 'Income_from_Parent_Organization_Tax_Deduction', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputPensionPersonalInformationForm', apiFieldName: 'PiF_Pension_if_any', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputOtherTaxIncomePersonalInformationForm', apiFieldName: 'PiF_Other_Taxable_Income', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },

            //{ modelName: '', elementType: 'input', frontFieldName: 'inputOthersDurationPersonalInformationForm1', apiFieldName: 'OthersDurationPersonalInformationForm', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            //{ modelName: '', elementType: 'input', frontFieldName: 'inputOthersDurationPersonalInformationForm2', apiFieldName: 'OthersDurationPersonalInformationForm', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            //{ modelName: '', elementType: 'input', frontFieldName: 'inputOthersDurationPersonalInformationForm3', apiFieldName: 'OthersDurationPersonalInformationForm', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            //{ modelName: '', elementType: 'input', frontFieldName: 'inputOthersDurationPersonalInformationForm4', apiFieldName: 'OthersDurationPersonalInformationForm', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },


        ];
        newParticularsPersonal = arrObjects;
        return arrObjects;

    }
    if (allData.length != 0) {
        var objApiData = {};


        for (let e in allData) {
            objApiData[capitalizeFirstLetter(e)] = allData[e];
        }

        FillApiDataIntoFrontEnd(getFrontEndObject(), objApiData, 5);

    }
}


let educationData;
function loadCandidateEducationData() {

    function getDataFromApi() {

        //alert('Not running Api Call due to Return ');        
        //var url = apiBaseUrlHrTourServices + "/api/TourListing/GetRecipientTourRequest/" + empObject.empId.toString();
        var url = apiBaseUrlHr + `/api/CandidateJoining/GetCandidateEducationJoiningDetails?CandidateId=${candidateId}`;
        url = url.replace(/[\u200B-\u200D\uFEFF]/g, '');
        $.ajax({
            type: "GET",
            url: url,
            //data: '{}',
            contentType: "application/json; charset=utf-8",
            dataType: "json",

            beforeSend: function () {

                $('.page-loader').show();

            },
            success: function (response) {

                educationData = response.data;
                console.log(educationData)
                loadEducationInformationForm();

                $('.page-loader').hide();


            },
            error: function (err) {
                $('.page-loader').hide();
                switch (err.status) {

                    case "401":
                        window.location.href = unAuthorisedUrl;
                        break;
                    case "403":
                        window.location.href = forbiddenUrl;
                        break;
                    default:

                        break;
                }
            },

            failure: function (response) {
                // alert(response.d);
                $('.page-loader').hide();
            }
        });
    }
    getDataFromApi();
}
function getFrontEndObjectEducation() {
    
    var arrObjects = [





        { courseNameForIdentification: "Matric", modelName: '', elementType: 'input', frontFieldName: 'inputMatricCoursePersonalInformationForm', apiFieldName: 'Name_of_Degree_Course', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },
        { courseNameForIdentification: "Matric", modelName: '', elementType: 'input', frontFieldName: 'inputMatricBoardPersonalInformationForm', apiFieldName: 'University_Board', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
        { courseNameForIdentification: "Matric", modelName: '', elementType: 'input', frontFieldName: 'inputMatricSchoolNamePersonalInformationForm', apiFieldName: 'Name_of_School', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false, isEditable: false },
        { courseNameForIdentification: "Matric", modelName: '', elementType: 'input', frontFieldName: 'inputMatricPercentagePersonalInformationForm', apiFieldName: 'Percentage', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
        { courseNameForIdentification: "Matric", modelName: '', elementType: 'input', frontFieldName: 'inputMatricBranchPersonalInformationForm', apiFieldName: 'Branch_of_Study', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
        { courseNameForIdentification: "Matric", modelName: '', elementType: 'inputdate', frontFieldName: 'inputMatricStartDatePersonalInformationForm', apiFieldName: 'Start_Date', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
        { courseNameForIdentification: "Matric", modelName: '', elementType: 'inputdate', frontFieldName: 'inputMatricEndDatePersonalInformationForm', apiFieldName: 'End_Date', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
        { courseNameForIdentification: "Matric", modelName: '', elementType: 'input', frontFieldName: 'inputMatricCountryPersonalInformationForm', apiFieldName: 'Country', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
        { courseNameForIdentification: "Matric", modelName: '', elementType: 'input', frontFieldName: 'inputMatricDurationPersonalInformationForm', apiFieldName: 'Duration_of_Course', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },

        { courseNameForIdentification: "Intermediate", modelName: '', elementType: 'input', frontFieldName: 'inputIntermediateCoursePersonalInformationForm', apiFieldName: 'Name_of_Degree_Course', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
        { courseNameForIdentification: "Intermediate", modelName: '', elementType: 'input', frontFieldName: 'inputIntermediateBoardPersonalInformationForm', apiFieldName: 'University_Board', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
        { courseNameForIdentification: "Intermediate", modelName: '', elementType: 'input', frontFieldName: 'inputIntermediateSchoolNamePersonalInformationForm', apiFieldName: 'Name_of_School', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
        { courseNameForIdentification: "Intermediate", modelName: '', elementType: 'input', frontFieldName: 'inputIntermediatePercentagePersonalInformationForm', apiFieldName: 'Percentage', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
        { courseNameForIdentification: "Intermediate", modelName: '', elementType: 'input', frontFieldName: 'inputIntermediateBranchPersonalInformationForm', apiFieldName: 'Branch_of_Study', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
        { courseNameForIdentification: "Intermediate", modelName: '', elementType: 'inputdate', frontFieldName: 'inputIntermediateStartDatePersonalInformationForm', apiFieldName: 'Start_Date', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
        { courseNameForIdentification: "Intermediate", modelName: '', elementType: 'inputdate', frontFieldName: 'inputIntermediateEndDatePersonalInformationForm', apiFieldName: 'End_Date', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
        { courseNameForIdentification: "Intermediate", modelName: '', elementType: 'input', frontFieldName: 'inputIntermediateCountryPersonalInformationForm', apiFieldName: 'Country', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
        { courseNameForIdentification: "Intermediate", modelName: '', elementType: 'input', frontFieldName: 'inputIntermediateDurationPersonalInformationForm', apiFieldName: 'Duration_of_Course', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },


        { courseNameForIdentification: "ITI", modelName: '', elementType: 'input', frontFieldName: 'inputItiDegreePersonalInformationForm', apiFieldName: 'Name_of_Degree_Course', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
        { courseNameForIdentification: "ITI", modelName: '', elementType: 'input', frontFieldName: 'inputItiUniversityPersonalInformationForm', apiFieldName: 'University_Board', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
        { courseNameForIdentification: "ITI", modelName: '', elementType: 'input', frontFieldName: 'inputItiSchoolNamePersonalInformationForm', apiFieldName: 'Name_of_School', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
        { courseNameForIdentification: "ITI", modelName: '', elementType: 'input', frontFieldName: 'inputItiPercentagePersonalInformationForm', apiFieldName: 'Percentage', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
        { courseNameForIdentification: "ITI", modelName: '', elementType: 'input', frontFieldName: 'inputItiBranchPersonalInformationForm', apiFieldName: 'Branch_of_Study', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
        { courseNameForIdentification: "ITI", modelName: '', elementType: 'inputdate', frontFieldName: 'inputItiStartDatePersonalInformationForm', apiFieldName: 'Start_Date', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
        { courseNameForIdentification: "ITI", modelName: '', elementType: 'inputdate', frontFieldName: 'inputItiEndDatePersonalInformationForm', apiFieldName: 'End_Date', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
        { courseNameForIdentification: "ITI", modelName: '', elementType: 'input', frontFieldName: 'inputItiCountryPersonalInformationForm', apiFieldName: 'Country', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
        { courseNameForIdentification: "ITI", modelName: '', elementType: 'input', frontFieldName: 'inputItiDurationPersonalInformationForm', apiFieldName: 'Duration_of_Course', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },


        { courseNameForIdentification: "Apprentice", modelName: '', elementType: 'input', frontFieldName: 'inputApprenticeCoursePersonalInformationForm', apiFieldName: 'Name_of_Degree_Course', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
        { courseNameForIdentification: "Apprentice", modelName: '', elementType: 'input', frontFieldName: 'inputApprenticeBoardPersonalInformationForm', apiFieldName: 'University_Board', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
        { courseNameForIdentification: "Apprentice", modelName: '', elementType: 'input', frontFieldName: 'inputApprenticeSchoolNamePersonalInformationForm', apiFieldName: 'Name_of_School', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
        { courseNameForIdentification: "Apprentice", modelName: '', elementType: 'input', frontFieldName: 'inputApprenticePercentagePersonalInformationForm', apiFieldName: 'Percentage', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
        { courseNameForIdentification: "Apprentice", modelName: '', elementType: 'input', frontFieldName: 'inputApprenticeBranchPersonalInformationForm', apiFieldName: 'Branch_of_Study', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
        { courseNameForIdentification: "Apprentice", modelName: '', elementType: 'inputdate', frontFieldName: 'inputApprenticeStartDatePersonalInformationForm', apiFieldName: 'Start_Date', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
        { courseNameForIdentification: "Apprentice", modelName: '', elementType: 'inputdate', frontFieldName: 'inputApprenticeEndDatePersonalInformationForm', apiFieldName: 'End_Date', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
        { courseNameForIdentification: "Apprentice", modelName: '', elementType: 'input', frontFieldName: 'inputApprenticeCountryPersonalInformationForm', apiFieldName: 'Country', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
        { courseNameForIdentification: "Apprentice", modelName: '', elementType: 'input', frontFieldName: 'inputApprenticeDurationPersonalInformationForm', apiFieldName: 'Duration_of_Course', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },


        { courseNameForIdentification: "Diploma", modelName: '', elementType: 'input', frontFieldName: 'inputDiplomaCoursePersonalInformationForm', apiFieldName: 'Name_of_Degree_Course', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
        { courseNameForIdentification: "Diploma", modelName: '', elementType: 'input', frontFieldName: 'inputDiplomaUniversityPersonalInformationForm', apiFieldName: 'University_Board', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
        { courseNameForIdentification: "Diploma", modelName: '', elementType: 'input', frontFieldName: 'inputDiplomaCollegeNamePersonalInformationForm', apiFieldName: 'Name_of_School', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
        { courseNameForIdentification: "Diploma", modelName: '', elementType: 'input', frontFieldName: 'inputDiplomaPercentagePersonalInformationForm', apiFieldName: 'Percentage', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
        { courseNameForIdentification: "Diploma", modelName: '', elementType: 'input', frontFieldName: 'inputDiplomaBranchPersonalInformationForm', apiFieldName: 'Branch_of_Study', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
        { courseNameForIdentification: "Diploma", modelName: '', elementType: 'inputdate', frontFieldName: 'inputDiplomaStartDatePersonalInformationForm', apiFieldName: 'Start_Date', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
        { courseNameForIdentification: "Diploma", modelName: '', elementType: 'inputdate', frontFieldName: 'inputDiplomaEndDatePersonalInformationForm', apiFieldName: 'End_Date', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
        { courseNameForIdentification: "Diploma", modelName: '', elementType: 'input', frontFieldName: 'inputDiplomaCountryPersonalInformationForm', apiFieldName: 'Country', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
        { courseNameForIdentification: "Diploma", modelName: '', elementType: 'input', frontFieldName: 'inputDiplomaDurationPersonalInformationForm', apiFieldName: 'Duration_of_Course', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },


        { courseNameForIdentification: "Graduation", modelName: '', elementType: 'input', frontFieldName: 'inputGraduationDegreePersonalInformationForm', apiFieldName: 'Name_of_Degree_Course', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
        { courseNameForIdentification: "Graduation", modelName: '', elementType: 'input', frontFieldName: 'inputGraduationUniversityPersonalInformationForm', apiFieldName: 'University_Board', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
        { courseNameForIdentification: "Graduation", modelName: '', elementType: 'input', frontFieldName: 'inputGraduationCollegeNamePersonalInformationForm', apiFieldName: 'Name_of_School', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
        { courseNameForIdentification: "Graduation", modelName: '', elementType: 'input', frontFieldName: 'inputGraduationPercentagePersonalInformationForm', apiFieldName: 'Percentage', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
        { courseNameForIdentification: "Graduation", modelName: '', elementType: 'input', frontFieldName: 'inputGraduationBranchPersonalInformationForm', apiFieldName: 'Branch_of_Study', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
        { courseNameForIdentification: "Graduation", modelName: '', elementType: 'inputdate', frontFieldName: 'inputGraduationStartDatePersonalInformationForm', apiFieldName: 'Start_Date', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
        { courseNameForIdentification: "Graduation", modelName: '', elementType: 'inputdate', frontFieldName: 'inputGraduationEndDatePersonalInformationForm', apiFieldName: 'End_Date', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
        { courseNameForIdentification: "Graduation", modelName: '', elementType: 'input', frontFieldName: 'inputGraduationCountryPersonalInformationForm', apiFieldName: 'Country', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
        { courseNameForIdentification: "Graduation", modelName: '', elementType: 'input', frontFieldName: 'inputGraduationDurationPersonalInformationForm', apiFieldName: 'Duration_of_Course', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },


        { courseNameForIdentification: "Post Graduation", modelName: '', elementType: 'input', frontFieldName: 'inputPostGraduationDegreePersonalInformationForm', apiFieldName: 'Name_of_Degree_Course', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
        { courseNameForIdentification: "Post Graduation", modelName: '', elementType: 'input', frontFieldName: 'inputPostGraduationUniversityPersonalInformationForm', apiFieldName: 'University_Board', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
        { courseNameForIdentification: "Post Graduation", modelName: '', elementType: 'input', frontFieldName: 'inputPostGraduationCollegeNamePersonalInformationForm', apiFieldName: 'Name_of_School', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
        { courseNameForIdentification: "Post Graduation", modelName: '', elementType: 'input', frontFieldName: 'inputPostGraduationPercentagePersonalInformationForm', apiFieldName: 'Percentage', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
        { courseNameForIdentification: "Post Graduation", modelName: '', elementType: 'input', frontFieldName: 'inputPostGraduationBranchPersonalInformationForm', apiFieldName: 'Branch_of_Study', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
        { courseNameForIdentification: "Post Graduation", modelName: '', elementType: 'inputdate', frontFieldName: 'inputPostGraduationStartDatePersonalInformationForm', apiFieldName: 'Start_Date', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
        { courseNameForIdentification: "Post Graduation", modelName: '', elementType: 'inputdate', frontFieldName: 'inputPostGraduationEndDatePersonalInformationForm', apiFieldName: 'End_Date', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
        { courseNameForIdentification: "Post Graduation", modelName: '', elementType: 'input', frontFieldName: 'inputPostGraduationCountryPersonalInformationForm', apiFieldName: 'Country', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
        { courseNameForIdentification: "Post Graduation", modelName: '', elementType: 'input', frontFieldName: 'inputPostGraduationDurationPersonalInformationForm', apiFieldName: 'Duration_of_Course', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },



        { courseNameForIdentification: "Others_1", modelName: '', elementType: 'input', frontFieldName: 'inputOthersCoursePersonalInformationForm', apiFieldName: 'Name_of_Degree_Course', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
        { courseNameForIdentification: "Others_1", modelName: '', elementType: 'input', frontFieldName: 'inputOthersBoardPersonalInformationForm', apiFieldName: 'University_Board', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
        { courseNameForIdentification: "Others_1", modelName: '', elementType: 'input', frontFieldName: 'inputOthersSchoolNamePersonalInformationForm', apiFieldName: 'Name_of_School', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
        { courseNameForIdentification: "Others_1", modelName: '', elementType: 'input', frontFieldName: 'inputOthersPercentagePersonalInformationForm', apiFieldName: 'Percentage', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
        { courseNameForIdentification: "Others_1", modelName: '', elementType: 'input', frontFieldName: 'inputOthersBranchPersonalInformationForm', apiFieldName: 'Branch_of_Study', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
        { courseNameForIdentification: "Others_1", modelName: '', elementType: 'inputdate', frontFieldName: 'inputOthersStartDatePersonalInformationForm', apiFieldName: 'Start_Date', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
        { courseNameForIdentification: "Others_1", modelName: '', elementType: 'inputdate', frontFieldName: 'inputOthersEndDatePersonalInformationForm', apiFieldName: 'End_Date', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
        { courseNameForIdentification: "Others_1", modelName: '', elementType: 'input', frontFieldName: 'inputOthersCountryPersonalInformationForm', apiFieldName: 'Country', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
        { courseNameForIdentification: "Others_1", modelName: '', elementType: 'input', frontFieldName: 'inputOthersDurationPersonalInformationForm', apiFieldName: 'Duration_of_Course', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },

        { courseNameForIdentification: "Others_2", modelName: '', elementType: 'input', frontFieldName: 'inputOthersCoursePersonalInformationForm2', apiFieldName: 'Name_of_Degree_Course', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
        { courseNameForIdentification: "Others_2", modelName: '', elementType: 'input', frontFieldName: 'inputOthersBoardPersonalInformationForm2', apiFieldName: 'University_Board', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
        { courseNameForIdentification: "Others_2", modelName: '', elementType: 'input', frontFieldName: 'inputOthersSchoolNamePersonalInformationForm2', apiFieldName: 'Name_of_School', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
        { courseNameForIdentification: "Others_2", modelName: '', elementType: 'input', frontFieldName: 'inputOthersPercentagePersonalInformationForm2', apiFieldName: 'Percentage', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
        { courseNameForIdentification: "Others_2", modelName: '', elementType: 'input', frontFieldName: 'inputOthersBranchPersonalInformationForm2', apiFieldName: 'Branch_of_Study', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
        { courseNameForIdentification: "Others_2", modelName: '', elementType: 'inputdate', frontFieldName: 'inputOthersStartDatePersonalInformationForm2', apiFieldName: 'Start_Date', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
        { courseNameForIdentification: "Others_2", modelName: '', elementType: 'inputdate', frontFieldName: 'inputOthersEndDatePersonalInformationForm2', apiFieldName: 'End_Date', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
        { courseNameForIdentification: "Others_2", modelName: '', elementType: 'input', frontFieldName: 'inputOthersCountryPersonalInformationForm2', apiFieldName: 'Country', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
        { courseNameForIdentification: "Others_2", modelName: '', elementType: 'input', frontFieldName: 'inputOthersDurationPersonalInformationForm2', apiFieldName: 'Duration_of_Course', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },


        { courseNameForIdentification: "Others_3", modelName: '', elementType: 'input', frontFieldName: 'inputOthersCoursePersonalInformationForm3', apiFieldName: 'Name_of_Degree_Course', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
        { courseNameForIdentification: "Others_3", modelName: '', elementType: 'input', frontFieldName: 'inputOthersBoardPersonalInformationForm3', apiFieldName: 'University_Board', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
        { courseNameForIdentification: "Others_3", modelName: '', elementType: 'input', frontFieldName: 'inputOthersSchoolNamePersonalInformationForm3', apiFieldName: 'Name_of_School', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
        { courseNameForIdentification: "Others_3", modelName: '', elementType: 'input', frontFieldName: 'inputOthersPercentagePersonalInformationForm3', apiFieldName: 'Percentage', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
        { courseNameForIdentification: "Others_3", modelName: '', elementType: 'input', frontFieldName: 'inputOthersBranchPersonalInformationForm3', apiFieldName: 'Branch_of_Study', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
        { courseNameForIdentification: "Others_3", modelName: '', elementType: 'inputdate', frontFieldName: 'inputOthersStartDatePersonalInformationForm3', apiFieldName: 'Start_Date', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
        { courseNameForIdentification: "Others_3", modelName: '', elementType: 'inputdate', frontFieldName: 'inputOthersEndDatePersonalInformationForm3', apiFieldName: 'End_Date', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
        { courseNameForIdentification: "Others_3", modelName: '', elementType: 'input', frontFieldName: 'inputOthersCountryPersonalInformationForm3', apiFieldName: 'Country', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
        { courseNameForIdentification: "Others_3", modelName: '', elementType: 'input', frontFieldName: 'inputOthersDurationPersonalInformationForm3', apiFieldName: 'Duration_of_Course', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },

        { courseNameForIdentification: "Others_4", modelName: '', elementType: 'input', frontFieldName: 'inputOthersCoursePersonalInformationForm4', apiFieldName: 'Name_of_Degree_Course', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
        { courseNameForIdentification: "Others_4", modelName: '', elementType: 'input', frontFieldName: 'inputOthersBoardPersonalInformationForm4', apiFieldName: 'University_Board', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
        { courseNameForIdentification: "Others_4", modelName: '', elementType: 'input', frontFieldName: 'inputOthersSchoolNamePersonalInformationForm4', apiFieldName: 'Name_of_School', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
        { courseNameForIdentification: "Others_4", modelName: '', elementType: 'input', frontFieldName: 'inputOthersPercentagePersonalInformationForm4', apiFieldName: 'Percentage', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
        { courseNameForIdentification: "Others_4", modelName: '', elementType: 'input', frontFieldName: 'inputOthersBranchPersonalInformationForm4', apiFieldName: 'Branch_of_Study', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
        { courseNameForIdentification: "Others_4", modelName: '', elementType: 'inputdate', frontFieldName: 'inputOthersStartDatePersonalInformationForm4', apiFieldName: 'Start_Date', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
        { courseNameForIdentification: "Others_4", modelName: '', elementType: 'inputdate', frontFieldName: 'inputOthersEndDatePersonalInformationForm4', apiFieldName: 'End_Date', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
        { courseNameForIdentification: "Others_4", modelName: '', elementType: 'input', frontFieldName: 'inputOthersCountryPersonalInformationForm4', apiFieldName: 'Country', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
        { courseNameForIdentification: "Others_4", modelName: '', elementType: 'input', frontFieldName: 'inputOthersDurationPersonalInformationForm4', apiFieldName: 'Duration_of_Course', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },

    ];
    educationPersonal = arrObjects;
    return arrObjects;

}
function getPostData() {
    
    //let educationPersonal = getFrontEndObjectEducation();

    objArrEducation = [];
    let courseNameForIdentificationArr = educationPersonal.map(e => e.courseNameForIdentification);
    courseNameForIdentificationArr = [... new Set(courseNameForIdentificationArr)];

    for (let eduObj of courseNameForIdentificationArr) {
        let objData = educationPersonal.filter(e => e.courseNameForIdentification == eduObj)
        objPost = {};
        for (let obj of objData) {


            if (obj.elementType == "inputdate") {
                objPost[LowerFirstLetter(obj.apiFieldName)] = ($("#" + obj.frontFieldName).val() == '') ? null : $("#" + obj.frontFieldName).val();
            }
            else {
                objPost[LowerFirstLetter(obj.apiFieldName)] = ($("#" + obj.frontFieldName).val() == '') ? null : $("#" + obj.frontFieldName).val();

            }

        }
        objPost.id = parseInt(EducationObjectToPost[eduObj].id);
        objPost.courseNameForIdentification = EducationObjectToPost[eduObj].courseNameForIdentification;
        objPost.type = EducationObjectToPost[eduObj].type;
        objPost.division = null;
        objPost.candidateId = candidateId;
        objArrEducation.push(objPost);

        if (objPost.start_Date != "" && objPost.start_Date != null) {
            objPost.start_Date = formatToIsodateFormate(objPost.start_Date)
        }
        if (objPost.end_Date != "" && objPost.end_Date !=  null) {
            objPost.end_Date = formatToIsodateFormate(objPost.end_Date)
        }
    }
   

    //let postDataObject = { dtoCandidateEducationJoiningDetailsModels: objArrEducation }
    var _url = apiBaseUrlHr + "/api/CandidateJoining/UpdateCandidateEducationJoiningDetails";
    _url = _url.replace(/[\u200B-\u200D\uFEFF]/g, '');

    $.ajax({
        type: "PUT",
        url: _url,
        data: JSON.stringify(objArrEducation),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        //processData: false,
        //contentType: false,
        /*headers: { Authorization: ApiToken },*/
        beforeSend: function () {
            //var ApiObject = CheckApiCall();
            //if (ApiObject.isCall == false) {
            //    window.location.href = mainLoginUrl;
            //    return false;
            //}
            $('.page-loader').show();

        },
        success: function (response) {

            //loadAllDataOfJoiningCandidate();
            $('.page-loader').hide();


            if (response.statusCode == 201 || response.statusCode == 200) {
                Swal.fire({
                    title: 'Success !',
                    text: response.statusCode == 201 ? 'Employer Details updated Successfully' : response.message,
                    icon: "success"
                })
                PrintFormA()
            }

            $('.page-loader').hide();


        },
        complete: function () {

            $('.page-loader').hide();

        },
        error: function (jqXHR, status) {

            $('.page-loader').hide();

            Swal.fire({
                title: 'Invalid !',
                text: jqXHR.responseJSON.title,
                icon: "error"
            });

            switch (jqXHR.status) {

                case "401":
                    window.location.href = unAuthorisedUrl;
                    break;
                case "403":
                    window.location.href = forbiddenUrl;
                    break;
                default:
                    ;
                    break;
            }
        }
    });

}
var EducationObjectToPost = {};
function loadEducationInformationForm() {
    

    educationPersonal = getFrontEndObjectEducation();


    for (let eduObj of educationData) {
        let postObject = { id: eduObj.id, courseNameForIdentification: eduObj.courseNameForIdentification, type: eduObj.type };
        EducationObjectToPost[eduObj.courseNameForIdentification] = postObject;

        let objData = educationPersonal.filter(e => e.courseNameForIdentification == eduObj.courseNameForIdentification)
        for (let obj of objData) {

            if (obj.elementType == "inputdate") {

                let date1 = eduObj[LowerFirstLetter(obj.apiFieldName)] == null ? "" : formatDate_dd_mm_yyyy_New_Formate(new Date(Date.parse(eduObj[LowerFirstLetter(obj.apiFieldName)])));

                $("#" + obj.frontFieldName).val(date1);

            } else {
                $("#" + obj.frontFieldName).val(eduObj[LowerFirstLetter(obj.apiFieldName)]);

            }
        }
    }




}












function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
function LowerFirstLetter(string) {
    return string.charAt(0).toLowerCase() + string.slice(1);
}
//function saveAll() {

//    var e = document.getElementById('testing');
//    isSaveAll = true;
//    saveCandidateJoining_submit(e)


//    //loadAllDataOfJoiningCandidate();

//    isSaveAll = false;

//}

function calculateAge(dateOfBirth) {
    // Parse the ISO date string to get the birth date
    var dob = new Date(dateOfBirth);

    // Get the current date
    var now = new Date();

    // Calculate the difference in milliseconds between the current date and the birth date
    var diff = now - dob;

    // Convert the difference to years
    var age = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));

    return age;
}

var globalCityName = '';
var permanentAddressDetailsGlobal = ''
var presentAddressDetailsGlobal = ''
 

function loadAllDataOfCandidateData(objData) {

    function getDataFromApi() {

        //alert('Not running Api Call due to Return ');        
        //var url = apiBaseUrlHrTourServices + "/api/TourListing/GetRecipientTourRequest/" + empObject.empId.toString();
        var url = apiBaseUrlHr + "/api/Candidate/GetCandidateDetails/" + rollNumber;
        url = url.replace(/[\u200B-\u200D\uFEFF]/g, '');
        $.ajax({
            type: "GET",
            url: url,
            //data: '{}',
            contentType: "application/json; charset=utf-8",
            dataType: "json",

            beforeSend: function () {

                $('.page-loader').show();

            },
            success: function (response) {
                globalCityName = ''
                allData = response.data;
                console.log(allData)
                
                permanentAddressDetailsGlobal = `${allData.addressDetailsUploaded.permanentAddress1 == null ? "" : allData.addressDetailsUploaded.permanentAddress1}, ${allData.addressDetailsUploaded.permanentAddress2 == null ? "" : allData.addressDetailsUploaded.permanentAddress2}, ${allData.addressDetailsUploaded.permanentCity == null ? "" : allData.addressDetailsUploaded.permanentCity}, ${allData.addressDetailsUploaded.permanentState == null ? "" : allData.addressDetailsUploaded.permanentState}, ${allData.addressDetailsUploaded.permanentPincode == null ? "" : allData.addressDetailsUploaded.permanentPincode}`
                presentAddressDetailsGlobal = `${allData.addressDetailsUploaded.presentAddress1 == null ? "" : allData.addressDetailsUploaded.presentAddress1}, ${allData.addressDetailsUploaded.presentAddress2 == null ? "" : allData.addressDetailsUploaded.presentAddress2}, ${allData.addressDetailsUploaded.presentCity == null ? "" : allData.addressDetailsUploaded.presentCity}, ${allData.addressDetailsUploaded.presentState == null ? "" : allData.addressDetailsUploaded.presentState}, ${allData.addressDetailsUploaded.presentPincode == null ? "" : allData.addressDetailsUploaded.presentPincode}`
                $('#textAreaSet6Homeaddressinfull').val(permanentAddressDetailsGlobal == null ? "" : permanentAddressDetailsGlobal);
             
                $('#textAreaSet6droppedatanystagePresentaddress').val(presentAddressDetailsGlobal); 
                
                 
                $('#inputPermanentAddressPersonalInformationForm').val(allData.addressDetailsUploaded.permanentAddress1 == null
                    ? (permanentAddress1Global == null
                        ? ''
                        : permanentAddress1Global)
                    : allData.addressDetailsUploaded.permanentAddress1)
                $('#inputPermanentAddress2PersonalInformationForm').val(allData.addressDetailsUploaded.permanentAddress2 == null
                    ? (permanentAddress2Global == null
                        ? ''
                        : permanentAddress2Global)
                    : allData.addressDetailsUploaded.permanentAddress2)
                $('#inputPermanentCityPersonalInformationForm').val(allData.addressDetailsUploaded.permanentCity == null
                    ? (premanentCityGlobal == null
                        ? ''
                        : premanentCityGlobal)
                    : allData.addressDetailsUploaded.permanentCity)


                $('#inputPermanentStatePersonalInformationForm').val(allData.addressDetailsUploaded.permanentState == null
                    ? (permanentStateGlobal == null
                        ? ''
                        : permanentStateGlobal)
                    : allData.addressDetailsUploaded.permanentState)

                $('#inputPermanentPinCodePersonalInformationForm').val(allData.addressDetailsUploaded.permanentPincode == null
                    ? (permanentPinCodeGlobal == null
                        ? ''
                        : permanentPinCodeGlobal)
                    : allData.addressDetailsUploaded.permanentPincode)
                 
                //$('#inputPermanentCityPersonalInformationForm').val(allData.addressDetailsUploaded.permanentState == null
                //    ? (presendCityGlobal == null
                //        ? ''
                //        : presendCityGlobal)
                //    : allData.addressDetailsUploaded.permanentState)

                //      permanentStateGlobal = allData.piF_Permanent_City
                //permanentPinCodeGlobal = allData.permanentPincode
                
                //presendAddress1Global = allData.addressDetailsUploaded.permanentAddress1
                 
                //$('#inputPermanentAddressPersonalInformationForm').val(allData.addressDetailsUploaded.permanentAddress1 == null ?allData.addressDetailsUploaded.presentAddress1==null?'':allData.addressDetailsUploaded.presentAddress1? "" : allData.addressDetailsUploaded.permanentAddress1);
                console.log(allData.candidate.name.split(' '))
                $('#inputSet6droppedatanystageName').val(allData.candidate.name.split(' ')[0])
               
                $('#inputSet6droppedatanystageSurname').val(allData.candidate.name.split(' ').slice(1).join(' '))


                $('#inputFirstNameRequisition').attr('readonly', true);
                $('#inputFirstNameRequisition').attr('disabled', true);
                $('#inputMiddleNameRequisition').attr('readonly', true);
                $('#inputMiddleNameRequisition').attr('disabled', true);
                $('#inputLastNameRequisition').attr('readonly', true);
                $('#inputLastNameRequisition').attr('disabled', true);
                let nameOfCandidateData = allData.candidate.name.split(' ')

                if (nameOfCandidateData.length == 1) {
                    $('#inputFirstNameRequisition').val(allData.candidate.name.split(' ')[0])
                    $('#inputMiddleNameRequisition').val('')
                    $('#inputLastNameRequisition').val('')
                    
                   
                } else if (nameOfCandidateData.length == 2) {
                    $('#inputFirstNameRequisition').val(allData.candidate.name.split(' ')[0])
                    $('#inputLastNameRequisition').val(allData.candidate.name.split(' ')[1])
                    $('#inputMiddleNameRequisition').val('')
                 
                } else if (nameOfCandidateData.length == 3) {
                    $('#inputFirstNameRequisition').val(allData.candidate.name.split(' ')[0])
                    $('#inputMiddleNameRequisition').val(allData.candidate.name.split(' ')[1])
                    $('#inputLastNameRequisition').val(allData.candidate.name.split(' ').slice(2).join(' '))
                     
                    
                } 
                //$('#textAreaSet6Homeaddressinfull').val(`${allData.addressDetailsUploaded.permanentAddress1}, ${allData.addressDetailsUploaded.permanentAddress2 == null ? "" : allData.addressDetailsUploaded.permanentAddress2}, ${allData.addressDetailsUploaded.permanentCity}, ${allData.addressDetailsUploaded.permanentState}, ${allData.addressDetailsUploaded.permanentPincode}`)
                loadOldParticularsPersonalInformationForm();
                debugger
                let postContains = allData.candidateProfile.postName.includes('(')
                if (postContains) {


                    let departmentDetailsStart = allData.candidateProfile.postName.indexOf("(")
                    let departmentDetailsEnd = allData.candidateProfile.postName.indexOf(")")
                    let departmentDetails
                    if (departmentDetailsStart !== -1 && departmentDetailsEnd !== -1 && departmentDetailsStart < departmentDetailsEnd) {
                        // Extract the text within parentheses
                        departmentDetails = allData.candidateProfile.postName.substring(departmentDetailsStart + 1, departmentDetailsEnd);
                    } else {
                        departmentDetails = allData.candidateProfile.postName
                    }


                    $('#inputDepartmentRequisition').val(departmentDetails)
                    $('#inputDepartmentRequisition').attr('readonly', true);
                    $('#inputDepartmentRequisition').attr('disabled', true);

                } else {
                    $('#inputDepartmentRequisition').val(allData.candidateProfile.postName)
                    $('#inputDepartmentRequisition').attr('readonly', true);
                    $('#inputDepartmentRequisition').attr('disabled', true);
                }
                //$('#inputNationalityDateofbirth').val(allData.candidateProfile.applicantDOB == null ? "" : formatDate_dd_mm_yyyy_New_Formate(new Date(Date.parse(formData.candidateProfileapplicantDOB))));
                $('#inputNationalityDateofbirth').val(allData.candidateProfile.applicantDOB == null ? "" : formatDate_dd_mm_yyyy_New_Formate(new Date(Date.parse(allData.candidateProfile.applicantDOB))));
                var Presentage = calculateAge(allData.candidateProfile.applicantDOB);
                $('#inputNationalityPresentage').val(Presentage)
                $('#inputNationalityAgeatMatriculation').val(Presentage)
                if (allData.otherDetailUploaded.reservationCategory == "obc") {
                    
                    $('#checkBoxObcApply').attr('checked', false);
                    $('#selectUndertakingForOBCCandidatesOnly').attr('disabled', true);
                    $('#selectUndertakingForOBCCandidatesOnlyParents').attr('disabled', true);
                    $('#inputUndertakingForOBCCandidatesOnlyParents').attr('disabled', true);
                    $('#inputUndertakingForOBCCandidatesVillage').attr('disabled', true);
                    $('#inputUndertakingForOBCCandidatesDistrict').attr('disabled', true);
                    $('#inputUndertakingForOBCCandidatesOnlyState').attr('disabled', true);
                    $('#inputUndertakingForOBCCandidatescommunitywhichrecognized').attr('disabled', true);
                    $('#inputUndertakingForOBCCandidatescommunitywhichrecognized').val(allData.otherDetailUploaded.reservationCategory)

                    $('#UndertakingForOBCCandidatesOnlyName').val(allData.candidate.name)

                    $('#inputUndertakingForOBCCandidatesOnly').val(allData.candidate.name)
                    $('#inputUndertakingForOBCCandidatesOnly').attr('readonly', true);
                    $('#inputUndertakingForOBCCandidatesOnly').attr('disabled', true);
                    $('#UndertakingForOBCCandidatesOnlyName').attr('readonly', true);
                    $('#UndertakingForOBCCandidatesOnlyName').attr('disabled', true);
                }
                else {
                    
                    $('#checkBoxObcApply').attr('checked', true);
                    $('#selectUndertakingForOBCCandidatesOnly').attr('disabled', true);
                    $('#selectUndertakingForOBCCandidatesOnlyParents').attr('disabled', true);
                    $('#inputUndertakingForOBCCandidatesOnlyParents').attr('disabled', true);
                    $('#inputUndertakingForOBCCandidatesVillage').attr('disabled', true);
                    $('#inputUndertakingForOBCCandidatesDistrict').attr('disabled', true);
                    $('#inputUndertakingForOBCCandidatesOnlyState').attr('disabled', true);
                    $('#inputUndertakingForOBCCandidatescommunitywhichrecognized').val('')
                    $('#inputUndertakingForOBCCandidatescommunitywhichrecognized').attr('disabled', true);
                    //$('#inputUndertakingForOBCCandidatesOnly').val('')
                    //$('#inputUndertakingForOBCCandidatesOnlyParents').val('')
                    //$('#selectUndertakingForOBCCandidatesOnly').val('')
                    $('#selectUndertakingForOBCCandidatesOnlyParents').val('')
                    $('#inputUndertakingForOBCCandidatesVillage').val('')
                    //$('#inputUndertakingForOBCCandidatesDistrict').val('')
                    //$('#inputUndertakingForOBCCandidatesOnlyState').val('')
                    $('#inputUndertakingForOBCCandidatesOnly').val('')
                    $('#inputUndertakingForOBCCandidatesOnly').attr('readonly', true);
                    $('#inputUndertakingForOBCCandidatesOnly').attr('disabled', true);
                    $('#UndertakingForOBCCandidatesOnlyName').val('')
                    $('#UndertakingForOBCCandidatesOnlyName').attr('readonly', true);
                    $('#UndertakingForOBCCandidatesOnlyName').attr('disabled', true);



                }

                
                console.log(allData.candidate.dateOfBirth)
                $('#inputDobRequisition').val(formatDate_dd_mm_yyyy(new Date(Date.parse(allData.candidate.dateOfBirth))));
                $('#inputDobRequisition').attr('readonly', true);
                $('#inputDobRequisition').attr('disabled', true);


                let department = allData.candidateOfferDetails.postName.split('(')
                // Find the index of the closing parenthesis ")"
                var departmentindex = department[1].indexOf(")");

                // Extract the substring from the beginning to the index of ")"
                var extractedTextdepartment = department[1].substring(0, departmentindex);

                $('#inputEmpDepartmentNominationGratuity').val(extractedTextdepartment)
                $('#inputEmpDepartmentNominationGratuity').attr('readonly', true);
                $('#inputEmpDepartmentNominationGratuity').attr('disabled', true);

                if (allData.otherDetailUploaded.reservationCategory == "General") {
                    $('#inputCastePersonalInformationForm').val('UR')
                } else {
                    var reservationCategory = allData.otherDetailUploaded.reservationCategory;
                    $('#inputCastePersonalInformationForm').val(reservationCategory.toUpperCase());

                }
                $('#inputCastePersonalInformationForm').attr('readonly', true);
                $('#inputCastePersonalInformationForm').attr('disabled', true);

                if (allData.candidateProfile.martialStatus == 'Unmarried') {
                    $('#radioIAmUnmarriedYes').attr('checked', true)
                    $('#radioIAmUnmarriedNo').attr('checked', false)
                    $('#radioIAmUnmarriedNo').attr('disabled', true)
                } else {

                    $('#radioIAmUnmarriedNo').attr('checked', true)
                    $('#radioIAmUnmarriedYes').attr('checked', false)
                    $('#radioIAmUnmarriedYes').attr('disabled', true)
                }

                console.log(allData.candidateProfile.profilePic)
                $("#imgPassportPhotoPersonalInformationForm").attr('src', allData.candidateProfile.profilePic);
                $("#formHImage").attr('src', allData.candidateProfile.profilePic);
                let permanentAddres = allData.addressDetail.filter(e => e.addressType == "Permanent Address");


                //for (let e of ) {


                //$('#inputEmployeeDojRequisition').val(allData.candidateOfferDetails.JoiningDate); // e.createdDate)
                //$('#inputEmployeeDojRequisition').prop('readonly', true)
                //$('#inputEmployeeDojRequisition').prop('disabled', true)

                 
                 
              

                for (let e of permanentAddres) {
                    console.log(e)
                    let addressOfCandidatee = e.address1 + " " + e.address2 + " " + e.city + " " + e.state + " " + e.country + " " + e.pincode + " " + e.country
                    $('#textareaEmpPermAddressNominationGratuity').val(addressOfCandidatee)
                    $('#textareaEmpPermAddressNominationGratuity').prop('readonly', true)

                    globalCityName = e.city


                    //if ($('#checkBoxObcApply').is(':checked')) {
                    //    $('#inputUndertakingForOBCCandidatesOnlyState').val("")
                    //}
                    //else {

                    //    $('#inputUndertakingForOBCCandidatesOnlyState').val(e.state)
                    //}
                }

                //

                //$('#inputDateHindiOptionForm').val(allData.candidateOfferDetails.joiningDate); // e.createdDate)
                //$('#inputDateHindiOptionForm').prop('readonly', true)
                //$('#inputDateHindiOptionForm').prop('disabled', true)


                //$('#inputDateEngOptionForm').val(allData.candidateOfferDetails.joiningDate); // e.createdDate)
                //$('#inputDateEngOptionForm').prop('readonly', true)
                //$('#inputDateEngOptionForm').prop('disabled', true)



                /*      $('#inputEmployeeDojRequisition').prop('editable', true)*/




                //inputEmployeeDojRequisition
                //candidateOfferDetails.joiningDate

                $('.page-loader').hide();


            },
            error: function (err) {
                $('.page-loader').hide();
                switch (err.status) {

                    case "401":
                        window.location.href = unAuthorisedUrl;
                        break;
                    case "403":
                        window.location.href = forbiddenUrl;
                        break;
                    default:

                        break;
                }
            },

            failure: function (response) {
                // alert(response.d);
                $('.page-loader').hide();
            }
        });
    }
    getDataFromApi();
}

var piF_Nationality_Global = ''
var permanentAddress1Global
var permanentAddress2Global
var premanentCityGlobal
var permanentStateGlobal
var permanentPinCodeGlobal
 
function loadAllDataOfJoiningCandidate() {



    //alert('Not running Api Call due to Return ');        
    //var url = apiBaseUrlHrTourServices + "/api/TourListing/GetRecipientTourRequest/" + empObject.empId.toString();
    var url = apiBaseUrlHr + "/api/CandidateJoining/GetCandidateJoiningDetails?CandidateId=" + candidateId;
    url = url.replace(/[\u200B-\u200D\uFEFF]/g, '');
    $.ajax({
        type: "GET",
        url: url,
        //data: '{}',
        contentType: "application/json; charset=utf-8",
        dataType: "json",

        beforeSend: function () {

            $('.page-loader').show();

        },
        success: function (response) {
             
            if (response.data == null) {
                $('.page-loader').hide();
                return
            }
            console.log(response.data)
            allData = response.data[0];
            console.log(allData)

            //

             
           
            permanentAddress1Global = allData.piF_Permanent_Address_1
            permanentAddress2Global = allData.piF_Permanent_Address_2
            premanentCityGlobal = allData.piF_Permanent_City
            permanentStateGlobal = allData.piF_Permanent_State
            permanentPinCodeGlobal = allData.piF_Permanent_Pin_Code
             
            //presendAddress1Global = allData.piF_Permanent_Address_1
            //presendAddress1Global = allData.piF_Permanent_Address_1
            //presendAddress1Global = allData.piF_Permanent_Address_1

           
            
            loadNewParticularsPersonalInformationForm();
            $('#inputPlaceDeclarationRequisition').val(allData.candidateLocation == null ? "New Delhi" : allData.candidateLocation)
        
            console.log(allData.piF_Nationality)
            $('#inputNationalityYourreligion').val(allData.religion) 
            piF_Nationality_Global = allData.piF_Nationality
            $('#inputCandidateNationality').val(piF_Nationality_Global == null ? "" : piF_Nationality_Global);
            //$('#inputCandidateNationality').val(allData.piF_Nationality)
            if (allData.isSameAsAboveChecked) {
                $('#checkboxTemporaryAddressPersonalInformationForm').attr('checked', true)
                $('#inputTemporaryHouseNoPersonalInformationForm').val(allData.piF_H_No)
                $('#inputTemporaryAddressPersonalInformationForm').val(allData.piF_Permanent_Address_1)
                $('#inputTemporaryAddress2PersonalInformationForm').val(allData.piF_Permanent_Address_2)
                $('#inputTemporaryCityPersonalInformationForm').val(allData.piF_Permanent_City)
                $('#inputTemporaryStatePersonalInformationForm').val(allData.piF_Permanent_State)
                $('#inputTemporaryPinCodePersonalInformationForm').val(allData.piF_Permanent_Pin_Code)


                $('#inputTemporaryHouseNoPersonalInformationForm').prop('readonly', true)
                $('#inputTemporaryHouseNoPersonalInformationForm').prop('disabled', true)

                $('#inputTemporaryAddressPersonalInformationForm').prop('readonly', true)
                $('#inputTemporaryAddressPersonalInformationForm').prop('disabled', true)

                $('#inputTemporaryAddress2PersonalInformationForm').prop('readonly', true)
                $('#inputTemporaryAddress2PersonalInformationForm').prop('disabled', true)

                $('#inputTemporaryCityPersonalInformationForm').prop('readonly', true)
                $('#inputTemporaryCityPersonalInformationForm').prop('disabled', true)

                $('#inputTemporaryStatePersonalInformationForm').prop('readonly', true)
                $('#inputTemporaryStatePersonalInformationForm').prop('disabled', true)


                $('#inputTemporaryPinCodePersonalInformationForm').prop('readonly', true)
                $('#inputTemporaryPinCodePersonalInformationForm').prop('disabled', true)
                //$('.temporarySame').hide();
            } else {

                $('#inputTemporaryHouseNoPersonalInformationForm').val(allData.piF_Present_H_No)
                $('#inputTemporaryAddressPersonalInformationForm').val(allData.piF_Present_Address_1)
                $('#inputTemporaryAddress2PersonalInformationForm').val(allData.piF_Present_Address_2)
                $('#inputTemporaryCityPersonalInformationForm').val(allData.piF_Present_City)
                $('#inputTemporaryStatePersonalInformationForm').val(allData.piF_Present_State)
                $('#inputTemporaryPinCodePersonalInformationForm').val(allData.piF_Present_Pin_Code)

                $('#checkboxTemporaryAddressPersonalInformationForm').attr('checked', false)

                $('#inputTemporaryHouseNoPersonalInformationForm').prop('readonly', false)
                $('#inputTemporaryHouseNoPersonalInformationForm').prop('disabled', false)

                $('#inputTemporaryAddressPersonalInformationForm').prop('readonly', false)
                $('#inputTemporaryAddressPersonalInformationForm').prop('disabled', false)

                $('#inputTemporaryAddress2PersonalInformationForm').prop('readonly', false)
                $('#inputTemporaryAddress2PersonalInformationForm').prop('disabled', false)

                $('#inputTemporaryCityPersonalInformationForm').prop('readonly', false)
                $('#inputTemporaryCityPersonalInformationForm').prop('disabled', false)

                $('#inputTemporaryStatePersonalInformationForm').prop('readonly', false)
                $('#inputTemporaryStatePersonalInformationForm').prop('disabled', false)


                $('#inputTemporaryPinCodePersonalInformationForm').prop('readonly', false)
                $('#inputTemporaryPinCodePersonalInformationForm').prop('disabled', false)
                $('.temporarySame').show();
            }
            if (allData.isSameAsPermanentChecked) {
                $('#checkboxHomeTownSameAddressAsPermanent').attr('checked', true)


                $('#inputHomeTownHouseNoPersonalInformationForm').val(allData.piF_H_No)

                $('#inputHomeTownAddressPersonalInformationForm').val(allData.piF_Permanent_Address_1)
                $('#inputHomeTownAddress2PersonalInformationForm').val(allData.piF_Permanent_Address_2)
                $('#inputHomeTownCityPersonalInformationForm').val(allData.piF_Permanent_City)
                $('#inputHomeTownStatePersonalInformationForm').val(allData.piF_Permanent_State)
                $('#inputHomeTownPinCodePersonalInformationForm').val(allData.piF_Permanent_Pin_Code)



                $('#inputHomeTownHouseNoPersonalInformationForm').prop('readonly', true)
                $('#inputHomeTownHouseNoPersonalInformationForm').prop('disabled', true)

                $('#inputHomeTownAddressPersonalInformationForm').prop('readonly', true)
                $('#inputHomeTownAddressPersonalInformationForm').prop('disabled', true)

                $('#inputHomeTownAddress2PersonalInformationForm').prop('readonly', true)
                $('#inputHomeTownAddress2PersonalInformationForm').prop('disabled', true)

                $('#inputHomeTownCityPersonalInformationForm').prop('readonly', true)
                $('#inputHomeTownCityPersonalInformationForm').prop('disabled', true)

                $('#inputHomeTownStatePersonalInformationForm').prop('readonly', true)
                $('#inputHomeTownStatePersonalInformationForm').prop('disabled', true)


                $('#inputHomeTownPinCodePersonalInformationForm').prop('readonly', true)
                $('#inputHomeTownPinCodePersonalInformationForm').prop('disabled', true)
                //let houseNumber = allData.addressDetail[1].
                //$('.homeTownSame').hide();
                $('#divTemporary').hide();
            } else if (allData.isSameAsTemporaryChecked) {
                $('#divPermanent').hide()

                $('#checkboxHomeTownSameAddressAsTemporary').attr('checked', true)





                $('#inputHomeTownHouseNoPersonalInformationForm').val(allData.piF_Present_H_No)

                $('#inputHomeTownAddressPersonalInformationForm').val(allData.piF_Present_Address_1)
                $('#inputHomeTownAddress2PersonalInformationForm').val(allData.piF_Present_Address_2)
                $('#inputHomeTownCityPersonalInformationForm').val(allData.piF_Present_City)
                $('#inputHomeTownStatePersonalInformationForm').val(allData.piF_Present_State)
                $('#inputHomeTownPinCodePersonalInformationForm').val(allData.piF_Present_Pin_Code)



                $('#inputHomeTownHouseNoPersonalInformationForm').prop('readonly', true)
                $('#inputHomeTownHouseNoPersonalInformationForm').prop('disabled', true)

                $('#inputHomeTownAddressPersonalInformationForm').prop('readonly', true)
                $('#inputHomeTownAddressPersonalInformationForm').prop('disabled', true)

                $('#inputHomeTownAddress2PersonalInformationForm').prop('readonly', true)
                $('#inputHomeTownAddress2PersonalInformationForm').prop('disabled', true)

                $('#inputHomeTownCityPersonalInformationForm').prop('readonly', true)
                $('#inputHomeTownCityPersonalInformationForm').prop('disabled', true)

                $('#inputHomeTownStatePersonalInformationForm').prop('readonly', true)
                $('#inputHomeTownStatePersonalInformationForm').prop('disabled', true)


                $('#inputHomeTownPinCodePersonalInformationForm').prop('readonly', true)
                $('#inputHomeTownPinCodePersonalInformationForm').prop('disabled', true)
            }
            else {
                $('#checkboxHomeTownSameAddressAsPermanent').attr('checked', false)
                $('#checkboxHomeTownSameAddressAsTemporary').attr('checked', false)

                $('#inputHomeTownHouseNoPersonalInformationForm').val(allData.piF_HomeTown_HNo)

                $('#inputHomeTownAddressPersonalInformationForm').val(allData.piF_HomeTown_Address1)
                $('#inputHomeTownAddress2PersonalInformationForm').val(allData.piF_HomeTown_Address2)
                $('#inputHomeTownCityPersonalInformationForm').val(allData.piF_HomeTown_City)
                $('#inputHomeTownStatePersonalInformationForm').val(allData.piF_HomeTown_State)
                $('#inputHomeTownPinCodePersonalInformationForm').val(allData.piF_HomeTown_Pin_Code)


                $('#inputHomeTownHouseNoPersonalInformationForm').prop('readonly', false)
                $('#inputHomeTownHouseNoPersonalInformationForm').prop('disabled', false)

                $('#inputHomeTownAddressPersonalInformationForm').prop('readonly', false)
                $('#inputHomeTownAddressPersonalInformationForm').prop('disabled', false)

                $('#inputHomeTownAddress2PersonalInformationForm').prop('readonly', false)
                $('#inputHomeTownAddress2PersonalInformationForm').prop('disabled', false)

                $('#inputHomeTownCityPersonalInformationForm').prop('readonly', false)
                $('#inputHomeTownCityPersonalInformationForm').prop('disabled', false)

                $('#inputHomeTownStatePersonalInformationForm').prop('readonly', false)
                $('#inputHomeTownStatePersonalInformationForm').prop('disabled', false)


                $('#inputHomeTownPinCodePersonalInformationForm').prop('readonly', false)
                $('#inputHomeTownPinCodePersonalInformationForm').prop('disabled', false)

                $('.homeTownSame').show();
                $('#divTemporary').hide();
                $('#divPermanent').show()

            }


            if ($('#checkBoxObcApply').is(':checked')) {
                $('#selectUndertakingForOBCCandidatesOnly').val('')
                //$('#inputUndertakingForOBCCandidatesOnly').val('')
                $('#inputUndertakingForOBCCandidatesOnlyParents').val('')
                $('#selectUndertakingForOBCCandidatesOnlyParents').val('')
            } else {
                $('#selectUndertakingForOBCCandidatesOnly').val(allData.candidateTitle)
                //$('#inputUndertakingForOBCCandidatesOnly').val('')
                $('#inputUndertakingForOBCCandidatesOnlyParents').val(allData.guardianName)
                $('#selectUndertakingForOBCCandidatesOnlyParents').val(allData.guardianTitle)
            }
            //if (allData.isSameAsTemporaryChecked) {
            //    $('#checkboxHomeTownSameAddressAsTemporary').attr('checked', true)
            //    //$('.homeTownSame').hide();
            //    //$('#divPermanent').hide();
            //} else {
            //    $('#checkboxHomeTownSameAddressAsTemporary').attr('checked', false)
            //    $('.homeTownSame').show();
            //    $('#divPermanent').show();
            //}
            //loadJoiningReportInformationForm()
             


            //
            
            $('#inputReturnofAssetsanreturnenclosednamely').val(allData.return_of_Asset_Year == null ? "" : formatDate_dd_mm_yyyy_New_Formate(new Date(Date.parse(allData.return_of_Asset_Year))))

            $('#inputAppointmentDateHindiJoiningReport').val(allData.appointmentDate == null ? "" : formatDate_dd_mm_yyyy_New_Formate(new Date(Date.parse(allData.appointmentDate))))
            $('#inputAppointmentDateEngJoiningReport').val(allData.appointmentDate ==null?"":formatDate_dd_mm_yyyy_New_Formate(new Date(Date.parse(allData.appointmentDate))))
            $('#inputMarriageDatePersonalInformationForm').val(formatDate_yyyy_mm_dd(new Date(Date.parse(allData.piF_Date_of_Marriage))))
            
            //var relationshipOption = [
            //    "Select",
            //    "No church tax liability",
            //    "Evangelical",
            //    "Roman Catholic",
            //    "Reformed (Evangelical)",
            //    "French reformed",
            //    "Old Catholic",
            //    "Israelite",
            //    "Free religion of the den",
            //    "New apostolic",
            //    "Jehovah's witness",
            //    "Mohammedan",
            //    "Mormon",
            //    "No denomination",
            //    "Non-dogmatic rel. MAINZ",
            //    "Non-dogmatic rel. OFFEN.",
            //    "Non-dogmatic rel. PFALZ",
            //    "Free church Alzey",
            //    "Hebrew reg. WUERTBG.",
            //    "Hebrew state",
            //    "Hebrew reg. BADEN",
            //    "Protestant-Lutheran",
            //    "Orthodox",
            //    "Hindu",
            //    "Apostolic",
            //    "Buddhist",
            //    "Christian Reformed",
            //    "Mennonite Church",
            //    "Moravian Congregation",
            //    "Evang. Lutheran Church",
            //    "Islam",
            //    "Jewish",
            //    "Muslim",
            //    "Netherl. Reformed Church",
            //    "Pentecostal Church",
            //    "Oecumenic",
            //    "Charismatic Church",
            //    "Protestant",
            //    "Baptist",
            //    "Jewish Culture Tax",
            //    "Sunni Muslim",
            //    "Shi'a Muslim",
            //    "Jain",
            //    "Sikh",
            //    "Christian"
            //];

            //var selectOptions = '';

            //// Loop through the churchTaxOptions array
            //for (var i = 0; i < relationshipOption.length; i++) {
            //    // Append the option to the selectOptions string
            //    var selected = (allData.religion == relationshipOption[i]) ? 'selected' : '';
            //    selectOptions += `<option ${selected} value="${i}">${relationshipOption[i]}</option>\n`;
            //}
            //document.getElementById('inputReligionPersonalInformationForm').innerHTML = selectOptions


            //loadNominationAndGratuityForm()
            $('.page-loader').hide();


        },
        error: function (err) {
            $('.page-loader').hide();

            switch (err.status) {

                case "401":
                    window.location.href = unAuthorisedUrl;
                    break;
                case "403":
                    window.location.href = forbiddenUrl;
                    break;
                default:

                    break;
            }
        },

        failure: function (response) {

            // alert(response.d);
            $('.page-loader').hide();
        }
    });

}
//function loadAllDataOfEducationCandidate(objData) {
//
//    function getDataFromApi() {

//        //alert('Not running Api Call due to Return ');
//        //var url = apiBaseUrlHrTourServices + "/api/TourListing/GetRecipientTourRequest/" + empObject.empId.toString();
//        var url = apiBaseUrlHr + "/api/CandidateJoining/GetCandidateJoiningDetails";
//        url = url.replace(/[\u200B-\u200D\uFEFF]/g, '');
//        $.ajax({
//            type: "GET",
//            url: url,
//            //data: '{}',
//            contentType: "application/json; charset=utf-8",
//            dataType: "json",

//            beforeSend: function () {

//                $('.page-loader').show();

//            },
//            success: function (response) {

//                allData = response.data;
//                console.log(allData)
//                loadNewParticularsPersonalInformationForm();

//                $('.page-loader').hide();


//            },
//            error: function (err) {
//                $('.page-loader').hide();
//                switch (err.status) {

//                    case "401":
//                        window.location.href = unAuthorisedUrl;
//                        break;
//                    case "403":
//                        window.location.href = forbiddenUrl;
//                        break;
//                    default:

//                        break;
//                }
//            },

//            failure: function (response) {
//                // alert(response.d);
//                $('.page-loader').hide();
//            }
//        });
//    }
//    getDataFromApi();
//}

//function loadJoiningReportInformationForm() {
//    function getFrontEndObject() {

//        var arrObjects = [
//            { modelName: '', elementType: 'input', frontFieldName: 'inputAppointmentNoHindiJoiningReport', apiFieldName: 'AppointmentNoHindiJoiningReport', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
//            { modelName: '', elementType: 'inputdate', frontFieldName: 'inputAppointmentDateHindiJoiningReport', apiFieldName: 'AppointmentDateHindiJoiningReport', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
//            { modelName: '', elementType: 'input', frontFieldName: 'inputPostHindiJoiningReport', apiFieldName: 'PostName', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false, isEditable: false },
//            { modelName: '', elementType: 'inputdate', frontFieldName: 'inputReportDateHindiJoiningReport', apiFieldName: 'ReportDateHindiJoiningReport', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
//            { modelName: '', elementType: 'inputtime', frontFieldName: 'inputReportTimeHindiJoiningReport', apiFieldName: 'ReportTimeHindiJoiningReport', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
//            { modelName: '', elementType: 'input', frontFieldName: 'inputAppointmentNoEngJoiningReport', apiFieldName: 'AppointmentNoEngJoiningReport', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
//            { modelName: '', elementType: 'inputdate', frontFieldName: 'inputAppointmentDateEngJoiningReport', apiFieldName: 'AppointmentDateEngJoiningReport', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
//            { modelName: '', elementType: 'input', frontFieldName: 'inputPostEngJoiningReport', apiFieldName: 'PostName', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
//            { modelName: '', elementType: 'inputdate', frontFieldName: 'inputReportDateEngJoiningReport', apiFieldName: 'ReportDateEngJoiningReport', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
//            { modelName: '', elementType: 'input', frontFieldName: 'inputReportTimeEngJoiningReport', apiFieldName: 'ReportTimeEngJoiningReport', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
//            { modelName: '', elementType: 'input', frontFieldName: 'inputNameDeclarationJoiningReport', apiFieldName: 'NameDeclarationJoiningReport', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
//            { modelName: '', elementType: 'input', frontFieldName: 'inputDesignationDeclarationJoiningReport', apiFieldName: 'DesignationDeclarationJoiningReport', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
//            { modelName: '', elementType: 'input', frontFieldName: 'input DateDeclarationJoiningReport', apiFieldName: 'DateDeclarationJoiningReport', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: false, isEditable: false },
//            { modelName: '', elementType: 'img', frontFieldName: 'inputUploadedImage', apiFieldName: 'DateDeclarationJoiningReport', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
//        ];
//        newJoiningReportInfomation = arrObjects;
//        return arrObjects;

//    }
//    if (allData.length != 0) {
//        var objApiData = {};


//        for (let e in allData) {
//            objApiData[capitalizeFirstLetter(e)] = allData[e];
//        }

//        FillApiDataIntoFrontEnd(getFrontEndObject(), objApiData, 5);

//    }
//}




//function loadNominationAndGratuityForm() {
//    function getFrontEndObject() {

//        var arrObjects = [
//            { modelName: '', elementType: 'input', frontFieldName: 'inputNomineeNameNominationGratuity', apiFieldName: 'AppointmentNoHindiJoiningReport', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
//            { modelName: '', elementType: 'select', frontFieldName: 'selectNomineeRelationNominationGratuity', apiFieldName: 'AppointmentDateHindiJoiningReport', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
//            { modelName: '', elementType: 'input', frontFieldName: 'inputNomineeAgeNominationGratuity', apiFieldName: 'PostHindiJoiningReport', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false, isEditable: false },
//            { modelName: '', elementType: 'input', frontFieldName: 'inputGratuityPortionNominationGratuity', apiFieldName: 'ReportDateHindiJoiningReport', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
//            { modelName: '', elementType: 'input', frontFieldName: 'textareaNomineeAddressNominationGratuity', apiFieldName: 'ReportTimeHindiJoiningReport', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
//            { modelName: '', elementType: 'input', frontFieldName: 'inputEmployeeNameNominationGratuity', apiFieldName: 'Name', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
//            { modelName: '', elementType: 'select', frontFieldName: 'selectEmpGenderNominationGratuity', apiFieldName: 'Gender', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
//            { modelName: '', elementType: 'input', frontFieldName: 'inputEmpReligionNominationGratuity', apiFieldName: 'PostEngJoiningReport', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
//            { modelName: '', elementType: 'input', frontFieldName: 'inputEmpMartialStatusNominationGratuity', apiFieldName: 'ReportDateEngJoiningReport', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
//            { modelName: '', elementType: 'input', frontFieldName: 'inputEmpDepartmentNominationGratuity', apiFieldName: 'ReportTimeEngJoiningReport', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
//            { modelName: '', elementType: 'input', frontFieldName: 'inputEmpPostNominationGratuity', apiFieldName: 'PostName', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
//            { modelName: '', elementType: 'input', frontFieldName: 'inputEmpAppointmentDateNominationGratuity', apiFieldName: 'DesignationDeclarationJoiningReport', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
//            { modelName: '', elementType: 'textarea', frontFieldName: 'textareaEmpPermAddressNominationGratuity', apiFieldName: 'DateDeclarationJoiningReport', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },

//            { modelName: '', elementType: 'input', frontFieldName: 'inputVillageNominationGratuity', apiFieldName: 'DateDeclarationJoiningReport', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
//            { modelName: '', elementType: 'input', frontFieldName: 'inputThana', apiFieldName: 'DateDeclarationJoiningReport', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
//            { modelName: '', elementType: 'input', frontFieldName: 'inputSubDivisionNominationGratuity', apiFieldName: 'DateDeclarationJoiningReport', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
//            { modelName: '', elementType: 'input', frontFieldName: 'inputPostOffice', apiFieldName: 'DateDeclarationJoiningReport', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
//            { modelName: '', elementType: 'input', frontFieldName: 'inputDistrictNominationGratuity', apiFieldName: 'DateDeclarationJoiningReport', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
//            { modelName: '', elementType: 'input', frontFieldName: 'inputState', apiFieldName: 'DateDeclarationJoiningReport', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
//            { modelName: '', elementType: 'input', frontFieldName: 'inputPinCodeNominationGratuity', apiFieldName: 'DateDeclarationJoiningReport', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },


//            { modelName: '', elementType: 'input', frontFieldName: 'inputPlaceNominationGratuity', apiFieldName: 'DateDeclarationJoiningReport', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
//            { modelName: '', elementType: 'inputdate', frontFieldName: 'inputDateNominationGratuity', apiFieldName: 'DateDeclarationJoiningReport', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
//            { modelName: '', elementType: 'img', frontFieldName: 'inputUploadedImage', apiFieldName: 'DateDeclarationJoiningReport', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
//            { modelName: '', elementType: 'input', frontFieldName: 'inputNameAddressWitness1NominationGratuity', apiFieldName: 'DateDeclarationJoiningReport', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
//            { modelName: '', elementType: 'input', frontFieldName: 'inputNameAddressWitness2NominationGratuity', apiFieldName: 'DateDeclarationJoiningReport', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
//            { modelName: '', elementType: 'input', frontFieldName: 'inputPlaceWitnessNominationGratuity', apiFieldName: 'DateDeclarationJoiningReport', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },

//            { modelName: '', elementType: 'inputdate', frontFieldName: 'inputDateWitnessNominationGratuity', apiFieldName: 'DateDeclarationJoiningReport', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
//            { modelName: '', elementType: 'img', frontFieldName: 'inputWitnessSignature', apiFieldName: 'DateDeclarationJoiningReport', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
//            { modelName: '', elementType: 'img', frontFieldName: 'inputWitnessSignature2', apiFieldName: 'DateDeclarationJoiningReport', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
//            { modelName: '', elementType: 'img', frontFieldName: 'inputUploadedImage', apiFieldName: 'DateDeclarationJoiningReport', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },

//            { modelName: '', elementType: 'inputdate', frontFieldName: 'inputDateNominationGratuity', apiFieldName: 'DateDeclarationJoiningReport', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
//            { modelName: '', elementType: 'input', frontFieldName: 'inputDesignationNominationGratuity', apiFieldName: 'DateDeclarationJoiningReport', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
//            { modelName: '', elementType: 'input', frontFieldName: 'inputUploadedImage', apiFieldName: 'DateDeclarationJoiningReport', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
//            { modelName: '', elementType: 'inputdate', frontFieldName: 'inputDeclarationDateDesignationNominationGratuity', apiFieldName: 'DateDeclarationJoiningReport', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
//        ];
//        newNominationAndGratuityInformation = arrObjects;
//        return arrObjects;

//    }
//    if (allData.length != 0) {
//        var objApiData = {};


//        for (let e in allData) {
//            objApiData[capitalizeFirstLetter(e)] = allData[e];
//        }

//        FillApiDataIntoFrontEnd(getFrontEndObject(), objApiData, 5);

//    }
//}


$(document).ready(function () {
    
    let inputValue = $(".form-control")
    inputValue.on('focus', function () {


        $(this).removeClass("error")

    })
    inputValue.on('keyup', function () {


        $(this).removeClass("error")

    })

    inputValue.on('blur', function () {


        $(this).removeClass("error")

    })


})
function toastHr(value) {
    Toastify({
        text: `${value}`,
        className: "info",

        style: {
            background: "linear-gradient(#ce3753, #db0300)",
            color: "#fff"

        },
        duration: 4000,
    }).showToast();
}

function validateInput(inputString) {
    // Define the regular expression pattern to match any numbers, empty strings, spaces, or special characters
    var pattern = /^[^\d\s]+$/; // Matches any string that does not contain digits or spaces

    // Check if the input string matches the pattern
    return pattern.test(inputString);
}
function validationFprFormA() {
    
    let inputChildrenNumberPersonalInformationForm = $('#inputChildrenNumberPersonalInformationForm').val()
    let inputGrossTaxablePersonalInformationForm = $('#inputGrossTaxablePersonalInformationForm').val()
    let inputTaxDeductedPersonalInformationForm = $('#inputTaxDeductedPersonalInformationForm').val()
    let inputPensionPersonalInformationForm = $('#inputPensionPersonalInformationForm').val()
    let inputOtherTaxIncomePersonalInformationForm = $('#inputOtherTaxIncomePersonalInformationForm').val()
    let inputReligionPersonalInformationForm = $('#inputReligionPersonalInformationForm').val()
    let inputPermanentAddressPersonalInformationForm = $('#inputPermanentAddressPersonalInformationForm').val()
    let inputPermanentCityPersonalInformationForm = $('#inputPermanentCityPersonalInformationForm').val()
    let inputBankNamePersonalInformationForm = $('#inputBankNamePersonalInformationForm').val()
    let inputBranchAddressPersonalInformationForm = $('#inputBranchAddressPersonalInformationForm').val()
    let inputAccountNumberPersonalInformationForm = $('#inputAccountNumberPersonalInformationForm').val()
    let inputMicrCodePersonalInformationForm = $('#inputMicrCodePersonalInformationForm').val()
    let inputIfscCodePersonalInformationForm = $('#inputIfscCodePersonalInformationForm').val()
    let selectBankNaturePersonalInformationForm = $('#selectBankNaturePersonalInformationForm').val()
    let inputBloodGroupPersonalInformationForm = $('#inputBloodGroupPersonalInformationForm').val()

    if (inputBloodGroupPersonalInformationForm == 'Select') {
        toastHr('Please select the Blood Group')
        $('#inputBloodGroupPersonalInformationForm').addClass("error");
        return
    }
    if (inputBloodGroupPersonalInformationForm == '') {
        toastHr('Please select the Blood Group')
        $('#inputBloodGroupPersonalInformationForm').addClass("error");
        return
    }


    if (inputReligionPersonalInformationForm == 'Select') {
        toastHr('Please select the Religion')
        $('#inputReligionPersonalInformationForm').addClass("error");
        return
    }
    if (inputReligionPersonalInformationForm == '') {
        toastHr('Please select the Religion')
        $('#inputReligionPersonalInformationForm').addClass("error");
        return
    }
    if (inputReligionPersonalInformationForm == null) {
        toastHr('Please select the Religion')
        $('#inputReligionPersonalInformationForm').addClass("error");
        return
    }
    if (inputPermanentAddressPersonalInformationForm.trim() == "") {
        toastHr('Permanent Address is Compulsory')
        $('#inputPermanentAddressPersonalInformationForm').addClass("error");
        return
    }
    if (inputPermanentCityPersonalInformationForm.trim() == "") {
        toastHr('Permanent City is Compulsory')
        $('#inputPermanentCityPersonalInformationForm').addClass("error");
        return
    }
    
    if (inputBankNamePersonalInformationForm.trim() == "") {
        toastHr('Name of Bank is Compulsory')
        $('#inputBankNamePersonalInformationForm').addClass("error");
        return
    }

    if (inputBranchAddressPersonalInformationForm.trim() == "") {
        toastHr('Branch Address is Compulsory')
        $('#inputBranchAddressPersonalInformationForm').addClass("error");
        return
    }

    if (validateInput(inputAccountNumberPersonalInformationForm)) {
        toastHr('Account number is Compulsory and contains only number')
        $('#inputAccountNumberPersonalInformationForm').addClass("error");
        return
    }

    //if (inputMicrCodePersonalInformationForm.trim() == "") {
    //    toastHr('MICR Code of the Bank is Compulsory')
    //    $(this).addClass("error");
    //    return
    //}
    if (inputIfscCodePersonalInformationForm.trim() == "") {
        toastHr('IFSC Code of the Bank is Compulsory')
        $('#inputIfscCodePersonalInformationForm').addClass("error");
        return
    }
    if (selectBankNaturePersonalInformationForm == 'Select One.') {
        toastHr('Please select the Nature of Bank A/C')
        $('#selectBankNaturePersonalInformationForm').addClass("error");
        return
    }
    if (validateInput(inputChildrenNumberPersonalInformationForm)) {
        toastHr('Number of Children contains only number')
        $('#inputChildrenNumberPersonalInformationForm').addClass("error");
        return
    }
    if (validateInput(inputGrossTaxablePersonalInformationForm)) {
        toastHr('Income from Parent Organization contains only number')
        $('#inputGrossTaxablePersonalInformationForm').addClass("error");
        return
    }
    if (validateInput(inputTaxDeductedPersonalInformationForm)) {
        toastHr('Income from Parent Organization Tax Deduction contains only number')
        $('#inputTaxDeductedPersonalInformationForm').addClass("error");
        return
    }
    if (validateInput(inputPensionPersonalInformationForm)) {
        toastHr('Pension, if any contains only number')
        $('#inputPensionPersonalInformationForm').addClass("error");
        return
    }
    if (validateInput(inputOtherTaxIncomePersonalInformationForm)) {
        toastHr('Other Taxable Income, if any contains only number')
        $('#inputOtherTaxIncomePersonalInformationForm').addClass("error");
        return
    }
    return true
}
function saveCandidateJoining_submit(e) {
    
    let validX = validationFprFormA()
    if (validX == undefined) {
        return
    }
    // FillApiDataIntoFrontEnd(newParticularsPersonal, '', 3);
    //const formDataNew = new FormData();
    //formDataNew.append('piF_Country_of_Birth',)
    let inputBirthCountryPersonalInformationForm = $('#inputBirthCountryPersonalInformationForm').val()
    let inputBirthPlacePersonalInformationForm = $('#inputBirthPlacePersonalInformationForm').val()
    let inputNationalityPersonalInformationForm = $('#inputNationalityPersonalInformationForm').val()
    let inputMotherTonguePersonalInformationForm = $('#inputMotherTonguePersonalInformationForm').val()
    let inputBloodGroupPersonalInformationForm = $('#inputBloodGroupPersonalInformationForm').val()
    let inputMarriageDatePersonalInformationForm = $('#inputMarriageDatePersonalInformationForm').val()
    let inputSpouseNamePersonalInformationForm = $('#inputSpouseNamePersonalInformationForm').val()
    let selectSpouseWorkingStatusPersonalInformationForm = $('#selectSpouseWorkingStatusPersonalInformationForm').val()
    let inputSpouseWorkCompanyPersonalInformationForm = $('#inputSpouseWorkCompanyPersonalInformationForm').val()
    let inputSpouseEmployeeCodePersonalInformationForm = $('#inputSpouseEmployeeCodePersonalInformationForm').val()
    let inputChildrenNumberPersonalInformationForm = $('#inputChildrenNumberPersonalInformationForm').val()
    let inputPermanentHouseNoPersonalInformationForm = $('#inputPermanentHouseNoPersonalInformationForm').val()
    let inputPermanentAddressPersonalInformationForm = $('#inputPermanentAddressPersonalInformationForm').val()
    let inputPermanentAddress2PersonalInformationForm = $('#inputPermanentAddress2PersonalInformationForm').val()
    let inputPermanentCityPersonalInformationForm = $('#inputPermanentCityPersonalInformationForm').val()

    let inputPermanentStatePersonalInformationForm = $('#inputPermanentStatePersonalInformationForm').val()
    let inputPermanentPinCodePersonalInformationForm = $('#inputPermanentPinCodePersonalInformationForm').val()
    let inputTemporaryHouseNoPersonalInformationForm = $('#inputTemporaryHouseNoPersonalInformationForm').val()
    let inputTemporaryAddressPersonalInformationForm = $('#inputTemporaryAddressPersonalInformationForm').val()

    let inputTemporaryAddress2PersonalInformationForm = $('#inputTemporaryAddress2PersonalInformationForm').val()
    let inputTemporaryCityPersonalInformationForm = $('#inputTemporaryCityPersonalInformationForm').val()
    let inputTemporaryStatePersonalInformationForm = $('#inputTemporaryStatePersonalInformationForm').val()
    let inputTemporaryPinCodePersonalInformationForm = $('#inputTemporaryPinCodePersonalInformationForm').val()

    let inputHomeTownHouseNoPersonalInformationForm = $('#inputHomeTownHouseNoPersonalInformationForm').val()
    let inputHomeTownAddressPersonalInformationForm = $('#inputHomeTownAddressPersonalInformationForm').val()
    let inputHomeTownAddress2PersonalInformationForm = $('#inputHomeTownAddress2PersonalInformationForm').val()
    let inputHomeTownCityPersonalInformationForm = $('#inputHomeTownCityPersonalInformationForm').val()

    let inputHomeTownStatePersonalInformationForm = $('#inputHomeTownStatePersonalInformationForm').val()
    let inputHomeTownPinCodePersonalInformationForm = $('#inputHomeTownPinCodePersonalInformationForm').val()
    let inputPhoneNumberPersonalInformationForm = $('#inputPhoneNumberPersonalInformationForm').val()
    let inputEmergencyNumberPersonalInformationForm = $('#inputEmergencyNumberPersonalInformationForm').val()

    let inputEmergencyNamePersonalInformationForm = $('#inputEmergencyNamePersonalInformationForm').val()
    let inputEmailPersonalInformationForm = $('#inputEmailPersonalInformationForm').val()
    let inputPassportNumberPersonalInformationForm = $('#inputPassportNumberPersonalInformationForm').val()
    let inputSpfPersonalInformationForm = $('#inputSpfPersonalInformationForm').val()

    let inputBankNamePersonalInformationForm = $('#inputBankNamePersonalInformationForm').val()
    let inputBranchAddressPersonalInformationForm = $('#inputBranchAddressPersonalInformationForm').val()
    let inputAccountNumberPersonalInformationForm = $('#inputAccountNumberPersonalInformationForm').val()
    let inputMicrCodePersonalInformationForm = $('#inputMicrCodePersonalInformationForm').val()

    let inputIfscCodePersonalInformationForm = $('#inputIfscCodePersonalInformationForm').val()
    let selectBankNaturePersonalInformationForm = $('#selectBankNaturePersonalInformationForm').val()
    let inputGrossTaxablePersonalInformationForm = parseInt($('#inputGrossTaxablePersonalInformationForm').val())
    let inputPensionPersonalInformationForm = $('#inputPensionPersonalInformationForm').val()
    let inputReligionPersonalInformationForm = $('#inputReligionPersonalInformationForm').val()

    let inputOtherTaxIncomePersonalInformationForm = parseInt($('#inputOtherTaxIncomePersonalInformationForm').val())

    let selectRecruitmentModePersonalInformationForm = $('#selectRecruitmentModePersonalInformationForm').val()
    let inputTaxDeductedPersonalInformationForm = parseInt($('#inputTaxDeductedPersonalInformationForm').val())
    let checkboxHomeTownSameAddressAsTemporary = $('#checkboxHomeTownSameAddressAsTemporary').prop('checked')
    let checkboxHomeTownSameAddressAsPermanent = $('#checkboxHomeTownSameAddressAsPermanent').prop('checked')
    let checkboxTemporaryAddressPersonalInformationForm = $('#checkboxTemporaryAddressPersonalInformationForm').prop('checked')
    //let checkboxHomeTownSameAddressAsPermanent = $('#checkboxHomeTownSameAddressAsPermanent').val()
    //let checkboxHomeTownSameAddressAsTemporary = $('#checkboxHomeTownSameAddressAsTemporary').val()

    let formData = {
        piF_Country_of_Birth: inputBirthCountryPersonalInformationForm,
        piF_Place_City_of_Birth: inputBirthPlacePersonalInformationForm,
        piF_Nationality: inputNationalityPersonalInformationForm,
        piF_Mother_Tongue: inputMotherTonguePersonalInformationForm,
        piF_Blood_Group: inputBloodGroupPersonalInformationForm,
        piF_Date_of_Marriage: inputMarriageDatePersonalInformationForm == "" ? null : inputMarriageDatePersonalInformationForm,
        piF_Name_of_Spouse: inputSpouseNamePersonalInformationForm,
        piF_Spouse_Working_or_Not: selectSpouseWorkingStatusPersonalInformationForm,
        piF_Name_of_Company_Spouse_Working: inputSpouseWorkCompanyPersonalInformationForm,
        piF_In_case_Employee_working_in_DFCCIl_then_provide_Employee_Code: inputSpouseEmployeeCodePersonalInformationForm,
        piF_Number_of_Children: inputChildrenNumberPersonalInformationForm == "" ? null : inputChildrenNumberPersonalInformationForm,
        piF_H_No: inputPermanentHouseNoPersonalInformationForm,
        piF_Permanent_Address_1: inputPermanentAddressPersonalInformationForm,
        piF_Permanent_Address_2: inputPermanentAddress2PersonalInformationForm,
        piF_Permanent_City: inputPermanentCityPersonalInformationForm,
        piF_Permanent_State: inputPermanentStatePersonalInformationForm,
        piF_Permanent_Pin_Code: inputPermanentPinCodePersonalInformationForm,
        piF_Present_H_No: inputTemporaryHouseNoPersonalInformationForm,
        piF_Present_Address_1: inputTemporaryAddressPersonalInformationForm,
        piF_Present_Address_2: inputTemporaryAddress2PersonalInformationForm,
        piF_Present_City: inputTemporaryCityPersonalInformationForm,
        piF_Present_State: inputTemporaryStatePersonalInformationForm,
        piF_Present_Pin_Code: inputTemporaryPinCodePersonalInformationForm,
        piF_HomeTown_HNo: inputHomeTownHouseNoPersonalInformationForm,
        piF_HomeTown_Address1: inputHomeTownAddressPersonalInformationForm,
        piF_HomeTown_Address2: inputHomeTownAddress2PersonalInformationForm,
        piF_HomeTown_City: inputHomeTownCityPersonalInformationForm,
        piF_HomeTown_State: inputHomeTownStatePersonalInformationForm,
        piF_HomeTown_Pin_Code: inputHomeTownPinCodePersonalInformationForm,
        piF_Phone_Mobile_Number: inputPhoneNumberPersonalInformationForm,
        piF_Emergency_Contact_Number: inputEmergencyNumberPersonalInformationForm,
        piF_Name_of_the_Person_along_with_Relationship_in_Emergency: inputEmergencyNamePersonalInformationForm,
        piF_Email_Address: inputEmailPersonalInformationForm,
        piF_Passport_Number: inputPassportNumberPersonalInformationForm,
        piF_SPF_PRAN_EPF_UAN: inputSpfPersonalInformationForm,
        piF_Bank_Name: inputBankNamePersonalInformationForm,
        piF_Branch_Address: inputBranchAddressPersonalInformationForm,
        piF_Account_Number: inputAccountNumberPersonalInformationForm,
        piF_MICR_Code: inputMicrCodePersonalInformationForm,
        piF_IFSC_Code: inputIfscCodePersonalInformationForm,
        piF_Nature_of_Bank: selectBankNaturePersonalInformationForm,
        income_from_Parent_Organization: inputGrossTaxablePersonalInformationForm == "" || NaN ? null : inputGrossTaxablePersonalInformationForm,
        piF_Pension_if_any: inputPensionPersonalInformationForm,
        piF_Other_Taxable_Income: inputOtherTaxIncomePersonalInformationForm == "" || NaN ? null : inputOtherTaxIncomePersonalInformationForm,
        modeOfRecruitment: selectRecruitmentModePersonalInformationForm,
        income_from_Parent_Organization_Tax_Deduction: inputTaxDeductedPersonalInformationForm == "" || NaN ? null : inputTaxDeductedPersonalInformationForm,
        isSameAsAboveChecked: checkboxTemporaryAddressPersonalInformationForm,
        isSameAsPermanentChecked: checkboxHomeTownSameAddressAsPermanent,
        isSameAsTemporaryChecked: checkboxHomeTownSameAddressAsTemporary,
        religion:inputReligionPersonalInformationForm

        //options_for_Place_of_Posting_Option2: null,
        //options_for_Place_of_Posting_Option3: null,
        //choice_of_Email_Address_1: null,
        //choice_of_Email_Address_2: null,
        //statement_of_PF_Policy_No: null,
        //statement_of_PF_Policy_Date: null,
        //statement_of_PF_Name_of_Insurance_Company: null,
        //statement_of_PF_SI_Date_of_Maturity: null,
        //statement_of_PF_Annual_Premium: null,
        //statement_of_PF_Type: null,
        //statement_of_PF_Closing_Balance: null,
        //statement_of_PF_Contribution_Made: null,
        //statement_of_PF_Total: null,
        //statement_of_PF_Remarks: null,
        //statement_of_Insurance_Policy_No: null,
        //statement_of_Insurance_Policy_Date: null,
        //statement_of_Insurance_Name_of_Insurance_Company: null,
        //statement_of_Insurance_SI_Date_of_Maturity: null,
        //statement_of_Insurance_Annual_Premium: null,
        //statement_of_Insurance_Insurance_Policy_Account_No: null,
        //statement_of_Insurance_Closing_Balance: null,
        //statement_of_Insurance_Contribution_Made: null,
        //statement_of_Insurance_Total: null,
        //statement_of_Insurance_Remarks: null,
        //statement_of_Debt_and_Liabilities_Amount: null,
        //statement_of_Debt_and_Liabilities_Name_and_Address_of_Creditor: null,
        //statement_of_Debt_and_Liabilities_Date_of_Incurring_Liablities: null,
        //statement_of_Debt_and_Liabilities_Details_of_Transaction: null,
        //statement_of_Debt_and_Liabilities_Remarks: null,
        //return_of_Asset_Place_of_Posting: null,
        //return_of_Asset_Total_length_of_Past_Service: null,
        //return_of_Asset_Year: null

    }

    //FillFormDataForPostApi(newParticularsPersonal, formData)
    //formDataNew.append('EmpId', empObject.empId);
    var _url = apiBaseUrlHr + "/api/CandidateJoining/SaveCandidateJoiningDetails/" + candidateId;
    _url = _url.replace(/[\u200B-\u200D\uFEFF]/g, '');

    $.ajax({
        type: "POST",
        url: _url,
        data: JSON.stringify(formData),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        //processData: false,
        //contentType: false,
        /*headers: { Authorization: ApiToken },*/
        beforeSend: function () {
            //var ApiObject = CheckApiCall();
            //if (ApiObject.isCall == false) {
            //    window.location.href = mainLoginUrl;
            //    return false;
            //}
            $('.page-loader').show();
            $("#btnTourPlanSubmit").html('<i class="fa-solid fa-plus"></i> &nbsp;Please wait..')
        },
        success: function (response) {
            //if (isSaveAll) {
            //    return;
            //}
            //loadAllDataOfJoiningCandidate();
            $('.page-loader').hide();


            if (response.statusCode == 201 || response.statusCode == 200) {
                Swal.fire({
                    title: 'Success !',
                    text: response.statusCode == 201 ? 'Detail has been successfully submitted!' : response.message,
                    icon: "success"
                })

                loadAllDataOfCandidateData();
                loadAllDataOfJoiningCandidate()
                PrintFormA();
                getFormHSubmitData()
                
            }
            else {
                Swal.fire({
                    title: 'Invalid !',
                    text: response.message,
                    icon: "error"
                });
            }
            $('.page-loader').hide();
            $('#myModal').modal('hide');


        },
        complete: function () {

            $('.page-loader').hide();
            $("#btnTourPlanSubmit").html('<i class="fa-solid fa-plus"></i> &nbsp;Submit')

        },
        error: function (jqXHR, status) {

            $('.page-loader').hide();
            $("#btnTourPlanSubmit").html('<i class="fa-solid fa-plus"></i> &nbsp;Add')
            Swal.fire({
                title: 'Invalid !',
                text: jqXHR.responseJSON.title,
                icon: "error"
            });

            switch (jqXHR.status) {

                case "401":
                    window.location.href = unAuthorisedUrl;
                    break;
                case "403":
                    window.location.href = forbiddenUrl;
                    break;
                default:
                    ;
                    break;
            }
        }
    });
}


function validationForOptionform() {
    
    let select1 = $('#selectPlaceOfPosting1').val()
    let select2 = $('#selectPlaceOfPosting2').val()
    let select3 = $('#selectPlaceOfPosting3').val()
    //if (select1 === "Select One." || select2 === "Select One." || select3 === "Select One.") {
    //    alert("Please select an option for all select boxes.");
    //    return;
    //}


    if (select1 == select2 || select1 == select3 || select2 == select3) {

        alert("Please make sure all select boxes have unique values.");
        return;

    }
    return true
}
function Optionform(e) {

    let validX = validationForOptionform()

    if (validX == undefined) {
        return
    }

    //const formDataNew = new FormData();
    //formDataNew.append('piF_Country_of_Birth',)
    let selectPlaceOfPosting1 = $('#selectPlaceOfPosting1').val()
    let selectPlaceOfPosting2 = $('#selectPlaceOfPosting2').val()
    let selectPlaceOfPosting3 = $('#selectPlaceOfPosting3').val()





    let formData = {

        options_for_Place_of_Posting_Option1: selectPlaceOfPosting1,
        options_for_Place_of_Posting_Option2: selectPlaceOfPosting2,
        options_for_Place_of_Posting_Option3: selectPlaceOfPosting3,


    }

    //FillFormDataForPostApi(newParticularsPersonal, formData)
    //formDataNew.append('EmpId', empObject.empId);
    var _url = apiBaseUrlHr + "/api/CandidateJoining/SaveCandidateJoiningDetails/" + candidateId;
    _url = _url.replace(/[\u200B-\u200D\uFEFF]/g, '');

    $.ajax({
        type: "POST",
        url: _url,
        data: JSON.stringify(formData),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        //processData: false,
        //contentType: false,
        /*headers: { Authorization: ApiToken },*/
        beforeSend: function () {
            //var ApiObject = CheckApiCall();
            //if (ApiObject.isCall == false) {
            //    window.location.href = mainLoginUrl;
            //    return false;
            //}
            $('.page-loader').show();
            $("#btnTourPlanSubmit").html('<i class="fa-solid fa-plus"></i> &nbsp;Please wait..')
        },
        success: function (response) {

            //loadAllDataOfJoiningCandidate();
            $('.page-loader').hide();



            if (response.statusCode == 201 || response.statusCode == 200) {
                Swal.fire({
                    title: 'Success !',
                    text: response.statusCode == 201 ? 'Detail has been successfully submitted!' : response.message,
                    icon: "success"
                })
                loadAllDataOfJoiningCandidate()
                PrintFormC()
            }
            else {
                Swal.fire({
                    title: 'Invalid !',
                    text: response.message,
                    icon: "error"
                });
            }
            $('.page-loader').hide();
            $('#myModal').modal('hide');

        },
        complete: function () {

            $('.page-loader').hide();
            $("#btnTourPlanSubmit").html('<i class="fa-solid fa-plus"></i> &nbsp;Submit')

        },
        error: function (jqXHR, status) {

            $('.page-loader').hide();
            $("#btnTourPlanSubmit").html('<i class="fa-solid fa-plus"></i> &nbsp;Add')
            Swal.fire({
                title: 'Invalid !',
                text: jqXHR.responseJSON.title,
                icon: "error"
            });

            switch (jqXHR.status) {

                case "401":
                    window.location.href = unAuthorisedUrl;
                    break;
                case "403":
                    window.location.href = forbiddenUrl;
                    break;
                default:
                    ;
                    break;
            }
        }
    });
}
function FillApiDataIntoFrontEnd(objectFront, objectApi, mode) {
    //mode=1 (Read Only) Loading Data from API()
    //mode=2 (Edit ) Click on Edit
    //mode=3 (Save Read Only ) Click on Edit 

    for (let e of objectFront) {
        if (e.frontFieldName == 'inputUndertakingForOBCCandidatescommunitywhichrecognized') {
            
        }

        if (e.elementType == 'input' || e.elementType == 'select') {
            if (mode == 1) {
                $("#" + e.frontFieldName).val(objectApi[e.apiFieldName]);
                $("#" + e.frontFieldName).prop('readonly', true);
                $("#" + e.frontFieldName).prop('disabled', true);
            }
            else if (mode == 2) {
                if (e.isReadOnly) {
                    $("#" + e.frontFieldName).prop('readonly', true);
                }
                else {
                    $("#" + e.frontFieldName).prop('readonly', false);
                }
                if (e.isDisabled) {
                    $("#" + e.frontFieldName).prop('disabled', true);
                }
                else {
                    $("#" + e.frontFieldName).prop('disabled', false);
                }
            }
            else if (mode == 3) {
                $("#" + e.frontFieldName).prop('readonly', true);
                if (e.elementType == 'select') {
                    $("#" + e.frontFieldName).prop('disabled', true);
                }
            }
            else if (mode == 5) {

                if (e.frontFieldName == "selectDisabilityPersonalInformationForm") {

                }
                if (typeof (objectApi[e.apiFieldName]) == "boolean") {
                    if (objectApi[e.apiFieldName]) {
                        $("#" + e.frontFieldName).val("Yes");
                    }
                    else {
                        $("#" + e.frontFieldName).val("No");
                    }
                }
                else {
                    $("#" + e.frontFieldName).val(objectApi[e.apiFieldName]);
                }
                $("#" + e.frontFieldName).prop('readonly', e.isReadOnly);
                $("#" + e.frontFieldName).prop('disabled', e.isDisabled);

            }

        }
        else if (e.elementType == 'img') {
            $("#" + e.frontFieldName).attr(e.attrName, objectApi[e.apiFieldName]);
        }
        else if (e.elementType == 'inputdate') {
            if (mode == 1) {
                $("#" + e.frontFieldName).val(formatDate_dd_mm_yyyy(new Date(Date.parse(objectApi[e.apiFieldName]))));
                $("#" + e.frontFieldName).prop('readonly', true);
                $("#" + e.frontFieldName).prop('disabled', true);
            }
            else if (mode == 2) {
                if (e.isReadOnly) {
                    $("#" + e.frontFieldName).prop('readonly', true);
                }
                else {
                    $("#" + e.frontFieldName).prop('readonly', false);
                }
                if (e.isDisabled) {
                    $("#" + e.frontFieldName).prop('disabled', true);
                }
                else {
                    $("#" + e.frontFieldName).prop('disabled', false);
                }
            }
            else if (mode == 3) {
                $("#" + e.frontFieldName).prop('readony', true);
            }
            else if (mode == 5) {

                $("#" + e.frontFieldName).val(formatDate_dd_mm_yyyy(new Date(Date.parse(objectApi[e.apiFieldName]))));
                $("#" + e.frontFieldName).prop('readony', e.isReadOnly);
            }
            $("#" + e.frontFieldName).attr(e.attrName, objectApi[e.apiFieldName]);
        }
        else if (e.elementType == 'span') {
            if (mode == 1) {
                $("#" + e.frontFieldName).html(objectApi[e.apiFieldName]);
            }
            else if (mode == 5) {
                $("#" + e.frontFieldName).html(objectApi[e.apiFieldName]);
            }

        }
        else if (e.elementType == 'radio') {
            if (mode == 1) {
                if (e.frontFieldName.includes('Yes')) {
                    $("#" + e.frontFieldName).prop(e.attrName, objectApi[e.apiFieldName]);
                }
                else {
                    $("#" + e.frontFieldName).prop(e.attrName, !objectApi[e.apiFieldName]);
                }
                $("#" + e.frontFieldName).prop('disabled', true);
            }
            else if (mode == 2) {
                if (e.isReadOnly) {
                    $("#" + e.frontFieldName).prop('readonly', true);
                }
                else {
                    $("#" + e.frontFieldName).prop('readonly', false);
                }
                if (e.isDisabled) {
                    $("#" + e.frontFieldName).prop('disabled', true);
                }
                else {
                    $("#" + e.frontFieldName).prop('disabled', false);
                }
            }
            else if (mode == 3) {
                $("#" + e.frontFieldName).prop('disabled', true);
            }
            else if (mode == 5) {
                $("#" + e.frontFieldName).prop('disabled', e.isDisabled);
            }
            //if (e.frontFieldName == 'radioOthersUploadYes') {
            //    if (objectApi[e.apiFieldName]) {

            //        $("#OthersOthersUpload").css('display', 'block');
            //        $("#OthersOthersView").css('display', 'block');

            //    }
            //    else {
            //        $("#OthersOthersUpload").css('display', 'none');
            //        $("#OthersOthersView").css('display', 'none');
            //    }
            //}
            //if (e.frontFieldName == 'radioExServiveManYes') {
            //    if (objectApi[e.apiFieldName]) {
            //        $("#PHExServicemenUpload").css('display', 'block');
            //        $("#PHExServicemenView").css('display', 'block');
            //    }
            //    else {
            //        $("#PHExServicemenUpload").css('display', 'none');
            //        $("#PHExServicemenView").css('display', 'none');
            //    }
            //}

            //if (e.frontFieldName == 'radioIdentityCardissuedbyparentYes') {
            //    if (objectApi[e.apiFieldName]) {
            //        $("#IdentityCardissuedbyparentView").css('display', 'block');
            //        $("#IdentityCardissuedbyparentUpload").css('display', 'block');
            //    }
            //    else {
            //        $("#IdentityCardissuedbyparentView").css('display', 'none');
            //        $("#IdentityCardissuedbyparentUpload").css('display', 'none');
            //    }
            //}
            //if (e.frontFieldName == 'radioNOCByEmployerInGovernmentOrganizationYes') {
            //    if (objectApi[e.apiFieldName]) {
            //        $("#NOCGovernmentUpload").css('display', 'block');
            //        $("#NOCGovernmentView").css('display', 'block');
            //    }
            //    else {
            //        $("#NOCGovernmentUpload").css('display', 'none');
            //        $("#NOCGovernmentView").css('display', 'none');
            //    }
            //}
            //if (e.frontFieldName == 'radioDischargeSlipNOCNo') {
            //    if (objectApi[e.apiFieldName]) {
            //        $("#DischargeSlipNOCUpload").css('display', 'block');
            //        $("#DischargeSlipNOCView").css('display', 'block');
            //    }
            //    else {
            //        $("#DischargeSlipNOCUpload").css('display', 'none');
            //        $("#DischargeSlipNOCView").css('display', 'none');
            //    }
            //}

            //if (e.frontFieldName == 'radioFreefromARVigilanceAngleinParentOrganizationYes') {
            //    if (objectApi[e.apiFieldName]) {
            //        $("#divVigilanceAngleinParentUpload").css('display', 'block');
            //        $("#divVigilanceAngleinParentView").css('display', 'block');
            //    }
            //    else {
            //        $("#divVigilanceAngleinParentUpload").css('display', 'none');
            //        $("#divVigilanceAngleinParentView").css('display', 'none');
            //    }
            //}



        }
    }


}

function FillFormDataForPostApi(objectFront, formDataNew) {

    for (let e of objectFront) {
        if (e.elementType == 'input' || e.elementType == 'inputdate' || e.elementType == 'select') {
            if (e.elementType == 'inputdate') {
                if ($("#" + e.frontFieldName).val() == "") {

                    //formDataNew.append(e.modelName + e.apiFieldName, null);
                }
                else {
                    formDataNew.append(e.modelName + e.apiFieldName, formatDateDDMMYYYtoMMDDYYY($("#" + e.frontFieldName).val()));
                }
                // formDataNew.append(e.modelName + e.apiFieldName, formatDate_mm_dd_yyyy(new Date(Date.parse( $("#" + e.frontFieldName).val()))));

            }
            else
                formDataNew.append(e.modelName + e.apiFieldName, $("#" + e.frontFieldName).val());
        }

        else if (e.elementType == 'uploadSingle') {

            if (document.getElementById(e.frontFieldName).files != null && document.getElementById(e.frontFieldName).files != undefined)
                if (document.getElementById(e.frontFieldName).files.length != 0) {
                    formDataNew.append(e.modelName + e.apiFieldName, document.getElementById(e.frontFieldName).files[0]);
                }

        }

        else if (e.elementType == 'radio') {

            if (e.frontFieldName.includes('Yes')) {
                // $("#" + e.modelName + e.frontFieldName).attr(e.attrName, objectApi[e.apiFieldName]);
                // console.log(e.modelName + e.apiFieldName, $("#" + e.frontFieldName).prop("checked"));
                formDataNew.append(e.modelName + e.apiFieldName, $("#" + e.frontFieldName).prop("checked"));
            }


        }
        else if (e.elementType == 'upload') {
            if (e.frontFieldName in uploadDetails) {
                for (var e1 of uploadDetails[e.frontFieldName]) {
                    formDataNew.append(e.modelName + e.apiFieldName, e1.uploadedFile);

                }
                uploadDetails[e.frontFieldName] = [];
                $("#span" + e.apiFieldName).html(0);

            }


        }

    }


}


var tabbingsection = document.querySelectorAll(".content-tapSection");
var btnsection = document.querySelectorAll(".btn-tab");

btnsection.forEach(tabs => {

    tabs.addEventListener('click', () => {

        tabbingsection.forEach(fieldSets => {
            fieldSets.classList.remove("active");
        });
        const fieldSetsid = tabs.getAttribute("data-id");

        document.getElementById(fieldSetsid).classList.add("active");
        btnsection.forEach(btn => {
            btn.classList.remove("active");
        });
        tabs.classList.add("active");
    });
});

var tabbingsection1 = document.querySelectorAll(".content-tapSection1");
var btnsection1 = document.querySelectorAll(".btn-tab1");

btnsection1.forEach(tabs => {

    tabs.addEventListener('click', () => {

        tabbingsection1.forEach(fieldSets => {
            fieldSets.classList.remove("active");
        });
        const fieldSetsid = tabs.getAttribute("data-id");

        document.getElementById(fieldSetsid).classList.add("active");
        btnsection.forEach(btn => {
            btn.classList.remove("active");
        });
        tabs.classList.add("active");
    });
});
// btn Add Statement of immovable property
$(".delete").hide();

$("#btnAddStatementofimmovableproperty").click(function () {
    $(".deletebtn").fadeIn("1500");
    

    Set7ImmovableProperty++;
    let row = `<tr class="trSet7ImmovableProperty" id="row6_${Set7ImmovableProperty}">
                                                             <td>   ${Set7ImmovableProperty}.
                                                                    <input type="hidden" id="hiddenSet7ImmovableProperty_${Set7ImmovableProperty}" value='0'></td>
                                        <td><input type="text" class="form-control" id="inputescriptionofproperty_${Set7ImmovableProperty}"></td>
                                        <td><input type="text" class="form-control" id="inputPreciselocation_${Set7ImmovableProperty}"></td>
                                        <td><input type="text" class="form-control" id="inputAreaofland_${Set7ImmovableProperty}"></td>
                                        <td><input type="text" class="form-control" id="inputNatureofland_${Set7ImmovableProperty}"></td>
                                        <td><input type="text" class="form-control" id="inputExtentofinterest_${Set7ImmovableProperty}"></td>
                                        <td><input type="text" class="form-control" id="inputIfnotinownname_${Set7ImmovableProperty}"></td>
                                        <td><input type="text" placeholder='select date' class="form-control datepickerr" id="inputDateofacquisition_${Set7ImmovableProperty}"></td>
                                        <td><input type="text" class="form-control" id="inputHowacquired_${Set7ImmovableProperty}"></td>
                                        <td><input type="text" class="form-control" placeholder="Enter number" id="inputValueoftheproperty_${Set7ImmovableProperty}"></td>
                                        <td><input type="text" class="form-control" id="inputParticularsofsanction_${Set7ImmovableProperty}"></td>
                                        <td><input type="text" class="form-control" placeholder="Enter number" id="inputTotalannualincome_${Set7ImmovableProperty}"></td>
                                        <td><input type="text" class="form-control" id="inputRemarks_${Set7ImmovableProperty}"></td>
                                    </tr>`;
    $('#tbodyStatementofimmovableproperty').append(row);
});

$(".deletebtn").click(function () {
    $(".trSet7ImmovableProperty").last().remove();
    Set7ImmovableProperty--
    if ($("#tbodyStatementofimmovableproperty .trSet7ImmovableProperty").length === 0) {
        $(".deletebtn").hide();
    }
})
//  Statement of liquid

$(".Statementofliquid").hide();
$('#btntbodyStatementofliquid').click(function () {
    $(".Statementofliquid").fadeIn('1500');
    Set7StatementofLiquidAsset++
    let row = `<tr class="trSet7StatementofLiquidAsset" id="row11_${Set7StatementofLiquidAsset}">
                                         <td>${Set7StatementofLiquidAsset}.
                                                                    <input type="hidden" id="hiddenSet7StatementofLiquidAsset_${Set7StatementofLiquidAsset}" value='0'></td>
                                        <td><input type="text" class="form-control" id='inputSet3Description_${Set7StatementofLiquidAsset}'></td>
                                        <td>
                                            <label for="inputSet3NameofCompany">Name</label>
                                            <input type="text" class="form-control" id="inputSet3NameofCompany_${Set7StatementofLiquidAsset}">
                                            <div class="h-5"></div>
                                                <label for="inputSet3AddressofCompany">Address</label>
                                            <input type="text" class="form-control" id="inputSet3AddressofCompany_${Set7StatementofLiquidAsset}">
                                        </td>
                                        <td><input type="text" class="form-control" id="inputSet3Amount_${Set7StatementofLiquidAsset}"></td>
                                        <td><input type="text" class="form-control" id="inputSet3relationshipwiththeGovernmentServant_${Set7StatementofLiquidAsset}"></td>
                                        <td><input type="text" class="form-control" id="inputSet3Annualincomederived_${Set7StatementofLiquidAsset}"></td>
                                        <td><input type="text" class="form-control" id="inputSet3StatementofliquidRemark_${Set7StatementofLiquidAsset}"></td>

                                    </tr>`

    $('#tbodyStatementofliquid').append(row);
});

$(".Statementofliquid").click(function () {
    $(".trSet7StatementofLiquidAsset").last().remove();
    Set7StatementofLiquidAsset--
    if ($("#tbodyStatementofliquid .trSet7StatementofLiquidAsset").length == 0) {
        $(".Statementofliquid").hide();
    }
})
// Statement of movable property

$("#btnStatementofmovableproperty").click(function () {
    $(".Statementofmovableproperty").fadeIn("1500");
    Set7MovableProperty++
    let row = `<tr class="trSet7Set7MovableProperty" id="row7_${Set7MovableProperty}">
                                        <td> ${Set7MovableProperty}.
                                                                    <input type="hidden" id="hiddenSet7MmovableProperty_${Set7MovableProperty}" value='0' </td>
                                        <td><input type="text" class="form-control" id="inputSet3Descriptionofitems_${Set7MovableProperty}"></td>
                                        <td><input type="text" class="form-control" id="inputSet3Priceorvalueatthetimeofacquisition_${Set7MovableProperty}"></td>
                                        <td><input type="text" class="form-control" id="inputSet3herrelationshipwiththeemployee_${Set7MovableProperty}"></td>
                                        <td><input  type="text" placeholder='select date' class="form-control datepickerr" id="inputSet3Howacquiredwithapproximatedate_${Set7MovableProperty}"></td>
                                        <td><input type="text" class="form-control" id="inputSet3StatementofmovablepropertyRemarks_${Set7MovableProperty}"></td>


                                    </tr>`

    $('#tbodyStatementofmovableproperty').append(row)
})
$(".Statementofmovableproperty").click(function () {
    $(".trSet7Set7MovableProperty").last().remove();
    Set7MovableProperty--
    if ($("#tbodyStatementofmovableproperty .trSet7Set7MovableProperty").length == 0) {
        $(".Statementofmovableproperty").hide();
    }
})

//Statement of Provident Fund

$("#btnStatementofProvidentFund").click(function () {
    $(".StatementofProvidentFund").fadeIn('1500')
    Set7Pf++
    let row = `<tr class="trSet7Set7Pf" id="row8_${Set7Pf}">
                                        <td> ${Set7Pf}.
                                                                    <input type="hidden" id="hiddenSet7Pf_${Set7Pf}" value='0'></td>
                                        <td><input type="text" class="form-control" id="inputSet3PolicyNoofpolicy_${Set7Pf}"></td>
                                        <td><input type="text" placeholder='select date' class="form-control datepickerr" id="inputSet3Policydateofpolicy_${Set7Pf}"></td>
                                        <td><input type="text" class="form-control" id="inputSet3NameofInsuranceCompany_${Set7Pf}"></td>
                                        <td><input type="text" placeholder='select date' class="form-control datepickerr" id="inputSet3Suminsureddateofmaturity_${Set7Pf}"></td>
                                        <td><input type="text" class="form-control" id="inputSet3mountofannualpremium_${Set7Pf}"></td>
                                        <td>
                                            <input type="text" class="form-control" id="inputSet3TypeofProvidentFunds_${Set7Pf}">
                                        </td>
                                        <td><input type="text" class="form-control" id="inputSet3Closingbalanceaslastreported_${Set7Pf}"></td>
                                        <td><input type="text" class="form-control" id="inputSet3Contributionmadesubsequently_${Set7Pf}"></td>
                                        <td><input type="text" class="form-control" id="inputSet3StatementofProvidentFundTota_${Set7Pf}"></td>
                                        <td><input type="text" class="form-control" id="inputSet3StatementofProvidentFundRemarks_${Set7Pf}"></td>

                                    </tr>`

    $('#tbodyStatementofProvidentFund').append(row)
});
$(".StatementofProvidentFund").click(function () {
    $(".trSet7Set7Pf").last().remove();
    Set7Pf--
    if ($('#tbodyStatementofProvidentFund .trSet7Set7Pf').length == 0) {
        $(".StatementofProvidentFund").hide();
    }
})

//Statement of Provident Fund

$("#btnStatementofProvidentFund2").click(function () {
    $(".StatementofProvidentFund2").fadeIn('1500')
    Set7Insurence++
    let row = `<tr class="trSet7Set7Insurence" id="row9_${Set7Insurence}">
                                        <td>${Set7Insurence}.
                                                                    <input type="hidden" id="hiddenSet7Insurence_${Set7Insurence}" value='0'></td>
                                        <td><input type="text" class="form-control" id="inputSet4PolicyNoofpolicy_${Set7Insurence}"></td>
                                         <td><input type="text" placeholder='select date' class="form-control datepickerr" id="inputSet4Policydateofpolicy_${Set7Insurence}"></td>
                                        <td><input type="text" class="form-control" id="inputSet4NameofInsuranceCompany_${Set7Insurence}"></td>
                                        <td><input type="text" placeholder='select date' class="form-control datepickerr" id="inputSet4Suminsureddateofmaturity_${Set7Insurence}"></td>
                                        <td><input type="text" class="form-control" id="inputSet4mountofannualpremium_${Set7Insurence}"></td>
                                        <td>
                                            <input type="text" class="form-control" id="inputSet4InsurancePolicyAcNo_${Set7Insurence}">
                                        </td>
                                        <td><input type="text" class="form-control" id="inputSet4Closingbalanceaslastreported_${Set7Insurence}"></td>
                                        <td><input type="text" class="form-control" id="inputSet4Contributionmadesubsequently_${Set7Insurence}"></td>
                                        <td><input type="text" class="form-control" id="inputSet4StatementofProvidentFundTotal_${Set7Insurence}"></td>
                                        <td><input type="text" class="form-control" id="inputSet4StatementofProvidentFundRemarks_${Set7Insurence}"></td>

                                    </tr>`

    $('#tbodyLifeInsurancePolicy').append(row)
});
$(".StatementofProvidentFund2").click(function () {
    $(".trSet7Set7Insurence").last().remove();
    Set7Insurence--
    if ($('#tbodyLifeInsurancePolicy .trSet7Set7Insurence').length == 0) {
        $(".StatementofProvidentFund2").hide();
    }
})
// Statement of Debts
$("#btnStatementofDebts").click(function () {
    $(".StatementofDebts").fadeIn("1500");
    Set7DebtsAndOtherLiabilities++
    let row = `<tr class="trSet7Set7DebtsAndOtherLiabilities" id="row10_${Set7DebtsAndOtherLiabilities}">
                                        <td>${Set7DebtsAndOtherLiabilities}.
                                                                    <input type="hidden" id="hiddenSet7DebtsAndOtherLiabilities_${Set7DebtsAndOtherLiabilities}" value='0'></td>
                                        <td><input type="text" class="form-control" id="inputStatementofDebtsandOtherAmount_${Set7DebtsAndOtherLiabilities}"></td>
                                        <td><input type="text" class="form-control" id="inputStatementofDebtsandOtherNameandaddressofCreditor_${Set7DebtsAndOtherLiabilities}"></td>
                                        <td><input type="text" class="form-control datepickerr" placeholder='select date' id="inputStatementofDebtsandOtherDateofincurringLiability_${Set7DebtsAndOtherLiabilities}"></td>
                                        <td><input type="text" class="form-control" id="inputStatementofDebtsandOtherDetailsofTransaction_${Set7DebtsAndOtherLiabilities}"></td>
                                        <td><input type="text" class="form-control" id="inputStatementofDebtsandOtherRemarks_${Set7DebtsAndOtherLiabilities}"></td>


                                    </tr>`

    $('#tbodyStatementofDebts').append(row)
});
$(".StatementofDebts").click(function () {
    $('.trSet7Set7DebtsAndOtherLiabilities').last().remove();
    Set7DebtsAndOtherLiabilities--
    if ($('#tbodyStatementofDebts .trSet7Set7DebtsAndOtherLiabilities').length == 0) {
        $(".StatementofDebts").hide();
    }
});

/*btnAddMoreDistric


quarters*/
$('.btndeleteDistrictHeadquarters').hide();
$('#btnAddMoreDistrictHeadquarters').click(function () {
    $('.btndeleteDistrictHeadquarters').fadeIn('1500');
    countGetPakistanLivingDetailsjoining++;
    let row = ` <tr class='trofcountGetPakistanLivingDetailsjoining'  id="row19_${countGetPakistanLivingDetailsjoining}">

 <td width="72" valign="top"> ${countGetPakistanLivingDetailsjoining}
                                                                    <input type="hidden" id="hiddencountGetPakistanLivingDetailsjoining_${countGetPakistanLivingDetailsjoining}" value='0' >  </td>
                                            

                                                 
                                                <td width="72" valign="top"><p><input type="text" class="form-control datepickerr" placeholder='select date' id="inputSet6DistrictHeadquartersFrom_${countGetPakistanLivingDetailsjoining}" /></p></td>
                                                <td width="84" valign="top"><p><input type="text" class="form-control datepickerr" placeholder='select date' id="inputSet6DistrictHeadquartersTo_${countGetPakistanLivingDetailsjoining}" /></p></td>
                                                <td width="330" valign="top"><p><input type="text" class="form-control" id="inputSet6DistrictHeadquartersResidentialaddress_${countGetPakistanLivingDetailsjoining}" style="display:inline;" /></p></td>
                                                <td width="222" valign="top"><p><input type="text" class="form-control" id="inputSet6DistrictHeadquartersDistrictHeadquarters_${countGetPakistanLivingDetailsjoining}" style="display:inline;" /></p></td>
</tr>

`


    $('#tbodyDistrictHeadquarters').append(row);
});
$(".btndeleteDistrictHeadquarters").click(function () {
    $('.trofcountGetPakistanLivingDetailsjoining').last().remove();
    countGetPakistanLivingDetailsjoining--
    if ($('#tbodyDistrictHeadquarters .trofcountGetPakistanLivingDetailsjoining').length == 0) {
        $(".btndeleteDistrictHeadquarters").hide();
    }
});

/*btnSet6AddMoreRelationName*/
$('.DeleteSet6RelationNameBrother').hide();
$('#btnSet6AddMoreRelationNameBrother').click(function () {
    $('.DeleteSet6RelationNameBrother').fadeIn('1500');
    countGetFamilyDetailsJoining++;
    let row = ` <tr class='trofcountGetFamilyDetailsJoining'  id="row18_${countGetFamilyDetailsJoining}">

 <td width="72" valign="top"> ${countGetFamilyDetailsJoining}
                                                                    <input type="hidden" id="hiddencountGetFamilyDetailsJoining_${countGetFamilyDetailsJoining}" value='0' >  </td>
                                            

                                                  <td>
                                                 
                                                    <select id="inputSet6RelationNameSelectFamilyMember_${countGetFamilyDetailsJoining}">
                                                    <option value='Select'>Select</option>
                                                        <option value='Father'>पिता  / Father </option>
                                                      <option value='Mother'>माता / Mother</option>
                                                        <option value='Wife'>पत्‍नी / Wife</option>

                                                        <option value='Brother'>भाई / Brother</option>
                                                        <option value='Sister'>बहन / Sister</option>
                                                        <option value='Daughter'>बेटी / Daughter</option>
                                                        <option value='Son'>बेटा / Son</option>
                                                    </select>
                                                </td>
                                                <td>
                                                    <ol> <li><input type="text" name="name" id="inputSet6RelationName_${countGetFamilyDetailsJoining}"   style="display:inline;"></li></ol>
                                                </td>
                                                <td>
                                                    <ol> <li><input type="text" name="name" id="inputSet6RelationNameMotherNationality_${countGetFamilyDetailsJoining}"   style="display:inline;"></li></ol>
                                                </td>
                                                <td>
                                                    <ol> <li><input type="text" name="name" id="inputSet6RelationNameMotherPlaceofBirth_${countGetFamilyDetailsJoining}"   style="display:inline;"></li></ol>
                                                </td>
                                                <td>
                                                    <ol> <li><input type="text" name="name" id="inputSet6RelationNameMotherOccupation_${countGetFamilyDetailsJoining}"   style="display:inline;"></li></ol>
                                                </td>
                                                <td>
                                                    <ol> <li><input type="text" name="name" id="inputSet6RelationNameMotherPostal_${countGetFamilyDetailsJoining}"  style="display:inline;"></li></ol>
                                                </td>
                                                <td>
                                                    <ol> <li><input type="text" name="name" id="inputSet6RelationNameMotherPermanentHomeaddress_${countGetFamilyDetailsJoining}" value='${permanentAddressDetailsGlobal}'  style="display:inline;"></li></ol>
                                                </td>
</tr>

`


    $('#tbodySet6RelationName').append(row);
});

$('.DeleteSet6RelationNameBrother').click(function () {
    $('.trofcountGetFamilyDetailsJoining').last().remove();
    countGetFamilyDetailsJoining--
    if ($('#tbodySet6RelationName .trofcountGetFamilyDetailsJoining').length == 0) {
        $('.DeleteSet6RelationNameBrother').hide();
    }
})

/*DeleteSet6RelationNameSister*/
//$('.DeleteSet6RelationNameSister').hide();
//$('#btnSet6AddMoreRelationNameSister').click(function () {
//    $('.DeleteSet6RelationNameSister').fadeIn('1500');
//    $('#tbodySet6RelationName').append(`
//          <tr class='trSet6RelationNameSister'>
//                                            <td width="167" valign="top">
//                                                <ol>
//                                                    <li> (v) बहनें / Sisters(s)</li>
//                                                </ol>
//                                            </td>
//                                           <td>
//                                                <ol> <li><input type="text" name="name" value="" style="display:inline;" id="inputSet6RelationNameSisterNationality_${rowCount}"></li></ol>
//                                            </td>
//                                            <td>
//                                                <ol> <li><input type="text" name="name" value="" style="display:inline;" id="inputSet6RelationNameSisterPlaceofBirth_${rowCount}"></li></ol>
//                                            </td>
//                                            <td>
//                                                <ol> <li><input type="text" name="name" value="" style="display:inline;" id="inputSet6RelationNameSisterOccupation_${rowCount}"></li></ol>
//                                            </td>
//                                            <td>
//                                                <ol> <li><input type="text" name="name" value="" style="display:inline;" id="inputSet6RelationNameSisterPresentPostal_${rowCount}"></li></ol>
//                                            </td>
//                                            <td>
//                                                <ol> <li><input type="text" name="name" value="" style="display:inline;" id="inputSet6RelationNameSisterPermanentHomeaddress_${rowCount}"></li></ol>
//                                            </td>
//                                        </tr>`);
//    rowCount++;
//});

//$('.DeleteSet6RelationNameSister').click(function () {
//    $('.trSet6RelationNameSister').last().remove();
//    rowCount--
//    if ($('#tbodySet6RelationName .trSet6RelationNameSister').length == 0) {
//        $('.DeleteSet6RelationNameSister').hide();
//    }
//})
// btnSet6InformationTobeFurnished
$(".btnSet6InformationToDelete").hide();
$("#btnSet6InformationTobeFurnished").click(function () {
    $(".btnSet6InformationToDelete").fadeIn('1500');
    countFamilyForeignDetailsJoining++;
    let row = ` <tr class='trofcountFamilyForeignDetailsJoining'  id="row17_${countFamilyForeignDetailsJoining}">

 <td width="72" valign="top"> ${countFamilyForeignDetailsJoining}
                                                                    <input type="hidden" id="hiddencountFamilyForeignDetailsJoining_${countFamilyForeignDetailsJoining}" value='0' >  </td>
                                            

                                                  <td width="150" valign="top"><input type="text" name="name"   style="display:inline;" id="inputInformationtobefurnishedName_${countFamilyForeignDetailsJoining}"></td>
                                                <td width="135" valign="top"><input type="text" name="name"  style="display:inline;" id="inputInformationtobefurnishedNationality_${countFamilyForeignDetailsJoining}"></td>
                                                <td width="133" valign="top"><input type="text" name="name"  style="display:inline;" id="inputInformationtobefurnishedPlaceofbirth_${countFamilyForeignDetailsJoining}"></td>
                                                <td width="136" valign="top"><input type="text" name="name"  style="display:inline;" id="inputInformationtobefurnishedCountryinwhich_${countFamilyForeignDetailsJoining}"></td>
                                                <td width="148" valign="top"><input type="text" placeholder='select date' name="name"  style="display:inline;" id="inputInformationtobefurnishedDatefromwhich_${countFamilyForeignDetailsJoining}"></td>

</tr>

`


   $('#tbodyInformationTobeFurnished').append(row);
});

$(".btnSet6InformationToDelete").click(function () {
    $('.trofcountFamilyForeignDetailsJoining').last().remove();
    countFamilyForeignDetailsJoining--
    if ($('#tbodyInformationTobeFurnished .trofcountFamilyForeignDetailsJoining').length == 0) {
        $(".btnSet6InformationToDelete").hide();
    }
});

// btnEducationalqualificationAddMore
$('.btnEducationalqualification').hide();
$('#btnEducationalqualificationAddMore').click(function () {
    $('.btnEducationalqualification').show();
    countEducationDetailsJoining++;
    let row = ` <tr class='trofcountEducationDetailsJoining'  id="row16_${countEducationDetailsJoining}">

 <td width="72" valign="top"> ${countEducationDetailsJoining}
                                                                    <input type="hidden" id="hiddencountEducationDetailsJoining_${countEducationDetailsJoining}" value='0'>  </td>
                                            

                                                     <td width="274" valign="top"> <input type="text" name=""   style="display:inline;" id="inputEducationalqualificationNameofSchool_${countEducationDetailsJoining}"></td>
                                                    <td width="132" valign="top"><input type="text" placeholder='select date' class='datepickerr' name=""   style="display:inline;" id="inputEducationalqualificationNameofDateofentering_${countEducationDetailsJoining}"></td>
                                                    <td width="132" valign="top"><input type="text" placeholder='select date' class='datepickerr' name=""   style="display:inline;" id="inputEducationalqualificationNameofDateofleaving_${countEducationDetailsJoining}"></td>
                                                    <td width="132" valign="top"><input type="text" name=""   style="display:inline;" id="inputEducationalqualificationNameofExamination_${countEducationDetailsJoining}"></td>

</tr>`;
    $('#tbodyEducationalqualificationAddMore').append(row);
});
$('.btnEducationalqualification').click(function () {
    $('.trofcountEducationDetailsJoining').last().remove();
    countEducationDetailsJoining--
    if ($('#tbodyEducationalqualificationAddMore .trofcountEducationDetailsJoining').length == 0) {
        $('.btnEducationalqualification').hide();
    }
});
/*btnAppointmentUnderTheCentralMore*/

$(".btnAppointmentUnderTheCentralDelete").hide();
$('#btnAppointmentUnderTheCentralMore').click(function () {
    $(".btnAppointmentUnderTheCentralDelete").show();
    countEmploymentDetailsJoining++
    let row = `<tr class='trofcountEmploymentDetailsJoining'  id="row15_${countEmploymentDetailsJoining}">

 <td width="72" valign="top"> ${countEmploymentDetailsJoining}.
                                                                    <input type="hidden" id="hiddencountEmploymentDetailsJoining_${countEmploymentDetailsJoining}" value='0' >  </td>
                                                 <td width="68" valign="top"><input type="text" placeholder='select date' class='datepickerr'  name="name"  id="inputAppointmentUnderTheCentralForm_${countEmploymentDetailsJoining}" ></td>
                                                    <td width="74" valign="top"><input type="text" placeholder='select date' class='datepickerr'  name="name"   id="inputAppointmentUnderTheCentralTo_${countEmploymentDetailsJoining}" ></td>
                                                    <td width="198" valign="top"> <input type="text" name="name"   id="inputAppointmentUnderTheCentralnatureofemployment_${countEmploymentDetailsJoining}" > </td>
                                                    <td width="170" valign="top"><input type="text" name="name"   id="inputAppointmentUnderTheCentralFullnameandaddress_${countEmploymentDetailsJoining}" ></td>
                                                    <td width="161" valign="top"><input type="text" name="name"  id="inputAppointmentUnderTheCentralReasonsofleavingprevious_${countEmploymentDetailsJoining}" ></td>



</tr>`

    $('#tbodyAppointmentUnderTheCentral').append(row)
});

$(".btnAppointmentUnderTheCentralDelete").click(function () {
    $('.trofcountEmploymentDetailsJoining').last().remove();
    countEmploymentDetailsJoining--
    if ($('#tbodyAppointmentUnderTheCentral .trofcountEmploymentDetailsJoining').length == 0) {

        $(".btnAppointmentUnderTheCentralDelete").hide();
    }
})


function idaScalePreviewSignature() {
    var inputs = document.getElementsByClassName('idaScaleSigBtn');
    var previews = document.getElementsByClassName('idaScaleSigBtnPreview');

    // Loop through all input elements (even though there's only one in this example)
    for (var i = 0; i < inputs.length; i++) {
        var input = inputs[i];
        var preview = previews[i];

        // Ensure that a file is selected
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                // Display the uploaded image in the div
                preview.innerHTML = '<img src="' + e.target.result + '" alt="Uploaded Image">';
                document.getElementsByClassName('idaScaleSigImage').style.display = "none";
            };

            reader.readAsDataURL(input.files[0]); // Convert to base64 string
        } else {
            // Reset the preview if no file is selected
            preview.innerHTML = '';
            document.getElementsByClassName('idaScaleSigImage').style.display = "block";
        }
    }
}


function DeclarationSigPIinfo() {
    var inputs = document.getElementsByClassName('inputDeclarationSigPIBtn');
    var previews = document.getElementsByClassName('inputDeclarationSigPIPreview');

    // Loop through all input elements (even though there's only one in this example)
    for (var i = 0; i < inputs.length; i++) {
        var input = inputs[i];
        var preview = previews[i];

        // Ensure that a file is selected
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                // Display the uploaded image in the div
                preview.innerHTML = '<img src="' + e.target.result + '" alt="Uploaded Image">';
                document.getElementsByClassName('inputDeclarationSigPIimage').style.display = "none";
            };

            reader.readAsDataURL(input.files[0]); // Convert to base64 string
        } else {
            // Reset the preview if no file is selected
            preview.innerHTML = '';
            document.getElementsByClassName('inputDeclarationSigPIimage').style.display = "block";
        }
    }
}

function joiningReportSigPreview() {
    var inputs = document.getElementsByClassName('JoiningReportSigBtn');
    var previews = document.getElementsByClassName('JoiningReportSigPreview');

    // Loop through all input elements (even though there's only one in this example)
    for (var i = 0; i < inputs.length; i++) {
        var input = inputs[i];
        var preview = previews[i];

        // Ensure that a file is selected
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                // Display the uploaded image in the div
                preview.innerHTML = '<img src="' + e.target.result + '" alt="Uploaded Image">';
                document.getElementsByClassName('JoiningReportSigImage').style.display = "none";
            };

            reader.readAsDataURL(input.files[0]); // Convert to base64 string
        } else {
            // Reset the preview if no file is selected
            preview.innerHTML = '';
            document.getElementsByClassName('JoiningReportSigImage').style.display = "block";
        }
    }
}

function OptionFormSigPreview() {
    var inputs = document.getElementsByClassName('OptionFormSigBtn');
    var previews = document.getElementsByClassName('OptionFormSigPreview');

    // Loop through all input elements (even though there's only one in this example)
    for (var i = 0; i < inputs.length; i++) {
        var input = inputs[i];
        var preview = previews[i];

        // Ensure that a file is selected
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                // Display the uploaded image in the div
                preview.innerHTML = '<img src="' + e.target.result + '" alt="Uploaded Image">';
                document.getElementsByClassName('OptionFormSigBtn').style.display = "none";
            };

            reader.readAsDataURL(input.files[0]); // Convert to base64 string
        } else {
            // Reset the preview if no file is selected
            preview.innerHTML = '';
            document.getElementsByClassName('OptionFormSigBtn').style.display = "block";
        }
    }
}

function UndertakingApplicationSigPreview() {
    var inputs = document.getElementsByClassName('UndertakingApplicationSigBtn');
    var previews = document.getElementsByClassName('UndertakingApplicationSigPreview');

    // Loop through all input elements (even though there's only one in this example)
    for (var i = 0; i < inputs.length; i++) {
        var input = inputs[i];
        var preview = previews[i];

        // Ensure that a file is selected
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                // Display the uploaded image in the div
                preview.innerHTML = '<img src="' + e.target.result + '" alt="Uploaded Image">';
                document.getElementsByClassName('UndertakingApplicationSigImage').style.display = "none";
            };

            reader.readAsDataURL(input.files[0]); // Convert to base64 string
        } else {
            // Reset the preview if no file is selected
            preview.innerHTML = '';
            document.getElementsByClassName('UndertakingApplicationSigImage').style.display = "block";
        }
    }
}

function RequistionCreationSigPreview() {
    var inputs = document.getElementsByClassName('RequistionCreationSigBtn');
    var previews = document.getElementsByClassName('RequistionCreationSigPreview');

    // Loop through all input elements (even though there's only one in this example)
    for (var i = 0; i < inputs.length; i++) {
        var input = inputs[i];
        var preview = previews[i];

        // Ensure that a file is selected
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                // Display the uploaded image in the div
                preview.innerHTML = '<img src="' + e.target.result + '" alt="Uploaded Image">';
                document.getElementsByClassName('RequistionCreationSigImage').style.display = "none";
            };

            reader.readAsDataURL(input.files[0]); // Convert to base64 string
        } else {
            // Reset the preview if no file is selected
            preview.innerHTML = '';
            document.getElementsByClassName('RequistionCreationSigImage').style.display = "block";
        }
    }
}


$(".removeBtn").hide();


$(".addBtn").click(function () {
    $(".removeBtn").show();
    countFamilyDetails++;
    let row = `    <tr  class='trofFamilyDetails' id="row1_${countFamilyDetails}">
                                                                <td >
                                                                  ${countFamilyDetails}.
                                                                    <input type="hidden" id="hiddenFamily_${countFamilyDetails}" value='0' >
                                                                </td>
                                                                <td>
                                                                    <input type="text" class="form-control" id="inputFamilyNamePersonalInformationForm_${countFamilyDetails}">
                                                                </td>
                                                                <td>
                                                                    <input type="text" placeholder='select date'  class="form-control datepickerr" id="inputFamilyDobPersonalInformationForm_${countFamilyDetails}">
                                                                </td>
                                                                <td>
                                                                    <input type="text" class="form-control" id="inputFamilyAgePersonalInformationForm_${countFamilyDetails}">
                                                                </td>
                                                                <td>                                                                   
                                                                    <select  class="form-control" id="inputFamilyRelationPersonalInformationForm_${countFamilyDetails}">
                                                                    <option value="Self">Self</option>
                                                                    <option value="Spouse">Spouse</option>
                                                                    <option value="Son">Son</option>
                                                                    <option value="Daughter">Daughter</option>
                                                                    <option value="Father">Father</option>
                                                                    <option value="Mother">Mother</option>                                                                   
                                                                    </select>
                                                                </td>
                                                                <td>
                                                                    <select class="form-control" id="selectFamilyWorkingPersonalInformationForm_${countFamilyDetails}">
                                                                         
                                                                        <option id="Yes">Yes</option>
                                                                        <option id="No">No</option>
                                                                    </select>
                                                                </td>
                                                                <td>
                                                                    <select class="form-control" id="selectFamilyLtcEligibilityPersonalInformationForm_${countFamilyDetails}">
                                                                     
                                                                         <option id="Yes">Yes</option>
                                                                        <option id="No">No</option>
                                                                    </select>
                                                                </td>
                                                                <td>
                                                                    <select class="form-control" id="selectFamilyMedicalEligibilityPersonalInformationForm_${countFamilyDetails}">
                                                                      
                                                                         <option id="Yes">Yes</option>
                                                                        <option id="No">No</option>
                                                                    </select>
                                                                </td>
                                                            </tr>`;

    $('#tbodyFamilyDetailsInformation').append(row)
});

$('.removeBtn').click(function () {
    $('.trofFamilyDetails').last().remove();
    countEmployer--
    if ($('#tbodyFamilyDetailsInformation .trofFamilyDetails').length == 0) {
        $('.removeBtn').hide();
    }
})



$(".removeBtn2").hide();


$(".addBtn2").click(function () {
    $(".removeBtn2").show();
    countNominationForGratuity++;
    let row = `  <tr class='trofNominationForGratuity'  id="row2_${countNominationForGratuity}">
                                                                <td>
                                                                    ${countNominationForGratuity
        }.
                                                                    <input type="hidden" id="hiddenGratuitySmall_${countNominationForGratuity
        }" value='0' >  
                                                                </td>
                                                                <td>
                                                                    <input type="text" class="form-control" id="inputNomineeNamePersonalInformationForm_${countNominationForGratuity}">
                                                                </td>
                                                                <td>
                                                                    <input type="text" class="form-control datepickerr" placeholder='select date' id="inputNomineeDobPersonalInformationForm_${countNominationForGratuity}">
                                                                </td>
                                                                <td>
                                                                    <input type="text" class="form-control" id="inputNomineeRelationPersonalInformationForm_${countNominationForGratuity}">
                                                                </td>
                                                                <td>
                                                                    <input type="text" class="form-control" id="inputNomineeAddressPersonalInformationForm_${countNominationForGratuity}">
                                                                </td>
                                                                 <td>
                                                                    <input type="text" class="form-control" id="inputNomineeAddressPersonalInformationFormAdharNumber_${countNominationForGratuity}">
                                                                </td>
                                                                <td>
                                                                    <input type="text" class="form-control" id="inputNomineeSharePersonalInformationForm_${countNominationForGratuity}">
                                                                </td>
                                                            </tr>`;

    $('#tbodyNominationGratuity').append(row)
});

$('.removeBtn2').click(function () {
    $('.trofNominationForGratuity').last().remove();
    countNominationForGratuity--;
    if ($('#tbodyNominationGratuity .trofNominationForGratuity').length == 0) {
        $('.removeBtn2').hide();
    }
})


$(".removeBtn3").hide();


$(".addBtn3").click(function () {
    $(".removeBtn3").show();
    countNominationForProvidentFund++
    let row = `  <tr class='trofNominationForPf'  id="row2_${countNominationForProvidentFund}">
                                                                <td>
                                                                    ${countNominationForProvidentFund
        }.
                                                                    <input type="hidden" id="hiddenProvidentFund_${countNominationForProvidentFund
        }" value='0' >  
                                                                </td>
                                                                <td>
                                                                    <input type="text" class="form-control" id="inputProvidentNomineeNamePersonalInformationForm_${countNominationForProvidentFund}">
                                                                </td>
                                                                <td>
                                                                    <input type="text" placeholder='select date' class="form-control datepickerr" id="inputProvidentNomineeDobPersonalInformationForm_${countNominationForProvidentFund}">
                                                                </td>
                                                                <td>
                                                                    <input type="text" class="form-control" id="inputProvidentNomineeRelationPersonalInformationForm_${countNominationForProvidentFund}">
                                                                </td>
                                                                <td>
                                                                    <input type="text" class="form-control" id="inputProvidentNomineeAddressPersonalInformationForm_${countNominationForProvidentFund}">
                                                                </td>
                                                                <td>
                                                                    <input type="text" class="form-control" id="inputProvidentNomineeSharePersonalInformationForm_${countNominationForProvidentFund}">
                                                                </td>
                                                            </tr>`;
    $('#tbodyProvidentNominationGratuity').append(row);
});

$('.removeBtn3').click(function () {
    $('.trofNominationForPf').last().remove();
    countNominationForProvidentFund--;
    if ($('#tbodyProvidentNominationGratuity .trofNominationForPf').length == 0) {
        $('.removeBtn3').hide();
    }
})


$(".removeBtn4").hide();


$(".addBtn4").click(function () {
    $(".removeBtn4").show();
    countEmployer++;
    let row = `   <tr class="trOthers4PersonalInformation" id="row_${countEmployer}">
                                                                <td>
                                                                    ${countEmployer}.
                                                                    <input type="hidden" id="hiddenEmployer_${countEmployer}" value="0">
                                                                </td>
                                                                <td>
                                                                    <input type="text" class="form-control" id="inputPreviousEmployerNamePersonalInformationForm_${countEmployer}">
                                                                </td>
                                                                <td>
                                                                    <input type="text" placeholder='select date' class="form-control datepickerr" id="inputPreviousEmployerFromPersonalInformationForm_${countEmployer}">
                                                                </td>
                                                                <td>
                                                                    <input type="text"  placeholder='select date' class="form-control datepickerr" id="inputPreviousEmployerToPersonalInformationForm_${countEmployer}">
                                                                </td>
                                                                <td>
                                                                    <input type="text" class="form-control" id="inputPreviousEmployerDesignationPersonalInformationForm_${countEmployer}">
                                                                </td>
                                                                <td>
                                                                    <input type="text" class="form-control" id="inputPreviousEmployerDepartmentPersonalInformationForm_${countEmployer}">
                                                                </td>
                                                                <td>
                                                                    <input type="text" class="form-control" id="inputPreviousEmployerCityPersonalInformationForm_${countEmployer}">
                                                                </td>
                                                                <td>
                                                                    <input type="text" class="form-control" id="inputPreviousEmployerWorkNaturePersonalInformationForm_${countEmployer}">
                                                                </td>
                                                                <td>
                                                                    <input type="text" class="form-control" id="inputPreviousEmployerNaturePersonalInformationForm_${countEmployer}">
                                                                </td>
                                                                <td>
                                                                    <input type="text" class="form-control min-wd-100" id="inputPreviousEmployerSalaryPersonalInformationForm_${countEmployer}">
                                                                </td>
                                                            </tr>`;

    $('#tbodyPreviousEmployerInformation').append(row)

});

$('.removeBtn4').click(function () {
    $('.trOthers4PersonalInformation').last().remove();
    countEmployer--;
    if ($('#tbodyPreviousEmployerInformation .trOthers4PersonalInformation').length == 0) {
        $('.removeBtn4').hide();
    }
})


$(".removeUndertakingCompRow").hide();
$(".addUndertakingCompRow").click(function () {
    $(".removeUndertakingCompRow").show();
    countUnderTaking++
    let row = `<tr class='trofUnderTaking' id="row4_${countUnderTaking}">
        <td>
            ${countUnderTaking
        }.
            <input type="hidden" id="hiddenUndertaking_${countUnderTaking
        }" value='0' >
        </td>
        <td>
            <input type="text" class="form-control" id="inputCompanyNameUndertaking_${countUnderTaking}" >
        </td>
        <td>
            <input type="text" class="form-control" id="inputPostAppliedUndertaking_${countUnderTaking}"  >
        </td>
    </tr>`
    $('#tbodyUndertakingCompanyInfo').append(row)
});

$('.removeUndertakingCompRow').click(function () {
    $('.trofUnderTaking').last().remove();
    countUnderTaking--;
    if ($('#tbodyUndertakingCompanyInfo .trofUnderTaking').length == 0) {
        $('.removeUndertakingCompRow').hide();
    }
})

$(".removeNominationGratuity").hide();
$(".addNominationGratuity").click(function () {
    $(".removeNominationGratuity").show();
    countSet5NpominationForGratutity++
    let row = ` <tr class='trofSet5NpominationForGratutity'  id="row5_${countSet5NpominationForGratutity}">
                                                    <td>
                                                     ${countSet5NpominationForGratutity}.
                                                                    <input type="hidden" id="hiddenSet5NpominationForGratutity_${countSet5NpominationForGratutity}" value='0' > 
                                                    <td>
                                                            <td>
                                                                <input type="text" class="form-control" id="inputNomineeNameNominationGratuity_${countSet5NpominationForGratutity}" >
                                                               
                                                            </td>
                                                            <td>
                                                                <select class="form-control" id="selectNomineeRelationNominationGratuity_${countSet5NpominationForGratutity}">
                                                                    
                                                                    <option>Selet One</option>
                                                                    <option>Father</option>
                                                                    <option>Mother</option>
                                                                    <option >Spouse</option>
                                                                    <option>Son/Daughter</option>
                                                                </select>
                                                            </td>
                                                            <td>
                                                                <input type="text" class="form-control" id="inputNomineeAgeNominationGratuity_${countSet5NpominationForGratutity}" />
                                                            </td>
                                                             <td>
                                                                <input type="text" class="form-control" id="inputGratuityPortionNominationGratuity_${countSet5NpominationForGratutity}" />
                                                            </td>
                                                        </tr>`

    $('#tbodyNomineeTable').append(row)
});

$('.removeNominationGratuity').click(function () {
    $('.trofSet5NpominationForGratutity').last().remove();
    countSet5NpominationForGratutity--;
    if ($('#tbodyNomineeTable .trofSet5NpominationForGratutity').length == 0) {
        $('.removeNominationGratuity').hide();
    }
})

// JOINING ALL SECTION OPENS

$(document).ready(function () {
    $('.option').click(function () {
        var index = $(this).index();
        $('.details').hide().eq(index).slideDown();
    });

    $(".option").click(function () {
        $(".option").removeClass("topBtnActive");
        $(this).addClass("topBtnActive");
    });



});

function selectPlaceOfPosting1Change() {
    
    let selectPlaceOfPosting1 = $('#selectPlaceOfPosting1').val();
    let selectPlaceOfPosting2 = $('#selectPlaceOfPosting2').val();
    let selectPlaceOfPosting3 = $('#selectPlaceOfPosting3').val();

    if (selectPlaceOfPosting1 == selectPlaceOfPosting2) {
        $('#selectPlaceOfPosting1').val('Select One');
    }

    //if (selectPlaceOfPosting2 == selectPlaceOfPosting3) {
    //    $('#selectPlaceOfPosting2').val('Select One');
    //}

    if (selectPlaceOfPosting1 == selectPlaceOfPosting3) {
        $('#selectPlaceOfPosting1').val('Select One');
    }
}

function selectPlaceOfPosting2Change() {
    
    let selectPlaceOfPosting1 = $('#selectPlaceOfPosting1').val();
    let selectPlaceOfPosting2 = $('#selectPlaceOfPosting2').val();
    let selectPlaceOfPosting3 = $('#selectPlaceOfPosting3').val();

    if (selectPlaceOfPosting1 == selectPlaceOfPosting2) {
        $('#selectPlaceOfPosting2').val('Select One');
    }

    if (selectPlaceOfPosting2 == selectPlaceOfPosting3) {
        $('#selectPlaceOfPosting2').val('Select One');
    }

    //if (selectPlaceOfPosting1 == selectPlaceOfPosting3) {
    //    $('#selectPlaceOfPosting3').val('Select One');
    //}
}

function selectPlaceOfPosting3Change() {
    
    let selectPlaceOfPosting1 = $('#selectPlaceOfPosting1').val();
    let selectPlaceOfPosting2 = $('#selectPlaceOfPosting2').val();
    let selectPlaceOfPosting3 = $('#selectPlaceOfPosting3').val();

    //if (selectPlaceOfPosting1 == selectPlaceOfPosting2) {
    //    $('#selectPlaceOfPosting1').val('Select One');
    //}

    if (selectPlaceOfPosting2 == selectPlaceOfPosting3) {
        $('#selectPlaceOfPosting3').val('Select One');
    }

    if (selectPlaceOfPosting1 == selectPlaceOfPosting3) {
        $('#selectPlaceOfPosting3').val('Select One');
    }
}


// TABLE DATA FUNCTIONALITIES



$(document).ready(function () {
    $(".dropdown").click(function () {
        var index = $(this).data("index");
        //$(".dropdownDetails").not("[data-index=" + index + "]").slideUp();
        $(".dropdownDetails[data-index=" + index + "]").slideToggle();

        $(this).find(".dropdownExpand").toggleClass("display-none2");
        $(this).find(".dropdownClose").toggleClass("display-none2");
        $(this).find(".spanPlus").toggleClass("display-none2");
        //$(this).find(".spanMinus").toggleClass("display-none2");
    });
});

//document.getElementById('selectReligionPersonalInformationForm').addEventListener('change', function () {
//    var selectedOption = this.options[this.selectedIndex];
//    var otherReligionInput = document.getElementById('inputOtherReligionPIForm');

//    if (selectedOption.id === '7') {
//        otherReligionInput.style.display = 'inline-block';
//    } else {
//        otherReligionInput.style.display = 'none';
//    }
//});
document.getElementById('selectDisabilityPersonalInformationForm').addEventListener('change', function () {
    var selectedOption = this.options[this.selectedIndex];
    var otherReligionInput = document.getElementById('trDisabilityYes');

    if (selectedOption.id === '1') {
        otherReligionInput.style.display = 'block';
    } else {
        otherReligionInput.style.display = 'none';
    }
});

var countEmployer = 0;
function getEmployerDataFromApi() {
    var url = apiBaseUrlHr + `/api/CandidateJoining/GetEmployerJoiningDetails?CandidateId=${candidateId}`;
    url = url.replace(/[\u200B-\u200D\uFEFF]/g, '');
    $.ajax({
        type: "GET",
        url: url,
        //data: '{}',
        contentType: "application/json; charset=utf-8",
        dataType: "json",

        beforeSend: function () {

            $('.page-loader').show();

        },
        success: function (response) {
            ;

            loadEmployerDetails(response.data)

            $('.page-loader').hide();


        },
        error: function (err) {
            $('.page-loader').hide();
            switch (err.status) {

                case "401":
                    window.location.href = unAuthorisedUrl;
                    break;
                case "403":
                    window.location.href = forbiddenUrl;
                    break;
                default:

                    break;
            }
        },

        failure: function (response) {
            // alert(response.d);
            $('.page-loader').hide();
        }
    });


}
function loadEmployerDetails(listDataEmployer) {
    countEmployer = 0;
    

    var tbodyPreviousEmployerInformation = $("#tbodyPreviousEmployerInformation");
    tbodyPreviousEmployerInformation.empty();
    ;
    if (listDataEmployer != null)
        for (let e of listDataEmployer) {

            countEmployer++;
            let row = `   <tr class="trOthers4PersonalInformation" id="row_${countEmployer}">
                                                                <td>
                                                                    ${countEmployer
                }.
                                                                    <input type="hidden" id="hiddenEmployer_${countEmployer
                }" value=${e.id} >
                                                                </td>
                                                                <td>
                                                                    <input type="text" class="form-control" id="inputPreviousEmployerNamePersonalInformationForm_${countEmployer}" value="${e.name_of_Previous_Employer}">
                                                                </td>
                                                                <td>
                                                                    <input type="text" placeholder='select date' class="form-control datepickerr" id="inputPreviousEmployerFromPersonalInformationForm_${countEmployer}" value="${e.start_Date == null ? "" : formatDate_dd_mm_yyyy_New_Formate(new Date(Date.parse(e.start_Date)))}">
                                                                </td>
                                                                <td>
                                                                    <input type="text" placeholder='select date' class="form-control datepickerr" id="inputPreviousEmployerToPersonalInformationForm_${countEmployer}" value="${e.end_Date == null ? "" : formatDate_dd_mm_yyyy_New_Formate(new Date(Date.parse(e.end_Date)))}">
                                                                </td>
                                                                <td>
                                                                    <input type="text" class="form-control" id="inputPreviousEmployerDesignationPersonalInformationForm_${countEmployer}" value="${e.designation == null ? '' : e.designation}">
                                                                </td>
                                                                <td>
                                                                    <input type="text" class="form-control" id="inputPreviousEmployerDepartmentPersonalInformationForm_${countEmployer}" value="${e.department == null ? '' : e.department}">
                                                                </td>
                                                                <td>
                                                                    <input type="text" class="form-control" id="inputPreviousEmployerCityPersonalInformationForm_${countEmployer}" value="${e.city == null ? '' : e.city}">
                                                                </td>
                                                                <td>
                                                                    <input type="text" class="form-control" id="inputPreviousEmployerWorkNaturePersonalInformationForm_${countEmployer}"  value="${e.nature_of_Work == null ? '' : e.nature_of_Work}">
                                                                </td>
                                                                <td>
                                                                    <input type="text" class="form-control" id="inputPreviousEmployerNaturePersonalInformationForm_${countEmployer}"  value="${e.nature_permanent_contract == null ? '' : e.nature_permanent_contract}">
                                                                </td>
                                                                <td>
                                                                    <input type="text" class="form-control min-wd-100" id="inputPreviousEmployerSalaryPersonalInformationForm_${countEmployer}" value="${e.salary == null ? '' : e.salary}">
                                                                </td>
                                                            </tr>`;


            tbodyPreviousEmployerInformation.append(row);

        }
    ;
    if (countEmployer == 0) {

        countEmployer++;
        let row = `   <tr class="trOthers4PersonalInformation" id="row_${countEmployer}">
                                                                <td>
                                                                    ${countEmployer}.
                                                                    <input type="hidden" id="hiddenEmployer_${countEmployer
            }" value="0" >
                                                                </td>
                                                                <td>
                                                                    <input type="text" class="form-control" id="inputPreviousEmployerNamePersonalInformationForm_${countEmployer}">
                                                                </td>
                                                                <td>
                                                                    <input type="text" placeholder='select date' class="form-control datepickerr" id="inputPreviousEmployerFromPersonalInformationForm_${countEmployer}">
                                                                </td>
                                                                <td>
                                                                    <input type="text" placeholder='select date' class="form-control datepickerr" id="inputPreviousEmployerToPersonalInformationForm_${countEmployer}">
                                                                </td>
                                                                <td>
                                                                    <input type="text" class="form-control" id="inputPreviousEmployerDesignationPersonalInformationForm_${countEmployer}">
                                                                </td>
                                                                <td>
                                                                    <input type="text" class="form-control" id="inputPreviousEmployerDepartmentPersonalInformationForm_${countEmployer}">
                                                                </td>
                                                                <td>
                                                                    <input type="text" class="form-control" id="inputPreviousEmployerCityPersonalInformationForm_${countEmployer}">
                                                                </td>
                                                                <td>
                                                                    <input type="text" class="form-control" id="inputPreviousEmployerWorkNaturePersonalInformationForm_${countEmployer}">
                                                                </td>
                                                                <td>
                                                                    <input type="text" class="form-control" id="inputPreviousEmployerNaturePersonalInformationForm_${countEmployer}">
                                                                </td>
                                                                <td>
                                                                    <input type="text" class="form-control min-wd-100" id="inputPreviousEmployerSalaryPersonalInformationForm_${countEmployer}">
                                                                </td>
                                                            </tr>`;
        tbodyPreviousEmployerInformation.append(row);
    }




}

function saveEmployerDeatis() {
    
    var tbodyPreviousEmployerInformation = $("#tbodyPreviousEmployerInformation > tr");
    var objArrEmployer = [];
    for (let row of tbodyPreviousEmployerInformation) {
       
        let index = row.id.split('_')[1];
        let idOfTable = $("#hiddenEmployer_" + index).val();
        let inputPreviousEmployerNamePersonalInformationForm = $("#inputPreviousEmployerNamePersonalInformationForm_" + index).val();
        let inputPreviousEmployerFromPersonalInformationForm = $("#inputPreviousEmployerFromPersonalInformationForm_" + index).val();
        let inputPreviousEmployerToPersonalInformationForm = $("#inputPreviousEmployerToPersonalInformationForm_" + index).val();
        let inputPreviousEmployerDesignationPersonalInformationForm = $("#inputPreviousEmployerDesignationPersonalInformationForm_" + index).val();
        let inputPreviousEmployerDepartmentPersonalInformationForm = $("#inputPreviousEmployerDepartmentPersonalInformationForm_" + index).val();
        let inputPreviousEmployerCityPersonalInformationForm = $("#inputPreviousEmployerCityPersonalInformationForm_" + index).val();
        let inputPreviousEmployerWorkNaturePersonalInformationForm = $("#inputPreviousEmployerWorkNaturePersonalInformationForm_" + index).val();
        let inputPreviousEmployerNaturePersonalInformationForm = $("#inputPreviousEmployerNaturePersonalInformationForm_" + index).val();
        let inputPreviousEmployerSalaryPersonalInformationForm = parseFloat($("#inputPreviousEmployerSalaryPersonalInformationForm_" + index).val())

        if (inputPreviousEmployerFromPersonalInformationForm != "" && inputPreviousEmployerFromPersonalInformationForm != null) {
            inputPreviousEmployerFromPersonalInformationForm = formatToIsodateFormate(inputPreviousEmployerFromPersonalInformationForm)
        }
        if (inputPreviousEmployerToPersonalInformationForm != "" && inputPreviousEmployerToPersonalInformationForm != null) {
            inputPreviousEmployerToPersonalInformationForm = formatToIsodateFormate(inputPreviousEmployerToPersonalInformationForm)
        }

       //inputPreviousEmployerFromPersonalInformationForm = formatToIsodateFormate(inputPreviousEmployerFromPersonalInformationForm)
       // inputPreviousEmployerToPersonalInformationForm = formatToIsodateFormate(inputPreviousEmployerToPersonalInformationForm)
        let obj = {
            id: idOfTable,
            name_of_Previous_Employer: inputPreviousEmployerNamePersonalInformationForm,
            start_Date: inputPreviousEmployerFromPersonalInformationForm == "" ? null : inputPreviousEmployerFromPersonalInformationForm,
            end_Date: inputPreviousEmployerToPersonalInformationForm == "" ? null : inputPreviousEmployerToPersonalInformationForm,
            designation: inputPreviousEmployerDesignationPersonalInformationForm,
            department: inputPreviousEmployerDepartmentPersonalInformationForm,
            city: inputPreviousEmployerCityPersonalInformationForm,
            nature_of_Work: inputPreviousEmployerWorkNaturePersonalInformationForm,
            nature_permanent_contract: inputPreviousEmployerNaturePersonalInformationForm,
            salary: inputPreviousEmployerSalaryPersonalInformationForm == NaN || "" ? null : inputPreviousEmployerSalaryPersonalInformationForm
        }

        objArrEmployer.push(obj);
    }
    var _url = apiBaseUrlHr + "/api/CandidateJoining/SaveEmployerJoiningDetails/" + candidateId;
    _url = _url.replace(/[\u200B-\u200D\uFEFF]/g, '');

    $.ajax({
        type: "POST",
        url: _url,
        data: JSON.stringify(objArrEmployer),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        //processData: false,
        //contentType: false,
        /*headers: { Authorization: ApiToken },*/
        beforeSend: function () {
            //var ApiObject = CheckApiCall();
            //if (ApiObject.isCall == false) {
            //    window.location.href = mainLoginUrl;
            //    return false;
            //}
            $('.page-loader').show();

        },
        success: function (response) {

            //loadAllDataOfJoiningCandidate();
            $('.page-loader').hide();


            if (response.statusCode == 201 || response.statusCode == 200) {
                Swal.fire({
                    title: 'Success !',
                    text: response.statusCode == 201 ? 'Employer Details updated Successfully' : response.message,
                    icon: "success"
                })
                getEmployerDataFromApi()
                PrintFormA()
            }

            $('.page-loader').hide();


        },
        complete: function () {

            $('.page-loader').hide();

        },
        error: function (jqXHR, status) {

            $('.page-loader').hide();

            Swal.fire({
                title: 'Invalid !',
                text: jqXHR.responseJSON.title,
                icon: "error"
            });

            switch (jqXHR.status) {

                case "401":
                    window.location.href = unAuthorisedUrl;
                    break;
                case "403":
                    window.location.href = forbiddenUrl;
                    break;
                default:
                    ;
                    break;
            }
        }
    });


}

function getFamilyDetailsDataFromApi() {
    var url = apiBaseUrlHr + `/api/CandidateJoining/FamilyDetailsJoining?CandidateId=${candidateId}`;
    url = url.replace(/[\u200B-\u200D\uFEFF]/g, '');
    $.ajax({
        type: "GET",
        url: url,
        //data: '{}',
        contentType: "application/json; charset=utf-8",
        dataType: "json",

        beforeSend: function () {

            $('.page-loader').show();

        },
        success: function (response) {

            console.log(response.data)
            loadFamilyDetails(response.data)

            $('.page-loader').hide();


        },
        error: function (err) {
            $('.page-loader').hide();
            switch (err.status) {

                case "401":
                    window.location.href = unAuthorisedUrl;
                    break;
                case "403":
                    window.location.href = forbiddenUrl;
                    break;
                default:

                    break;
            }
        },

        failure: function (response) {
            // alert(response.d);
            $('.page-loader').hide();
        }
    });


}

var countFamilyDetails = 0;
function loadFamilyDetails(listFamilyDetails) {
    countFamilyDetails = 0;
    console.log(listFamilyDetails)

    var tbodyFamilyDetailsInformation = $("#tbodyFamilyDetailsInformation");
    tbodyFamilyDetailsInformation.empty();
    if (listFamilyDetails != null)
        for (let e of listFamilyDetails) {

            var selectValuefrombackend;

            if (e.relationship_with_Employee == 'Self') {
                selectValuefrombackend = `<option selected value="Self">Self</option>
                                                                     <option value="Spouse">Spouse</option>
                                                                    <option value="Son">Son</option>
                                                                    <option value="Daughter">Daughter</option>
                                                                    <option value="Father">Father</option>
                                                                    <option value="Mother">Mother</option> `

            } else if (e.relationship_with_Employee == 'Spouse') {
                selectValuefrombackend = `<option value="Self">Self</option>
                                                                     <option selected value="Spouse">Spouse</option>
                                                                    <option value="Son">Son</option>
                                                                    <option value="Daughter">Daughter</option>
                                                                    <option value="Father">Father</option>
                                                                    <option value="Mother">Mother</option> `
            }
            else if (e.relationship_with_Employee == 'Son') {
                selectValuefrombackend = `<option value="Self">Self</option>
                                                                     <option  value="Spouse">Spouse</option>
                                                                    <option selected value="Son">Son</option>
                                                                    <option value="Daughter">Daughter</option>
                                                                    <option value="Father">Father</option>
                                                                    <option value="Mother">Mother</option> `
            }
            else if (e.relationship_with_Employee == 'Daughter') {
                selectValuefrombackend = `<option value="Self">Self</option>
                                                                     <option  value="Spouse">Spouse</option>
                                                                    <option  value="Son">Son</option>
                                                                    <option selected value="Daughter">Daughter</option>
                                                                    <option value="Father">Father</option>
                                                                    <option value="Mother">Mother</option> `
            }
            else if (e.relationship_with_Employee == 'Father') {
                selectValuefrombackend = `<option value="Self">Self</option>
                                                                     <option  value="Spouse">Spouse</option>
                                                                    <option  value="Son">Son</option>
                                                                    <option  value="Daughter">Daughter</option>
                                                                    <option selected value="Father">Father</option>
                                                                    <option value="Mother">Mother</option> `
            }
            else if (e.relationship_with_Employee == 'Mother') {
                selectValuefrombackend = `<option value="Self">Self</option>
                                                                     <option  value="Spouse">Spouse</option>
                                                                    <option  value="Son">Son</option>
                                                                    <option  value="Daughter">Daughter</option>
                                                                    <option  value="Father">Father</option>
                                                                    <option selected value="Mother">Mother</option> `
            }

            countFamilyDetails++;
            let row = `    <tr  class='trofFamilyDetails' id="row1_${countFamilyDetails}">
                                                                <td >
                                                                  ${countFamilyDetails
                }.
                                                                    <input type="hidden" id="hiddenFamily_${countFamilyDetails
                }" value=${e.id} >
                                                                </td>
                                                                <td>
                                                                    <input type="text" class="form-control" id="inputFamilyNamePersonalInformationForm_${countFamilyDetails}" value='${e.name}'>
                                                                </td>
                                                                <td>
                                                                    <input  type="text" placeholder='select date'  class="form-control datepickerr" id="inputFamilyDobPersonalInformationForm_${countFamilyDetails}" value='${e.dob == null ? "" : formatDate_dd_mm_yyyy_New_Formate(new Date(Date.parse(e.dob)))}'>
                                                                </td>
                                                                <td>
                                                                    <input type="text" class="form-control" id="inputFamilyAgePersonalInformationForm_${countFamilyDetails}" value='${e.age == null ? "" : e.age}'>
                                                                </td>
                                                                <td>
                                                                    
                                                                     <select  class="form-control" id="inputFamilyRelationPersonalInformationForm_${countFamilyDetails}">
                                                                     ${selectValuefrombackend}                                                                  
                                                                    </select>
                                                                </td>
                                                                <td>
                                                                    <select class="form-control" id="selectFamilyWorkingPersonalInformationForm_${countFamilyDetails}">
                                                                     
                                                                        <option id="${e.working == 'Yes' ? 'Yes' : 'No'}">${e.working == 'Yes' ? 'Yes' : 'No'}</option>
                                                                        <option id="${e.working == 'Yes' ? 'No' : 'Yes'}">${e.working == 'Yes' ? 'No' : 'Yes'}</option>
                                                                    </select>
                                                                </td>
                                                                <td>
                                                                    <select class="form-control" id="selectFamilyLtcEligibilityPersonalInformationForm_${countFamilyDetails}">
                                                                 
                                                                        <option id="${e.ltC_Eligibility == 'Yes' ? 'Yes' : 'No'}">${e.ltC_Eligibility == 'Yes' ? 'Yes' : 'No'}</option>
                                                                        <option id="${e.ltC_Eligibility == 'Yes' ? 'No' : 'Yes'}">${e.ltC_Eligibility == 'Yes' ? 'No' : 'Yes'}</option>
                                                                    </select>
                                                                </td>
                                                                <td>
                                                                    <select class="form-control" id="selectFamilyMedicalEligibilityPersonalInformationForm_${countFamilyDetails}">
                                                                     
                                                                        <option id="${e.medical_Eligibility == 'Yes' ? 'Yes' : 'No'}">${e.medical_Eligibility == 'Yes' ? 'Yes' : 'No'}</option>
                                                                        <option id="${e.medical_Eligibility == 'Yes' ? 'No' : 'Yes'}">${e.medical_Eligibility == 'Yes' ? 'No' : 'Yes'}</option>
                                                                    </select>
                                                                </td>
                                                            </tr>`;


            tbodyFamilyDetailsInformation.append(row);

        }
    ;
    if (countFamilyDetails == 0) {

        countFamilyDetails++;
        let row = `  <tr class='trofFamilyDetails'  id="row1_${countFamilyDetails}">
                                                                <td >
                                                                  ${countFamilyDetails
            }.
                                                                    <input type="hidden" id="hiddenFamily_${countFamilyDetails
            }" value='0' >
                                                                </td>
                                                                <td>
                                                                    <input type="text" class="form-control" id="inputFamilyNamePersonalInformationForm_${countFamilyDetails}">
                                                                </td>
                                                                <td>
                                                                    <input  type="text" placeholder='select date'  class="form-control datepickerr" id="inputFamilyDobPersonalInformationForm_${countFamilyDetails}">
                                                                </td>
                                                                <td>
                                                                    <input type="text" class="form-control" id="inputFamilyAgePersonalInformationForm_${countFamilyDetails}">
                                                                </td>
                                                                <td>
                                                                    <select  class="form-control" id="inputFamilyRelationPersonalInformationForm_${countFamilyDetails}">
                                                                   <option value="Self">Self</option>
                                                                    <option value="Spouse">Spouse</option>
                                                                    <option value="Son">Son</option>
                                                                    <option value="Daughter">Daughter</option>
                                                                    <option value="Father">Father</option>
                                                                    <option value="Mother">Mother</option>                                                                   
                                                                    </select>
                                                                </td>
                                                                <td>
                                                                    <select class="form-control" id="selectFamilyWorkingPersonalInformationForm_${countFamilyDetails}">
                                                                     
                                                                        <option id="Yes">Yes</option>
                                                                        <option id="No">No</option>
                                                                    </select>
                                                                </td>
                                                                <td>
                                                                    <select class="form-control" id="selectFamilyLtcEligibilityPersonalInformationForm_${countFamilyDetails}">
                                                                       
                                                                     <option id="Yes">Yes</option>
                                                                        <option id="No">No</option>
                                                                    </select>
                                                                </td>
                                                                <td>
                                                                    <select class="form-control" id="selectFamilyMedicalEligibilityPersonalInformationForm_${countFamilyDetails}">
                                                                      
                                                                      <option id="Yes">Yes</option>
                                                                        <option id="No">No</option>
                                                                    </select>
                                                                </td>
                                                            </tr>`;
        tbodyFamilyDetailsInformation.append(row);
    }




}


function saveFamilyDeatis() {
    
    var objArrEmployer = []
    var tbodyFamilyDetailsInformation = $("#tbodyFamilyDetailsInformation > tr");
    for (let row of tbodyFamilyDetailsInformation) {

        let index = row.id.split('_')[1];
        let idOfTable = $("#hiddenFamily_" + index).val();
        let inputFamilyNamePersonalInformationForm = $("#inputFamilyNamePersonalInformationForm_" + index).val();
        let inputFamilyDobPersonalInformationForm = $("#inputFamilyDobPersonalInformationForm_" + index).val();
        let inputFamilyAgePersonalInformationForm = $("#inputFamilyAgePersonalInformationForm_" + index).val();
        let inputFamilyRelationPersonalInformationForm = $("#inputFamilyRelationPersonalInformationForm_" + index).val();
        let selectFamilyWorkingPersonalInformationForm = $("#selectFamilyWorkingPersonalInformationForm_" + index).val();
        let selectFamilyLtcEligibilityPersonalInformationForm = $("#selectFamilyLtcEligibilityPersonalInformationForm_" + index).val();
        let selectFamilyMedicalEligibilityPersonalInformationForm = $("#selectFamilyMedicalEligibilityPersonalInformationForm_" + index).val();
        if (inputFamilyDobPersonalInformationForm != "" && inputFamilyDobPersonalInformationForm != null) {
            inputFamilyDobPersonalInformationForm = formatToIsodateFormate(inputFamilyDobPersonalInformationForm)
        }

        let obj = {
            id: idOfTable,
            name: inputFamilyNamePersonalInformationForm,
            dob: inputFamilyDobPersonalInformationForm == "" ? null : inputFamilyDobPersonalInformationForm,
            age: inputFamilyAgePersonalInformationForm == '' ? null : parseFloat(inputFamilyAgePersonalInformationForm),
            relationship_with_Employee: inputFamilyRelationPersonalInformationForm,
            working: selectFamilyWorkingPersonalInformationForm,
            ltC_Eligibility: selectFamilyLtcEligibilityPersonalInformationForm,
            medical_Eligibility: selectFamilyMedicalEligibilityPersonalInformationForm
        }

        objArrEmployer.push(obj);

    }

    var _url = apiBaseUrlHr + "/api/CandidateJoining/SaveFamilyDetailsJoining/" + candidateId;
    _url = _url.replace(/[\u200B-\u200D\uFEFF]/g, '');

    $.ajax({
        type: "POST",
        url: _url,
        data: JSON.stringify(objArrEmployer),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        //processData: false,
        //contentType: false,
        /*headers: { Authorization: ApiToken },*/
        beforeSend: function () {
            //var ApiObject = CheckApiCall();
            //if (ApiObject.isCall == false) {
            //    window.location.href = mainLoginUrl;
            //    return false;
            //}
            $('.page-loader').show();

        },
        success: function (response) {

            //loadAllDataOfJoiningCandidate();
            $('.page-loader').hide();


            if (response.statusCode == 201 || response.statusCode == 200) {
                Swal.fire({
                    title: 'Success !',
                    text: response.statusCode == 201 ? 'Employer Details updated Successfully' : response.message,
                    icon: "success"
                })
                getFamilyDetailsDataFromApi()
                PrintFormA()
            }

            $('.page-loader').hide();


        },
        complete: function () {

            $('.page-loader').hide();

        },
        error: function (jqXHR, status) {

            $('.page-loader').hide();

            Swal.fire({
                title: 'Invalid !',
                text: jqXHR.responseJSON.title,
                icon: "error"
            });

            switch (jqXHR.status) {

                case "401":
                    window.location.href = unAuthorisedUrl;
                    break;
                case "403":
                    window.location.href = forbiddenUrl;
                    break;
                default:
                    ;
                    break;
            }
        }
    });


}



function getNominationForGratuityDataFromApi() {
    var url = apiBaseUrlHr + `/api/CandidateJoining/GetNominatioForGratuityPFJoiningDetails?CandidateId=${candidateId}`;
    url = url.replace(/[\u200B-\u200D\uFEFF]/g, '');
    $.ajax({
        type: "GET",
        url: url,
        //data: '{}',
        contentType: "application/json; charset=utf-8",
        dataType: "json",

        beforeSend: function () {

            $('.page-loader').show();

        },
        success: function (response) {
            ;

            loadNominationForGratuity(response.data)

            $('.page-loader').hide();


        },
        error: function (err) {
            $('.page-loader').hide();
            switch (err.status) {

                case "401":
                    window.location.href = unAuthorisedUrl;
                    break;
                case "403":
                    window.location.href = forbiddenUrl;
                    break;
                default:

                    break;
            }
        },

        failure: function (response) {
            // alert(response.d);
            $('.page-loader').hide();
        }
    });


}

var countNominationForGratuity = 0;
function loadNominationForGratuity(listNominationForGratuity) {
    countNominationForGratuity = 0;


    var tbodyNominationGratuity = $("#tbodyNominationGratuity");
    tbodyNominationGratuity.empty();
    if (listNominationForGratuity !== null)
        for (let e of listNominationForGratuity) {

            countNominationForGratuity++;
            let row = `    <tr class='trofNominationForGratuity'  id="row2_${countNominationForGratuity}">
                                                                <td>
                                                                    ${countNominationForGratuity
                }.
                                                                    <input type="hidden" id="hiddenGratuitySmall_${countNominationForGratuity
                }" value=${e.id} >  
                                                                </td>
                                                                <td>
                                                                    <input type="text" class="form-control" id="inputNomineeNamePersonalInformationForm_${countNominationForGratuity}" value='${e.nominee_Name}'>
                                                                </td>
                                                                <td>
                                                                    <input type="text" class="form-control datepickerr" placeholder='select date' id="inputNomineeDobPersonalInformationForm_${countNominationForGratuity}" value='${e.nominee_DOB == null?"":formatDate_dd_mm_yyyy_New_Formate(new Date(Date.parse(e.nominee_DOB)))}'>
                                                                </td>
                                                                <td>
                                                                    <input type="text" class="form-control" id="inputNomineeRelationPersonalInformationForm_${countNominationForGratuity}"  value='${e.relationship_with_Employee}'>
                                                                </td>
                                                                <td>
                                                                    <input type="text" class="form-control" id="inputNomineeAddressPersonalInformationForm_${countNominationForGratuity}" value='${e.complete_Address_of_Nominee_Guardian_including_Guadian_Name_if_minor}'>
                                                                </td>
                                                                <td>
                                                                    <input type="text" class="form-control" id="inputNomineeAddressPersonalInformationFormAdharNumber_${countNominationForGratuity}" value='${e.nomineeAadhar_Number == null ? "" : e.nomineeAadhar_Number}'>
                                                                </td>
                                                                <td>
                                                                    <input type="text" class="form-control" id="inputNomineeSharePersonalInformationForm_${countNominationForGratuity}" value='${e.percentage_Of_Share}'>
                                                                </td>
                                                            </tr>`;


            tbodyNominationGratuity.append(row);

        }
    ;
    if (countNominationForGratuity == 0) {

        countNominationForGratuity++;
        let row = `  <tr class='trofNominationForGratuity'  id="row2_${countNominationForGratuity}">
                                                                <td>
                                                                    ${countNominationForGratuity
            }.
                                                                    <input type="hidden" id="hiddenGratuitySmall_${countNominationForGratuity}" value='0' >  
                                                                </td>
                                                                <td>
                                                                    <input type="text" class="form-control" id="inputNomineeNamePersonalInformationForm_${countNominationForGratuity}">
                                                                </td>
                                                                <td>
                                                                    <input type="text" class="form-control datepickerr" placeholder='select date' id="inputNomineeDobPersonalInformationForm_${countNominationForGratuity}">
                                                                </td>
                                                                <td>
                                                                    <input type="text" class="form-control" id="inputNomineeRelationPersonalInformationForm_${countNominationForGratuity}">
                                                                </td>
                                                                <td>
                                                                    <input type="text" class="form-control" id="inputNomineeAddressPersonalInformationForm_${countNominationForGratuity}">
                                                                </td>
                                                                <td>
                                                                    <input type="text" class="form-control" id="inputNomineeAddressPersonalInformationFormAdharNumber_${countNominationForGratuity}">
                                                                </td>
                                                                <td>
                                                                    <input type="text" class="form-control" id="inputNomineeSharePersonalInformationForm_${countNominationForGratuity}">
                                                                </td>
                                                            </tr>`;
        tbodyNominationGratuity.append(row);
    }




}


 
function validationForsaveNominationForGratuity() {
    var tbodyNominationGratuity = $("#tbodyNominationGratuity > tr");
   
    for (let row of tbodyNominationGratuity) {
        let index = row.id.split('_')[1];
        //let idOfTable = $("#hiddenGratuitySmall_" + index).val();

        let inputNomineeSharePersonalInformationForm =  $("#inputNomineeSharePersonalInformationForm_" + index).val()
        let inputNomineeSharePersonalInformationFormONE = parseFloat($("#inputNomineeSharePersonalInformationForm_" + index).val())
        if (validateInput(inputNomineeSharePersonalInformationForm)) {
            toastHr('Percentage of Share in Nomination For Gratuity contains only number and % not allowed')
            $("#inputNomineeSharePersonalInformationForm_" + index).addClass("error");
            return
        }

        if (inputNomineeSharePersonalInformationFormONE > 100) {
            toastHr("Percentage of Share in Nomination For Gratuity should not be greater than 100")
            $("#inputNomineeSharePersonalInformationForm_" + index).addClass("error");
            //$('#inputMatricPercentage').addClass("error")
            return
        }
        if (inputNomineeSharePersonalInformationForm.includes('%')) {
            toastHr("Percentage of Share in Nomination For Gratuity should not contains %")
            //$('#inputMatricPercentage').addClass("error")
            $('#inputNomineeSharePersonalInformationForm_' + index).addClass("error");
            return
        }
        
    } 
    return true
}



function saveNominationForGratuity() {
    
    let validX = validationForsaveNominationForGratuity()
    if (validX == undefined) {
        return
    }
    var objArrEmployer = [];
    var tbodyNominationGratuity = $("#tbodyNominationGratuity > tr");
    for (let row of tbodyNominationGratuity) {

        let index = row.id.split('_')[1];
        let idOfTable = $("#hiddenGratuitySmall_" + index).val();
        let inputNomineeNamePersonalInformationForm = $("#inputNomineeNamePersonalInformationForm_" + index).val();
        let inputNomineeDobPersonalInformationForm = $("#inputNomineeDobPersonalInformationForm_" + index).val();
        let inputNomineeRelationPersonalInformationForm = $("#inputNomineeRelationPersonalInformationForm_" + index).val();
        let inputNomineeAddressPersonalInformationForm = $("#inputNomineeAddressPersonalInformationForm_" + index).val();
        let inputNomineeAddressPersonalInformationFormAdharNumber = $("#inputNomineeAddressPersonalInformationFormAdharNumber_" + index).val();
        let inputNomineeSharePersonalInformationForm = $("#inputNomineeSharePersonalInformationForm_" + index).val();
        if (inputNomineeDobPersonalInformationForm != "" && inputNomineeDobPersonalInformationForm != null) {
            inputNomineeDobPersonalInformationForm = formatToIsodateFormate(inputNomineeDobPersonalInformationForm)
        }

 
        let obj = {
            id: idOfTable,
            nominee_Name: inputNomineeNamePersonalInformationForm,
            nominee_DOB: inputNomineeDobPersonalInformationForm == "" ? null : inputNomineeDobPersonalInformationForm,
            relationship_with_Employee: inputNomineeRelationPersonalInformationForm,
            complete_Address_of_Nominee_Guardian_including_Guadian_Name_if_minor: inputNomineeAddressPersonalInformationForm,
            nomineeAadhar_Number: inputNomineeAddressPersonalInformationFormAdharNumber,
            Percentage_Of_Share: inputNomineeSharePersonalInformationForm
        }

        objArrEmployer.push(obj);
    }
    ;
    var _url = apiBaseUrlHr + "/api/CandidateJoining/SaveNominatioForGratuityPFJoiningDetails/" + candidateId;
    _url = _url.replace(/[\u200B-\u200D\uFEFF]/g, '');

    $.ajax({
        type: "POST",
        url: _url,
        data: JSON.stringify(objArrEmployer),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        //processData: false,
        //contentType: false,
        /*headers: { Authorization: ApiToken },*/
        beforeSend: function () {
            //var ApiObject = CheckApiCall();
            //if (ApiObject.isCall == false) {
            //    window.location.href = mainLoginUrl;
            //    return false;
            //}
            $('.page-loader').show();

        },
        success: function (response) {

            //loadAllDataOfJoiningCandidate();
            $('.page-loader').hide();


            if (response.statusCode == 201 || response.statusCode == 200) {
                Swal.fire({
                    title: 'Success !',
                    text: response.statusCode == 201 ? 'Employer Details updated Successfully' : response.message,
                    icon: "success"
                })
                getNominationForGratuityDataFromApi()
                PrintFormA()
            }
            PrintFormA()
            $('.page-loader').hide();


        },
        complete: function () {

            $('.page-loader').hide();

        },
        error: function (jqXHR, status) {

            $('.page-loader').hide();

            Swal.fire({
                title: 'Invalid !',
                text: jqXHR.responseJSON.title,
                icon: "error"
            });

            switch (jqXHR.status) {

                case "401":
                    window.location.href = unAuthorisedUrl;
                    break;
                case "403":
                    window.location.href = forbiddenUrl;
                    break;
                default:
                    ;
                    break;
            }
        }
    });
}




function getNominationForProvidentFundDataFromApi() {
    var url = apiBaseUrlHr + `/api/CandidateJoining/GetNominatioForPFJoining/${candidateId}`;
    url = url.replace(/[\u200B-\u200D\uFEFF]/g, '');
    $.ajax({
        type: "GET",
        url: url,
        //data: '{}',
        contentType: "application/json; charset=utf-8",
        dataType: "json",

        beforeSend: function () {

            $('.page-loader').show();

        },
        success: function (response) {
            ;

            loadNominationForProvidentFund(response.data)

            $('.page-loader').hide();


        },
        error: function (err) {
            $('.page-loader').hide();
            switch (err.status) {

                case "401":
                    window.location.href = unAuthorisedUrl;
                    break;
                case "403":
                    window.location.href = forbiddenUrl;
                    break;
                default:

                    break;
            }
        },

        failure: function (response) {
            // alert(response.d);
            $('.page-loader').hide();
        }
    });


}

var countNominationForProvidentFund = 0;
function loadNominationForProvidentFund(listNominationForPf) {
    countNominationForProvidentFund = 0;


    var tbodyProvidentNominationGratuity = $("#tbodyProvidentNominationGratuity");
    tbodyProvidentNominationGratuity.empty();
    if (listNominationForPf !== null)
        for (let e of listNominationForPf) {

            countNominationForProvidentFund++;
            let row = `    <tr class='trofNominationForPf'  id="row3_${countNominationForProvidentFund}">
                                                                <td>
                                                                    ${countNominationForProvidentFund
                }.
                                                                    <input type="hidden" id="hiddenProvidentFund_${countNominationForProvidentFund
                }" value=${e.id} >  
                                                                </td>
                                                                <td>
                                                                    <input type="text" class="form-control" id="inputProvidentNomineeNamePersonalInformationForm_${countNominationForProvidentFund}" value='${e.nominee_Name}'>
                                                                </td>
                                                                <td>
                                                                    <input type="text" placeholder='select date' class="form-control datepickerr" id="inputProvidentNomineeDobPersonalInformationForm_${countNominationForProvidentFund}" value='${e.nominee_DOB == null ? "" : formatDate_dd_mm_yyyy_New_Formate(new Date(Date.parse(e.nominee_DOB)))}'>
                                                                </td>
                                                                <td>
                                                                    <input type="text" class="form-control" id="inputProvidentNomineeRelationPersonalInformationForm_${countNominationForProvidentFund}"  value='${e.relationship_with_Employee}'>
                                                                </td>
                                                                <td>
                                                                    <input type="text" class="form-control" id="inputProvidentNomineeAddressPersonalInformationForm_${countNominationForProvidentFund}" value='${e.complete_Address_of_Nominee_Guardian_including_Guadian_Name_if_minor}'>
                                                                </td>
                                                                <td>
                                                                    <input type="text" class="form-control" id="inputProvidentNomineeSharePersonalInformationForm_${countNominationForProvidentFund}" value='${e.percentage_Of_Share}'>
                                                                </td>
                                                            </tr>`;


            tbodyProvidentNominationGratuity.append(row);

        }
    ;
    if (countNominationForProvidentFund == 0) {

        countNominationForProvidentFund++;
        let row = `  <tr class='trofNominationForPf'  id="row2_${countNominationForProvidentFund}">
                                                                <td>
                                                                    ${countNominationForProvidentFund
            }.
                                                                    <input type="hidden" id="hiddenProvidentFund_${countNominationForProvidentFund
            }" value='0' >  
                                                                </td>
                                                                <td>
                                                                    <input type="text" class="form-control" id="inputProvidentNomineeNamePersonalInformationForm_${countNominationForProvidentFund}">
                                                                </td>
                                                                <td>
                                                                    <input type="text" placeholder='select date' class="form-control datepickerr" id="inputProvidentNomineeDobPersonalInformationForm_${countNominationForProvidentFund}">
                                                                </td>
                                                                <td>
                                                                    <input type="text" class="form-control" id="inputProvidentNomineeRelationPersonalInformationForm_${countNominationForProvidentFund}">
                                                                </td>
                                                                <td>
                                                                    <input type="text" class="form-control" id="inputProvidentNomineeAddressPersonalInformationForm_${countNominationForProvidentFund}">
                                                                </td>
                                                                <td>
                                                                    <input type="text" class="form-control" id="inputProvidentNomineeSharePersonalInformationForm_${countNominationForProvidentFund}">
                                                                </td>
                                                            </tr>`;
        tbodyProvidentNominationGratuity.append(row);
    }




}




function validationNominationForProvidentFund() {
    
    var tbodyProvidentNominationGratuity = $("#tbodyProvidentNominationGratuity > tr");

    for (let row of tbodyProvidentNominationGratuity) {
        let index = row.id.split('_')[1];
        //let idOfTable = $("#hiddenGratuitySmall_" + index).val();

        let inputProvidentNomineeSharePersonalInformationForm =  $("#inputProvidentNomineeSharePersonalInformationForm_" + index).val()
        let inputProvidentNomineeSharePersonalInformationFormONE = parseFloat($("#inputProvidentNomineeSharePersonalInformationForm_" + index).val())
       
        if (validateInput(inputProvidentNomineeSharePersonalInformationForm)) {
            toastHr('Percentage of Share in Nomination For Provident Fund contains only number and % not allowed')
            $("#inputProvidentNomineeSharePersonalInformationForm_" + index).addClass("error");
            return
        }
        if (inputProvidentNomineeSharePersonalInformationForm == "") {
            toastHr("Percentage of Share in Nomination For Provident Fund should not be empty")
            $("#inputProvidentNomineeSharePersonalInformationForm_" + index).addClass("error");
            //$('#inputMatricPercentage').addClass("error")
            return
        }

        if (inputProvidentNomineeSharePersonalInformationFormONE > 100) {
            toastHr("Percentage of Share in Nomination For Provident Fund should not be greater than 100")
            $("#inputProvidentNomineeSharePersonalInformationForm_" + index).addClass("error");
            //$('#inputMatricPercentage').addClass("error")
            return
        }
        if (inputProvidentNomineeSharePersonalInformationForm.includes('%')) {
            toastHr("Percentage of Share in Nomination For Provident Fund should not contains %")
            //$('#inputMatricPercentage').addClass("error")
            $('#inputProvidentNomineeSharePersonalInformationForm_' + index).addClass("error");
            return
        }
    }
    return true
}


function saveNominationForProvidentFund() {
    
    let validX = validationNominationForProvidentFund()
    if(validX == undefined) {
        return
    }
    var objArrEmployer = [];
    var tbodyProvidentNominationGratuity = $("#tbodyProvidentNominationGratuity > tr");
    for (let row of tbodyProvidentNominationGratuity) {

        let index = row.id.split('_')[1];
        let idOfTable = $("#hiddenProvidentFund_" + index).val();
        let inputProvidentNomineeNamePersonalInformationForm = $("#inputProvidentNomineeNamePersonalInformationForm_" + index).val();
        let inputProvidentNomineeDobPersonalInformationForm = $("#inputProvidentNomineeDobPersonalInformationForm_" + index).val();
        let inputProvidentNomineeRelationPersonalInformationForm = $("#inputProvidentNomineeRelationPersonalInformationForm_" + index).val();
        let inputProvidentNomineeAddressPersonalInformationForm = $("#inputProvidentNomineeAddressPersonalInformationForm_" + index).val();
        let inputProvidentNomineeSharePersonalInformationForm = $("#inputProvidentNomineeSharePersonalInformationForm_" + index).val();

        if (inputProvidentNomineeDobPersonalInformationForm != "" && inputProvidentNomineeDobPersonalInformationForm != null) {
            inputProvidentNomineeDobPersonalInformationForm = formatToIsodateFormate(inputProvidentNomineeDobPersonalInformationForm)
        }

        let obj = {
            id: idOfTable,
            "nominee_Name": inputProvidentNomineeNamePersonalInformationForm,
            "nominee_DOB": inputProvidentNomineeDobPersonalInformationForm == "" ? null : inputProvidentNomineeDobPersonalInformationForm,
            "relationship_with_Employee": inputProvidentNomineeRelationPersonalInformationForm,
            "complete_Address_of_Nominee_Guardian_including_Guadian_Name_if_minor": inputProvidentNomineeAddressPersonalInformationForm,
            Percentage_Of_Share: inputProvidentNomineeSharePersonalInformationForm
        }

        objArrEmployer.push(obj);
    }

    var _url = apiBaseUrlHr + "/api/CandidateJoining/SaveNominatioForPFJoining/" + candidateId;
    _url = _url.replace(/[\u200B-\u200D\uFEFF]/g, '');

    $.ajax({
        type: "POST",
        url: _url,
        data: JSON.stringify(objArrEmployer),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        //processData: false,
        //contentType: false,
        /*headers: { Authorization: ApiToken },*/
        beforeSend: function () {
            //var ApiObject = CheckApiCall();
            //if (ApiObject.isCall == false) {
            //    window.location.href = mainLoginUrl;
            //    return false;
            //}
            $('.page-loader').show();

        },
        success: function (response) {

            //loadAllDataOfJoiningCandidate();
            $('.page-loader').hide();


            if (response.statusCode == 201 || response.statusCode == 200) {
                Swal.fire({
                    title: 'Success !',
                    text: response.statusCode == 201 ? 'Employer Details updated Successfully' : response.message,
                    icon: "success"
                })
                PrintFormA()
                getNominationForProvidentFundDataFromApi()
            }

            $('.page-loader').hide();


        },
        complete: function () {

            $('.page-loader').hide();

        },
        error: function (jqXHR, status) {

            $('.page-loader').hide();

            Swal.fire({
                title: 'Invalid !',
                text: jqXHR.responseJSON.title,
                icon: "error"
            });

            switch (jqXHR.status) {

                case "401":
                    window.location.href = unAuthorisedUrl;
                    break;
                case "403":
                    window.location.href = forbiddenUrl;
                    break;
                default:
                    ;
                    break;
            }
        }
    });
}

function getUnderTakingDataFromApi() {
    var url = apiBaseUrlHr + `/api/CandidateJoining/GetUnderTakingForAnotherCompanyJoining?CandidateId=${candidateId}`;
    url = url.replace(/[\u200B-\u200D\uFEFF]/g, '');
    $.ajax({
        type: "GET",
        url: url,
        //data: '{}',
        contentType: "application/json; charset=utf-8",
        dataType: "json",

        beforeSend: function () {

            $('.page-loader').show();

        },
        success: function (response) {
            ;

            loadcountUnderTaking(response.data)

            $('.page-loader').hide();


        },
        error: function (err) {
            $('.page-loader').hide();
            switch (err.status) {

                case "401":
                    window.location.href = unAuthorisedUrl;
                    break;
                case "403":
                    window.location.href = forbiddenUrl;
                    break;
                default:

                    break;
            }
        },

        failure: function (response) {
            // alert(response.d);
            $('.page-loader').hide();
        }
    });


}

var countUnderTaking = 0;
function loadcountUnderTaking(listNominationForPf) {
    countUnderTaking = 0;


    var tbodyUndertakingCompanyInfo = $("#tbodyUndertakingCompanyInfo");
    tbodyUndertakingCompanyInfo.empty();
    if (listNominationForPf !== null)
        for (let e of listNominationForPf) {

            countUnderTaking++;
            let row = `   <tr class='trofUnderTaking'  id="row4_${countUnderTaking}">
                                                        <td>
                                                             ${countUnderTaking}.
                                                                    <input type="hidden" id="hiddenUndertaking_${countUnderTaking
                }" value=${e.id} >  
                                                        </td>
                                                        <td>
                                                            <input type="text" class="form-control" id="inputCompanyNameUndertaking_${countUnderTaking}"  value='${e.company_Name}'>
                                                        </td>
                                                        <td>
                                                            <input type="text" class="form-control" id="inputPostAppliedUndertaking_${countUnderTaking}"  value='${e.post_Applied}'>
                                                        </td>
                                                    </tr>

                                                            `;


            tbodyUndertakingCompanyInfo.append(row);

        }
    ;
    if (countUnderTaking == 0) {

        countUnderTaking++;
        let row = `   <tr class='trofUnderTaking'  id="row4_${countUnderTaking}">
                                                        <td>
                                                             ${countUnderTaking}.
                                                                    <input type="hidden" id="hiddenUndertaking_${countUnderTaking}" value='0' >  
                                                        </td>
                                                        <td>
                                                            <input type="text" class="form-control" id="inputCompanyNameUndertaking_${countUnderTaking}"   >
                                                        </td>
                                                        <td>
                                                            <input type="text" class="form-control" id="inputPostAppliedUndertaking_${countUnderTaking}"   >
                                                        </td>
                                                    </tr>`;
        tbodyUndertakingCompanyInfo.append(row);
    }




}







function saveUnderTaking() {

    var objArrEmployer = [];
    var tbodyUndertakingCompanyInfo = $("#tbodyUndertakingCompanyInfo > tr");
    for (let row of tbodyUndertakingCompanyInfo) {

        let index = row.id.split('_')[1];
        let idOfTable = $("#hiddenUndertaking_" + index).val();
        let inputCompanyNameUndertaking = $("#inputCompanyNameUndertaking_" + index).val();
        let inputPostAppliedUndertaking = $("#inputPostAppliedUndertaking_" + index).val();



        let obj = {
            id: idOfTable,
            company_Name: inputCompanyNameUndertaking,
            post_Applied: inputPostAppliedUndertaking
        }

        objArrEmployer.push(obj);
    }

    var _url = apiBaseUrlHr + "/api/CandidateJoining/SaveUnderTakingForAnotherCompanyJoining/" + candidateId;
    _url = _url.replace(/[\u200B-\u200D\uFEFF]/g, '');

    $.ajax({
        type: "POST",
        url: _url,
        data: JSON.stringify(objArrEmployer),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        //processData: false,
        //contentType: false,
        /*headers: { Authorization: ApiToken },*/
        beforeSend: function () {
            //var ApiObject = CheckApiCall();
            //if (ApiObject.isCall == false) {
            //    window.location.href = mainLoginUrl;
            //    return false;
            //}
            $('.page-loader').show();

        },
        success: function (response) {

            //loadAllDataOfJoiningCandidate();
            $('.page-loader').hide();


            if (response.statusCode == 201 || response.statusCode == 200) {
                Swal.fire({
                    title: 'Success !',
                    text: response.statusCode == 201 ? 'Employer Details updated Successfully' : response.message,
                    icon: "success"
                })
                loadAllDataOfJoiningCandidate()
                PrintFormD()
            }

            $('.page-loader').hide();


        },
        complete: function () {

            $('.page-loader').hide();

        },
        error: function (jqXHR, status) {

            $('.page-loader').hide();

            Swal.fire({
                title: 'Invalid !',
                text: jqXHR.responseJSON.title,
                icon: "error"
            });

            switch (jqXHR.status) {

                case "401":
                    window.location.href = unAuthorisedUrl;
                    break;
                case "403":
                    window.location.href = forbiddenUrl;
                    break;
                default:
                    ;
                    break;
            }
        }
    });
}






function getSet5NpominationForGratutityFromApi() {
    
    var url = apiBaseUrlHr + `/api/CandidateJoining/GetNominatioForGratuityJoiningDetails?CandidateId=${candidateId}`;
    url = url.replace(/[\u200B-\u200D\uFEFF]/g, '');
    $.ajax({
        type: "GET",
        url: url,
        //data: '{}',
        contentType: "application/json; charset=utf-8",
        dataType: "json",

        beforeSend: function () {

            $('.page-loader').show();

        },
        success: function (response) {

            
            if (response.data == null) {
                $('.page-loader').hide();
                return
            }

            loadSet5NpominationForGratutity(response.data)


            if (response.data == null) {
                $('.page-loader').hide();
                return
            }
            loadSet5StaticKeysNomainationGratutity(response.data)
            console.log(response.data)
            $('.page-loader').hide();


        },
        error: function (err) {
            ;
            $('.page-loader').hide();
            switch (err.status) {

                case "401":
                    window.location.href = unAuthorisedUrl;
                    break;
                case "403":
                    window.location.href = forbiddenUrl;
                    break;
                default:

                    break;
            }
        },

        failure: function (response) {
            // alert(response.d);
            $('.page-loader').hide();
        }
    });


}

var countSet5NpominationForGratutity = 0;


function loadSet5StaticKeysNomainationGratutity(listNominationForPf) {
    
    if (listNominationForPf.nominatioForGratuityJoiningObject !== null)
        /*  for (let e of listNominationForPf.nominatioForGratuityJoiningObject) {*/


        console.log(listNominationForPf.nominatioForGratuityJoiningObject)
    let item = listNominationForPf.nominatioForGratuityJoiningObject


    if ($('#checkBoxObcApply').is(':checked')) {

        $('#inputUndertakingForOBCCandidatesVillage').val("")
        $('#inputUndertakingForOBCCandidatesDistrict').val("")
        $('#inputUndertakingForOBCCandidatesOnlyState').val("")
    } else {
        
        if (item != null) {
            if (item.village !== "" || item.village != null) {
                $('#inputUndertakingForOBCCandidatesVillage').val((item.village == null ? "" : item.village));

            } else {
                $('#inputUndertakingForOBCCandidatesVillage').val(globalCityName == null ? "" : globalCityName)

            }
            $('#inputUndertakingForOBCCandidatesOnlyState').val(item.state == null ? "" : item.state)


            $('#inputUndertakingForOBCCandidatesDistrict').val(item.district == null ? "" : item.district)
        }
       
       


    }
    //$('#inputUndertakingForOBCCandidatesVillage').val(item.village == null ? "" : item.village + "/" + globalCityName == null ? "" : globalCityName)
    //$('#inputUndertakingForOBCCandidatesDistrict').val(item.district == null ? "" : item.district)
    if (item != null) {
        $('#inputVillageNominationGratuity').val(item.village == null ? "" : item.village)
        $('#inputThana').val(item.thana == null ? "" : item.thana)
        $('#inputSubDivisionNominationGratuity').val(item.sub_Divison == null ? "" : item.sub_Divison)
        $('#inputPostOffice').val(item.p_O == null ? "" : item.p_O)
        $('#inputDistrictNominationGratuity').val(item.district == null ? "" : item.district)
        $('#inputState').val(item.state == null ? "" : item.state)
        $('#inputPinCodeNominationGratuity').val(item.pin_Code == null ? "" : item.pin_Code)

        $('#inputPlaceNominationGratuity').val(item.place == null ? "New Delhi" : item.place)
        $('#inputNameAddressWitness1NominationGratuity').val(item.witness1_Name_and_Address == null ? "" : item.witness1_Name_and_Address)
        $('#inputNameAddressWitness2NominationGratuity').val(item.witness_2Name_and_Address == null ? "" : item.witness_2Name_and_Address)
        $('#inputPlaceWitnessNominationGratuity').val(item.witness1_Place == null ? "New Delhi" : item.witness1_Place)
        $('#inputNameAddressWitness1NominationGratuityAddressDetails1').val(item.formEAddress1 == null ? "New Delhi" : item.formEAddress1)
        $('#inputNameAddressWitness2NominationGratuityAddressDetails2').val(item.formEAddress2 == null ? "New Delhi" : item.formEAddress2)
    }


    //}
}



function loadSet5NpominationForGratutity(listNominationForPf) {
    countSet5NpominationForGratutity = 0;


    var tbodyNomineeTable = $("#tbodyNomineeTable");
    tbodyNomineeTable.empty();
    if (listNominationForPf.nominatioForGratuityJoiningList !== null)
        for (let e of listNominationForPf.nominatioForGratuityJoiningList) {

            let fatherValue


            if (e.relationship_with_Employee == 'Father') {

                fatherValue = `<option>Selet One</option>
                               <option selected>Father</option>
                               <option>Mother</option>
                               <option>Son/Daughter</option>
                               <option>Spouse</option>`
            } else if (e.relationship_with_Employee == 'Mother') {
                fatherValue = `<option>Selet One</option>
                               <option>Father</option>
                               <option selected>Mother</option>
                               <option>Son/Daughter</option>
                               <option>Spouse</option>`
            } else if (e.relationship_with_Employee == 'Son/Daughter') {
                fatherValue = `<option>Selet One</option>
                               <option>Father</option>
                               <option>Mother</option>
                               <option selected>Son/Daughter</option>
                               <option>Spouse</option>`
            } else if (e.relationship_with_Employee == 'Spouse') {
                fatherValue = `<option>Selet One</option>
                               <option>Father</option>
                               <option>Mother</option>
                               <option>Son/Daughter</option>
                               <option selected>Spouse</option>`
            } else {
                fatherValue = `<option>Selet One</option>
                               <option>Father</option>
                               <option>Mother</option>
                               <option>Son/Daughter</option>
                               <option>Spouse</option>`
            }

            console.log(e.age)
            countSet5NpominationForGratutity++;
            let row = ` <tr class='trofSet5NpominationForGratutity'  id="row5_${countSet5NpominationForGratutity}">
                                                    <td>
                                                     ${countSet5NpominationForGratutity}.
                                                                    <input type="hidden" id="hiddenSet5NpominationForGratutity_${countSet5NpominationForGratutity}" value=${e.id} > 
                                                    <td>
                                                            <td>
                                                                <input type="text" class="form-control" id="inputNomineeNameNominationGratuity_${countSet5NpominationForGratutity}" value='${e.name_in_Full_with_Address == null ? "" : e.name_in_Full_with_Address}' >
                                                              
                                                            </td>
                                                            <td>
                                                                <select class="form-control" id="selectNomineeRelationNominationGratuity_${countSet5NpominationForGratutity}" value='${e.relationship_with_Employee == null ? "" : e.relationship_with_Employee}'>
                                                                    
                                                                   '${fatherValue}'
                                                                </select>
                                                            </td>
                                                            <td>
                                                                <input type="text" class="form-control" id="inputNomineeAgeNominationGratuity_${countSet5NpominationForGratutity}"  value='${e.age == null ? "" : e.age}' />
                                                            </td>
                                                             <td>
                                                                <input type="text" class="form-control" id="inputGratuityPortionNominationGratuity_${countSet5NpominationForGratutity}" value='${e.portion_Percentage_of_Share == null ? "" : e.portion_Percentage_of_Share}' />
                                                            </td>
                                                        </tr>
                                                    `;


            tbodyNomineeTable.append(row);

        }

    if (countSet5NpominationForGratutity == 0) {

        countSet5NpominationForGratutity++;
        let row = `  <tr class='trofSet5NpominationForGratutity'  id="row5_${countSet5NpominationForGratutity}">
                                                    <td>
                                                     ${countSet5NpominationForGratutity}.
                                                                    <input type="hidden" id="hiddenSet5NpominationForGratutity_${countSet5NpominationForGratutity}" value='0' > 
                                                    <td>
                                                            <td>
                                                                <input type="text" class="form-control" id="inputNomineeNameNominationGratuity_${countSet5NpominationForGratutity}" />
                                                               
                                                            </td>
                                                            <td>
                                                                <select class="form-control" id="selectNomineeRelationNominationGratuity_${countSet5NpominationForGratutity}">
                                                                    
                                                                    <option>Selet One</option>
                                                                    <option>Father</option>
                                                                    <option>Mother</option>
                                                                    <option>Son/Daughter</option>
                                                                    <option >Spouse</option>
                                                            </td>
                                                            <td>
                                                                <input type="text" class="form-control" id="inputNomineeAgeNominationGratuity_${countSet5NpominationForGratutity}" />
                                                            </td>
                                                             <td>
                                                                <input type="text" class="form-control" id="inputGratuityPortionNominationGratuity_${countSet5NpominationForGratutity}" />
                                                            </td>
                                                        </tr>`;
        tbodyNomineeTable.append(row);
    }




}





function valid5NpominationForGratutity() {

    let selectNominationGratuityNameTitle = $('#selectNominationGratuityNameTitle').val()
    if (selectNominationGratuityNameTitle == 'Select') {
        toastHr('Please select the Title')
        $('#selectNominationGratuityNameTitle').addClass("error");
        return
    }
    if (selectNominationGratuityNameTitle == '') {
        toastHr('Please select the Title')
        $('#selectNominationGratuityNameTitle').addClass("error");
        return
    }
    if (selectNominationGratuityNameTitle == null) {
        toastHr('Please select the Title')
        $('#selectNominationGratuityNameTitle').addClass("error");
        return
    }
    
    var tbodyNomineeTable = $("#tbodyNomineeTable > tr");

    
    for (let row of tbodyNomineeTable) {

        let index = row.id.split('_')[1]
        let inputGratuityPortionNominationGratuity =  $('#inputGratuityPortionNominationGratuity_' + index).val()
        let inputGratuityPortionNominationGratuityOne =  parseFloat($('#inputGratuityPortionNominationGratuity_' + index).val())
        let inputNomineeAgeNominationGratuity = $('#inputNomineeAgeNominationGratuity_' + index).val()
        if (validateInput(inputGratuityPortionNominationGratuity)) {
            toastHr('Proportion share contains only number and % not allowed')
            $('#inputGratuityPortionNominationGratuity_' + index).addClass("error");
            return
        }

        if (inputGratuityPortionNominationGratuityOne > 100) {
            toastHr("Proportion share should not be greater than 100")
            //$('#inputMatricPercentage').addClass("error")
            $('#inputGratuityPortionNominationGratuity_' + index).addClass("error");
            return
        }
        if (inputGratuityPortionNominationGratuity.includes('%')) {
            toastHr("Proportion share should not contains %")
            //$('#inputMatricPercentage').addClass("error")
            $('#inputGratuityPortionNominationGratuity_' + index).addClass("error");
            return
        }
        if (validateInput(inputNomineeAgeNominationGratuity)) {
            toastHr('Age of nominee contains only number')  
            $('#inputNomineeAgeNominationGratuity_' + index).addClass("error");
            return
        }

    }
    return true
}

function saveSet5NpominationForGratutity() {
    let validX = valid5NpominationForGratutity()
    if (validX == undefined) {
        return
    }
    
    var tbodyNomineeTable = $("#tbodyNomineeTable > tr");

    let objArr = [];
    for (let row of tbodyNomineeTable) {
        
        let index = row.id.split('_')[1];
        let idOfTable = $("#hiddenSet5NpominationForGratutity_" + index).val();
        let inputNomineeNameNominationGratuity = $("#inputNomineeNameNominationGratuity_" + index).val() == '' ? null : $("#inputNomineeNameNominationGratuity_" + index).val();
        let selectNomineeRelationNominationGratuity = $("#selectNomineeRelationNominationGratuity_" + index).val() == '' ? null : $("#selectNomineeRelationNominationGratuity_" + index).val();
        let inputNomineeAgeNominationGratuity = parseInt($("#inputNomineeAgeNominationGratuity_" + index).val()) == '' ? null : parseInt($("#inputNomineeAgeNominationGratuity_" + index).val());
        let inputGratuityPortionNominationGratuity = $("#inputGratuityPortionNominationGratuity_" + index).val() == '' ? null : $("#inputGratuityPortionNominationGratuity_" + index).val();

        var objGratutityDet5 =
        {
            id: idOfTable,
            name_in_Full_with_Address: inputNomineeNameNominationGratuity,
            relationship_with_Employee: selectNomineeRelationNominationGratuity,
            age: inputNomineeAgeNominationGratuity == "" || NaN ? null : inputNomineeAgeNominationGratuity,
            portion_Percentage_of_Share: inputGratuityPortionNominationGratuity
        }



        objArr.push(objGratutityDet5);
    }
    let obj = {
        village: $("#inputVillageNominationGratuity").val() == '' ? null : $("#inputVillageNominationGratuity").val(),
        thana: $("#inputThana").val() == '' ? null : $("#inputThana").val(),
        sub_Divison: $("#inputSubDivisionNominationGratuity").val() == '' ? null : $("#inputSubDivisionNominationGratuity").val(),
        p_O: $("#inputPostOffice").val() == '' ? null : $("#inputPostOffice").val(),
        district: $("#inputDistrictNominationGratuity").val() == '' ? null : $("#inputDistrictNominationGratuity").val(),
        state: $("#inputState").val() == '' ? null : $("#inputState").val(),
        pin_Code: $("#inputPinCodeNominationGratuity").val() == '' ? null : $("#inputPinCodeNominationGratuity").val(),
        place: $("#inputPlaceNominationGratuity").val() == '' ? null : $("#inputPlaceNominationGratuity").val(),
        witness1_Name_and_Address: $("#inputNameAddressWitness1NominationGratuity").val() == '' ? null : $("#inputNameAddressWitness1NominationGratuity").val(),
        witness_2Name_and_Address: $("#inputNameAddressWitness2NominationGratuity").val() == '' ? null : $("#inputNameAddressWitness2NominationGratuity").val(),
        witness1_Place: $("#inputPlaceWitnessNominationGratuity").val() == '' ? null : $("#inputPlaceWitnessNominationGratuity").val(),
        witness2_Place: $("#inputPlaceWitnessNominationGratuity").val() == '' ? null : $("#inputPlaceWitnessNominationGratuity").val(),
        dtoNominatioForGratuityJoiningModelList: objArr,
        formEAddress1: $('#inputNameAddressWitness1NominationGratuityAddressDetails1').val() == '' ? null : $('#inputNameAddressWitness1NominationGratuityAddressDetails1').val(),
        formEAddress2: $('#inputNameAddressWitness2NominationGratuityAddressDetails2').val() == '' ? null : $('#inputNameAddressWitness2NominationGratuityAddressDetails2').val(),
    }
    var _url = apiBaseUrlHr + "/api/CandidateJoining/SaveNominatioForGratuityJoiningDetails/" + candidateId;
    _url = _url.replace(/[\u200B-\u200D\uFEFF]/g, '');

    $.ajax({
        type: "POST",
        url: _url,
        data: JSON.stringify(obj),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        //processData: false,
        //contentType: false,
        /*headers: { Authorization: ApiToken },*/
        beforeSend: function () {
            //var ApiObject = CheckApiCall();
            //if (ApiObject.isCall == false) {
            //    window.location.href = mainLoginUrl;
            //    return false;
            //}
            $('.page-loader').show();

        },
        success: function (response) {

            //loadAllDataOfJoiningCandidate();
            $('.page-loader').hide();


            if (response.statusCode == 201 || response.statusCode == 200) {
                Swal.fire({
                    title: 'Success !',
                    text: response.statusCode == 201 ? 'Employer Details updated Successfully' : response.message,
                    icon: "success"
                })
                getSet5NpominationForGratutityFromApi()
                PrintFormE()

            }
            //window.location.reload()

            $('.page-loader').hide();


        },
        complete: function () {

            $('.page-loader').hide();

        },
        error: function (jqXHR, status) {

            $('.page-loader').hide();

            Swal.fire({
                title: 'Invalid !',
                text: jqXHR.responseJSON.title,
                icon: "error"
            });

            switch (jqXHR.status) {

                case "401":
                    window.location.href = unAuthorisedUrl;
                    break;
                case "403":
                    window.location.href = forbiddenUrl;
                    break;
                default:
                    ;
                    break;
            }
        }
    });


    let selectNominationGratuityNameTitle = $('#selectNominationGratuityNameTitle').val()





    let formData = {

        CandidateTitle: selectNominationGratuityNameTitle,



    }

    //FillFormDataForPostApi(newParticularsPersonal, formData)
    //formDataNew.append('EmpId', empObject.empId);
    var _url = apiBaseUrlHr + "/api/CandidateJoining/SaveCandidateJoiningDetails/" + candidateId;
    _url = _url.replace(/[\u200B-\u200D\uFEFF]/g, '');

    $.ajax({
        type: "POST",
        url: _url,
        data: JSON.stringify(formData),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        //processData: false,
        //contentType: false,
        /*headers: { Authorization: ApiToken },*/
        beforeSend: function () {
            //var ApiObject = CheckApiCall();
            //if (ApiObject.isCall == false) {
            //    window.location.href = mainLoginUrl;
            //    return false;
            //}
            $('.page-loader').show();

        },
        success: function (response) {

            //loadAllDataOfJoiningCandidate();
            $('.page-loader').hide();



            if (response.statusCode == 201 || response.statusCode == 200) {
                Swal.fire({
                    title: 'Success !',
                    text: response.statusCode == 201 ? 'Detail has been successfully submitted!' : response.message,
                    icon: "success"
                })
                loadAllDataOfJoiningCandidate()
            }
            else {
                Swal.fire({
                    title: 'Invalid !',
                    text: response.message,
                    icon: "error"
                });
            }
            $('.page-loader').hide();
            $('#myModal').modal('hide');

        },
        complete: function () {
            e.disabled = false;
            $('.page-loader').hide();


        },
        error: function (jqXHR, status) {

            $('.page-loader').hide();

            Swal.fire({
                title: 'Invalid !',
                text: jqXHR.responseJSON.title,
                icon: "error"
            });

            switch (jqXHR.status) {

                case "401":
                    window.location.href = unAuthorisedUrl;
                    break;
                case "403":
                    window.location.href = forbiddenUrl;
                    break;
                default:
                    ;
                    break;
            }
        }
    });
}

/*upload vivek*/
function UploadDocument(e, data) {
    
    const formDataNew = new FormData();
    formDataNew.append('CandidateId', candidateId)
    formDataNew.append(data, document.getElementById(data).files[0]);

    Section3DocumentsUpload(formDataNew);
}

function Section3DocumentsUpload(formDataNew) {
    
    var _url = apiBaseUrlHr + "/api/CandidateJoining/JoiningDocumentsUpload";
    _url = _url.replace(/[\u200B-\u200D\uFEFF]/g, '');

    $.ajax({
        type: "POST",
        url: _url,
        data: formDataNew,
        processData: false,
        contentType: false,
        /*headers: { Authorization: ApiToken },*/
        beforeSend: function () {
            //var ApiObject = CheckApiCall();
            //if (ApiObject.isCall == false) {
            //    window.location.href = mainLoginUrl;
            //    return false;
            //}
            $('.page-loader').show();

        },
        success: function (response) {

            $('.page-loader').hide();

            if (response.statusCode == 201 || response.statusCode == 200) {
                Swal.fire({
                    title: 'Success !',
                    text: response.message,
                    icon: "success"
                })
            }
            else {
                Swal.fire({
                    title: 'Invalid !',
                    text: response.message,
                    icon: "error"
                });
            }

            $('#myModal').modal('hide');
            e.disabled = false;
            $("#inputPurposeOfTravel").focus();

        },
        complete: function () {
            e.disabled = false;
            $('.page-loader').hide();

            $("#inputPurposeOfTravel").focus();
        },
        error: function (jqXHR, status) {
            e.disabled = false;
            $('.page-loader').hide();

            Swal.fire({
                title: 'Invalid !',
                text: jqXHR.responseJSON.title,
                icon: "error"
            });


        }
    });

}


function nameBasedEmail() {
    
    let inputEmail1 = $('#inputFirstEmailRequisition').val();
    let inputEmail2 = $('#inputSecondEmailRequisition').val();
   
    //let pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regular expression for basic email validation
    //let dfccPattern = /@dfcc\.co\.in$/; // Regular expression to check for domain "@dfcc.co.in"


    var forbiddenDomains = ["dfcc.co.in", "gmail.com"];

    if (inputEmail1.includes("@")) {
        toastHr("Special characters should not allowed and @ not allowed");
        return;
    }

    if (inputEmail2.includes("@")) {
        toastHr("Special characters should not allowed and @ not allowed");
        return;
    }

    // Check if the email contains forbidden domains
    for (var i = 0; i < forbiddenDomains.length; i++) {
        if (inputEmail1.endsWith("@" + forbiddenDomains[i])) {
            toastHr("Email from " + forbiddenDomains[i] + " domain is not allowed.");
            return;
        }
    }

    for (var i = 0; i < forbiddenDomains.length; i++) {
        if (inputEmail2.endsWith("@" + forbiddenDomains[i])) {
            toastHr("Email from " + forbiddenDomains[i] + " domain is not allowed.");
            return;
        }
    }

    
    //const formDataNew = new FormData();
    //formDataNew.append('piF_Country_of_Birth',)
    let inputFirstEmailRequisition = $('#inputFirstEmailRequisition').val()
    let inputSecondEmailRequisition = $('#inputSecondEmailRequisition').val()
    let inputPlaceDeclarationRequisition = $('#inputPlaceDeclarationRequisition').val()


    if (inputPlaceDeclarationRequisition == "") {
        toastHr('Please fill the Place')
        $('#inputPlaceDeclarationRequisition').addClass("error");
        return;
    }



    let formData = {

        choice_of_Email_Address_1: inputFirstEmailRequisition,
        choice_of_Email_Address_2: inputSecondEmailRequisition,
        candidateLocation:inputPlaceDeclarationRequisition


    }

    //FillFormDataForPostApi(newParticularsPersonal, formData)
    //formDataNew.append('EmpId', empObject.empId);
    var _url = apiBaseUrlHr + "/api/CandidateJoining/SaveCandidateJoiningDetails/" + candidateId;
    _url = _url.replace(/[\u200B-\u200D\uFEFF]/g, '');

    $.ajax({
        type: "POST",
        url: _url,
        data: JSON.stringify(formData),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        //processData: false,
        //contentType: false,
        /*headers: { Authorization: ApiToken },*/
        beforeSend: function () {
            //var ApiObject = CheckApiCall();
            //if (ApiObject.isCall == false) {
            //    window.location.href = mainLoginUrl;
            //    return false;
            //}
            $('.page-loader').show();

        },
        success: function (response) {

            //loadAllDataOfJoiningCandidate();
            $('.page-loader').hide();



            if (response.statusCode == 201 || response.statusCode == 200) {
                Swal.fire({
                    title: 'Success !',
                    text: response.statusCode == 201 ? 'Detail has been successfully submitted!' : response.message,
                    icon: "success"
                })
                loadAllDataOfJoiningCandidate()
                PrintFormF()
            }
            else {
                Swal.fire({
                    title: 'Invalid !',
                    text: response.message,
                    icon: "error"
                });
            }
            $('.page-loader').hide();


        },

        error: function (jqXHR, status) {

            $('.page-loader').hide();

            Swal.fire({
                title: 'Invalid !',
                text: jqXHR.responseJSON.title,
                icon: "error"
            });

            switch (jqXHR.status) {

                case "401":
                    window.location.href = unAuthorisedUrl;
                    break;
                case "403":
                    window.location.href = forbiddenUrl;
                    break;
                default:
                    ;
                    break;
            }
        }
    });
}



function getSet7ImmovablePropertyDataFromApi() {
    var url = apiBaseUrlHr + `/api/CandidateJoining/GetImmovablePropertyJoining/${candidateId}`;
    url = url.replace(/[\u200B-\u200D\uFEFF]/g, '');
    $.ajax({
        type: "GET",
        url: url,
        //data: '{}',
        contentType: "application/json; charset=utf-8",
        dataType: "json",

        beforeSend: function () {

            $('.page-loader').show();

        },
        success: function (response) {


            loadSet7ImmovableProperty(response.data)

            $('.page-loader').hide();


        },
        error: function (err) {
            $('.page-loader').hide();
            switch (err.status) {

                case "401":
                    window.location.href = unAuthorisedUrl;
                    break;
                case "403":
                    window.location.href = forbiddenUrl;
                    break;
                default:

                    break;
            }
        },

        failure: function (response) {
            // alert(response.d);
            $('.page-loader').hide();
        }
    });


}

var Set7ImmovableProperty = 0
function loadSet7ImmovableProperty(listDataEmployer) {
    Set7ImmovableProperty = 0;


    var tbodyStatementofimmovableproperty = $("#tbodyStatementofimmovableproperty");
    tbodyStatementofimmovableproperty.empty();
   
    if (listDataEmployer != null)
        for (let e of listDataEmployer) {

            Set7ImmovableProperty++;
            let row = `<tr class="trSet7ImmovableProperty" id="row6_${Set7ImmovableProperty}">
                                                             <td>   ${Set7ImmovableProperty}.
                                                                    <input type="hidden" id="hiddenSet7ImmovableProperty_${Set7ImmovableProperty}" value=${e.id} ></td>
                                        <td><input type="text" class="form-control" id="inputescriptionofproperty_${Set7ImmovableProperty}" value="${e.description_of_Property == null ? "" : e.description_of_Property}"></td>
                                        <td><input type="text" class="form-control" id="inputPreciselocation_${Set7ImmovableProperty}" value="${e.precise_Location_Name_of_District_etc == null ? "" : e.precise_Location_Name_of_District_etc}"></td>
                                        <td><input type="text" class="form-control" id="inputAreaofland_${Set7ImmovableProperty}" value="${e.area_of_Land == null ? "" : e.area_of_Land}"></td>
                                        <td><input type="text" class="form-control" id="inputNatureofland_${Set7ImmovableProperty}" value="${e.nature_of_Land == null ? "" : e.nature_of_Land}"></td>
                                        <td><input type="text" class="form-control" id="inputExtentofinterest_${Set7ImmovableProperty}" value="${e.extent_of_Interest == null ? "" : e.extent_of_Interest}"></td>
                                        <td><input type="text" class="form-control" id="inputIfnotinownname_${Set7ImmovableProperty}" value="${e.if_not_in_own_name_state_in_whose_name == null ? "" : e.if_not_in_own_name_state_in_whose_name}"></td>
                                        <td><input type="text" placeholder='select date' class="form-control datepickerr"  id="inputDateofacquisition_${Set7ImmovableProperty}" value="${e.date_of_Acquisition == null ? "" : formatDate_dd_mm_yyyy_New_Formate(new Date(Date.parse(e.date_of_Acquisition)))}"></td>
                                        <td><input type="text" class="form-control" id="inputHowacquired_${Set7ImmovableProperty}" value="${e.how_Acquired_by_Purchase_Mortgage_etc == null ? "" : e.how_Acquired_by_Purchase_Mortgage_etc}"></td>
                                        <td><input type="text" placeholder="Enter number" class="form-control" id="inputValueoftheproperty_${Set7ImmovableProperty}" value="${e.value_of_Property == null ? "" : e.value_of_Property}"></td>
                                        <td><input type="text" class="form-control" id="inputParticularsofsanction_${Set7ImmovableProperty}" value="${e.particulars_of_Sanction_of_Prescribed_Authority == null ? "" : e.particulars_of_Sanction_of_Prescribed_Authority}"></td>
                                        <td><input type="text" placeholder="Enter number" class="form-control" id="inputTotalannualincome_${Set7ImmovableProperty}" value="${e.total_Annual_Income_from_property == null ? "" : e.total_Annual_Income_from_property}"></td>
                                        <td><input type="text" class="form-control" id="inputRemarks_${Set7ImmovableProperty}" value="${e.remarks == null ? "" : e.remarks}"></td>
                                    </tr>`;


            tbodyStatementofimmovableproperty.append(row);

        }
    ;
    if (Set7ImmovableProperty == 0) {

        Set7ImmovableProperty++;
        let row = `   <tr class="trSet7ImmovableProperty" id="row6_${Set7ImmovableProperty}">
                                                             <td>   ${Set7ImmovableProperty}.
                                                                    <input type="hidden" id="hiddenSet7ImmovableProperty_${Set7ImmovableProperty}" value='0'></td>
                                        <td><input type="text" class="form-control" id="inputescriptionofproperty_${Set7ImmovableProperty}"></td>
                                        <td><input type="text" class="form-control" id="inputPreciselocation_${Set7ImmovableProperty}"></td>
                                        <td><input type="text" class="form-control" id="inputAreaofland_${Set7ImmovableProperty}"></td>
                                        <td><input type="text" class="form-control" id="inputNatureofland_${Set7ImmovableProperty}"></td>
                                        <td><input type="text" class="form-control" id="inputExtentofinterest_${Set7ImmovableProperty}"></td>
                                        <td><input type="text" class="form-control" id="inputIfnotinownname_${Set7ImmovableProperty}"></td>
                                        <td><input type="text" placeholder='select date' class="form-control datepickerr"  id="inputDateofacquisition_${Set7ImmovableProperty}"></td>
                                        <td><input type="text" class="form-control" id="inputHowacquired_${Set7ImmovableProperty}"></td>
                                        <td><input type="text" class="form-control" placeholder="Enter number" id="inputValueoftheproperty_${Set7ImmovableProperty}"></td>
                                        <td><input type="text" class="form-control" id="inputParticularsofsanction_${Set7ImmovableProperty}"></td>
                                        <td><input type="text" class="form-control" placeholder="Enter number" id="inputTotalannualincome_${Set7ImmovableProperty}"></td>
                                        <td><input type="text" class="form-control" id="inputRemarks_${Set7ImmovableProperty}"></td>
                                    </tr>`;
        tbodyStatementofimmovableproperty.append(row);
    }




}
function saveloadSet7ImmovableProperty() {
    
    var tbodyStatementofimmovableproperty = $("#tbodyStatementofimmovableproperty > tr");
    var objArrEmployer = [];
    for (let row of tbodyStatementofimmovableproperty) {

        let index = row.id.split('_')[1];
        let idOfTable = $("#hiddenSet7ImmovableProperty_" + index).val();
        let inputescriptionofproperty = $("#inputescriptionofproperty_" + index).val();
        let inputPreciselocation = $("#inputPreciselocation_" + index).val();
        let inputAreaofland = $("#inputAreaofland_" + index).val();
        let inputNatureofland = $("#inputNatureofland_" + index).val();
        let inputExtentofinterest = $("#inputExtentofinterest_" + index).val();
        let inputIfnotinownname = $("#inputIfnotinownname_" + index).val();
        let inputDateofacquisition = $("#inputDateofacquisition_" + index).val();
        let inputHowacquired = $("#inputHowacquired_" + index).val();
        let inputValueoftheproperty = parseInt($("#inputValueoftheproperty_" + index).val());
        let inputParticularsofsanction = $("#inputParticularsofsanction_" + index).val();
        let inputTotalannualincome = parseInt($("#inputTotalannualincome_" + index).val());
        let inputRemarks = $("#inputRemarks_" + index).val();


        if (inputDateofacquisition != "" && inputDateofacquisition != null) {
            inputDateofacquisition = formatToIsodateFormate(inputDateofacquisition)
        }

        let obj = {
            id: idOfTable,
            description_of_Property: inputescriptionofproperty,
            precise_Location_Name_of_District_etc: inputPreciselocation,
            area_of_Land: inputAreaofland,
            nature_of_Land: inputNatureofland,
            extent_of_Interest: inputExtentofinterest,
            if_not_in_own_name_state_in_whose_name: inputIfnotinownname,
            date_of_Acquisition: inputDateofacquisition == "" ? null : inputDateofacquisition,
            how_Acquired_by_Purchase_Mortgage_etc: inputHowacquired,
            value_of_Property: inputValueoftheproperty == "" || NaN ? null : inputValueoftheproperty,
            particulars_of_Sanction_of_Prescribed_Authority: inputParticularsofsanction,
            total_Annual_Income_from_property: inputTotalannualincome,
            remarks: inputRemarks
        }

        objArrEmployer.push(obj);
    }
    var _url = apiBaseUrlHr + "/api/CandidateJoining/SaveImmovablePropertyJoining/" + candidateId;
    _url = _url.replace(/[\u200B-\u200D\uFEFF]/g, '');

    $.ajax({
        type: "POST",
        url: _url,
        data: JSON.stringify(objArrEmployer),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        //processData: false,
        //contentType: false,
        /*headers: { Authorization: ApiToken },*/
        beforeSend: function () {
            //var ApiObject = CheckApiCall();
            //if (ApiObject.isCall == false) {
            //    window.location.href = mainLoginUrl;
            //    return false;
            //}
            $('.page-loader').show();

        },
        success: function (response) {

            //loadAllDataOfJoiningCandidate();
            $('.page-loader').hide();


            if (response.statusCode == 201 || response.statusCode == 200) {
                Swal.fire({
                    title: 'Success !',
                    text: response.statusCode == 201 ? 'Employer Details updated Successfully' : response.message,
                    icon: "success"
                })
                getSet7ImmovablePropertyDataFromApi()
                PrintFormG()
            }

            $('.page-loader').hide();


        },
        complete: function () {

            $('.page-loader').hide();

        },
        error: function (jqXHR, status) {

            $('.page-loader').hide();

            Swal.fire({
                title: 'Invalid !',
                text: jqXHR.responseJSON.title,
                icon: "error"
            });

            switch (jqXHR.status) {

                case "401":
                    window.location.href = unAuthorisedUrl;
                    break;
                case "403":
                    window.location.href = forbiddenUrl;
                    break;
                default:
                    ;
                    break;
            }
        }
    });


}




function getSet7MovablePropertyDataFromApi() {
    var url = apiBaseUrlHr + `/api/CandidateJoining/GetStatementOfMovablePropertyJoining?CandidateId=${candidateId}`;
    url = url.replace(/[\u200B-\u200D\uFEFF]/g, '');
    $.ajax({
        type: "GET",
        url: url,
        //data: '{}',
        contentType: "application/json; charset=utf-8",
        dataType: "json",

        beforeSend: function () {

            $('.page-loader').show();

        },
        success: function (response) {


            loadSet7MovableProperty(response.data)

            $('.page-loader').hide();


        },
        error: function (err) {
            $('.page-loader').hide();
            switch (err.status) {

                case "401":
                    window.location.href = unAuthorisedUrl;
                    break;
                case "403":
                    window.location.href = forbiddenUrl;
                    break;
                default:

                    break;
            }
        },

        failure: function (response) {
            // alert(response.d);
            $('.page-loader').hide();
        }
    });


}

var Set7MovableProperty = 0
function loadSet7MovableProperty(listDataEmployer) {
    Set7MovableProperty = 0;


    var tbodyStatementofmovableproperty = $("#tbodyStatementofmovableproperty");
    tbodyStatementofmovableproperty.empty();
    ;
    if (listDataEmployer != null)
        for (let e of listDataEmployer) {

            Set7MovableProperty++;
            let row = `<tr class="trSet7Set7MovableProperty" id="row7_${Set7MovableProperty}">
                                        <td> ${Set7MovableProperty}.
                                                                    <input type="hidden" id="hiddenSet7MmovableProperty_${Set7MovableProperty}" value=${e.id} </td>
                                        <td><input type="text" class="form-control" id="inputSet3Descriptionofitems_${Set7MovableProperty}" value="${e.decription_of_Items == null ? "" : e.decription_of_Items}"></td>
                                        <td><input type="text" class="form-control" id="inputSet3Priceorvalueatthetimeofacquisition_${Set7MovableProperty}" value="${e.if_not_in_own_name_state_in_whose_name == null ? "" : e.if_not_in_own_name_state_in_whose_name}"></td>
                                        <td><input type="text" class="form-control" id="inputSet3herrelationshipwiththeemployee_${Set7MovableProperty}" value="${e.how_Acquired == null ? "" : e.how_Acquired}"></td>
                                        <td><input type="text" placeholder='select date' class="form-control datepickerr" id="inputSet3Howacquiredwithapproximatedate_${Set7MovableProperty}" value="${e.acqusition_Date == null ? "" : formatDate_dd_mm_yyyy_New_Formate(new Date(Date.parse(e.acqusition_Date)))}"></td>
                                        <td><input type="text" class="form-control" id="inputSet3StatementofmovablepropertyRemarks_${Set7MovableProperty}" value="${e.remarks == null ? "" : e.remarks}"></td>


                                    </tr>
                                    `


            tbodyStatementofmovableproperty.append(row);

        }
    ;
    if (Set7MovableProperty == 0) {

        Set7MovableProperty++;
        let row = `  <tr class="trSet7Set7MovableProperty" id="row7_${Set7MovableProperty}">
                                        <td> ${Set7MovableProperty}.
                                                                    <input type="hidden" id="hiddenSet7MmovableProperty_${Set7MovableProperty}" value='0' </td>
                                        <td><input type="text" class="form-control" id="inputSet3Descriptionofitems_${Set7MovableProperty}"></td>
                                        <td><input type="text" class="form-control" id="inputSet3Priceorvalueatthetimeofacquisition_${Set7MovableProperty}"></td>
                                        <td><input type="text" class="form-control" id="inputSet3herrelationshipwiththeemployee_${Set7MovableProperty}"></td>
                                        <td><input  type="text" placeholder='select date' class="form-control datepickerr" id="inputSet3Howacquiredwithapproximatedate_${Set7MovableProperty}"></td>
                                        <td><input type="text" class="form-control" id="inputSet3StatementofmovablepropertyRemarks_${Set7MovableProperty}"></td>


                                    </tr>`;
        tbodyStatementofmovableproperty.append(row);
    }




}
function saveloadSet7MovableProperty() {
    debugger
    var tbodyStatementofmovableproperty = $("#tbodyStatementofmovableproperty > tr");
    var objArrEmployer = [];
    for (let row of tbodyStatementofmovableproperty) {

        let index = row.id.split('_')[1];
        let idOfTable = $("#hiddenSet7MmovableProperty_" + index).val();
        let inputSet3Descriptionofitems_ = $("#inputSet3Descriptionofitems_" + index).val();
        let inputSet3Priceorvalueatthetimeofacquisition = $("#inputSet3Priceorvalueatthetimeofacquisition_" + index).val();
        let inputSet3herrelationshipwiththeemployee = $("#inputSet3herrelationshipwiththeemployee_" + index).val();
        let inputSet3Howacquiredwithapproximatedate = $("#inputSet3Howacquiredwithapproximatedate_" + index).val();
        let inputSet3StatementofmovablepropertyRemarks = $("#inputSet3StatementofmovablepropertyRemarks_" + index).val();

        if (inputSet3Howacquiredwithapproximatedate !== "" && inputSet3Howacquiredwithapproximatedate !== null) {
            inputSet3Howacquiredwithapproximatedate = formatToIsodateFormate(inputSet3Howacquiredwithapproximatedate)
        }



        let obj = {
            id: idOfTable,
            decription_of_Items: inputSet3Descriptionofitems_,
            if_not_in_own_name_state_in_whose_name: inputSet3Priceorvalueatthetimeofacquisition,
            how_Acquired: inputSet3herrelationshipwiththeemployee,
            acqusition_Date: inputSet3Howacquiredwithapproximatedate == "" ? null : inputSet3Howacquiredwithapproximatedate,
            remarks: inputSet3StatementofmovablepropertyRemarks
        }

        objArrEmployer.push(obj);
    }
    var _url = apiBaseUrlHr + "/api/CandidateJoining/SaveStatementOfMovablePropertyJoining/" + candidateId;
    _url = _url.replace(/[\u200B-\u200D\uFEFF]/g, '');

    $.ajax({
        type: "POST",
        url: _url,
        data: JSON.stringify(objArrEmployer),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        //processData: false,
        //contentType: false,
        /*headers: { Authorization: ApiToken },*/
        beforeSend: function () {
            //var ApiObject = CheckApiCall();
            //if (ApiObject.isCall == false) {
            //    window.location.href = mainLoginUrl;
            //    return false;
            //}
            $('.page-loader').show();

        },
        success: function (response) {

            //loadAllDataOfJoiningCandidate();
            $('.page-loader').hide();


            if (response.statusCode == 201 || response.statusCode == 200) {
                Swal.fire({
                    title: 'Success !',
                    text: response.statusCode == 201 ? 'Employer Details updated Successfully' : response.message,
                    icon: "success"
                })
                getSet7MovablePropertyDataFromApi()
                PrintFormG()
            }

            $('.page-loader').hide();


        },
        complete: function () {

            $('.page-loader').hide();

        },
        error: function (jqXHR, status) {

            $('.page-loader').hide();

            Swal.fire({
                title: 'Invalid !',
                text: jqXHR.responseJSON.title,
                icon: "error"
            });

            switch (jqXHR.status) {

                case "401":
                    window.location.href = unAuthorisedUrl;
                    break;
                case "403":
                    window.location.href = forbiddenUrl;
                    break;
                default:
                    ;
                    break;
            }
        }
    });


}








function getSet7Pf() {
    var url = apiBaseUrlHr + `/api/CandidateJoining/GetStatementOfPfJoining/${candidateId}`;
    url = url.replace(/[\u200B-\u200D\uFEFF]/g, '');
    $.ajax({
        type: "GET",
        url: url,
        //data: '{}',
        contentType: "application/json; charset=utf-8",
        dataType: "json",

        beforeSend: function () {

            $('.page-loader').show();

        },
        success: function (response) {


            loadSet7Pf(response.data)

            $('.page-loader').hide();


        },
        error: function (err) {
            $('.page-loader').hide();
            switch (err.status) {

                case "401":
                    window.location.href = unAuthorisedUrl;
                    break;
                case "403":
                    window.location.href = forbiddenUrl;
                    break;
                default:

                    break;
            }
        },

        failure: function (response) {
            // alert(response.d);
            $('.page-loader').hide();
        }
    });


}

var Set7Pf = 0
function loadSet7Pf(listDataEmployer) {
    Set7Pf = 0;


    var tbodyStatementofProvidentFund = $("#tbodyStatementofProvidentFund");
    tbodyStatementofProvidentFund.empty();
    ;
    if (listDataEmployer != null)
        for (let e of listDataEmployer) {

            Set7Pf++;
            let row = `<tr class="trSet7Set7Pf" id="row8_${Set7Pf}">
                                        <td> ${Set7Pf}.
                                                                    <input type="hidden" id="hiddenSet7Pf_${Set7Pf}" value=${e.id}></td>
                                        <td><input type="text" class="form-control" id="inputSet3PolicyNoofpolicy_${Set7Pf}" value='${e.statement_of_PF_Policy_No == null ? "" : e.statement_of_PF_Policy_No}'></td>
                                        <td><input type="text" placeholder='select date' class="form-control datepickerr" id="inputSet3Policydateofpolicy_${Set7Pf}" value='${e.statement_of_PF_Policy_Date == null ? "" : formatDate_dd_mm_yyyy_New_Formate(new Date(Date.parse(e.statement_of_PF_Policy_Date)))}'></td>
                                        <td><input type="text" class="form-control" id="inputSet3NameofInsuranceCompany_${Set7Pf}" value='${e.statement_of_PF_Name_of_Insurance_Company}'></td>
                                        <td><input type="text" placeholder='select date' class="form-control datepickerr" id="inputSet3Suminsureddateofmaturity_${Set7Pf}" value='${e.statement_of_PF_SI_Date_of_Maturity == null ? "" : formatDate_dd_mm_yyyy_New_Formate(new Date(Date.parse(e.statement_of_PF_SI_Date_of_Maturity)))}'></td>
                                        <td><input type="text" class="form-control" id="inputSet3mountofannualpremium_${Set7Pf}" value='${e.statement_of_PF_Annual_Premium == null ? "" : e.statement_of_PF_Annual_Premium}'></td>
                                        <td>
                                            <input type="text" class="form-control" id="inputSet3TypeofProvidentFunds_${Set7Pf}" value='${e.statement_of_PF_Type == null ? "" : e.statement_of_PF_Type}'>
                                        </td>
                                        <td><input type="text" class="form-control" id="inputSet3Closingbalanceaslastreported_${Set7Pf}" value='${e.statement_of_PF_Closing_Balance == null ? "" : e.statement_of_PF_Closing_Balance}'></td>
                                        <td><input type="text" class="form-control" id="inputSet3Contributionmadesubsequently_${Set7Pf}" value='${e.statement_of_PF_Contribution_Made == null ? "" : e.statement_of_PF_Contribution_Made}'></td>
                                        <td><input type="text" class="form-control" id="inputSet3StatementofProvidentFundTota_${Set7Pf}" value='${e.statement_of_PF_Total == null ? "" : e.statement_of_PF_Total}'></td>
                                        <td><input type="text" class="form-control" id="inputSet3StatementofProvidentFundRemarks_${Set7Pf}" value='${e.statement_of_PF_Remarks == null ? "" : e.statement_of_PF_Remarks}'></td>

                                    </tr>
                                    `


            tbodyStatementofProvidentFund.append(row);

        }
    ;
    if (Set7Pf == 0) {

        Set7Pf++;
        let row = ` <tr class="trSet7Set7Pf" id="row8_${Set7Pf}">
                                        <td> ${Set7Pf}.
                                                                    <input type="hidden" id="hiddenSet7Pf_${Set7Pf}" value='0'></td>
                                        <td><input type="text" class="form-control" id="inputSet3PolicyNoofpolicy_${Set7Pf}"></td>
                                        <td><input type="text" placeholder='select date' class="form-control datepickerr" id="inputSet3Policydateofpolicy_${Set7Pf}"></td>
                                        <td><input type="text" class="form-control" id="inputSet3NameofInsuranceCompany_${Set7Pf}"></td>
                                        <td><input type="text" placeholder='select date' class="form-control datepickerr" id="inputSet3Suminsureddateofmaturity_${Set7Pf}"></td>
                                        <td><input type="text" class="form-control" id="inputSet3mountofannualpremium_${Set7Pf}"></td>
                                        <td>
                                            <input type="text" class="form-control" id="inputSet3TypeofProvidentFunds_${Set7Pf}">
                                        </td>
                                        <td><input type="text" class="form-control" id="inputSet3Closingbalanceaslastreported_${Set7Pf}"></td>
                                        <td><input type="text" class="form-control" id="inputSet3Contributionmadesubsequently_${Set7Pf}"></td>
                                        <td><input type="text" class="form-control" id="inputSet3StatementofProvidentFundTota_${Set7Pf}"></td>
                                        <td><input type="text" class="form-control" id="inputSet3StatementofProvidentFundRemarks_${Set7Pf}"></td>

                                    </tr>`;
        tbodyStatementofProvidentFund.append(row);
    }




}

function saveloadSet7Pf() {


    


    var tbodyStatementofProvidentFund = $("#tbodyStatementofProvidentFund > tr");
    var objArrEmployer = [];
    for (let row of tbodyStatementofProvidentFund) {

        let index = row.id.split('_')[1];
        let idOfTable = $("#hiddenSet7Pf_" + index).val();
        let inputSet3PolicyNoofpolicy = $('#inputSet3PolicyNoofpolicy_' + index).val()
        let inputSet3Policydateofpolicy = $('#inputSet3Policydateofpolicy_' + index).val()
        let inputSet3NameofInsuranceCompany = $('#inputSet3NameofInsuranceCompany_' + index).val()
        let inputSet3Suminsureddateofmaturity = $('#inputSet3Suminsureddateofmaturity_' + index).val()
        let inputSet3mountofannualpremium = parseInt($('#inputSet3mountofannualpremium_' + index).val())
        let inputSet3TypeofProvidentFunds = $('#inputSet3TypeofProvidentFunds_' + index).val()


        let inputSet3Closingbalanceaslastreported = parseInt($('#inputSet3Closingbalanceaslastreported_' + index).val())
        let inputSet3Contributionmadesubsequently = parseInt($('#inputSet3Contributionmadesubsequently_' + index).val())
        let inputSet3StatementofProvidentFundTota = parseInt($('#inputSet3StatementofProvidentFundTota_' + index).val())
        let inputSet3StatementofProvidentFundRemarks = $('#inputSet3StatementofProvidentFundRemarks_' + index).val()


        if (inputSet3Policydateofpolicy != "" || inputSet3Policydateofpolicy != null) {
            inputSet3Policydateofpolicy = formatToIsodateFormate(inputSet3Policydateofpolicy)
        }
        if (inputSet3Suminsureddateofmaturity != "" && inputSet3Suminsureddateofmaturity != null) {
            inputSet3Suminsureddateofmaturity = formatToIsodateFormate(inputSet3Suminsureddateofmaturity)
        }

        let obj = {
            id: idOfTable,
            statement_of_PF_Policy_No: inputSet3PolicyNoofpolicy,
            statement_of_PF_Policy_Date: inputSet3Policydateofpolicy == "" ? null : inputSet3Policydateofpolicy,
            statement_of_PF_Name_of_Insurance_Company: inputSet3NameofInsuranceCompany,
            statement_of_PF_SI_Date_of_Maturity: inputSet3Suminsureddateofmaturity == "" ? null : inputSet3Suminsureddateofmaturity,
            statement_of_PF_Annual_Premium: inputSet3mountofannualpremium == "" || NaN ? null : inputSet3mountofannualpremium,
            statement_of_PF_Type: inputSet3TypeofProvidentFunds,
            statement_of_PF_Closing_Balance: inputSet3Closingbalanceaslastreported == "" || NaN ? null : inputSet3Closingbalanceaslastreported,
            statement_of_PF_Contribution_Made: inputSet3Contributionmadesubsequently == "" || NaN ? null : inputSet3Contributionmadesubsequently,
            statement_of_PF_Total: inputSet3StatementofProvidentFundTota == "" || NaN ? null : inputSet3StatementofProvidentFundTota,
            statement_of_PF_Remarks: inputSet3StatementofProvidentFundRemarks,




        }

        objArrEmployer.push(obj);
    }










    //FillFormDataForPostApi(newParticularsPersonal, formData)
    //formDataNew.append('EmpId', empObject.empId);
    var _url = apiBaseUrlHr + "/api/CandidateJoining/SaveStatementOfPfJoining/" + candidateId;
    _url = _url.replace(/[\u200B-\u200D\uFEFF]/g, '');

    $.ajax({
        type: "POST",
        url: _url,
        data: JSON.stringify(objArrEmployer),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        //processData: false,
        //contentType: false,
        /*headers: { Authorization: ApiToken },*/
        beforeSend: function () {
            //var ApiObject = CheckApiCall();
            //if (ApiObject.isCall == false) {
            //    window.location.href = mainLoginUrl;
            //    return false;
            //}
            $('.page-loader').show();

        },
        success: function (response) {

            //loadAllDataOfJoiningCandidate();
            $('.page-loader').hide();



            if (response.statusCode == 201 || response.statusCode == 200) {
                Swal.fire({
                    title: 'Success !',
                    text: response.statusCode == 201 ? 'Detail has been successfully submitted!' : response.message,
                    icon: "success"
                })
                getSet7Pf()
                PrintFormG()
            }
            else {
                Swal.fire({
                    title: 'Invalid !',
                    text: response.message,
                    icon: "error"
                });
            }
            $('.page-loader').hide();


        },

        error: function (jqXHR, status) {

            $('.page-loader').hide();

            Swal.fire({
                title: 'Invalid !',
                text: jqXHR.responseJSON.title,
                icon: "error"
            });

            switch (jqXHR.status) {

                case "401":
                    window.location.href = unAuthorisedUrl;
                    break;
                case "403":
                    window.location.href = forbiddenUrl;
                    break;
                default:
                    ;
                    break;
            }
        }
    });

}



function getSet7Insurence() {
    var url = apiBaseUrlHr + `/api/CandidateJoining/GetStatementOfInsuranceJoining/${candidateId}`;
    url = url.replace(/[\u200B-\u200D\uFEFF]/g, '');
    $.ajax({
        type: "GET",
        url: url,
        //data: '{}',
        contentType: "application/json; charset=utf-8",
        dataType: "json",

        beforeSend: function () {

            $('.page-loader').show();

        },
        success: function (response) {


            loadSet7Insurence(response.data)

            $('.page-loader').hide();


        },
        error: function (err) {
            $('.page-loader').hide();
            switch (err.status) {

                case "401":
                    window.location.href = unAuthorisedUrl;
                    break;
                case "403":
                    window.location.href = forbiddenUrl;
                    break;
                default:

                    break;
            }
        },

        failure: function (response) {
            // alert(response.d);
            $('.page-loader').hide();
        }
    });


}

var Set7Insurence = 0
function loadSet7Insurence(listDataEmployer) {
    Set7Insurence = 0;


    var tbodyLifeInsurancePolicy = $("#tbodyLifeInsurancePolicy");
    tbodyLifeInsurancePolicy.empty();
    ;
    if (listDataEmployer != null)
        for (let e of listDataEmployer) {

            Set7Insurence++;
            let row = `<tr class="trSet7Set7Insurence" id="row9_${Set7Insurence}">
                                        <td>${Set7Insurence}.
                                                                    <input type="hidden" id="hiddenSet7Insurence_${Set7Insurence}" value=${e.id}></td>
                                        <td><input type="text" class="form-control" id="inputSet4PolicyNoofpolicy_${Set7Insurence}" value="${e.statement_of_Insurance_Policy_No == null ? "" : e.statement_of_Insurance_Policy_No}"></td>
                                         <td><input type="text" class="form-control datepickerr" placeholder='select date' id="inputSet4Policydateofpolicy_${Set7Insurence}" value="${e.statement_of_Insurance_Policy_Date == null ? "" : formatDate_dd_mm_yyyy_New_Formate(new Date(Date.parse(e.statement_of_Insurance_Policy_Date)))}"></td>
                                        <td><input type="text" class="form-control" id="inputSet4NameofInsuranceCompany_${Set7Insurence}" value="${e.statement_of_Insurance_Name_of_Insurance_Company == null ? "" : e.statement_of_Insurance_Name_of_Insurance_Company}"></td>
                                        <td><input type="text" class="form-control datepickerr" placeholder='select date'  id="inputSet4Suminsureddateofmaturity_${Set7Insurence}" value="${e.statement_of_Insurance_SI_Date_of_Maturity == null ? "" : formatDate_dd_mm_yyyy_New_Formate(new Date(Date.parse(e.statement_of_Insurance_SI_Date_of_Maturity)))}"></td>
                                        <td><input type="text" class="form-control" id="inputSet4mountofannualpremium_${Set7Insurence}"  value="${e.statement_of_Insurance_Annual_Premium == null ? "" : e.statement_of_Insurance_Annual_Premium}"></td>
                                        <td>
                                            <input type="text" class="form-control" id="inputSet4InsurancePolicyAcNo_${Set7Insurence}" value="${e.statement_of_Insurance_Insurance_Policy_Account_No == null ? "" : e.statement_of_Insurance_Insurance_Policy_Account_No}">
                                        </td>
                                        <td><input type="text" class="form-control" id="inputSet4Closingbalanceaslastreported_${Set7Insurence}"  value="${e.statement_of_Insurance_Closing_Balance == null ? "" : e.statement_of_Insurance_Closing_Balance}"></td>
                                        <td><input type="text" class="form-control" id="inputSet4Contributionmadesubsequently_${Set7Insurence}"  value="${e.statement_of_Insurance_Contribution_Made == null ? "" : e.statement_of_Insurance_Contribution_Made}"></td>
                                        <td><input type="text" class="form-control" id="inputSet4StatementofProvidentFundTotal_${Set7Insurence}"  value="${e.statement_of_Insurance_Total == null ? "" : e.statement_of_Insurance_Total}"></td>
                                        <td><input type="text" class="form-control" id="inputSet4StatementofProvidentFundRemarks_${Set7Insurence}"  value="${e.statement_of_Insurance_Remarks == null ? "" : e.statement_of_Insurance_Remarks}"></td>

                                    </tr>
                                    `


            tbodyLifeInsurancePolicy.append(row);

        }
    ;
    if (Set7Insurence == 0) {

        Set7Insurence++;
        let row = `<tr class="trSet7Set7Insurence" id="row9_${Set7Insurence}">
                                        <td>${Set7Insurence}.
                                                                    <input type="hidden" id="hiddenSet7Insurence_${Set7Insurence}" value='0'></td>
                                        <td><input type="text" class="form-control" id="inputSet4PolicyNoofpolicy_${Set7Insurence}"></td>
                                         <td><input type="text" class="form-control datepickerr" placeholder='select date'  id="inputSet4Policydateofpolicy_${Set7Insurence}"></td>
                                        <td><input type="text" class="form-control" id="inputSet4NameofInsuranceCompany_${Set7Insurence}"></td>
                                        <td><input type="text" class="form-control datepickerr" placeholder='select date'  id="inputSet4Suminsureddateofmaturity_${Set7Insurence}"></td>
                                        <td><input type="text" class="form-control" id="inputSet4mountofannualpremium_${Set7Insurence}"></td>
                                        <td>
                                            <input type="text" class="form-control" id="inputSet4InsurancePolicyAcNo_${Set7Insurence}">
                                        </td>
                                        <td><input type="text" class="form-control" id="inputSet4Closingbalanceaslastreported_${Set7Insurence}"></td>
                                        <td><input type="text" class="form-control" id="inputSet4Contributionmadesubsequently_${Set7Insurence}"></td>
                                        <td><input type="text" class="form-control" id="inputSet4StatementofProvidentFundTotal_${Set7Insurence}"></td>
                                        <td><input type="text" class="form-control" id="inputSet4StatementofProvidentFundRemarks_${Set7Insurence}"></td>

                                    </tr>`;
        tbodyLifeInsurancePolicy.append(row);
    }




}

function saveloadSet7Insurence() {


    


    var tbodyLifeInsurancePolicy = $("#tbodyLifeInsurancePolicy > tr");
    var objArrEmployer = [];
    for (let row of tbodyLifeInsurancePolicy) {

        let index = row.id.split('_')[1];
        let idOfTable = $("#hiddenSet7Insurence_" + index).val();
        let inputSet4PolicyNoofpolicy = $('#inputSet4PolicyNoofpolicy_' + index).val()
        let inputSet4Policydateofpolicy = $('#inputSet4Policydateofpolicy_' + index).val()
        let inputSet4NameofInsuranceCompany = $('#inputSet4NameofInsuranceCompany_' + index).val()
        let inputSet4Suminsureddateofmaturity = $('#inputSet4Suminsureddateofmaturity_' + index).val()
        let inputSet4mountofannualpremium = parseInt($('#inputSet4mountofannualpremium_' + index).val())
        let inputSet4InsurancePolicyAcNo_ = $('#inputSet4InsurancePolicyAcNo_' + index).val()


        let inputSet4Closingbalanceaslastreported = parseInt($('#inputSet4Closingbalanceaslastreported_' + index).val())
        let inputSet4Contributionmadesubsequently = $('#inputSet4Contributionmadesubsequently_' + index).val()
        let inputSet4StatementofProvidentFundTotal = parseInt($('#inputSet4StatementofProvidentFundTotal_' + index).val())
        let inputSet4StatementofProvidentFundRemarks = $('#inputSet4StatementofProvidentFundRemarks_' + index).val()


        if (inputSet4Policydateofpolicy != "" && inputSet4Policydateofpolicy != null) {
            inputSet4Policydateofpolicy = formatToIsodateFormate(inputSet4Policydateofpolicy)
        }

        if (inputSet4Suminsureddateofmaturity != "" && inputSet4Suminsureddateofmaturity != null) {
            inputSet4Suminsureddateofmaturity = formatToIsodateFormate(inputSet4Suminsureddateofmaturity)
        }



        let obj = {
            id: idOfTable,
            statement_of_Insurance_Policy_No: inputSet4PolicyNoofpolicy,
            statement_of_Insurance_Policy_Date: inputSet4Policydateofpolicy == "" ? null : inputSet4Policydateofpolicy,
            statement_of_Insurance_Name_of_Insurance_Company: inputSet4NameofInsuranceCompany,
            statement_of_Insurance_SI_Date_of_Maturity: inputSet4Suminsureddateofmaturity == "" ? null : inputSet4Suminsureddateofmaturity,
            statement_of_Insurance_Annual_Premium: inputSet4mountofannualpremium == "" || NaN ? null : inputSet4mountofannualpremium,
            statement_of_Insurance_Insurance_Policy_Account_No: inputSet4InsurancePolicyAcNo_,
            statement_of_Insurance_Closing_Balance: inputSet4Closingbalanceaslastreported == "" || NaN ? null : inputSet4Closingbalanceaslastreported,
            statement_of_Insurance_Contribution_Made: inputSet4Contributionmadesubsequently,
            statement_of_Insurance_Total: inputSet4StatementofProvidentFundTotal == "" || NaN ? null : inputSet4StatementofProvidentFundTotal,
            statement_of_Insurance_Remarks: inputSet4StatementofProvidentFundRemarks,




        }

        objArrEmployer.push(obj);
    }


    //const formDataNew = new FormData();
    //formDataNew.append('piF_Country_of_Birth',)

    //FillFormDataForPostApi(newParticularsPersonal, formData)
    //formDataNew.append('EmpId', empObject.empId);
    var _url = apiBaseUrlHr + "/api/CandidateJoining/SaveStatementOfInsuranceJoining/" + candidateId;
    _url = _url.replace(/[\u200B-\u200D\uFEFF]/g, '');

    $.ajax({
        type: "POST",
        url: _url,
        data: JSON.stringify(objArrEmployer),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        //processData: false,  
        //contentType: false,
        /*headers: { Authorization: ApiToken },*/
        beforeSend: function () {
            //var ApiObject = CheckApiCall();
            //if (ApiObject.isCall == false) {
            //    window.location.href = mainLoginUrl;
            //    return false;
            //}
            $('.page-loader').show();

        },
        success: function (response) {

            //loadAllDataOfJoiningCandidate();
            $('.page-loader').hide();



            if (response.statusCode == 201 || response.statusCode == 200) {
                Swal.fire({
                    title: 'Success !',
                    text: response.statusCode == 201 ? 'Detail has been successfully submitted!' : response.message,
                    icon: "success"
                })
                getSet7Insurence()
                PrintFormG()
            }
            else {
                Swal.fire({
                    title: 'Invalid !',
                    text: response.message,
                    icon: "error"
                });
            }
            $('.page-loader').hide();


        },

        error: function (jqXHR, status) {

            $('.page-loader').hide();

            Swal.fire({
                title: 'Invalid !',
                text: jqXHR.responseJSON.title,
                icon: "error"
            });

            switch (jqXHR.status) {

                case "401":
                    window.location.href = unAuthorisedUrl;
                    break;
                case "403":
                    window.location.href = forbiddenUrl;
                    break;
                default:
                    ;
                    break;
            }
        }
    });

}



function getSet7DebtsAndOtherLiabilities() {
    var url = apiBaseUrlHr + `/api/CandidateJoining/GetStatementofDebtAndLiabilitiesJoining/${candidateId}`;
    url = url.replace(/[\u200B-\u200D\uFEFF]/g, '');
    $.ajax({
        type: "GET",
        url: url,
        //data: '{}',
        contentType: "application/json; charset=utf-8",
        dataType: "json",

        beforeSend: function () {

            $('.page-loader').show();

        },
        success: function (response) {


            loadSet7DebtsAndOtherLiabilities(response.data)

            $('.page-loader').hide();


        },
        error: function (err) {
            $('.page-loader').hide();
            switch (err.status) {

                case "401":
                    window.location.href = unAuthorisedUrl;
                    break;
                case "403":
                    window.location.href = forbiddenUrl;
                    break;
                default:

                    break;
            }
        },

        failure: function (response) {
            // alert(response.d);
            $('.page-loader').hide();
        }
    });


}

var Set7DebtsAndOtherLiabilities = 0
function loadSet7DebtsAndOtherLiabilities(listDataEmployer) {
    Set7DebtsAndOtherLiabilities = 0;


    var tbodyStatementofDebts = $("#tbodyStatementofDebts");
    tbodyStatementofDebts.empty();

    if (listDataEmployer != null)
        for (let e of listDataEmployer) {

            Set7DebtsAndOtherLiabilities++;
            let row = `<tr class="trSet7Set7DebtsAndOtherLiabilities" id="row10_${Set7DebtsAndOtherLiabilities}">
                                        <td>${Set7DebtsAndOtherLiabilities}.
                                                                    <input type="hidden" id="hiddenSet7DebtsAndOtherLiabilities_${Set7DebtsAndOtherLiabilities}" value=${e.id}></td>
                                        <td><input type="text" class="form-control" id="inputStatementofDebtsandOtherAmount_${Set7DebtsAndOtherLiabilities}" value='${e.statement_of_Debt_and_Liabilities_Amount == null ? "" : e.statement_of_Debt_and_Liabilities_Amount}'></td>
                                        <td><input type="text" class="form-control" id="inputStatementofDebtsandOtherNameandaddressofCreditor_${Set7DebtsAndOtherLiabilities}" value='${e.statement_of_Debt_and_Liabilities_Name_and_Address_of_Creditor == null ? "" : e.statement_of_Debt_and_Liabilities_Name_and_Address_of_Creditor}'></td>
                                        <td><input type="text" placeholder='select date' class="form-control datepickerr" id="inputStatementofDebtsandOtherDateofincurringLiability_${Set7DebtsAndOtherLiabilities}" value='${e.statement_of_Debt_and_Liabilities_Date_of_Incurring_Liablities == null ? "" : formatDate_dd_mm_yyyy_New_Formate(new Date(Date.parse(e.statement_of_Debt_and_Liabilities_Date_of_Incurring_Liablities)))}'></td>
                                        <td><input type="text" class="form-control" id="inputStatementofDebtsandOtherDetailsofTransaction_${Set7DebtsAndOtherLiabilities}" value='${e.statement_of_Debt_and_Liabilities_Details_of_Transaction == null ? "" : e.statement_of_Debt_and_Liabilities_Details_of_Transaction}'></td>
                                        <td><input type="text" class="form-control" id="inputStatementofDebtsandOtherRemarks_${Set7DebtsAndOtherLiabilities}" value='${e.statement_of_Debt_and_Liabilities_Remarks == null ? "" : e.statement_of_Debt_and_Liabilities_Remarks}'></td>


                                    </tr>
                                    `


            tbodyStatementofDebts.append(row);

        }
    ;
    if (Set7DebtsAndOtherLiabilities == 0) {

        Set7DebtsAndOtherLiabilities++;
        let row = `<tr class="trSet7Set7DebtsAndOtherLiabilities" id="row10_${Set7DebtsAndOtherLiabilities}">
                                        <td>${Set7DebtsAndOtherLiabilities}.
                                                                    <input type="hidden" id="hiddenSet7DebtsAndOtherLiabilities_${Set7DebtsAndOtherLiabilities}" value='0'></td>
                                        <td><input type="text" class="form-control" id="inputStatementofDebtsandOtherAmount_${Set7DebtsAndOtherLiabilities}"></td>
                                        <td><input type="text" class="form-control" id="inputStatementofDebtsandOtherNameandaddressofCreditor_${Set7DebtsAndOtherLiabilities}"></td>
                                        <td><input type="text" placeholder='select date' class="form-control datepickerr" id="inputStatementofDebtsandOtherDateofincurringLiability_${Set7DebtsAndOtherLiabilities}"></td>
                                        <td><input type="text" class="form-control" id="inputStatementofDebtsandOtherDetailsofTransaction_${Set7DebtsAndOtherLiabilities}"></td>
                                        <td><input type="text" class="form-control" id="inputStatementofDebtsandOtherRemarks_${Set7DebtsAndOtherLiabilities}"></td>


                                    </tr>`;
        tbodyStatementofDebts.append(row);
    }




}

function saveloadSet7DebtsAndOtherLiabilities() {


    


    var tbodyStatementofDebts = $("#tbodyStatementofDebts > tr");
    var objArrEmployer = [];
    for (let row of tbodyStatementofDebts) {

        let index = row.id.split('_')[1];
        let idOfTable = $("#hiddenSet7DebtsAndOtherLiabilities_" + index).val();
        let inputStatementofDebtsandOtherAmount = parseInt($('#inputStatementofDebtsandOtherAmount_' + index).val())
        let inputStatementofDebtsandOtherNameandaddressofCreditor = $('#inputStatementofDebtsandOtherNameandaddressofCreditor_' + index).val()
        let inputStatementofDebtsandOtherDateofincurringLiability = $('#inputStatementofDebtsandOtherDateofincurringLiability_' + index).val()
        let inputStatementofDebtsandOtherDetailsofTransaction = $('#inputStatementofDebtsandOtherDetailsofTransaction_' + index).val()
        let inputStatementofDebtsandOtherRemarks = $('#inputStatementofDebtsandOtherRemarks_' + index).val()




        if (inputStatementofDebtsandOtherDateofincurringLiability != "" && inputStatementofDebtsandOtherDateofincurringLiability != null) {
            inputStatementofDebtsandOtherDateofincurringLiability = formatToIsodateFormate(inputStatementofDebtsandOtherDateofincurringLiability)
        }

        let obj = {
            id: idOfTable,
            statement_of_Debt_and_Liabilities_Amount: inputStatementofDebtsandOtherAmount == "" || NaN ? null : inputStatementofDebtsandOtherAmount,
            statement_of_Debt_and_Liabilities_Name_and_Address_of_Creditor: inputStatementofDebtsandOtherNameandaddressofCreditor,
            statement_of_Debt_and_Liabilities_Date_of_Incurring_Liablities: inputStatementofDebtsandOtherDateofincurringLiability == "" ? null : inputStatementofDebtsandOtherDateofincurringLiability,
            statement_of_Debt_and_Liabilities_Details_of_Transaction: inputStatementofDebtsandOtherDetailsofTransaction,
            statement_of_Debt_and_Liabilities_Remarks: inputStatementofDebtsandOtherRemarks

        }

        objArrEmployer.push(obj);
    }



    var _url = apiBaseUrlHr + "/api/CandidateJoining/SaveStatementofDebtAndLiabilitiesJoining/" + candidateId;
    _url = _url.replace(/[\u200B-\u200D\uFEFF]/g, '');

    $.ajax({
        type: "POST",
        url: _url,
        data: JSON.stringify(objArrEmployer),
        contentType: "application/json; charset=utf-8",
        dataType: "json",

        beforeSend: function () {

            $('.page-loader').show();

        },
        success: function (response) {


            $('.page-loader').hide();



            if (response.statusCode == 201 || response.statusCode == 200) {
                Swal.fire({
                    title: 'Success !',
                    text: response.statusCode == 201 ? 'Detail has been successfully submitted!' : response.message,
                    icon: "success"
                })
                getSet7DebtsAndOtherLiabilities()
                PrintFormG()
            }
            else {
                Swal.fire({
                    title: 'Invalid !',
                    text: response.message,
                    icon: "error"
                });
            }
            $('.page-loader').hide();


        },

        error: function (jqXHR, status) {

            $('.page-loader').hide();

            Swal.fire({
                title: 'Invalid !',
                text: jqXHR.responseJSON.title,
                icon: "error"
            });

            switch (jqXHR.status) {

                case "401":
                    window.location.href = unAuthorisedUrl;
                    break;
                case "403":
                    window.location.href = forbiddenUrl;
                    break;
                default:
                    ;
                    break;
            }
        }
    });

}

function getUploadedDocuments() {
    
    
    var url = apiBaseUrlHr + "/api/CandidateJoining/GetJoiningUploadedDocument/" + candidateId;
    url = url.replace(/[\u200B-\u200D\uFEFF]/g, '');
    $.ajax({
        type: "GET",
        url: url,
        //data: '{}',
        contentType: "application/json; charset=utf-8",
        dataType: "json",

        beforeSend: function () {

            $('.page-loader').show();

        },
        success: function (response) {

            SetDataInURL(response.data)




            //candidateOfferDetails.joiningDate

            $('.page-loader').hide();


        },
        error: function (err) {
            //
            //console.log(err);
            //var valuepath = err.responseText;
            //// window.location.href = valuepath;
            //$("#anchorPrintForm1").attr("href", valuepath);
            //// $('#anchorPrintForm1').attr('href', valuepath)
        },

        failure: function (response) {
            // alert(response.d);
            $('.page-loader').hide();
        }
    });
}

function SetDataInURL(data) {
    
    for (let e of data) {
        var id = "#Anchor_" + e.documentName;
        $(id).attr("href", e.filePath);
    }


}
function PrintFormA() {
    
    var url = apiBaseUrlHr + "/api/Admin/PrintFormAOrgSet1?rollNumber=" + rollNumber;
    url = url.replace(/[\u200B-\u200D\uFEFF]/g, '');
    $.ajax({
        type: "GET",
        url: url,
        //data: '{}',
        contentType: "application/json; charset=utf-8",
        dataType: "json",

        beforeSend: function () {

            $('.page-loader').show();

        },
        success: function (response) {
            





            //candidateOfferDetails.joiningDate

            $('.page-loader').hide();


        },
        error: function (err) {
            

            var valuepath = err.responseText;
            // window.location.href = valuepath;
            $("#anchorPrintFormA").attr("href", valuepath);
            // $('#anchorPrintForm1').attr('href', valuepath)
        },

        failure: function (response) {
            // alert(response.d);
            $('.page-loader').hide();
        }
    });
}
function PrintFormB() {
    
    var url = apiBaseUrlHr + "/api/Admin/PrintSetModifiedStep2?rollNumber=" + rollNumber;
    url = url.replace(/[\u200B-\u200D\uFEFF]/g, '');
    $.ajax({
        type: "GET",
        url: url,
        //data: '{}',
        contentType: "application/json; charset=utf-8",
        dataType: "json",

        beforeSend: function () {

            $('.page-loader').show();

        },
        success: function (response) {
            





            //candidateOfferDetails.joiningDate

            $('.page-loader').hide();


        },
        error: function (err) {
            

            var valuepath = err.responseText;
            // window.location.href = valuepath;
            $("#anchorPrintFormB").attr("href", valuepath);
            // $('#anchorPrintForm1').attr('href', valuepath)
        },

        failure: function (response) {
            // alert(response.d);
            $('.page-loader').hide();
        }
    });
}

function PrintFormC() {
    
    var url = apiBaseUrlHr + "/api/Admin/PrintSetModifiedStepC?rollNumber=" + rollNumber;
    url = url.replace(/[\u200B-\u200D\uFEFF]/g, '');
    $.ajax({
        type: "GET",
        url: url,
        //data: '{}',
        contentType: "application/json; charset=utf-8",
        dataType: "json",

        beforeSend: function () {

            $('.page-loader').show();

        },
        success: function (response) {
            





            //candidateOfferDetails.joiningDate

            $('.page-loader').hide();


        },
        error: function (err) {
            

            var valuepath = err.responseText;
            // window.location.href = valuepath;
            $("#anchorPrintFormC").attr("href", valuepath);
            // $('#anchorPrintForm1').attr('href', valuepath)
        },

        failure: function (response) {
            // alert(response.d);
            $('.page-loader').hide();
        }
    });
}

function PrintFormD() {
    
    var url = apiBaseUrlHr + "/api/Admin/PrintSetModifiedStepD?rollNumber=" + rollNumber;
    url = url.replace(/[\u200B-\u200D\uFEFF]/g, '');
    $.ajax({
        type: "GET",
        url: url,
        //data: '{}',
        contentType: "application/json; charset=utf-8",
        dataType: "json",

        beforeSend: function () {

            $('.page-loader').show();

        },
        success: function (response) {
            





            //candidateOfferDetails.joiningDate

            $('.page-loader').hide();


        },
        error: function (err) {
            

            var valuepath = err.responseText;
            // window.location.href = valuepath;
            $("#anchorPrintFormD").attr("href", valuepath);
            // $('#anchorPrintForm1').attr('href', valuepath)
        },

        failure: function (response) {
            // alert(response.d);
            $('.page-loader').hide();
        }
    });
}

function PrintFormE() {
    
    var url = apiBaseUrlHr + "/api/Admin/PrintGRATUITYFORMModifiedStep4?rollNumber=" + rollNumber;
    url = url.replace(/[\u200B-\u200D\uFEFF]/g, '');
    $.ajax({
        type: "GET",
        url: url,
        //data: '{}',
        contentType: "application/json; charset=utf-8",
        dataType: "json",

        beforeSend: function () {

            $('.page-loader').show();

        },
        success: function (response) {
            





            //candidateOfferDetails.joiningDate

            $('.page-loader').hide();


        },
        error: function (err) {
            

            var valuepath = err.responseText;
            // window.location.href = valuepath;
            $("#anchorPrintFormE").attr("href", valuepath);
            // $('#anchorPrintForm1').attr('href', valuepath)
        },

        failure: function (response) {
            // alert(response.d);
            $('.page-loader').hide();
        }
    });
}
function PrintFormG() {
    
    var url = apiBaseUrlHr + "/api/Admin/PrintFormGOrgTobeMergedStep3?rollNumber=" + rollNumber;
    url = url.replace(/[\u200B-\u200D\uFEFF]/g, '');
    $.ajax({
        type: "GET",
        url: url,
        //data: '{}',
        contentType: "application/json; charset=utf-8",
        dataType: "json",

        beforeSend: function () {

            $('.page-loader').show();

        },
        success: function (response) {
            





            //candidateOfferDetails.joiningDate

            $('.page-loader').hide();


        },
        error: function (err) {
            

            var valuepath = err.responseText;
            // window.location.href = valuepath;
            $("#anchorPrintFormG").attr("href", valuepath);
            // $('#anchorPrintForm1').attr('href', valuepath)
        },

        failure: function (response) {
            // alert(response.d);
            $('.page-loader').hide();
        }
    });
}

function PrintFormF() {
    
    var url = apiBaseUrlHr + "/api/Admin/PrintForm_F_OrgTobeMergedStep5?rollNumber=" + rollNumber;


    url = url.replace(/[\u200B-\u200D\uFEFF]/g, '');
    $.ajax({
        type: "GET",
        url: url,
        //data: '{}',
        contentType: "application/json; charset=utf-8",
        dataType: "json",

        beforeSend: function () {

            $('.page-loader').show();

        },
        success: function (response) {
            





            //candidateOfferDetails.joiningDate

            $('.page-loader').hide();


        },
        error: function (err) {
            

            var valuepath = err.responseText;
            // window.location.href = valuepath;
            $("#anchorPrintFormF").attr("href", valuepath);
            // $('#anchorPrintForm1').attr('href', valuepath)
        },

        failure: function (response) {
            // alert(response.d);
            $('.page-loader').hide();
        }
    });
}
function PrintFormH() {
    
    var url = apiBaseUrlHr + "/api/Admin/AttestationForm?rollNumber=" + rollNumber;
    url = url.replace(/[\u200B-\u200D\uFEFF]/g, '');
    $.ajax({
        type: "GET",
        url: url,
        //data: '{}',
        contentType: "application/json; charset=utf-8",
        dataType: "json",

        beforeSend: function () {

            $('.page-loader').show();

        },
        success: function (response) {
            





            //candidateOfferDetails.joiningDate

            $('.page-loader').hide();


        },
        error: function (err) {
            

            var valuepath = err.responseText;
            // window.location.href = valuepath;
            $("#anchorPrintFormH").attr("href", valuepath);
            // $('#anchorPrintForm1').attr('href', valuepath)
        },

        failure: function (response) {
            // alert(response.d);
            $('.page-loader').hide();
        }
    });
}



//function SaveCandidateDeclarationEducation() {
//    
//    let inputdeclareThatTheRequisiteYearsHindi = $('#inputdeclareThatTheRequisiteYearsHindi').val()
//    let inputdeclareThatTheRequisiteExaminationHindi = $('#inputdeclareThatTheRequisiteExaminationHindi').val()
//    let inputdeclareThatTheRequisiteDivisionHindi = parseInt($('#inputdeclareThatTheRequisiteDivisionHindi').val())
//    let inputdeclareThatTheRequisiteAggregateintheYearHindi = $('#inputdeclareThatTheRequisiteAggregateintheYearHindi').val()
//    let inputdeclareThatTheRequisiteFromAggregateintheYearHindi = $('#inputdeclareThatTheRequisiteFromAggregateintheYearHindi').val()


//    let arrayOfObject = []
//    let obj = {
//        id: 0,
//        declareExaminationOrDegree: inputdeclareThatTheRequisiteYearsHindi,
//        declareDivision: inputdeclareThatTheRequisiteExaminationHindi,
//        declarePercentage: inputdeclareThatTheRequisiteDivisionHindi,
//        declareYear: inputdeclareThatTheRequisiteAggregateintheYearHindi,
//        declareBoard_University_Institute: inputdeclareThatTheRequisiteFromAggregateintheYearHindi
//    }

//    arrayOfObject.push(obj)


//    var _url = apiBaseUrlHr + "/api/CandidateJoining/SaveCandidateJoiningDetails/" + candidateId;
//    _url = _url.replace(/[\u200B-\u200D\uFEFF]/g, '');

//    $.ajax({
//        type: "POST",
//        url: _url,
//        data: JSON.stringify(arrayOfObject),
//        contentType: "application/json; charset=utf-8",
//        dataType: "json",
//        //processData: false,
//        //contentType: false,
//        /*headers: { Authorization: ApiToken },*/
//        beforeSend: function () {
//            //var ApiObject = CheckApiCall();
//            //if (ApiObject.isCall == false) {
//            //    window.location.href = mainLoginUrl;
//            //    return false;
//            //}
//            $('.page-loader').show();

//        },
//        success: function (response) {
//            //if (isSaveAll) {
//            //    return;
//            //}
//            //loadAllDataOfJoiningCandidate();
//            $('.page-loader').hide();


//            if (response.statusCode == 201 || response.statusCode == 200) {
//                Swal.fire({
//                    title: 'Success !',
//                    text: response.statusCode == 201 ? 'Detail has been successfully submitted!' : response.message,
//                    icon: "success"
//                })

//            }
//            else {
//                Swal.fire({
//                    title: 'Invalid !',
//                    text: response.message,
//                    icon: "error"
//                });
//            }
//            $('.page-loader').hide();



//        },
//        complete: function () {

//            $('.page-loader').hide();


//        },
//        error: function (jqXHR, status) {

//            $('.page-loader').hide();

//            Swal.fire({
//                title: 'Invalid !',
//                text: jqXHR.responseJSON.title,
//                icon: "error"
//            });

//            switch (jqXHR.status) {

//                case "401":
//                    window.location.href = unAuthorisedUrl;
//                    break;
//                case "403":
//                    window.location.href = forbiddenUrl;
//                    break;
//                default:
//                    ;
//                    break;
//            }
//        }
//    });
//}


function getSet7StatementofLiquidAsset() {
    var url = apiBaseUrlHr + `/api/CandidateJoining/GetStatementofLiquidAssetJoining/${candidateId}`;
    url = url.replace(/[\u200B-\u200D\uFEFF]/g, '');
    $.ajax({
        type: "GET",
        url: url,
        //data: '{}',
        contentType: "application/json; charset=utf-8",
        dataType: "json",

        beforeSend: function () {

            $('.page-loader').show();

        },
        success: function (response) {


            loadSet7StatementofLiquidAsset(response.data)

            $('.page-loader').hide();


        },
        error: function (err) {
            $('.page-loader').hide();
            switch (err.status) {

                case "401":
                    window.location.href = unAuthorisedUrl;
                    break;
                case "403":
                    window.location.href = forbiddenUrl;
                    break;
                default:

                    break;
            }
        },

        failure: function (response) {
            // alert(response.d);
            $('.page-loader').hide();
        }
    });


}

var Set7StatementofLiquidAsset = 0
function loadSet7StatementofLiquidAsset(listDataEmployer) {
    Set7StatementofLiquidAsset = 0;


    var tbodyStatementofliquid = $("#tbodyStatementofliquid");
    tbodyStatementofliquid.empty();

    if (listDataEmployer != null)
        for (let e of listDataEmployer) {

            Set7StatementofLiquidAsset++;
            let row = `<tr class="trSet7StatementofLiquidAsset" id="row11_${Set7StatementofLiquidAsset}">
                                        <td>${Set7StatementofLiquidAsset}.
                                                                    <input type="hidden" id="hiddenSet7StatementofLiquidAsset_${Set7StatementofLiquidAsset}" value=${e.id}></td>
                                        <td><input type="text" class="form-control" id='inputSet3Description_${Set7StatementofLiquidAsset}' value='${e.description == null ? "" : e.description}'></td>
                                        <td>
                                            <label for="inputSet3NameofCompany">Name</label>
                                            <input type="text" class="form-control" id="inputSet3NameofCompany_${Set7StatementofLiquidAsset}" value='${e.statement_of_Liquid_Asset_BankName == null ? "" : e.statement_of_Liquid_Asset_BankName}'>
                                            <div class="h-5"></div>
                                                <label for="inputSet3AddressofCompany">Address</label>
                                            <input type="text" class="form-control" id="inputSet3AddressofCompany_${Set7StatementofLiquidAsset}" value='${e.statement_of_Liquid_Asset_BankAddress == null ? "" : e.statement_of_Liquid_Asset_BankAddress}'>
                                        </td>
                                        <td><input type="text" class="form-control" id="inputSet3Amount_${Set7StatementofLiquidAsset}" value='${e.amount == null ? "" : e.amount}'></td>
                                        <td><input type="text" class="form-control" id="inputSet3relationshipwiththeGovernmentServant_${Set7StatementofLiquidAsset}" value='${e.if_not_in_own_name_state_in_whose_name == null ? "" : e.if_not_in_own_name_state_in_whose_name}'></td>
                                        <td><input type="text" class="form-control" id="inputSet3Annualincomederived_${Set7StatementofLiquidAsset}" value='${e.annual_Income_Delivered == null ? "" : e.annual_Income_Delivered}'></td>
                                        <td><input type="text" class="form-control" id="inputSet3StatementofliquidRemark_${Set7StatementofLiquidAsset}" value='${e.remarks == null ? "" : e.remarks}'></td>

                                    </tr>
                                    `


            tbodyStatementofliquid.append(row);

        }
    ;
    if (Set7StatementofLiquidAsset == 0) {

        Set7StatementofLiquidAsset++;
        let row = `<tr class="trSet7StatementofLiquidAsset" id="row11_${Set7StatementofLiquidAsset}">
                                         <td>${Set7StatementofLiquidAsset}.
                                                                    <input type="hidden" id="hiddenSet7StatementofLiquidAsset_${Set7StatementofLiquidAsset}" value='0'></td>
                                        <td><input type="text" class="form-control" id='inputSet3Description_${Set7StatementofLiquidAsset}'></td>
                                        <td>
                                            <label for="inputSet3NameofCompany">Name</label>
                                            <input type="text" class="form-control" id="inputSet3NameofCompany_${Set7StatementofLiquidAsset}">
                                            <div class="h-5"></div>
                                                <label for="inputSet3AddressofCompany">Address</label>
                                            <input type="text" class="form-control" id="inputSet3AddressofCompany_${Set7StatementofLiquidAsset}">
                                        </td>
                                        <td><input type="text" class="form-control" id="inputSet3Amount_${Set7StatementofLiquidAsset}"></td>
                                        <td><input type="text" class="form-control" id="inputSet3relationshipwiththeGovernmentServant_${Set7StatementofLiquidAsset}"></td>
                                        <td><input type="text" class="form-control" id="inputSet3Annualincomederived_${Set7StatementofLiquidAsset}"></td>
                                        <td><input type="text" class="form-control" id="inputSet3StatementofliquidRemark_${Set7StatementofLiquidAsset}"></td>

                                    </tr>`;
        tbodyStatementofliquid.append(row);
    }




}

function saveloadSet7StatementofLiquidAsset() {


    


    var tbodyStatementofliquid = $("#tbodyStatementofliquid > tr");
    var objArrEmployer = [];
    for (let row of tbodyStatementofliquid) {

        let index = row.id.split('_')[1];
        let idOfTable = $("#hiddenSet7StatementofLiquidAsset_" + index).val();
        let inputSet3Description = $('#inputSet3Description_' + index).val()
        let inputSet3NameofCompany = $('#inputSet3NameofCompany_' + index).val()
        let inputSet3AddressofCompany = $('#inputSet3AddressofCompany_' + index).val()
        let inputSet3Amount = parseInt($('#inputSet3Amount_' + index).val())
        let inputSet3relationshipwiththeGovernmentServant = $('#inputSet3relationshipwiththeGovernmentServant_' + index).val()
        let inputSet3Annualincomederived = parseInt($('#inputSet3Annualincomederived_' + index).val())
        let inputSet3StatementofliquidRemark = $('#inputSet3StatementofliquidRemark_' + index).val()






        let obj = {
            id: idOfTable,
            description: inputSet3Description,
            Statement_of_Liquid_Asset_BankName: inputSet3NameofCompany,
            Statement_of_Liquid_Asset_BankAddress: inputSet3AddressofCompany,
            amount: inputSet3Amount == "" || NaN ? null : inputSet3Amount,
            if_not_in_own_name_state_in_whose_name: inputSet3relationshipwiththeGovernmentServant,
            annual_Income_Delivered: inputSet3Annualincomederived == "" || NaN ? null : inputSet3Annualincomederived,
            remarks: inputSet3StatementofliquidRemark

        }

        objArrEmployer.push(obj);
    }



    var _url = apiBaseUrlHr + "/api/CandidateJoining/SaveStatementofLiquidAssetJoining/" + candidateId;
    _url = _url.replace(/[\u200B-\u200D\uFEFF]/g, '');

    $.ajax({
        type: "POST",
        url: _url,
        data: JSON.stringify(objArrEmployer),
        contentType: "application/json; charset=utf-8",
        dataType: "json",

        beforeSend: function () {

            $('.page-loader').show();

        },
        success: function (response) {


            $('.page-loader').hide();



            if (response.statusCode == 201 || response.statusCode == 200) {
                Swal.fire({
                    title: 'Success !',
                    text: response.statusCode == 201 ? 'Detail has been successfully submitted!' : response.message,
                    icon: "success"
                })
                getSet7StatementofLiquidAsset()
                PrintFormG()
            }
            else {
                Swal.fire({
                    title: 'Invalid !',
                    text: response.message,
                    icon: "error"
                });
            }
            $('.page-loader').hide();


        },

        error: function (jqXHR, status) {

            $('.page-loader').hide();

            Swal.fire({
                title: 'Invalid !',
                text: jqXHR.responseJSON.title,
                icon: "error"
            });

            switch (jqXHR.status) {

                case "401":
                    window.location.href = unAuthorisedUrl;
                    break;
                case "403":
                    window.location.href = forbiddenUrl;
                    break;
                default:
                    ;
                    break;
            }
        }
    });

}

function validationbtnSet3verificationOfSubmitClick() {
    
    let selectSet3verificationOfCharacter = $('#selectSet3verificationOfCharacter').val()
    let inputSet3verificationOfCharacterParents = $('#inputSet3verificationOfCharacterParents').val()
    let selectSet3verificationOfCharacterParents = $('#selectSet3verificationOfCharacterParents').val()
     
    
   

    if (selectSet3verificationOfCharacter == 'Select') {
        toastHr('Please select the Title')
        $('#selectSet3verificationOfCharacter').addClass("error");
        return
    }
    if (selectSet3verificationOfCharacter == '') {
        toastHr('Please select the Title')
        $('#selectSet3verificationOfCharacter').addClass("error");
        return
    }
    if (selectSet3verificationOfCharacter == null) {
        toastHr('Please select the Title')
        $('#selectSet3verificationOfCharacter').addClass("error");
        return
    }

    if (selectSet3verificationOfCharacterParents == 'Select') {
        toastHr('Please select the Title')
        $('#selectSet3verificationOfCharacterParents').addClass("error");
        return
    }
    if (selectSet3verificationOfCharacterParents == '') {
        toastHr('Please select the Title')
        $('#selectSet3verificationOfCharacterParents').addClass("error");
        return
    }
    if (selectSet3verificationOfCharacterParents == null) {
        toastHr('Please select the Title')
        $('#selectSet3verificationOfCharacterParents').addClass("error");
        return
    }

    if (inputSet3verificationOfCharacterParents == "") {
        toastHr('Please enter the guardian name')
        $('#inputSet3verificationOfCharacterParents').addClass("error");
        return
    }
    return true
}
function btnSet3verificationOfSubmitClick() {
    let validX = validationbtnSet3verificationOfSubmitClick()
    if (validX == undefined) {
        return
    }
    let selectSet3verificationOfCharacterParents = $('#selectSet3verificationOfCharacterParents').val()
    let inputSet3verificationOfCharacterParents = $('#inputSet3verificationOfCharacterParents').val()
    let selectSet3verificationOfCharacter = $('#selectSet3verificationOfCharacter').val()



    let formData = {

        GuardianTitle: selectSet3verificationOfCharacterParents,
        GuardianName: inputSet3verificationOfCharacterParents,
        CandidateTitle: selectSet3verificationOfCharacter


    }

    //FillFormDataForPostApi(newParticularsPersonal, formData)
    //formDataNew.append('EmpId', empObject.empId);
    var _url = apiBaseUrlHr + "/api/CandidateJoining/SaveCandidateJoiningDetails/" + candidateId;
    _url = _url.replace(/[\u200B-\u200D\uFEFF]/g, '');

    $.ajax({
        type: "POST",
        url: _url,
        data: JSON.stringify(formData),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        //processData: false,
        //contentType: false,
        /*headers: { Authorization: ApiToken },*/
        beforeSend: function () {
            //var ApiObject = CheckApiCall();
            //if (ApiObject.isCall == false) {
            //    window.location.href = mainLoginUrl;
            //    return false;
            //}
            $('.page-loader').show();

        },
        success: function (response) {

            //loadAllDataOfJoiningCandidate();
            $('.page-loader').hide();



            if (response.statusCode == 201 || response.statusCode == 200) {
                Swal.fire({
                    title: 'Success !',
                    text: response.statusCode == 201 ? 'Detail has been successfully submitted!' : response.message,
                    icon: "success"
                })

                loadAllDataOfJoiningCandidate()
                PrintFormG()
                //window.location.reload()

            }
            else {
                Swal.fire({
                    title: 'Invalid !',
                    text: response.message,
                    icon: "error"
                });
            }
            $('.page-loader').hide();
            $('#myModal').modal('hide');

        },
        complete: function () {
            e.disabled = false;
            $('.page-loader').hide();


        },
        error: function (jqXHR, status) {

            $('.page-loader').hide();

            Swal.fire({
                title: 'Invalid !',
                text: jqXHR.responseJSON,
                icon: "error"
            });

            switch (jqXHR.status) {

                case "401":
                    window.location.href = unAuthorisedUrl;
                    break;
                case "403":
                    window.location.href = forbiddenUrl;
                    break;
                default:
                    ;
                    break;
            }
        }
    });
}

function btnDeclareThatTheRequisiteClick() {
    let inputdeclareThatTheRequisiteYears = $('#inputdeclareThatTheRequisiteYears').val()
    let inputdeclareThatTheRequisiteExamination = $('#inputdeclareThatTheRequisiteExamination').val()
    let inputdeclareThatTheRequisiteDivision = parseFloat($('#inputdeclareThatTheRequisiteDivision').val())
    let inputdeclareThatTheRequisiteAggregateintheYear = $('#inputdeclareThatTheRequisiteAggregateintheYear').val()
    let inputdeclareThatTheRequisiteFromAggregateintheYear = $('#inputdeclareThatTheRequisiteFromAggregateintheYear').val()




    let formData = {

        declareExaminationOrDegree: inputdeclareThatTheRequisiteYears,
        declareDivision: inputdeclareThatTheRequisiteExamination,
        declarePercentage: inputdeclareThatTheRequisiteDivision == "" || NaN ? null : inputdeclareThatTheRequisiteDivision,
        declareYear: inputdeclareThatTheRequisiteAggregateintheYear,
        declareBoard_University_Institute: inputdeclareThatTheRequisiteFromAggregateintheYear



    }

    //FillFormDataForPostApi(newParticularsPersonal, formData)
    //formDataNew.append('EmpId', empObject.empId);
    var _url = apiBaseUrlHr + "/api/CandidateJoining/SaveCandidateJoiningDetails/" + candidateId;
    _url = _url.replace(/[\u200B-\u200D\uFEFF]/g, '');

    $.ajax({
        type: "POST",
        url: _url,
        data: JSON.stringify(formData),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        //processData: false,
        //contentType: false,
        /*headers: { Authorization: ApiToken },*/
        beforeSend: function () {
            //var ApiObject = CheckApiCall();
            //if (ApiObject.isCall == false) {
            //    window.location.href = mainLoginUrl;
            //    return false;
            //}
            $('.page-loader').show();

        },
        success: function (response) {

            //loadAllDataOfJoiningCandidate();
            $('.page-loader').hide();



            if (response.statusCode == 201 || response.statusCode == 200) {
                Swal.fire({
                    title: 'Success !',
                    text: response.statusCode == 201 ? 'Detail has been successfully submitted!' : response.message,
                    icon: "success"
                })
                loadAllDataOfJoiningCandidate()
                PrintFormG()
                //window.location.reload()

            }
            else {
                Swal.fire({
                    title: 'Invalid !',
                    text: response.message,
                    icon: "error"
                });
            }
            $('.page-loader').hide();
            $('#myModal').modal('hide');

        },
        complete: function () {

            $('.page-loader').hide();


        },
        error: function (jqXHR, status) {

            $('.page-loader').hide();

            Swal.fire({
                title: 'Invalid !',
                text: jqXHR.responseJSON.title,
                icon: "error"
            });

            switch (jqXHR.status) {

                case "401":
                    window.location.href = unAuthorisedUrl;
                    break;
                case "403":
                    window.location.href = forbiddenUrl;
                    break;
                default:
                    ;
                    break;
            }
        }
    });
}



function btnDeclaratiOnOfFidelitySubmitClick() {
    let Fidelity_Name = $('#Fidelity_Name').val()





    let formData = {

        declaration_Of_Fidelity_Name: Fidelity_Name,




    }

    //FillFormDataForPostApi(newParticularsPersonal, formData)
    //formDataNew.append('EmpId', empObject.empId);
    var _url = apiBaseUrlHr + "/api/CandidateJoining/SaveCandidateJoiningDetails/" + candidateId;
    _url = _url.replace(/[\u200B-\u200D\uFEFF]/g, '');

    $.ajax({
        type: "POST",
        url: _url,
        data: JSON.stringify(formData),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        //processData: false,
        //contentType: false,
        /*headers: { Authorization: ApiToken },*/
        beforeSend: function () {
            //var ApiObject = CheckApiCall();
            //if (ApiObject.isCall == false) {
            //    window.location.href = mainLoginUrl;
            //    return false;
            //}
            $('.page-loader').show();

        },
        success: function (response) {

            //loadAllDataOfJoiningCandidate();
            $('.page-loader').hide();



            if (response.statusCode == 201 || response.statusCode == 200) {
                Swal.fire({
                    title: 'Success !',
                    text: response.statusCode == 201 ? 'Detail has been successfully submitted!' : response.message,
                    icon: "success"
                })

                //window.location.reload()
                loadAllDataOfJoiningCandidate()
                PrintFormG()

            }
            else {
                Swal.fire({
                    title: 'Invalid !',
                    text: response.message,
                    icon: "error"
                });
            }
            $('.page-loader').hide();
            $('#myModal').modal('hide');

        },
        complete: function () {

            $('.page-loader').hide();


        },
        error: function (jqXHR, status) {

            $('.page-loader').hide();

            Swal.fire({
                title: 'Invalid !',
                text: jqXHR.responseJSON.title,
                icon: "error"
            });

            switch (jqXHR.status) {

                case "401":
                    window.location.href = unAuthorisedUrl;
                    break;
                case "403":
                    window.location.href = forbiddenUrl;
                    break;
                default:
                    ;
                    break;
            }
        }
    });
}

function validationForbtnReturnofAssetsanreturnenclosednamelySubmitClick() {
    let inputReturnofAssetsandotallengthofpast = $('#inputReturnofAssetsandotallengthofpast').val()
    if (validateInput(inputReturnofAssetsandotallengthofpast)) {
        toastHr('Total number of past service contains only number')
        $('#inputReturnofAssetsandotallengthofpast').addClass("error");
        return
    }
    return true
}

function btnReturnofAssetsanreturnenclosednamelySubmitClick() {
    
    let validX = validationForbtnReturnofAssetsanreturnenclosednamelySubmitClick()
    if (validX == undefined) {
        return
    }
    let inputReturnofAssetsandDesignationandplaceofpostingl = $('#inputReturnofAssetsandDesignationandplaceofpostingl').val()
    let inputReturnofAssetsandotallengthofpast = $('#inputReturnofAssetsandotallengthofpast').val()
    let inputReturnofAssetsandCalendaryearimmediatelypreceding = parseInt($('#inputReturnofAssetsandCalendaryearimmediatelypreceding').val())
    let inputReturnofAssetsanreturnenclosednamely = $('#inputReturnofAssetsanreturnenclosednamely').val()

    if (inputReturnofAssetsanreturnenclosednamely != "" && inputReturnofAssetsanreturnenclosednamely != null) {
        inputReturnofAssetsanreturnenclosednamely = formatToIsodateFormate(inputReturnofAssetsanreturnenclosednamely)
    }


    let formData = {
        return_of_Asset_Place_of_Posting: inputReturnofAssetsandDesignationandplaceofpostingl,
        return_of_Asset_Total_length_of_Past_Service: inputReturnofAssetsandotallengthofpast == "" || NaN ? null : inputReturnofAssetsandotallengthofpast,
        liabilities_On_First_Appointment_From_Year: inputReturnofAssetsandCalendaryearimmediatelypreceding == "" || NaN ? null : inputReturnofAssetsandCalendaryearimmediatelypreceding,
        return_of_Asset_Year: inputReturnofAssetsanreturnenclosednamely == "" ? null : inputReturnofAssetsanreturnenclosednamely




    }

    //FillFormDataForPostApi(newParticularsPersonal, formData)
    //formDataNew.append('EmpId', empObject.empId);
    var _url = apiBaseUrlHr + "/api/CandidateJoining/SaveCandidateJoiningDetails/" + candidateId;
    _url = _url.replace(/[\u200B-\u200D\uFEFF]/g, '');

    $.ajax({
        type: "POST",
        url: _url,
        data: JSON.stringify(formData),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        //processData: false,
        //contentType: false,
        /*headers: { Authorization: ApiToken },*/
        beforeSend: function () {
            //var ApiObject = CheckApiCall();
            //if (ApiObject.isCall == false) {
            //    window.location.href = mainLoginUrl;
            //    return false;
            //}
            $('.page-loader').show();

        },
        success: function (response) {

            //loadAllDataOfJoiningCandidate();
            $('.page-loader').hide();



            if (response.statusCode == 201 || response.statusCode == 200) {
                Swal.fire({
                    title: 'Success !',
                    text: response.statusCode == 201 ? 'Detail has been successfully submitted!' : response.message,
                    icon: "success"
                })
                loadAllDataOfJoiningCandidate()
                PrintFormG()
                //window.location.reload()

            }
            else {
                Swal.fire({
                    title: 'Invalid !',
                    text: response.message,
                    icon: "error"
                });
            }
            $('.page-loader').hide();
            $('#myModal').modal('hide');

        },
        complete: function () {

            $('.page-loader').hide();


        },
        error: function (jqXHR, status) {

            $('.page-loader').hide();

            Swal.fire({
                title: 'Invalid !',
                text: jqXHR.responseJSON.title,
                icon: "error"
            });

            switch (jqXHR.status) {

                case "401":
                    window.location.href = unAuthorisedUrl;
                    break;
                case "403":
                    window.location.href = forbiddenUrl;
                    break;
                default:
                    ;
                    break;
            }
        }
    });
}

function buttonJoiningReportFormSubmitClick() {
    
    let inputAppointmentNoHindiJoiningReport = $('#inputAppointmentNoHindiJoiningReport').val()
    let inputAppointmentDateHindiJoiningReport = $('#inputAppointmentDateHindiJoiningReport').val()
    let inputAppointmentNoEngJoiningReport = $('#inputAppointmentNoEngJoiningReport').val()
    let inputAppointmentDateEngJoiningReport = $('#inputAppointmentDateEngJoiningReport').val()
    if (inputAppointmentDateHindiJoiningReport != "" && inputAppointmentDateHindiJoiningReport != null) {
        inputAppointmentDateHindiJoiningReport = formatToIsodateFormate(inputAppointmentDateHindiJoiningReport)
    }
    if (inputAppointmentDateEngJoiningReport != "" && inputAppointmentDateEngJoiningReport != null) {
        inputAppointmentDateEngJoiningReport = formatToIsodateFormate(inputAppointmentDateEngJoiningReport)
    }
    let formData = {};
    if (inputAppointmentNoHindiJoiningReport != null && inputAppointmentNoHindiJoiningReport != "") {

        formData = {

            appointmentLetterNo: inputAppointmentNoHindiJoiningReport == "" ? null : inputAppointmentNoHindiJoiningReport,
            appointmentDate: inputAppointmentDateHindiJoiningReport == "" ? null : inputAppointmentDateHindiJoiningReport



        }
    }
    else if (inputAppointmentNoEngJoiningReport != null && inputAppointmentNoEngJoiningReport != "") {

        formData = {

            appointmentLetterNo: inputAppointmentNoEngJoiningReport == "" ? null : inputAppointmentNoEngJoiningReport,
            appointmentDate: inputAppointmentDateEngJoiningReport == "" ? null : inputAppointmentDateEngJoiningReport



        }
    }

     




    

    //FillFormDataForPostApi(newParticularsPersonal, formData)
    //formDataNew.append('EmpId', empObject.empId);
    var _url = apiBaseUrlHr + "/api/CandidateJoining/SaveCandidateJoiningDetails/" + candidateId;
    _url = _url.replace(/[\u200B-\u200D\uFEFF]/g, '');

    $.ajax({
        type: "POST",
        url: _url,
        data: JSON.stringify(formData),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        //processData: false,
        //contentType: false,
        /*headers: { Authorization: ApiToken },*/
        beforeSend: function () {
            //var ApiObject = CheckApiCall();
            //if (ApiObject.isCall == false) {
            //    window.location.href = mainLoginUrl;
            //    return false;
            //}
            $('.page-loader').show();

        },
        success: function (response) {

            //loadAllDataOfJoiningCandidate();
            $('.page-loader').hide();



            if (response.statusCode == 201 || response.statusCode == 200) {
                Swal.fire({
                    title: 'Success !',
                    text: response.statusCode == 201 ? 'Detail has been successfully submitted!' : response.message,
                    icon: "success"
                })

                loadAllDataOfJoiningCandidate()
                PrintFormB()

            }
            else {
                Swal.fire({
                    title: 'Invalid !',
                    text: response.message,
                    icon: "error"
                });
            }
            $('.page-loader').hide();
            $('#myModal').modal('hide');

        },
        complete: function () {

            $('.page-loader').hide();


        },
        error: function (jqXHR, status) {

            $('.page-loader').hide();

            Swal.fire({
                title: 'Invalid !',
                text: jqXHR.responseJSON.title,
                icon: "error"
            });

            switch (jqXHR.status) {

                case "401":
                    window.location.href = unAuthorisedUrl;
                    break;
                case "403":
                    window.location.href = forbiddenUrl;
                    break;
                default:
                    ;
                    break;
            }
        }
    });
}







// form H

      



function getEmploymentDetailsJoiningDataFromApi() {
    
    var url = apiBaseUrlHr + `/api/CandidateJoiningOther/GetEmploymentDetailsJoining?CandidateId=${candidateId}`;
    url = url.replace(/[\u200B-\u200D\uFEFF]/g, '');
    $.ajax({
        type: "GET",
        url: url,
        //data: '{}',
        contentType: "application/json; charset=utf-8",
        dataType: "json",

        beforeSend: function () {

            $('.page-loader').show();

        },
        success: function (response) {
            console.log(response.data)

            loadEmploymentDetailsJoining(response.data)

            $('.page-loader').hide();


        },
        error: function (err) {
            $('.page-loader').hide();
            switch (err.status) {

                case "401":
                    window.location.href = unAuthorisedUrl;
                    break;
                case "403":
                    window.location.href = forbiddenUrl;
                    break;
                default:

                    break;
            }
        },

        failure: function (response) {
            // alert(response.d);
            $('.page-loader').hide();
        }
    });


}

var countEmploymentDetailsJoining = 0;
function loadEmploymentDetailsJoining(listNominationForGratuity) {
    
    countEmploymentDetailsJoining = 0;


    var tbodyAppointmentUnderTheCentral = $("#tbodyAppointmentUnderTheCentral");
    tbodyAppointmentUnderTheCentral.empty();
    if (listNominationForGratuity !== null)
        for (let e of listNominationForGratuity) {

            countEmploymentDetailsJoining++;
            let row = ` <tr class='trofcountEmploymentDetailsJoining'  id="row15_${countEmploymentDetailsJoining}">

 <td width="72" valign="top"> ${countEmploymentDetailsJoining}
                                                                    <input type="hidden" id="hiddencountEmploymentDetailsJoining_${countEmploymentDetailsJoining}" value=${e.id} >  </td>
                                         <td width="68" valign="top"><input type="text" placeholder='select date' class='datepickerr'  name="name"   id="inputAppointmentUnderTheCentralForm_${countEmploymentDetailsJoining}" value='${e.joinDate==null?"":formatDate_dd_mm_yyyy_New_Formate(new Date(Date.parse(e.joinDate)))}' ></td>
                                                    <td width="74" valign="top"><input type="text" placeholder='select date' class='datepickerr'  name="name"   id="inputAppointmentUnderTheCentralTo_${countEmploymentDetailsJoining}" value='${e.endDate == null ? "" : formatDate_dd_mm_yyyy_New_Formate(new Date(Date.parse(e.endDate)))}' ></td>
                                                    <td width="198" valign="top"> <input type="text" name="name"   id="inputAppointmentUnderTheCentralnatureofemployment_${countEmploymentDetailsJoining}" value='${e.designation}' > </td>
                                                    <td width="170" valign="top"><input type="text" name="name"   id="inputAppointmentUnderTheCentralFullnameandaddress_${countEmploymentDetailsJoining}" value='${e.name}' ></td>
                                                    <td width="161" valign="top"><input type="text" name="name"   id="inputAppointmentUnderTheCentralReasonsofleavingprevious_${countEmploymentDetailsJoining}" value='${e.resionOfLeaving}' ></td>


</tr>

`


            tbodyAppointmentUnderTheCentral.append(row);

        }
   
    if (countEmploymentDetailsJoining == 0) {

        countEmploymentDetailsJoining++;
        let row = `  <tr class='trofcountEmploymentDetailsJoining'  id="row15_${countEmploymentDetailsJoining}">

 <td width="72" valign="top"> ${countEmploymentDetailsJoining}.
                                                                    <input type="hidden" id="hiddencountEmploymentDetailsJoining_${countEmploymentDetailsJoining}" value='0' >  </td>
                                                 <td width="68" valign="top"><input type="text" placeholder='select date' class='datepickerr'  name="name"   id="inputAppointmentUnderTheCentralForm_${countEmploymentDetailsJoining}" ></td>
                                                    <td width="74" valign="top"><input type="text" placeholder='select date' class='datepickerr'  name="name"   id="inputAppointmentUnderTheCentralTo_${countEmploymentDetailsJoining}" /></td>
                                                    <td width="198" valign="top"> <input type="text" name="name"   id="inputAppointmentUnderTheCentralnatureofemployment_${countEmploymentDetailsJoining}" > </td>
                                                    <td width="170" valign="top"><input type="text" name="name"   id="inputAppointmentUnderTheCentralFullnameandaddress_${countEmploymentDetailsJoining}" ></td>
                                                    <td width="161" valign="top"><input type="text" name="name"  id="inputAppointmentUnderTheCentralReasonsofleavingprevious_${countEmploymentDetailsJoining}" ></td>



</tr>`;
        tbodyAppointmentUnderTheCentral.append(row);
    }




}







function saveAppointmentUnderCenterOrStateDetails() {
    

    var objArrEmployer = [];
    var tbodyAppointmentUnderTheCentral = $("#tbodyAppointmentUnderTheCentral > tr");
    for (let row of tbodyAppointmentUnderTheCentral) {

        let index = row.id.split('_')[1];
        let idOfTable = $("#hiddencountEmploymentDetailsJoining_" + index).val();
        let inputAppointmentUnderTheCentralForm = $("#inputAppointmentUnderTheCentralForm_" + index).val();
        let inputAppointmentUnderTheCentralTo = $("#inputAppointmentUnderTheCentralTo_" + index).val();
        let inputAppointmentUnderTheCentralnatureofemployment = $("#inputAppointmentUnderTheCentralnatureofemployment_" + index).val();
        let inputAppointmentUnderTheCentralFullnameandaddress = $("#inputAppointmentUnderTheCentralFullnameandaddress_" + index).val();
        let inputAppointmentUnderTheCentralReasonsofleavingprevious = $("#inputAppointmentUnderTheCentralReasonsofleavingprevious_" + index).val();

        if (inputAppointmentUnderTheCentralForm != "" && inputAppointmentUnderTheCentralForm != null) {
            inputAppointmentUnderTheCentralForm = formatToIsodateFormate(inputAppointmentUnderTheCentralForm)
        }
         
        if (inputAppointmentUnderTheCentralTo != "" && inputAppointmentUnderTheCentralTo != null) {
            inputAppointmentUnderTheCentralTo = formatToIsodateFormate(inputAppointmentUnderTheCentralTo)
        }

        let obj = {
            id: idOfTable,
            joinDate: inputAppointmentUnderTheCentralForm == "" ? null : inputAppointmentUnderTheCentralForm,
            endDate: inputAppointmentUnderTheCentralTo == "" ? null : inputAppointmentUnderTheCentralTo,
            designation: inputAppointmentUnderTheCentralnatureofemployment,
            name: inputAppointmentUnderTheCentralFullnameandaddress,
            resionOfLeaving: inputAppointmentUnderTheCentralReasonsofleavingprevious
        }

        objArrEmployer.push(obj);
    }
    ;
    var _url = apiBaseUrlHr + "/api/CandidateJoiningOther/SaveEmploymentDetailsJoining/" + candidateId;
    _url = _url.replace(/[\u200B-\u200D\uFEFF]/g, '');

    $.ajax({
        type: "POST",
        url: _url,
        data: JSON.stringify(objArrEmployer),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        //processData: false,
        //contentType: false,
        /*headers: { Authorization: ApiToken },*/
        beforeSend: function () {
            //var ApiObject = CheckApiCall();
            //if (ApiObject.isCall == false) {
            //    window.location.href = mainLoginUrl;
            //    return false;
            //}
            $('.page-loader').show();

        },
        success: function (response) {

            //loadAllDataOfJoiningCandidate();
            $('.page-loader').hide();


            if (response.statusCode == 201 || response.statusCode == 200) {
                Swal.fire({
                    title: 'Success !',
                    text: response.statusCode == 201 ? 'Employer Details updated Successfully' : response.message,
                    icon: "success"
                })

                getEmploymentDetailsJoiningDataFromApi()
                PrintFormH()
            }

            $('.page-loader').hide();


        },
        complete: function () {

            $('.page-loader').hide();

        },
        error: function (jqXHR, status) {

            $('.page-loader').hide();

            Swal.fire({
                title: 'Invalid !',
                text: jqXHR.responseJSON.title,
                icon: "error"
            });

            switch (jqXHR.status) {

                case "401":
                    window.location.href = unAuthorisedUrl;
                    break;
                case "403":
                    window.location.href = forbiddenUrl;
                    break;
                default:
                    ;
                    break;
            }
        }
    });
}









function getEducationDetailsJoiningDataFromApi() {
    
    var url = apiBaseUrlHr + `/api/CandidateJoiningOther/GetEducationDetailsJoining?CandidateId=${candidateId}`;
    url = url.replace(/[\u200B-\u200D\uFEFF]/g, '');
    $.ajax({
        type: "GET",
        url: url,
        //data: '{}',
        contentType: "application/json; charset=utf-8",
        dataType: "json",

        beforeSend: function () {

            $('.page-loader').show();

        },
        success: function (response) {
            console.log(response.data)

            loadEducationDetailsJoining(response.data)

            $('.page-loader').hide();


        },
        error: function (err) {
            $('.page-loader').hide();
            switch (err.status) {

                case "401":
                    window.location.href = unAuthorisedUrl;
                    break;
                case "403":
                    window.location.href = forbiddenUrl;
                    break;
                default:

                    break;
            }
        },

        failure: function (response) {
            // alert(response.d);
            $('.page-loader').hide();
        }
    });


}

var countEducationDetailsJoining = 0;
function loadEducationDetailsJoining(listNominationForGratuity) {
    
    countEducationDetailsJoining = 0;


    var tbodyEducationalqualificationAddMore = $("#tbodyEducationalqualificationAddMore");
    tbodyEducationalqualificationAddMore.empty();
    if (listNominationForGratuity !== null)
        for (let e of listNominationForGratuity) {

            countEducationDetailsJoining++;
            let row = ` <tr class='trofcountEducationDetailsJoining'  id="row16_${countEducationDetailsJoining}">

 <td width="72" valign="top"> ${countEducationDetailsJoining}
                                                                    <input type="hidden" id="hiddencountEducationDetailsJoining_${countEducationDetailsJoining}" value=${e.id} >  </td>
                                            

                                                     <td width="274" valign="top"> <input type="text" name=""   style="display:inline;" id="inputEducationalqualificationNameofSchool_${countEducationDetailsJoining}" value='${e.nameOfSchool}'></td>
                                                    <td width="132" valign="top"><input type="text" placeholder='select date' class='datepickerr'  name=""   style="display:inline;" id="inputEducationalqualificationNameofDateofentering_${countEducationDetailsJoining}" value='${e.dateOfEntering ==null?"":formatDate_dd_mm_yyyy_New_Formate(new Date(Date.parse(e.dateOfEntering)))}'></td>
                                                    <td width="132" valign="top"><input type="text" placeholder='select date' class='datepickerr' name=""   style="display:inline;" id="inputEducationalqualificationNameofDateofleaving_${countEducationDetailsJoining}" value='${e.dateOfLeaving == null ? "" : formatDate_dd_mm_yyyy_New_Formate(new Date(Date.parse(e.dateOfLeaving)))}'></td>
                                                    <td width="132" valign="top"><input type="text" name=""   style="display:inline;" id="inputEducationalqualificationNameofExamination_${countEducationDetailsJoining}" value='${e.examination}'></td>

</tr>

`


            tbodyEducationalqualificationAddMore.append(row);

        }

    if (countEducationDetailsJoining == 0) {

        countEducationDetailsJoining++;
        let row = ` <tr class='trofcountEducationDetailsJoining'  id="row16_${countEducationDetailsJoining}">

 <td width="72" valign="top"> ${countEducationDetailsJoining}
                                                                    <input type="hidden" id="hiddencountEducationDetailsJoining_${countEducationDetailsJoining}" value='0'>  </td>
                                            

                                                     <td width="274" valign="top"> <input type="text" name=""   style="display:inline;" id="inputEducationalqualificationNameofSchool_${countEducationDetailsJoining}"></td>
                                                    <td width="132" valign="top"><input type="text" placeholder='select date' class='datepickerr' name=""   style="display:inline;" id="inputEducationalqualificationNameofDateofentering_${countEducationDetailsJoining}"></td>
                                                    <td width="132" valign="top"><input type="text" placeholder='select date' class='datepickerr' name=""   style="display:inline;" id="inputEducationalqualificationNameofDateofleaving_${countEducationDetailsJoining}"></td>
                                                    <td width="132" valign="top"><input type="text" name=""   style="display:inline;" id="inputEducationalqualificationNameofExamination_${countEducationDetailsJoining}"></td>

</tr>`;
        tbodyEducationalqualificationAddMore.append(row);
    }




}







function saveSchoolOrCollegeDetails() {
    

    var objArrEmployer = [];
    var tbodyEducationalqualificationAddMore = $("#tbodyEducationalqualificationAddMore > tr");
    for (let row of tbodyEducationalqualificationAddMore) {

        let index = row.id.split('_')[1];
        let idOfTable = $("#hiddencountEducationDetailsJoining_" + index).val();
        let inputEducationalqualificationNameofSchool = $("#inputEducationalqualificationNameofSchool_" + index).val();
        let inputEducationalqualificationNameofDateofentering = $("#inputEducationalqualificationNameofDateofentering_" + index).val();
        let inputEducationalqualificationNameofDateofleaving = $("#inputEducationalqualificationNameofDateofleaving_" + index).val();
        let inputEducationalqualificationNameofExamination = $("#inputEducationalqualificationNameofExamination_" + index).val();
         
        if (inputEducationalqualificationNameofDateofentering != "" && inputEducationalqualificationNameofDateofentering != null) {
            inputEducationalqualificationNameofDateofentering = formatToIsodateFormate(inputEducationalqualificationNameofDateofentering)
        }
        if (inputEducationalqualificationNameofDateofleaving != "" && inputEducationalqualificationNameofDateofleaving != null) {
            inputEducationalqualificationNameofDateofleaving = formatToIsodateFormate(inputEducationalqualificationNameofDateofleaving)
        }

        let obj = {
            id: idOfTable,
            nameOfSchool: inputEducationalqualificationNameofSchool,
            dateOfEntering: inputEducationalqualificationNameofDateofentering == "" ? null : inputEducationalqualificationNameofDateofentering,
            dateOfLeaving: inputEducationalqualificationNameofDateofleaving == "" ? null : inputEducationalqualificationNameofDateofleaving,
            examination: inputEducationalqualificationNameofExamination
        }

        objArrEmployer.push(obj);
    }
    ;
    var _url = apiBaseUrlHr + "/api/CandidateJoiningOther/SaveEducationDetailsJoining/" + candidateId;
    _url = _url.replace(/[\u200B-\u200D\uFEFF]/g, '');

    $.ajax({
        type: "POST",
        url: _url,
        data: JSON.stringify(objArrEmployer),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        //processData: false,
        //contentType: false,
        /*headers: { Authorization: ApiToken },*/
        beforeSend: function () {
            //var ApiObject = CheckApiCall();
            //if (ApiObject.isCall == false) {
            //    window.location.href = mainLoginUrl;
            //    return false;
            //}
            $('.page-loader').show();

        },
        success: function (response) {

            //loadAllDataOfJoiningCandidate();
            $('.page-loader').hide();


            if (response.statusCode == 201 || response.statusCode == 200) {
                Swal.fire({
                    title: 'Success !',
                    text: response.statusCode == 201 ? 'Employer Details updated Successfully' : response.message,
                    icon: "success"
                })

                getEducationDetailsJoiningDataFromApi()
                PrintFormH()
            }

            $('.page-loader').hide();


        },
        complete: function () {

            $('.page-loader').hide();

        },
        error: function (jqXHR, status) {

            $('.page-loader').hide();

            Swal.fire({
                title: 'Invalid !',
                text: jqXHR.responseJSON.title,
                icon: "error"
            });

            switch (jqXHR.status) {

                case "401":
                    window.location.href = unAuthorisedUrl;
                    break;
                case "403":
                    window.location.href = forbiddenUrl;
                    break;
                default:
                    ;
                    break;
            }
        }
    });
}









function getFamilyForeignDetailsJoiningDataFromApi() {
    
    var url = apiBaseUrlHr + `/api/CandidateJoiningOther/GetFamilyForeignDetailsJoining?CandidateId=${candidateId}`;
    url = url.replace(/[\u200B-\u200D\uFEFF]/g, '');
    $.ajax({
        type: "GET",
        url: url,
        //data: '{}',
        contentType: "application/json; charset=utf-8",
        dataType: "json",

        beforeSend: function () {

            $('.page-loader').show();

        },
        success: function (response) {
            console.log(response.data)

            loadFamilyForeignDetailsJoining(response.data)

            $('.page-loader').hide();


        },
        error: function (err) {
            $('.page-loader').hide();
            switch (err.status) {

                case "401":
                    window.location.href = unAuthorisedUrl;
                    break;
                case "403":
                    window.location.href = forbiddenUrl;
                    break;
                default:

                    break;
            }
        },

        failure: function (response) {
            // alert(response.d);
            $('.page-loader').hide();
        }
    });


}

var countFamilyForeignDetailsJoining = 0;
function loadFamilyForeignDetailsJoining(listNominationForGratuity) {
    
    countFamilyForeignDetailsJoining = 0;


    var tbodyInformationTobeFurnished = $("#tbodyInformationTobeFurnished");
    tbodyInformationTobeFurnished.empty();
    if (listNominationForGratuity !== null)
        for (let e of listNominationForGratuity) {

            countFamilyForeignDetailsJoining++;
            let row = ` <tr class='trofcountFamilyForeignDetailsJoining'  id="row17_${countFamilyForeignDetailsJoining}">

 <td width="72" valign="top"> ${countFamilyForeignDetailsJoining}
                                                                    <input type="hidden" id="hiddencountFamilyForeignDetailsJoining_${countFamilyForeignDetailsJoining}" value=${e.id} >  </td>
                                            

                                                  <td width="150" valign="top"><input type="text" name="name"   style="display:inline;" id="inputInformationtobefurnishedName_${countFamilyForeignDetailsJoining}" value='${e.relation_Name}'></td>
                                                <td width="135" valign="top"><input type="text" name="name"  style="display:inline;" id="inputInformationtobefurnishedNationality_${countFamilyForeignDetailsJoining}" value='${e.nationality}'></td>
                                                <td width="133" valign="top"><input type="text" name="name"  style="display:inline;" id="inputInformationtobefurnishedPlaceofbirth_${countFamilyForeignDetailsJoining}" value='${e.placeOfBirth}'></td>
                                                <td width="136" valign="top"><input type="text" name="name"  style="display:inline;" id="inputInformationtobefurnishedCountryinwhich_${countFamilyForeignDetailsJoining}" value='${e.countryAddress}'></td>
                                                <td width="148" valign="top"><input type="text" placeholder='select date' name="name" class='datepickerr'  style="display:inline;" id="inputInformationtobefurnishedDatefromwhich_${countFamilyForeignDetailsJoining}" value='${e.dateOfStudy ==null?"":formatDate_dd_mm_yyyy_New_Formate(new Date(Date.parse(e.dateOfStudy)))}'></td>

</tr>

`


            tbodyInformationTobeFurnished.append(row);

        }

    if (countFamilyForeignDetailsJoining == 0) {

        countFamilyForeignDetailsJoining++;
      let row = ` <tr class='trofcountFamilyForeignDetailsJoining'  id="row17_${countFamilyForeignDetailsJoining}">

 <td width="72" valign="top"> ${countFamilyForeignDetailsJoining}
                                                                    <input type="hidden" id="hiddencountFamilyForeignDetailsJoining_${countFamilyForeignDetailsJoining}" value='0' >  </td>
                                            

                                                  <td width="150" valign="top"><input type="text" name="name"   style="display:inline;" id="inputInformationtobefurnishedName_${countFamilyForeignDetailsJoining}"></td>
                                                <td width="135" valign="top"><input type="text" name="name"  style="display:inline;" id="inputInformationtobefurnishedNationality_${countFamilyForeignDetailsJoining}"></td>
                                                <td width="133" valign="top"><input type="text" name="name"  style="display:inline;" id="inputInformationtobefurnishedPlaceofbirth_${countFamilyForeignDetailsJoining}"></td>
                                                <td width="136" valign="top"><input type="text" name="name"  style="display:inline;" id="inputInformationtobefurnishedCountryinwhich_${countFamilyForeignDetailsJoining}"></td>
                                                <td width="148" valign="top"><input type="text" placeholder='select date' name="name" class='datepickerr'  style="display:inline;" id="inputInformationtobefurnishedDatefromwhich_${countFamilyForeignDetailsJoining}"></td>

</tr>

`


            tbodyInformationTobeFurnished.append(row);
    }




}







function saveNationalityDetails() {
    

    var objArrEmployer = [];
    var tbodyInformationTobeFurnished = $("#tbodyInformationTobeFurnished > tr");
    for (let row of tbodyInformationTobeFurnished) {

        let index = row.id.split('_')[1];
        let idOfTable = $("#hiddencountFamilyForeignDetailsJoining_" + index).val();
        let inputInformationtobefurnishedName = $("#inputInformationtobefurnishedName_" + index).val();
        let inputInformationtobefurnishedNationality = $("#inputInformationtobefurnishedNationality_" + index).val();
        let inputInformationtobefurnishedPlaceofbirth = $("#inputInformationtobefurnishedPlaceofbirth_" + index).val();
        let inputInformationtobefurnishedCountryinwhich = $("#inputInformationtobefurnishedCountryinwhich_" + index).val();
        let inputInformationtobefurnishedDatefromwhich = $("#inputInformationtobefurnishedDatefromwhich_" + index).val();

        if (inputInformationtobefurnishedDatefromwhich != "" && inputInformationtobefurnishedDatefromwhich != null) {
            inputInformationtobefurnishedDatefromwhich = formatToIsodateFormate(inputInformationtobefurnishedDatefromwhich)
        }


        let obj = {
            id: idOfTable,
            relation_Name: inputInformationtobefurnishedName,
            nationality: inputInformationtobefurnishedNationality,
            placeOfBirth: inputInformationtobefurnishedPlaceofbirth,
            countryAddress: inputInformationtobefurnishedCountryinwhich,
            dateOfStudy: inputInformationtobefurnishedDatefromwhich == "" ? null : inputInformationtobefurnishedDatefromwhich
        }

        objArrEmployer.push(obj);
    }
    ;
    var _url = apiBaseUrlHr + "/api/CandidateJoiningOther/SaveFamilyForeignDetailsJoining/" + candidateId;
    _url = _url.replace(/[\u200B-\u200D\uFEFF]/g, '');

    $.ajax({
        type: "POST",
        url: _url,
        data: JSON.stringify(objArrEmployer),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        //processData: false,
        //contentType: false,
        /*headers: { Authorization: ApiToken },*/
        beforeSend: function () {
            //var ApiObject = CheckApiCall();
            //if (ApiObject.isCall == false) {
            //    window.location.href = mainLoginUrl;
            //    return false;
            //}
            $('.page-loader').show();

        },
        success: function (response) {

            //loadAllDataOfJoiningCandidate();
            $('.page-loader').hide();


            if (response.statusCode == 201 || response.statusCode == 200) {
                Swal.fire({
                    title: 'Success !',
                    text: response.statusCode == 201 ? 'Employer Details updated Successfully' : response.message,
                    icon: "success"
                })

                getFamilyForeignDetailsJoiningDataFromApi()
                PrintFormH()
            }

            $('.page-loader').hide();


        },
        complete: function () {

            $('.page-loader').hide();

        },
        error: function (jqXHR, status) {

            $('.page-loader').hide();

            Swal.fire({
                title: 'Invalid !',
                text: jqXHR.responseJSON.title,
                icon: "error"
            });

            switch (jqXHR.status) {

                case "401":
                    window.location.href = unAuthorisedUrl;
                    break;
                case "403":
                    window.location.href = forbiddenUrl;
                    break;
                default:
                    ;
                    break;
            }
        }
    });
}






function getGetFamilyDetailsJoiningDataFromApi() {
    
    var url = apiBaseUrlHr + `/api/CandidateJoiningOther/GetFamilyDetailsJoining?CandidateId=${candidateId}`;
    url = url.replace(/[\u200B-\u200D\uFEFF]/g, '');
    $.ajax({
        type: "GET",
        url: url,
        //data: '{}',
        contentType: "application/json; charset=utf-8",
        dataType: "json",

        beforeSend: function () {

            $('.page-loader').show();

        },
        success: function (response) {
            console.log(response.data)

            loadGetFamilyDetailsJoining(response.data)

            $('.page-loader').hide();


        },
        error: function (err) {
            $('.page-loader').hide();
            switch (err.status) {

                case "401":
                    window.location.href = unAuthorisedUrl;
                    break;
                case "403":
                    window.location.href = forbiddenUrl;
                    break;
                default:

                    break;
            }
        },

        failure: function (response) {
            // alert(response.d);
            $('.page-loader').hide();
        }
    });


}

var countGetFamilyDetailsJoining = 0;
function loadGetFamilyDetailsJoining(listNominationForGratuity) {
    
    countGetFamilyDetailsJoining = 0;


    var tbodySet6RelationName = $("#tbodySet6RelationName");
    tbodySet6RelationName.empty();
    if (listNominationForGratuity !== null)
        for (let e of listNominationForGratuity) {

            let familyRelation

            if (e.relation =='Father') {
                familyRelation = `<option value='Select'>Select</option>
                <option selected value='Father'>पिता  / Father </option>
                                                      <option value='Mother'>माता / Mother</option>
                                                        <option value='Wife'>पत्‍नी / Wife</option>

                                                        <option value='Brother'>भाई / Brother</option>
                                                        <option value='Sister'>बहन / Sister</option>
                                                        <option value='Daughter'>बेटी / Daughter</option>
                                                        <option value='Son'>बेटा / Son</option>`

            } else if (e.relation == 'Mother') {
                familyRelation = `<option value='Select'>Select</option>
                <option value='Father'>पिता  / Father </option>
                                                      <option selected value='Mother'>माता / Mother</option>
                                                        <option value='Wife'>पत्‍नी / Wife</option>

                                                        <option value='Brother'>भाई / Brother</option>
                                                        <option value='Sister'>बहन / Sister</option>
                                                        <option value='Daughter'>बेटी / Daughter</option>
                                                        <option value='Son'>बेटा / Son</option>`
            }
            else if (e.relation == 'Wife') {
                familyRelation = `<option value='Select'>Select</option>
                <option value='Father'>पिता  / Father </option>
                                                      <option  value='Mother'>माता / Mother</option>
                                                        <option selected value='Wife'>पत्‍नी / Wife</option>

                                                        <option value='Brother'>भाई / Brother</option>
                                                        <option value='Sister'>बहन / Sister</option>
                                                        <option value='Daughter'>बेटी / Daughter</option>
                                                        <option value='Son'>बेटा / Son</option>`
            }
            else if (e.relation == 'Brother') {
                familyRelation = `<option value='Select'>Select</option>
                <option value='Father'>पिता  / Father </option>
                                                      <option  value='Mother'>माता / Mother</option>
                                                        <option  value='Wife'>पत्‍नी / Wife</option>

                                                        <option selected value='Brother'>भाई / Brother</option>
                                                        <option value='Sister'>बहन / Sister</option>
                                                        <option value='Daughter'>बेटी / Daughter</option>
                                                        <option value='Son'>बेटा / Son</option>`
            }
            else if (e.relation == 'Sister') {
                familyRelation = `<option value='Select'>Select</option>
                <option value='Father'>पिता  / Father </option>
                                                      <option  value='Mother'>माता / Mother</option>
                                                        <option  value='Wife'>पत्‍नी / Wife</option>

                                                        <option  value='Brother'>भाई / Brother</option>
                                                        <option selected value='Sister'>बहन / Sister</option>
                                                        <option value='Daughter'>बेटी / Daughter</option>
                                                        <option value='Son'>बेटा / Son</option>`
            }
            else if (e.relation == 'Daughter') {
                familyRelation = `<option value='Select'>Select</option>
                <option value='Father'>पिता  / Father </option>
                                                      <option  value='Mother'>माता / Mother</option>
                                                        <option  value='Wife'>पत्‍नी / Wife</option>

                                                        <option  value='Brother'>भाई / Brother</option>
                                                        <option  value='Sister'>बहन / Sister</option>
                                                        <option selected value='Daughter'>बेटी / Daughter</option>
                                                        <option value='Son'>बेटा / Son</option>`
            }
            else if (e.relation == 'Son') {
                familyRelation = `<option value='Select'>Select</option>
                <option value='Father'>पिता  / Father </option>
                                                      <option  value='Mother'>माता / Mother</option>
                                                        <option  value='Wife'>पत्‍नी / Wife</option>

                                                        <option  value='Brother'>भाई / Brother</option>
                                                        <option  value='Sister'>बहन / Sister</option>
                                                        <option  value='Daughter'>बेटी / Daughter</option>
                                                        <option selected value='Son'>बेटा / Son</option>`
            }
            else {
                familyRelation = `<option selected value='Select'>Select</option>
                <option value='Father'>पिता  / Father </option>
                                                      <option  value='Mother'>माता / Mother</option>
                                                        <option  value='Wife'>पत्‍नी / Wife</option>

                                                        <option  value='Brother'>भाई / Brother</option>
                                                        <option  value='Sister'>बहन / Sister</option>
                                                        <option  value='Daughter'>बेटी / Daughter</option>
                                                        <option  value='Son'>बेटा / Son</option>`
            }
            countGetFamilyDetailsJoining++;
            let row = ` <tr class='trofcountGetFamilyDetailsJoining'  id="row18_${countGetFamilyDetailsJoining}">

 <td width="72" valign="top"> ${countGetFamilyDetailsJoining}
                                                                    <input type="hidden" id="hiddencountGetFamilyDetailsJoining_${countGetFamilyDetailsJoining}" value=${e.id} >  </td>
                                            

                                                  <td>
                                                 
                                                    <select id="inputSet6RelationNameSelectFamilyMember_${countGetFamilyDetailsJoining}">
                                                    ${familyRelation}
                                                    </select>
                                                </td>
                                                <td>
                                                    <ol> <li><input type="text" name="name" id="inputSet6RelationName_${countGetFamilyDetailsJoining}" value='${e.nameOfRelationship}'   style="display:inline;"></li></ol>
                                                </td>
                                                <td>
                                                    <ol> <li><input type="text" name="name" id="inputSet6RelationNameMotherNationality_${countGetFamilyDetailsJoining}" value='${e.nationality}'  style="display:inline;"></li></ol>
                                                </td>
                                                <td>
                                                    <ol> <li><input type="text" name="name" id="inputSet6RelationNameMotherPlaceofBirth_${countGetFamilyDetailsJoining}" value='${e.placeOfBirth}'   style="display:inline;"></li></ol>
                                                </td>
                                                <td>
                                                    <ol> <li><input type="text" name="name" id="inputSet6RelationNameMotherOccupation_${countGetFamilyDetailsJoining}" value='${e.occupation}'  style="display:inline;"></li></ol>
                                                </td>
                                                <td>
                                                    <ol> <li><input type="text" name="name" id="inputSet6RelationNameMotherPostal_${countGetFamilyDetailsJoining}" value='${e.presentAddress}'  style="display:inline;"></li></ol>
                                                </td>
                                                <td>
                                                    <ol> <li><input type="text" name="name" id="inputSet6RelationNameMotherPermanentHomeaddress_${countGetFamilyDetailsJoining}" value='${e.permanentAddress}'  style="display:inline;"></li></ol>
                                                </td>
</tr>

`


            tbodySet6RelationName.append(row);

        }

    if (countGetFamilyDetailsJoining == 0) {

        countGetFamilyDetailsJoining++;
        let row = ` <tr class='trofcountGetFamilyDetailsJoining'  id="row18_${countGetFamilyDetailsJoining}">

 <td width="72" valign="top"> ${countGetFamilyDetailsJoining}
                                                                    <input type="hidden" id="hiddencountGetFamilyDetailsJoining_${countGetFamilyDetailsJoining}" value='0'>  </td>
                                            

                                                  <td>
                                                 
                                                    <select id="inputSet6RelationNameSelectFamilyMember_${countGetFamilyDetailsJoining}">
                                                    <option value='Select'>Select</option>
                                                        <option value='Father'>पिता  / Father </option>
                                                      <option value='Mother'>माता / Mother</option>
                                                        <option value='Wife'>पत्‍नी / Wife</option>

                                                        <option value='Brother'>भाई / Brother</option>
                                                        <option value='Sister'>बहन / Sister</option>
                                                        <option  value='Daughter'>बेटी / Daughter</option>
                                                        <option  value='Son'>बेटा / Son</option>
                                                    </select>
                                                </td>
                                                 <td>
                                                    <ol> <li><input type="text" name="name" id="inputSet6RelationName_${countGetFamilyDetailsJoining}"    style="display:inline;"></li></ol>
                                                </td>
                                                <td>
                                                    <ol> <li><input type="text" name="name" id="inputSet6RelationNameMotherNationality_${countGetFamilyDetailsJoining}"   style="display:inline;"></li></ol>
                                                </td>
                                                <td>
                                                    <ol> <li><input type="text" name="name" id="inputSet6RelationNameMotherPlaceofBirth_${countGetFamilyDetailsJoining}"   style="display:inline;"></li></ol>
                                                </td>
                                                <td>
                                                    <ol> <li><input type="text" name="name" id="inputSet6RelationNameMotherOccupation_${countGetFamilyDetailsJoining}"   style="display:inline;"></li></ol>
                                                </td>
                                                <td>
                                                    <ol> <li><input type="text" name="name" id="inputSet6RelationNameMotherPostal_${countGetFamilyDetailsJoining}"  style="display:inline;"></li></ol>
                                                </td>
                                                <td>
                                                    <ol> <li><input type="text" name="name" id="inputSet6RelationNameMotherPermanentHomeaddress_${countGetFamilyDetailsJoining}" value='${permanentAddressDetailsGlobal}'  style="display:inline;"></li></ol>
                                                </td>
</tr>

`


        tbodySet6RelationName.append(row);
    }




}







function saveRelationDetails() {
    

    var objArrEmployer = [];
    var tbodySet6RelationName = $("#tbodySet6RelationName > tr");
    for (let row of tbodySet6RelationName) {

        let index = row.id.split('_')[1];
        let idOfTable = $("#hiddencountGetFamilyDetailsJoining_" + index).val();
        let inputSet6RelationNameSelectFamilyMember = $("#inputSet6RelationNameSelectFamilyMember_" + index).val();
        let inputSet6RelationName = $("#inputSet6RelationName_" + index).val();
        let inputSet6RelationNameMotherNationality = $("#inputSet6RelationNameMotherNationality_" + index).val();
        let inputSet6RelationNameMotherPlaceofBirth = $("#inputSet6RelationNameMotherPlaceofBirth_" + index).val();
        let inputSet6RelationNameMotherOccupation = $("#inputSet6RelationNameMotherOccupation_" + index).val();
        let inputSet6RelationNameMotherPostal = $("#inputSet6RelationNameMotherPostal_" + index).val();
        let inputSet6RelationNameMotherPermanentHomeaddress = $("#inputSet6RelationNameMotherPermanentHomeaddress_" + index).val();




        let obj = {
            id: idOfTable,
            relation: inputSet6RelationNameSelectFamilyMember,
            nameOfRelationship: inputSet6RelationName,
            nationality: inputSet6RelationNameMotherNationality,
            placeOfBirth: inputSet6RelationNameMotherPlaceofBirth,
            occupation: inputSet6RelationNameMotherOccupation,
            presentAddress: inputSet6RelationNameMotherPostal,
            permanentAddress: inputSet6RelationNameMotherPermanentHomeaddress
        }

        objArrEmployer.push(obj);
    }
    ;
    var _url = apiBaseUrlHr + "/api/CandidateJoiningOther/SaveFamilyDetailsJoining/" + candidateId;
    _url = _url.replace(/[\u200B-\u200D\uFEFF]/g, '');

    $.ajax({
        type: "POST",
        url: _url,
        data: JSON.stringify(objArrEmployer),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        //processData: false,
        //contentType: false,
        /*headers: { Authorization: ApiToken },*/
        beforeSend: function () {
            //var ApiObject = CheckApiCall();
            //if (ApiObject.isCall == false) {
            //    window.location.href = mainLoginUrl;
            //    return false;
            //}
            $('.page-loader').show();

        },
        success: function (response) {

            //loadAllDataOfJoiningCandidate();
            $('.page-loader').hide();


            if (response.statusCode == 201 || response.statusCode == 200) {
                Swal.fire({
                    title: 'Success !',
                    text: response.statusCode == 201 ? 'Employer Details updated Successfully' : response.message,
                    icon: "success"
                })

                getGetFamilyDetailsJoiningDataFromApi()
                PrintFormH()

            }

            $('.page-loader').hide();


        },
        complete: function () {

            $('.page-loader').hide();

        },
        error: function (jqXHR, status) {

            $('.page-loader').hide();

            Swal.fire({
                title: 'Invalid !',
                text: jqXHR.responseJSON.title,
                icon: "error"
            });

            switch (jqXHR.status) {

                case "401":
                    window.location.href = unAuthorisedUrl;
                    break;
                case "403":
                    window.location.href = forbiddenUrl;
                    break;
                default:
                    ;
                    break;
            }
        }
    });
}

function savePakistanDetails() {
    

    var objArrEmployer = [];
    var tbodySet6RelationName = $("#tbodyDistrictHeadquarters > tr");
    for (let row of tbodySet6RelationName) {

        let index = row.id.split('_')[1];
        let idOfTable = $("#hiddencountGetFamilyDetailsJoining_" + index).val();
        let inputSet6DistrictHeadquartersFrom = $("#inputSet6DistrictHeadquartersFrom_" + index).val();
        let inputSet6DistrictHeadquartersTo = $("#inputSet6DistrictHeadquartersTo_" + index).val();
        let inputSet6DistrictHeadquartersResidentialaddress = $("#inputSet6DistrictHeadquartersResidentialaddress_" + index).val();
        let inputSet6DistrictHeadquartersDistrictHeadquarters = $("#inputSet6DistrictHeadquartersDistrictHeadquarters_" + index).val();
        
        if (inputSet6DistrictHeadquartersFrom != "" && inputSet6DistrictHeadquartersFrom != null) {
            inputSet6DistrictHeadquartersFrom = formatToIsodateFormate(inputSet6DistrictHeadquartersFrom)
        }
        if (inputSet6DistrictHeadquartersTo != "" && inputSet6DistrictHeadquartersTo != null) {
            inputSet6DistrictHeadquartersTo = formatToIsodateFormate(inputSet6DistrictHeadquartersTo)
        }


        let obj = {
            id: idOfTable,
            from: inputSet6DistrictHeadquartersFrom == '' ? null : inputSet6DistrictHeadquartersFrom,
            to: inputSet6DistrictHeadquartersTo == '' ? null : inputSet6DistrictHeadquartersTo,
            address: inputSet6DistrictHeadquartersResidentialaddress,
            district_HeadQuaters: inputSet6DistrictHeadquartersDistrictHeadquarters,
     
        }

        objArrEmployer.push(obj);
    }
    ;
    var _url = apiBaseUrlHr + "/api/CandidateJoiningOther/SavePakistanLivingDetailsjoining/" + candidateId;
    _url = _url.replace(/[\u200B-\u200D\uFEFF]/g, '');

    $.ajax({
        type: "POST",
        url: _url,
        data: JSON.stringify(objArrEmployer),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        //processData: false,
        //contentType: false,
        /*headers: { Authorization: ApiToken },*/
        beforeSend: function () {
            //var ApiObject = CheckApiCall();
            //if (ApiObject.isCall == false) {
            //    window.location.href = mainLoginUrl;
            //    return false;
            //}
            $('.page-loader').show();

        },
        success: function (response) {

            //loadAllDataOfJoiningCandidate();
            $('.page-loader').hide();


            if (response.statusCode == 201 || response.statusCode == 200) {
                Swal.fire({
                    title: 'Success !',
                    text: response.statusCode == 201 ? 'Employer Details updated Successfully' : response.message,
                    icon: "success"
                })

                getGetPakistanLivingDetailsjoiningDataFromApi()
                PrintFormH()

            }

            $('.page-loader').hide();


        },
        complete: function () {

            $('.page-loader').hide();

        },
        error: function (jqXHR, status) {

            $('.page-loader').hide();

            Swal.fire({
                title: 'Invalid !',
                text: jqXHR.responseJSON.title,
                icon: "error"
            });

            switch (jqXHR.status) {

                case "401":
                    window.location.href = unAuthorisedUrl;
                    break;
                case "403":
                    window.location.href = forbiddenUrl;
                    break;
                default:
                    ;
                    break;
            }
        }
    });
}







function getGetPakistanLivingDetailsjoiningDataFromApi() {
    
    var url = apiBaseUrlHr + `/api/CandidateJoiningOther/GetPakistanLivingDetailsjoining?CandidateId=${candidateId}`;
    url = url.replace(/[\u200B-\u200D\uFEFF]/g, '');
    $.ajax({
        type: "GET",
        url: url,
        //data: '{}',
        contentType: "application/json; charset=utf-8",
        dataType: "json",

        beforeSend: function () {

            $('.page-loader').show();

        },
        success: function (response) {
            console.log(response.data)

            loadGetPakistanLivingDetailsjoining(response.data)

            $('.page-loader').hide();


        },
        error: function (err) {
            $('.page-loader').hide();
            switch (err.status) {

                case "401":
                    window.location.href = unAuthorisedUrl;
                    break;
                case "403":
                    window.location.href = forbiddenUrl;
                    break;
                default:

                    break;
            }
        },

        failure: function (response) {
            // alert(response.d);
            $('.page-loader').hide();
        }
    });


}

var countGetPakistanLivingDetailsjoining = 0;
function loadGetPakistanLivingDetailsjoining(listNominationForGratuity) {
    
    countGetPakistanLivingDetailsjoining = 0;


    var tbodyDistrictHeadquarters = $("#tbodyDistrictHeadquarters");
    tbodyDistrictHeadquarters.empty();
    if (listNominationForGratuity !== null)
        for (let e of listNominationForGratuity) {

            

            countGetPakistanLivingDetailsjoining++;
            let row = ` <tr class='trofcountGetPakistanLivingDetailsjoining'  id="row19_${countGetPakistanLivingDetailsjoining}">

 <td width="72" valign="top"> ${countGetPakistanLivingDetailsjoining}
                                                                    <input type="hidden" id="hiddencountGetPakistanLivingDetailsjoining_${countGetPakistanLivingDetailsjoining}" value=${e.id} >  </td>
                                            


                                                <td width="72" valign="top"><p><input type="text" class="form-control datepickerr" placeholder='select date' id="inputSet6DistrictHeadquartersFrom_${countGetPakistanLivingDetailsjoining}" value='${e.from ==null?"":formatDate_dd_mm_yyyy_New_Formate(new Date(Date.parse(e.from)))}' /></p></td>
                                                <td width="84" valign="top"><p><input type="text" class="form-control datepickerr" placeholder='select date' id="inputSet6DistrictHeadquartersTo_${countGetPakistanLivingDetailsjoining}" value='${e.to == null ? "" : formatDate_dd_mm_yyyy_New_Formate(new Date(Date.parse(e.to)))}' /></p></td>
                                                <td width="330" valign="top"><p><input type="text" class="form-control" id="inputSet6DistrictHeadquartersResidentialaddress_${countGetPakistanLivingDetailsjoining}" value='${e.address}' style="display:inline;" /></p></td>
                                                <td width="222" valign="top"><p><input type="text" class="form-control" id="inputSet6DistrictHeadquartersDistrictHeadquarters_${countGetPakistanLivingDetailsjoining}"  value='${e.district_HeadQuaters}' style="display:inline;" /></p></td>
</tr>

`


            tbodyDistrictHeadquarters.append(row);

        }

    if (countGetPakistanLivingDetailsjoining == 0) {

        countGetPakistanLivingDetailsjoining++;
        let row = ` <tr class='trofcountGetPakistanLivingDetailsjoining'  id="row19_${countGetPakistanLivingDetailsjoining}">

 <td width="72" valign="top"> ${countGetPakistanLivingDetailsjoining}
                                                                    <input type="hidden" id="hiddencountGetPakistanLivingDetailsjoining_${countGetPakistanLivingDetailsjoining}" value='0' >  </td>
                                            

                                                 
                                                <td width="72" valign="top"><p><input type="text" class="form-control datepickerr" placeholder='select date' id="inputSet6DistrictHeadquartersFrom_${countGetPakistanLivingDetailsjoining}" /></p></td>
                                                <td width="84" valign="top"><p><input type="text" class="form-control datepickerr" placeholder='select date' id="inputSet6DistrictHeadquartersTo_${countGetPakistanLivingDetailsjoining}" /></p></td>
                                                <td width="330" valign="top"><p><input type="text" class="form-control" id="inputSet6DistrictHeadquartersResidentialaddress_${countGetPakistanLivingDetailsjoining}" style="display:inline;" /></p></td>
                                                <td width="222" valign="top"><p><input type="text" class="form-control" id="inputSet6DistrictHeadquartersDistrictHeadquarters_${countGetPakistanLivingDetailsjoining}" style="display:inline;" /></p></td>
</tr>

`


        tbodyDistrictHeadquarters.append(row);
    }




}

function validationformHSubmitButton() {
    let declarationDate = $('#declarationDate').val()
    if (declarationDate == "") {
        toastHr('Please select the Date ')
        $('#declarationDate').addClass("error");
        return
    }
    return true
}





function formHSubmitButton() {
   
    let validX = validationformHSubmitButton()
    if (validX == undefined) {
        return
    }
 
    let textareaReasonForArrested = $('#textareaReasonForArrested').val()
    let inputSet6droppedatanystageName = $('#inputSet6droppedatanystageName').val()
    let inputSet6droppedatanystageSurname = $('#inputSet6droppedatanystageSurname').val()
    let textAreaSet6droppedatanystagePresentaddress = $('#textAreaSet6droppedatanystagePresentaddress').val()
    let textAreaSet6Homeaddressinfull = $('#textAreaSet6Homeaddressinfull').val()
    let textAreaSet6IforiginallyaresidentofPakistan = $('#textAreaSet6IforiginallyaresidentofPakistan').val()
    let inputNationalityDateofbirth = $('#inputNationalityDateofbirth').val()
    let inputCandidateNationality = $('#inputCandidateNationality').val()
    let inputNationalityPresentage = parseFloat($('#inputNationalityPresentage').val())
    let inputNationalityAgeatMatriculation = parseFloat($('#inputNationalityAgeatMatriculation').val())
    let inputNationalityDistrictandStateinwhichsituated = $('#inputNationalityDistrictandStateinwhichsituated').val()
    let inputNationalityDistrictandState = $('#inputNationalityDistrictandState').val()
    let inputNationalityfatheroriginallybelongse = $('#inputNationalityfatheroriginallybelongse').val()
    let inputNationalityYourreligion = $('#inputNationalityYourreligion').val()
    let inputNameoftworesponsiblepersonsFirst = $('#inputNameoftworesponsiblepersonsFirst').val()
    let inputNameoftworesponsiblepersonsFirstAddress = $('#inputNameoftworesponsiblepersonsFirstAddress').val()
    let inputNameoftworesponsiblepersonsFirstMobileNumber = $('#inputNameoftworesponsiblepersonsFirstMobileNumber').val()
    let inputNameoftworesponsiblepersonsSecond = $('#inputNameoftworesponsiblepersonsSecond').val()
    let inputNameoftworesponsiblepersonsSecondAddress = $('#inputNameoftworesponsiblepersonsSecondAddress').val()
    let inputNameoftworesponsiblepersonsSecondMobileNumber = $('#inputNameoftworesponsiblepersonsSecondMobileNumber').val()
    let declarationDate = $('#declarationDate').val()
    let declarationPlace = $('#declarationPlace').val()

    let radioservicesTerminatedYesNo = $('#servicesTerminatedYes').prop('checked')

    let radioAreyouamemberofaScheduledCasteYes = $('#radioAreyouamemberofaScheduledCasteYes').prop('checked')
    let radioAreyouamemberofaScheduledCasteNo = $('#radioAreyouamemberofaScheduledCasteNo').prop('checked')
    let radioHaveyouEverbeenArrestedYes = $('#radioHaveyouEverbeenArrestedYes').prop('checked')
    let radioHaveyouEverbeenArrestedNo = $('#radioHaveyouEverbeenArrestedNo').prop('checked')

    let radioHaveyouEverbeenProsecutedYes = $('#radioHaveyouEverbeenProsecutedYes').prop('checked')
    let radioHaveyouEverbeenProsecutedNo = $('#radioHaveyouEverbeenProsecutedNo').prop('checked')

    let radioHaveyoueverbeenkeptunderdetentionYes = $('#radioHaveyoueverbeenkeptunderdetentionYes').prop('checked')
    let radioHaveyoueverbeenkeptunderdetentionNo = $('#radioHaveyoueverbeenkeptunderdetentionNo').prop('checked')

    let radioHaveyoueverbeenbounddownYes = $('#radioHaveyoueverbeenbounddownYes').prop('checked')
    let radioHaveyoueverbeenbounddownNo = $('#radioHaveyoueverbeenbounddownNo').prop('checked')
    let radioHaveyoueverbeenbounddownCourtOfLowYes = $('#radioHaveyoueverbeenbounddownCourtOfLowYes').prop('checked')
    let radioHaveyoueverbeenbounddownCourtOfLowNo = $('#radioHaveyoueverbeenbounddownCourtOfLowNo').prop('checked')


    let radioHaveyoueverbeenconvictedbyaCourtYes = $('#radioHaveyoueverbeenconvictedbyaCourtYes').prop('checked')
    let radioHaveyoueverbeenconvictedbyaCourtNo = $('#radioHaveyoueverbeenconvictedbyaCourtNo').prop('checked')


    let radioHaveyoueverbeendebarredfromanyexaminationYes = $('#radioHaveyoueverbeendebarredfromanyexaminationYes').prop('checked')
    let radioHaveyoueverbeendebarredfromanyexaminationNo = $('#radioHaveyoueverbeendebarredfromanyexaminationNo').prop('checked')

    let radiodisqualifiedbyanyPublicServiceCommissionYes = $('#radiodisqualifiedbyanyPublicServiceCommissionYes').prop('checked')
    let radiodisqualifiedbyanyPublicServiceCommissionNo = $('#radiodisqualifiedbyanyPublicServiceCommissionNo').prop('checked')

    let radioCommissionforanyoftheirexaminationsYes = $('#radioCommissionforanyoftheirexaminationsYes').prop('checked')
    let radioCommissionforanyoftheirexaminationsNo = $('#radioCommissionforanyoftheirexaminationsNo').prop('checked')


    let radioTimeoffillingupthisattentionformYes = $('#radioTimeoffillingupthisattentionformYes').prop('checked')
    let radioTimeoffillingupthisattentionformNo = $('#radioTimeoffillingupthisattentionformNo').prop('checked')


    let radioPendingagainstyouinanyUniversityYes = $('#radioPendingagainstyouinanyUniversityYes').prop('checked')
    let radioPendingagainstyouinanyUniversityNo = $('#radioPendingagainstyouinanyUniversityNo').prop('checked')


    let radioAnyoftheabovementionedquestionEducationalYes = $('#radioAnyoftheabovementionedquestionEducationalYes').prop('checked')
    let radioAnyoftheabovementionedquestionEducationalNo = $('#radioAnyoftheabovementionedquestionEducationalNo').prop('checked')

    
    let areyoumemberofschedulecast
    

    let radioservicesTerminatedYesNoYesNo
    if (radioservicesTerminatedYesNo) {
        radioservicesTerminatedYesNoYesNo = true
    } else {
        radioservicesTerminatedYesNoYesNo = false
    }




    if (radioAreyouamemberofaScheduledCasteYes) {
        areyoumemberofschedulecast = true
    } else {
        areyoumemberofschedulecast = false
    }

     
    let HaveyouEverbeenArrested
    if (radioHaveyouEverbeenArrestedYes) {
        HaveyouEverbeenArrested = true
    } else {
        HaveyouEverbeenArrested = false
    }

    let HaveyouEverbeenProsecuted
    if (radioHaveyouEverbeenProsecutedYes) {
        HaveyouEverbeenProsecuted = true
    } else {
        HaveyouEverbeenProsecuted = false
    }

    let Haveyoueverbeenkeptunderdetention
    if (radioHaveyoueverbeenkeptunderdetentionYes) {
        Haveyoueverbeenkeptunderdetention = true
    } else {
        Haveyoueverbeenkeptunderdetention = false
    }



    let Haveyoueverbeenbounddown
    if (radioHaveyoueverbeenbounddownYes) {
        Haveyoueverbeenbounddown = true
    } else {
        Haveyoueverbeenbounddown = false
    }

    let HaveyoueverbeenbounddownCourtOfLow
    if (radioHaveyoueverbeenbounddownCourtOfLowYes) {
        HaveyoueverbeenbounddownCourtOfLow = true
    } else {
        HaveyoueverbeenbounddownCourtOfLow = false
    }



    let HaveyoueverbeenconvictedbyaCourt
    if (radioHaveyoueverbeenconvictedbyaCourtYes) {
        HaveyoueverbeenconvictedbyaCourt = true
    } else {
        HaveyoueverbeenconvictedbyaCourt = false
    }


    let Haveyoueverbeendebarredfromanyexamination
    if (radioHaveyoueverbeendebarredfromanyexaminationYes) {
        Haveyoueverbeendebarredfromanyexamination = true
    } else {
        Haveyoueverbeendebarredfromanyexamination = false
    }

    let squalifiedbyanyPublicServiceCommission
    if (radiodisqualifiedbyanyPublicServiceCommissionYes) {
        squalifiedbyanyPublicServiceCommission = true
    } else {
        squalifiedbyanyPublicServiceCommission = false
    }

    let Commissionforanyoftheirexaminations
    if (radioCommissionforanyoftheirexaminationsYes) {
        Commissionforanyoftheirexaminations = true
    } else {
        Commissionforanyoftheirexaminations = false
    }


    let Timeoffillingupthisattentionform
    if (radioTimeoffillingupthisattentionformYes) {
        Timeoffillingupthisattentionform = true
    } else {
        Timeoffillingupthisattentionform = false
    }



    let PendingagainstyouinanyUniversity
    if (radioPendingagainstyouinanyUniversityYes) {
        PendingagainstyouinanyUniversity = true
    } else {
        PendingagainstyouinanyUniversity = false
    }


    let AnyoftheabovementionedquestionEducational
    if (radioAnyoftheabovementionedquestionEducationalYes) {
        AnyoftheabovementionedquestionEducational = true
    } else {
        AnyoftheabovementionedquestionEducational = false
    }




    debugger

    if (inputNationalityDateofbirth != "" && inputNationalityDateofbirth != null) {
        inputNationalityDateofbirth = formatToIsodateFormate(inputNationalityDateofbirth)
    }

    if (declarationDate != "" && declarationDate != null) {
        declarationDate = formatToIsodateFormate(declarationDate)
    }
    

        let obj = {
            name: inputSet6droppedatanystageName,
            surname: inputSet6droppedatanystageSurname,
            presentAddress: textAreaSet6droppedatanystagePresentaddress,
            homeAddress: textAreaSet6Homeaddressinfull,
            pakistanAddress_WithDate: textAreaSet6IforiginallyaresidentofPakistan,
            dateOfBirth: inputNationalityDateofbirth == "" ? null : inputNationalityDateofbirth,
           candidate_Nationality: inputCandidateNationality,
            presentAge: inputNationalityPresentage,
            matricAge: inputNationalityAgeatMatriculation,
            placeOfBirth: inputNationalityDistrictandStateinwhichsituated,
            district_StateOfCandidate: inputNationalityDistrictandState,
            district_StateOfFather: inputNationalityfatheroriginallybelongse,
            religion: inputNationalityYourreligion,
            areYou_Sc_St_Obc: areyoumemberofschedulecast,
            ever_Arrested: HaveyouEverbeenArrested,
            ever_Prosecuted: HaveyouEverbeenProsecuted,
            kept_Under_Detention: Haveyoueverbeenkeptunderdetention,
            ever_Bound_Down: Haveyoueverbeenbounddown,
            find_By_CourtOfLaw: HaveyoueverbeenbounddownCourtOfLow,
            convicted_By_CourtOfLaw: HaveyoueverbeenconvictedbyaCourt,
            debarred_From_Examination: Haveyoueverbeendebarredfromanyexamination,
            debarred_By_PublicServiceCommission: squalifiedbyanyPublicServiceCommission,
            commission_For_Examination: Commissionforanyoftheirexaminations,
            pending_Case_In_Court: Timeoffillingupthisattentionform,
            pending_Case_In_University: PendingagainstyouinanyUniversity,
            answer_To_AboveQuestion: AnyoftheabovementionedquestionEducational,
            responsible_Person1: inputNameoftworesponsiblepersonsFirst,
            responsible_Person2: inputNameoftworesponsiblepersonsSecond,
            declaration_Date: declarationDate == "" ? null : declarationDate,
            declaration_Place: declarationPlace,
            responsible_person_one_address: inputNameoftworesponsiblepersonsFirstAddress,
            responsible_person_one_mobileNo: inputNameoftworesponsiblepersonsFirstMobileNumber,
            responsible_person_two_address: inputNameoftworesponsiblepersonsSecondAddress,
            responsible_person_two_mobileNo: inputNameoftworesponsiblepersonsSecondMobileNumber,
            reasonForArrested: textareaReasonForArrested,
            servicesTerminated: radioservicesTerminatedYesNoYesNo
        }

     
  
    ;
    var _url = apiBaseUrlHr + "/api/CandidateJoiningOther/SaveAttestationFormDetailsJoining/" + candidateId;
    _url = _url.replace(/[\u200B-\u200D\uFEFF]/g, '');

    $.ajax({
        type: "POST",
        url: _url,
        data: JSON.stringify(obj),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        //processData: false,
        //contentType: false,
        /*headers: { Authorization: ApiToken },*/
        beforeSend: function () {
            //var ApiObject = CheckApiCall();
            //if (ApiObject.isCall == false) {
            //    window.location.href = mainLoginUrl;
            //    return false;
            //}
            $('.page-loader').show();

        },
        success: function (response) {

            //loadAllDataOfJoiningCandidate();
            $('.page-loader').hide();


            if (response.statusCode == 201 || response.statusCode == 200) {
                Swal.fire({
                    title: 'Success !',
                    text: response.statusCode == 201 ? 'Employer Details updated Successfully' : response.message,
                    icon: "success"
                })

                 

            }

            $('.page-loader').hide();
            getFormHSubmitData();
            PrintFormH()

        },
        complete: function () {

            $('.page-loader').hide();

        },
        error: function (jqXHR, status) {

            $('.page-loader').hide();

            Swal.fire({
                title: 'Invalid !',
                text: jqXHR.responseJSON.title,
                icon: "error"
            });

            switch (jqXHR.status) {

                case "401":
                    window.location.href = unAuthorisedUrl;
                    break;
                case "403":
                    window.location.href = forbiddenUrl;
                    break;
                default:
                    ;
                    break;
            }
        }
    });
}

function getFormHSubmitData() {

    
    var url = apiBaseUrlHr + `/api/CandidateJoiningOther/GetAttestationFormDetailsJoining?CandidateId=${candidateId}`;
    url = url.replace(/[\u200B-\u200D\uFEFF]/g, '');
    $.ajax({
        type: "GET",
        url: url,
        //data: '{}',
        contentType: "application/json; charset=utf-8",
        dataType: "json",

        beforeSend: function () {

            $('.page-loader').show();

        },
        success: function (response) {
            console.log(response.data)

            LoadFormHData(response.data)

            $('.page-loader').hide();


        },
        error: function (err) {
            $('.page-loader').hide();
            switch (err.status) {

                case "401":
                    window.location.href = unAuthorisedUrl;
                    break;
                case "403":
                    window.location.href = forbiddenUrl;
                    break;
                default:

                    break;
            }
        },

        failure: function (response) {
            // alert(response.d);
            $('.page-loader').hide();
        }
    });


}

function LoadFormHData(data) {
    debugger

    


    //$('#textAreaSet6Homeaddressinfull').val(permanentAddressDetailsGlobal == null ? "" : permanentAddressDetailsGlobal);
    //$('#inputCandidateNationality').val(piF_Nationality_Global == null ? "" : piF_Nationality_Global);
    //$('#textAreaSet6droppedatanystagePresentaddress').val(presentAddressDetailsGlobal); 
    if (data == null) {
        return;
    }
    var formData = data.attestationFormDetails;
    //$('#formHImage').attr('src', data.candidateImage);
    console.log(formData)
    //$('#inputSet6droppedatanystageName').val(formData.name);
    //$('#inputSet6droppedatanystageSurname').val(formData.surname);
    //$('#textAreaSet6droppedatanystagePresentaddress').val(formData.presentAddress); 
 
    if (formData.presentAddress != "" && formData.presentAddress != null) {
        $('#textAreaSet6droppedatanystagePresentaddress').val(formData.presentAddress); 
    } else {
        $('#textAreaSet6droppedatanystagePresentaddress').val(presentAddressDetailsGlobal == null ? "" : presentAddressDetailsGlobal);
    }

    if (formData.homeAddress != "" && formData.homeAddress != null) {
        $('#textAreaSet6Homeaddressinfull').val(formData.homeAddress);
    } else {
        $('#textAreaSet6Homeaddressinfull').val(permanentAddressDetailsGlobal == null ? "" : permanentAddressDetailsGlobal);
    }
    //$('#textAreaSet6Homeaddressinfull').val(formData.homeAddress);
    $('#textAreaSet6IforiginallyaresidentofPakistan').val(formData.pakistanAddress_WithDate);
    //$('#inputNationalityDateofbirth').val(formData.dateOfBirth == null ? "" : formatDate_dd_mm_yyyy_New_Formate(new Date(Date.parse(formData.dateOfBirth))));
if (formData.candidate_Nationaltiy != "" && formData.candidate_Nationaltiy != null) {
        $('#inputCandidateNationality').val(formData.candidate_Nationaltiy);
} else {
    $('#inputCandidateNationality').val(piF_Nationality_Global == null ? "" : piF_Nationality_Global); 
    }
  
    //parseFloat($('#inputNationalityPresentage').val(formData.presentAge));
    //parseFloat($('#inputNationalityAgeatMatriculation').val(formData.matricAge));
    $('#inputNationalityDistrictandStateinwhichsituated').val(formData.placeOfBirth);
    $('#inputNationalityDistrictandState').val(formData.district_StateOfCandidate);
    $('#inputNationalityfatheroriginallybelongse').val(formData.district_StateOfFather);
    //$('#inputNationalityYourreligion').val(formData.religion);
    $('#textareaReasonForArrested').val(formData.reasonForArrested);


    

    if (formData.servicesTerminated) {
        $('#servicesTerminatedYes').prop('checked', true);
        $('#servicesTerminatedNo').prop('checked', false);
    }
    else {
        $('#servicesTerminatedYes').prop('checked', false);
        $('#servicesTerminatedNo').prop('checked', true);
    }

    if (formData.areYou_Sc_St_Obc) {
        $('#radioAreyouamemberofaScheduledCasteYes').prop('checked', true);
        $('#radioAreyouamemberofaScheduledCasteNo').prop('checked', false);
    }
    else {
        $('#radioAreyouamemberofaScheduledCasteYes').prop('checked', false);
        $('#radioAreyouamemberofaScheduledCasteNo').prop('checked', true);
    }
    if (formData.ever_Arrested) {
        $('#radioHaveyouEverbeenArrestedYes').prop('checked', true);
        $('#radioHaveyouEverbeenArrestedNo').prop('checked', false);
    }
    else {
        $('#radioHaveyouEverbeenArrestedYes').prop('checked', false);
        $('#radioHaveyouEverbeenArrestedNo').prop('checked', true);
    }
    if (formData.ever_Prosecuted) {
        $('#radioHaveyouEverbeenProsecutedYes').prop('checked', true);
        $('#radioHaveyouEverbeenProsecutedNo').prop('checked', false);
    }
    else {
        $('#radioHaveyouEverbeenProsecutedYes').prop('checked', false);
        $('#radioHaveyouEverbeenProsecutedNo').prop('checked', true);
    }
    if (formData.kept_Under_Detention) {
        $('#radioHaveyoueverbeenkeptunderdetentionYes').prop('checked', true);
        $('#radioHaveyoueverbeenkeptunderdetentionNo').prop('checked', false);
    }
    else {
        $('#radioHaveyoueverbeenkeptunderdetentionYes').prop('checked', false);
        $('#radioHaveyoueverbeenkeptunderdetentionNo').prop('checked', true);
    }
    if (formData.ever_Bound_Down) {
        $('#radioHaveyoueverbeenbounddownYes').prop('checked', true);
        $('#radioHaveyoueverbeenbounddownNo').prop('checked', false);
    }
    else {
        $('#radioHaveyoueverbeenbounddownYes').prop('checked', false);
        $('#radioHaveyoueverbeenbounddownNo').prop('checked', true);
    }
    if (formData.find_By_CourtOfLaw) {
        $('#radioHaveyoueverbeenbounddownCourtOfLowYes').prop('checked', true);
        $('#radioHaveyoueverbeenbounddownCourtOfLowNo').prop('checked', false);
    }
    else {
        $('#radioHaveyoueverbeenbounddownCourtOfLowYes').prop('checked', false);
        $('#radioHaveyoueverbeenbounddownCourtOfLowNo').prop('checked', true)
    }
    if (formData.convicted_By_CourtOfLaw) {
        $('#radioHaveyoueverbeenconvictedbyaCourtYes').prop('checked', true)
        $('#radioHaveyoueverbeenconvictedbyaCourtNo').prop('checked', false);
    }
    else {
        $('#radioHaveyoueverbeenconvictedbyaCourtYes').prop('checked', false);
        $('#radioHaveyoueverbeenconvictedbyaCourtNo').prop('checked', true);
    }
    if (formData.debarred_From_Examination) {
        $('#radioHaveyoueverbeendebarredfromanyexaminationYes').prop('checked', true);
        $('#radioHaveyoueverbeendebarredfromanyexaminationNo').prop('checked', false);
    }
    else {
        $('#radioHaveyoueverbeendebarredfromanyexaminationYes').prop('checked', false);
        $('#radioHaveyoueverbeendebarredfromanyexaminationNo').prop('checked', true);
    }
    if (formData.debarred_By_PublicServiceCommission) {
        $('#radiodisqualifiedbyanyPublicServiceCommissionYes').prop('checked', true);
        $('#radiodisqualifiedbyanyPublicServiceCommissionNo').prop('checked', false);
    }
    else {
        $('#radiodisqualifiedbyanyPublicServiceCommissionYes').prop('checked', false)
        $('#radiodisqualifiedbyanyPublicServiceCommissionNo').prop('checked', true);
    }
    if (formData.commission_For_Examination) {
        $('#radioCommissionforanyoftheirexaminationsYes').prop('checked', true);
        $('#radioCommissionforanyoftheirexaminationsNo').prop('checked', false);
    }
    else {
        $('#radioCommissionforanyoftheirexaminationsYes').prop('checked', false);
        $('#radioCommissionforanyoftheirexaminationsNo').prop('checked', true);
    }
    if (formData.pending_Case_In_Court) {
        $('#radioTimeoffillingupthisattentionformYes').prop('checked', true);
        $('#radioTimeoffillingupthisattentionformNo').prop('checked', false);
    }
    else {
        $('#radioTimeoffillingupthisattentionformYes').prop('checked', false);

        $('#radioTimeoffillingupthisattentionformNo').prop('checked', true);
    }
    if (formData.pending_Case_In_University) {
        $('#radioPendingagainstyouinanyUniversityYes').prop('checked', true);
        $('#radioPendingagainstyouinanyUniversityNo').prop('checked', false);
    } else {
        $('#radioPendingagainstyouinanyUniversityYes').prop('checked', false);
        $('#radioPendingagainstyouinanyUniversityNo').prop('checked', true);
    }
    if (formData.answer_To_AboveQuestion) {
        $('#radioAnyoftheabovementionedquestionEducationalYes').prop('checked', true);
        $('#radioAnyoftheabovementionedquestionEducationalNo').prop('checked', false);
        $('#textareaReasonForArrested').css('display','block');

    }
    else {
        $('#radioAnyoftheabovementionedquestionEducationalYes').prop('checked', false);
        $('#radioAnyoftheabovementionedquestionEducationalNo').prop('checked', true);
        $('#textareaReasonForArrested').css('display', 'none');
    }
    $('#inputNameoftworesponsiblepersonsFirst').val(formData.responsible_Person1);
    $('#inputNameoftworesponsiblepersonsFirstAddress').val(formData.responsible_person_one_address);
    $('#inputNameoftworesponsiblepersonsFirstMobileNumber').val(formData.responsible_person_one_mobileNo);
    $('#inputNameoftworesponsiblepersonsSecond').val(formData.responsible_Person2);
    $('#inputNameoftworesponsiblepersonsSecondAddress').val(formData.responsible_person_two_address);
    $('#inputNameoftworesponsiblepersonsSecondMobileNumber').val(formData.responsible_person_two_mobileNo);
    $('#declarationDate').val(formData.declaration_Date == null ? "" : formatDate_dd_mm_yyyy_New_Formate(new Date(Date.parse(formData.declaration_Date))));
    $('#declarationPlace').val(formData.declaration_Place);
    


}

 
function AnyoftheabovementionedquestionEducational(e, value) {
    if (value == 'yes') {
        $('#textareaReasonForArrested').css('display', 'block')
    } else {
        $('#textareaReasonForArrested').css('display', 'none')
    }
}





 





 