// const button = document.querySelector(".foo-button");
// mdc.ripple.MDCRipple.attachTo(button)

function addChore(e){

  let names = ``
  for(i = 0; i < 3; i++){

    if(document.getElementsByClassName('mdc-form-field')[i].childNodes[1].childNodes[1].checked == true){
      console.log(document.getElementsByClassName('mdc-form-field')[i].outerText)
      names += `` + document.getElementsByClassName('mdc-form-field')[i].outerText
    }

  }
  let name = document.getElementsByClassName('chore-name')[0].value
  let date = document.getElementsByClassName('chore-date')[0].value


  var para = document.createElement("h1");
  para.innerHTML = ``+name+`     `+date+`<br>`+names;

  var element = document.getElementById("calendar-card");
  element.appendChild(para);
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
  <td class="mdc-data-table__cell mdc-data-table__cell--numeric"><input value=2 type="number" min=0 max=99 step=1 style="text-align:left; width:35px"></td>
  <td class="mdc-data-table__cell mdc-data-table__cell--numeric"><input value =1 type="number" min=0 max=99 step=1 style="text-align:left; width:35px"></td>
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
  console.log(e.parentNode.parentNode.parentNode.getElementsByClassName("mdc-data-table__cell")[0])
  let item_name = e.parentNode.parentNode.parentNode.getElementsByClassName("mdc-data-table__cell")[0]
  alert("NOTIFIED YOUR BROS TO PICKUP SOME "+item_name);  	
  
}
function removeRow(e){
  console.log(e.parentNode.parentNode.parentNode)
  var elem = e.parentNode.parentNode.parentNode
  elem.parentNode.removeChild(elem);
}

// For Spinner Stuff

var ArrayRoommates = ["", "", ""];
var ArrayChores = ["", "", "", "", "", ""];
var RoommatesNo = 3;
var ChoresNo = 6;
var ChoresCounter=0;
var fakeCounter=0;

/* function colorChores() {
	//document.getElementById("").rows[1].style.color = "black";
	/*var x = document.getElementsById("chore-1");
	x.style.font-color = "red"; 

	var x = document.getElementsByClassName("chore-1")
	x[0].style.font-color = "white";
	x[0].style.color = "black";
	//Change Colors with Each Call
	if (ChoresCounter == 0) {
		ArrayChores[ChoresCounter].style.font-color = "white";
		ArrayChores[ChoresCounter].style.background-color = "black";
		ChoresCounter++;
	}
	else if (ChoresCounter < 6 & ChoresCounter != 0) {
		var PrevChoresCounter = ChoresCounter - 1;
		ArrayChores[PrevChoresCounter].style.font-color = "black";
		ArrayChores[PrevChoresCounter].style.background-color = "chore";
		ArrayChores[ChoresCounter].style.font-color = "white";
		ArrayChores[ChoresCounter].style.background-color = "black";
		ChoresCounter++;
	}
	else if (ChoresCounter == 6) {
		ChoresCounter = 0;
	}
	*/


function randomizeMe() {
	fakeSpin();
	fakeCounter++;
}

function fakeSpin(){
	var fakeName = "";
	var fakeTask = "";
	if (fakeCounter == 0)
		{ 
		fakeName = "Evan";
		fakeTask = "Wash Dishes";
		alert(fakeName + " will " + fakeTask);
	}
	else if (fakeCounter == 1) {
		fakeName = "John";
		fakeTask = "Clean Fridge";
		alert(fakeName + " will " + fakeTask);
	}
	else if (fakeCounter == 2) {
		fakeName = "Rey";
		fakeTask = "Sweep Floors";
		alert(fakeName + " will " + fakeTask);
	}
	else {
		alert("That's all the spins we have today, folks!");
	} 

}