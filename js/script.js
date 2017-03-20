var nbRows = 1;
var currAverage = 0;
var currStdDeviation = 0;

// Resets the table
function resetTable() {
	clearColumn('sid');
	clearColumn('ln');
	clearColumn('fn');
	clearColumn('grade');
	clearColumn('adjustedGrade');
	clearCheckboxes();
}
// Clear column depending on type of column to clear
function clearColumn(col) {
	// Make columns non-sortable while clearing them
	$('[scope="col"]').attr('class', 'sorttable_nosort maincol');

	// Clear Student ID's column
	if (col === 'sid') {
		// jQuery selector that iterates through each td with name attribute = "sid" and empties td
		$('[name="sid"]').each(function() {
			$(this).html('');
		});
	}
	// Clear Last Name column
	else if (col === 'ln') {
		// jQuery selector that iterates through each td with name attribute = "ln" and empties td
		$('[name="ln"]').each(function() {
			$(this).html('');
		});
	}
	// Clear First Name column
	else if (col === 'fn') {
		// jQuery selector that iterates through each td with name attribute = "fn" and empties td
		$('[name="fn"]').each(function() {
			$(this).html('');
		});
	}
	// Clear Grade column
	else if (col === 'grade') {
		// jQuery selector that iterates through each td with name attribute = "grade" and empties td
		$('[name="grade"]').each(function() {
			$(this).html('');
		});
    }

    // Clear Adjusted Grade column
    else if (col === 'adjustedGrade') {
        // jQuery selector that iterates through each td with name attribute = "grade" and empties td
        $('[name="adjustedGrade"]').each(function() {
            $(this).html('');
        });
    }
	else {
		alert("Invalid Column Type");
	}
}

// Clear all checkboxes
function clearCheckboxes() {
	var checkboxes = document.getElementsByClassName("cb");

	for (var i = 0; i < checkboxes.length; i++) {
		checkboxes[i].checked = false;
	}
}

// !!! need to figure out a way to clear a specific row after dynamically adding rows
function clearRow(id) {
	// Empty each row's cells content
	$('#' + id + ' [name="sid"]').html('');
	$('#' + id + ' [name="ln"]').html('');
	$('#' + id + ' [name="fn"]').html('');
	$('#' + id + ' [name="grade"]').html('');
    $('#' + id + ' [name="adjustedGrade"]').html('');
}

// jQuery Script to add rows dynamically
function addRow() {
	// Add table row information
	// tr
	var tablerow = '<tr class="row" id="row' + nbRows + '">';
	// td
	var td_sid = '<td name="sid"></td>';
	var td_ln = '<td name="ln"></td>';
	var td_fn = '<td name="fn"></td>';
	var td_grade = '<td name="grade"></td>';
    var td_AdjGrade = '<td name="adjustedGrade" class="uneditable"></td>';

    var td_clearrow = '<td class="clearCell" id="clrow' + nbRows + '"><a href="#"><img src="./imgs/clear.png" /></a></td>';
	var td_delrow = '<td class="clearCell" id="delrow' + nbRows + '"><a href="#"><img src="./imgs/minus.png" /></a></td>';
	var td_check_box = '<td name="checkbox" class="clearCell uneditable"><input type="checkbox" name="cbox' + nbRows +'" class="cb" /></td>'
	// closing tr
	var ending_tr = '</tr>';

	// Append table using jQuery
    $(student_table).append(tablerow + td_sid + td_ln + td_fn + td_grade + td_AdjGrade + td_clearrow + td_delrow + td_check_box + ending_tr);

	//$(student_table).append('<tr class="row" id="row7"><td name="sid"></td><td name="ln"></td><td name="fn"></td><td name="grade"></td><td class="clearCell"><a href="#"><img src="./imgs/clear.png" onclick="clearRow(\'row7\')"/></a></td></tr>');

	//Deleting or clearing a specific row
	enableDelete(nbRows);

	// Increment number of rows by 1
	nbRows++;
	updateClickableCells();
}

//Getting the ids of the symbols and take action according to them
function enableDelete(id_num)
{
	document.getElementById("clrow"+id_num.toString()).onclick = function() {clearRow("row"+id_num.toString()); computeClassAverage(); computeStandardDeviation(); updateMeanStd();};
	document.getElementById("delrow"+id_num.toString()).onclick = function() {deleteRow("row"+id_num.toString()); computeClassAverage(); computeStandardDeviation(); updateMeanStd();};
}

// Javascript function for deleting a specific row
function deleteRow(row)
{
	$('#'+row).remove();
}

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

function getSelectedRows() {
	// JS array that contains the selected row numbers
	var selectedRows = [];
	// DOM get all input elements
	var checkboxes = document.getElementsByTagName("input"); 

	for (var i=0; i<checkboxes.length; i++) {
		var row = checkboxes[i];
		// Check if the input's checkbox is checked
		if (row.checked == true) {
			selectedRows.push(parseRowNumber(row.name));
		}
	}
} 

function parseRowNumber(row) {
	// parse int function and use regex to replace all characters except numbers, to empty spaces
	return parseInt(row.replace(/[^0-9\.]/g, ''));
}

// Parse data from table
function parseTableData() {
    var table = document.getElementById('student_table');
    var parsedTable = "";
    for (var i = 0, row; row = table.rows[i]; i++) {
        parsedTable += row.cells[0].innerHTML + "," + row.cells[1].innerHTML + "," + row.cells[2].innerHTML + "," + row.cells[3].innerHTML + "\r\n";
    }
    return parsedTable;
}

// Parse data from csv and return a 2d array
function parseCSV() {
    var table = [];
    var allRows = data.split(/\r?\n|\r/);
    for (var i = 0, row; row = allRows[i]; i++) {
        // Store each student row as an array in the table array
        table.push(row.split(","));
    }
    return table;
}
