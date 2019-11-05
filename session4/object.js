// 1. Khởi tạo
// 1.1 Object rỗng
// let person = {}
// console.log(typeof(person))

// 1.2 Object có nhiều hơn 1 cặp property và value
// let person = {
//     name: "Thao",
//     age: 21,
//     location: "Ha Noi",
//     status: false,
//     lover: 3,
// }
// console.log(person)

// // Read 
// console.log(person.name)

// let userInput = prompt("Tìm")
// console.log(person[userInput])
// // console.log(person["lover"])

// // // // Create
// person.school = "Tài nguyên"
// // person["GPA"] = 2.5
// console.log(person)

// // Update
// person.school ="ABC"
// let userInputKey = prompt("Nhập key")
// let userInputValue = prompt("Nhập sửa")
// person[userInputKey] = userInputValue
// console.log(person)

// // Delete
// console.log(person)
// delete person.age
// console.log(person)

// let userNhap = prompt()
// let userThay = prompt()
// person[userNhap] = userThay
// let userInputKey1 = prompt("Nhập key muốn xóa")
// console.log(person)
// delete person[userInputKey1]
// console.log(person)

// let tudien =  {
//     tu:  "abc",
//     tu1:  "cca",
//     tu3: "dda",
// }
// console.log(Object.keys(tudien))
// //in ra toan bo tu trong tu dien 
// let z = Object.keys(tudien)
// for(i=0;i<z.length;i++)
// {
//     console.log(`${i+1}. ${z[i]}`)
// }
// //nguoi dung nhap vao tu viet tat
// //kiem tra tu viet tat co ton tai trong mang x (mang chua toan bo key cua obj tu dien)
// //neu ton tai => in ra nghia thong qua obj tudien
// //neu khong => hoi nguoi dung xem co them tu moi khong

// let nhap = z.indexOf(prompt("Nhập vào từ viết tắt bạn muốn tìm"))
// if(nhap==-1){
//     console.log("Không có từ bạn muốn tìm")
// }
// else{
//     console.log("Từ bạn muốn tìm là: "+z[nhap])
// }


// // z.forEach((value,index) =>{
// //         console.log(`${index+1} ${value}`)
// //      })


let dictionary = {
    any: "anh nguoi yeu",
    btw: "by the way",
    anw: "any way",
}    
  Object.keys(dictionary).forEach((v,i) =>{
      console.log(`${i+1}. ${v}`)
  })

let loop=true
while(loop){
let userInput = prompt("Nhập từ mà bạn muốn xem:").toLowerCase()

if(userInput in dictionary){
    console.log(dictionary[userInput])
}else if(userInput=="e"){
    loop = false
} 

else{
    let userAnswer = prompt("Bạn muốn thêm từ này vào trong từ điển không?").toLowerCase()
    if(userAnswer == "y"){
        let userInputValue = prompt("Hãy nhập vào ý nghĩa của từ")
        dictionary[userInput] = userInputValue
        Object.keys(dictionary).forEach((v,i) =>{
            console.log(`${i+1}. ${v}`)
        })

    }
    else if ( userAnswer == "n"){
        console.log("Cảm ơn bạn")

    }
    else{
        console.log("Bạn nhập sai rồi")
    }
}
}


