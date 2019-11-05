let dictionary ={
    debug: "The process of figuring out why your program has a certain error and how to fix it",
    done: "When your task is complete, the only you have to do is to wait for users to use it(no additional codes or actions needed)",
    defect: "The format word for 'eror",
    pm: "The short version of Project Manager, the person in charge of the final result of a project",
    uiandux: "UI means User Interface, UX mean User Experience, are the process to define how your products looks and feels"
}

Object.getOwnPropertyNames(dictionary).forEach((v,i)=>{
    console.log(`${i+1}. ${v}: ${dictionary[v]}`)
})
let loop = true
while(loop){
    alert("Hi there, this is dev dictionary")
    let userInput = prompt("Enter a keyword or press C to cancel: ").toLowerCase()
    if (userInput in dictionary){
        alert(dictionary[userInput])
    }
    else if(userInput == "c"){
        loop = false
    }
    else{
        let userAdd = prompt("We could not find your word: " + userInput + ", leave your explanation").toLowerCase()
        if(userAdd == null){
            break
        }
        else{
            dictionary[userInput] = userAdd
            Object.getOwnPropertyNames(dictionary).forEach((v,i)=>{
                console.log(`${i+1}. ${v}: ${dictionary[v]}`)
            })
            alert("Done")   
        }
    }
}