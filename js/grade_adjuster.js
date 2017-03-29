var currAverage = 0;
var currStdDeviation = 0;

function computeClassAverage() {
	var sum = 0;
	var numRows = 0;
	var table = $(student_table);

	table.find('tr').each(function(i, el) {
		var $tds = $(el).find('td'),
			gradeAsText = $tds.eq(3).text(),
			grade = +(gradeAsText);
		if (gradeAsText) {
			sum += grade;
			numRows++;
		}
	});
	currAverage = sum / numRows;
}

function computeStandardDeviation() {
	var sum = 0;
	var numRows = 0;
	var table = $(student_table);

	table.find('tr').each(function(i, el) {
		var $tds = $(el).find('td'),
			gradeAsText = $tds.eq(3).text(),
			grade = +(gradeAsText);
		if (gradeAsText) {
			sum += Math.pow((grade - currAverage), 2);
			numRows++;
		}
	});
	currStdDeviation = Math.sqrt(sum / numRows);
}

function getClassAverage() {
    return currAverage.toFixed(2);
}

function getClassStdDev() {
    return currStdDeviation.toFixed(2);
}

// Function to show range input
function updateField(val, textInput) {
	document.getElementById(textInput).innerHTML = val;
}

// Make the table visible for new average
// TODO: Complemte this to add rows according to the new student grades
// Take inspiration to the addRow function
function modifyAvg(){
    var modTable = document.getElementById("mod_table");
    modTable.style.visibility = "visible";
}

// convert grades to standardized form Z
function xToZ(x, Mean, StdDev) {
    var z = (x-Mean)/StdDev;
    return z;
}

// convert standardized z value to standardized grades
function zToX(z, dMean, dStdDev) {
    var m = parseFloat(dMean);
    var x = (z * dStdDev) + m;
    
    return x.toFixed(2);
}

// Function to update the average and stand
function updateMeanStd() {
    var mean = getClassAverage();
    var stdDev = getClassStdDev();

    if (!isNaN(mean)) {
	    document.getElementById('currentAvg').innerHTML = mean;
    } else {
    	document.getElementById('currentAvg').innerHTML = "";
    }

	if (!isNaN(stdDev)) {
	    document.getElementById('currentStd').innerHTML = stdDev;
	} else {
		document.getElementById('currentStd').innerHTML = "";
	}
}

function standardizeGrades() {
    var table = document.getElementById('student_table');
 
    var mean = getClassAverage();
    var stdDev = getClassStdDev();

    var desMean = document.getElementById('avgText').innerHTML;
    var desStd = document.getElementById('stdText').innerHTML;

    if (desMean == "") {
    	desMean = mean;
    }

    if (desStd == "") {
    	desStd = stdDev;
    }

    //iterate through rows
    for (var i = 0, row; row = table.rows[i]; i++) {
        var x = row.cells[3].innerHTML;
        var z = xToZ(x, mean, stdDev);
        var newX = zToX(z, desMean, desStd);
        if (!isNaN(newX) && newX >= 0) {
	        row.cells[4].innerHTML = newX;
	    }
	    else
	    {
	    	//To avoid negative grades
	    	row.cells[4].innerHTML = 0.00;
	    }
    }
}

function resetSliders() {
	document.getElementById('avgRange').value = 50;
	document.getElementById('avgText').innerHTML = "";

	document.getElementById('stdRange').value = 15;
	document.getElementById('stdText').innerHTML = "";
}

function refreshStats() {
	computeClassAverage();
    computeStandardDeviation();
    updateMeanStd();
}