
// NEED TO CHECK IF ACTUALLY CLEARS THE WHOLE COLUMN


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
function clearRow() {
	// Empty each row's cells content
	$('#secondrow [name="sid"]').html('');
	$('#secondrow [name="ln"]').html('');
	$('#secondrow [name="fn"]').html('');
	$('#secondrow [name="grade"]').html('');
}

//Slected sorting button
function OnSelected()
	{
		if (document.getElementById('select').value == "numeric"){
    		//Sort function
		}
        if (document.getElementById('select').value == "rnumeric"){
            //Sort function
        }
        if (document.getElementById('select').value == "alphabetic"){
            //Sort function
        }
        if (document.getElementById('select').value == "ralphabetic"){
            //Sort function
        }
	}
