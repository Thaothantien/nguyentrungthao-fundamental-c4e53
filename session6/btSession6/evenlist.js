function get_even_list (l){
   let even_list = []
   for(i=0;i<l.length;i++){
       if(l[i] % 2 == 0){
           even_list.push(l[i])
       }
   }
   return even_list
}
let l = get_even_list([1, 2, 5, 9, -10, 6])
console.log(l)
if (JSON.stringify(l) == JSON.stringify([2, -10, 6])){
    console.log("Your function is correct")}
else{
    console.log("Ooops, bugs detected")}

console.log(this);