const buttonSubmit = document.getElementById("submit")
const input = document.getElementById("input")
const danhSach = document.getElementById("danhsach")
const deletes = document.getElementById("delete")
console.log(danhSach.innerHTML)
buttonSubmit.addEventListener('click',()=>{
    if(input.value ==''){
        console.log("Bạn nhập lỗi")
    }
    else{
        danhSach.innerHTML += `<li>${input.value}</li>` 
    }   
})

deletes.addEventListener('click',()=>{
    if(input.value == ''){
        danhSach.removeChild(danhSach.lastElementChild)      
    } else{
        for(let i = 0;i<danhSach.children.length;i++){
            if(input.value.toLowerCase() == danhSach.children[i].textContent.toLowerCase()){
                danhSach.removeChild(danhSach.children[i])
            }
        }
    }   
})


// deletes.addEventListener('click', () => {
//     if(input.value != ''){
//         let invalid = true
//         for(let i = 0;i < danhSach.children.length; i++){
//             if(input.value.toLowerCase() == danhSach.children[i].textContent.toLowerCase()){
//                 danhSach.removeChild(danhSach.children[i])
//                 invalid = false
//             }
//         }
//         if(invalid) {
//             alert("nhap sai")
//         }
//     }else {
//         // ul.removeChild(ul.children[0]);
//         danhSach.removeChild(danhSach.lastElementChild());
//     }
// })