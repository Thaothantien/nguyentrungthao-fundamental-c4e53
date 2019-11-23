let random = (a,b) => {
    let number = [4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
    let show = number[Math.floor(Math.random() *number.length )];
    return show

}
console.log(random(4,20))

const x = random(4, 20);
if (x < 4) {
  console.log("Failed: the number is smaller than 4");
} else if (x > 20) {
  console.log("Failed: the number is bigger than 16");
} else {
  console.log("Passed, bravo");
}

