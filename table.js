var count = 0

var table = document.createElement("table");

var head = document.createElement("th");
head.innerText = "USER DATA";
var tablediv = document.getElementById("tablediv");
document.body.appendChild(table).appendChild(head);
table.setAttribute("id",`tab2`);
table.setAttribute("border","1");

function addtotable(){

  var name = document.getElementById("nam").value;
  var number = document.getElementById("num").value;
  var mail = document.getElementById("mail").value;

  var x = document.getElementById("tab2").rows.length;


  var row = table.insertRow(x);
  row.setAttribute("id",`user${count}`);

  var cell0 = row.insertCell(0);
  var cell1 = row.insertCell(1);
  var cell2 = row.insertCell(2);
  var cell3 = row.insertCell(3);
  var cell4 = row.insertCell(4);
  cell0.innerHTML = name;
  cell1.innerText = number;
  cell2.innerText = mail;

  console.log(count)

  var del = document.createElement("button");
  del.innerHTML = "Delete";
  del.addEventListener('click', function () {
     deleteRow(row.id)
});

  cell3.appendChild(del);

  var edit = document.createElement("button");
  edit.innerHTML = "Edit";
  cell4.appendChild(edit);
  edit.addEventListener('click',function(){
    editRow(row.id);
  });
  count = count+1

}

function deleteRow(rowID)
{
    var row = document.getElementById(rowID);
    row.parentNode.removeChild(row);
}

function deleterow(ct){
  console.log(ct)
  document.getElementById("tab2").deleteRow(ct);

}

function editRow(rowID)
{
    var row = document.getElementById(rowID);
    console.log(row.value);
}
