let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let fake = [-2, 1, 5, 1];
let x = ['+', '-', '*', '/'];
for (let i = 0; i < 2; i++) {
    let num1 = num[Math.floor(Math.random() * num.length)];
    let num2 = num[Math.floor(Math.random() * num.length)];
    let randomx = x[Math.floor(Math.random() * x.length)]
    let fakeResult = fake[Math.floor(Math.random() * fake.length)]
    let result = "";
    let input;
    switch (randomx) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num1 / num2;
            break;
        default:
            break;
    }
    if (i == 1) {
        result = fakeResult;
    }
    input = alert(`${num1} ${randomx} ${num2} = ${result}`)
    if (result == fakeResult) {
        alert("Sai")
    }
    else
        alert("ĐÚng")
}
