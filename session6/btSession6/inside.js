
function is_inside (bang1,bang2) {
    
    if (bang2.length < 4) {
        return false
    }
    else
    return true;

}
let bang1 = [200,120]
let bang2 = [140,60,100,200] 
let tongBang = is_inside(bang1,bang2)

console.log(tongBang)

if(JSON.stringify(bang1,bang2) === JSON.stringify([200,120],[140,60,100,200])){
    console.log("Your function is correct")
}else{
    console.log("Ooops, bugs detected")
}