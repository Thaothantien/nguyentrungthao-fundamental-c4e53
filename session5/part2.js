let a = ["to", "be", "that", "of", "elon", "to", "this", "now", "back", "cool", "hey", "love", "of", "life", "that", "rain", "summer", "color", "now", "of", "hat", "late", "sorry", "my", "team"]
for(let i=0;i<a.length;i++){
    let x=a[i]
    let count=0
    for(let j=a.indexOf(x);j<a.length;j++){
        if(x==a[j]){
            count = count+1
        }
    }
    aObject[x] = count //create
    console.log(a[i] + ": " + count)
}



const inventory = [
    {
        name: "HP Envy 13aq",
        price: 21000,
        brand: "HP",
        quantity: 5,
    },
    {
        name: "Dell XPS 9370",
        price: 30000,
        brand: "Dell",
        quantity: 1,
    },
    {
        name: "Dell Inspiron 3567",
        price: 9300,
        brand: "Dell",
        quantity: 12,
    },
    {
        name: "Dell Latitude E5450",
        price: 8600,
        brand: "Dell",
        quantity: 2,
    },
    {
        name: "Asus Zenbook",
        brand: "Asus",
        price: 20000,
        quantity: 4,
    },
    {
        name: "HP Pavilion",
        brand: "HP",
        price: 14000,
        quantity: 7,
    },]
    
    let inventoryByBrand = {
     Asus:[{ 
            name: "Asus Zenbook",
            brand: "Asus",
            price: 20000,
            quantity: 4,
        }
      ],Dell:[{   
            name: "Dell XPS 9370",
            price: 30000,
            brand: "Dell",
            quantity: 1,
        },{     
            name: "Dell Inspiron 3567",
            price: 9300,
            brand: "Dell",
            quantity: 12,
        },{
            name: "Dell Latitude E5450",
            price: 8600,
            brand: "Dell",
            quantity: 2, 
        }
    ],HP:[{
            name: "HP Envy 13aq",
            price: 21000,
            brand: "HP",
            quantity: 5,
        },{
            name: "HP Pavilion",
            brand: "HP",
            price: 14000,
            quantity: 7,
        }]  
    }
    console.log(inventoryByBrand)
    let nhap = prompt("Which brand")
    if (nhap == "Dell"){
        let a = ""
        inventoryByBrand[nhap].forEach((v2,i2)=>{
                let x = ["name"]
                x.forEach((v3,i3)=>{
                    a = a + inventoryByBrand[nhap][i2][v3] + '\n'
                })
            })
            let b = Number(inventoryByBrand[nhap][0].price + inventoryByBrand[nhap][1].price * 12 + inventoryByBrand[nhap][2].price * 2  )
            alert( "There are " + inventoryByBrand[nhap].length + " generation of "  + nhap + " in inventory" + '\n' + '\n' + a + '\n' + b * 1000 + "VND" )
    }
    else if (nhap == "Asus"){
        let a = ""
        inventoryByBrand[nhap].forEach((v2,i2)=>{
                let x = ["name"]
                x.forEach((v3,i3)=>{
                    a = a + inventoryByBrand[nhap][i2][v3] 
                })
            })
            let b = Number(inventoryByBrand[nhap][0].price)
            alert("There are " + inventoryByBrand[nhap].length + " generation of "  + nhap + " in inventory" + '\n' + '\n' + a + '\n' + '\n' + b * 1000 + "VND")
    }
    else if (nhap == "HP"){
        let a = ""
        inventoryByBrand[nhap].forEach((v2,i2)=>{
                let x = ["name"]
                x.forEach((v3,i3)=>{
                    a = a + inventoryByBrand[nhap][i2][v3]  + '\n'
                })
            })
            let b = Number(inventoryByBrand[nhap][0].price + inventoryByBrand[nhap][1].price * 12 )
            alert("There are " + inventoryByBrand[nhap].length + " generation of "  + nhap + " in inventory" + '\n' + '\n' + a + '\n' + b * 1000 + "VND")
    }
    else{
        alert("There is no brand like this!!!")
    }
    