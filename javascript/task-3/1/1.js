let count = 1;
let items = [];
let id_check, id_cancel, id_text, id_row;
function addRow(){
  let row = document.createElement("tr");
  row.id = count + "_row";
  id_row = row.id;
  let col1 = document.createElement("td");
  let col2 = document.createElement("td");
  let col3 = document.createElement("td")
  let check = document.createElement("input");
  check.setAttribute("type","checkbox");
  check.setAttribute("class","checkBoxes");
  check.setAttribute("onclick","addElement()");
  check.id = count + "_check";
  id_check = check.id;
  let text = document.createElement("input");
  text.setAttribute("type","text");
  text.setAttribute("class","value");
  text.id = count + "_text";
  id_text = text.id;

  let cancel = document.createElement("button");
  let t = document.createTextNode("cancel");
  cancel.appendChild(t);
  cancel.id = count + "_cancel";
  id_cancel = cancel.id;
  cancel.setAttribute("onclick", "cancelRow(this.id,count+'_row')");

  row.appendChild(col1);
  row.appendChild(col2);
  row.appendChild(col3);
  col1.appendChild(check);
  col2.appendChild(text);
  col3.appendChild(cancel);

  let table = document.getElementById('table');
  table.appendChild(row);

  count++;
}

function addElement(){
  let checked = document.getElementsByClassName('checkBoxes');
  let value = document.getElementsByClassName('value');
  for (var i in checked) {
    if(checked[i].checked){
      items[i] = value[i].value;
    }
    if(checked[i].checked == false){
      items.splice(i,1);
      items[i] = 0;
      }
    }
}

function dispArray(){
  var content = document.getElementById('show');
  content.innerHTML = "";
  for (var i = 0; i < items.length; i++) {
      content.insertAdjacentHTML('beforeend', items[i]+" | ");
  }
}
function numRows(){
  let count1 = 0;
  let count2 = 0;
  let checked = document.getElementsByClassName('checkBoxes');
  for (var i = 0; i < checked.length; i++) {
    if(checked[i].checked){
      count1++;
    }
    else{
      count2++;
    }
  }
  document.getElementById('show1').innerHTML = "Checked Rows : " + count1;
  document.getElementById('show2').innerHTML = "Unchecked Rows : " + count2;
}

function deleteRows(){
  for (var i = 0; i <= count; i++) {
    let rowIndex = document.getElementById(i + "_row");
    let checkedIndex = document.getElementById(i + "_check");
    if(checkedIndex && checkedIndex.checked){
      rowIndex.parentNode.removeChild(rowIndex);
      items.splice(i,1);
    }
  }
}

function cancelRow(e){
  let rowIndex = document.getElementById(e.split('_')[0] + '_row');
    rowIndex.parentNode.removeChild(rowIndex);
    items[e.split('_')[0]] = 0;
}
