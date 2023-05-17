let taskbar = document.getElementsByClassName("taskbar")[0];
let startpage = document.getElementsByClassName("startpage")[0];

taskbar.addEventListener("click" , ()=>{
    if(startpage.style.bottom == "60px"){
        startpage.style.bottom = "-840px";
    }
    else {
        startpage.style.bottom = "60px";
    }
})