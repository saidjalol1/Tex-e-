// let elLink = document.querySelector("a");

// elLink.addEventListener("click" , function(evt)
// {
//     evt.preventDefault();
//     elLink.style.fontWeight = "900"
// })
let Eljs = document.querySelector(".js");
let ElHiddenBlock = document.querySelector(".hidden-block");

Eljs.addEventListener("click", function(evt){
    evt.preventDefault();

    ElHiddenBlock.classList.remove("hidden");
})
ElHiddenBlock.addEventListener("click" , function(evt){
    evt.preventDefault();
    
    
    ElHiddenBlock.classList.add("hidden");
})
