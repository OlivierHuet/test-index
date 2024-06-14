const a = document.getElementById("firstContainer");
const body = document.getElementsByName("body");
const p =document.createElement("p");
const pContainer = document.createElement("p");
const pContainerViewPort = document.createElement("p");
const pBody = document.createElement("p")
function myViewport(){
    var content = "width =" + document.documentElement.clientWidth ;
    content += " height="+ document.documentElement.clientHeight;
    
    p.textContent = content;
    a.appendChild(p);

}

function myContainer(){
    var content = "container width="+document.getElementById("firstContainer").clientWidth;
    content += " / body width = "+document.getElementsByName("body").title;
    pContainer.textContent = content;
    a.appendChild(pContainer);
}

function changeContainerSize (){
    a.style.width = document.documentElement.clientWidth+"px";
    a.style.height = document.documentElement.clientHeight+"px";
    var content = "containerViewportWidth="+document.documentElement.clientWidth+"px";
    content += " containerViewportHeight="+ document.documentElement.clientHeight+"px";

    pContainerViewPort.textContent = content;
    a.appendChild(pContainerViewPort);
}
// myViewport();
// myContainer();
// changeContainerSize();
