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

$(document).ready(function () {
    let inputValue = $(".form-control")
    inputValue.on('blur', function () {
        if (!$(this).val() && $(this).attr('id') !== "inputPassportNo" && $(this).attr('id') !== "selectReservationCategory" && $(this).attr('id') !== "inputTypeOfDisability" && $(this).attr('id') !== "inputColageOtherSubject" && $(this).attr('id') !== "inputColageOtherDegreeName" && $(this).attr('id') !== "inputConfirmMobileNo" && $(this).attr('id') !== "inputAlternateMobileNo" && $(this).attr('id') !== "inputTelephone" && $(this).attr('id') !== "inputTelephone" && $(this).attr('id') !== "inputAlternateMobileNo" && $(this).attr('type') !== 'file' && !$(this).prop("readonly") && $(this).attr('id') !== "datepicker" && $(this).attr('id') !== "inputPanNo" && $(this).attr('id') !== "inputAdharNo" && $(this).attr('id') !== "inputMobileNo") {
            toastHr("Please fill requied filed")
            $(this).addClass("error")
        }
    })
    inputValue.on('focus', function () {


        $(this).removeClass("error")

    })
    inputValue.on('keyup', function () {


        $(this).removeClass("error")

    })

    $('#inputPanNo').on('blur', function () {
        let panValue = $(this).val();
        let panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;

        if (!panRegex.test(panValue)) {
            toastHr("Please enter a valid PAN number");
            $(this).addClass("error");
            return
        }

    });
    $('#inputPanNo').on('keyup', function () {
        let panValue = $(this).val();


        if (panValue.length > 10) {
            toastHr("PAN number length should not greater than 10 digit");
            $(this).addClass("error");
            return
        }


    });
    $('#inputAdharNo').on('blur', function () {
        let adharValue = $(this).val();
        let adharRegex = /^\d{12}$/;

        if (!adharRegex.test(adharValue)) {
            toastHr("Please enter a valid Aadhar number");
            $(this).addClass("error");
            return
        }

    });
    $('#inputAdharNo').on('keyup', function () {
        let adharValue = $(this).val();


        if (adharValue.length > 12) {
            toastHr("Adhar number length should not greater than 12 digit");
            $(this).addClass("error");
            return
        }

    });








    $("#inputConfirmEmail").on('blur', function () {
        let inputEmail = $('#inputEmail').val()
        let inputConfirmEmail = $('#inputConfirmEmail').val()
        if (inputConfirmEmail != inputEmail) {

            toastHr("Comfirm email must same as email")
            $('#inputConfirmEmail').val(inputEmail)

            return
        }

    });

    $("#inputApplicationSequenceNo").on('blur', function () {
        let inputApplicationSequenceNo = $('#inputApplicationSequenceNo').val()
        if (!/^[0-9]+$/.test(inputApplicationSequenceNo)) {

            toastHr("Sequence contains only number")
            $('#inputApplicationSequenceNo').addClass("error")
            return
        }

    });

    $("#inputRollNo").on('blur', function () {
        let inputApplicationSequenceNo = $('#inputRollNo').val()
        if (!/^[0-9]+$/.test(inputApplicationSequenceNo)) {

            toastHr("Roll no. contains only number")
            $('#inputRollNo').addClass("error")
            return
        }

    });

    $("#inputApplicationSequenceNo").on('keyup', function () {
        let inputApplicationSequenceNo = $('#inputApplicationSequenceNo').val()
        if (!/^[0-9]+$/.test(inputApplicationSequenceNo)) {

            toastHr("Sequence contains only number")
            $('#inputApplicationSequenceNo').addClass("error")
            return
        }

    });

    $("#inputRollNo").on('keyup', function () {
        let inputApplicationSequenceNo = $('#inputRollNo').val()
        if (!/^[0-9]+$/.test(inputApplicationSequenceNo)) {

            toastHr("Roll no. contains only number")
            $('#inputRollNo').addClass("error")
            return
        }

    });



    $("#inputMobileNo").on('blur', function () {
        let inputMobileNo = $(this).val();
        let mobileRegex = /^\d{10}$/;

        if (!mobileRegex.test(inputMobileNo)) {
            toastHr("Please enter a valid 10-digit mobile number");
            $(this).addClass("error");
            return
        }
    });

    $('#inputMobileNo').on('keyup', function () {
        let mobileNumber = $(this).val();


        if (mobileNumber.length > 10) {
            toastHr("Mobile number length should not greater than 10 digit");
            $(this).addClass("error");
            return
        }

    });
    $("#inputConfirmMobileNo").on('blur', function () {
        let inputMobileNo = $(this).val();
        let mobileRegex = /^\d{10}$/;

        if (!mobileRegex.test(inputMobileNo)) {
            toastHr("Please enter a valid 10-digit confirm mobile number");
            $(this).addClass("error");
            return
        }
    });

    $('#inputAlternateMobileNo').on('keyup', function () {
        let mobileNumber = $(this).val();


        if (mobileNumber.length > 10) {
            toastHr("Alternative mobile number length should not greater than 10 digit");
            $(this).addClass("error");
            return
        }

    });

    $("#inputAlternateMobileNo").on('blur', function () {
        let inputMobileNo = $(this).val();
        let mobileRegex = /^\d{10}$/;

        if (!mobileRegex.test(inputMobileNo)) {
            toastHr("Please enter a valid 10-digit alternative mobile number");
            $(this).addClass("error");
            return
        }
    });




    $("#inputConfirmMobileNo").on('blur', function () {
        let comfirmMobile = $(this).val();
        let mobileNAumber = $('#inputMobileNo').val()


        if (comfirmMobile != mobileNAumber) {

            toastHr("Comfirm mobile no. must same as mobile no.")
            $('#inputConfirmMobileNo').val(mobileNAumber)

            return
        }


    });

    $('#inputConfirmMobileNo').on('keyup', function () {

        let confirmMobile = $('#inputConfirmMobileNo').val()


        if (confirmMobile.length > 10) {
            toastHr("Confirm Mobile number length should not greater than 10 digit");
            $(this).addClass("error");
            return
        }

    });
    $("#inputTelephone").on('blur', function () {
        let inputTelephone = $(this).val();
        let telephoneRegex = /^\d{11}$/;

        if (!telephoneRegex.test(inputTelephone)) {
            toastHr("Please enter a valid 11-digit telephone number");
            $(this).addClass("error");
            return
        }
    });
    $('#inputTelephone').on('keyup', function () {

        let confirmMobile = $('#inputTelephone').val()


        if (confirmMobile.length > 11) {
            toastHr("Telephone number length should not greater than 11 digit");
            $(this).addClass("error");
            return
        }

    });
    $('#inputMatricMaximumMarks').on('keyup', function () {
        let inputMatricMaximumMarks = $('#inputMatricMaximumMarks').val()
        if (!/^[0-9]+$/.test(inputMatricMaximumMarks)) {

            toastHr("Maximum marks contains only number")
            $('#inputMatricMaximumMarks').addClass("error")
            return
        }
        if (inputMatricMaximumMarks < 1) {
            toastHr("Maximum marks should not be less than 1")
            $('#inputMatricMaximumMarks').addClass("error")
            return
        }
        $('#inputMatricMaximumMarks').removeClass("error");
    })

    $('#inputMatricObtainedMarks').on('keyup', function () {
        let inputMatricObtainedMarks = $('#inputMatricObtainedMarks').val();
        let inputMatricMaximumMarks = $('#inputMatricMaximumMarks').val();

        if (!/^[0-9]+$/.test(inputMatricObtainedMarks)) {
            toastHr("Obtained marks should contain only numbers");
            $('#inputMatricObtainedMarks').addClass("error");
            return;
        }

        if (inputMatricMaximumMarks && parseInt(inputMatricObtainedMarks) > parseInt(inputMatricMaximumMarks)) {
            toastHr("Obtained marks should not be greater than maximum marks");
            $('#inputMatricObtainedMarks').addClass("error");
            return;
        }
        if (inputMatricObtainedMarks < 1) {
            toastHr("Obtained marks should not be less than 1")
            $('#inputMatricObtainedMarks').addClass("error")
            return
        }

        // Clear the error class if validation passes
        $('#inputMatricObtainedMarks').removeClass("error");
    });

    $('#inputMatricPercentage').on('keyup', function () {
        let inputMatricPercentage = $('#inputMatricPercentage').val();
        if (!/^[0-9.]+$/.test(inputMatricPercentage)) {
            toastHr("Percentage contains only number")
            $('#inputMatricPercentage').addClass("error")
            return
        }
        if (inputMatricPercentage > 100) {
            toastHr("Percentage should not be greater than 100")
            $('#inputMatricPercentage').addClass("error")
            return
        }
        if (inputMatricPercentage < 1) {
            toastHr("Percentage should not be less than 1")
            $('#inputMatricPercentage').addClass("error")
            return
        }
        $('#inputMatricPercentage').removeClass("error");
    })

    $('#inputMatricTotalCgpa').on('keyup', function () {
        let inputMatricTotalCgpa = $('#inputMatricTotalCgpa').val();
        if (!/^[0-9]+$/.test(inputMatricTotalCgpa)) {
            toastHr("Total CGPA contains only number")
            $('#inputMatricTotalCgpa').addClass("error")
            return
        }
        if (inputMatricTotalCgpa > 10) {
            toastHr("Total CGPA should not be greater than 10")
            $('#inputMatricTotalCgpa').addClass("error")
            return
        }
        if (inputMatricTotalCgpa < 1) {
            toastHr("Total CGPA should not be less than 1")
            $('#inputMatricTotalCgpa').addClass("error")
            return
        }
        $('#inputMatricTotalCgpa').removeClass("error");
    })
    $('#inputMatricCgpaMultiplyingFactor').on('keyup', function () {
        let inputMatricCgpaMultiplyingFactor = $('#inputMatricCgpaMultiplyingFactor').val();
        if (!/^[0-9.]+$/.test(inputMatricCgpaMultiplyingFactor)) {
            toastHr("CGPA multiplying factor contains only number")
            $('#inputMatricCgpaMultiplyingFactor').addClass("error")
            return
        }
        if (inputMatricCgpaMultiplyingFactor > 10) {
            toastHr("CGPA multiplying factor should not be greater than 10")
            $('#inputMatricCgpaMultiplyingFactor').addClass("error")
            return
        }
        if (inputMatricCgpaMultiplyingFactor < 1) {
            toastHr("CGPA multiplying factor should not be less than 1")
            $('#inputMatricCgpaMultiplyingFactor').addClass("error")
            return
        }
        $('#inputMatricCgpaMultiplyingFactor').removeClass("error");
    })

    $('#inputMatricCgpaObtained').on('keyup', function () {
        let inputMatricCgpaObtained = $('#inputMatricCgpaObtained').val();

        if (!/^[0-9.]+$/.test(inputMatricCgpaObtained)) {
            toastHr("CGPA obtained contains only number")
            $('#inputMatricCgpaObtained').addClass("error")
            return
        }
        if (inputMatricCgpaObtained > 10) {
            toastHr("CGPA obtained should not be greater than 10")
            $('#inputMatricCgpaObtained').addClass("error")
            return
        }
        if (inputMatricCgpaObtained < 1) {
            toastHr("CGPA obtained should not be less than 1")
            $('#inputMatricCgpaObtained').addClass("error")
            return
        }
        if (parseFloat(inputMatricCgpaObtained) > parseFloat(inputMatricTotalCgpa)) {
            toastHr("CGPA obtained should not be greater than total CGPA")
            $('#inputMatricCgpaObtained').addClass("error")
            return
        }
        $('#inputMatricCgpaObtained').removeClass("error");
    })

    $('#inputMatricCgpaCalculatedPercent').on('keyup', function () {
        let inputMatricCgpaCalculatedPercent = $('#inputMatricCgpaCalculatedPercent').val()
        if (!/^[0-9.]+$/.test(inputMatricCgpaCalculatedPercent)) {
            toastHr("Matric cgpa calculated percent should contains only number")
            $('#inputMatricCgpaCalculatedPercent').addClass("error")
            return
        }
        if (inputMatricCgpaCalculatedPercent < 1) {
            toastHr("Matric cgpa calculated percent should not less than 1")
            $('#inputMatricCgpaCalculatedPercent').addClass("error")
            return
        }
        if (inputMatricCgpaCalculatedPercent > 100) {
            toastHr("Matric cgpa calculated percent should not greater than 100")
            $('#inputMatricCgpaCalculatedPercent').addClass("error")
            return
        }
        $('#inputMatricCgpaCalculatedPercent').removeClass("error");
    })

    $('#inputMatricYearOfPassing').on('keyup', function () {
        let inputMatricYearOfPassing = $('#inputMatricYearOfPassing').val()
        if (!/^[0-9]+$/.test(inputMatricYearOfPassing)) {
            toastHr("Matric year of passing should contains only number")
            $('#inputMatricYearOfPassing').addClass("error")
            return
        }
        if (inputMatricYearOfPassing.length > 4) {
            toastHr("Matric year of passing length should 4 digit")
            $('#inputMatricYearOfPassing').addClass("error")
            return
        }
    })

    $('#inputIntermediateMaximumMarks').on('keyup', function () {
        let inputIntermediateMaximumMarks = $('#inputIntermediateMaximumMarks').val()
        if (!/^[0-9]+$/.test(inputIntermediateMaximumMarks)) {

            toastHr("Maximum marks contains only number")
            $('#inputIntermediateMaximumMarks').addClass("error")
            return
        }
        if (inputIntermediateMaximumMarks < 1) {
            toastHr("Maximum marks should not be less than 1")
            $('#inputIntermediateMaximumMarks').addClass("error")
            return
        }
        $('#inputIntermediateMaximumMarks').removeClass("error");
    })

    $('#inputIntermediateObtainedMarks').on('keyup', function () {
        let inputIntermediateObtainedMarks = $('#inputIntermediateObtainedMarks').val();
        let inputIntermediateMaximumMarks = $('#inputIntermediateMaximumMarks').val();

        if (!/^[0-9]+$/.test(inputIntermediateObtainedMarks)) {
            toastHr("Obtained marks should contain only numbers");
            $('#inputIntermediateObtainedMarks').addClass("error");
            return;
        }

        if (inputIntermediateObtainedMarks && parseInt(inputIntermediateObtainedMarks) > parseInt(inputIntermediateMaximumMarks)) {
            toastHr("Obtained marks should not be greater than maximum marks");
            $('#inputIntermediateObtainedMarks').addClass("error");
            return;
        }
        if (inputIntermediateObtainedMarks < 1) {
            toastHr("Obtained marks should not be less than 1")
            $('#inputIntermediateObtainedMarks').addClass("error")
            return
        }

        // Clear the error class if validation passes
        $('#inputIntermediateObtainedMarks').removeClass("error");
    });


    $('#inputIntermediatePercentage').on('keyup', function () {
        let inputIntermediatePercentage = $('#inputIntermediatePercentage').val();
        if (!/^[0-9.]+$/.test(inputIntermediatePercentage)) {
            toastHr("Percentage contains only number")
            $('#inputIntermediatePercentage').addClass("error")
            return
        }
        if (inputIntermediatePercentage > 100) {
            toastHr("Percentage should not be greater than 100")
            $('#inputIntermediatePercentage').addClass("error")
            return
        }
        if (inputIntermediatePercentage < 1) {
            toastHr("Percentage should not be less than 1")
            $('#inputIntermediatePercentage').addClass("error")
            return
        }
        $('#inputIntermediatePercentage').removeClass("error");
    })

    $('#inputIntermediateTotalCgpa').on('keyup', function () {
        let inputIntermediateTotalCgpa = $('#inputIntermediateTotalCgpa').val();
        if (!/^[0-9]+$/.test(inputIntermediateTotalCgpa)) {
            toastHr("Total CGPA contains only number")
            $('#inputIntermediateTotalCgpa').addClass("error")
            return
        }
        if (inputIntermediateTotalCgpa > 10) {
            toastHr("Total CGPA should not be greater than 10")
            $('#inputIntermediateTotalCgpa').addClass("error")
            return
        }
        if (inputIntermediateTotalCgpa < 1) {
            toastHr("Total CGPA should not be less than 1")
            $('#inputIntermediateTotalCgpa').addClass("error")
            return
        }
        $('#inputIntermediateTotalCgpa').removeClass("error");
    })


    $('#inputIntermediateCgpaMultiplyingFactor').on('keyup', function () {
        let inputIntermediateCgpaMultiplyingFactor = $('#inputIntermediateCgpaMultiplyingFactor').val();
        if (!/^[0-9.]+$/.test(inputIntermediateCgpaMultiplyingFactor)) {
            toastHr("CGPA multiplying factor contains only number")
            $('#inputIntermediateCgpaMultiplyingFactor').addClass("error")
            return
        }
        if (inputIntermediateCgpaMultiplyingFactor > 10) {
            toastHr("CGPA multiplying factor should not be greater than 10")
            $('#inputIntermediateCgpaMultiplyingFactor').addClass("error")
            return
        }
        if (inputIntermediateCgpaMultiplyingFactor < 1) {
            toastHr("CGPA multiplying factor should not be less than 1")
            $('#inputIntermediateCgpaMultiplyingFactor').addClass("error")
            return
        }
        $('#inputIntermediateCgpaMultiplyingFactor').removeClass("error");
    })

    $('#inputIntermediateCgpaObtained').on('keyup', function () {
        let inputIntermediateTotalCgpa = $('#inputIntermediateTotalCgpa').val();

        if (!/^[0-9.]+$/.test(inputIntermediateCgpaObtained)) {
            toastHr("CGPA obtained contains only number")
            $('#inputIntermediateCgpaObtained').addClass("error")
            return
        }
        if (inputIntermediateCgpaObtained > 10) {
            toastHr("CGPA obtained should not be greater than 10")
            $('#inputIntermediateCgpaObtained').addClass("error")
            return
        }
        if (inputIntermediateCgpaObtained < 1) {
            toastHr("CGPA obtained should not be less than 1")
            $('#inputIntermediateCgpaObtained').addClass("error")
            return
        }
        if (parseFloat(inputIntermediateCgpaObtained) > parseFloat(inputIntermediateTotalCgpa)) {
            toastHr("CGPA obtained should not be greater than total CGPA")
            $('#inputIntermediateCgpaObtained').addClass("error")
            return
        }
        $('#inputIntermediateCgpaObtained').removeClass("error");
    })

    $('#inputIntermediateCgpaCalculatedPercent').on('keyup', function () {
        let inputIntermediateCgpaCalculatedPercent = $('#inputIntermediateCgpaCalculatedPercent').val()
        if (!/^[0-9.]+$/.test(inputIntermediateCgpaCalculatedPercent)) {
            toastHr("Cgpa calculated percent should contains only number")
            $('#inputIntermediateCgpaCalculatedPercent').addClass("error")
            return
        }
        if (inputIntermediateCgpaCalculatedPercent < 1) {
            toastHr("cgpa calculated percent should not less than 1")
            $('#inputIntermediateCgpaCalculatedPercent').addClass("error")
            return
        }
        if (inputIntermediateCgpaCalculatedPercent > 100) {
            toastHr("Cgpa calculated percent should not greater than 100")
            $('#inputIntermediateCgpaCalculatedPercent').addClass("error")
            return
        }
        $('#inputIntermediateCgpaCalculatedPercent').removeClass("error");
    })

    $('#inputIntermediateYearOfPassing').on('keyup', function () {
        let inputIntermediateYearOfPassing = $('#inputIntermediateYearOfPassing').val()
        if (!/^[0-9]+$/.test(inputIntermediateYearOfPassing)) {
            toastHr("Year of passing should contains only number")
            $('#inputIntermediateYearOfPassing').addClass("error")
            return
        }
        if (inputIntermediateYearOfPassing.length > 4) {
            toastHr("Year of passing length should 4 digit")
            $('#inputIntermediateYearOfPassing').addClass("error")
            return
        }
        $('#inputIntermediateYearOfPassing').removeClass("error");
    })

    $('#inputColageMaximumMarks').on('keyup', function () {
        let inputColageMaximumMarks = $('#inputColageMaximumMarks').val()
        if (!/^[0-9]+$/.test(inputColageMaximumMarks)) {

            toastHr("Maximum marks contains only number")
            $('#inputColageMaximumMarks').addClass("error")
            return
        }
        if (inputColageMaximumMarks < 1) {
            toastHr("Maximum marks should not be less than 1")
            $('#inputColageMaximumMarks').addClass("error")
            return
        }
        $('#inputColageMaximumMarks').removeClass("error");
    })

    $('#inputColageObtainedMarks').on('keyup', function () {
        let inputColageObtainedMarks = $('#inputColageObtainedMarks').val();
        let inputColageMaximumMarks = $('#inputColageMaximumMarks').val();

        if (!/^[0-9]+$/.test(inputColageObtainedMarks)) {
            toastHr("Obtained marks should contain only numbers");
            $('#inputColageObtainedMarks').addClass("error");
            return;
        }

        if (inputColageObtainedMarks && parseInt(inputColageObtainedMarks) > parseInt(inputColageMaximumMarks)) {
            toastHr("Obtained marks should not be greater than maximum marks");
            $('#inputColageObtainedMarks').addClass("error");
            return;
        }
        if (inputColageObtainedMarks < 1) {
            toastHr("Obtained marks should not be less than 1")
            $('#inputColageObtainedMarks').addClass("error")
            return
        }

        // Clear the error class if validation passes
        $('#inputColageObtainedMarks').removeClass("error");
    });

    $('#inputColagePercentage').on('keyup', function () {
        let inputColagePercentage = $('#inputColagePercentage').val();
        if (!/^[0-9.]+$/.test(inputColagePercentage)) {
            toastHr("Percentage contains only number")
            $('#inputColagePercentage').addClass("error")
            return
        }
        if (inputColagePercentage > 100) {
            toastHr("Percentage should not be greater than 100")
            $('#inputColagePercentage').addClass("error")
            return
        }
        if (inputColagePercentage < 1) {
            toastHr("Percentage should not be less than 1")
            $('#inputColagePercentage').addClass("error")
            return
        }
        $('#inputColagePercentage').removeClass("error");
    })

    $('#inputColageTotalCgpa').on('keyup', function () {
        let inputColageTotalCgpa = $('#inputColageTotalCgpa').val();
        if (!/^[0-9]+$/.test(inputColageTotalCgpa)) {
            toastHr("Total CGPA contains only number")
            $('#inputColageTotalCgpa').addClass("error")
            return
        }
        if (inputColageTotalCgpa > 10) {
            toastHr("Total CGPA should not be greater than 10")
            $('#inputColageTotalCgpa').addClass("error")
            return
        }
        if (inputColageTotalCgpa < 1) {
            toastHr("Total CGPA should not be less than 1")
            $('#inputColageTotalCgpa').addClass("error")
            return
        }
        $('#inputColageTotalCgpa').removeClass("error");
    })

    $('#inputColageCgpaMultiplyingFactor').on('keyup', function () {
        let inputColageCgpaMultiplyingFactor = $('#inputColageCgpaMultiplyingFactor').val();
        if (!/^[0-9.]+$/.test(inputColageCgpaMultiplyingFactor)) {
            toastHr("CGPA multiplying factor contains only number")
            $('#inputColageCgpaMultiplyingFactor').addClass("error")
            return
        }
        if (inputColageCgpaMultiplyingFactor > 10) {
            toastHr("CGPA multiplying factor should not be greater than 10")
            $('#inputColageCgpaMultiplyingFactor').addClass("error")
            return
        }
        if (inputColageCgpaMultiplyingFactor < 1) {
            toastHr("CGPA multiplying factor should not be less than 1")
            $('#inputColageCgpaMultiplyingFactor').addClass("error")
            return
        }
        $('#inputColageCgpaMultiplyingFactor').removeClass("error");
    })

    $('#inputColageCgpaObtained').on('keyup', function () {
        let inputColageTotalCgpa = $('#inputColageTotalCgpa').val();

        if (!/^[0-9.]+$/.test(inputColageCgpaObtained)) {
            toastHr("CGPA obtained contains only number")
            $('#inputColageCgpaObtained').addClass("error")
            return
        }
        if (inputColageCgpaObtained > 10) {
            toastHr("CGPA obtained should not be greater than 10")
            $('#inputColageCgpaObtained').addClass("error")
            return
        }
        if (inputColageCgpaObtained < 1) {
            toastHr("CGPA obtained should not be less than 1")
            $('#inputColageCgpaObtained').addClass("error")
            return
        }
        if (parseFloat(inputColageCgpaObtained) > parseFloat(inputColageTotalCgpa)) {
            toastHr("CGPA obtained should not be greater than total CGPA")
            $('#inputColageCgpaObtained').addClass("error")
            return
        }
        $('#inputColageCgpaObtained').removeClass("error");
    })

    $('#inputColageCgpaCalculatedPercent').on('keyup', function () {
        let inputColageCgpaCalculatedPercent = $('#inputColageCgpaCalculatedPercent').val()
        if (!/^[0-9.]+$/.test(inputColageCgpaCalculatedPercent)) {
            toastHr("Cgpa calculated percent should contains only number")
            $('#inputColageCgpaCalculatedPercent').addClass("error")
            return
        }
        if (inputColageCgpaCalculatedPercent < 1) {
            toastHr("cgpa calculated percent should not less than 1")
            $('#inputColageCgpaCalculatedPercent').addClass("error")
            return
        }
        if (inputColageCgpaCalculatedPercent > 100) {
            toastHr("Cgpa calculated percent should not greater than 100")
            $('#inputColageCgpaCalculatedPercent').addClass("error")
            return
        }
        $('#inputColageCgpaCalculatedPercent').removeClass("error");
    })

    $('#inputColageYearOfPassing').on('keyup', function () {
        let inputColageYearOfPassing = $('#inputColageYearOfPassing').val()
        if (!/^[0-9]+$/.test(inputColageYearOfPassing)) {
            toastHr("Year of passing should contains only number")
            $('#inputColageYearOfPassing').addClass("error")
            return
        }
        if (inputColageYearOfPassing.length > 4) {
            toastHr("Year of passing length should 4 digit")
            $('#inputColageYearOfPassing').addClass("error")
            return
        }
        $('#inputColageYearOfPassing').removeClass("error");
    })

    $('#inputPresentPincode').on('keyup', function () {
        let inputPresentPincode = $('#inputPresentPincode').val()
        if (!/^[0-9]+$/.test(inputPresentPincode)) {
            toastHr("Present pincode should contains only number")
            $('#inputPresentPincode').addClass("error")
            return
        }

        if (inputPresentPincode.length < 1) {
            toastHr("Present pincode should not less than 1")
            $('#inputPresentPincode').addClass("error")
            return
        }

        if (inputPresentPincode.length > 6) {
            toastHr("Present pincode should not greater than 6")
            $('#inputPresentPincode').addClass("error")
            return
        }



        $('#inputPresentPincode').removeClass("error");

    })

    $('#inputPermanentPincode').on('keyup', function () {
        let inputPermanentPincode = $('#inputPermanentPincode').val()
        if (!/^[0-9]+$/.test(inputPermanentPincode)) {
            toastHr("Permanent pincode should contains only number")
            $('#inputPermanentPincode').addClass("error")
            return
        }

        if (inputPermanentPincode.length < 1) {
            toastHr("Permanent pincode should not less than 1")
            $('#inputPermanentPincode').addClass("error")
            return
        }

        if (inputPermanentPincode.length > 6) {
            toastHr("Permanent pincode should not greater than 6")
            $('#inputPermanentPincode').addClass("error")
            return
        }

        if (inputPermanentPincode.length < 6) {
            toastHr("Permanent pincode should not less than 6")
            $('#inputPermanentPincode').addClass("error")
            return
        }

        $('#inputPermanentPincode').removeClass("error");

    })


    $('#inputExServicemenJoiningDate').on('focus', function () {
        

        let todaydate = new Date();

        $('#inputExServicemenJoiningDate').attr('max', todaydate.toISOString().split('T')[0]);



    })


    $('#inputExServicemenEndDate').on('focus', function () {
        let inputExServicemenJoiningDate = $('#inputExServicemenJoiningDate').val()
        let inputExServicemenEndDate = $('#inputExServicemenEndDate').val()
        let todaydate = new Date();
        let joiningdate = new Date(inputExServicemenJoiningDate);
        $('#inputExServicemenEndDate').attr('min', joiningdate.toISOString().split('T')[0]);
        $('#inputExServicemenEndDate').attr('max', todaydate.toISOString().split('T')[0]);



    })
    $('#inputDepartmentEmployeeNo').on('keyup', function () {
        let inputDepartmentEmployeeNo = $('#inputDepartmentEmployeeNo').val()
        if (!/^[0-9.]+$/.test(inputDepartmentEmployeeNo)) {
            toastHr('Department Employee No should contains only number');
            $('#inputDepartmentEmployeeNo').addClass("error")
            return
        }
    })
    $('#inputDepartmentStateGovtDoj').on('focus', function () {
        

        let todaydate = new Date();

        $('#inputDepartmentStateGovtDoj').attr('max', todaydate.toISOString().split('T')[0]);



    })

    $('#inputDeptEmpDurationPeriod').on('focus', function () {
        let inputDepartmentStateGovtDoj = $('#inputDepartmentStateGovtDoj').val()


        let joiningdate = new Date(inputDepartmentStateGovtDoj);
        $('#inputDeptEmpDurationPeriod').attr('min', joiningdate.toISOString().split('T')[0]);




    })

    $('#inputPercentageofdisability').on('keyup', function () {
        let inputPercentageofdisability = $(this).val()
        if (parseFloat(inputPercentageofdisability) > 100) {
            toastHr('Percentage of disability should not greater than 100');
            $('#inputPercentageofdisability').addClass("error")
            return
        }

        if (parseFloat(inputPercentageofdisability) < 1) {
            toastHr('Percentage of disability should not less than 1');
            $('#inputPercentageofdisability').addClass("error")
            return
        }

        if (!/^[0-9.]+$/.test(inputPercentageofdisability)) {
            toastHr('Percentage of disability should contains only number');
            $('#inputPercentageofdisability').addClass("error")
            return
        }
    })
    //$("#inputPassportNo").on('blur', function () {
    //    let inputPassportNo = $(this).val();
    //    let passportRegex = /^[A-Z]{1}\d{7}$/;

    //    if (!passportRegex.test(inputPassportNo)) {
    //        toastHr("Please enter a valid Indian passport number");
    //        $(this).addClass("error");
    //        return
    //    }  
    //});

    //$("#inputPassportNo").on('Keyup', function () {
    //    let inputPassportNo = $('#inputPassportNo').val()


    //    if (inputPassportNo.length > 7) {
    //        toastHr("Passport number length should not greater than 7 character");
    //        $(this).addClass("error");
    //        return
    //    }
    //});

})

//function firstNextSave(e) {
//    
//    e.preventDefault()

//}

function firstNextValidationBtn() {
    




    if ($('#divPersonalDetails').is(':visible')) {
        let inputApplicationSequenceNo = $('#inputApplicationSequenceNo').val()
        let profilepic = $('.profile-pic').attr('src')
        let inputRollNo = $('#inputRollNo').val()
        let inputPostName = $("#inputPostName").val();
        let inputApplicantName = $("#inputApplicantName").val();
        let inputApplicantDob = $("#datepicker").val();
        let selectGender = $("#selectGender").val();
        let selectMartialStatus = $("#selectMartialStatus").val();
        let selectReligion = $("#selectReligion").val();
        let inputFatherName = $("#inputFatherName").val();
        let inputMotherName = $("#inputMotherName").val();
        let inputDesignation = $("#inputDesignation").val();
        let inputPanNo = $("#inputPanNo").val();
        let inputAdharNo = $("#inputAdharNo").val()
        let inputPassportNo = $('#inputPassportNo').val();
        let inputEmail = $("#inputEmail").val();
        let inputConfirmEmail = $("#inputConfirmEmail").val();
        let inputMobileNo = $("#inputMobileNo").val()
        let inputConfirmMobileNo = $("#inputConfirmMobileNo").val()
        let inputAlternateMobileNo = $("#inputAlternateMobileNo").val()
        let inputTelephone = $("#inputTelephone").val()
        let inputMarkOfIdentification = $("#inputMarkOfIdentification").val();

        if (profilepic == "") {

            toastHr("Please upload profile pic")

            return
        }
        if (inputApplicationSequenceNo == "") {

            toastHr("Application sequence number should not empty")
            $('#inputApplicationSequenceNo').addClass("error")
            return
        }

        if (!/^[0-9]+$/.test(inputApplicationSequenceNo)) {

            toastHr("Sequence contains only number")
            $('#inputApplicationSequenceNo').addClass("error")
            return
        }

        if (parseFloat(inputApplicationSequenceNo) < 1) {

            toastHr("Sequence number should not less than 1")
            $('#inputApplicationSequenceNo').addClass("error")
            return
        }

        if (inputRollNo == "") {

            toastHr("Roll number should not empty")
            $('#inputRollNo').addClass("error")
            return
        }
        if (!/^[0-9]+$/.test(inputRollNo)) {

            toastHr("Roll number contains only number")
            $('#inputRollNo').addClass("error")
            return
        }

        if (parseFloat(inputRollNo) < 1) {

            toastHr("Roll number should not less than 1")
            $('#inputRollNo').addClass("error")
            return
        }

        if (inputPostName == "") {

            toastHr("Post name should not empty")
            $('#inputPostName').addClass("error")
            return
        }

        if (inputApplicantName == "") {

            toastHr("Applicant name should not empty")
            $('#inputApplicantName').addClass("error")
            return
        }
        if (inputApplicantDob == "") {

            toastHr("DOB name should not empty")
            $('#datepicker').addClass("error")
            return
        }
        if (!selectGender) {

            toastHr("Please select a gender");
            $("#selectGender").addClass("error");
            return
        }

        if (!selectMartialStatus) {

            toastHr("Please select a marital status");
            $("#selectMartialStatus").addClass("error");
            return
        }


        if (!selectReligion) {

            toastHr("Please select a religion");
            $("#selectReligion").addClass("error");
            return
        }

        if (inputFatherName == "") {

            toastHr("Father name should not empty")
            $('#inputFatherName').addClass("error")
            return
        }

        if (inputMotherName == "") {

            toastHr("Mother name should not empty")
            $('#inputMotherName').addClass("error")
            return
        }

        if (inputDesignation == "") {

            toastHr("Designation should not empty")
            $('#inputDesignation').addClass("error")
            return
        }



        if (inputPassportNo.length > 7) {

            toastHr("Passport number should not greater than 7 character")
            $('#inputAdharNo').addClass("error")
            return
        }


        if (inputPanNo == "") {

            toastHr("PAN number should not empty")
            $('#inputPanNo').addClass("error")
            return
        }
        let panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
        if (!panRegex.test(inputPanNo)) {
            toastHr("Please enter a valid PAN number");
            $('#inputPanNo').addClass("error")
            return
        }

        if (inputAdharNo == "") {

            toastHr("PAN number should not empty")
            $('#inputAdharNo').addClass("error")
            return
        }
        if (!/^[0-9]+$/.test(inputAdharNo)) {

            toastHr("Adhar number contains only number")
            $('#inputAdharNo').addClass("error")
            return
        }

        if (inputAdharNo.length < 12) {

            toastHr("Adhar number should not less than 12 digit")
            $('#inputAdharNo').addClass("error")
            return
        }
        if (inputAdharNo.length > 12) {

            toastHr("Adhar number should not greater than 12 digit")
            $('#inputAdharNo').addClass("error")
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

            toastHr("Email should not empty")
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

        if (inputTelephone == "") {

            toastHr("Telephone no. should not empty")
            $('#inputTelephone').addClass("error")
            return
        }
        if (inputTelephone.length > 11) {
            toastHr("Telephone number length should not greater than 11 digit");
            $('#inputTelephone').addClass("error");
            return
        }

        if (inputTelephone.length < 11) {
            toastHr("Telephone number length should not less than 11 digit");
            $('#inputTelephone').addClass("error");
            return
        }
        let telephoneRegex = /^\d{11}$/;

        if (!telephoneRegex.test(inputTelephone)) {
            toastHr("Please enter a valid 11-digit telephone number");
            $('#inputTelephone').addClass("error");
            return
        }

        if (inputMarkOfIdentification == "") {

            toastHr("Mark Of Indentification should not empty")
            $('#inputMarkOfIdentification').addClass("error")
            return
        }


    }
    if ($('#divPersonalDetails').is(':visible')) {
        let spanPersonalDetailsBirthCertification = parseInt($("#spanPersonalDetailsBirthCertification").text())
        let spanPersonalDetailsAdhar = parseInt($("#spanPersonalDetailsAdhar").text())
        let spanPersonalDetailsPan = parseInt($("#spanPersonalDetailsPan").text())

        if (spanPersonalDetailsBirthCertification < 1) {
            toastHr("Please upload birth certificate document")

            return
        }

        if (spanPersonalDetailsAdhar < 1) {
            toastHr("Please upload adhar card document")

            return
        }
        if (spanPersonalDetailsPan < 1) {
            toastHr("Please upload pan card document")

            return
        }


    }

    if ($('#matricDetails').is(':visible')) {
        let inputMatricBoardName = $('#inputMatricBoardName').val()
        let inputMatricInstituteName = $('#inputMatricInstituteName').val()
        let inputMatricEvaluationType = $('#inputMatricEvaluationType').val()
        let inputMatricMaximumMarks = $('#inputMatricMaximumMarks').val()
        let inputMatricObtainedMarks = $('#inputMatricObtainedMarks').val()
        let inputMatricPercentage = $('#inputMatricPercentage').val()
        let inputMatricTotalCgpa = $('#inputMatricTotalCgpa').val()
        let inputMatricCgpaMultiplyingFactor = $('#inputMatricCgpaMultiplyingFactor').val()
        let inputMatricCgpaObtained = $('#inputMatricCgpaObtained').val()
        let inputMatricCgpaCalculatedPercent = $('#inputMatricCgpaCalculatedPercent').val()
        let inputMatricGrade = $('#inputMatricGrade').val()
        let inputMatricYearOfPassing = $('#inputMatricYearOfPassing').val()
        if (inputMatricBoardName == "") {
            toastHr("Matric board name should not empty")
            $('#inputMatricBoardName').addClass("error")
            return
        }
        if (inputMatricInstituteName == "") {
            toastHr("Matric institute name should not empty")
            $('#inputMatricInstituteName').addClass("error")
            return
        }
        if (inputMatricEvaluationType == "") {
            toastHr("Matric evaluation type should not empty")
            $('#inputMatricEvaluationType').addClass("error")
            return
        }

        if (inputMatricEvaluationType !== "Percentage" && inputMatricEvaluationType !== "CGPA" && inputMatricEvaluationType !== "Grade") {
            toastHr("Enter valid Matric evaluation type");
            $('#inputMatricEvaluationType').addClass("error");
            return;
        }

        if (inputMatricMaximumMarks == "") {
            toastHr("Matric maximum marks should not empty")
            $('#inputMatricMaximumMarks').addClass("error")
            return
        }
        if (!/^[0-9]+$/.test(inputMatricMaximumMarks)) {
            toastHr("Matric maximum marks should contains only number")
            $('#inputMatricMaximumMarks').addClass("error")
            return
        }
        if (inputMatricMaximumMarks < 1) {
            toastHr("Matric maximum marks should not less than 1")
            $('#inputMatricMaximumMarks').addClass("error")
            return
        }
        if (inputMatricObtainedMarks == "") {
            toastHr("Matric obtained marks should not empty")
            $('#inputMatricObtainedMarks').addClass("error")
            return
        }
        if (!/^[0-9]+$/.test(inputMatricObtainedMarks)) {
            toastHr("Matric obtained marks should contains only number")
            $('#inputMatricObtainedMarks').addClass("error")
            return
        }
        if (inputMatricObtainedMarks < 1) {
            toastHr("Matric obtained marks should not less than 1")
            $('#inputMatricObtainedMarks').addClass("error")
            return
        }
        if (parseInt(inputMatricObtainedMarks) > parseInt(inputMatricMaximumMarks)) {
            toastHr("Matric obtained marks should not greater than maximum marks")
            $('#inputMatricObtainedMarks').addClass("error")
            return
        }
        if (inputMatricPercentage == "") {
            toastHr("Matric percentage should not empty")
            $('#inputMatricPercentage').addClass("error")
            return
        }
        if (!/^[0-9.]+$/.test(inputMatricPercentage)) {
            toastHr("Matric percentage should contains only number")
            $('#inputMatricPercentage').addClass("error")
            return
        }
        if (inputMatricPercentage < 1) {
            toastHr("Matric percentage should not less than 1")
            $('#inputMatricPercentage').addClass("error")
            return
        }
        if (inputMatricPercentage > 100) {
            toastHr("Matric percentage should not greater than 100")
            $('#inputMatricPercentage').addClass("error")
            return
        }
        if (inputMatricTotalCgpa == "") {
            toastHr("Matric total cgpa should not empty")
            $('#inputMatricTotalCgpa').addClass("error")
            return
        }
        if (!/^[0-9]+$/.test(inputMatricTotalCgpa)) {
            toastHr("Matric total cgpa should contains only number")
            $('#inputMatricTotalCgpa').addClass("error")
            return
        }
        if (inputMatricTotalCgpa < 1) {
            toastHr("Matric total cgpa should not less than 1")
            $('#inputMatricTotalCgpa').addClass("error")
            return
        }
        if (inputMatricTotalCgpa > 10) {
            toastHr("Matric total cgpa should not greater than 10")
            $('#inputMatricTotalCgpa').addClass("error")
            return
        }
        if (inputMatricCgpaMultiplyingFactor == "") {
            toastHr("Matric cgpa multiplying factor should not empty")
            $('#inputMatricCgpaMultiplyingFactor').addClass("error")
            return
        }
        if (!/^[0-9.]+$/.test(inputMatricCgpaMultiplyingFactor)) {
            toastHr("Matric cgpa multiplying factor should contains only number")
            $('#inputMatricCgpaMultiplyingFactor').addClass("error")
            return
        }
        if (inputMatricCgpaMultiplyingFactor < 1) {
            toastHr("Matric cgpa multiplying factor should not less than 1")
            $('#inputMatricCgpaMultiplyingFactor').addClass("error")
            return
        }
        if (inputMatricCgpaMultiplyingFactor > 10) {
            toastHr("Matric cgpa multiplying factor should not greater than 10")
            $('#inputMatricCgpaMultiplyingFactor').addClass("error")
            return
        }
        if (inputMatricCgpaObtained == "") {
            toastHr("Matric cgpa obtained should not empty")
            $('#inputMatricCgpaObtained').addClass("error")
            return
        }
        if (!/^[0-9.]+$/.test(inputMatricCgpaObtained)) {
            toastHr("Matric cgpa obtained should contains only number")
            $('#inputMatricCgpaObtained').addClass("error")
            return
        }
        if (inputMatricCgpaObtained < 1) {
            toastHr("Matric cgpa obtained should not less than 1")
            $('#inputMatricCgpaObtained').addClass("error")
            return
        }
        if (inputMatricCgpaObtained > 10) {
            toastHr("Matric cgpa obtained should not greater than 10")
            $('#inputMatricCgpaObtained').addClass("error")
            return
        }
        if (parseFloat(inputMatricCgpaObtained) > parseFloat(inputMatricTotalCgpa)) {
            toastHr("Matric obtained cgpa should not greater than maximum cgpa")
            $('#inputMatricCgpaObtained').addClass("error")
            return
        }

        if (inputMatricCgpaCalculatedPercent == "") {
            toastHr("Matric cgpa calculated percent should not empty")
            $('#inputMatricCgpaCalculatedPercent').addClass("error")
            return
        }
        if (!/^[0-9.]+$/.test(inputMatricCgpaCalculatedPercent)) {
            toastHr("Matric cgpa calculated percent should contains only number")
            $('#inputMatricCgpaCalculatedPercent').addClass("error")
            return
        }
        if (inputMatricCgpaCalculatedPercent < 1) {
            toastHr("Matric cgpa calculated percent should not less than 1")
            $('#inputMatricCgpaCalculatedPercent').addClass("error")
            return
        }
        if (inputMatricCgpaCalculatedPercent > 100) {
            toastHr("Matric cgpa calculated percent should not greater than 100")
            $('#inputMatricCgpaCalculatedPercent').addClass("error")
            return
        }
        if (inputMatricGrade == "") {
            toastHr("Matric grade should not empty")
            $('#inputMatricGrade').addClass("error")
            return
        }

        if (inputMatricYearOfPassing == "") {
            toastHr("Matric year of passing should not empty")
            $('#inputMatricYearOfPassing').addClass("error")
            return
        }
        if (!/^[0-9]+$/.test(inputMatricYearOfPassing)) {
            toastHr("Matric year of passing should contains only number")
            $('#inputMatricYearOfPassing').addClass("error")
            return
        }
        if (inputMatricYearOfPassing.length > 4) {
            toastHr("Matric year of passing length should 4 digit")
            $('#inputMatricYearOfPassing').addClass("error")
            return
        }
        if (inputMatricYearOfPassing.length < 4) {
            toastHr("Matric year of passing length should 4 digit")
            $('#inputMatricYearOfPassing').addClass("error")
            return
        }

    }

    if ($('#intermediateDetails').is(':visible')) {
        let inputIntermediateBoardName = $('#inputIntermediateBoardName').val()
        let inputIntermediateInstituteName = $('#inputIntermediateInstituteName').val()
        let inputIntermediateEvaluationType = $('#inputIntermediateEvaluationType').val()
        let inputIntermediateSubjects = $('#inputIntermediateSubjects').val()
        let inputIntermediateOtherSubjects = $('#inputIntermediateOtherSubjects').val()
        let inputIntermediateMaximumMarks = $('#inputIntermediateMaximumMarks').val()
        let inputIntermediateObtainedMarks = $('#inputIntermediateObtainedMarks').val()
        let inputIntermediatePercentage = $('#inputIntermediatePercentage').val()
        let inputIntermediateTotalCgpa = $('#inputIntermediateTotalCgpa').val()
        let inputIntermediateCgpaMultiplyingFactor = $('#inputIntermediateCgpaMultiplyingFactor').val()
        let inputIntermediateCgpaObtained = $('#inputIntermediateCgpaObtained').val()
        let inputIntermediateCgpaCalculatedPercent = $('#inputIntermediateCgpaCalculatedPercent').val()
        let inputIntermediateGrade = $('#inputIntermediateGrade').val()
        let inputIntermediateYearOfPassing = $('#inputIntermediateYearOfPassing').val()
        if (inputIntermediateBoardName == "") {
            toastHr("Intermediate board name should not empty")
            $('#inputIntermediateBoardName').addClass("error")
            return
        }
        if (inputIntermediateInstituteName == "") {
            toastHr("Intermediate institute name should not empty")
            $('#inputIntermediateInstituteName').addClass("error")
            return
        }
        if (inputIntermediateEvaluationType == "") {
            toastHr("Intermediate evaluation type should not empty")
            $('#inputIntermediateEvaluationType').addClass("error")
            return
        }
        if (inputIntermediateEvaluationType != "Percentage" && inputIntermediateEvaluationType != "CGPA" && inputIntermediateEvaluationType != "Grade") {
            toastHr("Enter valid Intermediate evaluation type")
            $('#inputIntermediateEvaluationType').addClass("error")
            return
        }
        if (inputIntermediateSubjects == "") {
            toastHr("Intermediate subjects should not empty")
            $('#inputIntermediateSubjects').addClass("error")
            return
        }
        if (inputIntermediateOtherSubjects == "") {
            toastHr("Intermediate subjects should not empty")
            $('#inputIntermediateOtherSubjects').addClass("error")
            return
        }

        if (inputIntermediateMaximumMarks == "") {
            toastHr("Intermediate maximum marks should not empty")
            $('#inputIntermediateMaximumMarks').addClass("error")
            return
        }
        if (!/^[0-9]+$/.test(inputIntermediateMaximumMarks)) {
            toastHr("Intermediate maximum marks should contains only number")
            $('#inputIntermediateMaximumMarks').addClass("error")
            return
        }
        if (parseFloat(inputIntermediateMaximumMarks) < 1) {
            toastHr("Intermediate maximum marks should not less than 1")
            $('#inputIntermediateMaximumMarks').addClass("error")
            return
        }

        if (inputIntermediateObtainedMarks == "") {
            toastHr("Intermediate obtained marks should not empty")
            $('#inputIntermediateObtainedMarks').addClass("error")
            return
        }
        if (!/^[0-9]+$/.test(inputIntermediateObtainedMarks)) {
            toastHr("Intermediate obtained marks should contains only number")
            $('#inputIntermediateObtainedMarks').addClass("error")
            return
        }
        if (parseFloat(inputIntermediateObtainedMarks) < 1) {
            toastHr("Intermediate obtained marks should not less than 1")
            $('#inputIntermediateObtainedMarks').addClass("error")
            return
        }

        if (parseFloat(inputIntermediateObtainedMarks) > parseFloat(inputIntermediateMaximumMarks)) {
            toastHr("Intermediate obtained marks should not greater than intermediate maximum marks")
            $('#inputIntermediateObtainedMarks').addClass("error")
            return
        }
        if (inputIntermediatePercentage == "") {
            toastHr("Intermediate percentage should not empty")
            $('#inputIntermediatePercentage').addClass("error")
            return
        }
        if (!/^[0-9.]+$/.test(inputIntermediatePercentage)) {
            toastHr("Intermediate percentage should contains only number")
            $('#inputIntermediatePercentage').addClass("error")
            return
        }
        if (parseFloat(inputIntermediatePercentage) < 1) {
            toastHr("Intermediate percentage should not less than 1")
            $('#inputIntermediatePercentage').addClass("error")
            return
        }

        if (parseFloat(inputIntermediatePercentage) > 100) {
            toastHr("Intermediate percentage should not greater than 100")
            $('#inputIntermediatePercentage').addClass("error")
            return
        }
        if (inputIntermediateTotalCgpa == "") {
            toastHr("Intermediate total cgpa should not empty")
            $('#inputIntermediateTotalCgpa').addClass("error")
            return
        }
        if (!/^[0-9]+$/.test(inputIntermediateTotalCgpa)) {
            toastHr("Intermediate total cgpa should contains only number")
            $('#inputIntermediateTotalCgpa').addClass("error")
            return
        }
        if (parseFloat(inputIntermediateTotalCgpa) < 1) {
            toastHr("Intermediate total cgpa should not less than 1")
            $('#inputIntermediateTotalCgpa').addClass("error")
            return
        }
        if (parseFloat(inputIntermediateTotalCgpa) > 10) {
            toastHr("Intermediate total cgpa should not greater than 10")
            $('#inputIntermediateTotalCgpa').addClass("error")
            return
        }

        if (inputIntermediateCgpaObtained == "") {
            toastHr("Intermediate cgpa obtained should not empty")
            $('#inputIntermediateCgpaObtained').addClass("error")
            return
        }
        if (!/^[0-9.]+$/.test(inputIntermediateCgpaObtained)) {
            toastHr("Intermediate cgpa obtained should contains only number")
            $('#inputIntermediateCgpaObtained').addClass("error")
            return
        }
        if (parseFloat(inputIntermediateCgpaObtained) < 1) {
            toastHr("Intermediate cgpa obtained should not less than 1")
            $('#inputIntermediateCgpaObtained').addClass("error")
            return
        }
        if (parseFloat(inputIntermediateCgpaObtained) > 10) {
            toastHr("Intermediate cgpa obtained should not greater than 10")
            $('#inputIntermediateCgpaObtained').addClass("error")
            return
        }

        if (parseFloat(inputIntermediateCgpaObtained) > parseFloat(inputIntermediateTotalCgpa)) {
            toastHr("Intermediate total cgpa should not greater than obtained cgpa")
            $('#inputIntermediateCgpaObtained').addClass("error")
            return
        }
        if (inputIntermediateCgpaMultiplyingFactor == "") {
            toastHr("Intermediate cgpa multiplying factor should not empty")
            $('#inputIntermediateCgpaMultiplyingFactor').addClass("error")
            return
        }
        if (!/^[0-9]+$/.test(inputIntermediateCgpaMultiplyingFactor)) {
            toastHr("Intermediate cgpa multiplying factor should contains only number")
            $('#inputIntermediateCgpaMultiplyingFactor').addClass("error")
            return
        }
        if (parseFloat(inputIntermediateCgpaMultiplyingFactor) < 1) {
            toastHr("Intermediate cgpa multiplying factor should not less than 1")
            $('#inputIntermediateCgpaMultiplyingFactor').addClass("error")
            return
        }
        if (parseFloat(inputIntermediateCgpaMultiplyingFactor) > 10) {
            toastHr("Intermediate cgpa multiplying factor should not greater than 10")
            $('#inputIntermediateCgpaMultiplyingFactor').addClass("error")
            return
        }

        if (inputIntermediateCgpaCalculatedPercent == "") {
            toastHr("Intermediate cgpa calculated percent should not empty")
            $('#inputIntermediateCgpaCalculatedPercent').addClass("error")
            return
        }
        if (!/^[0-9.]+$/.test(inputIntermediateCgpaCalculatedPercent)) {
            toastHr("Intermediate cgpa calculated percent should contains only number")
            $('#inputIntermediateCgpaCalculatedPercent').addClass("error")
            return
        }
        if (parseFloat(inputIntermediateCgpaCalculatedPercent) < 1) {
            toastHr("Intermediate cgpa calculated percent should not less than 1")
            $('#inputIntermediateCgpaCalculatedPercent').addClass("error")
            return
        }
        if (parseFloat(inputIntermediateCgpaCalculatedPercent) > 100) {
            toastHr("Intermediate cgpa calculated percent should not greater than 100")
            $('#inputIntermediateCgpaCalculatedPercent').addClass("error")
            return
        }
        if (inputIntermediateGrade == "") {
            toastHr("Intermediate grade should not empty")
            $('#inputIntermediateGrade').addClass("error")
            return
        }
        if (inputIntermediateYearOfPassing == "") {
            toastHr("Intermediate year of passing should not empty")
            $('#inputIntermediateYearOfPassing').addClass("error")
            return
        }
        if (!/^[0-9]+$/.test(inputIntermediateYearOfPassing)) {
            toastHr("Intermediate year of passing should contains only number")
            $('#inputIntermediateYearOfPassing').addClass("error")
            return
        }
        if (inputIntermediateYearOfPassing.length > 4) {
            toastHr("Intermediate year of passing length should 4 digit")
            $('#inputIntermediateYearOfPassing').addClass("error")
            return
        }
        if (inputIntermediateYearOfPassing.length < 4) {
            toastHr("Intermediate year of passing length should 4 digit")
            $('#inputIntermediateYearOfPassing').addClass("error")
            return
        }
    }

    if ($('#graduationDetails').is(':visible')) {
        let inputColageBoardName = $('#inputColageBoardName').val()
        let inputColageInstituteName = $('#inputColageInstituteName').val()
        let inputColageEvaluationType = $('#inputColageEvaluationType').val()
        let inputColageQualificationName = $('#inputColageQualificationName').val()
        let inputColageOtherDegreeName = $('#inputColageOtherDegreeName').val()
        let inputColageSpecialization = $('#inputColageSpecialization').val()
        let inputColageOtherSubject = $('#inputColageOtherSubject').val()
        let inputColageMaximumMarks = $('#inputColageMaximumMarks    ').val()
        let inputColageObtainedMarks = $('#inputColageObtainedMarks').val()
        let inputColagePercentage = $('#inputColagePercentage').val()
        let inputColageTotalCgpa = $('#inputColageTotalCgpa').val()
        let inputColageCgpaMultiplyingFactor = $('#inputColageCgpaMultiplyingFactor').val()
        let inputColageCgpaObtained = $('#inputColageCgpaObtained').val()
        let inputColageCgpaCalculatedPercent = $('#inputColageCgpaCalculatedPercent').val()
        let inputColageGrade = $('#inputColageGrade').val()
        let inputColageYearOfPassing = $('#inputColageYearOfPassing').val()
        if (inputColageBoardName == "") {
            toastHr("University name should not empty")
            $('#inputColageBoardName').addClass("error")
            return
        }
        if (inputColageInstituteName == "") {
            toastHr("Institute name should not empty")
            $('#inputColageInstituteName').addClass("error")
            return
        }

        if (inputColageEvaluationType == "") {
            toastHr("College evaluation type should not empty")
            $('#inputColageEvaluationType').addClass("error")
            return
        }

        if (inputColageEvaluationType != "Percentage" && inputColageEvaluationType != "CGPA" && inputColageEvaluationType != "Grade") {
            toastHr("Enter valid College evaluation type")
            $('#inputColageEvaluationType').addClass("error")
            return
        }

        if (inputColageQualificationName == "") {
            toastHr("College qualification name should not empty")
            $('#inputColageQualificationName').addClass("error")
            return
        }




        if (inputColageSpecialization == "") {
            toastHr("College specialization should not empty")
            $('#inputColageSpecialization').addClass("error")
            return
        }



        if (inputColageMaximumMarks == "") {
            toastHr("College maximum marks should not empty")
            $('#inputColageMaximumMarks').addClass("error")
            return
        }
        if (!/^[0-9]+$/.test(inputColageMaximumMarks)) {
            toastHr("College maximum marks should contains only number")
            $('#inputColageMaximumMarks').addClass("error")
            return
        }

        if (parseFloat(inputColageMaximumMarks) < 1) {
            toastHr("College maximum marks should not less than 1")
            $('#inputColageMaximumMarks').addClass("error")
            return
        }


        if (inputColageObtainedMarks == "") {
            toastHr("College obtained marks should not empty")
            $('#inputColageObtainedMarks').addClass("error")
            return
        }
        if (!/^[0-9]+$/.test(inputColageObtainedMarks)) {
            toastHr("College obtained marks should contains only number")
            $('#inputColageObtainedMarks').addClass("error")
            return
        }

        if (parseFloat(inputColageObtainedMarks) < 1) {
            toastHr("College obtaines marks should not less than 1")
            $('#inputColageObtainedMarks').addClass("error")
            return
        }

        if (inputColagePercentage == "") {
            toastHr("College percentage should not empty")
            $('#inputColagePercentage').addClass("error")
            return
        }
        if (!/^[0-9.]+$/.test(inputColagePercentage)) {
            toastHr("College percentage should contains only number")
            $('#inputColagePercentage').addClass("error")
            return
        }

        if (parseFloat(inputColagePercentage) < 1) {
            toastHr("College percentage should not less than 1")
            $('#inputColagePercentage').addClass("error")
            return
        }

        if (parseFloat(inputColagePercentage) > 100) {
            toastHr("College percentage should not greater than 100")
            $('#inputColagePercentage').addClass("error")
            return
        }


        if (inputColageTotalCgpa == "") {
            toastHr("College total cgpa should not empty")
            $('#inputColageTotalCgpa').addClass("error")
            return
        }

        if (!/^[0-9]+$/.test(inputColageTotalCgpa)) {
            toastHr("College total cgpa should contains only number")
            $('#inputColageTotalCgpa').addClass("error")
            return
        }

        if (parseFloat(inputColageTotalCgpa) < 1) {
            toastHr("College total cgpa should not less than 1")
            $('#inputColageTotalCgpa').addClass("error")
            return
        }
        if (parseFloat(inputColageTotalCgpa) > 10) {
            toastHr("College total cgpa should not greater than 10")
            $('#inputColageTotalCgpa').addClass("error")
            return
        }

        if (inputColageCgpaMultiplyingFactor == "") {
            toastHr("College cgpa multiplying factor should not empty")
            $('#inputColageCgpaMultiplyingFactor').addClass("error")
            return
        }

        if (!/^[0-9.]+$/.test(inputColageCgpaMultiplyingFactor)) {
            toastHr("College cgpa multiplying factor should contains only number")
            $('#inputColageCgpaMultiplyingFactor').addClass("error")
            return
        }

        if (parseFloat(inputColageCgpaMultiplyingFactor) < 1) {
            toastHr("College cgpa multiplying factor should not less than 1")
            $('#inputColageCgpaMultiplyingFactor').addClass("error")
            return
        }
        if (parseFloat(inputColageCgpaMultiplyingFactor) > 10) {
            toastHr("College cgpa multiplying factor should not greater than 10")
            $('#inputColageCgpaMultiplyingFactor').addClass("error")
            return
        }

        if (inputColageCgpaObtained == "") {
            toastHr("College cgpa Obtained should not empty")
            $('#inputColageCgpaObtained').addClass("error")
            return
        }

        if (!/^[0-9.]+$/.test(inputColageCgpaObtained)) {
            toastHr("College cgpa Obtained should contains only number")
            $('#inputColageCgpaObtained').addClass("error")
            return
        }

        if (parseFloat(inputColageCgpaObtained) < 1) {
            toastHr("College cgpa Obtained should not less than 1")
            $('#inputColageCgpaObtained').addClass("error")
            return
        }
        if (parseFloat(inputColageCgpaObtained) > 10) {
            toastHr("College cgpa Obtained should not greater than 10")
            $('#inputColageCgpaObtained').addClass("error")
            return
        }

        if (parseFloat(inputColageCgpaObtained) > parseFloat(inputColageTotalCgpa)) {
            toastHr("College cgpa Obtained should not greater than cgpa total cgpa")
            $('#inputColageCgpaObtained').addClass("error")
            return
        }

        if (parseFloat(inputColageObtainedMarks) > parseFloat(inputColageMaximumMarks)) {
            toastHr("College Obtained marks should not greater than maximum marks")
            $('#inputColageObtainedMarks').addClass("error")
            return
        }

        if (inputColageCgpaCalculatedPercent == "") {
            toastHr("College cgpa percentage should not empty")
            $('#inputColageCgpaCalculatedPercent').addClass("error")
            return
        }
        if (!/^[0-9]+$/.test(inputColageCgpaCalculatedPercent)) {
            toastHr("College cgpa percentage should contains only number")
            $('#inputColageCgpaCalculatedPercent').addClass("error")
            return
        }

        if (parseFloat(inputColageCgpaCalculatedPercent) < 1) {
            toastHr("College cgpa percentage should not less than 1")
            $('#inputColageCgpaCalculatedPercent').addClass("error")
            return
        }

        if (parseFloat(inputColageCgpaCalculatedPercent) > 100) {
            toastHr("College cgpa percentage should not greater than 100")
            $('#inputColageCgpaCalculatedPercent').addClass("error")
            return
        }

        if (inputColageGrade == "") {
            toastHr("College grade should not empty")
            $('#inputColageGrade').addClass("error")
            return
        }
        if (inputColageYearOfPassing == "") {
            toastHr("College year of passing should not empty")
            $('#inputColageYearOfPassing').addClass("error")
            return
        }
        if (!/^[0-9]+$/.test(inputColageYearOfPassing)) {
            toastHr("College year of passing should contains only number")
            $('#inputColageYearOfPassing').addClass("error")
            return
        }
        if (inputColageYearOfPassing.length > 4) {
            toastHr("College year of passing length should 4 digit")
            $('#inputColageYearOfPassing').addClass("error")
            return
        }
        if (inputColageYearOfPassing.length < 4) {
            toastHr("College year of passing length should 4 digit")
            $('#inputColageYearOfPassing').addClass("error")
            return
        }

    }

    if ($('#divAddress').is(':visible')) {
        let inputPresentAddress1 = $('#inputPresentAddress1').val()
        let inputPresentAddress2 = $('#inputPresentAddress2').val()
        let selectPresentCity = $('#selectPresentCity').val()
        let selectPresentState = $('#selectPresentState').val()
        let inputPresentPincode = $('#inputPresentPincode').val()
        let selectPresentCountry = $('#selectPresentCountry').val()
        let inputPermanentAddress1 = $('#inputPermanentAddress1').val()
        let inputPermanentAddress2 = $('#inputPermanentAddress2').val()
        let selectPermanentCity = $('#selectPermanentCity').val()
        let selectPermanentState = $('#selectPermanentState').val()
        let inputPermanentPincode = $('#inputPermanentPincode').val()
        let selectPermanentCountry = $('#selectPermanentCountry').val()


        if (inputPresentAddress1 == "") {
            toastHr("Present address 1 should not empty")
            $('#inputPresentAddress1').addClass("error")
            return
        }

        if (inputPresentAddress2 == "") {
            toastHr("Present address 2 should not empty")
            $('#inputPresentAddress2').addClass("error")
            return
        }

        if (!selectPresentCity) {
            toastHr("Present city should not empty")
            $('#selectPresentCity').addClass("error")
            return
        }

        if (!selectPresentState) {
            toastHr("Present state should not empty")
            $('#selectPresentState').addClass("error")
            return
        }

        if (inputPresentPincode == "") {
            toastHr("Present pincode should not empty")
            $('#inputPresentPincode').addClass("error")
            return
        }

        if (!/^[0-9]+$/.test(inputPresentPincode)) {
            toastHr("Present pincode should contains only number")
            $('#inputPresentPincode').addClass("error")
            return
        }

        if (inputPresentPincode.length < 1) {
            toastHr("Present pincode should not less than 1")
            $('#inputPresentPincode').addClass("error")
            return
        }

        if (inputPresentPincode.length > 6) {
            toastHr("Present pincode should not greater than 6")
            $('#inputPresentPincode').addClass("error")
            return
        }

        if (inputPresentPincode.length < 6) {
            toastHr("Present pincode should not less than 6")
            $('#inputPresentPincode').addClass("error")
            return
        }




        if (!selectPresentCountry) {
            toastHr("Present pincode should not empty")
            $('#selectPresentCountry').addClass("error")
            return
        }

        if ($('#divPermanentAddress').is(':visible')) {
            if (inputPermanentAddress1 == "") {
                toastHr("Permanent address 1 should not empty")
                $('#inputPermanentAddress1').addClass("error")
                return
            }

            if (inputPermanentAddress2 == "") {
                toastHr("Present address 2 should not empty")
                $('#inputPermanentAddress2').addClass("error")
                return
            }

            if (!selectPermanentCity) {
                toastHr("Permanent city should not empty")
                $('#selectPermanentCity').addClass("error")
                return
            }

            //if (!selectPermanentState) {
            //    toastHr("Permanent state should not empty")
            //    $('#selectPermanentState').addClass("error")
            //    return
            //}

            if (inputPermanentPincode == "") {
                toastHr("Permanent pincode should not empty")
                $('#inputPermanentPincode').addClass("error")
                return
            }

            if (!/^[0-9]+$/.test(inputPermanentPincode)) {
                toastHr("Permanent pincode should contains only number")
                $('#inputPermanentPincode').addClass("error")
                return
            }

            if (inputPermanentPincode.length < 1) {
                toastHr("Permanent pincode should not less than 1")
                $('#inputPermanentPincode').addClass("error")
                return
            }

            if (inputPermanentPincode.length > 6) {
                toastHr("Permanent pincode should not greater than 6")
                $('#inputPermanentPincode').addClass("error")
                return
            }

            if (inputPermanentPincode.length < 6) {
                toastHr("Permanent pincode should not less than 6")
                $('#inputPermanentPincode').addClass("error")
                return
            }




            if (!selectPermanentCountry) {
                toastHr("Permanent pincode should not empty")
                $('#selectPermanentCountry').addClass("error")
                return
            }
        }

    }

    if ($('#employerDetails').is(':visible')) {
        let inputNameOfEmployee = $('#inputNameOfEmployee').val()
        let radioEmployeeWorkingStatus = $('#radioEmployeeWorkingStatus').val()

        if (inputNameOfEmployee == "") {
            toastHr("Name should not empty")
            $('#inputNameOfEmployee').addClass("error")
            return
        }

        if (radioEmployeeWorkingStatus == "") {
            toastHr("Working status should not empty")
            $('#radioEmployeeWorkingStatus').addClass("error")
            return
        }

    }


    return 1
}

////function validationForSubmit() {
////    
////    if ($('#othersDetails').is(':visible')) {
////        let radioExServiveManYes = $('#radioExServiveManYes');
////        let radioQualificationReservationCategoryYes = $('#radioQualificationReservationCategoryYes');
////        let radioEmployeeofstategovernmentYes = $('#radioEmployeeofstategovernmentYes')
////        if (radioQualificationReservationCategoryYes.prop('checked')) {
////            let selectReservationCategory = $('#selectReservationCategory').val()
////            if (!selectReservationCategory) {
////                toastHr('Reservation Category should not be empty');
////                $('#selectReservationCategory').addClass("error")
////                return false;
////            }
////        }

////        let radioAreYouPWDYes = $('#radioAreYouPWDYes')
////        if (radioAreYouPWDYes.prop('checked')) {
////            let inputTypeOfDisability = $('#inputTypeOfDisability').val()
////            let inputPercentageofdisability = $('#inputPercentageofdisability').val()

////            if (inputTypeOfDisability == "") {
////                toastHr('Type of disability should not be empty');
////                $('#inputTypeOfDisability').addClass("error")
////                return false;
////            }
////            if (inputPercentageofdisability == "") {
////                toastHr('Percentage of disability should not be empty');
////                $('#inputPercentageofdisability').addClass("error")
////                return false;
////            }

////            if (parseFloat(inputPercentageofdisability) > 100) {
////                toastHr('Percentage of disability should not greater than 100');
////                $('#inputPercentageofdisability').addClass("error")
////                return false;
////            }

////            if (parseFloat(inputPercentageofdisability) < 1) {
////                toastHr('Percentage of disability should not less than 1');
////                $('#inputPercentageofdisability').addClass("error")
////                return false;
////            }

////            if (!/^[0-9.]+$/.test(inputPercentageofdisability)) {
////                toastHr('Percentage of disability should contain only numbers');
////                $('#inputPercentageofdisability').addClass("error")
////                return false;
////            }
////        }
////        if (radioExServiveManYes.prop('checked')) {
////            let inputExServicemenJoiningDate = $('#inputExServicemenJoiningDate').val()
////            let inputExServicemenEndDate = $('#inputExServicemenEndDate').val()
////            let inputExServicemenDuration = $('#inputExServicemenDuration').val()

////            if (inputExServicemenJoiningDate == "") {
////                toastHr('Ex Servicemen Joining Date should not be empty');
////                $('#inputExServicemenJoiningDate').addClass("error")
////                return false;
////            }
////            if (inputExServicemenEndDate == "") {
////                toastHr('Ex Servicemen End Date should not be empty');
////                $('#inputExServicemenEndDate').addClass("error")
////                return false;
////            }

////            if (inputExServicemenDuration == "") {
////                toastHr('Ex Servicemen Duration should not be empty');
////                $('#inputExServicemenDuration').addClass("error")
////                return false;
////            }
////        }
////        if (radioEmployeeofstategovernmentYes.prop('checked')) {
////            let inputDepartmentEmployeeNo = $('#inputDepartmentEmployeeNo').val()
////            let inputDepartmentStateGovtDoj = $('#inputDepartmentStateGovtDoj').val()
////            let inputDeptEmpStateGovtDuration = $('#inputDeptEmpStateGovtDuration').val()
////            let inputDeptEmpDurationPeriod = $('#inputDeptEmpDurationPeriod').val()

////            if (inputDepartmentEmployeeNo == "") {
////                toastHr('Department Employee No should not be empty');
////                $('#inputDepartmentEmployeeNo').addClass("error")
////                return false;
////            }

////            if (!/^[0-9.]+$/.test(inputDepartmentEmployeeNo)) {
////                toastHr('Department Employee No should contain only numbers');
////                $('#inputDepartmentEmployeeNo').addClass("error")
////                return false;
////            }

////            if (inputDepartmentStateGovtDoj == "") {
////                toastHr('Department State Govt Doj should not be empty');
////                $('#inputDepartmentStateGovtDoj').addClass("error")
////                return false;
////            }
////            if (inputDeptEmpStateGovtDuration == "") {
////                toastHr('Department Employee State Govt Duration should not be empty');
////                $('#inputDeptEmpStateGovtDuration').addClass("error")
////                return false;
////            }
////            if (inputDeptEmpDurationPeriod == "") {
////                toastHr('Department Employee Duration Period should not be empty');
////                $('#inputDeptEmpDurationPeriod').addClass("error")
////                return false;
////            }
////        }
////    }
////    return true;
////}

//function submitForm(event) {
//    


//    let validX = validationForSubmit();
//    if (!validX) {
//        return;
//    }
//}
