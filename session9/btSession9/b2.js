
const fetchPromise = fetch("https://reqres.in/api/users?page=2&fbclid=IwAR1fyft0cXNiPngejZFzQ1NmJ-z9hMQ06sicsvH2_zZi3QuFJHzUxAaA2t0")
 fetchPromise.then(connection =>{
        console.log("Connected")
        console.log(connection)
        const jsonPromise = connection.json()
        console.log(jsonPromise)
    })
