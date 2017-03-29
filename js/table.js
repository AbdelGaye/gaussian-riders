var nbRows = 1;

// Clears the table
function clearTable() {
	clearColumn('sid');
	clearColumn('ln');
	clearColumn('fn');
	clearColumn('grade');
	clearColumn('adjustedGrade');
	clearCheckboxes();
}

// For student only
function createTable() {
	var table ="\
	            <table class=\"sortable maintable\">\
                <thead>\
                    <tr class=\"row\">\
                        <th scope=\"col\" class=\"maincol sorttable_nosort\">Student ID</th>\
                        <th scope=\"col\" class=\"maincol sorttable_nosort\">Last Name</th>\
                        <th scope=\"col\" class=\"maincol sorttable_nosort\">First Name</th>\
                        <th scope=\"col\" class=\"maincol sorttable_numeric\">Grade</th>\
                        <th scope=\"col\" class=\"maincol sorttable_numeric\">Adjusted Grade</th>\
                    </tr>\
                </thead>\
                <tbody id=\"student_table\">\
                </tbody>\
                <tfoot>\
                    <tr class=\"row lastRow\">\
                        <td colspan=\"5\"><a href=\"#\" class=\"defaultButton\" onclick=\"document.getElementById('csvFileInput').click(); return false;\">Import</a><input type=\"file\" id=\"csvFileInput\" onchange=\"createTable(false); handleFiles(this.files)\" accept=\".csv\" class=\"invisible\"></td>\
                    </tr>\
                </tfoot>\
            </table>"

    document.getElementsByClassName('tablecontainer')[0].innerHTML = table;

    sorttable.init(true);
}

function resetTable() {
	for (var i = 0; i < nbRows; i++) {
		deleteRow('row' + i);
	}
	nbRows = 0;
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
function addRow(sid, ln, fn, grade, adjustedGrade) {
	if (sid === undefined) sid = "";
	if (ln === undefined) ln = "";
	if (fn === undefined) fn = "";
	if (grade === undefined) grade = "";
	if (adjustedGrade === undefined) adjustedGrade = "";

	var studentView = document.title.includes("Student View");

	// Duplicate code galore!
	if (studentView) {
		// Add table row information
		// tr
		var tablerow = '<tr class="row" id="row' + nbRows + '">';
		// td
		var td_sid, td_ln, td_fn, td_grade, td_AdJGrade;

		if (sid != "N/A") {
			td_sid = '<td name="sid">' + sid + '</td>';
			td_ln = '<td name="ln">' + ln + '</td>';
			td_fn = '<td name="fn">' + fn + '</td>';
		} else {
			td_sid = '<td name="sid" class="anonymous"></td>';
			td_ln = '<td name="ln" class="anonymous"></td>';
			td_fn = '<td name="fn" class="anonymous"></td>';
		}

		td_grade = '<td name="grade">' + grade + '</td>';
	    td_AdjGrade = '<td name="adjustedGrade">' + adjustedGrade + '</td>';
		// closing tr
		var ending_tr = '</tr>';

		// Append table using jQuery
	    $(student_table).append(tablerow + td_sid + td_ln + td_fn + td_grade + td_AdjGrade + ending_tr);
	} else {
		// Add table row information
		// tr
		var tablerow = '<tr class="row" id="row' + nbRows + '">';
		// td
		var td_sid = '<td name="sid">' + sid + '</td>';
		var td_ln = '<td name="ln">' + ln + '</td>';
		var td_fn = '<td name="fn">' + fn + '</td>';
		var td_grade = '<td name="grade">' + grade + '</td>';
	    var td_AdjGrade = '<td name="adjustedGrade" class="uneditable">' + adjustedGrade + '</td>';

	    var td_clearrow = '<td class="clearCell" id="clrow' + nbRows + '"><a href="#"><img src="./imgs/clear.png" /></a></td>';
		var td_delrow = '<td class="clearCell" id="delrow' + nbRows + '"><a href="#"><img src="./imgs/minus.png" /></a></td>';
		var td_check_box = '<td name="checkbox" class="clearCell uneditable"><input type="checkbox" name="cbox' + nbRows +'" class="cb" /></td>'
		// closing tr
		var ending_tr = '</tr>';

		// Append table using jQuery
	    $(student_table).append(tablerow + td_sid + td_ln + td_fn + td_grade + td_AdjGrade + td_clearrow + td_delrow + td_check_box + ending_tr);

		//Deleting or clearing a specific row
		enableDelete(nbRows);

		updateClickableCells();
	}

	// Increment number of rows by 1
	nbRows++;
}

//Getting the ids of the symbols and take action according to them
function enableDelete(id_num)
{
	document.getElementById("clrow"+id_num.toString()).onclick = function() {clearRow("row"+id_num.toString()); refreshStats();};
	document.getElementById("delrow"+id_num.toString()).onclick = function() {deleteRow("row"+id_num.toString()); refreshStats();};
}

// Javascript function for deleting a specific row
function deleteRow(row)
{
	$('#'+row).remove();
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
    return selectedRows;
}