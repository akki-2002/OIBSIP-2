var tablinks = document.getElementsByClassName("tabLink");
var tabcontents = document.getElementsByClassName("tabContents");
var sidemen = document.getElementById("sidemenu");

function openTab(tabname){
  for(elemnt of tablinks){
    elemnt.classList.remove("activeLink");
  }
  for(element of tabcontents){
    element.classList.remove("active1");
  }

  event.currentTarget.classList.add("activeLink")
  document.getElementById(tabname).classList.add("active1")
}

// var sidemen = document.getElementById("sidemenu");
function openmenu(){
sidemen.style.right = "0";
}
function closemenu(){
sidemen.style.right = "-200px";
}
