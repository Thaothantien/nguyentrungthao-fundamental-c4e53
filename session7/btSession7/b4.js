const row = document.getElementById("input")
const cell = document.getElementById("input2")
const content = document.getElementById("input3")
const update = document.getElementById("nhap")

update.addEventListener('click',()=>{
   var x = document.getElementsByTagName("tr")[parseInt(row.value)-1].getElementsByTagName("td")[parseInt(cell.value)-1];   
   x.innerText = content.value
})
