function parseData()
{
	var table = $(student_table);
	var btw0_9 = 0; btw10_19 = 0; btw20_29 = 0; btw30_39 = 0; btw40_49 = 0; btw50_59 = 0; btw60_69 = 0; btw70_79 = 0; btw80_89 = 0; btw90_100 = 0;

	//For each adjusted grade value in the table
	table.find('tr').each(function(i, el) 
	{
		var $tds = $(el).find('td'),
		gradeAsText = $tds.eq(4).text(),
		grade = +(gradeAsText);
	
		//Converting the table value to a number
		cat_grade = Number(grade);

		//Allowing categorization of grades
		cat_grade = parseInt((cat_grade/10), 10);
		switch (cat_grade)
		{
		    case 0:
		        btw0_9++;
		        break;
		    case 1:
		        btw10_19++;
		        break;
		    case 2:
		        btw20_29++;
		        break;
		    case 3:
		        btw30_39++;
		        break;
		    case 4:
		        btw40_49++;
		        break;
		    case 5:
		        btw50_59++;
		        break;
		    case 6:
		        btw60_69++;
		        break;
		    case 7:
		        btw70_79++;
		        break;
		    case 8:
		        btw80_89++;
		        break;
		    //More than 90
		    default: btw90_100++;
		}
	});

	var data = [{
		x: ['0-9', '10-19', '20-29', '30-39', '40-49',
		'50-59', '60-69', '70-79', '80-89', '90+'],
		y: [btw0_9, btw10_19, btw20_29, btw30_39, btw40_49, 
		btw50_59, btw60_69, btw70_79, btw80_89, btw90_100],
	  	type: 'bar'
	}];

	var layout = {
	 title: 'Grade Distribution',
	  height: 500,
	  xaxis: {
	    title: 'Grade',
	    showgrid: false,
	    zeroline: false
	  },
	  yaxis: {
	    title: 'Number of Students',
	    showline: false
	  }
	};

	Plotly.newPlot(graphDiv, data, layout, {showLink: false});
}