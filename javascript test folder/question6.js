function hideShow(){
    let btn = document.querySelector("#btn")
    let text = document.querySelector("#text")
    if(text.style.display == "none"){
        text.style.display = "block"
        btn.innerHTML = "Hide"
    }
    else{
        text.style.display = "none"
        btn.innerHTML = "Show"

    }




}