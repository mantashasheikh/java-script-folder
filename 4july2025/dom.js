function Addtext(){
    // let ok = document.getElementById("text")
    //  let ok = document.querySelector("#text")

    //  ok.innerHTML= "this is <i>javascript<i>"
    // ok.innerText = "this is <i>javascript<i>"

    // ok.style.color ="red"
    // ok.style.backgroundColor = "lightblue"


    let p = document.getElementById("para")
    p.innerHTML = "this is paragraph"
    p.style.color = "orange"
    p.style.fontSize = "50px"

    let s = document.getElementById("span")
    s.innerHTML = "this is spam"
    s.style.color = "blue"
    s.style.fontSize = "50px"
}

function green(){
    let h = document.getElementById("heading")
    h.style.color = "green"
    h.style.fontSize = "100px"
    h.style.backgroundColor = "yellow"
}
function pink(){
    let h = document.getElementById("heading")
    h.style.color = "pink"
    h.style.fontSize = "100px"
    h.style.backgroundColor = "blue"
}

function red(){
    let x = document.querySelector("#box")
    x.style.backgroundColor ="red"
}
function brown(){
     let y = document.querySelector("#box")
     y.style.backgroundColor ="brown"
}
function orange(){
     let z = document.querySelector("#box")
     z.style.backgroundColor ="orange"
}
function butterfly(){
    let a = document.querySelector("#image")
    a.src = "butterfly.jpg"
    a.alt = "butterfly"
}
function teddybear(){
    let b = document.querySelector("#image")
    b.src = "teddy bear.jpg"
    b.alt = "teddy bear"
}



