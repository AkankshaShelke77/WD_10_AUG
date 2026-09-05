let a = document.getElementById("hello")
a.style.backgroundColor = "Orange"
a.style.color="purple"
a.style.textAlign="center"

let b = document.getElementsByClassName("c1")
for(let i =0; i<= b.length; i++){
    b[0].style.color="red"
    b[1].style.color="green"
    b[2].style.color="purple"
}

let c = document.getElementsByTagName("h5")
for(let i =0; i<= c.length; i++){
    c[0].style.color="red"
    c[1].style.color="green"
}

//