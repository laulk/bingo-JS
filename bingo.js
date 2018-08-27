var rows = 5;
var cols = 5;
var squareSize = 70;

// get the container element
var gameBoardContainer = document.getElementById("gameboard");
var gameTimeContainter = document.getElementById("gameboard");
//make new container for *refreshed inpiuts?

// make the grid columns and rows
for (i = 0; i < cols; i++) {
	for (j = 0; j < rows; j++) {
		
		// create a new div HTML element for each grid square and make it the right size
		var square = document.createElement("div");
		var sNums = document.createElement("p3");

		square.appendChild(sNums);
		gameBoardContainer.appendChild(square);

    // give each div element a unique id based on its row and column, like "s00"
    	sNums.innerHTML = "NULL";
    	
		square.id = 's' + j + i;			
		
		// set each grid square's coordinates: multiples of the current row or column number
		var topPosition = j * squareSize;
		var leftPosition = i * squareSize;			
		
		// use CSS absolute positioning to place each grid square on the page
		square.style.top = topPosition + 'px';
		square.style.left = leftPosition + 'px';						
	}
}
var gridFill = 0;


var number = 1;

var gameBoard = [	[0,0,0,0,0],
					[0,0,0,0,0],
					[0,0,0,0,0],
					[0,0,0,0,0],
					[0,0,0,0,0],
					];

//gameBoardContainer.addEventListener("click", setNumber);

//function setNumber()

//gameBoardContainer.addEventListener("click", set_tiles, false);

if (number < 25) {
	gameBoardContainer.addEventListener("click", set_tiles, false);

}else if (number == 25){
	gameTimeContainer.addEventListener("click", placingTurn, false);
}

// initial code via http://www.kirupa.com/html5/handling_events_for_many_elements.htm:
function set_tiles(e) {
    // if item clicked (e.target) is not the parent element on which the event listener was set (e.currentTarget)
	if (e.target !== e.currentTarget) {
        // extract row and column # from the HTML element's id
		var row = e.target.id.substring(1,2);
		var col = e.target.id.substring(2,3);
		//var number = 0;
        //alert("Clicked on row " + row + ", col " + col);
				
		// if player clicks a square with no value, change the color and change square's value
		if (gameBoard[row][col] == 0) {
			e.target.style.background = '#bbb';
			e.target.innerHTML = number;
			// set this square's value to 2 to indicate that the box is filled.
			gameBoard[row][col] = 2;
			number ++;
			alert("box value = " + gameBoard[row][col]);  //checks if the rowcol value is 2
			
		// next round after all 25 boxes filled
		/*} else if (gameBoard[row][col] == 2 && number == 25) {
			e.target.style.background = 'red';
			// set this square's value to 3 to indicate square selected
			// incorporate /waiting and 
			gameBoard[row][col] = 3;
			
			// increment hitCount each time a ship is hit
			// if player clicks a square that's been previously hit, let them know
		}*/ 
		}else if (gameBoard[row][col] > 1 && gameBoard[row][col] < 3 && number < 25) {
			alert("You've already filled in this box!");
		}
	}		
    
    //e.stopPropagation();
}

function placingTurn(g) {
	if (g.target !== g.currentTarget) {
		var row2 = g.target.id.substring(1,2);
		var col2 = g.target.id.substring(2,3);

		if(gameBoard[row2][col2] == 2) {
			g.target.style.background = 'blue';
			gameBoard[row2][col2] = 3
		} else if (gameBoard[row2][col2] == 3){
			alert("this number has already been chosen");

		}

	}
	//e.stopPropagation();

}


//add second event handler [sequential]
// to run placingTurn function






