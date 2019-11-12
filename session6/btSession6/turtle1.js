function hello () {
    let string = "Hello Word"
    for (i=0;i<3;i++){
        console.log(string)
    }
}
hello()

function sum (x,y){
    let sum = x + y
    console.log(sum)
}
sum(4,5)

function draw_square (dodai,mau){
    color("red")
    for (i=0;i<4;i++){
        fd(100)
        rt(90)
    }
}
draw_square()
for (let i = 0; i  < 30; i ++){
    draw_square(i * 5, 'red')
lt(17)
penup()
    fd(i * 2)
    pendown()
}


    function draw_star (dodai) {
       rt(18)
       for(let i=0;i < 5 ; i++){
       fd(150)
       rt(144)
       }
       }
       draw_star()



