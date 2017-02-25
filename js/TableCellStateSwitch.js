/*
 *Table entry textboxes turning into textfields on focus.
 *Textfields turning into textbox on unfocus.
 *
 *Analogy: A floder/file on your computer's desktop has its
 *		   name in a label. When double clicked, the file/folder
 *		   label turns into a text field and allows you to rename
 *		   said file/folder. When the user clicks elsewhere, the 
 *		   text filed turns back into a label, and displays
 *		   the new name of the file/folder.
 *
 *This script implements functionality similar to that mentioned
 *in the analogy. But instead of files/folders, this is dealing 
 *with table cells (td).
 */

var enterKeyCode = 13;
var tabKeyCode = 9;

var updateClickableCells = function() {  

	//called when a key is pressed 
	$('td').on('keydown', function(key) {
		//if the pressed key is the tab key
	    if (key.which == tabKeyCode) {
	        key.preventDefault();

	        $(this).closest('td').next('td').click();
	    }
	});

	//called when user clicks on a td
	$('td').on('click', function() {
	    var $this = $(this);
	    var cell = $this.attr('name');
	    var lastval = $this.text();
	    var isvalid = true;


        var checkvalidity = function(value) {
        	//ensure the number only fields can only accept numbers
			if (cell === "sid" || cell === "grade") {
				if (/^$|^\d+$/.test(value)) {
					isvalid = true;
				} else {
					isvalid = false;
				}
			}

			//ensure the letter only fields can only accept letters
			else if (cell === "ln" || cell === "fn") {
				if (/^$|^[a-zA-Z ÀàÉéÊêÈèÎîÔôÙùÛûÇç\-]+$/.test(value)) {
					isvalid = true;
				} else {
					isvalid = false;
				}
			}
        }

	    //td with tags other than input should not be editable
	    if($(this).find("*").length && !$(this).find("input").length) {
	    	return;
	    }

	    var $feature = $('<input>', 
	    	{
		        value: $this.text(),

		        type: 'text',

		        //called when user hits the tab key or clicks elsewhere on the screen
		        //when td loses focus
		        blur: function() {
		        	checkvalidity(this.value);

		        	if (isvalid) {
			        	$this.text(this.value);
			    	} else {
			    		$this.attr("class", "valid");
			    		$this.text(lastval);
			    	}

		        },

		        //called when the user releases a key on the keyboard
		        keyup: function(key) {
		        	//if the released key is the enter key
		        	//td should lose focus
					if (key.which === enterKeyCode) {
						$feature.blur();
					}

					checkvalidity(this.value);

					if (isvalid) {
						$this.attr("class", "valid");
					} else {
						$this.attr("class", "invalid");
					}
	        	}
	    	}
	    );

	    //adds feature to the clicked td, and brings the td into focus
	    $feature.appendTo($this.empty()).focus();
	}); 
 
}

$(document).ready(updateClickableCells);