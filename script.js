const inputBox = document.getElementById("input_box");
const listCont = document.getElementById("list_container");

function addTask(){
  if(inputBox.value===''){
    alert("Write some task!");
  }else{
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listCont.appendChild(li);
    let cross = document.createElement("cross");
    cross.innerHTML = "\u00d7";
    li.appendChild(cross);

  }
  inputBox.value = "";
  saveData();
}

listCont.addEventListener("click", (e)=>{
  if(e.target.tagName === "LI"){
    e.target.classList.toggle("checked");
    saveData();
  }else if(e.target.tagName==="CROSS"){
    e.target.parentElement.remove();
    saveData();
  }
}, false);

function saveData(){
  localStorage.setItem("data", listCont.innerHTML);
}

function showTask(){
  listCont.innerHTML = localStorage.getItem("data"); 
}
showTask();
