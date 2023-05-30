let box = document.querySelector(".box")
let btn2 = document.createElement("button")
let btn = document.createElement("button")
let h1 = document.createElement("h1")
let cnt = 0
btn.innerHTML = "+"
btn2.innerHTML = "-"
function add () {
    cnt++
    h1.innerHTML = cnt
    box.appendChild(h1)
}

function remove () {
    cnt--
    h1.innerHTML = cnt
    box.appendChild(h1)
}

btn.onclick = add
btn2.onclick = remove
box.appendChild(btn2)
box.appendChild(btn)
box.appendChild(h1)

