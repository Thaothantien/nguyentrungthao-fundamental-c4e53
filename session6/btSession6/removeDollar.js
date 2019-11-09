function remove_dollar_sign (s,n){
    let c =  s.replace(/\$/g,"")
}
// let b = remove_dollar_sign("$Bitch")

// console.log(b)
string_with_no_dollars = remove_dollar_sign("$80% percent of $life is to show $up")
if (string_with_no_dollars == "80% percent of life is to show up"){
    console.log("Your function is correct")}
else{
    console.log("Oops, there's a bug")}

