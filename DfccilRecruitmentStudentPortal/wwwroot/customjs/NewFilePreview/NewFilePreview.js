

NewFileUploadId = 1
$(document).ready(function () {
    /* loadPreviousUploadList()*/
})


function loadPreviousUploadList() {
    
    var tableBody = $('#tablePreviousData tbody');
    tableBody.empty();
    var url = apiBaseUrl + "/api/Home/NewFilePreview/" + NewFileUploadId.toString();

    url = url.replace(/[\u200B-\u200D\uFEFF]/g, '');
    $.ajax({
        type: "GET",
        url: url,

        contentType: "application/json; charset=utf-8",
        dataType: "json",
        //beforeSeend: function () {
        //    $('.page-loader').show();

        //},
        success: function (response) {

            console.log(response.data)
            tableBody.append('');
            var count = 1;
            
            loadPreviousList(response.data, tableBody)

            /* $('.page-loader').hide();*/

        },
        failure: function (response) {
            console.log(response.d);
        }
    });
}

function loadPreviousList(data, tableBody) {
    $.each(data, function (index, item) {
        var row = `
                    <tr>
                        <td>${index + 1}</td>
                        <td>${item.dateOfUpload}</td>
                        <td>${item.time}</td>
                        <td>${item.advertisementNo}</td>
                        <td>${item.description}</td>
                        <td>${item.lastDateOfRegistration}</td>
                        <td>
                            <button class="btn btn-success py-2" onclick="previewData(${item})">Preview Data</button>
                        </td>
                        <td>
                            <button class="btn btn-success py-2" onclick="deleteData(${item.id})">Delete Data</button>
                        </td>
                    </tr>`;
        tableBody.append(row);
    });
}

// Function to handle preview data
function previewData(id) {

    console.log("Previewing data with ID: " + id);
}

// Function to handle deleting data
function deleteData(id) {
    swal({
        title: "Are you sure?",
        text: "You will not be able to recover this data!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: '#DD6B55',
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: "No, cancel It!",
        closeOnConfirm: false,
        closeOnCancel: true
    }, function (isConfirm) {
        if (isConfirm) {

            $.ajax({
                type: "DELETE",
                url: apiBaseUrl + "/api/Home/DeleteData/" + id,
                //beforeSeend: function () {
                //    $('.page-loader').show();

                //},
                success: function () {
                    swal("Deleted!", "Your data has been deleted.", "success");

                    loadPreviousUploadList();
                    /* $('.page-loader').hide();*/
                },
                error: function () {
                    swal("Error", "Failed to delete data.", "error");
                }
            });
        } else {

            swal("Cancelled", "Your data is safe :)", "error");
        }
    });
}

let array = ["ANKUSH", "MITTAL"]; // Store fetched data here
const advertisementNoInput = document.getElementById('advertisementNoInput');
const description = document.getElementById('description');
const dateOfAdvertisement = document.getElementById('dateOfAdvertisement');
const inputLastDateOfDescription = document.getElementById('inputLastDateOfDescription');
const resultsAdv = document.getElementById('resultsAdv');
const resultsDesc = document.getElementById('resultsDesc');
const resultsDateOfAdv = document.getElementById('resultsDateOfAdv');
const resultsDate = document.getElementById('resultsDate');

advertisementNoInput.addEventListener('input', function () {
    const searchText = advertisementNoInput.value.toLowerCase();
    const filteredArray = array.filter(item => item.toLowerCase().startsWith(searchText));
    displayResultsForAdvertisement(filteredArray);
});

function displayResultsForAdvertisement(results) {
    resultsAdv.innerHTML = '';
    if (results.length === 0) {
        resultsAdv.style.display = 'none';
        return;
    }
    results.forEach(item => {
        const div = document.createElement('div');
        div.textContent = item;
        div.classList.add('result-item');
        div.addEventListener('click', function () {
            advertisementNoInput.value = item;
            resultsAdv.style.display = 'none';
        });
        resultsAdv.appendChild(div);
    });
    resultsAdv.style.display = 'block';
}

description.addEventListener('input', function () {
    const searchText = description.value.toLowerCase();
    const filteredArray = array.filter(item => item.toLowerCase().startsWith(searchText));
    displayResultsForDescription(filteredArray);
});

function displayResultsForDescription(results) {
    resultsDesc.innerHTML = '';
    if (results.length === 0) {
        resultsDesc.style.display = 'none';
        return;
    }
    results.forEach(item => {
        const div = document.createElement('div');
        div.textContent = item;
        div.classList.add('result-item');
        div.addEventListener('click', function () {
            description.value = item;
            resultsDesc.style.display = 'none';
        });
        resultsDesc.appendChild(div);
    });
    resultsDesc.style.display = 'block';
}

dateOfAdvertisement.addEventListener('input', function () {
    const searchText = dateOfAdvertisement.value.toLowerCase();
    const filteredArray = array.filter(item => item.toLowerCase().startsWith(searchText));
    displayResultsForApplyDate(filteredArray);
});

function displayResultsForApplyDate(results) {
    resultsDateOfAdv.innerHTML = '';
    if (results.length === 0) {
        resultsDateOfAdv.style.display = 'none';
        return;
    }
    results.forEach(item => {
        const div = document.createElement('div');
        div.textContent = item;
        div.classList.add('result-item');
        div.addEventListener('click', function () {
            dateOfAdvertisement.value = item;
            resultsDateOfAdv.style.display = 'none';
        });
        resultsDateOfAdv.appendChild(div);
    });
    resultsDateOfAdv.style.display = 'block';
}

inputLastDateOfDescription.addEventListener('input', function () {
    const searchText = inputLastDateOfDescription.value.toLowerCase();
    const filteredArray = array.filter(item => item.toLowerCase().startsWith(searchText));
    displayResultsForlastDate(filteredArray);
});

function displayResultsForlastDate(results) {
    resultsDate.innerHTML = '';
    if (results.length === 0) {
        resultsDate.style.display = 'none';
        return;
    }
    results.forEach(item => {
        const div = document.createElement('div');
        div.textContent = item;
        div.classList.add('result-item');
        div.addEventListener('click', function () {
            inputLastDateOfDescription.value = item;
            resultsDate.style.display = 'none';
        });
        resultsDate.appendChild(div);
    });
    resultsDate.style.display = 'block';
}
let selectedOptions = {};
let arrayFromBackend = [
    "Application Seq No",
    "App Status",
    "App Date (dd/MMM/yyyy)",
    "Post Name",
    "Applicant Name",
    "Religion",
    "Marital Status",
    "Father Name",
    "Mark of Identification",
    "Scribe Father name",
    "Scribe present Address",
    "Scribe permanent Address",
    "Mother Name",
    "Mobile No",
    "Conf Mobile No",
    "Email Id",
    "Alternate Mobile No",
    "Confirm Email Id",
    "Gender",
    "Applicant DOB(dd/MMM/yyyy)",
    "Age Years",
    "Age Month",
    "Age Days",
    "Nationality",
    "Civil employment under Central Government",
    "Have you acquired essential qualification for the post through Indian Army/Navy/Air Force",
    "Reservation Category",
    "Test City CBT1",
    "Test City 2",
    "Test City 3",
    "Test City CBT2 preference 1",
    "Test City CBT2 preference 2",
    "Test City CBT2 preference 3",
    "Are you PwBD",
    "Type of Disability",
    "Sub Disability Type",
    "Percentage of disability",
    "Do you want a scribe",
    "whether you opt for own scribe",
    "Org to provide Scribe",
    "Scribe Name",
    "Disability B",
    "Disability LV",
    "Disability D",
    "Disability HH",
    "Disability OA",
    "Disability OL",
    "Disability OAL",
    "Disability BL",
    "Disability BA",
    "Disability CP",
    "Disability LC",
    "Disability Dw",
    "Disability AAV",
    "Disability Mdy",
    "Disability ASD(M, MoD)",
    "Disability ID",
    "Disability SLD",
    "Disability MI",
    "Scribe Qualification",
    "Scribe Relationship",
    "Are you an Ex Servicemen",
    "Ex Servicemen Joining date",
    "Date of Birth of Scribe",
    "Ex Servicemen End Date",
    "Ex Servicemen Duration period",
    "Ex Ser years",
    "Ex Ser months",
    "Ex Ser days",
    "Ex Serviceman Disabiled ESM",
    "Ex Serviceman Dependant of Killed in Action",
    "Are you an employee of State Govt",
    "Dept Employee Number",
    "Dept Eemployee State Govt DOJ",
    "Dept Eemployee State Govt Duration",
    "Dept Emp Duration period",
    "Dept Emp years",
    "Dept Emp months",
    "Dept Emp days",
    "Address Line 1",
    "Address Line 2",
    "Country",
    "State",
    "Other State Name",
    "City District",
    "Other City/District",
    "Pincode",
    "Permanent Address Same as Correspondence",
    "Permanent Address Line 1",
    "Permanent Address Line 2",
    "Permanent Country",
    "Permanent Other Country Name",
    "Permanent State",
    "Permanent Other State Name",
    "Permanent District",
    "Permanent Other City District",
    "Permanent Pincode",
    "Matri Name of the Board",
    "Matri School/ lnstitute Name",
    "Matri Percentage/CGPA/Grade",
    "Matri Marks Obtained",
    "Matri Maximum Marks",
    "Matri Percentage",
    "Matri Grade",
    "Matri CGPA obtained",
    "Matri Total CGPA",
    "Matri CGPA Multiplying Factor",
    "Matri Calculated Percent from CGPA",
    "Matri Year of Passing",
    "Graduation university name",
    "Graduation qualification Name",
    "Graduation Other Degree Name",
    "Graduation lnstitute Name",
    "Graduation Specialization",
    "Graduation Other Subjects",
    "Graduation Percentage/CGPA/Grade",
    "Graduation Marks Obtained",
    "Graduation Maximum Marks",
    "Graduation Percentage",
    "Graduation Grade",
    "Graduation CGPA obtained",
    "Graduation Total CGPA",
    "Graduation CGPA Multiplying Factor",
    "Graduation Calculated Percent from CGPA",
    "Graduation Year of Passing",
    "Organisation Name 1",
    "Name of Organization/Employer",
    "Are you currently Working"
];


let dataArray = []; // Array to store Excel data
let uniqueKeys = []; // Array to store unique keys
let FileBinary;
$(document).ready(function () {


    $("#excelInput").on("change", function (e) {
        const file = e.target.files[0];
        FileBinary = file
        if (file) {
            const reader = new FileReader();

            reader.onload = function (e) {
                const data = new Uint8Array(e.target.result);
                const workbook = XLSX.read(data, { type: "array" });

                const sheetName = workbook.SheetNames[0];
                const sheet = workbook.Sheets[sheetName];

                const header = XLSX.utils.sheet_to_json(sheet, { header: 1 })[0];

                // Creating an array of objects for frontend display
                dataArray = XLSX.utils.sheet_to_json(sheet, { header: header }).slice(1);

                // Extracting unique keys dynamically
                uniqueKeys = [...new Set(dataArray.flatMap(entry => Object.keys(entry)))];

                // Reset selectedOptions when a new file is selected
                selectedOptions = {};

                // Rearranging rows based on the order of appearance in the header row
                dataArray.sort((a, b) => header.indexOf(Object.keys(a)[0]) - header.indexOf(Object.keys(b)[0]));

                // Displaying data in the frontend (show only the first 5 candidates)
                displayData(dataArray, uniqueKeys, 5);
            };

            reader.readAsArrayBuffer(file);
        }
    });

    function displayData(dataArray, keys, numberOfCandidates) {
        const tableBody = $("#tableSelectDateUpload tbody");
        tableBody.empty();

        keys.forEach((keyName, index) => {
            console.log(`Key from Backend: ${keyName}`);
            const row = $("<tr></tr>");
            let count = 0;

            dataArray.slice(0, numberOfCandidates + 1).forEach((entry, entryIndex) => {
                if (count === 0) {
                    console.log(`Value from Excel for ${keyName}: ${entry[keyName]}`);
                    const cell = $("<td></td>").append(`
                <div class="div-width">
                    <div class="form-group">
                        <select class="form-control" id="selectOptions${entryIndex}" onchange="handleSelectChange(this, '${keyName}')">
                            <option value="" disabled>Select option</option>
                            ${arrayFromBackend.map((option, i) => {
                        // Preselect the option based on the index of the select dropdown
                        const isSelected = index === i ? 'selected' : '';
                        // Add the initially selected options to the selectedOptions object
                        if (isSelected) {
                            selectedOptions[keyName] = option;
                        }
                        return `<option value="${option}" ${isSelected}>${option}</option>`;
                    })}
                        </select>
                    </div>
                </div>`
                    );
                    row.append(cell);

                } else {
                    const cell = $("<td></td>").text(entry[keyName]);
                    row.append(cell);
                }

                count++;
            });

            const keyNameCell = $("<td></td>").text(keyName);
            // Insert the keyNameCell as the second cell of the row
            row.find('td:eq(0)').after(keyNameCell);
            tableBody.append(row);
        });
    }



});

function handleSelectChange(select, keyName) {
    const selectedValue = select.value;

    // Update selectedOptions object with the selected value
    selectedOptions[keyName] = selectedValue;
    console.log(selectedOptions);

    // Check if the selected value is already selected in another select tag
    const isValueSelected = $("select").toArray().some((el) => el.value === selectedValue && el !== select);

    if (isValueSelected) {
        // Reset the selected option if already selected in another select tag
        $("select").each(function () {
            if (this.value === selectedValue && this !== select) {
                this.value = "";
                this.style.border = "1px solid red"; // Apply red border
            }
            $(this).on("focus", function () {
                this.style.border = ""; // Reset border
            });
        });
        toastHr("Selected value already chosen in another select tag.");
    }
}





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

$("#confirmBtn").on("click", function () {
    handleConfirmUploadClick();
});

function handleConfirmUploadClick() {
    // Check if selectedOptions object is empty
    if (Object.keys(selectedOptions).length === 0) {
        // Display a message to the user or take any other appropriate action
        console.log("No options selected. Please make a selection.");
        return;
    }

    const resultArray = {};

    for (const [key, selectedValue] of Object.entries(selectedOptions)) {
        // Check if the key exists in the Excel data
        const isKeyInExcel = uniqueKeys.includes(selectedValue);
        console.log(selectedValue)
        console.log(key)
        if (isKeyInExcel || !isKeyInExcel) {
            console.log(selectedValue)
            console.log(key)
            // Find all corresponding values in dataArray for the key
            const valuesArray = dataArray.map(entry => ({ [selectedValue]: entry[key] || "" }));
            resultArray[selectedValue] = valuesArray;
            console.log(resultArray)
        }
    }

    // Convert the resultArray into an array of objects
    const finalArray = [];
    const keyArray = Object.keys(resultArray);
    console.log(keyArray)

    // Iterate over the length of values in the arrays
    for (let i = 0; i < dataArray.length; i++) {
        const obj = {};

        // Iterate over keys
        for (const key of keyArray) {
            // Get the value array for the current key
            const valuesArray = resultArray[key];

            // Get the value at index 'i' from the array
            const value = valuesArray[i][key];

            // Assign the value to the corresponding key in the object
            obj[key] = value;
        }

        finalArray.push(obj);
    }

    console.log("Resulting array of key-value pairs:", finalArray);
    const advertisementNo = $('#advertisementNoInput').val();
    const description = $('#description').val();
    const lastDateadvertisement = $('#inputLastDateOfDescription').val();
    const dateOfAdvertisement = $('#dateOfAdvertisement').val();
    const formDataNew = new FormData();

    formDataNew.append("ExcelFileData", JSON.stringify(finalArray));
    formDataNew.append("advertisementNo", advertisementNo);
    formDataNew.append("description", description);
    formDataNew.append("dateOfAdvertisement", dateOfAdvertisement);
    formDataNew.append("lastDateadvertisement", lastDateadvertisement);
    formDataNew.append("ExcelFile", FileBinary);

    var url = "https://localhost:7232/api/Candidate/ImportExcelCandidateData"

    url = url.replace(/[\u200B-\u200D\uFEFF]/g, '');
    $.ajax({
        url: url,
        type: 'POST',
        data: formDataNew,
        processData: false,
        contentType: false,
        //beforeSeend: function () {
        //    $('.page-loader').show();

        //},
        success: function (response) {
            console.log(response)
            /* $('.page-loader').hide();*/
        },
        error: function (xhr, status, error) {
            console.error('Failed to upload data:', error);
        }
    });


}


function ValidForpreviewExcelData() {
    let advertisementNoInput = $('#advertisementNoInput').val();
    let description = $('#description').val();
    let inputLastDateOfDescription = $('#inputLastDateOfDescription').val();
    let dateOfAdvertisement = $('#dateOfAdvertisement').val();

    if ($('#divPreview').is(':visible')) {
        if (advertisementNoInput == "") {
            $("#advertisementNoInput").focus();

            toastHr("Please Enter Advertisement No");
            return;
        }

        if (description == "") {
            $("#description").focus();

            toastHr("Please Enter Description");
            return;
        }
        if (dateOfAdvertisement == "") {
            $("#dateOfAdvertisement").focus();
            ;
            toastHr("Please Enter Date Of Advertisement");
            return;
        }
        if (inputLastDateOfDescription == "") {
            $("#inputLastDateOfDescription").focus();
            ;
            toastHr("Please Enter Last Date Of Description");
            return;
        }
    }

    return true
}
