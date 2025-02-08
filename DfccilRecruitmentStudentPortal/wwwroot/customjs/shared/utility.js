function findGender(relation) {

	let gender = "";

	switch (relation) {
		case 'Husband':
		case 'Father':
		case 'Brother':
		case 'Son':
			gender = "Male";
			break;
		case 'Spouse':
		case 'Mother':
		case 'Sister':
		case 'Daughter':
			gender = "Female";
			break;
		default:
			gender = "Unknown";
			break;
	}

	return gender;
}
function getTotalYearFromDateOfBirth(dob) {
	var start = new Date(dob);
	var end = new Date();
	var diff = new Date(end - start) / (1000 * 60 * 60 * 24 * 365.25);
	var age = Math.round(diff);
	return age;
}

function formatDate(date = new Date()) {
	const year = date.toLocaleString('default', { year: 'numeric' });
	const month = date.toLocaleString('default', {
		month: '2-digit',
	});
	const day = date.toLocaleString('default', { day: '2-digit' });

	return [year, month, day].join('-');
}
function formatDate_yyyy_mm_dd(date = new Date()) {
	const year = date.toLocaleString('default', { year: 'numeric' });
	const month = date.toLocaleString('default', {
		month: '2-digit',
	});
	const day = date.toLocaleString('default', { day: '2-digit' });

	return [year, month, day].join('-');
}
function formatDateDDMMYYYtoMMDDYYY(strDate) {
	
	var arrDt = strDate.split(/[./-]+/)
	var strDt = arrDt[1] + "-" + arrDt[0] + "-" + arrDt[2];
	return strDt;
}
function formatDate_mm_dd_yyyy(date = new Date()) {
	var year = date.getFullYear();

	var month = (1 + date.getMonth()).toString();
	month = month.length > 1 ? month : '0' + month;

	var day = date.getDate().toString();
	day = day.length > 1 ? day : '0' + day;

	return month + '/' + day + '/' + year;
}
function formatDate_dd_mm_yyyy(date = new Date()) {
	var year = date.getFullYear();

	var month = (1 + date.getMonth()).toString();
	month = month.length > 1 ? month : '0' + month;

	var day = date.getDate().toString();
	day = day.length > 1 ? day : '0' + day;

	return day + '/' + month + '/' + year;
}
function formatDate_dd_mm_yyyy_New_Formate(dateString) {
 
	
	var dateObj = new Date(dateString);
	 

	var day = (dateObj.getDate() ).toString().padStart(2, '0');

	if (day == 32) {
		day -1
	}
	var month = (dateObj.getMonth() + 1).toString().padStart(2, '0');  


	var year = dateObj.getFullYear();

	 




	var formattedDate = day + '-' + month + '-' + year;



 


	return formattedDate;
}
function getAmountAfterCheckingNaNAndUndefind(data) {
	var amt = parseInt(data);
	if (isNaN(amt) || amt == undefined)
		amt = 0;
	return amt;
}
function getTimeDiffrence(startDate, startTime, endDate, endTime) {
    var startDuration = Date.parse(startDate) + Date.parse(new Date('1970-01-01T' + startTime + 'Z'));
    var endDuration = Date.parse(endDate) + Date.parse(new Date('1970-01-01T' + endTime + 'Z'));
    var timeDiffrence = endDuration - startDuration;
    var minutes = 1000 * 60;
    var hour = minutes * 60;
    var day = hour * 24;
    var totalTimeInMinutes = timeDiffrence / minutes;
    var TotalDaysInTime = parseInt(totalTimeInMinutes / (60 * 24));
    var RemainingMinutesAfterDaysCalculation = totalTimeInMinutes % (60 * 24);
    var TotalHoursInTime = parseInt(RemainingMinutesAfterDaysCalculation / 60);
    var totalMinutesAfterHoursCalculations = RemainingMinutesAfterDaysCalculation % 60;
    var timeDiffrence = { Days: TotalDaysInTime, Hours: TotalHoursInTime, Minutes: totalMinutesAfterHoursCalculations };
    return timeDiffrence;
}

function IsValidData(v) {
    
    if (v == undefined || v == null || v == '')
        return false;
    else
        return true;
}
