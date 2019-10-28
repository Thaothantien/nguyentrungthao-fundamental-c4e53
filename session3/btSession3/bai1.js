let shopRead = ["T-Shirt","Sweater"]
console.log(shopRead)
let boolean = true
while(boolean){
let chucNang = prompt("Xin chào đến với cửa hàng của chúng tôi! Nhập vào chức năng bạn muốn(C, R, U, D)? :").toUpperCase()
if(chucNang == "R"){
    for(i=0;i<shopRead.length;i++)
    console.log(`${i+1}. ${shopRead[i]}`)
}
else if(chucNang == "C"){
    let shopCreate = prompt("Nhập thêm vào cửa hàng quần áo mới:")
    shopRead.push(shopCreate)
    for(i=0;i<shopRead.length;i++)
    console.log(`${i+1}. ${shopRead[i]}`)  
}
else if (chucNang == "U"){
    let kieu = prompt("Bạn muốn update theo kiểu index hay value:")
    if(kieu == "i"){
    let shopUpdate = prompt("Nhập số thứ tự tên quần áo mà bạn muốn thay:")
     if(shopUpdate < 0 || shopUpdate > shopRead.length){
        console.log("Trong cửa hàng chưa có đến thứ tự quần áo này!")  
     }
     else{
     shopRead[shopUpdate-1] = prompt("Nhập tên quần áo thay:")
     for(i=0;i<shopRead.length;i++)
     console.log(`${i+1}. ${shopRead[i]}`)
    }
   }
    else if(kieu == "v"){
    let shopUpdate1 = shopRead.indexOf(prompt("Nhập vào tên quần áo bạn muốn thay:"))
     if(shopUpdate1<0 || shopUpdate1>shopRead.length){
        console.log("Không có quần áo bạn muốn sửa rồi")
     }
     else{
        shopRead[shopUpdate1] = prompt("Nhập vào quần áo bạn muốn thay")
        for(i=0;i<shopRead.length;i++)
        console.log(`${i+1}. ${shopRead[i]}`)
     }
   }
   else{
       console.log("Bạn nhập sai kiểu rồi")
   } 
}   

else if (chucNang =="D"){
    let kieu1 = prompt("Bạn muốn xóa theo index hay value:")
    if(kieu1 == "i"){
      let shopDelete = prompt("Nhập số thứ tự tên quần áo mà bạn muốn xóa")
      if(shopDelete < 0 || shopDelete > shopRead.length){
          console.log("Trong cửa hàng chưa có đến thứ tự quần áo này!")
        }
      else{
          shopRead.splice(shopDelete-1,1)
          for(i=0;i<shopRead.length;i++)
          console.log(`${i+1}. ${shopRead[i]}`)
       }
    }
    else if(kieu1 == "v"){
       let shopDelete1 = shopRead.indexOf(prompt("Nhập vào tên quần áo bạn muốn xóa:"))
       if(shopDelete1<0 || shopDelete1>shopRead.length){
           console.log("Không tìm thấy quần áo bạn muốn xóa rồi")
       }
       else{
           shopRead.splice(shopDelete1,1)
           for(i=0;i<shopRead.length;i++)
           console.log(`${i+1}. ${shopRead[i]}`)
       }
    }
    else{
        console.log("Bạn nhập sai kiểu rồi")
    }
}
else{
console.log("Bạn nhập sai chức năng rồi!")
break
}
}

