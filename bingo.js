var rows = 5;
var cols = 5;
var squareSize = 70;

// get the container element
var gameBoardContainer = document.getElementById("gameboard");
var gameTimeContainer = document.getElementById("gameboard");
//make new container for *refreshed inpiuts?

// make the grid columns and rows
for (i = 0; i < cols; i++) {
	for (j = 0; j < rows; j++) {
		
		// create a new div HTML element for each grid square and make it the right size
		var square = document.createElement("div");
		var sNums = document.createElement("p4");

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

var gameBoard2 = [	[0,0,0,0,0],
					[0,0,0,0,0],
					[0,0,0,0,0],
					[0,0,0,0,0],
					[0,0,0,0,0],
					];

//gameBoardContainer.addEventListener("click", setNumber);

//function setNumber()
checker()
//gameBoardContainer.addEventListener("click", set_tiles, false);
function checker(){
	if (number < 25) {
		gameBoardContainer.addEventListener("click", set_tiles, false);
	}else if (number == 26){
		console.log("START");
		gameBoardContainer.removeEventListener("click", set_tiles);
		gameTimeContainer.addEventListener("click", set_tiles2, false);
		//winningCondition()
		//gameTimeContainer.addEventListener("click", placingTurn, false);
	}
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
			gameBoard[row][col] = number;
			number ++;

			//alert("box value = " + gameBoard[row][col]);  //checks if the rowcol value is 2
			
		// next round after all 25 boxes filled
		/*} else if (gameBoard[row][col] == 2 && number == 25) {
			e.target.style.background = 'red';
			// set this square's value to 3 to indicate square selected
			// incorporate /waiting and 
			gameBoard[row][col] = 3;
			
			// increment hitCount each time a ship is hit
			// if player clicks a square that's been previously hit, let them know
		}*/ 
		}//else if (gameBoard[row][col] > 1 && gameBoard[row][col] < 3 && number < 25) {
		//	alert("You've already filled in this box!");
		//}
	}		
	if (number == 26){
		diagonal()
		diagonal2()
		horizontal()
		vertical2()
	}
	checker()
    //e.stopPropagation();
}

///////////////////////////////////////////////////////////////////////////
function set_tiles2(e) {
    // if item clicked (e.target) is not the parent element on which the event listener was set (e.currentTarget)
	if (e.target !== e.currentTarget) {
        // extract row and column # from the HTML element's id
		var row = e.target.id.substring(1,2);
		var col = e.target.id.substring(2,3);
		//var number = 0;
        //alert("Clicked on row " + row + ", col " + col);
		e.target.style.background = 'blue';
		gameBoard2[row][col] = gameBoard[row][col];
		// if player clicks a square with no value, change the color and change square's value
	}

///////////Each time you click it add into a list<<GameBoard2/////////
	var condList = [];
	var finalList = [];
	//diagonal1
	for (var i = 0; i < gameBoard2.length; i ++){
		condList.push(gameBoard2[i][i]);
	}
	finalList.push(condList);
	//diagonal2
	condList=[];
	var c = 4;
	var d = 0;
	while (c != -1) {
		condList.push(gameBoard2[d][c]);
		c = c - 1;
		d += 1;
	}
	finalList.push(condList);
	//horizaontal
	for (var i = 0; i < gameBoard2.length; i++){
		finalList.push(gameBoard2[i])
	}
	//vertical
	var c = 0;
	while (c < 5 ) {
		condList=[];
		for (var i = 0; i < gameBoard2.length; i++){
			condList.push(gameBoard2[i][c]);
		}
		c+=1;
		finalList.push(condList);
	}
	console.log(finalList);
	winningCondition(finalList)
}
/////////I'm not using this code///////
/*
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
*/

//add second event handler [sequential]
// to run placingTurn function
///////////////////TO GET POSSIBLE WINNING OPTION////////////////////////////////////////////////////
var winningList=[];

function horizontal(){
	for (var i = 0; i < gameBoard.length; i++){
		if(isArrayInArray(winningList,gameBoard[i]) == false){
			winningList.push(gameBoard[i])
		}
	}
}

function vertical2(){
	var c = 0;
	while (c < 5 ) {
		var singleList=[];
		for (var i = 0; i < gameBoard.length; i++){
			singleList.push(gameBoard[i][c]);
		}
		if(isArrayInArray(winningList,singleList) == false){
			winningList.push(singleList);
		}
		c+=1;
	}
	console.log(winningList);
}

function diagonal(){
	var singleList=[];
	for (var i = 0; i < gameBoard.length; i ++){
		singleList.push(gameBoard[i][i]);
	}
	if(isArrayInArray(winningList,singleList) == false){
		winningList.push(singleList);
	}
}

function diagonal2(){
	var singleList=[];
	var c = 4;
	var d = 0;
	while (c != -1) {
		singleList.push(gameBoard[d][c]);
		c = c - 1;
		d += 1;
	}
	if(isArrayInArray(winningList,singleList) == false){
		winningList.push(singleList);
	}
}

function winningCondition(finalList){
	for (var i = 0; i<finalList.length; i++){
		for (var j = 0; j<winningList.length; j++){
			if (winningList[j].every((value, index) => value === finalList[i][index]) == true){
				winnigList = winningList.splice(j,1);
				BINGO()
			}
		
		}
	}
}
//list1.every((value, index) => value === list2[index])
//////////////////////////////////////////////////////////////////////////////////
var b= [];
var bingo =["B","I","N","G","O"];

function BINGO(){
	var a = bingo.shift();
	b.push(a);
	document.getElementById("test").innerHTML=b;
	console.log("tsktsk");
	if (bingo.length === 0){
		alert("YOU WON");
	}
}

//from https://stackoverflow.com/questions/41661287/how-to-check-if-an-array-contains-another-array
function isArrayInArray(arr, item){
	var item_as_string = JSON.stringify(item);
  
	var contains = arr.some(function(ele){
	  return JSON.stringify(ele) === item_as_string;
	});
	return contains;
  }


/*
var isEqual = function (value, other) {

	// Get the value type
	var type = Object.prototype.toString.call(value);

	// If the two objects are not the same type, return false
	if (type !== Object.prototype.toString.call(other)) return false;

	// If items are not an object or array, return false
	if (['[object Array]', '[object Object]'].indexOf(type) < 0) return false;

	// Compare the length of the length of the two items
	var valueLen = type === '[object Array]' ? value.length : Object.keys(value).length;
	var otherLen = type === '[object Array]' ? other.length : Object.keys(other).length;
	if (valueLen !== otherLen) return false;

	// Compare two items
	var compare = function (item1, item2) {

		// Get the object type
		var itemType = Object.prototype.toString.call(item1);

		// If an object or array, compare recursively
		if (['[object Array]', '[object Object]'].indexOf(itemType) >= 0) {
			if (!isEqual(item1, item2)) return false;
		}

		// Otherwise, do a simple comparison
		else {

			// If the two items are not the same type, return false
			if (itemType !== Object.prototype.toString.call(item2)) return false;

			// Else if it's a function, convert to a string and compare
			// Otherwise, just compare
			if (itemType === '[object Function]') {
				if (item1.toString() !== item2.toString()) return false;
			} else {
				if (item1 !== item2) return false;
			}

		}
	};

	// Compare properties
	if (type === '[object Array]') {
		for (var i = 0; i < valueLen; i++) {
			if (compare(value[i], other[i]) === false) return false;
		}
	} else {
		for (var key in value) {
			if (value.hasOwnProperty(key)) {
				if (compare(value[key], other[key]) === false) return false;
			}
		}
	}

	// If nothing failed, return true
	return true;

};
*/