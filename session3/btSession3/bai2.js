//4.1
let floakSheep = [5,7,300,90,24,50,75]
console.log("Hello, my name is Hiep and these are my ship sizes:" +"[" + floakSheep + "]")

//4.2
let maxSheep = Math.max.apply(Math,floakSheep)
console.log("Now my biggest sheep has size " + maxSheep + " let's shear it")

//4.3
let maxAfter = floakSheep.indexOf(maxSheep)
floakSheep[maxAfter] = 8
console.log("After shearing, here is my flock:" + "[" + floakSheep + "]")

//4.4
let plus = 50
for(let i=0;i<floakSheep.length;i++){
    floakSheep[i]=plus+floakSheep[i]
       }
console.log("One month has passed, now here is my flock: " + "[" + floakSheep + "]")

//4.5
//Month 1
console.log("Month 1: ")
let floakSheep2 = [5,7,300,90,24,50,75]
console.log("Hello, my name is Hiep and these are my ship sizes:" +"[" + floakSheep2 + "]")
let plus2 = 50
for (i=0;i<floakSheep2.length;i++){
floakSheep2[i]=plus2 + floakSheep2[i]
}
console.log("One month has passed, now here is my flock: " + "[" + floakSheep2 + "]")
let maxSheep2 = Math.max.apply(Math,floakSheep2)
console.log("Now my biggest sheep has size " + maxSheep2 + " let's shear it")
let maxAfter2 = floakSheep2.indexOf(maxSheep2)
floakSheep2[maxAfter2] = 8
console.log("After shearing, here is my flock:" + "[" + floakSheep2 + "]")

//Month2
console.log("Month 2: ")
let plus3 = 50
for (i=0;i<floakSheep2.length;i++){
floakSheep2[i]=plus3 + floakSheep2[i]
}
console.log("One month has passed, now here is my flock: " + "[" + floakSheep2 + "]")
let maxSheep3 = Math.max.apply(Math,floakSheep2)
console.log("Now my biggest sheep has size " + maxSheep3 + " let's shear it")
let maxAfter3 = floakSheep2.indexOf(maxSheep3)
floakSheep2[maxAfter3] = 8
console.log("After shearing, here is my flock:" + "[" + floakSheep2 + "]")

//4.6
let tong = 0
for(i=0;i<floakSheep2.length;i++){
    tong = tong + floakSheep2[i]
}
console.log("My flock has size in total:" + tong)
let tongTien = tong * 2 
console.log("I would get 1010 * 2$ = " + tongTien)





