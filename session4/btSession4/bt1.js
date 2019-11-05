//1.1
const product = {
    name: "Xiaomi rice cooker",
    price:  1700,
    brand:  "Xiaomi",
    color:  "white"
    };
   
    for (let x in product) {
    console.log(x);
    }

// x ở đây là kiểu value
    
//1.2
    Object.getOwnPropertyNames(product).forEach( (val, idx, array) => {
          console.log(`${val}: ${product[val]}`);
        }
      );

    


    