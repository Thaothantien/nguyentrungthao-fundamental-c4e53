let truyenRead = ["truyen1","truyen2","truyen3"]
// let truyenCreate = prompt("Nhập vào tên truyện muốn thêm vào:")
// truyenRead.push(truyenCreate) 
console.log(truyenRead)
let nhap = prompt("Nhập chức năng bạn muốn")
if(nhap =="r"){
    for (i=0;i<truyenRead.length;i++){
     console.log(`${i+1}. ${truyenRead[i]}`)
        
    }
}
else if(nhap == "c"){
    let truyenCreate = prompt("Nhập vào tên truyện muốn thêm vào:")
    truyenRead.push(truyenCreate) 
    console.log(truyenRead)
}

else if(nhap=="u"){
    let truyenUpdate = prompt("Bạn muốn tìm tên truyện muốn sửa theo index hay value:")
    if(truyenUpdate == "index"){
        let index = prompt("Nhập vị trí cần sửa:")
        truyenRead[index] = prompt("Nhập tên cần sửa:")
        console.log(truyenRead)
    }
    else if(truyenUpdate == "value"){
        let valueInput = prompt('Giá trị bạn muốn sửa')
        let indexOfvalueInput = truyenRead.indexOf(valueInput)   
        if (indexOfvalueInput == -1){
            console.log("Không tồn tại giá trị muốn sửa")
        }
        else{
            truyenRead[indexOfvalueInput] = prompt("Nhập tên cần sửa:")
            console.log(truyenRead)
        }
        //if else
        //
    }
    else{
        console.log("Bạn nhập lỗi!")
    }
}
else if(nhap=="d"){
    let truyenDelete = prompt("Bạn muốn xóa theo index hay value:")
    if(truyenDelete =="index"){
        let xoa1 = prompt("Nhập số cần xóa:")
        truyenRead.splice(xoa1,1)
        console.log(truyenRead)
    }
    else if(truyenDelete == "value"){
        let xoa2 = truyenRead.indexOf(prompt("Nhập tên truyen cần xóa:"))
        truyenRead.splice(xoa2,1)
        console.log(truyenRead)
    }
    else{
        console.log("Bạn nhập lỗi!")
    }

}   
else{
    console.log("Bạn nhập lỗi chức năng!")
}    






