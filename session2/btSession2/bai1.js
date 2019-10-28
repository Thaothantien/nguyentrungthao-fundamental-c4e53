let heightCm = Number(prompt("Nhập vào chiều cao của bạn"))
let heightM = 1/100 * heightCm
let weight = Number(prompt("Nhập vào cân nặng của bạn"))
let bmi = weight / (heightM * heightM)
console.log("Chỉ số BMI của bạn là:" + bmi)
if(bmi < 16){
    console.log("Severely underweight")
}
else if (bmi < 18.5){
    console.log("Underweight")
}
else if (bmi < 25){
    console.log("Normal")
} 
else if (bmi < 30){
    console.log("Overweight")
}
else{
    console.log("Obese")
}
