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
    x.style.backgroundImage ="url(butterfly.jpg)"
}
function brown(){
     let y = document.querySelector("#box")
     y.style.backgroundImage = "url(https://www.shutterstock.com/image-photo/fantastic-evening-kirkjufell-volcano-coast-600nw-530221900.jpg)"
}
function orange(){
     let z = document.querySelector("#box")
     z.style.backgroundImage = "url(teddybear.jpg)"
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

function show(){
    let t = document.querySelector("#line")
    t.innerHTML = "this is a para"
    t.style.fontSize = "50px"
}

function hide(){
    let t = document.querySelector("#line")
    t.style.display = "none"
}





