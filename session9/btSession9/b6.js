let tinhCan = (x,y,x2,y2) => {
    let tinh = Math.sqrt(Math.pow((x-x2),2)+Math.pow((y-y2),2))
    return tinh
}
// tinhCan(10,5,11,12)
console.log(tinhCan(3,10,0,6))

const x = tinhCan(3, 10, 0, 6);
if (x !== 5) {
  console.log("Failed: the calculation is wrong");
} else {
  console.log("Passed, bravo");
}

