// console.log(Math.random())
// let array = [2,5,6,9,10]
// let show = array[Math.floor(Math.random() * array.length)];
// console.log(show)

let quiz = [{
    question: "Hello nghia la gi?",
    rightChoice: 4,
    choices: ["Nghia la abc", "Nghia la hi hi", "Nghia la hope","Nghia la xin chao"]
},
{
    question: "Number nghia la gi?",
    rightChoice: 2,
    choices: ["Nghia la ha ha", "Nghia la so", "Nghia la ba ba", "Nghia la abc"]
}, {
    question: "Cau Vang la ai?",
    rightChoice: 3,
    choices: ["Nghia la abc", "Nghia la hi hi", "Cau Vang la cho cua Lao Hac",  "Nghia la hope"]
}, {
    question: "Lao Hac la ai?",
    rightChoice: 4,
    choices: ["Nghia la abc", "Nghia la hi hi", "Nghia la hope","La chu cua Cau Vang"]

}]


let tong = 0
for(i=0;i<4;i++){
let a = Math.floor(Math.random() * quiz.length) 
let nhap = prompt(quiz[a].question + '\n' + "1." + quiz[a].choices[0] + '\n' + "2." + quiz[a].choices[1] + '\n' + "3." + quiz[a].choices[2] + '\n' + "4." + quiz[a].rightChoice)
if (nhap == 4) {
            console.log("Ban tra loi dung roi")
            tong += 1
            quiz.splice(a,1);
        }
        else {
            console.log("Ban tra loi sai roi")
            quiz.splice(a,1);
        }
}
alert("Ban tra loi het cau hoi roi")
alert("Tong so cau tra loi dung cua ban la: " + tong)



// let tong = 0
// let v;
// for (i = 0; i < 4; i++) {
//     let a = Math.floor(Math.random() * quiz.length)
//     // let nhap = prompt(quiz[a].question + '\n' + "1." + quiz[a].choices[0] + '\n' + "2." + quiz[a].choices[1] + '\n' + "3." + quiz[a].choices[2] + '\n' + "4." + quiz[a].rightChoice)
//     var ar = [quiz[a].choices[0],quiz[a].choices[1],quiz[a].choices[2], quiz[a].rightChoice];
//     var arr = ar.sort(function () { return 0.5 - Math.random() })
//     v = (arr[0] + '\n' + arr[1] + '\n' + arr[2] + '\n' + arr[3])    
//     let nhap = prompt(quiz[a].question + '\n' + v);
//         if (quiz[i].rightChoice.includes(nhap)) {
//             console.log("Ban tra loi dung roi")
//             tong += 1
//             quiz.splice(a,1); 

//         }
//         else {
//             console.log("Ban tra loi sai roi")
//             quiz.splice(a,1);
//         }
// }

