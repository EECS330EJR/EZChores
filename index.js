// const button = document.querySelector(".foo-button");
// mdc.ripple.MDCRipple.attachTo(button);
import { MDCList } from '@material/list';

import { MDCTextField } from '@material/textfield';


const list = new MDCList(document.querySelector('.mdc-list'));
const list = new MDCList(document.getElementById('my-list'));
list.singleSelection = true;


const textField = new MDCTextField(document.querySelector('.mdc-text-field'));


function addRow(e){
  if (e.parentNode.getElementsByClassName("mdc-text-field__input")[0].value.length == 0){
    alert("FILL IN THE NAME BRO!!!!11!");  	
    return false; 
  }
  var para = document.createElement("TR");
  para.setAttribute("class", "mdc-data-table__row");
  item_name = e.parentNode.getElementsByClassName("mdc-text-field__input")[0].value

  para.innerHTML = `
  <td class="mdc-data-table__cell">`+item_name+`</td>
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
  let item_name = e.parentNode.parentNode.parentNode.getElementsByClassName("mdc-data-table__cell")[0].innerHTML
  alert("NOTIFIED YOUR BROS TO PICKUP SOME "+item_name);  	
  
}
function removeRow(e){
  console.log(e.parentNode.parentNode.parentNode)
  var elem = e.parentNode.parentNode.parentNode
  elem.parentNode.removeChild(elem);
}
