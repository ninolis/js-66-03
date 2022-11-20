'use strict';

// let a = 5;
// let b = a;

// console.log(a, b);

// a = 8;
// console.log(a, b);

// const arr = [1, 2, 3];
// const arr2 = arr;

// console.log(arr, arr2);
// console.log(arr === arr2);

// console.log();

// arr[0] = 55;

// console.log(arr, arr2);
// console.log(arr === arr2);

// const arr3 = [55, 2, 3];

// console.log(arr, arr3);
// console.log(arr === arr3);

// const arr4 = Array.from(arr);
// console.log(arr, arr4);
// console.log(arr === arr4);

// The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.

// Syntax

// slice()
// slice(start)
// slice(start, end)

// Return a portion of an existing array

// const fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango', 'Grapes'];
// const citrus = fruits.slice(1, 3);

// fruits contains ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango']
// citrus contains ['Orange','Lemon']
// const citrus2 = fruits.slice(); // copy whole array
// console.log(citrus2);
// const citrus3 = fruits.slice(-1); // copy last element of array
// console.log(citrus3);

// const citrus4 = fruits.slice(-2); // copy last two elements of array
// console.log(citrus4);

// const citrus5 = fruits.slice(1, -2); // copy from index 1 till end -2
// console.log(citrus5);
/////////////////////////////////////////////////
/*
const arr = [1, 2, , 4, , 6];
// console.log(arr);
// console.log(arr.indexOf(''));// -1
// console.log(arr[2]);// undefined
// console.log(arr.indexOf(undefined));// -1
// console.log(arr[2]); // undefined

//! = = = = = = = = = = = = = = = = = = =
find indexes of empty element (which is undefined) in array arr
const emptyEl = [];
for (let i = 0; i < arr.length; i += 1) {
  // console.log(arr[i]);
  if (typeof arr[i] === 'undefined') {
    emptyEl.push(i);
  }
}

console.log(emptyEl);
*/

//! = = = = = = = = = = = = = = = = = = =
/*
Модуль 2. Заняття 3. Масиви
Example 1 - Базові операції з масивом
Створіть масив genres з елементами «Jazz» та «Blues».
Додайте «Рок-н-рол» до кінця.
Виведіть у консоль перший елемент масиву.
Виведіть у консоль останній елемент масиву. Код повинен працювати для масиву довільної довжини.
Видаліть перший елемент та виведіть його в консоль.
Вставте «Country» та «Reggae» на початок масиву.
const genres = ;
*/
/*
const genres = ['Jazz', 'Blues'];
genres.push('Rock-n-Roll');
console.log(genres[0]);
const genresLength = genres.length - 1;
console.log(genres[genresLength]);
console.log(genres.shift());
console.log(genres);
or using splice
console.log(genres.splice(0, 1)[0]); // splice returns (from position, number of elements), this new array from which we need first el - index[0]
genres.unshift('Country', 'Reggae');
console.log(genres);

OR using splice
Syntax
splice(start)
splice(start, deleteCount)
splice(start, deleteCount, item1)
splice(start, deleteCount, item1, item2, itemN) // items to insert item1, item2, itemN

console.log(genres.splice(0, 1, 'Country', 'Reggae')[0]); // splice returns (from position, number of elements), this new array from which we need first el - index[0]


*/

/////////////////////////////////////////////////
/*
Example 2 - Масиви та рядки
Напиши скрипт для обчислення площі прямокутника зі сторонами, значення яких зберігаються у змінній values у вигляді рядка. Значення гарантовано розділені пробілом.

const values = '8 11';

*/
// const values = '8 11';
// const numbers = values.split(' ');
// const rectangualarSquare = numbers[0] * numbers[1];
// console.log(rectangualarSquare);

/////////////////////////////////////////////////
/*
Example 3 - Перебір масиву
Напиши скрипт для перебору масиву fruits циклом for. Для кожного елемента масиву виведи в консоль рядок у форматі номер_елемента: значення_елемента. Нумерація елементів повинна починатися з 1.

const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋'];

*/

// const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋'];

// for (let i = 0; i < fruits.length; i += 1) {
//   console.log(`${i + 1}: ${fruits[i]}`);
// }

/////////////////////////////////////////////////
/*
Example 4 - Масиви та цикли
Напиши скрипт, який виводить у консоль ім'я та телефонний номер користувача. У змінних names та phones зберігаються рядки імен та телефонних номерів, розділені комами. Порядковий номер імен та телефонів у рядках вказують на відповідність. Кількість імен та телефонів гарантовано однакова.

const names = 'Jacob,William,Solomon,Artemis';
const phones = '89001234567,89001112233,890055566377,890055566300';

*/

// const names = 'Jacob,William,Solomon,Artemis';
// const phones = '89001234567,89001112233,890055566377,890055566300';

// const splittedNames = names.split(',');
// const splittedPhones = phones.split(',');

// for (let i = 0; i < splittedNames.length; i += 1) {
//   console.log(`${i + 1}. ${splittedNames[i]}: ${splittedPhones[i]}.`);
// }

/////////////////////////////////////////////////
/*
Example 5 - Масиви та рядки
Напиши скрипт, який виводить у консоль усі слова рядка крім першого і останнього. Результуючий рядок не повинен починатися або закінчуватися символ пробілу. Скрипт повинен працювати для будь-якого рядка.

const string = 'Welcome to the future';

*/

// const string = 'Welcome to the future nino lis from Kyiv Welcome';

// const words = string.split(' ');
// console.log(words.slice(1, -1).join(' '));

/////////////////////////////////////////////////
/*
Example 6 - Масиви та рядки
Напиши скрипт, який «розгортає» рядок (зворотний порядок букв) і виводить його в консоль.

const string = 'Welcome to the future';

*/

// const string = 'Welcome to the future nino lis from Kyiv Pryvit';

// const letters = string.split('');
// const reverseLetters = [];
// let reverseString;

// // console.log(letters);

// for (let i = letters.length - 1; i >= 0; i -= 1) {
//   reverseLetters.push(letters[i]);
// }
// console.log(reverseLetters.join(''));

/////////////////////////////////////////////////
/*
Example 7 - Сортування масиву із циклом
Напиши скрипт сортування масиву рядків в алфавітному порядку за першою літерою елемента.

const langs = ['python', 'javascript', 'c++', 'haskel', 'php', 'ruby'];

*/
/*
const string = 'Welcome to the future nino lis from Kyiv Pryvit';
const string2 = '!erutuf eht ot emocleW .sil oninl morf viyK tivyrP';
console.log(string2);
const letters = string.split('');
const reverseLetters = [];
let reverseString;

const letters2 = string2.split('');
const reverseLetters2 = [];
let reverseString2;
console.log(letters2);

console.log(letters);

for (let i = letters.length - 1; i >= 0; i -= 1) {
  reverseLetters.push(letters[i]);
}
console.log(reverseLetters.join(''));

for (let i = letters2.length - 1; i >= 0; i -= 1) {
  reverseLetters2.push(letters2[i]);
}
console.log(reverseLetters2.join(''));
*/

/////////////////////////////////////////////////
/*
Example 8 - Пошук елемента
Напиши скрипт пошуку найменшого числа у масиві. Код повинен працювати для будь-якого масиву чисел. Використовуй цикл для розв'язання задачі.

const numbers = [2, 17, 94, 1, 23, 37];
let min;

console.log(min); // 1
*/
// const numbers = [2, 17, 94, 1, 23, 37];
// let min;
// min = 100000000;

// for (let j = 0; j < numbers.length - 1; j += 1) {
//   // console.log(min);
//   if (numbers[j] < min) {
//     // console.log(numbers[j]);
//     min = numbers[j];
//   }
//   // console.log(min);
// }
// console.log(min); // 1

//! =============================================
// *** Lesson 2-2 18-11-2022 Олексій Сімак

/////////////////////////////////////////////////
/*
** timeline 8:59

Що буде виведено в консоль?
function foo(array) {
// for (let j = 0; j < array.length; j += 1) {
//   array[j] *= 2;
// }
const numbers = [1, 2, 3, 4, 5];
foo(numbers);
console.log(numbers); // 1
*/
// function foo(array) {
//   for (let j = 0; j < array.length; j += 1) {
//     array[j] *= 2;
//   }
// }

// const numbers = [1, 2, 3, 4, 5];

// foo(numbers);
// console.log(numbers); // [2, 4, 6, 8, 10]

/////////////////////////////////////////////////
/*

** timeline 10:15
Що буде виведено в консоль?

greet()

const greet = function()  {
  console.log("Welcome")
}
*/

// greet(); // Welcome

// const greet = function () {
//   console.log('Welcome');
// };
// Uncaught ReferenceError: Cannot access 'greet' before initialization

// greet2(); // Welcome

// function greet2() {
//   console.log('Welcome');
// }
// Welcome

/////////////////////////////////////////////////
/*

** timeline 12:37
Що буде виведено в консоль?

greet()

function greet()  {
  console.log("Welcome")
}
*/

// greet(); // Welcome

// function greet() {
//   console.log('Welcome');
// }
// Welcome;

/////////////////////////////////////////////////
/*

** timeline 13:28
Що містить локальна змінна arguments у тілі функції?


function foo ()  {
  console.log(arguments)
}
*/

// Псевдомасив аргументів;

/////////////////////////////////////////////////
/*

** timeline 14:43
Що буде виведено в консоль?

function foo ()  {
  console.log(arguments)
}
*/
// Псевдомасив аргументів;
// function foo() {
//   console.log(arguments);
// }

// foo(5, 'Mango', true); // [5, 'Mango', true] Псевдомасив аргументів;

/////////////////////////////////////////////////
/*
** timeline 15:42
Псевдомасив це ... ?

*/
// Псевдомасив аргументів це такий же індексований список як масив, але без його методів;

/////////////////////////////////////////////////
/*
** timeline 16:25
Що доступне в області видимості функції?

*/
// Набір локальних та глобальних змінних;

/////////////////////////////////////////////////
/*
** timeline 17:52
За яким принципом працює стек викликів?

*/
// Last in, first out;

/////////////////////////////////////////////////
/*
** timeline 22:43
За яким принципом працює return?
*/

// function foo(array) {
//   for (let j = 0; j < array.length; j += 1) {
//     array[j] *= 2;
//   }
//   // return array;// without return - undefined, with return - [2, 4, 6, 8, 10]
// }

// const numbers = [1, 2, 3, 4, 5];

// const newNumbers = foo(numbers);
// console.log(newNumbers); // undefined
// console.log(numbers); // [2, 4, 6, 8, 10]

/////////////////////////////////////////////////
/*
** timeline 29:30
early return
*/

// function add(a, b) {
//   a + b; // without return - undefined, and message from console.log()
//   return a + b; // with return - 6, and without message from console.log()
//   console.log("This message doesn't print on screen! after return!!!");
// }

// const result = add(1, 5);
// console.log(result);

/////////////////////////////////////////////////
/*
** timeline 29:30
early return
*/

// function add(a, b) {
//   a + b; // without return - undefined, and message from console.log()
//   return a + b; // with return - 6, and without message from console.log()
// }

// const result = add(1, 5);
// console.log(result);

// JS V2 block-3 Autochecking  ASSIGNMENT 00/41  Status: Done

/*
** THEORY


** TASK


** Test


 */

// Javascript Editor:
// START
/*

*/

// Javascript Editor:
// FINISH
/*

console.log(
*/

// RESULT
/*

*/

///////////////////////////////////////////////
// JS V2 block-3 Autochecking  ASSIGNMENT 00/41  Status: Done

/*
** THEORY


** TASK


** Test


 */

// Javascript Editor:
// START
/*

*/

// Javascript Editor:
// FINISH
/*

console.log(
*/

// RESULT
/*

*/
