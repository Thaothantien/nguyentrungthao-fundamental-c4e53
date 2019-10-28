// // let loop = true
// // while (loop){
// // let temp = Number(prompt())
// // if(temp <10){
// //     console.log("Lanh")
// // } else if(temp<25){
// //      console.log("Mat")
// //    }
// // else{
// //    console.log("Nong")
// // }
// // if(temp>50){
// //     loop=false
// // }
// // }
// let loop = true
// let count = 0;
// while (count < 3) {
//     let userName = prompt("Nhap ten dang nhap")
//     if (userName == "123") {
//         console.log("Ban da nhap dung ten dang nhap")
//         let passWord = prompt("Nhap mat khau")
//         if (passWord == "123") {
//             alert("Dang nhap thanh cong")
//             console.log("Da nhap dung mat khau")
//             break
//         }
//         else {
        
//             while (count < 2) {
//                 let passWord = prompt("Nhap lai mat khau")
//                 console.log("Nhap sai mat khau")
//                 count += 1

//             }
//             count +=1
//         }
//     }
//     else {
//         console.log("Nhap sai ten dang nhap")
//         count += 1
//     }

// }

let count = 0;
let u = prompt("username");
let p = prompt("pass");
if (u == "123" && p == "123") {
    alert("ok");
}
else {
    while (count < 3) {
        if (u != "123") {
            alert("sai username");
             u = prompt("username");
             p = prompt("pass");
        }
        else if (p != "123") {
             p = prompt("sai pass, nhập lại");
        }
        count++;
    }
}






