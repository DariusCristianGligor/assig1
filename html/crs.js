
var numberOfObjects=0;
 var add=()=> {
    var node = document.createElement("Li");
    var text = document.getElementById("user_input").value; 
    var textnode=document.createTextNode(text);
    node.appendChild(textnode);
    numberOfObjects++;
    document.getElementById("list_item").appendChild(node);
}

var removeAnElement=()=>{
    if(numberOfObjects==0)
     throw new Error('The list is empty');
    var ulElem = document.getElementById('list_item');
    console.log(ulElem);
    ulElem.removeChild(ulElem.childNodes[numberOfObjects]);
    numberOfObjects--;
}
var tryRemoveAnElement=()=>
{
try{
    removeAnElement();
}
catch(e)
{
    alert(e);
}

}
var numberOfElemnt=()=>{
    let html = '';
    html=`The number of elements:${numberOfObjects}`
    document.getElementById("countDiv").innerHTML = html;
}
document.getElementById('delete').addEventListener("click", tryRemoveAnElement);
document.getElementById('add').addEventListener("click", add);
document.getElementById('count').addEventListener("click", numberOfElemnt);
