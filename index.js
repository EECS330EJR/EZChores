// const button = document.querySelector(".foo-button");
// mdc.ripple.MDCRipple.attachTo(button)

function addChore(e){
	document.getElementById("calendar1").style.display = "none";
	document.getElementById("calendar2").style.display = "block";
}


function addRow(e){
  if (e.parentNode.getElementsByClassName("mdc-text-field__input")[0].value.length == 0){
    alert("FILL IN THE NAME BRO!!!!11!");  	
    return false; 
  }
  var para = document.createElement("TR");
  para.setAttribute("class", "mdc-data-table__row");
  item_name = e.parentNode.getElementsByClassName("mdc-text-field__input")[0].value

  para.innerHTML = `
  <td class="mdc-data-table__cell">
    <div class="mdc-text-field mdc-text-field--no-label">
      <input type="text" class="mdc-text-field__input" placeholder="New Item" aria-label="Label" value="`+item_name+`">
      <div class="mdc-line-ripple"></div>
    </div>
  </td>
  <td class="mdc-data-table__cell mdc-data-table__cell--numeric"><input value=0 type="number" min=0 max=99 step=1 style="text-align:left; width:35px"></td>
  <td class="mdc-data-table__cell mdc-data-table__cell--numeric"><input value =0 type="number" min=0 max=99 step=1 style="text-align:left; width:35px"></td>
  <td class="mdc-data-table__cell">
    <div class="actions">
      <button id="myBtn" class="foo-button mdc-button"><i class="material-icons mdc-button__icon">edit</i></button>
      <button onclick="removeRow(this)" class="foo-button mdc-button"><i class="material-icons mdc-button__icon">delete</i></button>
      <button onclick="sendNotif(this)" class="foo-button mdc-button"><i class="material-icons mdc-button__icon">notifications</i></button>
    </div>
  </td>

  `;
  
  var element = document.getElementById("table-body");
  element.appendChild(para);
}
function sendNotif(e){
  console.log(e.parentNode.parentNode.parentNode.getElementsByClassName("mdc-data-table__cell"))
  let item_name = e.parentNode.parentNode.parentNode.getElementsByClassName("mdc-data-table__cell")[0]
  alert("NOTIFIED YOUR BROS TO PICKUP SOME "+item_name);  	
  
}
function removeRow(e){
  console.log(e.parentNode.parentNode.parentNode)
  var elem = e.parentNode.parentNode.parentNode
  elem.parentNode.removeChild(elem);
}

// For Spinner Stuff

var RoommatesArray = ["", "", ""];
var ChoresArray = ["", "", "", "", "", ""];
var RoommatesNo = 3;
var ChoresNo = 6;
var roommateCounter=0;
var realCounter=0;

function randomizeMe() {
	fillRoommatesArray();
	fillChoresArray();
	roommatePicker();
	colorSpin();
	setTimeout(assignTask, 2700);
}

function fillRoommatesArray() {
	for (i=0; i<RoommatesNo; i++) {
		RoommatesArray[i]="roommate-" + i.toString();
	}
}

function fillChoresArray() {
	for (i=0; i<ChoresNo; i++) {
		ChoresArray[i]="chore-" + i.toString();
	}
}

function roommatePicker() {
	//Sets Prev Counter
	var prevroommateCounter = roommateCounter - 1;
	if (prevroommateCounter == -1) {
		prevroommateCounter = 2;
	}

	//Sets Color Elem
	var currRoommate = document.getElementById(RoommatesArray[roommateCounter]);
	var prevRoommate = document.getElementById(RoommatesArray[prevroommateCounter]);

	//Change Color
	currRoommate.style.color = "white";
	currRoommate.style.backgroundColor = "#6200ee";
	prevRoommate.style.color = "black";
	prevRoommate.style.backgroundColor = "white";


	//Resets the counter
	roommateCounter++;
	if (roommateCounter == RoommatesNo) {
		roommateCounter = 0;
	}
}

//Changes Color
function colorChange() {
	//Sets Prev Counter
	var prevCounter = realCounter - 1;
	if (prevCounter == -1) {
		prevCounter = 5;
	}

	//Set Color Elem
	var currChore = document.getElementById(ChoresArray[realCounter]);
	var prevChore = document.getElementById(ChoresArray[prevCounter]);

	//Change Colors
	currChore.style.color = "white";
	currChore.style.backgroundColor = "#6200ee";
	prevChore.style.color = "black";
	prevChore.style.backgroundColor = "white";

	//Resets the Counter
	realCounter++;
	if (realCounter == ChoresNo) {
		realCounter = 0;
	}
}

//"Spins" the Color
function colorSpin() {
	//Go!
	var colorTimer = setInterval(colorChange, 50);
	//Go faster after 1 sec!
	setTimeout(colorSpin1, 1000);
	//Stop after 2.25 sec!
	setTimeout(function() {
		clearInterval(colorTimer);
		//clearInterval(colorTimer1);
		//clearInterval(colorTimer2);
	} , 2650);
}

//Function for the second 'speed' for the spinner
function colorSpin1() {
	var colorTimer1 = setInterval(colorChange, 20);
	setTimeout(function(){clearInterval(colorTimer1);}, 1000);
}

//Function to 'assign' the task
function assignTask() {
	//Setting the 'correct' ID for roommates since the counters are currently 1 plus the index highlight
	var assignChoreCounter = realCounter - 1;
	var assignRoommateCounter = roommateCounter -1;
	if (assignChoreCounter < 0) {
		assignChoreCounter = ChoresNo - 1;
	}
	if (assignRoommateCounter < 0) {
		assignRoommateCounter = RoommatesNo - 1;
	}

	//Assigning Counter to ID
	var assignRoommateID = RoommatesArray[assignRoommateCounter];
	var assignChoreID = ChoresArray[assignChoreCounter];

	//Assigning ID to Strings
	var assignRoommateName = document.getElementById(assignRoommateID).innerHTML;
	var assignChoreName = document.getElementById(assignChoreID).innerHTML;

	//Notification!
	alert(assignRoommateName + "will" + assignChoreName);

}
