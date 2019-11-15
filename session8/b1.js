const number = document.getElementById("number")
const cong = document.getElementById("cong")
const tru = document.getElementById("tru")
cong.addEventListener('click',()=>{
    number.innerText = Number(number.innerText) + 1
})
tru.addEventListener('click',()=>{
    number.innerText = Number(number.innerText) -1
})

