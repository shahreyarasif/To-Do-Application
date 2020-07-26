var list = document.getElementById("list");
function additem(){

    var item = document.getElementById("todo-item");
    var li =document.createElement('ul');
    li.setAttribute("id","addlist")
    var litext = document.createTextNode(item.value)
    li.appendChild(litext)

    var delbtn= document.createElement("button")
    var delText = document.createTextNode("Delete")
    delbtn.appendChild(delText)
   
    delbtn.setAttribute("onclick","deleteitem(this)")
    delbtn.setAttribute("id","btns")

    var editbtn=document.createElement("button")
    var edittxt=document.createTextNode("EDIT")
    editbtn.appendChild(edittxt)
    editbtn.setAttribute("onclick","edititem(this)")
editbtn.setAttribute("id","btns")

    li.appendChild(delbtn)
    li.appendChild(editbtn)
    list.appendChild(li);
    item.value=" ";
}
function deleteitem(e){
e.parentNode.remove();
}
function removeall(){
    list.innerHTML=" ";
}
function edititem(e){
   var val=prompt("Enter Updated Value",e.parentNode.firstChild.nodeValue)
   e.parentNode.firstChild.nodeValue=val;
}
