debugger
const body = document.getElementById("body")
const google = document.getElementById("demo-a")
const button = document.getElementById("btn-demo")
const input = document.getElementById("demo-input")
const button2 = document.getElementById("delete")
const list = document.getElementById("mau")
button.addEventListener('click',()=>{
//    console.dir(google)
   input.value = google.href
})

button2.addEventListener('click',()=>{  
    list.removeChild(list.lastElementChild) 
})
