var nbRows = 7;



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
	else {
		alert("Invalid Column Type");
	}
}

// !!! need to figure out a way to clear a specific row after dynamically adding rows
function clearRow(id) {
	// Empty each row's cells content
	$('#' + id + ' [name="sid"]').html('');
	$('#' + id + ' [name="ln"]').html('');
	$('#' + id + ' [name="fn"]').html('');
	$('#' + id + ' [name="grade"]').html('');
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
	var td_clearrow = '<td class="clearCell"><a href="#"><img src="./imgs/clear.png" onclick="clearRow("row' + nbRows + '")"/></a></td>';
	// closing tr
	var ending_tr = '</tr>';

	// Append table using jQuery
	$(student_table).append(tablerow + td_sid + td_ln + td_fn + td_grade + td_clearrow + ending_tr);

	//$(student_table).append('<tr class="row" id="row7"><td name="sid"></td><td name="ln"></td><td name="fn"></td><td name="grade"></td><td class="clearCell"><a href="#"><img src="./imgs/clear.png" onclick="clearRow(\'row7\')"/></a></td></tr>');

	// Increment number of rows by 1
	nbRows++;
}

