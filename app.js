let menu=document.getElementById("menu");
let nav=document.querySelector(".navigations")
menu.addEventListener("click",()=>{
    if(nav.style.visibility=="hidden"){
        nav.style.visibility="visible";
    }else{
        nav.style.visibility="hidden";
    }
})