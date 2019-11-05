let dienThoai = [
    { 
        Name:"Xiaomi portable charger 20000mah",
        Price:428,
        Brand:"Xiaomi",
        Color:"White",
        Category:"Charger",
    },
    {
        Name:"VSmart Active 1",
        Brand:"VSmart",
        Price:5487,
        Color:"Black",
        Category:"Phone",
    },
    {
        Name:"Iphone X",
        Brand:"Apple",
        Price:21490,
        Color:"Gray",
        Category:"Phone"
    },
    {
        Name:"Samsung Galaxy A9",
        Brand:"Samsung",
        Price:8490,
        Color:"Blue",
        Category:"Phone",
    }
]

//     dienThoai.forEach((v,i)=>{
//         console.log("-------------------------------------------------")

//         let x = ["Name","Price"]
//         x.forEach((v1,i1)=>{
//             console.log(`#${i+1}.  ${v1}: ${dienThoai[i][v1]}`)
//         }) 
//     })
    
// let nhap = prompt("Enter your category: ").toLowerCase()
//    for (i = 0; i < dienThoai.length ; i ++){
//        if (nhap === dienThoai[i].Category.toLowerCase()){
//            console.log("-------------------------------------------------")
//            let x = ["Name","Price"]
//            x.forEach((v1)=>{
//            console.log(`${v1}: ${dienThoai[i][v1]}`)
//         })
           
//        }
//        else{
//         //    console.log("Nhập sai rồi")
//        }
//     }

// let thuTu = prompt("Nhập vào số thứ tự: ")
//         if(thuTu in dienThoai){
//             console.log("-------------------------------------------------")
//             Object.getOwnPropertyNames(dienThoai[thuTu]).forEach((v,i)=>{
//                 console.log(`${v}: ${dienThoai[thuTu-1][v]}`)
//             })
//         }
//         else{
//             console.log("Nhập sai rồi")
//         }

dienThoai[0].Providers = ["Phukienzero","Dientuccc"]
dienThoai[1].Providers = ["Tgdd","Ddghn","VhStore"]
dienThoai[2].Providers = ["Tgdd"]
dienThoai[3].Providers = ["Tgdd"]  
dienThoai.forEach((v1,i1)=>{
    console.log("---------------------------------------------------------")
    let x = ["Name","Price","Providers"]
    x.forEach((v2,i2)=>{
        console.log(`${v2}: ${dienThoai[i1][v2]}`)
    })
})

let nhap1 = prompt("Enter provider");

for (i=0;i<dienThoai.length;i++){
    
    if(dienThoai[i].Providers.includes(nhap1)){
        console.log("------------------------------------------------------")
        Object.getOwnPropertyNames(dienThoai[i]).forEach((v,i2)=>{
            console.log(`${v} ${dienThoai[i][v]}`)
        })
    }
}

    

      
  





    

    



    








