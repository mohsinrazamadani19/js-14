var num = +prompt('Enter a Number ')

var num1 = num 
var round = Math.round(num1)
var floor = Math.floor(num1)
var cell = Math.ceil(num1)


document.write(`Number : ${num1} <br> Round off Value : ${round} <br> floor value : ${floor} <br> ceil value : ${cell}`)


document.write("<br> <br> <br>")

var absn = parseFloat(prompt('Enter a Number for Absolute Value'))

var absolut = Math.abs(absn)


document.write(`The Absolute Value is ${absn} is ${absolut}`)

document.write("<br> <br> <br>")


var dic = parseInt(Math.random() * 5 + 1)

console.log(`Random dic value is : ${dic}`);

var coin = parseInt(Math.random() * 2 + 1)

if (coin == 1){
    console.log(`${coin} <br> Random Coin Value is : Head`);
} else if (coin == 2) {
    console.log(`${coin} <br> Random Coin Value is : Tail`);
}

var bet = parseInt(Math.random() * 99 + 1);

document.write(`Random Number Between 1 and 100 : ${bet}`)



var sec = parseInt(Math.random() * 9 + 1)

var check = +prompt('Enter a Number between 1 to 10')

if (sec == check) {
    alert('Congratulate to You')
} else {
    alert (`Plz Try Again`)
}