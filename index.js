// const button = document.querySelector(".foo-button");
// mdc.ripple.MDCRipple.attachTo(button);

function addRow(e){
  console.log(e.parentNode.getElementsByClassName("mdc-text-field__input")[0].value)
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
      <button class="foo-button mdc-button"><i class="material-icons mdc-button__icon">notifications</i></button>
    </div>
  </td>

  `;
  
  var element = document.getElementById("table-body");
  element.appendChild(para);
}

function removeRow(e){
  console.log(e.parentNode.parentNode.parentNode)
  var elem = e.parentNode.parentNode.parentNode
  elem.parentNode.removeChild(elem);
}
