const inputs=document.querySelectorAll(".input");

function focusFunc(){
    let parent=this.parentNode;
    parent.classList.add("focus");
}
function blurFunc(){
    let parent=this.parentNode;
    if(this.inputs == ""){
        parent.classList.remove("blura");
    }
}


inputs.forEach((input) =>{
    input.addEventListener("focus",focusFunc);
    input.addEventListener("blura",blurFunc);

});