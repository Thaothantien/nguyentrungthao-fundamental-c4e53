// // Đọc 1 phần tử, đọc theo index
// console.log(menu[1])

// //Read all dọc tất cả các phần tử trong 

// for(let i = 0;i < 5;i ++){
//     console.log(menu[i])
// }

let phim = ["phim1","phim2","phim3"]
let phimmoi = prompt("Nhập tên phim muốn thêm vào")
phim.push(phimmoi)
let index =phim.indexOf(prompt("Nhập tên phim cần sửa"))
phim[index]=prompt("Nhập tên sửa")
let xoa = phim.indexOf(prompt("Nhập tên phim cần xóa"))
phim.splice(xoa,1)
// console.log(phim.indexOf("phim3")) de tim kiem vi tri cua phim 3
for (let i=0;i<phim.length;i++){
   console.log(`${(i+1)}: ${phim[i]}`)
}
// let z = Number(prompt())
// console.log(`${z}. ${phim[z]}`)

// forEach
// phim.forEach((value,index) =>{
//     console.log(`${index+1} ${value}`)
// })

//CREATE
// let phimmoi = prompt()
// phim.push(phimmoi)
// console.log(phim)

//UPDATE
// menu[0]="Cơm Tấm"
// console.log(menu)

// DELETE
// phim.splice(0,1) // so dau tien la vi tri phan tu muon xoa, so thu 2 de xoa bao nhieu cai muon xoa
// console.log(menu)


