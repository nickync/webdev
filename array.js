/* Musketeers

Write a program that:

Creates an array named musketeers containing values "Athos", "Porthos" and "Aramis".
Shows each array element using a for loop.
Adds the "D'Artagnan" value to the array.
Shows each array element using the forEach() method.
Remove poor Aramis.
Shows each array element using a for-of loop.
Sum of values */

let result = document.getElementById('one')

const musketeers = ['Athos', 'Porthos', 'Aramis']

for (i=0;i<musketeers.length;i++) {
    result.innerHTML += musketeers[i]+'<br>'
}

musketeers.push('D\'Artagnan')

result.innerHTML += '____________________________<br>'

musketeers.forEach(name => {
    result.innerHTML += name +'<br>'
})

musketeers.splice(2)

result.innerHTML += '____________________________<br>'

for (let name of musketeers) {
    result.innerHTML += name + '<br>'
}
/* Write a program that creates the following array, then calculates and shows the sum of its values (42 in that case).

const values = [3, 11, 7, 2, 9, 10];
Array maximum */

const values = [3, 11, 7, 2, 9, 10]

const sumArray = values.reduce(function(a,b) {
    return a + b
})

result.innerHTML += '____________________________<br>'
result.innerHTML += sumArray +'<br>'

/* Write a program that creates the following array, then calculates and shows the array's maximum value.

const values = [3, 11, 7, 2, 9, 10];
List of words */
let maxNum = values[0]
for (let number of values) {
    if (maxNum < number) {
        maxNum = number
    }
}

result.innerHTML += '____________________________<br>'
result.innerHTML += maxNum

// Write a program that asks the user for a word until the user types "stop". The program then shows each of these words, except "stop".

function promptFunction() {
    let text = 'enter a word'
    let textArray = []
    while (text !== 'stop'){
        text = prompt('Type in your word').toLowerCase()
        textArray.push(text)
    }
    document.getElementById('two').textContent = textArray.slice(0,-1)
}