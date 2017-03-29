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

//Parse all columns including adjusted grade from table
function parseAllTableData() {
    var table = document.getElementById('student_table');
    var parsedTable = "";
    for (var i = 0, row; row = table.rows[i]; i++) {
        parsedTable += row.cells[0].innerHTML + "," + row.cells[1].innerHTML + "," + row.cells[2].innerHTML + "," + row.cells[3].innerHTML + "," + row.cells[4].innerHTML +  "\r\n";
    }
    return parsedTable;
}

// Parse data from csv and return a 2d array
function parseCSV(data) {
    var table = [];
    var allRows = data.split(/\r?\n|\r/);
    for (var i = 0, row; row = allRows[i]; i++) {
        // Store each student row as an array in the table array
        table.push(row.split(","));
    }
    return table;
}

// Export input Table to csv file
function exportTableToCSV(tableData,filename) {
    var blob = new Blob([tableData], { type: 'text/csv;charset=utf-8;' });
    if (navigator.msSaveBlob) { // IE 10+
        navigator.msSaveBlob(blob, filename);
    } else {
        var link = document.createElement("a");
        if (link.download !== undefined) { // feature detection
            // Browsers that support HTML5 download attribute
            var url = URL.createObjectURL(blob);
            link.setAttribute("href", url);
            link.setAttribute("download", filename + ".csv" );
            link.style.visibility = 'hidden';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    }
}

// Export ids, names, grades to csv file
function exportToCSV() {
   
    var tableData = parseTableData();
    exportTableToCSV(tableData,"SimpleExport");
}

// Export ids, names, grades and adjusted grades to csv file
function exportAllToCSV() {
    
    var tableData = parseAllTableData();
    exportTableToCSV(tableData, "AllExport");
}

//Parse selected rows and all columns including adjusted grade from table
//will save file name as Last Name of student 
function parseSelectedRows(selectedIndex) {
    var table = document.getElementById('student_table');
    var parsedTable = "";
    for (var i = 0, row; row = table.rows[i]; i++) {
        if (i == selectedIndex) {
            parsedTable += row.cells[0].innerHTML + "," + row.cells[1].innerHTML + "," + row.cells[2].innerHTML + "," + row.cells[3].innerHTML + "," + row.cells[4].innerHTML + "\r\n";
        }
        else {
            parsedTable += "N/A" + "," + "N/A" + "," + "N/A" + "," + row.cells[3].innerHTML + "," + row.cells[4].innerHTML + "\r\n";
        }
    }
    return parsedTable;
}

function exportSelectedToCSV() {
    var selectedRows = getSelectedRows().toString().split(",");
    for (var i = 0, len = selectedRows.length; i < len; i++) {
        var tableData = parseSelectedRows(parseInt(selectedRows[i]));
        var tempTab = parseCSV(tableData);
        var fileName = tempTab[parseInt(selectedRows[i])][1];
        exportTableToCSV(tableData, fileName.toString());
    }
}

//Import functionality
function handleFiles(files) {
    // Check for the various File API support.
    if (window.FileReader) {
        // FileReader are supported.
        getAsText(files[0]);
    } else {
        alert('FileReader not supported in this browser.');
    }
}

function getAsText(fileToRead) {
    var reader = new FileReader();
    // Read file into memory as UTF-8      
    reader.readAsText(fileToRead);
    // Handle errors load
    reader.onload = loadHandler;
    reader.onerror = errorHandler;
}

function loadHandler(event) {
    var csv = event.target.result;
    var tableArray = parseCSV(csv);
    populateTable(tableArray);
}

function errorHandler(evt) {
    if (evt.target.error.name == "NotReadableError") {
        alert("Cannot read file!");
    }
}
//end of import

function populateTable(data) {
    resetTable();
    data.forEach(function(row) {
        addRow(row[0], row[1], row[2], row[3], row[4]);
    });

    if (!document.title.includes("Student View")) {
        refreshStats();
        resetSliders();
    }
}