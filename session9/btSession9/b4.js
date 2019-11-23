let randomNumber = () => {
    let number = [0,1,2,3,4,5,6,7,8,9]
    let show = number[Math.floor(Math.random() * number.length)];
    return show
}
console.log(randomNumber())

const x = randomNumber();
if (x < 0) {
  console.log("Failed: the number is smaller than 0");
} else if (x > 10) {
  console.log("Failed: the number is bigger than 10");
} else {
  console.log("Passed, bravo");
}
