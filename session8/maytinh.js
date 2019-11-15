const bay = document.getElementById("7")
const tam = document.getElementById("8")
const chin = document.getElementById("9")
const chia = document.getElementById("chia")
const bon = document.getElementById("4")
const nam = document.getElementById("5")
const sau = document.getElementById("6")
const nhan = document.getElementById("nhan")
const mot = document.getElementById("1")
const hai = document.getElementById("2")
const ba = document.getElementById("3")
const tru = document.getElementById("tru")
const khong = document.getElementById("0")
const cham = document.getElementById("cham")
const bang = document.getElementById("bang")
const cong = document.getElementById("cong")
const dauTien = document.getElementById("khong")
const xoa = document.getElementById("xoa")

function ud(n){ 
    dauTien.value += n ;
}
function tinh(){
    let c = eval(dauTien.value)
    dauTien.value = c
}
bay.addEventListener('click',()=>{
    ud(7)
})   
tam.addEventListener('click',()=>{
    ud(8)
})    
chin.addEventListener('click',()=>{
    ud(9)
})    
bon.addEventListener('click',()=>{
    ud(4)
})    
nam.addEventListener('click',()=>{
    ud(5)
})    
sau.addEventListener('click',()=>{
    ud(6)
})     
ba.addEventListener('click',()=>{
    ud(3)
})    
hai.addEventListener('click',()=>{
    ud(2)
})    
mot.addEventListener('click',()=>{
    ud(1)
})    
khong.addEventListener('click',()=>{
    ud(0)
})  
cong.addEventListener('click',()=>{
    ud("+")
})    
tru.addEventListener('click',()=>{
    ud("-")
})    
nhan.addEventListener('click',()=>{
    ud("*")
})    
chia.addEventListener('click',()=>{
    ud("/")
})    
bang.addEventListener('click',()=>{
    tinh()
})    
xoa.addEventListener('click',()=>{
    dauTien.value=""
})  
cham.addEventListener('click',()=>{
    ud(".")
})      


