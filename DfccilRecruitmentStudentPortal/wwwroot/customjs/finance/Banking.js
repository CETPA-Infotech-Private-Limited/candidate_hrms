var recipientId = 20;
var isParent = false;
var AdvanceId = 0;
var topUpDataDetails = [];
var documentDetails = { AdmissionAdviceUpload: [], Diagnosis: [], EstimateAmount: [], ITR: [], ReviseEstimateAmount: [] }
var bankingReview_List = document.getElementById("banking_Details");


function TrigerModalViewFile(type, type2) {
    $("#viewModal").modal('show');
    $("#modelTitle").html(type)
    $("#tbodyViewDocuments").empty();
    count = 1;
    
    for (let e of documentDetails[type2]) {
        let row = ` <tr>
                                         <td>${count}.</td>
                                         <td>${type}</td>
                                         <td><a traget="_blank" href="${e.pathUrl}" class="file-link"><span class="ti-files"></span></a></td>
                                     </tr>`;
        $("#tbodyViewDocuments").append(row)
        count++;
    }
    //$('#myModalTitle').html(type);
    //$('#spnComment').html(type);
    //loadUploadedFile(type2);
}

$(document).ready(function () {
    bindTableBankingList();
});

function bindTableBankingList() {
    
    var tblBanking = $('#tbodyBankingList');
    var url = apiBaseUrl + "/api/Claim/GetClaimForBankingList/" + recipientId.toString();

    url = url.replace(/[\u200B-\u200D\uFEFF]/g, '');
    $.ajax({
        type: "GET",
        url: url,
        //data: '{}',
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        beforeSeend: function () {
            $('.page-loader').show();

        },
        success: function (response) {
            /*console.log(response)
            console.log(response.statusCode)*/
            console.log(response.data)
            tblBanking.append('');
            var count = 1;
            
            $.each(response.data, function () {
                var rowBanking = ` <tr>
                            <td>${count}</td>
                              
                            <td>
                                ${this.employeeName}                                
                            </td>

                            <td>
                                ${this.patientName}
                            
                            </td>
                           
                            <td>
                                 ${this.requestDate}
                                 
                            </td>
                            <td>
                                 ${this.approvedAmount}
                                 
                            </td>
                              
                            <td>
                                <button class="btn btn-success-details" type="button" onclick="bankingReviewApp(${this.empId},'${this.employeeName}','${this.relation}','${this.claimId}','${this.patientId}')">Details</button>
                                
                            </td>
                        </tr>`;

                tblBanking.append(rowBanking);
                count++;
            });
            $('.page-loader').hide();

        },
        failure: function (response) {
            alert(response.d);
        }
    });
}


function bankingReviewApp(emp_id, emp_name, emp_relation, claimId, familyId) {
    
    AdvanceId = claimId
    var url = apiBaseUrl + "/api/Claim/GetClaimDetails/" + claimId;
    url = url.replace(/[\u200B-\u200D\uFEFF]/g, '');
    $.ajax({
        type: "GET",
        url: url,
        //data: '{}',
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        beforeSeend: function () {
            $('.page-loader').show();

        },
        success: function (response) {
            //alert("Hello");
            console.log(response);
            var JsonData = response.data;
            console.log(response.data);
            console.log(response.data.advanceBasicDetails);
            // var documentDetails = { AdmissionAdviceUpload: [], Diagnosis: [], EstimateAmount: [] }
            documentDetails.AdmissionAdviceUpload = response.data.documentLists.filter(e => e.category == 'AdmissionAdviceUpload');
            $("#spanAdmissionAdviceUpload").html(documentDetails.AdmissionAdviceUpload.length);
            /*documentDetails.Diagnosis = response.data.documentLists.filter(e => e.category == 'Diagnosis');
            $("#inputBankingDiagnosis").html(documentDetails.Diagnosis.length);*/
            documentDetails.EstimateAmount = response.data.documentLists.filter(e => e.category == 'EstimateAmount');
            $("#spanEstimateAmount").html(documentDetails.EstimateAmount.length);
            
            if (response.statusCode == 200) {
                $('#headingBankingPatientName').html(response.data.advanceBasicDetails.patientname);
                $('#headingBankingRelationName').html(response.data.advanceBasicDetails.relation);
                $('#headingBankingDOB').html(response.data.advanceBasicDetails.dateOfBirth);
                $('#headingBankingGender').html(response.data.advanceBasicDetails.gender);
                $('#inputBankingHospitalName').val(response.data.advanceBasicDetails.hospitalName);
                $('#inputBankingHospitalRegNo').val(response.data.advanceBasicDetails.hospitalRegNo);
                $('#inputBankingDoctorName').val(response.data.advanceBasicDetails.doctorName);
                $('#inputBankingClaimApprovedAmount').val(response.data.advanceBasicDetails.claimApprovedAmount);


                try {
                    $('#inputBankingLikelyDateOfAdmission').val(response.data.advanceBasicDetails.dateOfAdmission);
                }
                catch {
                }
                try {
                    $('#headingBankingApproveDate').html(JSON.parse(response.data.advanceBasicDetails.claimApprovedDate).format("DD/MM/YYYY HH:mm"));
                }
                catch {
                }
                $('#inputBankingClaimApprovedEstimateAmout').val(response.data.advanceBasicDetails.EstimateAmount);
                $('#headingBankingApprovedRequestAmount').val(response.data.advanceBasicDetails.claimApprovedAmount);
                $('#headingAdvancedApprovedPendingApproval').html(response.data.advanceBasicDetails.claimApprovedDate);
                var patientname = document.getElementById("headingBankingPatientName");
                patientname.innerText = response.data.advanceBasicDetails.patientName;
                var patientrel = document.getElementById("headingBankingRelationName");
                patientrel.innerText = response.data.advanceBasicDetails.relation;
                var patientdate = document.getElementById("headingBankingDOB");
                patientdate.innerText = response.data.advanceBasicDetails.dateOfBirth;
            }
            else {
                $('#headingBankingPatientName').html('');
                $('#headingBankingRelationName').html('');
                $('#headingBankingDOB').html('');
                $('#headingBankingGender').html('');
                $('#inputHospitalName').val('');
                $('#inputHospitalRegNo').val('');
                $('#inputDoctorName').val('');
                $('#inputAdvancedApprovedLikelyDateOfAdmission').val('');
                $('#inputAdvancedApprovedEstimateAmout').val('');
                $('#inputClaimApprovedEstimateAmout').html('');
                $('#inputClaimApprovedApprovedAmount').html('');
                $('#headingBankingApprovalDate').html('');
                $('#headingAdvancedApprovedPendingApproval').html('');
                $('#inputBankingClaimApprovedAmount').html('');
            }
            try {
                let a = JsonData.topUpDetails.length;
            }
            catch {
                JsonData.topUpDetails = [];
            }

            // alert(JsonData.topUpDetails.length);
            if (JsonData.topUpDetails.length > 0) {

                $('#inputBankingClaimApprovedAmount').attr('readonly', true);
                $('#btnAdvanceApproved').css('display', 'none');
                $('#divTopUpApproved').css('display', 'block');
            }
            else {
                $('#inputAdvancedApprovedApprovedAmount').attr('readonly', false);
                $('#btnAdvanceApproved').css('display', 'block');
                $('#divTopUpApproved').css('display', 'none');
            }
            /* addTopUpDetail(JsonData.topUpDetails);*/
            $('.page-loader').hide();
        },
        failure: function (response) {
            alert(response.d);
        }
    });
    bankingReview_List.style.display = "block";

}

