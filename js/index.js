const modal = document.getElementById("modal")

let flag = true;
function setModal() {
    modal.classList.toggle("hidden")
    flag = !flag;
}

function dayan(event){
    event.stopPropagation()
    console.log(event);
}