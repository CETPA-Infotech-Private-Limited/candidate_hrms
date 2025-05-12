
var IsEditMode = true;
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
//var uploadDetails = { TourEstimate: [], AccommodationEstimate: [], TourNomination: [] };
var uploadDetails = {};
var imgUpload = document.getElementById('upload-img')
    , imgPreview = document.getElementById('img-preview')
    , imgUploadForm = document.getElementById('form-upload')
    , totalFiles
    , previewTitle
    , previewTitleText
    , img;

imgUpload.addEventListener('change', previewImgs, true);
var trBodyUploadDoc = document.getElementById('trBodyUploadDoc');

function toastHr(value) {
    Toastify({
        text: `${value}`,
        className: "info",

        style: {
            background: "linear-gradient(#ce3753, #db0300)",


        },
        duration: 4000,
    }).showToast();
}
function firstNextValidationBtn() {

    if ($('#divPersonalDetails').is(':visible')) {
        let inputMobileNo = $('#inputMobileNo').val()
        let inputConfirmMobileNo = $('#inputConfirmMobileNo').val()
        let inputAlternateMobileNo = $('#inputAlternateMobileNo').val()
        let inputConfirmAlternateMobileNo = $('#inputConfirmAlternateMobileNo').val()
        let inputEmail = $('#inputEmail').val()
        let inputConfirmEmail = $('#inputConfirmEmail').val()
        let inputAlternateEmail = $('#inputAlternateEmail').val()
        let inputConfirmAlternateEmail = $('#inputConfirmAlternateEmail').val()

        let mobileRegex = /^\d{10}$/;
        if (inputMobileNo == "") {

            toastHr("Mobile no. should not empty")
            $('#inputMobileNo').addClass("error")
            return
        }
        if (inputMobileNo.length < 10) {
            toastHr("Mobile number length should not less than 10 digit");
            $('#inputMobileNo').addClass("error");
            return
        }
        if (inputMobileNo.length > 10) {
            toastHr("Mobile number length should not greater than 10 digit");
            $('#inputMobileNo').addClass("error");
            return
        }
        if (!mobileRegex.test(inputMobileNo)) {
            toastHr("Please enter a valid 10-digit mobile number");
            $('#inputMobileNo').addClass("error");
            return
        }

        if (!/^[0-9]+$/.test(inputMobileNo)) {

            toastHr("Mobile number contains only number")
            $('#inputMobileNo').addClass("error")
            return
        }

        if (inputConfirmMobileNo == "") {

            toastHr("Confirm mobile no. should not empty")
            $('#inputConfirmMobileNo').addClass("error")
            return
        }

        if (inputConfirmMobileNo.length > 10) {
            toastHr("Confirm mobile number length should not greater than 10 digit");
            $('#inputConfirmMobileNo').addClass("error");
            return
        }
        if (inputConfirmMobileNo.length < 10) {
            toastHr("Confirm mobile number length should not less than 10 digit");
            $('#inputConfirmMobileNo').addClass("error");
            return
        }


        if (!mobileRegex.test(inputConfirmMobileNo)) {
            toastHr("Please enter a valid 10-digit mobile number");
            $('#inputConfirmMobileNo').addClass("error");
            return
        }

        if (!/^[0-9]+$/.test(inputConfirmMobileNo)) {

            toastHr("Confirm mobile number contains only number")
            $('#inputConfirmMobileNo').addClass("error")
            return
        }

        if (parseFloat(inputConfirmMobileNo) != parseFloat(inputMobileNo)) {

            toastHr("Comfirm mobile no. must same as mobile no.")
            $('#inputConfirmMobileNo').val(inputMobileNo)

            return
        }
        if (inputAlternateMobileNo == "") {

            toastHr("Alternative mobile no. should not empty")
            $('#inputAlternateMobileNo').addClass("error")
            return
        }

        if (inputAlternateMobileNo.length > 10) {
            toastHr("Alternative mobile number length should not greater than 10 digit");
            $('#inputAlternateMobileNo').addClass("error");
            return
        }

        if (inputAlternateMobileNo.length < 10) {
            toastHr("Alternative mobile number length should not less than 10 digit");
            $('#inputAlternateMobileNo').addClass("error");
            return
        }


        if (!mobileRegex.test(inputAlternateMobileNo)) {
            toastHr("Please enter a valid 10-digit alternative mobile number");
            $('#inputAlternateMobileNo').addClass("error");
            return
        }

        if (!/^[0-9]+$/.test(inputAlternateMobileNo)) {

            toastHr("Alternative mobile number contains only number")
            $('#inputAlternateMobileNo').addClass("error")
            return
        }


        if (inputConfirmAlternateMobileNo == "") {

            toastHr("Confirm alternative mobile no. should not empty")
            $('#inputConfirmMobileNo').addClass("error")
            return
        }

        if (inputConfirmAlternateMobileNo.length > 10) {
            toastHr("Confirm alternative mobile number length should not greater than 10 digit");
            $('#inputConfirmMobileNo').addClass("error");
            return
        }
        if (inputConfirmAlternateMobileNo.length < 10) {
            toastHr("Confirm alternative mobile number length should not less than 10 digit");
            $('#inputConfirmMobileNo').addClass("error");
            return
        }


        if (!mobileRegex.test(inputConfirmAlternateMobileNo)) {
            toastHr("Please enter a valid 10-digit alternative mobile number");
            $('#inputConfirmMobileNo').addClass("error");
            return
        }

        if (!/^[0-9]+$/.test(inputConfirmAlternateMobileNo)) {

            toastHr("Confirm alternative mobile number contains only number")
            $('#inputConfirmMobileNo').addClass("error")
            return
        }
        if (parseFloat(inputConfirmAlternateMobileNo) != parseFloat(inputAlternateMobileNo)) {

            toastHr("Comfirm alternative mobile no. must same as alternative mobile no.")
            $('#inputConfirmMobileNo').val(mobileNAumber)

            return
        }

        if (inputEmail == "") {

            toastHr("Email should not empty")
            $('#inputEmail').addClass("error")
            return
        }

        let gmailRegex = /^[\w.-]+@gmail\.com$/;

        if (!gmailRegex.test(inputEmail)) {
            toastHr("Please enter a valid gmail address");
            $('#inputEmail').addClass("error");
        }
        if (inputConfirmEmail == "") {

            toastHr("Confirm email should not empty")
            $('#inputConfirmEmail').addClass("error")
            return
        }
        if (!gmailRegex.test(inputConfirmEmail)) {
            toastHr("Please enter a valid confirm gmail address");
            $('#inputConfirmEmail').addClass("error");
        }
        if (inputConfirmEmail != inputEmail) {

            toastHr("Comfirm email must same as email")
            $('#inputConfirmEmail').val(inputEmail)
            $('#inputConfirmEmail').addClass("error")
            return
        }




        if (inputAlternateEmail == "") {

            toastHr("Alternative email should not empty")
            $('#inputAlternateEmail').addClass("error")
            return
        }



        if (!gmailRegex.test(inputAlternateEmail)) {
            toastHr("Please enter a valid alternative gmail address");
            $('#inputAlternateEmail').addClass("error");
        }
        if (inputConfirmAlternateEmail == "") {

            toastHr("Confirm alternative email should not empty")
            $('#inputConfirmAlternateEmail').addClass("error")
            return
        }
        if (!gmailRegex.test(inputConfirmAlternateEmail)) {
            toastHr("Please enter a valid confirm alternative gmail address");
            $('#inputConfirmAlternateEmail').addClass("error");
        }
        if (inputConfirmAlternateEmail != inputAlternateEmail) {

            toastHr("Comfirm alternative email must same as alternative email")
            $('#inputConfirmAlternateEmail').val(inputAlternateEmail)
            $('#inputConfirmAlternateEmail').addClass("error")
            return
        }

    }
    return true
}
function loadUploadedFile(key) {
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
function previewImgs(event) {

    if (imgUpload.files.length == 0) {
        return;
    }
    const original = imgUpload.files[0];
    var status = validateUploadFile(original);
    if (status == false)
        return;
    const clone = new File([original], original.name, {
        type: original.type,
        lastModified: original.lastModified,
    });
    // let comment = textareaComment.value;

    uploadDetails[uploadKey].push({ uploadedFile: clone, comment: 'NA', clientPath: URL.createObjectURL(clone) });

    $("#span" + uploadKey).html(uploadDetails[uploadKey].length);
    imgUpload.value = null;
    loadUploadedFile(uploadKey);
}
function delete_file(index) {
    uploadDetails[uploadKey].splice(index, 1);
    $("#span" + uploadKey).html(uploadDetails[uploadKey].length);
    loadUploadedFile(uploadKey);
}

function TrigerModalUploadFile(type, type2) {

    uploadType = type;
    uploadKey = type2;
    $("#myModal").modal('show');
    $('#myModalTitle').html(type);
    $('#spnComment').html(type);
    loadUploadedFile(type2);
}

//Code to Upload Files Ends  Here
//Code to View Files Starts from  Here
var documentDetails = { TourEstimate: [], AccommodationEstimate: [] }
function deleteUploadedFiles(e, id, type2) {
    debugger;
    var _url = '';
    var type = $(e).parent('td').prev().prev().text();

    if ($('#content4').is(':visible') && type == 'View Copy') {
        _url = apiBaseUrlHr + "/api/Candidate/RemoveCandidateEmploymentUploads/" + id;
    }
    else if ($('#content2').is(':visible') && type == 'View Copy') {
        _url = apiBaseUrlHr + "/api/Candidate/RemoveCandidateOtherEducationUploads/" + id;
    }
    else {
        _url = apiBaseUrlHr + "/api/Candidate/RemoveCandidateUploads/" + id;
    }

    _url = _url.replace(/[\u200B-\u200D\uFEFF]/g, '');
    $.ajax({
        type: "DELETE",
        url: _url,
        beforeSend: function () {
            $('.page-loader').show();
        },
        success: function (response) {
            console.log('Response:', response);
            documentDetails[type2] = documentDetails[type2].filter(a => a.id != id);
            loadAllDataOfCandidateData();
            getCandidateProfileCompleteStaus();
            $('.page-loader').hide();

            if (response.statusCode == 201 || response.statusCode == 200) {
                Swal.fire({
                    title: 'Success !',
                    text: response.statusCode == 201 ? 'Deleted Successfully!' : response.message,
                    icon: "success"
                })


            } else {
                Swal.fire({
                    title: 'Invalid !',
                    text: response.message,
                    icon: 'error'
                });
            }
            $("#viewModal").modal('hide');
            $('#myModal').modal('hide');
            e.disabled = false;
        },
        complete: function () {
            e.disabled = false;
            $('.page-loader').hide();
            $("#btnTourPlanSubmit").html('<i class="fa-solid fa-plus"></i> &nbsp;Submit');
            $("#inputPurposeOfTravel").focus();
        },
        error: function (jqXHR, status) {
            e.disabled = false;
            $('.page-loader').hide();
            $("#btnTourPlanSubmit").html('<i class="fa-solid fa-plus"></i> &nbsp;Add');

            console.error('Error:', jqXHR.status, jqXHR.responseJSON); // Debugging: Check the error response

            Swal.fire({
                title: 'Invalid !',
                text: jqXHR.responseJSON.title,
                icon: 'error'
            });
            $("#inputPurposeOfTravel").focus();
            switch (jqXHR.status) {
                case 401:
                    window.location.href = unAuthorisedUrl;
                    break;
                case 403:
                    window.location.href = forbiddenUrl;
                    break;
                default:
                    ;
                    break;
            }
        }
    });
}

/*shah alam*/


/*shah alam*/





function TrigerModalViewFile(type, type2) {
    debugger;

    $("#viewModal").modal('show');
    $("#modelTitle").html(type)
    $("#tbodyViewDocuments").empty();
    count = 1;

    for (let e of documentDetails[type2]) {


        let row = `<tr>
        <td>${count}.</td>
        <td>${type}</td>
        <td><a target="_blank" href="${e.filePath}" class="file-link"><span class="ti-files"></span></a></td>
        <td ><button ${IsEditMode ? '' : 'disabled'} onclick="deleteUploadedFiles(this,${e.id},'${type2}')" class="file-link btn-danger btn">Delete</button></td>
    </tr>`;
        $("#tbodyViewDocuments").append(row);
        count++;
    }


}
//Code to View Files Ends  Here
function loadUploadedFiles() {
    data = allData.candidateDocumentList;
    var arr = data.map(e => e.documentName);
    var distinctArr = [... new Set(arr)];
    $(`[id^="span"][id$="View"]:visible`).html('0');
    for (let e of distinctArr) {
        documentDetails[e] = data.filter(e1 => e1.documentName == e);
        $("#span" + e + "View").html(documentDetails[e].length);
    }
}

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
    getDataUndertakingDetails();
});

var allData = [];
var profileObject = [];
var matricObject = [];
var otherEducationObject = [];
var currentMatricObject = [];
var intermediateObject = [];
var itiObject = [];
var apprenticeObject = [];
var diplomaObject = [];
var graduationObject = [];
var postGraduationObject = [];
var otherObject = [];
var undertaking = [];
var undertakingObject = [];
function setEditMode() {

    $(".PersonalDetailseditClaim").css('display', 'block');
    $(".MatriceditClaim").css('display', 'block');
    $(".IntermediateeditClaim").css('display', 'block');
    $(".itiEditClaim").css('display', 'block');
    $(".ApprenticeEditClaim").css('display', 'block');
    $(".DiplomaeditClaim").css('display', 'block');
    $(".GraduationEditClaim").css('display', 'block');
    $(".PostGraduationeditClaim").css('display', 'block');
    $(".tableDataeditClaim").css('display', 'block');
    $(".AddressDetailseditClaim").css('display', 'block');
    $(".CurrentDataeditClaim").css('display', 'block');
    $(".OthersFirsteditClaim").css('display', 'block');
    $("#btn-submit").show();
    $(".submit").show();//undertaking
}
function removeEditMode() {

    $(".PersonalDetailseditClaim").css('display', 'none');
    $(".MatriceditClaim").css('display', 'none');
    $(".IntermediateeditClaim").css('display', 'none');
    $(".itiEditClaim").css('display', 'none');
    $(".ApprenticeEditClaim").css('display', 'none');
    $(".DiplomaeditClaim").css('display', 'none');
    $(".GraduationEditClaim").css('display', 'none');
    $(".PostGraduationeditClaim").css('display', 'none');
    $(".tableDataeditClaim").css('display', 'none');
    $(".AddressDetailseditClaim").css('display', 'none');
    $(".CurrentDataeditClaim").css('display', 'none');
    $(".OthersFirsteditClaim").css('display', 'none');
    $("#btn-submit").hide();
    $(".submit").hide();
}

var iseditableunder;//........Arsh
function loadProfileData() {
    function getFrontEndObject() {
        var arrObjects = [
            // { modelName: '', elementType: 'input', frontFieldName: 'inputApplicationSequenceNo', apiFieldName: 'IsEditMode', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputApplicationSequenceNo', apiFieldName: 'ApplicationSequenceNo', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputRollNo', apiFieldName: 'RollNo', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },
            { modelName: 'CandidateProfile.', elementType: 'input', frontFieldName: 'inputPostName', apiFieldName: 'PostName', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },
            { modelName: 'CandidateProfile.', elementType: 'img', frontFieldName: 'imgProfilePic', apiFieldName: 'ProfilePic', attrName: 'src', getFunction: 'attr', setFunction: 'attr', isReadOnly: true, isDisabled: true, isEditable: false },
            { modelName: '', elementType: 'img', frontFieldName: 'imgProfilePicLayout', apiFieldName: 'ProfilePic', attrName: 'src', getFunction: 'attr', setFunction: 'attr', isReadOnly: true, isDisabled: true, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputApplicantName', apiFieldName: 'Name', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },
            { modelName: 'CandidateProfile.', elementType: 'inputdate', frontFieldName: 'inputApplicantDOB', apiFieldName: 'ApplicantDOB', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },
            { modelName: 'CandidateProfile.', elementType: 'select', frontFieldName: 'selectGender', apiFieldName: 'Gender', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },
            { modelName: 'CandidateProfile.', elementType: 'select', frontFieldName: 'selectMartialStatus', apiFieldName: 'MartialStatus', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: 'CandidateProfile.', elementType: 'select', frontFieldName: 'selectReligion', apiFieldName: 'Religion', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },
            { modelName: 'CandidateProfile.', elementType: 'input', frontFieldName: 'inputFatherName', apiFieldName: 'FatherName', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },
            { modelName: 'CandidateProfile.', elementType: 'input', frontFieldName: 'inputMotherName', apiFieldName: 'MotherName', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },
            { modelName: 'CandidateProfile.', elementType: 'input', frontFieldName: 'inputDesignation', apiFieldName: 'Designation', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },
            { modelName: 'CandidateProfile.', elementType: 'input', frontFieldName: 'inputPanNo', apiFieldName: 'PanNo', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: 'CandidateProfile.', elementType: 'input', frontFieldName: 'inputAdharNo', apiFieldName: 'AdharNo', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            //{ modelName: 'CandidateProfile.', elementType: 'input', frontFieldName: 'inputPassportNo', apiFieldName: 'PassportNo', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },
            { modelName: 'CandidateProfile.', elementType: 'input', frontFieldName: 'inputMarkOfIdentification', apiFieldName: 'MarkOfIdentification', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputMobileNo', apiFieldName: 'MobileNo', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: false, isEditable: true },
            // { modelName: '', elementType: 'input', frontFieldName: 'inputConfirmMobileNo', apiFieldName: 'MobileNo', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputAlternateMobileNo', apiFieldName: 'AlternateMobileNo', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputConfirmAlternateMobileNo', apiFieldName: 'AlternateMobileNo', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            //{ modelName: 'CandidateProfile.', elementType: 'input', frontFieldName: 'inputTelephone', apiFieldName: 'Telephone', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputEmail', apiFieldName: 'EmailId', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: false, isEditable: true },
            //{ modelName: '', elementType: 'input', frontFieldName: 'inputConfirmEmail', apiFieldName: 'EmailId', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputAlternateEmail', apiFieldName: 'AlternateEmailId', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputConfirmAlternateEmail', apiFieldName: 'AlternateEmailId', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: 'uploadDocument.', elementType: 'upload', frontFieldName: 'BirthCertificate', apiFieldName: 'BirthCertificate', attrName: 'src', getFunction: 'src', setFunction: 'src', isReadOnly: true, isDisabled: true, isEditable: false },
            { modelName: 'uploadDocument.', elementType: 'upload', frontFieldName: 'AadhaarCard', apiFieldName: 'AadhaarCard', attrName: 'src', getFunction: 'src', setFunction: 'src', isReadOnly: true, isDisabled: true, isEditable: false },
            { modelName: 'uploadDocument.', elementType: 'upload', frontFieldName: 'PANCard', apiFieldName: 'PANCard', attrName: 'src', getFunction: 'src', setFunction: 'src', isReadOnly: true, isDisabled: true, isEditable: false },
            { modelName: 'uploadDocument.', elementType: 'upload', frontFieldName: 'AddressProof', apiFieldName: 'AddressProof', attrName: 'src', getFunction: 'src', setFunction: 'src', isReadOnly: false, isDisabled: false, isEditable: false },
            //{ modelName: 'uploadDocument.', elementType: 'upload', frontFieldName: 'PersonalDetailsPassport', apiFieldName: 'PersonalDetailsPassport', attrName: 'src', getFunction: 'src', setFunction: 'src', isReadOnly: true, isDisabled: true, isEditable: false },
            { modelName: 'uploadDocument.', elementType: 'upload', frontFieldName: 'PersonalDetailsOther', apiFieldName: 'PersonalDetailsOther', attrName: 'src', getFunction: 'src', setFunction: 'src', isReadOnly: true, isDisabled: true, isEditable: false },
            { modelName: 'uploadDocument.', elementType: 'upload', frontFieldName: 'CandidateFatherNameProof', apiFieldName: 'CandidateFatherNameProof', attrName: 'src', getFunction: 'src', setFunction: 'src', isReadOnly: true, isDisabled: true, isEditable: false },
            { modelName: 'uploadDocument.', elementType: 'upload', frontFieldName: 'UploadSingnature', apiFieldName: 'UploadSingnature', attrName: 'src', getFunction: 'src', setFunction: 'src', isReadOnly: true, isDisabled: true, isEditable: false },
            { modelName: 'CandidateProfile.', elementType: 'uploadSingle', frontFieldName: 'fileCandidatePic', apiFieldName: 'ProfilePic', attrName: 'src', getFunction: 'src', setFunction: 'src', isReadOnly: true, isDisabled: true, isEditable: false },

            { modelName: 'uploadDocument.', elementType: 'view', frontFieldName: 'BirthCertificate', apiFieldName: 'BirthCertificate', attrName: 'src', getFunction: 'src', setFunction: 'src', isReadOnly: true, isDisabled: true, isEditable: false },
            { modelName: 'uploadDocument.', elementType: 'view', frontFieldName: 'AadhaarCard', apiFieldName: 'AadhaarCard', attrName: 'src', getFunction: 'src', setFunction: 'src', isReadOnly: true, isDisabled: true, isEditable: false },
            { modelName: 'uploadDocument.', elementType: 'view', frontFieldName: 'PANCard', apiFieldName: 'PANCard', attrName: 'src', getFunction: 'src', setFunction: 'src', isReadOnly: true, isDisabled: true, isEditable: false },
            { modelName: 'uploadDocument.', elementType: 'view', frontFieldName: 'AddressProof', apiFieldName: 'AddressProof', attrName: 'src', getFunction: 'src', setFunction: 'src', isReadOnly: true, isDisabled: true, isEditable: false },
            { modelName: 'uploadDocument.', elementType: 'view', frontFieldName: 'PersonalDetailsPassport', apiFieldName: 'PersonalDetailsPassport', attrName: 'src', getFunction: 'src', setFunction: 'src', isReadOnly: true, isDisabled: true, isEditable: false },
            { modelName: 'uploadDocument.', elementType: 'view', frontFieldName: 'PersonalDetailsOther', apiFieldName: 'PersonalDetailsOther', attrName: 'src', getFunction: 'src', setFunction: 'src', isReadOnly: true, isDisabled: true, isEditable: false },
            { modelName: 'uploadDocument.', elementType: 'view', frontFieldName: 'UploadSingnature', apiFieldName: 'UploadSingnature', attrName: 'src', getFunction: 'src', setFunction: 'src', isReadOnly: true, isDisabled: true, isEditable: false },
            { modelName: 'uploadDocument.', elementType: 'view', frontFieldName: 'CandidateFatherNameProof', apiFieldName: 'CandidateFatherNameProof', attrName: 'src', getFunction: 'src', setFunction: 'src', isReadOnly: true, isDisabled: true, isEditable: false },



        ];
        profileObject = arrObjects;
        return arrObjects;

    }
    if (allData.length != 0) {
        //alert(allData.candidate.isEditMode);

        var objApiData = {};
        for (let e in allData.candidate) {
            objApiData[capitalizeFirstLetter(e)] = allData.candidate[e];
        }
        for (let e in allData.candidateProfile) {
            objApiData[capitalizeFirstLetter(e)] = allData.candidateProfile[e];
        }

        //Arsh----------
        iseditableunder = objApiData.IsEditModeDeclaration;
        //iseditableunder = false;
        UndertakingHideShow();
        //------------

        FillApiDataIntoFrontEnd(getFrontEndObject(), objApiData, 1);
    }

    IsEditMode = allData.candidate.isEditMode;
    //IsEditMode = true;
    if (IsEditMode) {
        setEditMode();
    }
    else {
        removeEditMode();
    }
}

//Arsh-------
function UndertakingHideShow() {
    //iseditableunder = true;
    if (iseditableunder) {

        $('#tabUndertaking').show();

    }
    else {

        $('#tabUndertaking').hide();
    }
}
//Arsh---------

function loadMatricUploadedData() {
    function getFrontEndObject() {
        var arrObjects = [
            { elementType: 'span', frontFieldName: 'inputMatricBoardName', apiFieldName: 'MatricBoardName', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },
            { elementType: 'span', frontFieldName: 'inputMatricInstituteName', apiFieldName: 'MatricInstituteName', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },
            { elementType: 'span', frontFieldName: 'inputMatricEvaluationType', apiFieldName: 'MatricEvaluationType', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },
            { elementType: 'span', frontFieldName: 'inputMatricMaximumMarks', apiFieldName: 'MatricMaximumMarks', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },
            { elementType: 'span', frontFieldName: 'inputMatricObtainedMarks', apiFieldName: 'MatricObtainedMarks', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },
            { elementType: 'span', frontFieldName: 'inputMatricPercentage', apiFieldName: 'MatricPercentage', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },
            { elementType: 'span', frontFieldName: 'inputMatricTotalCgpa', apiFieldName: 'MatricTotalCgpa', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },
            { elementType: 'span', frontFieldName: 'inputMatricCgpaMultiplyingFactor', apiFieldName: 'MatricCgpaMultiplyingFactor', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },
            { elementType: 'span', frontFieldName: 'inputMatricCgpaObtained', apiFieldName: 'MatricCgpaObtained', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },
            { elementType: 'span', frontFieldName: 'inputMatricCgpaCalculatedPercent', apiFieldName: 'MatricCgpaCalculatedPercent', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },
            { elementType: 'span', frontFieldName: 'inputMatricGrade', apiFieldName: 'MatricGrade', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },
            { elementType: 'span', frontFieldName: 'inputMatricYearOfPassing', apiFieldName: 'MatricYearOfPassing', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },


        ];
        matricObject = arrObjects;
        return arrObjects;

    }
    if (allData.length != 0) {
        var objApiData = {};

        for (let e in allData.matricDetailUploaded) {
            objApiData[capitalizeFirstLetter(e)] = allData.matricDetailUploaded[e];
        }

        FillApiDataIntoFrontEnd(getFrontEndObject(), objApiData, 1);
    }
}
function loadOtherEducationDetailUploaded() {
    function getFrontEndObject() {

        var arrObjects = [
            { elementType: 'span', frontFieldName: 'inputThreeYearsDiplomaUniversityName', apiFieldName: 'OtherDetailDiplomaUniversityName', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },
            { elementType: 'span', frontFieldName: 'inputThreeYearsDiplomaInstituteNam', apiFieldName: 'InstituteName', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },
            { elementType: 'span', frontFieldName: 'inputThreeYearsDiplomaEvaluationType', apiFieldName: 'EvaluationType', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },
            { elementType: 'span', frontFieldName: 'inputThreeYearsDiplomaQualificationName', apiFieldName: 'QualificationName', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },
            { elementType: 'span', frontFieldName: 'inputThreeYearsDiplomaOtherDegreeName', apiFieldName: 'OtherDegreeName', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },
            { elementType: 'span', frontFieldName: 'inputThreeYearsDiplomaSpecialization', apiFieldName: 'Specialization', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },
            { elementType: 'span', frontFieldName: 'inputThreeYearsDiplomaOtherSubject', apiFieldName: 'OtherSubject', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },
            { elementType: 'span', frontFieldName: 'inputThreeYearsDiplomaMaximumMarks', apiFieldName: 'MaximumMarks', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },
            { elementType: 'span', frontFieldName: 'inputThreeYearsDiplomaObtainedMarks', apiFieldName: 'ObtainedMarks', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },
            { elementType: 'span', frontFieldName: 'inputThreeYearsDiplomaPercentage', apiFieldName: 'Percentage', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },
            { elementType: 'span', frontFieldName: 'inputThreeYearsDiplomaTotalCgpa', apiFieldName: 'TotalCgpa', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },
            { elementType: 'span', frontFieldName: 'inputThreeYearsDiplomaCgpaMultiplyingFactor', apiFieldName: 'CgpaMultiplyingFactor', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },
            { elementType: 'span', frontFieldName: 'inputThreeYearsDiplomaCgpaObtained', apiFieldName: 'CgpaObtained', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },
            { elementType: 'span', frontFieldName: 'inputThreeYearsDiplomaCgpaCalculatedPercent', apiFieldName: 'CalculatedPercent', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },
            { elementType: 'span', frontFieldName: 'inputThreeYearsDiplomaGrade', apiFieldName: 'Grade', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },
            { elementType: 'span', frontFieldName: 'inputThreeYearsDiplomaYearOfPassing', apiFieldName: 'YearOfPassing', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },

        ];
        otherEducationObject = arrObjects;
        return arrObjects;

    }
    if (allData.length != 0) {
        var objApiData = {};

        $("#spanExedata").html(allData.otherEducationDetailUploaded.qualificationName)
        for (let e in allData.otherEducationDetailUploaded) {
            objApiData[capitalizeFirstLetter(e)] = allData.otherEducationDetailUploaded[e];
        }

        FillApiDataIntoFrontEnd(getFrontEndObject(), objApiData, 1);
    }
}

function matricPresentInObject(obj) {


    // Check if any value in the object (except the key 'Id') is not null or empty
    //const hasValue = Object.keys(obj).filter(key => key !== 'Id' && key !== "CreatedDate" && key !== 'CreatedBy' && key !== "CandidateId" && key !== 'IsActive').some(key => obj[key] != null && obj[key].length > 0);
    ////$(".open1").show();
    //let value = obj.MatricSecBoardName
    //if (value !== null || value !== undefined || value !== "") {
    //    console.log(value, "true")
    //} else {
    //    console.log(value, "false")
    //}

    // Perform actions if any value (except 'Id') satisfies the condition
    if (obj.MatricSecBoardName != null && obj.MatricSecBoardName != undefined && obj.MatricSecBoardName != "" && obj.MatricSecInstituteName != null && obj.MatricSecInstituteName != undefined && obj.MatricSecInstituteName != "") {
        $("#10thCheckBox").prop('checked', true);
        $('#matricDetailsSec').css('display', 'block');
        $('#divMetricClaim').css('display', 'block');
        $(".open1").show();
        if ($('#divMetricClaim').css('display', 'block')) {
            $("#matricDetailsSec .m1").addClass('fa-square-minus').removeClass('fa-square-plus');

        }
        else {
            $("#matricDetailsSec .m1").removeClass('fa-square-minus').addClass('fa-square-plus');
        }
    } else {
        $("#10thCheckBox").prop('checked', false);
        $('#matricDetailsSec').css('display', 'none');
        $('#divMetricClaim').css('display', 'none');
        $(".open1").hide(); // Why this commented out?
    }

    //$('#matricDetailsSec').css('display', 'block');
    //$('#divMetricClaim').css('display', 'block');
}
function loadMatricDetail() {

    function getFrontEndObject() {
        var arrObjects = [
            { modelName: '', elementType: 'input', frontFieldName: 'inputMatricSecBoardName', apiFieldName: 'MatricSecBoardName', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputMatricSecInstituteName', apiFieldName: 'MatricSecInstituteName', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'select', frontFieldName: 'selectMatricSecCourseType', apiFieldName: 'MatricSecCourseType', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'select', frontFieldName: 'inputMatricSecEvaluationType', apiFieldName: 'MatricSecEvaluationType', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputMatricSecMaximumMarks', apiFieldName: 'MatricSecMaximumMarks', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputMatricSecObtainedMarks', apiFieldName: 'MatricSecObtainedMarks', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputMatricSecPercentage', apiFieldName: 'MatricSecPercentage', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputMatricSecTotalCgpa', apiFieldName: 'MatricSecTotalCgpa', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputMatricSecCgpaMultiplyingFactor', apiFieldName: 'MatricSecCgpaMultiplyingFactor', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputMatricSecCgpaObtained', apiFieldName: 'MatricSecCgpaObtained', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputMatricSecCgpaCalculatedPercent', apiFieldName: 'MatricSecCgpaCalculatedPercent', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputMatricSecGrade', apiFieldName: 'MatricSecGrade', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputMatricSecYearOfPassing', apiFieldName: 'MatricSecYearOfPassing', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: 'uploadDocument.', elementType: 'upload', frontFieldName: 'MatricDegree', apiFieldName: 'MatricDegree', attrName: 'src', getFunction: 'src', setFunction: 'src', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: 'uploadDocument.', elementType: 'upload', frontFieldName: 'MatricMarksheet', apiFieldName: 'MatricMarksheet', attrName: 'src', getFunction: 'src', setFunction: 'src', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: 'uploadDocument.', elementType: 'upload', frontFieldName: 'MatricOther', apiFieldName: 'MatricOther', attrName: 'src', getFunction: 'src', setFunction: 'src', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: 'uploadDocument.', elementType: 'view', frontFieldName: 'MatricDegree', apiFieldName: 'MatricDegree', attrName: 'src', getFunction: 'src', setFunction: 'src', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: 'uploadDocument.', elementType: 'view', frontFieldName: 'MatricMarksheet', apiFieldName: 'MatricMarksheet', attrName: 'src', getFunction: 'src', setFunction: 'src', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: 'uploadDocument.', elementType: 'view', frontFieldName: 'MatricOther', apiFieldName: 'MatricOther', attrName: 'src', getFunction: 'src', setFunction: 'src', isReadOnly: false, isDisabled: false, isEditable: false },

        ];
        currentMatricObject = arrObjects;
        return arrObjects;

    }
    if (allData.length != 0) {
        var objApiData = {};

        for (let e in allData.matricDetail) {
            objApiData[capitalizeFirstLetter(e)] = allData.matricDetail[e];
        }

        FillApiDataIntoFrontEnd(getFrontEndObject(), objApiData, 1);
        matricPresentInObject(objApiData);

    }
}

function intermediatePresentInObject(obj) {

    // Check if any value in the object (except the key 'Id') is not null or empty
    //const hasValue = Object.keys(obj).filter(key => key !== 'Id' && key !== "CreatedDate" && key !== 'CreatedBy' && key !== "CandidateId" && key !== 'IsActive').some(key => obj[key] != null && obj[key].length > 0);

    // Perform actions if any value (except 'Id') satisfies the condition
    if (obj.IntermediateBoardName != null && obj.IntermediateBoardName != undefined && obj.IntermediateBoardName != "" && obj.IntermediateInstituteName != null && obj.IntermediateInstituteName != undefined && obj.IntermediateInstituteName != "") {
        $("#intermediateCheckBox").prop('checked', true);
        $('#intermediateDetails').css('display', 'block');
        $('#divIntermediateClaim').css('display', 'block');
        $(".open2").show();
        if ($('#divIntermediateClaim').css('display', 'block')) {
            $("#intermediateDetails .m2").addClass('fa-square-minus').removeClass('fa-square-plus');

        }
        else {
            $("#intermediateDetails .m2").removeClass('fa-square-minus').addClass('fa-square-plus');
        }

    } else {

        $("#intermediateCheckBox").prop('checked', false);
        $('#intermediateDetails').css('display', 'none');
        $('#divIntermediateClaim').css('display', 'none');
        $(".open2").hide();

    }
    //$('#intermediateDetails').css('display', 'block');
    //$('#divIntermediateClaim').css('display', 'block');
}
function loadIntermediateDetail() {
    function getFrontEndObject() {

        var arrObjects = [
            { modelName: '', elementType: 'input', frontFieldName: 'inputIntermediateBoardName', apiFieldName: 'IntermediateBoardName', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputIntermediateInstituteName', apiFieldName: 'IntermediateInstituteName', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'select', frontFieldName: 'selectIntermediateCourseType', apiFieldName: 'IntermediateCourseType', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputIntermediateSubjects', apiFieldName: 'IntermediateSubjects', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputIntermediateOtherSubjects', apiFieldName: 'IntermediateOtherSubjects', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'select', frontFieldName: 'inputIntermediateEvaluationType', apiFieldName: 'IntermediateEvaluationType', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputIntermediateMaximumMarks', apiFieldName: 'IntermediateMaximumMarks', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputIntermediateObtainedMarks', apiFieldName: 'IntermediateObtainedMarks', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputIntermediatePercentage', apiFieldName: 'IntermediatePercentage', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputIntermediateTotalCgpa', apiFieldName: 'IntermediateTotalCgpa', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputIntermediateCgpaMultiplyingFactor', apiFieldName: 'IntermediateCgpaMultiplyingFactor', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputIntermediateCgpaObtained', apiFieldName: 'IntermediateCgpaObtained', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputIntermediateCgpaCalculatedPercent', apiFieldName: 'IntermediateCgpaCalculatedPercent', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputIntermediateGrade', apiFieldName: 'IntermediateGrade', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputIntermediateYearOfPassing', apiFieldName: 'IntermediateYearOfPassing', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: 'uploadDocument.', elementType: 'upload', frontFieldName: 'IntermediateDegree', apiFieldName: 'IntermediateDegree', attrName: 'src', getFunction: 'src', setFunction: 'src', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: 'uploadDocument.', elementType: 'upload', frontFieldName: 'IntermediateMarksheet', apiFieldName: 'IntermediateMarksheet', attrName: 'src', getFunction: 'src', setFunction: 'src', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: 'uploadDocument.', elementType: 'upload', frontFieldName: 'IntermediateOthers', apiFieldName: 'IntermediateOthers', attrName: 'src', getFunction: 'src', setFunction: 'src', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: 'uploadDocument.', elementType: 'view', frontFieldName: 'IntermediateDegree', apiFieldName: 'IntermediateDegree', attrName: 'src', getFunction: 'src', setFunction: 'src', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: 'uploadDocument.', elementType: 'view', frontFieldName: 'IntermediateMarksheet', apiFieldName: 'IntermediateMarksheet', attrName: 'src', getFunction: 'src', setFunction: 'src', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: 'uploadDocument.', elementType: 'view', frontFieldName: 'IntermediateOthers', apiFieldName: 'IntermediateOthers', attrName: 'src', getFunction: 'src', setFunction: 'src', isReadOnly: false, isDisabled: false, isEditable: false },

        ];
        intermediateObject = arrObjects;
        return arrObjects;

    }
    if (allData.length != 0) {
        var objApiData = {};

        for (let e in allData.intermediateDetail) {
            objApiData[capitalizeFirstLetter(e)] = allData.intermediateDetail[e];
        }

        FillApiDataIntoFrontEnd(getFrontEndObject(), objApiData, 1);

        intermediatePresentInObject(objApiData)
    }
}
function iTiPresentInObject(obj) {

    // Check if any value in the object (except the key 'Id') is not null or empty
    //const hasValue = Object.keys(obj).filter(key => key !== 'Id' && key !== "CreatedDate" && key !== 'CreatedBy' && key !== "CandidateId" && key !== 'IsActive').some(key => obj[key] != null && obj[key].length > 0);
    //console.log(obj)



    // Perform actions if any value (except 'Id') satisfies the condition
    if (obj.ItiQualificationName != null && obj.ItiQualificationName != undefined && obj.ItiQualificationName != "") {
        $("#iTiCheckBox").prop('checked', true);
        $('#itiDetails').css('display', 'block');
        $('#divitiDetails').css('display', 'block');
        $(".open3").show();

    } else {

        $("#iTiCheckBox").prop('checked', false);
        $('#itiDetails').css('display', 'none');
        $('#divitiDetails').css('display', 'none');
        $(".open3").hide();

    }
    //$(".open3").show();
    //$('#itiDetails').css('display', 'block');
    //$('#divitiDetails').css('display', 'block');
}
function loadItiDetail() {
    function getFrontEndObject() {

        var arrObjects = [
            { modelName: '', elementType: 'input', frontFieldName: 'inputItiBoardName', apiFieldName: 'ItiBoardName', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputItiInstituteName', apiFieldName: 'ItiInstituteName', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'select', frontFieldName: 'selectItiCourseType', apiFieldName: 'ItiCourseType', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputItiQualificationName', apiFieldName: 'ItiQualificationName', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputItiOtherDegreeName', apiFieldName: 'ItiOtherDegreeName', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputItiSpecialization', apiFieldName: 'ItiSpecialization', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputItiOtherSubject', apiFieldName: 'ItiOtherSubject', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'select', frontFieldName: 'inputItiEvaluationType', apiFieldName: 'ItiEvaluationType', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputItiMaximumMarks', apiFieldName: 'ItiMaximumMarks', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputItiObtainedMarks', apiFieldName: 'ItiObtainedMarks', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputItiPercentage', apiFieldName: 'ItiPercentage', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputItiTotalCgpa', apiFieldName: 'ItiTotalCgpa', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputItiCgpaMultiplyingFactor', apiFieldName: 'ItiCgpaMultiplyingFactor', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputItiCgpaObtained', apiFieldName: 'ItiCgpaObtained', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputItiCgpaCalculatedPercent', apiFieldName: 'ItiCgpaCalculatedPercent', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false }, isEditable = false,
            { modelName: '', elementType: 'input', frontFieldName: 'inputItiGrade', apiFieldName: 'ItiGrade', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputItiYearOfPassing', apiFieldName: 'ItiYearOfPassing', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: 'uploadDocument.', elementType: 'upload', frontFieldName: 'ItiDegree', apiFieldName: 'ItiDegree', attrName: 'src', getFunction: 'src', setFunction: 'src', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: 'uploadDocument.', elementType: 'upload', frontFieldName: 'ItiMarksheet', apiFieldName: 'ItiMarksheet', attrName: 'src', getFunction: 'src', setFunction: 'src', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: 'uploadDocument.', elementType: 'upload', frontFieldName: 'ItiOthers', apiFieldName: 'ItiOthers', attrName: 'src', getFunction: 'src', setFunction: 'src', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: 'uploadDocument.', elementType: 'view', frontFieldName: 'ItiDegree', apiFieldName: 'ItiDegree', attrName: 'src', getFunction: 'src', setFunction: 'src', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: 'uploadDocument.', elementType: 'view', frontFieldName: 'ItiMarksheet', apiFieldName: 'ItiMarksheet', attrName: 'src', getFunction: 'src', setFunction: 'src', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: 'uploadDocument.', elementType: 'view', frontFieldName: 'ItiOthers', apiFieldName: 'ItiOthers', attrName: 'src', getFunction: 'src', setFunction: 'src', isReadOnly: false, isDisabled: false, isEditable: false },

        ];
        itiObject = arrObjects;
        return arrObjects;

    }
    if (allData.length != 0) {
        var objApiData = {};

        for (let e in allData.itiDetail) {
            objApiData[capitalizeFirstLetter(e)] = allData.itiDetail[e];
        }

        FillApiDataIntoFrontEnd(getFrontEndObject(), objApiData, 1);
        iTiPresentInObject(objApiData)
    }
}

function apprenticePresentInObject(obj) {

    // Check if any value in the object (except the key 'Id') is not null or empty
    //const hasValue = Object.keys(obj).filter(key => key !== 'Id' && key !== "CreatedDate" && key !== 'CreatedBy' && key !== "CandidateId" && key !== 'IsActive').some(key => obj[key] != null && obj[key].length > 0);
    //console.log(obj)



    // Perform actions if any value (except 'Id') satisfies the condition
    //$('#ApprenticeDetails').css('display', 'block');
    //$('#divApprenticeDetails').css('display', 'block');
    if (obj.ApprenticeQualificationName != null && obj.ApprenticeQualificationName != undefined && obj.ApprenticeQualificationName != "") {
        $("#apprenticeCheckBox").prop('checked', true);
        $('#ApprenticeDetails').css('display', 'block');
        $('#divApprenticeDetails').css('display', 'block');
        $(".open4").show();

    } else {

        $("#apprenticeCheckBox").prop('checked', false);
        $('#ApprenticeDetails').css('display', 'none');
        $('#divApprenticeDetails').css('display', 'none');
        $(".open4").hide();

    }
    //$(".open4").show();
    //$('#ApprenticeDetails').css('display', 'none');
    //$('#divApprenticeDetails').css('display', 'none');
}
function loadApprenticeDetail() {
    function getFrontEndObject() {
        var arrObjects = [
            { modelName: '', elementType: 'input', frontFieldName: 'inputApprenticeBoardName', apiFieldName: 'ApprenticeBoardName', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputApprenticeInstituteName', apiFieldName: 'ApprenticeInstituteName', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'select', frontFieldName: 'selectApprenticeCourseType', apiFieldName: 'ApprenticeCourseType', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputApprenticeQualificationName', apiFieldName: 'ApprenticeQualificationName', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputApprenticeOtherDegreeName', apiFieldName: 'ApprenticeOtherDegreeName', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputApprenticeSpecialization', apiFieldName: 'ApprenticeSpecialization', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputApprenticeOtherSubject', apiFieldName: 'ApprenticeOtherSubject', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'select', frontFieldName: 'inputApprenticeEvaluationType', apiFieldName: 'ApprenticeEvaluationType', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputApprenticeMaximumMarks', apiFieldName: 'ApprenticeMaximumMarks', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputApprenticeObtainedMarks', apiFieldName: 'ApprenticeObtainedMarks', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputApprenticePercentage', apiFieldName: 'ApprenticePercentage', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputApprenticeTotalCgpa', apiFieldName: 'ApprenticeTotalCgpa', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputApprenticeCgpaMultiplyingFactor', apiFieldName: 'ApprenticeCgpaMultiplyingFactor', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputApprenticeCgpaObtained', apiFieldName: 'ApprenticeCgpaObtained', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputApprenticeCgpaCalculatedPercent', apiFieldName: 'ApprenticeCgpaCalculatedPercent', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputApprenticeGrade', apiFieldName: 'ApprenticeGrade', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputApprenticeYearOfPassing', apiFieldName: 'ApprenticeYearOfPassing', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: 'uploadDocument.', elementType: 'upload', frontFieldName: 'ApprenticeDegree', apiFieldName: 'ApprenticeDegree', attrName: 'src', getFunction: 'src', setFunction: 'src', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: 'uploadDocument.', elementType: 'upload', frontFieldName: 'ApprenticeMarksheet', apiFieldName: 'ApprenticeMarksheet', attrName: 'src', getFunction: 'src', setFunction: 'src', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: 'uploadDocument.', elementType: 'upload', frontFieldName: 'ApprenticeOthers', apiFieldName: 'ApprenticeOthers', attrName: 'src', getFunction: 'src', setFunction: 'src', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: 'uploadDocument.', elementType: 'view', frontFieldName: 'ApprenticeDegree', apiFieldName: 'ApprenticeDegree', attrName: 'src', getFunction: 'src', setFunction: 'src', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: 'uploadDocument.', elementType: 'view', frontFieldName: 'ApprenticeMarksheet', apiFieldName: 'ApprenticeMarksheet', attrName: 'src', getFunction: 'src', setFunction: 'src', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: 'uploadDocument.', elementType: 'view', frontFieldName: 'ApprenticeOthers', apiFieldName: 'ApprenticeOthers', attrName: 'src', getFunction: 'src', setFunction: 'src', isReadOnly: false, isDisabled: false, isEditable: false },

        ];
        apprenticeObject = arrObjects;
        return arrObjects;

    }
    if (allData.length != 0) {
        var objApiData = {};

        for (let e in allData.apprenticeDetail) {
            objApiData[capitalizeFirstLetter(e)] = allData.apprenticeDetail[e];
        }

        FillApiDataIntoFrontEnd(getFrontEndObject(), objApiData, 1);
        apprenticePresentInObject(objApiData)
    }
}

function diplomaPresentInObject(obj) {

    // Check if any value in the object (except the key 'Id') is not null or empty
    //const hasValue = Object.keys(obj).filter(key => key !== 'Id' && key !== "CreatedDate" && key !== 'CreatedBy' && key !== "CandidateId" && key !== 'IsActive').some(key => obj[key] != null && obj[key].length > 0);



    // Perform actions if any value (except 'Id') satisfies the condition
    if (obj.DiplomaQualificationName != null && obj.DiplomaQualificationName != undefined && obj.DiplomaQualificationName != "") {
        $("#diplomaCheckBox").prop('checked', true);
        $('#diplomaDetails').css('display', 'block');
        $('#divdiplomaDetails').css('display', 'block');
        $(".open5").show();

    } else {

        $("#diplomaCheckBox").prop('checked', false);
        $('#diplomaDetails').css('display', 'none');
        $('#divdiplomaDetails').css('display', 'none');
        $(".open5").hide();

    }
    //$('#diplomaDetails').css('display', 'block');
    //$('#divdiplomaDetails').css('display', 'block');
    //$(".open5").show();
}
function loadDiplomaDetail() {
    function getFrontEndObject() {
        var arrObjects = [
            { modelName: '', elementType: 'input', frontFieldName: 'inputDiplomaUniversityName', apiFieldName: 'DiplomaUniversityName', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputDiplomaInstituteName', apiFieldName: 'DiplomaInstituteName', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'select', frontFieldName: 'selectDiplomaCourseType', apiFieldName: 'DiplomaCourseType', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputDiplomaQualificationName', apiFieldName: 'DiplomaQualificationName', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputDiplomaOtherDegreeName', apiFieldName: 'DiplomaOtherDegreeName', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputDiplomaSpecialization', apiFieldName: 'DiplomaSpecialization', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputDiplomaOtherSubject', apiFieldName: 'DiplomaOtherSubject', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'select', frontFieldName: 'inputDiplomaEvaluationType', apiFieldName: 'DiplomaEvaluationType', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputDiplomaMaximumMarks', apiFieldName: 'DiplomaMaximumMarks', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputDiplomaObtainedMarks', apiFieldName: 'DiplomaObtainedMarks', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputDiplomaPercentage', apiFieldName: 'DiplomaPercentage', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputDiplomaTotalCgpa', apiFieldName: 'DiplomaTotalCgpa', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputDiplomaCgpaMultiplyingFactor', apiFieldName: 'DiplomaCgpaMultiplyingFactor', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputDiplomaCgpaObtained', apiFieldName: 'DiplomaCgpaObtained', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputDiplomaCgpaCalculatedPercent', apiFieldName: 'DiplomaCgpaCalculatedPercent', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputDiplomaGrade', apiFieldName: 'DiplomaGrade', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputDiplomaYearOfPassing', apiFieldName: 'DiplomaYearOfPassing', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: 'uploadDocument.', elementType: 'upload', frontFieldName: 'DiplomaDegree', apiFieldName: 'DiplomaDegree', attrName: 'src', getFunction: 'src', setFunction: 'src', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: 'uploadDocument.', elementType: 'upload', frontFieldName: 'DiplomaMarksheet', apiFieldName: 'DiplomaMarksheet', attrName: 'src', getFunction: 'src', setFunction: 'src', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: 'uploadDocument.', elementType: 'upload', frontFieldName: 'DiplomaOthers', apiFieldName: 'DiplomaOthers', attrName: 'src', getFunction: 'src', setFunction: 'src', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: 'uploadDocument.', elementType: 'view', frontFieldName: 'DiplomaDegree', apiFieldName: 'DiplomaDegree', attrName: 'src', getFunction: 'src', setFunction: 'src', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: 'uploadDocument.', elementType: 'view', frontFieldName: 'DiplomaMarksheet', apiFieldName: 'DiplomaMarksheet', attrName: 'src', getFunction: 'src', setFunction: 'src', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: 'uploadDocument.', elementType: 'view', frontFieldName: 'DiplomaOthers', apiFieldName: 'DiplomaOthers', attrName: 'src', getFunction: 'src', setFunction: 'src', isReadOnly: false, isDisabled: false, isEditable: false },

        ];

        diplomaObject = arrObjects;
        return arrObjects;

    }
    if (allData.length != 0) {
        var objApiData = {};

        for (let e in allData.diplomaDetail) {
            objApiData[capitalizeFirstLetter(e)] = allData.diplomaDetail[e];
        }

        FillApiDataIntoFrontEnd(getFrontEndObject(), objApiData, 1);
        diplomaPresentInObject(objApiData);
    }
}

function graduationPresentInObject(obj) {

    // Check if any value in the object (except the key 'Id') is not null or empty
    //const hasValue = Object.keys(obj).filter(key => key !== 'Id' && key !== "CreatedDate" && key !== 'CreatedBy' && key !== "CandidateId" && key !== 'IsActive').some(key => obj[key] != null && obj[key].length > 0);



    // Perform actions if any value (except 'Id') satisfies the condition
    if (obj.GraduationQualificationName != null && obj.GraduationQualificationName != undefined && obj.GraduationQualificationName != "") {
        $("#graduationCheckBox").prop('checked', true);
        $('#graduationDetailsSec').css('display', 'block');
        $('#divGrduationDetails').css('display', 'block');
        $(".open6").show();

    } else {

        $("#graduationCheckBox").prop('checked', false);
        $('#graduationDetailsSec').css('display', 'none');
        $('#divGrduationDetails').css('display', 'none');
        $(".open6").hide();

    }
    //$('#graduationDetailsSec').css('display', 'block');
    //$('#divGrduationDetails').css('display', 'block');
    //$(".open6").show();
}
function loadGraduationDetail() {
    function getFrontEndObject() {
        var arrObjects = [
            { modelName: '', elementType: 'input', frontFieldName: 'inputGrduationUniversityName', apiFieldName: 'GraduationUniversityName', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputGrduationInstituteName', apiFieldName: 'GraduationInstituteName', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'select', frontFieldName: 'selectGrduationCourseType', apiFieldName: 'GraduationCourseType', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputGrduationQualificationName', apiFieldName: 'GraduationQualificationName', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputGrduationOtherDegreeName', apiFieldName: 'GraduationOtherDegreeName', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputGrduationSpecialization', apiFieldName: 'GraduationSpecialization', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputGrduationOtherSubject', apiFieldName: 'GraduationOtherSubject', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false },
            { modelName: '', elementType: 'select', frontFieldName: 'inputGrduationEvaluationType', apiFieldName: 'GraduationEvaluationType', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputGrduationMaximumMarks', apiFieldName: 'GraduationMaximumMarks', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputGrduationObtainedMarks', apiFieldName: 'GraduationObtainedMarks', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputGrduationPercentage', apiFieldName: 'GraduationPercentage', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputGrduationTotalCgpa', apiFieldName: 'GraduationTotalCgpa', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputGrduationCgpaMultiplyingFactor', apiFieldName: 'GraduationCgpaMultiplyingFactor', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputGrduationCgpaObtained', apiFieldName: 'GraduationCgpaObtained', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputGrduationCgpaCalculatedPercent', apiFieldName: 'GraduationCgpaCalculatedPercent', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputGrduationGrade', apiFieldName: 'GraduationGrade', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputGrduationYearOfPassing', apiFieldName: 'GraduationYearOfPassing', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: 'uploadDocument.', elementType: 'upload', frontFieldName: 'GraduationDegree', apiFieldName: 'GraduationDegree', attrName: 'src', getFunction: 'src', setFunction: 'src', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: 'uploadDocument.', elementType: 'upload', frontFieldName: 'GraduationMarksheet', apiFieldName: 'GraduationMarksheet', attrName: 'src', getFunction: 'src', setFunction: 'src', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: 'uploadDocument.', elementType: 'upload', frontFieldName: 'GraduationOthers', apiFieldName: 'GraduationOthers', attrName: 'src', getFunction: 'src', setFunction: 'src', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: 'uploadDocument.', elementType: 'view', frontFieldName: 'GraduationDegree', apiFieldName: 'GraduationDegree', attrName: 'src', getFunction: 'src', setFunction: 'src', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: 'uploadDocument.', elementType: 'view', frontFieldName: 'GraduationMarksheet', apiFieldName: 'GraduationMarksheet', attrName: 'src', getFunction: 'src', setFunction: 'src', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: 'uploadDocument.', elementType: 'view', frontFieldName: 'GraduationOthers', apiFieldName: 'GraduationOthers', attrName: 'src', getFunction: 'src', setFunction: 'src', isReadOnly: false, isDisabled: false, isEditable: false },

        ];
        graduationObject = arrObjects;
        return arrObjects;

    }
    if (allData.length != 0) {
        var objApiData = {};

        for (let e in allData.graduationDetail) {
            objApiData[capitalizeFirstLetter(e)] = allData.graduationDetail[e];
        }

        FillApiDataIntoFrontEnd(getFrontEndObject(), objApiData, 1);
        graduationPresentInObject(objApiData)
    }
}

function postGraduationPresentInObject(obj) {

    // Check if any value in the object (except the key 'Id') is not null or empty
    //const hasValue = Object.keys(obj).filter(key => key !== 'Id' && key !== "CreatedDate" && key !== 'CreatedBy' && key !== "CandidateId" && key !== 'IsActive').some(key => obj[key] != null && obj[key].length > 0);



    // Perform actions if any value (except 'Id') satisfies the condition
    if (obj.PostGraduationQualificationName != null && obj.PostGraduationQualificationName != undefined && obj.PostGraduationQualificationName != "") {
        $("#postGraduationCheckBox").prop('checked', true);
        $('#postGraduationDetails').css('display', 'block');
        $('#divpostGraduationDetails').css('display', 'block');
        $(".open7").show();

    } else {

        $("#postGraduationCheckBox").prop('checked', false);
        $('#postGraduationDetails').css('display', 'none');
        $('#divpostGraduationDetails').css('display', 'none');
        $(".open7").hide();

    }
    //$('#postGraduationDetails').css('display', 'block');
    //$('#divpostGraduationDetails').css('display', 'block');
    //$(".open7").show();
}
function loadPostGraduationDetail() {
    function getFrontEndObject() {
        var arrObjects = [
            { modelName: '', elementType: 'input', frontFieldName: 'inputPostGraduationUniversityName', apiFieldName: 'PostGraduationUniversityName', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputPostGraduationInstituteName', apiFieldName: 'PostGraduationInstituteName', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'select', frontFieldName: 'selectPostGraduationCourseType', apiFieldName: 'PostGraduationCourseType', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputPostGraduationQualificationName', apiFieldName: 'PostGraduationQualificationName', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputPostGraduationOtherDegreeName', apiFieldName: 'PostGraduationOtherDegreeName', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputPostGraduationSpecialization', apiFieldName: 'PostGraduationSpecialization', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputPostGraduationOtherSubject', apiFieldName: 'PostGraduationOtherSubject', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'select', frontFieldName: 'inputPostGraduationEvaluationType', apiFieldName: 'PostGraduationEvaluationType', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputPostGraduationMaximumMarks', apiFieldName: 'PostGraduationMaximumMarks', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputPostGraduationObtainedMarks', apiFieldName: 'PostGraduationObtainedMarks', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputPostGraduationPercentage', apiFieldName: 'PostGraduationPercentage', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputPostGraduationTotalCgpa', apiFieldName: 'PostGraduationTotalCgpa', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputPostGraduationCgpaMultiplyingFactor', apiFieldName: 'PostGraduationCgpaMultiplyingFactor', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputPostGraduationCgpaObtained', apiFieldName: 'PostGraduationCgpaObtained', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputPostGraduationCgpaCalculatedPercent', apiFieldName: 'PostGraduationCgpaCalculatedPercent', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputPostGraduationGrade', apiFieldName: 'PostGraduationGrade', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputPostGraduationYearOfPassing', apiFieldName: 'PostGraduationYearOfPassing', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: 'uploadDocument.', elementType: 'upload', frontFieldName: 'PostGraduationDegree', apiFieldName: 'PostGraduationDegree', attrName: 'src', getFunction: 'src', setFunction: 'src', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: 'uploadDocument.', elementType: 'upload', frontFieldName: 'PostGraduationMarksheet', apiFieldName: 'PostGraduationMarksheet', attrName: 'src', getFunction: 'src', setFunction: 'src', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: 'uploadDocument.', elementType: 'upload', frontFieldName: 'PostGraduationOthers', apiFieldName: 'PostGraduationOthers', attrName: 'src', getFunction: 'src', setFunction: 'src', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: 'uploadDocument.', elementType: 'view', frontFieldName: 'PostGraduationDegree', apiFieldName: 'PostGraduationDegree', attrName: 'src', getFunction: 'src', setFunction: 'src', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: 'uploadDocument.', elementType: 'view', frontFieldName: 'PostGraduationMarksheet', apiFieldName: 'PostGraduationMarksheet', attrName: 'src', getFunction: 'src', setFunction: 'src', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: 'uploadDocument.', elementType: 'view', frontFieldName: 'PostGraduationOthers', apiFieldName: 'PostGraduationOthers', attrName: 'src', getFunction: 'src', setFunction: 'src', isReadOnly: false, isDisabled: false, isEditable: false },

        ];
        postGraduationObject = arrObjects;
        return arrObjects;

    }
    if (allData.length != 0) {
        var objApiData = {};

        for (let e in allData.postGraduationDetail) {
            objApiData[capitalizeFirstLetter(e)] = allData.postGraduationDetail[e];
        }

        FillApiDataIntoFrontEnd(getFrontEndObject(), objApiData, 1);
        postGraduationPresentInObject(objApiData)
    }
}
function loadAddressDetailsUploaded() {
    function getFrontEndObject() {

        var arrObjects = [
            //personal address
            { elementType: 'span', frontFieldName: 'spanPresentAddress1', apiFieldName: 'PresentAddress1', attrName: 'html', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },
            { elementType: 'span', frontFieldName: 'spanPresentAddress2', apiFieldName: 'PresentAddress2', attrName: 'html', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },
            { elementType: 'span', frontFieldName: 'spanPresentCity', apiFieldName: 'PresentCity', attrName: 'html', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },
            { elementType: 'span', frontFieldName: 'spanPresentState', apiFieldName: 'PresentState', attrName: 'html', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },
            { elementType: 'span', frontFieldName: 'spanPresentPincode', apiFieldName: 'PresentPincode', attrName: 'html', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },
            { elementType: 'span', frontFieldName: 'spanPresentCountry', apiFieldName: 'PresentCountry', attrName: 'html', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },
            //permanent address
            { elementType: 'span', frontFieldName: 'spanPermanentAddress1', apiFieldName: 'PermanentAddress1', attrName: 'html', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },
            { elementType: 'span', frontFieldName: 'spanPermanentAddress2', apiFieldName: 'PermanentAddress2', attrName: 'html', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },
            { elementType: 'span', frontFieldName: 'spanPermanentCity', apiFieldName: 'PermanentCity', attrName: 'html', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },
            { elementType: 'span', frontFieldName: 'spanPermanentState', apiFieldName: 'PermanentState', attrName: 'html', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },
            { elementType: 'span', frontFieldName: 'spanPermanentPincode', apiFieldName: 'PermanentPincode', attrName: 'html', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },
            { elementType: 'span', frontFieldName: 'spanPermanentCountry', apiFieldName: 'PermanentCountry', attrName: 'html', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },


        ];
        return arrObjects;

    }
    if (allData.length != 0) {
        var objApiData = {};

        for (let e in allData.addressDetailsUploaded) {
            objApiData[capitalizeFirstLetter(e)] = allData.addressDetailsUploaded[e];
        }

        FillApiDataIntoFrontEnd(getFrontEndObject(), objApiData, 1);
    }
}
function loadAddressDetail() {


    function getFrontEndObject() {

        var arrObjectsPresent = [

            { modelName: '', elementType: 'input', frontFieldName: 'inputPresentAddress1', apiFieldName: 'address1', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputPresentAddress2', apiFieldName: 'address2', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputPresentCity', apiFieldName: 'city', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'selectPresentState', apiFieldName: 'state', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputPresentPincode', apiFieldName: 'pincode', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'selectPresentCountry', apiFieldName: 'country', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },


            ////permanent
            //{ modelName: '', elementType: 'input', frontFieldName: 'inputPermanentAddress1', apiFieldName: 'PermanentAddress1', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            //{ modelName: '', elementType: 'input', frontFieldName: 'inputPermanentAddress2', apiFieldName: 'Address2', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            //{ modelName: '', elementType: 'input', frontFieldName: 'inputPermanentCity', apiFieldName: 'City', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            //{ modelName: '', elementType: 'select', frontFieldName: 'selectPermanentState', apiFieldName: 'State', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            //{ modelName: '', elementType: 'input', frontFieldName: 'inputPermanentPincode', apiFieldName: 'Pincode', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            //{ modelName: '', elementType: 'select', frontFieldName: 'selectPermanentCountry', apiFieldName: 'Country', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            ////hometown
            //{ modelName: '', elementType: 'input', frontFieldName: 'inputHometownAddress1', apiFieldName: 'Address1', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            //{ modelName: '', elementType: 'input', frontFieldName: 'inputHometownAddress2', apiFieldName: 'Address2', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            //{ modelName: '', elementType: 'input', frontFieldName: 'inputHometownCity', apiFieldName: 'City', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            //{ modelName: '', elementType: 'select', frontFieldName: 'selectHometownState', apiFieldName: 'State', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            //{ modelName: '', elementType: 'input', frontFieldName: 'inputHometownPincode', apiFieldName: 'Pincode', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            //{ modelName: '', elementType: 'select', frontFieldName: 'selectHometownCountry', apiFieldName: 'Country', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },

        ];



        addressObject = arrObjectsPresent;
        return arrObjectsPresent;

    }

    function getFrontEndObjectPermanent() {
        var arrObjectspermanent = [

            //permanent
            { modelName: '', elementType: 'input', frontFieldName: 'inputPermanentAddress1', apiFieldName: 'address1', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputPermanentAddress2', apiFieldName: 'address2', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputPermanentCity', apiFieldName: 'city', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'selectPermanentState', apiFieldName: 'state', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputPermanentPincode', apiFieldName: 'pincode', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'selectPermanentCountry', apiFieldName: 'country', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            //hometown

        ];
        addressObject = arrObjectspermanent;
        return arrObjectspermanent;

    }
    function getFrontEndObjectHometown() {
        var arrObjectshometown = [

            //hometown
            { modelName: '', elementType: 'input', frontFieldName: 'inputHometownAddress1', apiFieldName: 'address1', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputHometownAddress2', apiFieldName: 'address2', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputHometownCity', apiFieldName: 'city', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'selectHometownState', apiFieldName: 'state', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputHometownPincode', apiFieldName: 'pincode', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'selectHometownCountry', apiFieldName: 'country', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },

        ];

        addressObject = arrObjectshometown;
        return arrObjectshometown;
    }
    if (allData.length != 0) {
        var data = [];
        var objApiData = {};

        for (let e in allData.addressDetail) {
            objApiData[capitalizeFirstLetter(e)] = allData.addressDetail[e];
            data.push(allData.addressDetail[e]);
        }

        var presentAd1 = "";
        var presentAd2 = "";
        var sameaspermanent;
        for (let d of data) {
            if (d.addressType == "Present Address") {
                presentAd1 = d.address1;
                presentAd2 = d.address2;
                sameaspermanent = d;
                FillApiDataIntoFrontEnd(getFrontEndObject(), d, 1);
            }

            if (d.addressType == "Permanent Address") {

                if (d.address1 == presentAd1 && d.address2 == presentAd2) {
                    FillApiDataIntoFrontEnd(getFrontEndObjectPermanent(), sameaspermanent, 1);
                    $('#divPermanentAddress').show();
                }
                else {
                    if (d.address1 != "" || d.address2 != "") {
                        $('#divPermanentAddress').show();
                        $("#radioPermanentAddressNo").prop("checked", true);
                    }
                    FillApiDataIntoFrontEnd(getFrontEndObjectPermanent(), d, 1);

                }


            }
            debugger
            if (d.addressType == "Hometown Address") {
                $("#radioHomeTownAddressYes").prop("checked", true);
                if (d.address1 == "" && d.address2 == "") {
                    $('#divHomeTownAddress').show();
                }
                FillApiDataIntoFrontEnd(getFrontEndObjectHometown(), d, 1);

            }
            else {
                $("#radioHomeTownAddressNo").prop("checked", true);
            }

        }

        /*  console.log(objApiData);*/

    }
}
function loadEmploymentDetailsUploaded() {
    function getFrontEndObject() {
        var arrObjects = [
            { elementType: 'span', frontFieldName: 'spanAreYouCurrentlyWorking', apiFieldName: 'AreYouCurrentlyWorking', attrName: 'html', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },
            { elementType: 'span', frontFieldName: 'spanOrganizationName1', apiFieldName: 'OrganizationName1', attrName: 'html', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },
            { elementType: 'span', frontFieldName: 'spanNameOfOrganization', apiFieldName: 'NameOfOrganization', attrName: 'html', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },

        ];
        return arrObjects;

    }

    if (allData.length != 0) {
        var objApiData = {};

        for (let e in allData.employmentDetailsUploaded.employmentDetailsUploaded) {
            objApiData[capitalizeFirstLetter(e)] = allData.employmentDetailsUploaded.employmentDetailsUploaded[e];
        }

        FillApiDataIntoFrontEnd(getFrontEndObject(), objApiData, 1);
    }
}
//Arsh--------
function loadUndertakingDetail() {

    function getFrontEndObject() {
        var arrObjects = [
            { modelName: '', elementType: 'textarea', frontFieldName: 'textAreaDeclaration', apiFieldName: 'UnderTackingDescriptin', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'upload', frontFieldName: 'UndertakingFiles', apiFieldName: 'UnderTackingFiles', attrName: 'src', getFunction: 'src', setFunction: 'src', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'view', frontFieldName: 'UndertakingFilesView', apiFieldName: 'UnderTackingFiles', attrName: 'src', getFunction: 'src', setFunction: 'src', isReadOnly: false, isDisabled: false, isEditable: false },

        ];
        undertakingObject = arrObjects;
        return arrObjects;

    }

    if (allData.length != 0) {
        var objApiData = {};

        for (let e in allData.undertackingDetails) {
            objApiData[capitalizeFirstLetter(e)] = allData.undertackingDetails[e];
        }

        FillApiDataIntoFrontEnd(getFrontEndObject(), objApiData, 1);

    }
}

//Arsh End--------

function CalculateDays(startdate, enddate) {

    //var startDate = new Date(startDateStr);
    //var endDate = new Date(endDateStr);
    var timeDifference = enddate.getTime() - startdate.getTime();
    var daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    var year = Math.floor(daysDifference / 365);
    return year;

}

function isNaNDates(value) {
    return value === 'NaN/NaN/NaN';
}

// Function to convert NaN/NaN/NaN to blank
function convertNaNDatesToBlank() {
    var sdateFieldValue = $('#inputExServicemenJoiningDate').val();
    var edateFieldValue = $('#inputExServicemenEndDate').val();
    var emdateFieldValue = $('#inputDepartmentStateGovtDoj').val();
    if (isNaNDates(sdateFieldValue)) {
        $('#inputExServicemenJoiningDate').val('');
    }
    if (isNaNDates(edateFieldValue)) {
        $('#inputExServicemenEndDate').val('');
    }
    if (isNaNDates(emdateFieldValue)) {
        $('#inputDepartmentStateGovtDoj').val('');
    }

}
function loadOtherDetailUploaded() {
    function getFrontEndObject() {
        var arrObjects = [

            { modelName: '', elementType: 'radio', frontFieldName: 'radioWhetherAgeRelaxationClaimedYes', apiFieldName: 'AgeRelaxation', attrName: 'checked', getFunction: 'prop', setFunction: 'prop', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'radio', frontFieldName: 'radioWhetherAgeRelaxationClaimedNo', apiFieldName: 'AgeRelaxation', attrName: 'checked', getFunction: 'prop', setFunction: 'prop', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'radio', frontFieldName: 'radioUnderCentralGovernmentYes', apiFieldName: 'UnderCentralGovernment', attrName: 'checked', getFunction: 'prop', setFunction: 'prop', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'radio', frontFieldName: 'radioUnderCentralGovernmentNo', apiFieldName: 'UnderCentralGovernment', attrName: 'checked', getFunction: 'prop', setFunction: 'prop', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'radio', frontFieldName: 'radioQualificationReservationCategoryYes', apiFieldName: 'QualificationReservationCategory', attrName: 'checked', getFunction: 'prop', setFunction: 'prop', isReadOnly: true, isDisabled: true, isEditable: false },
            { modelName: '', elementType: 'radio', frontFieldName: 'radioQualificationReservationCategoryNo', apiFieldName: 'QualificationReservationCategory', attrName: 'checked', getFunction: 'prop', setFunction: 'prop', isReadOnly: true, isDisabled: true, isEditable: false },
            { modelName: '', elementType: 'radio', frontFieldName: 'radioAreYouPWDYes', apiFieldName: 'AreYouPWD', attrName: 'checked', getFunction: 'prop', setFunction: 'prop', isReadOnly: true, isDisabled: true, isEditable: false },
            { modelName: '', elementType: 'radio', frontFieldName: 'radioAreYouPWDNo', apiFieldName: 'AreYouPWD', attrName: 'checked', getFunction: 'prop', setFunction: 'prop', isReadOnly: true, isDisabled: true, isEditable: false },
            { modelName: '', elementType: 'radio', frontFieldName: 'radioDisabilityBYes', apiFieldName: 'DisabilityB', attrName: 'checked', getFunction: 'prop', setFunction: 'prop', isReadOnly: true, isDisabled: true, isEditable: false },
            { modelName: '', elementType: 'radio', frontFieldName: 'radioDisabilityBNo', apiFieldName: 'DisabilityB', attrName: 'checked', getFunction: 'prop', setFunction: 'prop', isReadOnly: true, isDisabled: true, isEditable: false },
            { modelName: '', elementType: 'radio', frontFieldName: 'radioDisabilityLVYes', apiFieldName: 'DisabilityLV', attrName: 'checked', getFunction: 'prop', setFunction: 'prop', isReadOnly: true, isDisabled: true, isEditable: false },
            { modelName: '', elementType: 'radio', frontFieldName: 'radioDisabilityLVNo', apiFieldName: 'DisabilityLV', attrName: 'checked', getFunction: 'prop', setFunction: 'prop', isReadOnly: true, isDisabled: true, isEditable: false },
            { modelName: '', elementType: 'radio', frontFieldName: 'radioDisabilityDYes', apiFieldName: 'DisabilityD', attrName: 'checked', getFunction: 'prop', setFunction: 'prop', isReadOnly: true, isDisabled: true, isEditable: false },
            { modelName: '', elementType: 'radio', frontFieldName: 'radioDisabilityDNo', apiFieldName: 'DisabilityD', attrName: 'checked', getFunction: 'prop', setFunction: 'prop', isReadOnly: true, isDisabled: true, isEditable: false },
            { modelName: '', elementType: 'radio', frontFieldName: 'radioDisabilityHHYes', apiFieldName: 'DisabilityHH', attrName: 'checked', getFunction: 'prop', setFunction: 'prop', isReadOnly: true, isDisabled: true, isEditable: false },
            { modelName: '', elementType: 'radio', frontFieldName: 'radioDisabilityHHNo', apiFieldName: 'DisabilityHH', attrName: 'checked', getFunction: 'prop', setFunction: 'prop', isReadOnly: true, isDisabled: true, isEditable: false },
            { modelName: '', elementType: 'radio', frontFieldName: 'radioDisabilityQAYes', apiFieldName: 'DisabilityQA', attrName: 'checked', getFunction: 'prop', setFunction: 'prop', isReadOnly: true, isDisabled: true, isEditable: false },
            { modelName: '', elementType: 'radio', frontFieldName: 'radioDisabilityQANo', apiFieldName: 'DisabilityQA', attrName: 'checked', getFunction: 'prop', setFunction: 'prop', isReadOnly: true, isDisabled: true, isEditable: false },
            { modelName: '', elementType: 'radio', frontFieldName: 'radioDisabilityQLYes', apiFieldName: 'DisabilityQL', attrName: 'checked', getFunction: 'prop', setFunction: 'prop', isReadOnly: true, isDisabled: true, isEditable: false },
            { modelName: '', elementType: 'radio', frontFieldName: 'radioDisabilityQLNo', apiFieldName: 'DisabilityQL', attrName: 'checked', getFunction: 'prop', setFunction: 'prop', isReadOnly: true, isDisabled: true, isEditable: false },
            { modelName: '', elementType: 'radio', frontFieldName: 'radioDisabilityQALYes', apiFieldName: 'DisabilityQAL', attrName: 'checked', getFunction: 'prop', setFunction: 'prop', isReadOnly: true, isDisabled: true, isEditable: false },
            { modelName: '', elementType: 'radio', frontFieldName: 'radioDisabilityQALNo', apiFieldName: 'DisabilityQAL', attrName: 'checked', getFunction: 'prop', setFunction: 'prop', isReadOnly: true, isDisabled: true, isEditable: false },
            { modelName: '', elementType: 'radio', frontFieldName: 'radioDisabilityBLYes', apiFieldName: 'DisabilityBL', attrName: 'checked', getFunction: 'prop', setFunction: 'prop', isReadOnly: true, isDisabled: true, isEditable: false },
            { modelName: '', elementType: 'radio', frontFieldName: 'radioDisabilityBLNo', apiFieldName: 'DisabilityBL', attrName: 'checked', getFunction: 'prop', setFunction: 'prop', isReadOnly: true, isDisabled: true, isEditable: false },
            { modelName: '', elementType: 'radio', frontFieldName: 'radioDisabilityBAYes', apiFieldName: 'DisabilityBA', attrName: 'checked', getFunction: 'prop', setFunction: 'prop', isReadOnly: true, isDisabled: true, isEditable: false },
            { modelName: '', elementType: 'radio', frontFieldName: 'radioDisabilityBANo', apiFieldName: 'DisabilityBA', attrName: 'checked', getFunction: 'prop', setFunction: 'prop', isReadOnly: true, isDisabled: true, isEditable: false },
            { modelName: '', elementType: 'radio', frontFieldName: 'radioDisabilityCPYes', apiFieldName: 'DisabilityCP', attrName: 'checked', getFunction: 'prop', setFunction: 'prop', isReadOnly: true, isDisabled: true, isEditable: false },
            { modelName: '', elementType: 'radio', frontFieldName: 'radioDisabilityCPNo', apiFieldName: 'DisabilityCP', attrName: 'checked', getFunction: 'prop', setFunction: 'prop', isReadOnly: true, isDisabled: true, isEditable: false },
            { modelName: '', elementType: 'radio', frontFieldName: 'radioDisabilityLCYes', apiFieldName: 'DisabilityLC', attrName: 'checked', getFunction: 'prop', setFunction: 'prop', isReadOnly: true, isDisabled: true, isEditable: false },
            { modelName: '', elementType: 'radio', frontFieldName: 'radioDisabilityLCNo', apiFieldName: 'DisabilityLC', attrName: 'checked', getFunction: 'prop', setFunction: 'prop', isReadOnly: true, isDisabled: true, isEditable: false },
            { modelName: '', elementType: 'radio', frontFieldName: 'radioDisabilityDwYes', apiFieldName: 'DisabilityDw', attrName: 'checked', getFunction: 'prop', setFunction: 'prop', isReadOnly: true, isDisabled: true, isEditable: false },
            { modelName: '', elementType: 'radio', frontFieldName: 'radioDisabilityDwNo', apiFieldName: 'DisabilityDw', attrName: 'checked', getFunction: 'prop', setFunction: 'prop', isReadOnly: true, isDisabled: true, isEditable: false },
            { modelName: '', elementType: 'radio', frontFieldName: 'radioDisabilityAAVYes', apiFieldName: 'DisabilityAAV', attrName: 'checked', getFunction: 'prop', setFunction: 'prop', isReadOnly: true, isDisabled: true, isEditable: false },
            { modelName: '', elementType: 'radio', frontFieldName: 'radioDisabilityAAVNo', apiFieldName: 'DisabilityAAV', attrName: 'checked', getFunction: 'prop', setFunction: 'prop', isReadOnly: true, isDisabled: true, isEditable: false },
            { modelName: '', elementType: 'radio', frontFieldName: 'radioDisabilityMdyYes', apiFieldName: 'DisabilityMdy', attrName: 'checked', getFunction: 'prop', setFunction: 'prop', isReadOnly: true, isDisabled: true, isEditable: false },
            { modelName: '', elementType: 'radio', frontFieldName: 'radioDisabilityMdyNo', apiFieldName: 'DisabilityMdy', attrName: 'checked', getFunction: 'prop', setFunction: 'prop', isReadOnly: true, isDisabled: true, isEditable: false },
            { modelName: '', elementType: 'radio', frontFieldName: 'radioDisabilityASDYes', apiFieldName: 'DisabilityASD', attrName: 'checked', getFunction: 'prop', setFunction: 'prop', isReadOnly: true, isDisabled: true, isEditable: false },
            { modelName: '', elementType: 'radio', frontFieldName: 'radioDisabilityASDNo', apiFieldName: 'DisabilityASD', attrName: 'checked', getFunction: 'prop', setFunction: 'prop', isReadOnly: true, isDisabled: true, isEditable: false },
            { modelName: '', elementType: 'radio', frontFieldName: 'radioDisabilityIDYes', apiFieldName: 'DisabilityID', attrName: 'checked', getFunction: 'prop', setFunction: 'prop', isReadOnly: true, isDisabled: true, isEditable: false },
            { modelName: '', elementType: 'radio', frontFieldName: 'radioDisabilityIDNo', apiFieldName: 'DisabilityID', attrName: 'checked', getFunction: 'prop', setFunction: 'prop', isReadOnly: true, isDisabled: true, isEditable: false },
            { modelName: '', elementType: 'radio', frontFieldName: 'radioDisabilitySLDYes', apiFieldName: 'DisabilitySLD', attrName: 'checked', getFunction: 'prop', setFunction: 'prop', isReadOnly: true, isDisabled: true, isEditable: false },
            { modelName: '', elementType: 'radio', frontFieldName: 'radioDisabilitySLDNo', apiFieldName: 'DisabilitySLD', attrName: 'checked', getFunction: 'prop', setFunction: 'prop', isReadOnly: true, isDisabled: true, isEditable: false },
            { modelName: '', elementType: 'radio', frontFieldName: 'radioDisabilityMIYes', apiFieldName: 'DisabilityMI', attrName: 'checked', getFunction: 'prop', setFunction: 'prop', isReadOnly: true, isDisabled: true, isEditable: false },
            { modelName: '', elementType: 'radio', frontFieldName: 'radioDisabilityMINo', apiFieldName: 'DisabilityMI', attrName: 'checked', getFunction: 'prop', setFunction: 'prop', isReadOnly: true, isDisabled: true, isEditable: false },
            { modelName: '', elementType: 'radio', frontFieldName: 'radioExServiveManYes', apiFieldName: 'ExServiveMan', attrName: 'checked', getFunction: 'prop', setFunction: 'prop', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'radio', frontFieldName: 'radioExServiveManNo', apiFieldName: 'ExServiveMan', attrName: 'checked', getFunction: 'prop', setFunction: 'prop', isReadOnly: false, isDisabled: false, isEditable: false },
            //{ modelName: '', elementType: 'radio', frontFieldName: 'radioEmployeeofstategovernmentYes', apiFieldName: 'Employeeofstategovernment', attrName: 'checked', getFunction: 'prop', setFunction: 'prop', isReadOnly: false, isDisabled: false, isEditable: false },
            //{ modelName: '', elementType: 'radio', frontFieldName: 'radioEmployeeofstategovernmentNo', apiFieldName: 'Employeeofstategovernment', attrName: 'checked', getFunction: 'prop', setFunction: 'prop', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'radio', frontFieldName: 'radioServicemenDisabledYes', apiFieldName: 'ServicemenDisabled', attrName: 'checked', getFunction: 'prop', setFunction: 'prop', isReadOnly: true, isDisabled: true, isEditable: false },
            { modelName: '', elementType: 'radio', frontFieldName: 'radioServicemenDisabledNo', apiFieldName: 'ServicemenDisabled', attrName: 'checked', getFunction: 'prop', setFunction: 'prop', isReadOnly: true, isDisabled: true, isEditable: false },
            { modelName: '', elementType: 'radio', frontFieldName: 'radioServicemenDependantofkilledinActionYes', apiFieldName: 'ServicemenDependantofkilledinAction', attrName: 'checked', getFunction: 'prop', setFunction: 'prop', isReadOnly: true, isDisabled: true, isEditable: false },
            { modelName: '', elementType: 'radio', frontFieldName: 'radioServicemenDependantofkilledinActionNo', apiFieldName: 'ServicemenDependantofkilledinAction', attrName: 'checked', getFunction: 'prop', setFunction: 'prop', isReadOnly: true, isDisabled: true, isEditable: false },
            { modelName: '', elementType: 'radio', frontFieldName: 'radioAreYouAnEmployeeOfDFCCILYes', apiFieldName: 'EmployeeOfDfccil', attrName: 'checked', getFunction: 'prop', setFunction: 'prop', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'radio', frontFieldName: 'radioAreYouAnEmployeeOfDFCCILNo', apiFieldName: 'EmployeeOfDfccil', attrName: 'checked', getFunction: 'prop', setFunction: 'prop', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'radio', frontFieldName: 'radioFreefromARVigilanceAngleinParentOrganizationYes', apiFieldName: 'ArVigilanceAngleinParentOrg', attrName: 'checked', getFunction: 'prop', setFunction: 'prop', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'radio', frontFieldName: 'radioFreefromARVigilanceAngleinParentOrganizationNo', apiFieldName: 'ArVigilanceAngleinParentOrg', attrName: 'checked', getFunction: 'prop', setFunction: 'prop', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'radio', frontFieldName: 'radioIdentityCardissuedbyparentYes', apiFieldName: 'IdentityCardissuedbyparent', attrName: 'checked', getFunction: 'prop', setFunction: 'prop', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'radio', frontFieldName: 'radioIdentityCardissuedbyparentNo', apiFieldName: 'IdentityCardissuedbyparent', attrName: 'checked', getFunction: 'prop', setFunction: 'prop', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'radio', frontFieldName: 'radioNOCByEmployerInGovernmentOrganizationYes', apiFieldName: 'NocByEmployerInGovernmentOrg', attrName: 'checked', getFunction: 'prop', setFunction: 'prop', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'radio', frontFieldName: 'radioNOCByEmployerInGovernmentOrganizationNo', apiFieldName: 'NocByEmployerInGovernmentOrg', attrName: 'checked', getFunction: 'prop', setFunction: 'prop', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'radio', frontFieldName: 'radioDischargeSlipNOCYes', apiFieldName: 'DischargeSlipNOC', attrName: 'checked', getFunction: 'prop', setFunction: 'prop', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'radio', frontFieldName: 'radioDischargeSlipNOCNo', apiFieldName: 'DischargeSlipNOC', attrName: 'checked', getFunction: 'prop', setFunction: 'prop', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'radio', frontFieldName: 'radioresignationAcceptanceOrderstobeSubmittedBeforeYes', apiFieldName: 'ResignationAcceptanceOrder', attrName: 'checked', getFunction: 'prop', setFunction: 'prop', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'radio', frontFieldName: 'radioresignationAcceptanceOrderstobeSubmittedBeforeNo', apiFieldName: 'ResignationAcceptanceOrder', attrName: 'checked', getFunction: 'prop', setFunction: 'prop', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'radio', frontFieldName: 'radioOthersUploadYes', apiFieldName: 'OthersUpload', attrName: 'checked', getFunction: 'prop', setFunction: 'prop', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'radio', frontFieldName: 'radioOthersUploadNo', apiFieldName: 'OthersUpload', attrName: 'checked', getFunction: 'prop', setFunction: 'prop', isReadOnly: false, isDisabled: false, isEditable: false },
            //{ elementType: 'radio', frontFieldName: 'radioServicemenDependantofkilledinActionYes', apiFieldName: 'ServicemenDependantofkilledinAction', attrName: 'checked', getFunction: 'prop', setFunction: 'prop', isReadOnly: true, isDisabled: true, isEditable:false },
            //{ elementType: 'radio', frontFieldName: 'radioServicemenDependantofkilledinActionNo', apiFieldName: 'ServicemenDependantofkilledinAction', attrName: 'checked', getFunction: 'prop', setFunction: 'prop', isReadOnly: true, isDisabled: true, isEditable:false },
            // shah
            { modelName: '', elementType: 'input', frontFieldName: 'inputPWDCertificateNo', apiFieldName: 'PWDCertificateNo', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputPWDDateOfIssue', apiFieldName: 'PWDDateOfIssue', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputPWDIssuingAuthority', apiFieldName: 'PWDIssuingAuthority', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },

            // shah

            { modelName: '', elementType: 'input', frontFieldName: 'inputTypeOfDisability', apiFieldName: 'TypeOfDisability', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },
            { modelName: '', elementType: 'select', frontFieldName: 'selectReservationCategory', apiFieldName: 'ReservationCategory', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputSubDisability', apiFieldName: 'SubDisability', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputPercentageofdisability', apiFieldName: 'Percentageofdisability', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },
            { modelName: '', elementType: 'inputdate', frontFieldName: 'inputExServicemenJoiningDate', apiFieldName: 'ExServicemenJoiningDate', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'inputdate', frontFieldName: 'inputExServicemenEndDate', apiFieldName: 'ExServicemenEndDate', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            // { modelName: '', elementType: 'input', frontFieldName: 'inputExServicemenDuration', apiFieldName: 'ExServicemenDuration', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: true, isDisabled: true, isEditable: false },

            { modelName: '', elementType: 'input', frontFieldName: 'inputCentralOrganisation', apiFieldName: 'CentralOrganisation', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            //{ modelName: '', elementType: 'input', frontFieldName: 'inputStateOrganisation', apiFieldName: 'StateOrganisation', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputDepartmentEmployeeNo', apiFieldName: 'DepartmentEmployeeNo', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'inputdate', frontFieldName: 'inputDepartmentStateGovtDoj', apiFieldName: 'DepartmentStateGovtDoj', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputDepartmentEmployeeStateGovernmentDuration', apiFieldName: 'DepartmentEmployeeStateGovernmentDuration', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: '', elementType: 'input', frontFieldName: 'inputDepartmentEmployeeDurationPeriod', apiFieldName: 'DepartmentEmployeeDurationPeriod', attrName: 'value', getFunction: 'val', setFunction: 'val', isReadOnly: false, isDisabled: false, isEditable: false },
            { modelName: 'uploadDocument.', elementType: 'upload', frontFieldName: 'SCSTCertificate', apiFieldName: 'SCSTCertificate', attrName: 'src', getFunction: 'src', setFunction: 'src', isReadOnly: true, isDisabled: true, isEditable: false },
            { modelName: 'uploadDocument.', elementType: 'upload', frontFieldName: 'PHExServicemen', apiFieldName: 'PHExServicemen', attrName: 'src', getFunction: 'src', setFunction: 'src', isReadOnly: true, isDisabled: true, isEditable: false },
            { modelName: 'uploadDocument.', elementType: 'upload', frontFieldName: 'NOCGovernment', apiFieldName: 'NOCGovernment', attrName: 'src', getFunction: 'src', setFunction: 'src', isReadOnly: true, isDisabled: true, isEditable: false },
            { modelName: 'uploadDocument.', elementType: 'upload', frontFieldName: 'DisabilityCertificate', apiFieldName: 'DisabilityCertificate', attrName: 'src', getFunction: 'src', setFunction: 'src', isReadOnly: true, isDisabled: true, isEditable: false },
            { modelName: 'uploadDocument.', elementType: 'upload', frontFieldName: 'OthersOthers', apiFieldName: 'OthersOthers', attrName: 'src', getFunction: 'src', setFunction: 'src', isReadOnly: true, isDisabled: true, isEditable: false },
            { modelName: 'uploadDocument.', elementType: 'upload', frontFieldName: 'DischargeSlipNOC', apiFieldName: 'DischargeSlipNOC', attrName: 'src', getFunction: 'src', setFunction: 'src', isReadOnly: true, isDisabled: true, isEditable: false },
            { modelName: 'uploadDocument.', elementType: 'upload', frontFieldName: 'IdentityCardissuedbyparent', apiFieldName: 'IdentityCardissuedbyparent', attrName: 'src', getFunction: 'src', setFunction: 'src', isReadOnly: true, isDisabled: true, isEditable: false },
            { modelName: 'uploadDocument.', elementType: 'upload', frontFieldName: 'VigilanceAngleinParentOrganization', apiFieldName: 'VigilanceAngleinParentOrganization', attrName: 'src', getFunction: 'src', setFunction: 'src', isReadOnly: true, isDisabled: true, isEditable: false },
            { modelName: 'uploadDocument.', elementType: 'view', frontFieldName: 'SCSTCertificate', apiFieldName: 'SCSTCertificate', attrName: 'src', getFunction: 'src', setFunction: 'src', isReadOnly: true, isDisabled: true, isEditable: false },
            { modelName: 'uploadDocument.', elementType: 'view', frontFieldName: 'PHExServicemen', apiFieldName: 'PHExServicemen', attrName: 'src', getFunction: 'src', setFunction: 'src', isReadOnly: true, isDisabled: true, isEditable: false },
            { modelName: 'uploadDocument.', elementType: 'view', frontFieldName: 'NOCGovernment', apiFieldName: 'NOCGovernment', attrName: 'src', getFunction: 'src', setFunction: 'src', isReadOnly: true, isDisabled: true, isEditable: false },
            { modelName: 'uploadDocument.', elementType: 'view', frontFieldName: 'DisabilityCertificate', apiFieldName: 'DisabilityCertificate', attrName: 'src', getFunction: 'src', setFunction: 'src', isReadOnly: true, isDisabled: true, isEditable: false },
            { modelName: 'uploadDocument.', elementType: 'view', frontFieldName: 'OthersOthers', apiFieldName: 'OthersOthers', attrName: 'src', getFunction: 'src', setFunction: 'src', isReadOnly: true, isDisabled: true, isEditable: false },
            { modelName: 'uploadDocument.', elementType: 'view', frontFieldName: 'DischargeSlipNOC', apiFieldName: 'DischargeSlipNOC', attrName: 'src', getFunction: 'src', setFunction: 'src', isReadOnly: true, isDisabled: true, isEditable: false },
            { modelName: 'uploadDocument.', elementType: 'view', frontFieldName: 'IdentityCardissuedbyparent', apiFieldName: 'IdentityCardissuedbyparent', attrName: 'src', getFunction: 'src', setFunction: 'src', isReadOnly: true, isDisabled: true, isEditable: false },
            { modelName: 'uploadDocument.', elementType: 'view', frontFieldName: 'VigilanceAngleinParentOrganization', apiFieldName: 'VigilanceAngleinParentOrganization', attrName: 'src', getFunction: 'src', setFunction: 'src', isReadOnly: true, isDisabled: true, isEditable: false },

        ];
        otherObject = arrObjects;
        return arrObjects;

    }

    if (allData.length != 0) {
        var objApiData = {};

        for (let e in allData.otherDetailUploaded) {


            objApiData[capitalizeFirstLetter(e)] = allData.otherDetailUploaded[e];
        }
        var enddate = new Date(objApiData.ExServicemenEndDate);
        var startdate = new Date(objApiData.ExServicemenJoiningDate);
        //if (objApiData.ExServicemenEndDate == null) {
        //    objApiData.ExServicemenEndDate = '';
        //}
        //if (objApiData.ExServicemenJoiningDate == null) {
        //    objApiData.ExServicemenJoiningDate = '';
        //}
        var timeperiods = calculateduration(startdate, enddate);

        // objApiData.ExServicemenDuration = timeperiods;
        FillApiDataIntoFrontEnd(getFrontEndObject(), objApiData, 1);
        $("#inputExServicemenDuration").val(timeperiods);
        $('#inputExServicemenDuration').prop('disabled', true);
        convertNaNDatesToBlank();

        //if (objApiData.DepartmentEmployeeNo != "") {
        //    $('#radioAreYouAnEmployeeOfDFCCILYes').prop('disabled', false);
        //    $('#radioAreYouAnEmployeeOfDFCCILYes').prop('checked', true);
        //    $('#radioAreYouAnEmployeeOfDFCCILNo').prop('disabled', false);
        //    $('#radioAreYouAnEmployeeOfDFCCILNo').prop('checked', false);
        //    $('#radioAreYouAnEmployeeOfDFCCILNo').prop('disabled', true);
        //    $('#radioAreYouAnEmployeeOfDFCCILYes').prop('disabled', true);
        //}


        if (!objApiData.UnderCentralGovernment) {
            $("#inputCentralOrganisation").css('display', 'none');
            $("#FreefromARVigilanceAngleinParentOrganization").css('display', 'none');
            $("#divVigilanceAngleinParentUpload").css('display', 'none')
            $("#inputDepartmentStateGovtDoj").css('display', 'none');
            $("#divFreefromARVigilanceAngleinParentOrganizationYesCheckYes").css('display', 'none');
            $("#divFreefromARVigilanceAngleinParentOrganizationYesCheckNo").css('display', 'none');
            $("#inputDepartmentEmployeeStateGovernmentDuration").css('display', 'none');

        }
        if (!objApiData.ExServiveMan) {
            $("#PHExServicemenUpload").css('display', 'none');
            $("#PHExServicemenView").css('display', 'none');
            $("#inputExServicemenJoiningDate").css('display', 'none');
            $("#inputExServicemenEndDate").css('display', 'none');
            $("#inputExServicemenDuration").css('display', 'none');
            $("#divradioServicemenDisabledYes").css('display', 'none');
            $("#divradioServicemenDisabledNo").css('display', 'none');
            $("#divradioServicemenDependantofkilledinActionYes").css('display', 'none');
            $("#divradioServicemenDependantofkilledinActionNo").css('display', 'none');

        }
        else {
            $("#PHExServicemenUpload").css('display', 'none');
            $("#PHExServicemenView").css('display', 'block');
            $("#inputExServicemenJoiningDate").css('display', 'block');
            $("#inputExServicemenEndDate").css('display', 'block');
            $("#inputExServicemenDuration").css('display', 'block');
            $("#divradioServicemenDisabledYes").css('display', 'block');
            $("#divradioServicemenDisabledNo").css('display', 'block');

            $("#divradioServicemenDependantofkilledinActionYes").css('display', 'block');
            $("#divradioServicemenDependantofkilledinActionNo").css('display', 'block');
        }
        if (!objApiData.EmployeeOfDfccil) {
            $("#inputDepartmentEmployeeNo").css('display', 'none');
            $("#inputDepartmentEmployeeDurationPeriod").css('display', 'none');


        }
        if (!objApiData.AreYouPWD) {
            $(".AreyouPWDFiles").hide();
        }
        if (!objApiData.Employeeofstategovernment) {
            $("#inputStateOrganisation").css('display', 'none');
        }
        if (!objApiData.ArVigilanceAngleinParentOrg) {

            $("#divVigilanceAngleinParentUpload").css('display', 'none');
            $("#divVigilanceAngleinParentView").css('display', 'none');

        }
        else {
            $("#divVigilanceAngleinParentUpload").css('display', 'none');
            $("#divVigilanceAngleinParentView").css('display', 'block');
        }
        if (!objApiData.IdentityCardissuedbyparent) {
            $("#IdentityCardissuedbyparentView").css('display', 'none');
            $("#IdentityCardissuedbyparentUpload").css('display', 'none');
        }
        else {
            $("#IdentityCardissuedbyparentUpload").css('display', 'none');
            $("#IdentityCardissuedbyparentView").css('display', 'block');

        }
        if (!objApiData.NocByEmployerInGovernmentOrg) {
            $("#NOCGovernmentUpload").css('display', 'none');
            $("#NOCGovernmentView").css('display', 'none');
        }
        else {
            $("#NOCGovernmentUpload").css('display', 'none');
            $("#NOCGovernmentView").css('display', 'block');
        }
        if (!objApiData.DischargeSlipNOC) {
            $("#DischargeSlipNOCUpload").css('display', 'none');
            $("#DischargeSlipNOCView").css('display', 'none');
        }
        else {
            $("#DischargeSlipNOCUpload").css('display', 'none');
            $("#DischargeSlipNOCView").css('display', 'block');
        }


        if (!objApiData.OthersUpload) {

            $("#OthersOthersUpload").css('display', 'none');
            $("#OthersOthersView").css('display', 'none');
        }
        else {
            $("#OthersOthersUpload").css('display', 'none');
            $("#OthersOthersView").css('display', 'block');
        }
        if (objApiData.ReservationCategory) {

            if (objApiData.ReservationCategory == "General") {
                $("#scstCertificateUpload").css('display', 'none');
                $("#scstCertificateView").css('display', 'none');
            }
            else {
                $("#scstCertificateUpload").css('display', 'block');
                $("#scstCertificateView").css('display', 'block');
            }

        }





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
function loadOtherEducationDetails() {
    var items = $("#items");
    items.empty();
    serialNo = 1;
    rowIndex = 0;
    if (allData.otherEducationDetail != null) {
        if (allData.otherEducationDetail.candidateOtherEducationList != null) {
            for (let e of allData.otherEducationDetail.candidateOtherEducationList) {

                documentDetails["ViewCopy_" + rowIndex] = e.uploadCopyList
                let row = ` <tr id="trItems_${rowIndex}" class="next-referral">
                                                    <td>
                                                        ${serialNo}
                                                                  <input type="hidden" id="uploadId_${rowIndex}"  value="${e.id}"/>
                                                        
                                                    </td>
                                                    <td>

                                                        <div class="form-group">
                                                            <div class="form-line">

                                                                <input type="text" class="form-control inputTable" id="inputOtherInstitute_${rowIndex}" value="${e.otherInstitute}" >
                                                            </div>
                                                        </div>

                                                    </td>
                                                    <td>
                                                        <div class="form-group">
                                                            <div class="form-line">

                                                                        <input type="text" class="form-control inputTable input-width" id="inputOtherCity_${rowIndex}" value="${e.otherCity}" >
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-group">
                                                            <div class="form-line">

                                                                <input type="text" class="form-control inputTable" id="inputOtherTypeOfCourse_${rowIndex}" value="${e.otherTypeOfCourse}" >
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>

                                                        <div class="form-group">
                                                            <div class="form-line">

                                                                <input type="text" class="form-control inputTable" id="inputOtherSpecialization_${rowIndex}" value="${e.otherSpecialization}" >
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-group">
                                                            <div class="form-line">
                                                                                                                                                     
                                                                <input type="text" class="form-control inputTable datepicker input-width" id="inputOtherStartDate_${rowIndex}"  value="${formatDate_dd_mm_yyyy(new Date(Date.parse(e.otherStartDate)))}">
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-group">
                                                            <div class="form-line">

                                                                    <input type="text" class="form-control inputTable datepicker input-width" id="inputOherEndDate_${rowIndex}"  value="${formatDate_dd_mm_yyyy(new Date(Date.parse(e.otherEndDate)))}">
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-group">
                                                            <div class="form-line">

                                                                        <input type="text" class="form-control inputTable" id="inputOtherPercentage_${rowIndex}"  value="${e.otherPercentage}">
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                       <div class="d-flex align-items-center">
                                                        <div id="divUploadButton_${rowIndex}" class="form-group mx-auto" style="display:non">

                                                            <div class="import-btn">
                                                                <div class="file-area file-group-download">
                                                                            <button type="button" title=" Upload File" id="btnUploadCopy" onclick="TrigerModalUploadFile('Upload Copy','UploadCopy_${rowIndex}')" class="btn p-0" style="width:max-content;"><i class="fa fa-upload" aria-hidden="true"></i><span id="spanUploadCopy_${rowIndex}" class="file-status upview-color">0</span></button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                            <div id="divViewButton_${rowIndex}" class="form-group mx-auto ml-2">

                                                                    <div class="import-btn">
                                                                        <div class="file-area file-group-download">
                                                                            <button title=" View File" style="border:unset; padding:0;width:max-content;" onclick="TrigerModalViewFile('View Copy','ViewCopy_${rowIndex}')" type="button" class="btn btn-padd"><i class="fa fa-eye" aria-hidden="true"></i><span id="spanViewCopyView_${rowIndex}" class="file-status upview-color">${documentDetails["ViewCopy_" + rowIndex].length}</span></button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                       </div>
                                                    </td>
                                                       
                                                </tr>`;

                items.append(row);
                serialNo++;
                rowIndex++;
            }
        }
    }

}
function loadEmployerDetails() {

    var items = $("#empItems");

    items.empty();
    var serialNo2 = 1;
    rowIndexCurrent = 0;
    if (allData.employmentDetails != null) {
        if (allData.employmentDetails.candidateEmploymentDetailsList != null) {
            for (let e of allData.employmentDetails.candidateEmploymentDetailsList) {
                let row = `<tr id = "trEmployerDetails_${rowIndexCurrent}" class="next-referral">
                                                <td>
                                                    <div class="form-group">
                                                         <div class="form-line">
                                                                 <input type="hidden" id="uploadCurrentId_${rowIndexCurrent}" value="${e.id}" />
                                                                <input type="text" class="form-control inputCurrentData" id="inputTableNameofOrganization_${rowIndexCurrent}" value="${e.nameofOrganization}">
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>

                                                    <div class="form-group">
                                                        <div class="form-line">

                                                                <input type="text" class="form-control inputCurrentData" id="inputtableCity_${rowIndexCurrent}" value="${e.city}">
                                                        </div>
                                                    </div>

                                                </td>
                                                <td>
                                                    <div class="form-group">
                                                        <div class="form-line">

                                                            <input type="text" class="form-control datepicker inputCurrentData" id="inputTableStartDate_${rowIndexCurrent}" value="${formatDate_dd_mm_yyyy(new Date(Date.parse(e.startDate)))} ">
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="form-group divCheckboxCurrenty">
                                                        <div class="form-line">

                                                                <input type="text" class="form-control datepicker inputCurrentData" id="inputTableEndDate_${rowIndexCurrent}" value="${formatDate_dd_mm_yyyy(new Date(Date.parse(e.endDate)))}">
                                                        </div>

                                                    </div>
                                                            <input id="checkboxCurrentyWorking_${rowIndexCurrent}" type="checkbox" class="toggleCheckbox" name="working" value="" style="height:unset;">
                                                    <label for="working" class="mb-0">Currently Working</label>
                                                </td>
                                                <td>
                                                    <div class="form-group">
                                                        <div class="form-line">

                                                                        <input type="text" class="form-control inputCurrentData" id="inputTableDesignation_${rowIndexCurrent}" value="${e.designation}">
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                            <div class="d-flex align-items-center">
                                                             <div class="form-group" id="divUploadCurrentButton_${rowIndexCurrent}" >
                                                        <div class="import-btn" title="Upload Joining Letter Upload File">
                                                            <div class="file-area file-group-download">
                                                                                    <button  type="button" onclick="TrigerModalUploadFile('Upload Joining Letter','UploadJoiningLetter_${rowIndexCurrent}')" class="btn p-0" style="width:max-content;"><i class="fa fa-upload" aria-hidden="true"></i><span id="spanUploadJoiningLetter_${rowIndexCurrent}" class="file-status upview-color">0</span></button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                                <div id="divViewCurrentButton_${rowIndexCurrent}" class="form-group mx-auto ml-2">

                                                                        <div class="import-btn" title="Upload Joining Letter View File">
                                                                            <div class="file-area file-group-download">
                                                                                        <button  style="border:unset; padding:0;width:max-content;" onclick="TrigerModalViewFile('View Copy','ViewCopyJoiningLetter_${rowIndexCurrent}')" type="button" class="btn btn-padd"><i class="fa fa-eye" aria-hidden="true"></i><span id="spanViewCopyJoiningLetterView_${rowIndexCurrent}" class="file-status upview-color">0</span></button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                            </div>
                                                </td>
                                            </tr>`;

                items.append(row);

                $("#checkboxCurrentyWorking_" + rowIndexCurrent).prop('checked', e.isCurrentlyWorking);
                $("#checkboxCurrentyWorking_" + rowIndexCurrent).prop('disabled', true);
                if (e.isCurrentlyWorking) {

                    $("#inputTableEndDate_" + rowIndexCurrent).css('display', 'none');
                }
                else {
                    $("#inputTableEndDate_" + rowIndexCurrent).css('display', 'block');
                }
                documentDetails['ViewCopyJoiningLetter_' + rowIndexCurrent] = e.uploadCopyList;
                $("#spanViewCopyJoiningLetterView_" + rowIndexCurrent).html(documentDetails['ViewCopyJoiningLetter_' + rowIndexCurrent].length);
                serialNo2++;
                rowIndexCurrent++;
            }
        }
    }

}



var candidateId = localStorage.getItem("candidateId");

var spanPercentage = $("#spanPercentage");
function getCandidateProfileCompleteStaus() {




    var url = apiBaseUrlHr + "/api/Candidate/GetProfileStatusDetail?CandidateId=" + candidateId;

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


            if (response.data != null && response.data.length != 0) {
                var totalProfileComplete = (((response.data[0].totalStatusValue) / 80) * 100);

                if (totalProfileComplete <= 50) {
                    $('.layOutProfilePic').css('border', '5px solid red');
                    $('.layOutProfilePic').css('border-bottom', '5px solid white');
                    $('.spanPercentage').css('background', 'red');
                }
                else if (totalProfileComplete > 50 && totalProfileComplete < 65) {
                    $('.layOutProfilePic').css('border', '5px solid #fae017');
                    $('.layOutProfilePic').css('border-bottom', '5px solid white');
                    $('.spanPercentage').css('background', '#fae017');
                }
                else if (totalProfileComplete => 65 && totalProfileComplete < 100) {
                    $('.layOutProfilePic').css('border', '5px solid green');
                    $('.layOutProfilePic').css('border-bottom', '5px solid white');
                    $('.spanPercentage').css('background', 'green');
                }
                spanPercentage.text(totalProfileComplete.toFixed() + '%');

            }

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

function loadAllDataOfCandidateData(objData) {
    debugger
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

                allData = response.data;
                loadProfileData();
                loadMatricUploadedData();
                loadOtherEducationDetailUploaded();
                loadMatricDetail();
                loadIntermediateDetail();
                loadItiDetail();
                loadApprenticeDetail();
                loadDiplomaDetail();
                loadGraduationDetail();
                loadPostGraduationDetail();
                loadAddressDetailsUploaded();
                loadAddressDetail();
                loadEmploymentDetailsUploaded();
                loadOtherDetailUploaded();
                loadOtherEducationDetails();
                loadEmployerDetails();
                loadUploadedFiles();
                if (response.data.candidateProfile.oldMobileNo || response.data.candidateProfile.oldEmailId) {
                    $('#marqueeB').show();
                    $('#spanMobilePara').text(response.data.candidateProfile.oldMobileNo);

                    $('#spanEmailPara').text(response.data.candidateProfile.oldEmailId);  


                }
                if (allData.candidate.isEditModeDeclaration) {
                    $("#btnundertaking").css('display', 'inline')
                }
                else {
                    $("#btnundertaking").css('display', 'none')
                }
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
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function resetAll() {
}
function saveAll() {

    var e = document.getElementById('testing');
    isSaveAll = true;
    saveProfile_click(e);
    saveCurrentMatric_click(e);
    saveIntermediate_click(e);
    saveIti_click(e);
    saveApprentice_click(e);
    saveDiploma_click(e);
    saveGraduation_click(e);
    savePostGraduation_click(e);
    saveOtherEducationSave_Click(e);
    saveAddress_click(e);
    saveEmployerDetails_click(e);
    saveOther_click(e)

    loadAllDataOfCandidateData();
    getCandidateProfileCompleteStaus();
    isSaveAll = false;

}
function pickupload_Click(e) {
    saveProfile_click(e);
}
function validation() {
    debugger
    var inputAdharNo = $('#inputAdharNo').val().trim();
    var inputAlternateMobileNo = $('#inputAlternateMobileNo').val().trim();
    var inputMobileNo = $('#inputMobileNo').val().trim();
    var inputConfirmAlternateMobileNo = $('#inputConfirmAlternateMobileNo').val().trim();

    if (inputAdharNo.length !== 12 || !/^\d{12}$/.test(inputAdharNo)) {
        $('#inputAdharNo').css('border', '1px solid red');
        return false;
    } else {
        $('#inputAdharNo').css('border', '');
    }

    if (!/^\d{10}$/.test(inputMobileNo)) {
        $('#inputMobileNo').css('border', '1px solid red');
        return false;
    } else {
        $('#inputMobileNo').css('border', '');
    }
    if (!/^\d{10}$/.test(inputAlternateMobileNo)) {
        $('#inputAlternateMobileNo').css('border', '1px solid red');
        return false;
    } else {
        $('#inputAlternateMobileNo').css('border', '');
    }

    if (!/^\d{10}$/.test(inputConfirmAlternateMobileNo)) {
        $('#inputConfirmAlternateMobileNo').css('border', '1px solid red');
        return false;
    } else {
        $('#inputConfirmAlternateMobileNo').css('border', '');
    }
    

    return true;
}




var isSaveAll = false;

function saveProfile_click(e) {
    debugger
    if (!validation()) {
        return; 
    }
   
  
    $('.inputPersonalDetails').prop('readonly', true);
    $("#selectMartialStatus").prop('disabled', true);
    $('.PersonalDetailsdivEditButtonClaim').show();
    $('.PersonalDetailssaveClaim').hide();
    $("#spanPersonalDetailsEdit").html("* To <mark>edit</mark> your details, simply click on the <mark>'Edit'</mark> icon.");
    $('#divUploadDetaisl').hide();
    $("#divViewUploadDetails").show();
    $('.PersonalDetailscancelClaim').hide();
    FillApiDataIntoFrontEnd(profileObject, '', 3);
    const formDataNew = new FormData();
    FillFormDataForPostApi(profileObject, formDataNew)
    //formDataNew.append('EmpId', empObject.empId);



    var _url = apiBaseUrlHr + "/api/Candidate/SaveCandidatePersonalDetails/" + candidateId;
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
            if (isSaveAll) {
                return;
            }
            loadAllDataOfCandidateData();
            $('.page-loader').hide();
            getCandidateProfileCompleteStaus();
            e.disabled = false;
            if (response.statusCode == 201 || response.statusCode == 200) {
                Swal.fire({
                    title: 'Success !',
                    text: response.statusCode == 201 ? 'Request has been successfully submitted!' : response.message,
                    icon: "success"
                })

            }
            else {
                Swal.fire({
                    title: 'Invalid !',
                    text: response.message,
                    icon: 'error'
                });
            }
            $('.page-loader').hide();
            $('#myModal').modal('hide');
            e.disabled = false;


        },
        complete: function () {
            e.disabled = false;
            $('.page-loader').hide();
            $("#btnTourPlanSubmit").html('<i class="fa-solid fa-plus"></i> &nbsp;Submit')
            $("#inputPurposeOfTravel").focus();
        },
        error: function (jqXHR, status) {
            e.disabled = false;
            $('.page-loader').hide();
            $("#btnTourPlanSubmit").html('<i class="fa-solid fa-plus"></i> &nbsp;Add')
            Swal.fire({
                title: 'Invalid !',
                text: jqXHR.responseJSON.title,
                icon: 'error'
            });
            $("#inputPurposeOfTravel").focus();
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
function editProfile_click(e) {

    FillApiDataIntoFrontEnd(profileObject, '', 2);

}
function cancelProfile_click(e) {

    FillApiDataIntoFrontEnd(profileObject, '', 3);
}
function saveMatric_click(e) {

    const formDataNew = new FormData();
    FillFormDataForPostApi(matricObject, formDataNew)
    //formDataNew.append('EmpId', empObject.empId);



    var _url = apiBaseUrlHr + "/api/Candidate/SaveCandidatePersonalDetails/" + candidateId;
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
            $("#btnTourPlanSubmit").html('<i class="fa-solid fa-plus"></i> &nbsp;Please wait..')
        },
        success: function (response) {
            $('.page-loader').hide();
            e.disabled = false;

            if (response.statusCode == 201 || response.statusCode == 200) {
                Swal.fire({
                    title: 'Success !',
                    text: response.statusCode == 201 ? 'Matric Detail has been successfully submitted!' : response.message,
                    icon: "success"
                })
            }
            else {
                Swal.fire({
                    title: 'Invalid !',
                    text: response.message,
                    icon: 'error'
                });
            }
            $('.page-loader').hide();
            $('#myModal').modal('hide');
            e.disabled = false;
            $("#inputPurposeOfTravel").focus();

        },
        complete: function () {
            e.disabled = false;
            $('.page-loader').hide();
            $("#btnTourPlanSubmit").html('<i class="fa-solid fa-plus"></i> &nbsp;Submit')
            $("#inputPurposeOfTravel").focus();
        },
        error: function (jqXHR, status) {
            e.disabled = false;
            $('.page-loader').hide();
            $("#btnTourPlanSubmit").html('<i class="fa-solid fa-plus"></i> &nbsp;Add')
            Swal.fire({
                title: 'Invalid !',
                text: jqXHR.responseJSON.title,
                icon: 'error'
            });
            $("#inputPurposeOfTravel").focus();
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

// undertaking Consume Get api............

var candidateId = localStorage.getItem(candidateId);
function getDataUndertakingDetails() {

    var tbodyunderTackingDescription = $('#tbodyunderTackingDescription');
    var url = apiBaseUrlHr + "/api/Candidate/GetUnderTackingDetails/" + candidateId;
    url = url.replace(/[\u200B-\u200D\uFEFF]/g, '');
    $.ajax({
        type: "GET",
        url: url,
        //data: '{}',
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        /*headers: { Authorization: ApiToken },*/
        beforeSend: function () {
            /* var ApiObject = CheckApiCall();
             if (ApiObject.isCall == false) {
                 window.location.href = mainLoginUrl;
                 return false;
             }*/

            $('.page-loader').show();

        },
        success: function (response) {

            tbodyunderTackingDescription.empty();
            var count = 1;
            $.each(response.data, function (index, datanEW) {

                documentDetails['ViewFiles_' + count] = datanEW.candidateDocumentList;

                var rowundertakingRequested = ` <tr>
                            <td>${count}</td>
                            <td>
                                ${datanEW.underTackingDescription}
                            </td>
                            <td>
                      <div class="import-btn">
                                                    <div class="file-area file-group-download">
                                                     
                                                            <button style="border:unset; padding:0;width:max-content;font-size:.75rem;" onclick="TrigerModalViewFile('View Files','ViewFiles_${count}')" type="button" class="btn btn-padd"><i class="fa fa-eye" aria-hidden="true"></i><span id="spanUploadFilesView" class="file-status upview-color"> ${datanEW.candidateDocumentList.length}</span></button>
                                                      
                                                    </div>
                                                </div>
                            </td>
                           

                        </tr>`;

                tbodyunderTackingDescription.append(rowundertakingRequested);
                count++;

            });
            $('.page-loader').hide();

        },
        error: function (err) {
            //alert(err.status)
            console.log(err.status);
            switch (err.status) {

                case "401":
                    window.location.href = unAuthorisedUrl;
                    break;
                case "403":
                    window.location.href = forbiddenUrl;
                    break;
                default:
                    //alert(err.status);
                    break;
            }
        },

        failure: function (response) {
            $('.page-loader').hide();
            //alert(response.d);
            console.log(response.d);

        }
    });
}


//...............................


function saveThreeYrDiploma_click(e) {
    const formDataNew = new FormData();
    FillFormDataForPostApi(otherEducationObject, formDataNew)
    //formDataNew.append('EmpId', empObject.empId);



    var _url = apiBaseUrlHr + "/api/Candidate/SaveCandidatePersonalDetails/" + candidateId;
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
            $("#btnTourPlanSubmit").html('<i class="fa-solid fa-plus"></i> &nbsp;Please wait..')
        },
        success: function (response) {
            $('.page-loader').hide();
            e.disabled = false;
            sessionStorage['tourId'] = null;
            sessionStorage['managerId'] == null;
            sessionStorage['isReapproval'] = null;
            if (response.statusCode == 201 || response.statusCode == 200) {
                Swal.fire({
                    title: 'Success !',
                    text: response.statusCode == 201 ? 'Diploma Details has been successfully submitted!' : response.message,
                    icon: "success"
                })
            }
            else {
                Swal.fire({
                    title: 'Invalid !',
                    text: response.message,
                    icon: 'error'
                });
            }
            $('.page-loader').hide();
            $('#myModal').modal('hide');
            e.disabled = false;
            $("#inputPurposeOfTravel").focus();

        },
        complete: function () {
            e.disabled = false;
            $('.page-loader').hide();
            $("#btnTourPlanSubmit").html('<i class="fa-solid fa-plus"></i> &nbsp;Submit')
            $("#inputPurposeOfTravel").focus();
        },
        error: function (jqXHR, status) {
            e.disabled = false;
            $('.page-loader').hide();
            $("#btnTourPlanSubmit").html('<i class="fa-solid fa-plus"></i> &nbsp;Add')
            Swal.fire({
                title: 'Invalid !',
                text: jqXHR.responseJSON.title,
                icon: 'error'
            });
            $("#inputPurposeOfTravel").focus();
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
function validForMatrix() {

    if ($('#divMetricClaim').is(':visible')) {
        let inputMatricSecObtainedMarks = parseFloat($('#inputMatricSecObtainedMarks').val())
        let inputMatricSecMaximumMarks = parseFloat($('#inputMatricSecMaximumMarks').val())
        let inputMatricSecYearOfPassing = $('#inputMatricSecYearOfPassing').val()

        if (inputMatricSecObtainedMarks > inputMatricSecMaximumMarks) {
            toastHr("Obtained marks should not greater than maximum marks")
            $('#inputMatricSecObtainedMarks').addClass("error")
            return
        }

        if (inputMatricSecYearOfPassing == "") {
            toastHr("Please Enter Passing Year")
            $('#inputMatricSecYearOfPassing').addClass("error")
            return
        }



    }
    return true
}
function saveCurrentMatric_click(e) {
    let validX = validForMatrix()
    if (validX == undefined) {
        return
    }
    $('.inputMatric').prop('readonly', true);
    $('.MatricdivEditButtonClaim').show();
    $('.MatricsaveClaim').hide();
    $("#divViewMetric").show();
    $("#divUploadMetric").hide();
    $('.MatriccancelClaim').hide();

    FillApiDataIntoFrontEnd(currentMatricObject, '', 3);
    const formDataNew = new FormData();
    FillFormDataForPostApi(currentMatricObject, formDataNew)
    //formDataNew.append('EmpId', empObject.empId);
    var _url = apiBaseUrlHr + "/api/Candidate/SaveCandidateMatricDetails/" + candidateId;
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
            $("#btnTourPlanSubmit").html('<i class="fa-solid fa-plus"></i> &nbsp;Please wait..')
        },
        success: function (response) {
            if (isSaveAll) {
                return;
            }
            loadAllDataOfCandidateData();
            $('.page-loader').hide();
            e.disabled = false;
            sessionStorage['tourId'] = null;
            sessionStorage['managerId'] == null;
            sessionStorage['isReapproval'] = null;

            if (response.statusCode == 201 || response.statusCode == 200) {
                Swal.fire({
                    title: 'Success !',
                    text: response.statusCode == 201 ? 'Current Matric Detail has been successfully submitted!' : response.message,
                    icon: "success"
                })
            }
            else {
                Swal.fire({
                    title: 'Invalid !',
                    text: response.message,
                    icon: 'error'
                });
            }
            $('.page-loader').hide();
            $('#myModal').modal('hide');
            e.disabled = false;
            $("#inputPurposeOfTravel").focus();

        },
        complete: function () {
            e.disabled = false;
            $('.page-loader').hide();
            $("#btnTourPlanSubmit").html('<i class="fa-solid fa-plus"></i> &nbsp;Submit')
            $("#inputPurposeOfTravel").focus();
        },
        error: function (jqXHR, status) {
            e.disabled = false;
            $('.page-loader').hide();
            $("#btnTourPlanSubmit").html('<i class="fa-solid fa-plus"></i> &nbsp;Add')
            Swal.fire({
                title: 'Invalid !',
                text: jqXHR.responseJSON.title,
                icon: 'error'
            });
            $("#inputPurposeOfTravel").focus();
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
function editCurrentMatric_click(e) {


    FillApiDataIntoFrontEnd(currentMatricObject, '', 2);
    if ($('#inputMatricSecEvaluationType').val() === "Percentage") {
        $("#inputMatricSecTotalCgpa, #inputMatricSecCgpaMultiplyingFactor, #inputMatricSecCgpaObtained, #inputMatricSecCgpaCalculatedPercent, #inputMatricSecGrade").prop("disabled", true);
    } else {
        $("#inputMatricSecTotalCgpa, #inputMatricSecCgpaMultiplyingFactor, #inputMatricSecCgpaObtained, #inputMatricSecCgpaCalculatedPercent, #inputMatricSecGrade").prop("disabled", false);
    }
}
function cancelCurrentMatric_click(e) {

    FillApiDataIntoFrontEnd(currentMatricObject, '', 3);
}

function validForIntermidate() {

    if ($('#divIntermediateClaim').is(':visible')) {
        let inputIntermediateMaximumMarks = parseFloat($('#inputIntermediateMaximumMarks').val())
        let inputIntermediateObtainedMarks = parseFloat($('#inputIntermediateObtainedMarks').val())
        let inputIntermediateYearOfPassing = $('#inputIntermediateYearOfPassing').val()


        if (inputIntermediateObtainedMarks > inputIntermediateMaximumMarks) {
            toastHr("Obtained marks should not greater than maximum marks")
            $('#inputIntermediateObtainedMarks').addClass("error")
            return
        }
        if (inputIntermediateYearOfPassing == "") {
            toastHr("Please Enter Passing Year")
            $('#inputIntermediateYearOfPassing').addClass("error")
            return
        }
    }
    return true
}
function saveIntermediate_click(e) {
    let validX = validForIntermidate()
    if (validX == undefined) {
        return
    }
    $('.inputIntermediate').prop('readonly', true);
    $('#divUploadIntermediate').hide();
    $("#divViewIntermediate").show();
    $('.IntermediatedivEditButtonClaim').show();
    $('.IntermediatesaveClaim').hide();
    $('.IntermediatecancelClaim').hide();
    FillApiDataIntoFrontEnd(intermediateObject, '', 3);
    const formDataNew = new FormData();
    FillFormDataForPostApi(intermediateObject, formDataNew)
    //formDataNew.append('EmpId', empObject.empId);
    var _url = apiBaseUrlHr + "/api/Candidate/SaveCandidateIntermediateDetailsDetails/" + candidateId;
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
            $("#btnTourPlanSubmit").html('<i class="fa-solid fa-plus"></i> &nbsp;Please wait..')
        },
        success: function (response) {
            if (isSaveAll) {
                return;
            }
            loadAllDataOfCandidateData();
            $('.page-loader').hide();
            e.disabled = false;
            sessionStorage['tourId'] = null;
            sessionStorage['managerId'] == null;
            sessionStorage['isReapproval'] = null;
            if (response.statusCode == 201 || response.statusCode == 200) {
                Swal.fire({
                    title: 'Success !',
                    text: response.statusCode == 201 ? 'Intermidiate Detail has been successfully submitted!' : response.message,
                    icon: "success"
                })
            }
            else {
                Swal.fire({
                    title: 'Invalid !',
                    text: response.message,
                    icon: 'error'
                });
            }
            $('.page-loader').hide();
            $('#myModal').modal('hide');
            e.disabled = false;
            $("#inputPurposeOfTravel").focus();

        },
        complete: function () {
            e.disabled = false;
            $('.page-loader').hide();
            $("#btnTourPlanSubmit").html('<i class="fa-solid fa-plus"></i> &nbsp;Submit')
            $("#inputPurposeOfTravel").focus();
        },
        error: function (jqXHR, status) {
            e.disabled = false;
            $('.page-loader').hide();
            $("#btnTourPlanSubmit").html('<i class="fa-solid fa-plus"></i> &nbsp;Add')
            Swal.fire({
                title: 'Invalid !',
                text: jqXHR.responseJSON.title,
                icon: 'error'
            });
            $("#inputPurposeOfTravel").focus();
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
function editIntermediate_click(e) {

    FillApiDataIntoFrontEnd(intermediateObject, '', 2);
    if ($('#inputIntermediateEvaluationType').val() === "Percentage") {
        $("#inputIntermediateTotalCgpa, #inputIntermediateCgpaMultiplyingFactor, #inputIntermediateCgpaObtained, #inputIntermediateCgpaCalculatedPercent, #inputIntermediateGrade").prop("disabled", true);
    } else {
        $("#inputIntermediateTotalCgpa, #inputIntermediateCgpaMultiplyingFactor, #inputIntermediateCgpaObtained, #inputIntermediateCgpaCalculatedPercent, #inputIntermediateGrade").prop("disabled", false);
    }
}
function cancelIntermediate_click(e) {

    FillApiDataIntoFrontEnd(intermediateObject, '', 3);
}

function validForiti() {

    if ($('#divitiDetails').is(':visible')) {
        let inputItiMaximumMarks = parseFloat($('#inputItiMaximumMarks').val())
        let inputItiObtainedMarks = parseFloat($('#inputItiObtainedMarks').val())
        let inputItiYearOfPassing = $('#inputItiYearOfPassing').val()

        if (inputItiObtainedMarks > inputItiMaximumMarks) {
            toastHr("Obtained marks should not greater than maximum marks")
            $('#inputItiObtainedMarks').addClass("error")
            return
        }
        if (inputItiYearOfPassing == "") {
            toastHr("Please Enter Passing Year")
            $('#inputItiYearOfPassing').addClass("error")
            return
        }
    }
    return true
}
function saveIti_click(e) {
    let validX = validForiti()
    if (validX == undefined) {
        return
    }
    $('.inputIti').prop('readonly', true);
    $('#divUploadIti').hide();
    $("#divViewIti").show();
    $('.itiDivEditButtonClaim').show();
    $('.IticancelClaim').hide();
    $('.ItisaveClaim').hide();
    FillApiDataIntoFrontEnd(itiObject, '', 3);
    const formDataNew = new FormData();
    FillFormDataForPostApi(itiObject, formDataNew)
    //formDataNew.append('EmpId', empObject.empId);
    var _url = apiBaseUrlHr + "/api/Candidate/SaveCandidateITIDetailsDetails/" + candidateId;
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
            $("#btnTourPlanSubmit").html('<i class="fa-solid fa-plus"></i> &nbsp;Please wait..')
        },
        success: function (response) {
            if (isSaveAll) {
                return;
            }
            loadAllDataOfCandidateData();
            $('.page-loader').hide();
            e.disabled = false;
            sessionStorage['tourId'] = null;
            sessionStorage['managerId'] == null;
            sessionStorage['isReapproval'] = null;
            if (response.statusCode == 201 || response.statusCode == 200) {
                Swal.fire({
                    title: 'Success !',
                    text: response.statusCode == 201 ? 'ITI details has been successfully submitted!' : response.message,
                    icon: "success"
                })
            }
            else {
                Swal.fire({
                    title: 'Invalid !',
                    text: response.message,
                    icon: 'error'
                });
            }
            $('.page-loader').hide();
            $('#myModal').modal('hide');
            e.disabled = false;
            $("#inputPurposeOfTravel").focus();

        },
        complete: function () {
            e.disabled = false;
            $('.page-loader').hide();
            $("#btnTourPlanSubmit").html('<i class="fa-solid fa-plus"></i> &nbsp;Submit')
            $("#inputPurposeOfTravel").focus();
        },
        error: function (jqXHR, status) {
            e.disabled = false;
            $('.page-loader').hide();
            $("#btnTourPlanSubmit").html('<i class="fa-solid fa-plus"></i> &nbsp;Add')
            Swal.fire({
                title: 'Invalid !',
                text: jqXHR.responseJSON.title,
                icon: 'error'
            });
            $("#inputPurposeOfTravel").focus();
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
function editIti_click(e) {

    FillApiDataIntoFrontEnd(itiObject, '', 2);
    if ($('#inputItiEvaluationType').val() === "Percentage") {
        $("#inputItiTotalCgpa, #inputItiCgpaMultiplyingFactor, #inputItiCgpaObtained, #inputItiCgpaCalculatedPercent, #inputItiGrade").prop("disabled", true);
    } else {
        $("#inputItiTotalCgpa, #inputItiCgpaMultiplyingFactor, #inputItiCgpaObtained, #inputItiCgpaCalculatedPercent, #inputItiGrade").prop("disabled", false);
    }
}
function cancelIti_click(e) {

    FillApiDataIntoFrontEnd(itiObject, '', 3);
}

function validForApprenticip() {

    if ($('#divApprenticeDetails').is(':visible')) {
        let inputApprenticeMaximumMarks = parseFloat($('#inputApprenticeMaximumMarks').val())
        let inputApprenticeObtainedMarks = parseFloat($('#inputApprenticeObtainedMarks').val())
        let inputApprenticeYearOfPassing = $('#inputApprenticeYearOfPassing').val()

        if (inputApprenticeObtainedMarks > inputApprenticeMaximumMarks) {
            toastHr("Obtained marks should not greater than maximum marks")
            $('#inputApprenticeObtainedMarks').addClass("error")
            return
        }
        if (inputApprenticeYearOfPassing == "") {
            toastHr("Please Enter Passing Year")
            $('#inputApprenticeYearOfPassing').addClass("error")
            return
        }
    }
    return true
}
function saveApprentice_click(e) {
    let validX = validForApprenticip()
    if (validX == undefined) {
        retrun
    }

    $('.inputApprentice').prop('readonly', true);
    $("#divUploadApprentice").hide();
    $("#divViewApprentice").show();
    $("#selectApprenticeCourseType").prop('disabled', true);
    $('.ApprenticeDivEditButtonClaim').show();
    $('.ApprenticecancelClaim').hide();
    $('.ApprenticesaveClaim').hide();
    FillApiDataIntoFrontEnd(apprenticeObject, '', 3);
    const formDataNew = new FormData();
    FillFormDataForPostApi(apprenticeObject, formDataNew)
    //formDataNew.append('EmpId', empObject.empId);



    var _url = apiBaseUrlHr + "/api/Candidate/SaveCandidateApprenticeDetails/" + candidateId;
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
            $("#btnTourPlanSubmit").html('<i class="fa-solid fa-plus"></i> &nbsp;Please wait..')
        },
        success: function (response) {
            if (isSaveAll) {
                return;
            }
            loadAllDataOfCandidateData();
            $('.page-loader').hide();
            e.disabled = false;
            sessionStorage['tourId'] = null;
            sessionStorage['managerId'] == null;
            sessionStorage['isReapproval'] = null;
            if (response.statusCode == 201 || response.statusCode == 200) {
                Swal.fire({
                    title: 'Success !',
                    text: response.statusCode == 201 ? 'Apprentice has been successfully submitted!' : response.message,
                    icon: "success"
                })
            }
            else {
                Swal.fire({
                    title: 'Invalid !',
                    text: response.message,
                    icon: 'error'
                });
            }
            $('.page-loader').hide();
            $('#myModal').modal('hide');
            e.disabled = false;
            $("#inputPurposeOfTravel").focus();

        },
        complete: function () {
            e.disabled = false;
            $('.page-loader').hide();
            $("#btnTourPlanSubmit").html('<i class="fa-solid fa-plus"></i> &nbsp;Submit')
            $("#inputPurposeOfTravel").focus();
        },
        error: function (jqXHR, status) {
            e.disabled = false;
            $('.page-loader').hide();
            $("#btnTourPlanSubmit").html('<i class="fa-solid fa-plus"></i> &nbsp;Add')
            Swal.fire({
                title: 'Invalid !',
                text: jqXHR.responseJSON.title,
                icon: 'error'
            });
            $("#inputPurposeOfTravel").focus();
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
function editApprentice_click(e) {

    FillApiDataIntoFrontEnd(apprenticeObject, '', 2);

    if ($('#inputApprenticeEvaluationType').val() === "Percentage") {
        $("#inputApprenticeTotalCgpa, #inputApprenticeCgpaMultiplyingFactor, #inputApprenticeCgpaObtained, #inputApprenticeCgpaCalculatedPercent, #inputApprenticeGrade").prop("disabled", true);
    } else {
        $("#inputApprenticeTotalCgpa, #inputApprenticeCgpaMultiplyingFactor, #inputApprenticeCgpaObtained, #inputApprenticeCgpaCalculatedPercent, #inputApprenticeGrade").prop("disabled", false);
    }
}
function cancelApprentice_click(e) {

    FillApiDataIntoFrontEnd(apprenticeObject, '', 3);
}

function validForDiploma() {

    if ($('#divdiplomaDetails').is(':visible')) {
        let inputDiplomaMaximumMarks = parseFloat($('#inputDiplomaMaximumMarks').val())
        let inputDiplomaObtainedMarks = parseFloat($('#inputDiplomaObtainedMarks').val())
        let inputDiplomaYearOfPassing = $('#inputDiplomaYearOfPassing').val()

        if (inputDiplomaObtainedMarks > inputDiplomaMaximumMarks) {
            toastHr("Obtained marks should not greater than maximum marks")
            $('#inputDiplomaObtainedMarks').addClass("error")
            return
        }
        if (inputDiplomaYearOfPassing == "") {
            toastHr("Please Enter Passing Year")
            $('#inputDiplomaYearOfPassing').addClass("error")
            return
        }

    }
    return true
}
function saveDiploma_click(e) {
    let validX = validForDiploma()
    if (validX == undefined) {
        return
    }
    $('.inputDiploma').prop('readonly', true);
    $("#divUploadDiploma").hide();
    $("#divViewDiploma").show();
    $('.divGraduationEditButtonClaim').show();
    $('.DiplomasaveClaim').hide();
    $('.DiplomacancelClaim').hide();
    FillApiDataIntoFrontEnd(diplomaObject, '', 3);
    const formDataNew = new FormData();
    FillFormDataForPostApi(diplomaObject, formDataNew)
    //formDataNew.append('EmpId', empObject.empId);



    var _url = apiBaseUrlHr + "/api/Candidate/SaveCandidateDiplomaDetailsDetails/" + candidateId;
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
            $("#btnTourPlanSubmit").html('<i class="fa-solid fa-plus"></i> &nbsp;Please wait..')
        },
        success: function (response) {
            if (isSaveAll) {
                return;
            }
            loadAllDataOfCandidateData();
            $('.page-loader').hide();
            e.disabled = false;
            sessionStorage['tourId'] = null;
            sessionStorage['managerId'] == null;
            sessionStorage['isReapproval'] = null;
            if (response.statusCode == 201 || response.statusCode == 200) {
                Swal.fire({
                    title: 'Success !',
                    text: response.statusCode == 201 ? 'Tour request has been successfully submitted!' : response.message,
                    icon: "success"
                })
            }
            else {
                Swal.fire({
                    title: 'Invalid !',
                    text: response.message,
                    icon: 'error'
                });
            }
            $('.page-loader').hide();
            $('#myModal').modal('hide');
            e.disabled = false;
            $("#inputPurposeOfTravel").focus();

        },
        complete: function () {
            e.disabled = false;
            $('.page-loader').hide();
            $("#btnTourPlanSubmit").html('<i class="fa-solid fa-plus"></i> &nbsp;Submit')
            $("#inputPurposeOfTravel").focus();
        },
        error: function (jqXHR, status) {
            e.disabled = false;
            $('.page-loader').hide();
            $("#btnTourPlanSubmit").html('<i class="fa-solid fa-plus"></i> &nbsp;Add')
            Swal.fire({
                title: 'Invalid !',
                text: jqXHR.responseJSON.title,
                icon: 'error'
            });
            $("#inputPurposeOfTravel").focus();
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
function editDiploma_click(e) {

    FillApiDataIntoFrontEnd(diplomaObject, '', 2);
    if ($('#inputDiplomaEvaluationType').val() === "Percentage") {
        $("#inputDiplomaTotalCgpa, #inputDiplomaCgpaMultiplyingFactor, #inputDiplomaCgpaObtained, #inputDiplomaCgpaCalculatedPercent, #inputDiplomaGrade").prop("disabled", true);
    } else {
        $("#inputDiplomaTotalCgpa, #inputDiplomaCgpaMultiplyingFactor, #inputDiplomaCgpaObtained, #inputDiplomaCgpaCalculatedPercent, #inputDiplomaGrade").prop("disabled", false);
    }
}
function cancelDiploma_click(e) {

    FillApiDataIntoFrontEnd(diplomaObject, '', 3);
}


function validForGraduation() {

    if ($('#divGrduationDetails').is(':visible')) {
        let inputGrduationMaximumMarks = parseFloat($('#inputGrduationMaximumMarks').val())
        let inputGrduationObtainedMarks = parseFloat($('#inputGrduationObtainedMarks').val())
        let inputGrduationYearOfPassing = $('#inputGrduationYearOfPassing').val()


        if (inputGrduationObtainedMarks > inputGrduationMaximumMarks) {
            toastHr("Obtained marks should not greater than maximum marks")
            $('#inputGrduationObtainedMarks').addClass("error")
            return
        }
        if (inputGrduationYearOfPassing == "") {
            toastHr("Please Enter Passing Year")
            $('#inputGrduationYearOfPassing').addClass("error")
            return
        }
    }
    return true
}
function saveGraduation_click(e) {

    let validX = validForGraduation()
    if (validX == undefined) {
        return
    }
    $('.inputGraduation').prop('readonly', true);
    $("#divUploadGraduation").hide();
    $("#divViewGraduation").show();
    $('.divGraduationEditButtonClaim').show();
    $('.GraduationsaveClaim').hide();
    $('.GraduationcancelClaim').hide();
    FillApiDataIntoFrontEnd(graduationObject, '', 3);
    const formDataNew = new FormData();
    FillFormDataForPostApi(graduationObject, formDataNew)
    //formDataNew.append('EmpId', empObject.empId);



    var _url = apiBaseUrlHr + "/api/Candidate/SaveCandidateGraduationDetails/" + candidateId;
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
            $("#btnTourPlanSubmit").html('<i class="fa-solid fa-plus"></i> &nbsp;Please wait..')
        },
        success: function (response) {
            if (isSaveAll) {
                return;
            }
            loadAllDataOfCandidateData();
            $('.page-loader').hide();
            e.disabled = false;
            sessionStorage['tourId'] = null;
            sessionStorage['managerId'] == null;
            sessionStorage['isReapproval'] = null;
            if (response.statusCode == 201 || response.statusCode == 200) {
                Swal.fire({
                    title: 'Success !',
                    text: response.statusCode == 201 ? 'Tour request has been successfully submitted!' : response.message,
                    icon: "success"
                })
            }
            else {
                Swal.fire({
                    title: 'Invalid !',
                    text: response.message,
                    icon: 'error'
                });
            }
            $('.page-loader').hide();
            $('#myModal').modal('hide');
            e.disabled = false;
            $("#inputPurposeOfTravel").focus();

        },
        complete: function () {
            e.disabled = false;
            $('.page-loader').hide();
            $("#btnTourPlanSubmit").html('<i class="fa-solid fa-plus"></i> &nbsp;Submit')
            $("#inputPurposeOfTravel").focus();
        },
        error: function (jqXHR, status) {
            e.disabled = false;
            $('.page-loader').hide();
            $("#btnTourPlanSubmit").html('<i class="fa-solid fa-plus"></i> &nbsp;Add')
            Swal.fire({
                title: 'Invalid !',
                text: jqXHR.responseJSON.title,
                icon: 'error'
            });
            $("#inputPurposeOfTravel").focus();
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
function editGraduation_click(e) {

    FillApiDataIntoFrontEnd(graduationObject, '', 2);
    if ($("#inputGrduationEvaluationType").val() === "Percentage") {
        $("#inputGrduationTotalCgpa, #inputGrduationCgpaMultiplyingFactor, #inputGrduationCgpaObtained, #inputGrduationCgpaCalculatedPercent, #inputGrduationGrade").prop("disabled", true);
    } else {
        $("#inputGrduationTotalCgpa, #inputGrduationCgpaMultiplyingFactor, #inputGrduationCgpaObtained, #inputGrduationCgpaCalculatedPercent, #inputGrduationGrade").prop("disabled", false);
    }
}
function cancelGraduation_click(e) {

    FillApiDataIntoFrontEnd(graduationObject, '', 3);
}

function validForPostGraduation() {

    if ($('#divpostGraduationDetails').is(':visible')) {
        let inputPostGraduationMaximumMarks = parseFloat($('#inputPostGraduationMaximumMarks').val())
        let inputPostGraduationObtainedMarks = parseFloat($('#inputPostGraduationObtainedMarks').val())
        let inputPostGraduationYearOfPassing = $('#inputPostGraduationYearOfPassing').val()

        if (inputPostGraduationObtainedMarks > inputPostGraduationMaximumMarks) {
            toastHr("Obtained marks should not greater than maximum marks")
            $('#inputPostGraduationObtainedMarks').addClass("error")
            return
        }
        if (inputPostGraduationYearOfPassing == "") {
            toastHr("Please Enter Passing Year")
            $('#inputPostGraduationYearOfPassing').addClass("error")
            return
        }
    }
    return true
}
function savePostGraduation_click(e) {
    let validX = validForPostGraduation()
    if (validX == undefined) {
        return
    }
    $('.inputPostGraduation').prop('readonly', true);
    $("#divUploadPostGraduation").hide();
    $("#divViewPostGraduation").show();
    $('.divPostGraduationEditButtonClaim').show();
    $('.PostGraduationcancelClaim').hide();
    $('.PostGrautionsaveClaim').hide();
    FillApiDataIntoFrontEnd(postGraduationObject, '', 3);
    const formDataNew = new FormData();
    FillFormDataForPostApi(postGraduationObject, formDataNew)
    //formDataNew.append('EmpId', empObject.empId);



    var _url = apiBaseUrlHr + "/api/Candidate/SaveUpdateCandidatePostGraduationDetailsDetails/" + candidateId;
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
            $("#btnTourPlanSubmit").html('<i class="fa-solid fa-plus"></i> &nbsp;Please wait..')
        },
        success: function (response) {
            if (isSaveAll) {
                return;
            }
            loadAllDataOfCandidateData();
            $('.page-loader').hide();
            e.disabled = false;
            sessionStorage['tourId'] = null;
            sessionStorage['managerId'] == null;
            sessionStorage['isReapproval'] = null;
            if (response.statusCode == 201 || response.statusCode == 200) {
                Swal.fire({
                    title: 'Success !',
                    text: response.statusCode == 201 ? 'Tour request has been successfully submitted!' : response.message,
                    icon: "success"
                })
            }
            else {
                Swal.fire({
                    title: 'Invalid !',
                    text: response.message,
                    icon: 'error'
                });
            }
            $('.page-loader').hide();
            $('#myModal').modal('hide');
            e.disabled = false;
            $("#inputPurposeOfTravel").focus();

        },
        complete: function () {
            e.disabled = false;
            $('.page-loader').hide();
            $("#btnTourPlanSubmit").html('<i class="fa-solid fa-plus"></i> &nbsp;Submit')
            $("#inputPurposeOfTravel").focus();
        },
        error: function (jqXHR, status) {
            e.disabled = false;
            $('.page-loader').hide();
            $("#btnTourPlanSubmit").html('<i class="fa-solid fa-plus"></i> &nbsp;Add')
            Swal.fire({
                title: 'Invalid !',
                text: jqXHR.responseJSON.title,
                icon: 'error'
            });
            $("#inputPurposeOfTravel").focus();
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
function editPostGraduation_click(e) {

    FillApiDataIntoFrontEnd(postGraduationObject, '', 2);
    if ($("#inputPostGraduationEvaluationType").val() === "Percentage") {
        $("#inputPostGraduationTotalCgpa, #inputPostGraduationCgpaMultiplyingFactor, #inputPostGraduationCgpaObtained, #inputPostGraduationCgpaCalculatedPercent, #inputPostGraduationGrade").prop("disabled", true);
    } else {
        $("#inputPostGraduationTotalCgpa, #inputPostGraduationCgpaMultiplyingFactor, #inputPostGraduationCgpaObtained, #inputPostGraduationCgpaCalculatedPercent, #inputPostGraduationGrade").prop("disabled", false);
    }
}
function cancelPostGraduation_click(e) {

    FillApiDataIntoFrontEnd(postGraduationObject, '', 3);
}


function getOtherEducationDetailsInArray(formDataNew) {
    var arrOtherEducationDetails = [];
    count = 0;

    for (var element of $("#items > tr")) {
        var index = element.id.split('_')[1];
        var eDetails = {
            SN: 0,
            OtherInstitute: "",
            OtherCity: "",
            OtherTypeOfCourse: "",
            OtherSpecialization: "",
            OtherStartDate: "",
            OtherEndDate: "",
            OtherPercentage: "",
            StartFileIndexCount: 0,
            EndFileIndexCount: 0
        }
        eDetails.SN = $("#uploadId_" + index).val();
        eDetails.OtherInstitute = $("#inputOtherInstitute_" + index).val();
        eDetails.OtherCity = $("#inputOtherCity_" + index).val();
        eDetails.OtherTypeOfCourse = $("#inputOtherTypeOfCourse_" + index).val();
        eDetails.OtherSpecialization = $("#inputOtherSpecialization_" + index).val();
        eDetails.OtherStartDate = formatDateDDMMYYYtoMMDDYYY($("#inputOtherStartDate_" + index).val());
        eDetails.OtherEndDate = formatDateDDMMYYYtoMMDDYYY($("#inputOherEndDate_" + index).val());
        eDetails.OtherPercentage = $("#inputOtherPercentage_" + index).val();
        eDetails.StartFileIndexCount = count;
        if (!('UploadCopy_' + index in uploadDetails)) {
            eDetails.StartFileIndexCount = -1;
        }
        else {
            for (var e of uploadDetails['UploadCopy_' + index]) {
                formDataNew.append('UploadCopy', e.uploadedFile)
                count++
            }
            eDetails.EndFileIndexCount = count - 1;
        }
        arrOtherEducationDetails.push(eDetails);


    }
    return arrOtherEducationDetails;
}
function saveOtherEducationSave_Click(e) {
    const formDataNew = new FormData();
    var arrData = getOtherEducationDetailsInArray(formDataNew)
    formDataNew.append('EducationOtherDetailsJson', JSON.stringify(arrData));
    //FillFormDataForPostApi(postGraduationObject, formDataNew)
    //formDataNew.append('EmpId', empObject.empId);



    var _url = apiBaseUrlHr + "/api/Candidate/SaveOthersEducation/" + candidateId;
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
            $("#btnTourPlanSubmit").html('<i class="fa-solid fa-plus"></i> &nbsp;Please wait..')
        },
        success: function (response) {
            if (isSaveAll) {
                return;
            }
            loadAllDataOfCandidateData();
            $('.page-loader').hide();
            e.disabled = false;
            sessionStorage['tourId'] = null;
            sessionStorage['managerId'] == null;
            sessionStorage['isReapproval'] = null;
            if (response.statusCode == 201 || response.statusCode == 200) {
                Swal.fire({
                    title: 'Success !',
                    text: response.statusCode == 201 ? 'Tour request has been successfully submitted!' : response.message,
                    icon: "success"
                })
            }
            else {
                Swal.fire({
                    title: 'Invalid !',
                    text: response.message,
                    icon: 'error'
                });
            }

            $('#myModal').modal('hide');
            e.disabled = false;
            $("#inputPurposeOfTravel").focus();

        },
        complete: function () {
            e.disabled = false;
            $('.page-loader').hide();
            $("#btnTourPlanSubmit").html('<i class="fa-solid fa-plus"></i> &nbsp;Submit')
            $("#inputPurposeOfTravel").focus();
        },
        error: function (jqXHR, status) {
            e.disabled = false;
            $('.page-loader').hide();
            $("#btnTourPlanSubmit").html('<i class="fa-solid fa-plus"></i> &nbsp;Add')
            Swal.fire({
                title: 'Invalid !',
                text: jqXHR.responseJSON.title,
                icon: 'error'
            });
            $("#inputPurposeOfTravel").focus();
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

// current data

function getOtherEmployerDetailsInArray(formDataNew) {
    var arrOtherEmployerDetails = [];
    count = 0;

    for (var element of $("#empItems > tr")) {
        var index = element.id.split('_')[1];
        var eDetails = {
            "NameofOrganization": "",
            "City": "",
            "StartDate": "",
            "EndDate": "",
            "Designation": "",
            "IsCurrentlyWorking": false,
            "StartFileIndexCount": 0,
            "EndFileIndexCount": 0
        }
        eDetails.Id = $("#uploadCurrentId_" + index).val();
        eDetails.NameofOrganization = $("#inputTableNameofOrganization_" + index).val();
        eDetails.City = $("#inputtableCity_" + index).val();
        eDetails.StartDate = formatDateDDMMYYYtoMMDDYYY($("#inputTableStartDate_" + index).val());
        if (!document.getElementById("checkboxCurrentyWorking_" + index).checked) {
            eDetails.EndDate = formatDateDDMMYYYtoMMDDYYY($("#inputTableEndDate_" + index).val());
        }

        eDetails.Designation = $("#inputTableDesignation_" + index).val();
        eDetails.IsCurrentlyWorking = document.getElementById("checkboxCurrentyWorking_" + index).checked;
        eDetails.StartFileIndexCount = count;
        if (!('UploadJoiningLetter_' + index in uploadDetails)) {
            eDetails.StartFileIndexCount = -1;
        }
        else {
            for (var e of uploadDetails['UploadJoiningLetter_' + index]) {
                formDataNew.append('UploadJoining_ExperienceLetter', e.uploadedFile)
                count++
            }
            eDetails.EndFileIndexCount = count - 1;
        }
        arrOtherEmployerDetails.push(eDetails);


    }
    return arrOtherEmployerDetails;
}
function saveEmployerDetails_click(e) {
    const formDataNew = new FormData();
    var arrData = getOtherEmployerDetailsInArray(formDataNew)
    formDataNew.append('EmployerCurrentDetailsJson', JSON.stringify(arrData));
    //FillFormDataForPostApi(postGraduationObject, formDataNew)
    //formDataNew.append('EmpId', empObject.empId);



    var _url = apiBaseUrlHr + "/api/Candidate/SaveEmployerCurrentDetails/" + candidateId;
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
            $("#btnTourPlanSubmit").html('<i class="fa-solid fa-plus"></i> &nbsp;Please wait..')
        },
        success: function (response) {
            if (isSaveAll) {
                return;
            }
            loadAllDataOfCandidateData();
            $('.page-loader').hide();
            e.disabled = false;
            sessionStorage['tourId'] = null;
            sessionStorage['managerId'] == null;
            sessionStorage['isReapproval'] = null;
            if (response.statusCode == 201 || response.statusCode == 200) {
                Swal.fire({
                    title: 'Success !',
                    text: response.statusCode == 201 ? 'Tour request has been successfully submitted!' : response.message,
                    icon: "success"
                })
            }
            else {
                Swal.fire({
                    title: 'Invalid !',
                    text: response.message,
                    icon: 'error'
                });
            }

            $('#myModal').modal('hide');
            e.disabled = false;
            $("#inputPurposeOfTravel").focus();

        },
        complete: function () {
            e.disabled = false;
            $('.page-loader').hide();
            $("#btnTourPlanSubmit").html('<i class="fa-solid fa-plus"></i> &nbsp;Submit')
            $("#inputPurposeOfTravel").focus();
        },
        error: function (jqXHR, status) {
            e.disabled = false;
            $('.page-loader').hide();
            $("#btnTourPlanSubmit").html('<i class="fa-solid fa-plus"></i> &nbsp;Add')
            Swal.fire({
                title: 'Invalid !',
                text: jqXHR.responseJSON.title,
                icon: 'error'
            });
            $("#inputPurposeOfTravel").focus();
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
$(document).ready(function () {
    // Assuming your input values are in date format, you may need to convert them to timestamps or handle them appropriately.

    var durationStart = new Date(formatDateDDMMYYYtoMMDDYYY($('#inputExServicemenJoiningDate').val()));
    var durationEnd = new Date(formatDateDDMMYYYtoMMDDYYY($('#inputExServicemenEndDate').val()));

    // Check if the values are valid dates
    if (!isNaN(durationStart) && !isNaN(durationEnd)) {
        var subtractDuration = durationEnd - durationStart;

        // Assuming inputExServicemenDuration is a text input, set its value
        $('#inputExServicemenDuration').val(subtractDuration);

        console.log(subtractDuration, "hello");
        console.log(durationStart, durationEnd);
    } else {
        console.log("Invalid date format");
    }

    //Arsh---------
    $('#btnNextEMPLOYERDETAILS,#btnNextEMPLOYERDETAILSUp').click(function () {
        if (!iseditableunder) {
            $('#tabOther').addClass('active');
            $("#tabOtherList").addClass("active");
            $("#content5").css({ 'display': 'none', 'left': '0%', 'opacity': '1' })
            $('#content6').css({ 'display': 'block', 'left': '0%', 'opacity': '1' })
        }

    })
    $('#otherPreviousBtn,#otherPreviousBtnUp').click(function () {
        if (!iseditableunder) {
            $('#tabEmployerDetails').addClass('active');
            $("#content5").css({ 'display': 'none', 'left': '0%', 'opacity': '1' })
            $('#content4').css({ 'display': 'block', 'left': '0%', 'opacity': '1' })
        }
    });

    //-----------------------

});

//Arsh  Start----------
function toastUndertaking(value) {
    Toastify({
        text: `${value}`,
        className: "info",

        style: {
            background: "linear-gradient(#ce3753, #db0300)",


        },
        duration: 4000,
    }).showToast();
}

//Candidate Undertaking-------------
function SaveCandidateUndertaking(e) {


    const formDataNew = new FormData();
    FillFormDataForPostApi(undertakingObject, formDataNew)

    formDataNew.append('candidateId', candidateId);

    let textAreaDeclaration = $('#textAreaDeclaration').val().trim()
    if (textAreaDeclaration == '') {

        toastUndertaking("Please enter description  ! ");
        return;
    }

    formDataNew.append('UnderTackingDescriptin', textAreaDeclaration);

    if ('UndertakingFiles' in uploadDetails)
        for (var e1 of uploadDetails['UndertakingFiles']) {
            formDataNew.append('UnderTackingFiles', e1.uploadedFile);
        }

    var _url = apiBaseUrlHr + "/api/Candidate/SaveCandidateUnderTacking";
    _url = _url.replace(/[\u200B-\u200D\uFEFF]/g, '');

    $.ajax({
        type: "POST",
        url: _url,
        data: formDataNew,
        processData: false,
        contentType: false,
        /*headers: { Authorization: ApiToken },*/
        beforeSend: function () {

            $('.page-loader').show();
            $("#btnTourPlanSubmit").html('<i class="fa-solid fa-plus"></i> &nbsp;Please wait..')
        },
        success: function (response) {
            $('.page-loader').hide();


            $('#textAreaDeclaration').val('');
            $('#spanUndertakingFiles').val(0);

            if ('UndertakingFiles' in uploadDetails)
                uploadDetails['UndertakingFiles'].length = 0;

            if (response.statusCode == 201 || response.statusCode == 200) {
                Swal.fire({
                    title: 'Success !',
                    text: response.statusCode == 201 ? 'Message' : response.message,
                    icon: "success"

                })
                getDataUndertakingDetails();

            }

            else {
                Swal.fire({
                    title: 'Invalid !',
                    text: response.message,
                    icon: 'error'
                });
            }
            $('.page-loader').hide();
            $('#myModal').modal('hide');
            e.disabled = false;
            $("#inputPurposeOfTravel").focus();

        },
        complete: function () {
            e.disabled = false;
            $('.page-loader').hide();
            $("#btnTourPlanSubmit").html('<i class="fa-solid fa-plus"></i> &nbsp;Submit')

        },
        error: function (jqXHR, status) {
            e.disabled = false;
            $('.page-loader').hide();
            $("#btnTourPlanSubmit").html('<i class="fa-solid fa-plus"></i> &nbsp;Add')
            Swal.fire({
                title: 'Invalid !',
                text: jqXHR.responseJSON.title,
                icon: 'error'
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


//Arsh  End----------
function validForReservationCatogary() {
    if ($('#selectReservationCategory').is(':visible')) {
        let selectReservationCategory = $('#selectReservationCategory').val()
        if (!selectReservationCategory) {
            toastHr('Please select Reservation Category')
            $('#selectReservationCategory').addClass("error")
            return
        }
    }
    return true
}
function saveOther_click(e) {
    let validX = validForReservationCatogary()
    if (validX == undefined) {
        return
    }
    FillApiDataIntoFrontEnd(otherObject, '', 3);
    const formDataNew = new FormData();

    FillFormDataForPostApi(otherObject, formDataNew)
    //formDataNew.append('EmpId', empObject.empId);

    var _url = apiBaseUrlHr + "/api/Candidate/SaveCandidateOtherDetailsUploaded/" + candidateId;
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
            $("#btnTourPlanSubmit").html('<i class="fa-solid fa-plus"></i> &nbsp;Please wait..')
        },
        success: function (response) {
            if (isSaveAll) {
                return;
            }
            loadAllDataOfCandidateData();
            $('.page-loader').hide();
            e.disabled = false;
            sessionStorage['tourId'] = null;
            sessionStorage['managerId'] == null;
            sessionStorage['isReapproval'] = null;
            if (response.statusCode == 201 || response.statusCode == 200) {
                Swal.fire({
                    title: 'Success !',
                    text: response.statusCode == 201 ? 'Tour request has been successfully submitted!' : response.message,
                    icon: "success"
                })
            }
            else {
                Swal.fire({
                    title: 'Invalid !',
                    text: response.message,
                    icon: 'error'
                });
            }
            $('.page-loader').hide();
            $('#myModal').modal('hide');
            e.disabled = false;
            $("#inputPurposeOfTravel").focus();

        },
        complete: function () {
            e.disabled = false;
            $('.page-loader').hide();
            $("#btnTourPlanSubmit").html('<i class="fa-solid fa-plus"></i> &nbsp;Submit')
            $("#inputPurposeOfTravel").focus();
        },
        error: function (jqXHR, status) {
            e.disabled = false;
            $('.page-loader').hide();
            $("#btnTourPlanSubmit").html('<i class="fa-solid fa-plus"></i> &nbsp;Add')
            Swal.fire({
                title: 'Invalid !',
                text: jqXHR.responseJSON.title,
                icon: 'error'
            });
            $("#inputPurposeOfTravel").focus();
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
function editOther_click(e) {
    FillApiDataIntoFrontEnd(otherObject, '', 2);
}
function cancelOther_click(e) {

    FillApiDataIntoFrontEnd(otherObject, '', 3);
}
// shah
function radioButtonChange(e, type) {
    debugger
    if (type === 'yes') {
        $('#inputPWDCertificateNo').show();
        $('#inputPWDDateOfIssue').show();
        $('#inputPWDIssuingAuthority').show();
    }

    else {
        $('#inputPWDCertificateNo').hide();
        $('#inputPWDDateOfIssue').hide();
        $('#inputPWDIssuingAuthority').hide();
    }
}

// shah


function FillApiDataIntoFrontEnd(objectFront, objectApi, mode) {
    //mode=1 (Read Only) Loading Data from API()
    //mode=2 (Edit ) Click on Edit
    //mode=3 (Save Read Only ) Click on Edit 

    for (let e of objectFront) {

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
                $("#" + e.frontFieldName).prop('readony', true);
                if (e.elementType == 'select') {
                    $("#" + e.frontFieldName).prop('disabled', true);
                }
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
            $("#" + e.frontFieldName).attr(e.attrName, objectApi[e.apiFieldName]);
        }
        else if (e.elementType == 'span') {
            if (mode == 1) {
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

var permanentAddress = false;
var homeAddress = false;

function saveAddress_click(e) {


    var address =
    {

        presentAddress: {
            addressType: "presentAddress",
            address1: $("#inputPresentAddress1").val(),
            address2: $("#inputPresentAddress2").val(),
            city: $("#inputPresentCity").val(),
            state: $("#selectPresentState").val(),
            pincode: $("#inputPresentPincode").val(),
            country: $("#selectPresentCountry").val()
        },
        permanentAddress: {
            addressType: "permanentAddress",
            address1: $("#inputPermanentAddress1").val(),
            address2: $("#inputPermanentAddress2").val(),
            city: $("#inputPermanentCity").val(),
            state: $("#selectPermanentState").val(),
            pincode: $("#inputPermanentPincode").val(),
            country: $("#selectPermanentCountry").val()
        },
        hometownAddress: {
            addressType: "hometownAddress",
            address1: $("#inputHometownAddress1").val(),
            address2: $("#inputHometownAddress2").val(),
            city: $("#inputHometownCity").val(),
            state: $("#selectHometownState").val(),
            pincode: $("#inputHometownPincode").val(),
            country: $("#selectHometownCountry").val()
        }
    }
    //FillFormDataForPostApi(postGraduationObject, formDataNew)
    //formDataNew.append('EmpId', empObject.empId);


    var _url = apiBaseUrlHr + "/api/Candidate/SaveCandidateAddressDetailsDetails/" + candidateId;
    _url = _url.replace(/[\u200B-\u200D\uFEFF]/g, '');

    $.ajax({
        type: "POST",
        url: _url,
        data: JSON.stringify(address),
        //processData: false,
        contentType: 'application/json',
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
            if (isSaveAll) {
                return;
            }
            loadAllDataOfCandidateData();
            $('.page-loader').hide();
            e.disabled = false;
            sessionStorage['tourId'] = null;
            sessionStorage['managerId'] == null;
            sessionStorage['isReapproval'] = null;
            if (response.statusCode == 201 || response.statusCode == 200) {
                Swal.fire({
                    title: 'Success !',
                    text: response.statusCode == 201 ? 'Tour request has been successfully submitted!' : response.message,
                    icon: "success"
                })
            }
            else {
                Swal.fire({
                    title: 'Invalid !',
                    text: response.message,
                    icon: 'error'
                });
            }

            $('#myModal').modal('hide');
            e.disabled = false;
            $("#inputPurposeOfTravel").focus();

        },
        complete: function () {
            e.disabled = false;
            $('.page-loader').hide();
            $("#btnTourPlanSubmit").html('<i class="fa-solid fa-plus"></i> &nbsp;Submit')
            $("#inputPurposeOfTravel").focus();
        },
        error: function (jqXHR, status) {
            e.disabled = false;
            $('.page-loader').hide();
            $("#btnTourPlanSubmit").html('<i class="fa-solid fa-plus"></i> &nbsp;Add')
            Swal.fire({
                title: 'Invalid !',
                text: jqXHR.responseJSON.title,
                icon: 'error'
            });
            $("#inputPurposeOfTravel").focus();
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
function selectReservationCategory() {

    var category_val = $("#selectReservationCategory").val();
    if (category_val == 'obc' || category_val == 'st' || category_val == 'sc' || category_val == 'ews') {
        $("#scstCertificateUpload").css('display', 'block');
        $("#scstCertificateView").css('display', 'block');
    }
    else {
        $("#scstCertificateUpload").css('display', 'none');
        $("#scstCertificateView").css('display', 'none');
    }
}
function freefromARVigilanceAngleinParentOrganization(e, type) {
    if (type == 'yes') {
        $("#divVigilanceAngleinParentUpload").css('display', 'block');
        $("#divVigilanceAngleinParentView").css('display', 'block');
    } else {
        $("#divVigilanceAngleinParentUpload").css('display', 'none');
        $("#divVigilanceAngleinParentView").css('display', 'none');
    }
}
function radioIdentityCardissuedbyparent(e, type) {
    if (type == 'yes') {
        $("#IdentityCardissuedbyparentView").css('display', 'block');
        $("#IdentityCardissuedbyparentUpload").css('display', 'block');
    } else {
        $("#IdentityCardissuedbyparentView").css('display', 'none');
        $("#IdentityCardissuedbyparentUpload").css('display', 'none');
    }
}
function nOCByEmployerInGovernmentOrganization(e, type) {
    if (type == 'yes') {
        $("#NOCGovernmentUpload").css('display', 'block');
        $("#NOCGovernmentView").css('display', 'block');
    }
    else {
        $("#NOCGovernmentUpload").css('display', 'none');
        $("#NOCGovernmentView").css('display', 'none');
    }
}
function dischargeSlipNOC(e, type) {
    if (type == 'yes') {
        $("#DischargeSlipNOCUpload").css('display', 'block');
        $("#DischargeSlipNOCView").css('display', 'block');
    } else {
        $("#DischargeSlipNOCUpload").css('display', 'none');
        $("#DischargeSlipNOCView").css('display', 'none');
    }
}
function radiochangeEx(e, type) {

    if (type == 'yes') {
        $("#PHExServicemenUpload").css('display', 'block');
        $("#PHExServicemenView").css('display', 'block');
        $("#inputExServicemenJoiningDate").css('display', 'block');
        $("#inputExServicemenEndDate").css('display', 'block');
        $("#inputExServicemenDuration").css('display', 'block');
        $("#divradioServicemenDisabledYes").css('display', 'block');
        $("#divradioServicemenDisabledNo").css('display', 'block');
        $("#divradioServicemenDependantofkilledinActionYes").css('display', 'block');
        $("#divradioServicemenDependantofkilledinActionNo").css('display', 'block');

    } else {
        $("#PHExServicemenUpload").css('display', 'none');
        $("#PHExServicemenView").css('display', 'none');
        $("#inputExServicemenJoiningDate").css('display', 'none');
        $("#inputExServicemenEndDate").css('display', 'none');
        $("#inputExServicemenDuration").css('display', 'none');
        $("#divradioServicemenDisabledYes").css('display', 'none');
        $("#divradioServicemenDisabledNo").css('display', 'none');
        $("#divradioServicemenDependantofkilledinActionYes").css('display', 'none');
        $("#divradioServicemenDependantofkilledinActionNo").css('display', 'none');
    }
}

function radioCivilEmploymentUnderCentralGovernment(e) {
    if (e == true) {
        $("#inputCentralOrganisation").css('display', 'block');
        $("#FreefromARVigilanceAngleinParentOrganization").css('display', 'block');
        $("#divVigilanceAngleinParentUpload").css('display', 'block')
        $("#inputDepartmentStateGovtDoj").css('display', 'block');
        $("#divFreefromARVigilanceAngleinParentOrganizationYesCheckYes").css('display', 'block');
        $("#divFreefromARVigilanceAngleinParentOrganizationYesCheckNo").css('display', 'block');
        $("#inputDepartmentEmployeeStateGovernmentDuration").css('display', 'block');
    }
    else {
        $("#inputCentralOrganisation").css('display', 'none');
        $("#FreefromARVigilanceAngleinParentOrganization").css('display', 'none');
        $("#divVigilanceAngleinParentUpload").css('display', 'none')
        $("#inputDepartmentStateGovtDoj").css('display', 'none');
        $("#divFreefromARVigilanceAngleinParentOrganizationYesCheckYes").css('display', 'none');
        $("#divFreefromARVigilanceAngleinParentOrganizationYesCheckNo").css('display', 'none');
        $("#inputDepartmentEmployeeStateGovernmentDuration").css('display', 'none');
    }
}
function AreYouAnEmployeeOfDFCCIL(isEmployee) {

    if (isEmployee) {
        $('#radioAreYouAnEmployeeOfDFCCILNo').prop('checked', false);
        $("#inputDepartmentEmployeeNo, #inputDepartmentEmployeeDurationPeriod,").css('display', 'block');
    }
    else {
        $('#radioAreYouAnEmployeeOfDFCCILYes').prop('checked', false);
        $("#inputDepartmentEmployeeNo, #inputDepartmentEmployeeDurationPeriod,").css('display', 'none');
    }
}


function othersUpload(e, type) {

    if (type == 'yes') {
        $("#OthersOthersUpload").css('display', 'block');
        $("#OthersOthersView").css('display', 'block');
    } else {
        $("#OthersOthersUpload").css('display', 'none');
        $("#OthersOthersView").css('display', 'none');
    }
}

//function checkBoxClick() {
//    var checkbox = document.querySelector('.submitCheckbox');
//    var submitButton = document.getElementById('btn-submit');

//    // Enable/disable button based on checkbox state
//    submitButton.disabled = !checkbox.checked;
//}

//document.getElementById('btn-submit').onclick = function getCandidateAssigned(CandidateId) {
//    var url = "https://uat.dfccilrecruitmentservices.cetpainfotech.com/api/DV/GetCandidateAssignedDetails/" + CandidateId;
//    url = url.replace(/[\u200B-\u200D\uFEFF]/g, '');

//    $.ajax({
//        type: "GET",
//        url: url,
//        contentType: "application/json; charset=utf-8",
//        dataType: "json",
//        beforeSend: function () {
//            $('.page-loader').show();
//        },
//        success: function (response) {
//            candidateAssignedDetails = response.data;
//            $('.page-loader').hide();

//            Swal.fire({
//                title: "Are you sure you want to submit the form?",
//                text: "Remember, you can make edits at any time till the DV process!",
//                type: "warning",
//                showCancelButton: true,
//                confirmButtonColor: '#2aa90c',
//                confirmButtonText: 'Yes, Submit it!',
//                cancelButtonText: "No, cancel It!",
//                closeOnConfirm: false,
//                closeOnCancel: false
//            },
//                function (isConfirm) {
//                    if (isConfirm) {
//                        // Assuming rollNumber is defined somewhere in your code
//                        getCandidateAssigned(CandidateId);
//                    } else {
//                        Swal.fire("Cancelled", "Your Form has not been submitted :)", "error");
//                    }
//                });
//        },
//        error: function (err) {
//            $('.page-loader').hide();
//            switch (err.status) {
//                case "401":
//                    window.location.href = unAuthorisedUrl;
//                    break;
//                case "403":
//                    window.location.href = forbiddenUrl;
//                    break;
//                default:
//                    // Handle other errors as needed
//                    break;
//            }
//        }
//    });
//}
/// Ankush

$(document).ready(function () {
    $('#inputMatricSecObtainedMarks').on('blur', function () {
        let inputMatricSecObtainedMarks = parseFloat($('#inputMatricSecObtainedMarks').val())
        let inputMatricSecMaximumMarks = parseFloat($('#inputMatricSecMaximumMarks').val())

        let percenatgeValue = (inputMatricSecObtainedMarks / inputMatricSecMaximumMarks) * 100





        $('#inputMatricSecPercentage').val(percenatgeValue.toFixed(2))

    })
    $('#inputMatricSecObtainedMarks').on('keyup', function () {
        let inputMatricSecObtainedMarks = parseFloat($('#inputMatricSecObtainedMarks').val())
        let inputMatricSecMaximumMarks = parseFloat($('#inputMatricSecMaximumMarks').val())

        if (inputMatricSecObtainedMarks > inputMatricSecMaximumMarks) {
            toastHr("Obtained marks should not greater than maximum marks")
            $('#inputMatricSecObtainedMarks').addClass("error")
        } else {
            $('#inputMatricSecObtainedMarks').removeClass("error")
        }

    })

    $('#inputIntermediateObtainedMarks').on('blur', function () {
        let inputIntermediateMaximumMarks = parseFloat($('#inputIntermediateMaximumMarks').val())
        let inputIntermediateObtainedMarks = parseFloat($('#inputIntermediateObtainedMarks').val())

        let percenatgeValue = (inputIntermediateObtainedMarks / inputIntermediateMaximumMarks) * 100

        $('#inputIntermediatePercentage').val(percenatgeValue.toFixed(2))



    })

    $('#inputIntermediateObtainedMarks').on('keyup', function () {
        let inputIntermediateMaximumMarks = parseFloat($('#inputIntermediateMaximumMarks').val())
        let inputIntermediateObtainedMarks = parseFloat($('#inputIntermediateObtainedMarks').val())

        if (inputIntermediateObtainedMarks > inputIntermediateMaximumMarks) {
            toastHr("Obtained marks should not greater than maximum marks")
            $('#inputIntermediateObtainedMarks').addClass("error")
        } else {
            $('#inputIntermediateObtainedMarks').removeClass("error")
        }

    })

    $('#inputItiObtainedMarks').on('blur', function () {
        let inputItiMaximumMarks = parseFloat($('#inputItiMaximumMarks').val())
        let inputItiObtainedMarks = parseFloat($('#inputItiObtainedMarks').val())

        let percenatgeValue = (inputItiObtainedMarks / inputItiMaximumMarks) * 100

        $('#inputItiPercentage').val(percenatgeValue.toFixed(2))

    })

    $('#inputItiObtainedMarks').on('keyup', function () {
        let inputItiMaximumMarks = parseFloat($('#inputItiMaximumMarks').val())
        let inputItiObtainedMarks = parseFloat($('#inputItiObtainedMarks').val())

        if (inputItiObtainedMarks > inputItiMaximumMarks) {
            toastHr("Obtained marks should not greater than maximum marks")
            $('#inputItiObtainedMarks').addClass("error")
        } else {
            $('#inputItiObtainedMarks').removeClass("error")
        }

    })

    $('#inputApprenticeObtainedMarks').on('blur', function () {
        let inputApprenticeMaximumMarks = parseFloat($('#inputApprenticeMaximumMarks').val())
        let inputApprenticeObtainedMarks = parseFloat($('#inputApprenticeObtainedMarks').val())

        let percenatgeValue = (inputApprenticeObtainedMarks / inputApprenticeMaximumMarks) * 100

        $('#inputApprenticePercentage').val(percenatgeValue.toFixed(2))


    })

    $('#inputApprenticeObtainedMarks').on('keyup', function () {
        let inputApprenticeMaximumMarks = parseFloat($('#inputApprenticeMaximumMarks').val())
        let inputApprenticeObtainedMarks = parseFloat($('#inputApprenticeObtainedMarks').val())

        if (inputApprenticeObtainedMarks > inputApprenticeMaximumMarks) {
            toastHr("Obtained marks should not greater than maximum marks")
            $('#inputApprenticeObtainedMarks').addClass("error")
        } else {
            $('#inputApprenticeObtainedMarks').removeClass("error")
        }

    })

    $('#inputDiplomaObtainedMarks').on('blur', function () {
        let inputDiplomaMaximumMarks = parseFloat($('#inputDiplomaMaximumMarks').val())
        let inputDiplomaObtainedMarks = parseFloat($('#inputDiplomaObtainedMarks').val())

        let percenatgeValue = (inputDiplomaObtainedMarks / inputDiplomaMaximumMarks) * 100

        $('#inputDiplomaPercentage').val(percenatgeValue.toFixed(2))

    })
    $('#inputDiplomaObtainedMarks').on('keyup', function () {
        let inputDiplomaMaximumMarks = parseFloat($('#inputDiplomaMaximumMarks').val())
        let inputDiplomaObtainedMarks = parseFloat($('#inputDiplomaObtainedMarks').val())

        if (inputDiplomaObtainedMarks > inputDiplomaMaximumMarks) {
            toastHr("Obtained marks should not greater than maximum marks")
            $('#inputDiplomaObtainedMarks').addClass("error")
        } else {
            $('#inputDiplomaObtainedMarks').removeClass("error")
        }

    })
    $('#inputGrduationObtainedMarks').on('blur', function () {
        let inputGrduationMaximumMarks = parseFloat($('#inputGrduationMaximumMarks').val())
        let inputGrduationObtainedMarks = parseFloat($('#inputGrduationObtainedMarks').val())

        let percenatgeValue = (inputGrduationObtainedMarks / inputGrduationMaximumMarks) * 100

        $('#inputGrduationPercentage').val(percenatgeValue.toFixed(2))

    })
    $('#inputGrduationObtainedMarks').on('keyup', function () {
        let inputGrduationMaximumMarks = parseFloat($('#inputGrduationMaximumMarks').val())
        let inputGrduationObtainedMarks = parseFloat($('#inputGrduationObtainedMarks').val())

        if (inputGrduationObtainedMarks > inputGrduationMaximumMarks) {
            toastHr("Obtained marks should not greater than maximum marks")
            $('#inputGrduationObtainedMarks').addClass("error")
        } else {
            $('#inputGrduationObtainedMarks').removeClass("error")
        }
    })
    $('#inputPostGraduationObtainedMarks').on('blur', function () {
        let inputPostGraduationMaximumMarks = parseFloat($('#inputPostGraduationMaximumMarks').val())
        let inputPostGraduationObtainedMarks = parseFloat($('#inputPostGraduationObtainedMarks').val())

        let percenatgeValue = (inputPostGraduationObtainedMarks / inputPostGraduationMaximumMarks) * 100

        $('#inputPostGraduationPercentage').val(percenatgeValue.toFixed(2))

    })

    $('#inputPostGraduationObtainedMarks').on('keyup', function () {
        let inputPostGraduationMaximumMarks = parseFloat($('#inputPostGraduationMaximumMarks').val())
        let inputPostGraduationObtainedMarks = parseFloat($('#inputPostGraduationObtainedMarks').val())

        if (inputPostGraduationObtainedMarks > inputPostGraduationMaximumMarks) {
            toastHr("Obtained marks should not greater than maximum marks")
            $('#inputPostGraduationObtainedMarks').addClass("error")
        } else {
            $('#inputPostGraduationObtainedMarks').removeClass("error")
        }
    })


})


document.getElementById('btn-submit').onclick = function () {
    let postObject = {
        candidateId: candidateId
    };

    Swal.fire({
        title: "Are you sure you want to submit the form?",
        text: "Remember to save changes before submitting!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: '#2aa90c',
        confirmButtonText: 'Yes, Submit it!',
        cancelButtonText: "No, cancel it!",
        closeOnConfirm: false,
        closeOnCancel: false
    }).then((result) => {
        if (result.isConfirmed) {
            saveAll();

            var url = apiBaseUrlHr + `/api/Candidate/SubmitCandidate`;
            $.ajax({
                url: url,
                type: 'POST',
                data: JSON.stringify(postObject),
                contentType: 'application/json',
                beforeSend: function () {
                    $('.page-loader').show();
                },
                success: function (response) {
                    $('.page-loader').hide();
                    if (response.statusCode === 200) {
                        Swal.fire({
                            title: 'Success!',
                            text: response.message,
                            icon: "success"
                        }).then((result) => {
                            if (result.isConfirmed) {
                                window.location.reload();
                            }
                        });
                    } else if (response.statusCode === 400) {
                        const errorMessage = response.message || 'Excel file is invalid';
                        Swal.fire({
                            title: 'Invalid!',
                            text: errorMessage,
                            icon: 'error'
                        });
                    } else {
                        handleAjaxError('Unexpected error occurred.');
                    }
                },
                error: function (xhr, status, error) {
                    handleAjaxError('Failed to upload data: ' + error);
                },
                complete: function () {
                    $('.page-loader').hide();
                }
            });
        } else {
            Swal.fire("Cancelled", "Your form has not been submitted :)", "error");
        }
    });
};

function handleAjaxError(errorMessage) {
    console.error(errorMessage);
    Swal.fire({
        title: 'Error!',
        text: errorMessage,
        icon: 'error'
    });
};

/*vaidation for pan card shah*/
// PAN Validation
$('#inputPanNo').on('input', function () {
    let input = $(this).val().toUpperCase().replace(/[^A-Z0-9]/g, '');

    let valid = '';
    for (let i = 0; i < input.length && i < 10; i++) {
        if (i < 5 && /[A-Z]/.test(input[i])) {
            valid += input[i];
        } else if (i >= 5 && i < 9 && /[0-9]/.test(input[i])) {
            valid += input[i];
        } else if (i === 9 && /[A-Z]/.test(input[i])) {
            valid += input[i];
        } else {
            break;
        }
    }

    $(this).val(valid);

    if (valid.length === 10) {
        const panRegexFull = /^[A-Z]{5}[0-9]{4}[A-Z]$/;
        if (panRegexFull.test(valid)) {
            showToast("Correct PAN format", true);
        } else {
            showToast("Invalid PAN number");
        }
    }
});


$('#inputAdharNo').on('input', function () {
    let input = $(this).val();

    input = input.replace(/\D/g, '');

    input = input.substring(0, 12);


    $(this).val(input);

    let plainInput = input;

    if (plainInput.length === 12) {
        const adharRegex = /^[2-9]{1}[0-9]{11}$/;
        if (adharRegex.test(plainInput)) {
            showToast("Correct Aadhaar format", true);
        } else {
            showToast("Invalid Aadhaar number");
        }
    }
});

$('#inputMobileNo, #inputAlternateMobileNo,#inputConfirmAlternateMobileNo').on('input', function () {
   
    let value = $(this).val().replace(/\D/g, '');

    if (value.length > 10) {
        value = value.substring(0, 10);
    }

    $(this).val(value);
});



function showToast(message, isSuccess) {
    const toast = $('#toastError');
    toast
        .text(message)
        .css('background-color', isSuccess ? '#28a745' : '#dc3545')
        .fadeIn(400);

    setTimeout(function () {
        toast.fadeOut(400);
    }, 3000);
}





