const database = {}
const divA = document.getElementById("div")
const getUser = async () => {
    const respone = await fetch("http://quotes.rest/qod.json")
    const db = await respone.json() 
    db.contents.quotes
    console.log(db.contents.quotes)
    for(let i=0;i<db.contents.quotes.length;i++){
                    let userHTML =`  
                                   <p>Quotes: ${db.contents.quotes[i].quote} </p>
                                   <p>Author: ${db.contents.quotes[i].author}  </p>
                                   <hr>
                                   `
                    divA.innerHTML += userHTML
            }
}
getUser()
