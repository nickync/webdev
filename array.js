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

/* 
Translate border-left-width to borderLeftWidth
importance: 5
Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.

That is: removes all dashes, each word after dash becomes uppercased.

Examples:

// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition'; 
*/


function camelize(str) {
    let listStr = str.split('')
    let indexArray = []
    for (i=0;i<listStr.length;i++){
        if (listStr[i] === '-') {
            indexArray.push(i)
            listStr.splice(i,1)
            listStr[i] = listStr[i].toUpperCase()
        }
    }
    listStr = listStr.join('')
    return document.getElementById('three').textContent = listStr
}


/* Filter range
importance: 4
Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.

The function should not modify the array. It should return the new array.

For instance:

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

alert( filtered ); // 3,1 (matching values)

alert( arr ); // 5,3,8,1 (not modified) */

let arr = [5, 3, 8, 1]

function filterRange(arr, a, b) {
    let compareA = arr.filter(num => num >= a && num <= b)
    return compareA
}

console.log(filterRange(arr, 1, 4))
