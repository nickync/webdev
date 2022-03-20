// input validation
// function turnN() {
//     let number = document.getElementById("num").value
//     while (number > 100 || number < 50){
//         console.log("enter a number less than 100 or larger than 50")
//         return
//     }
//     for (i = 1; i <= number; i ++) {
//         console.log(i)
//     }
    
// }

// for (i=1; i <= 10; i++) {
//     if (i % 2 === 0) {
//         console.log(`${i} is even`)
//     } else if (i % 2 !== 0) {
//         console.log(`${i} is odd`)
//     }
// }

//muliplication table
// Write a program that asks the user for a number, then shows the multiplication table for this number.

// When you are done, improve the program so it only accepts numbers between 2 and 9 (use the previous exercise as a blueprint).

// function muliTa() {
//     while (document.getElementById("num").value > 9 || document.getElementById("num").value < 2) {
//         console.log('enter between 2 and 9')
//         return
//     }
//     for (i=1; i<=9; i++) {
//         let num = document.getElementById("num").value
//         document.getElementById("table").innerHTML += `${num} * ${i} = ${num * i} <br>`
   
        
//     }
// }

//Neither yes or no
// Write a program that plays "neither yes, nor no" with the user. Specifically, the programs asks the user to enter text until either "yes" or "no" is typed, which ends the game.

// function yesNo() {
//     let res = document.getElementById("num").value.toLowerCase()
//     console.log(res)
//     console.log(typeof(res))
//     if (res === 'yes' || res === 'no') {
//         alert('end')
//         console.log('end')
//     } else if (res !== 'yes' || res !== 'no'){
//         alert('retry')
//         console.log('retry')
//     }
// }

// Fizzbuzz
// Write a program that shows all numbers between 1 and 100 with the following exceptions:

// It shows "Fizz" instead if the number is divisible by 3.

// It shows "Buzz" instead if the number is divisible by 5 and not by 3.

// When it's done, improve it so that the program shows "FizzBuzz" instead for numbers divisible both by 3 and by 5.
// function fizBuz() {
//     for (i=1; i<=100; i++) {
//         if (i % 3 === 0 && i % 5 === 0) {
//             document.getElementById("holder").textContent += ' FizzBuzz '
//         } else if (i % 3 === 0) {
//             document.getElementById("holder").textContent += " Fizz "
//         } else if (i % 5 === 0) {
//             document.getElementById("holder").textContent += " Buzz "
//         } else {
//             document.getElementById("holder").textContent += " " + i + " " 
//         }
//     }
// }

let num = prompt('enter a number')
for (i = 1; i <= num; i + 3){
    console.log(i + 3)
    console.log(i)
}