var count = 0

var table = document.createElement("table");

var head = document.createElement("th");
head.innerText = "USER DATA";
var tablediv = document.getElementById("tablediv");
document.body.appendChild(table).appendChild(head);
table.setAttribute("id",`tab2`);
table.setAttribute("border","2");

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
  cell0.setAttribute("style","font-family:cambria;");
  cell1.setAttribute("style","font-family:cambria;");
  cell2.setAttribute("style","font-family:cambria;");


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

function editRow(rowID,ct)
{
    var row = document.getElementById(rowID);
    var ind = row.rowIndex;
    document.getElementById("submit").innerHTML = "Update";
    var name = document.getElementById("tab2").rows[ind].cells.item(0).innerHTML;
    var numb = document.getElementById("tab2").rows[ind].cells.item(1).innerHTML;
    var mai = document.getElementById("tab2").rows[ind].cells.item(2).innerHTML;
    console.log(name,numb,mai);
    document.getElementById("nam").value = name;    
    document.getElementById("num").value = numb;
    document.getElementById("mail").value = mai;
    
}
