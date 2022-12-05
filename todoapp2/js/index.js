function addtaskFunction()
{

    var tasktexted = document.getElementById("txttask").value;
    var tabl = document.getElementById("todo-table");
    var row1 = document.createElement("tr");
    const col1 = document.createElement("td");
    const col2 = document.createElement("td");
    const col3 = document.createElement("td");
    document.getElementById("txttask").value =" ";
    col1.classList.add('strikethroughEmpty');
    col1.innerHTML = tasktexted;
    col2.innerHTML = '<input type = "submit" value="Done task">'
    var removeButton = document.createElement("input");
    removeButton.setAttribute('type','button');
    removeButton.setAttribute('value','Remove task');
    removeButton.setAttribute('onclick','removeRow(this)');
    col3.appendChild(removeButton);

    row1.appendChild(col1);
    row1.appendChild(col2);
    row1.appendChild(col3);
    tabl.appendChild(row1);

col2.addEventListener('click',()=>{
    col1.classList.toggle('strikethroughDone');
})

    

}
function removeRow(oButton){
    var empTab = document.getElementById('todo-table');
    empTab.deleteRow(oButton.parentNode.parentNode.rowIndex);
}