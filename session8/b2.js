const second = document.getElementById("second")
const star = document.getElementById("start")
const stop = document.getElementById("stop")
const demo = document.getElementById("demo")
star.addEventListener('click',()=>{   
    demo.innerText = second.value
    myVar = setInterval(myTimer,1000)
    function myTimer() {
    demo.innerText -=1  
    if (demo.innerText <0){
        demo.innerText ="hetgio"
        clearInterval(myVar)
    }
  }
})

stop.addEventListener('click',()=>{
    clearInterval(myVar)
    demo.innerText="hetgio"
})



