function change(){

    var icon=document.querySelector(".toggle i");
    var nav=document.querySelector("#navbar ul");

    if(icon.classList.contains("fa-bars")){
        icon.classList.toggle("fa-bars");
        icon.classList.toggle("fa-times");

        
        // nav.style.display='block';
        nav.classList.add("show");
    }
    else{
        icon.classList.toggle("fa-times");
        icon.classList.toggle("fa-bars");
        nav.classList.remove("show");
        
    } 

   
}