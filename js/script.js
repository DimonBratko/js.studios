//console.log(1);
//"use strict"; //команда для работы в современном режиме
//let number = 1;

//const leftBorderWidth = 1;

//number = 10;
//console.log(number);

//const obj = {
//пример как поменять const
// a: 50,
//};
//obj.a = 04;

//console.log(obj);

/* const vehicleBodyWidth = 5000;
const vehicleBodyLenght = 4000;

console.log(
  "ширина кузова автомобиля: " +
    vehicleBodyWidth +
    ", длина" +
    vehicleBodyLenght
); */

//['fdsf', 'DFG' , 'FDF'].map(a =>)
//const userName = 'John';
//let userNumber = 25;
//number = 24;

//числа
/* let number = 4.5;//без кавычек число
console.log(4/0); //Infinity неправильное действие
console.log('strict' * 7); //NaN non an number не число
 */
//строка

//const persone = "Alex"; // все в кавычках

//булиновые

//const bool = true; //два значение true or falce

//console.log(something); //null

/* let und;
console.log(und); */ //undefined пусто

/* const obj = {
  name: "John",
  age: 25,
  isMarried: false
}; */
// обьект это хранение данных в парном форматеБ т.е. есть ключ и значение. Порядок не имеет значение
//console.log(obj.name);
//console.log(obj['name']); //редко

//let arr = ['plum.png', 'orange.ipg', 6, 'apple', {}]; //классический масив - частный случай обьекта - хранение данных строго по порядкуБ можем разные тип данных вносить - каждый тип данных строго по порядку 0,1,2,3 и т.д. В принципе тоже есть ключ но доступ к нему только через номер по порядку. Квадратный скобки это масив
//let arrObj = { // можна и так записать массив и тут можна создавать вутри обьекты
//0: 'plum.png',
//1: 'orange.ipg',
//2: 6,
//3: 'apple',
//4: {}
//abc: {
//df: [{}, {}],
//def: {
//    }
// }
//};
//arrObj.b = '1111';
//arrObj['b'] = '1111';

//console.log(arr[0]); //в программировании нумерация начинается с "0"
//console.log(arrObj[1]);
//console.log(arrObj[b]); // ошибка, думает что переменная - надо преобразовать в строку
//console.log(arrObj['b']);
//console.log(arrObj.b);

//Взаимодействие с пользователем

//alert("Hello");

//const result = confirm("Are you here?");
//console.log(result);

//const answer = +prompt("Are you 18?", "18");
//console.log(typeof answer); //typeof показывает какой тип вывода данных строка или
//console.log(answer + 5);

//const ansvers = [];

//ansvers[0] = prompt("What is you name?", "");
//ansvers[1] = prompt("What is you last name?", "");
//ansvers[2] = prompt("how much you old?", "");

//document.write(ansvers); устаревший вариант
//console.log(typeof ansvers);

//Интерполяция - внутри строки можем вставить значение переменной

//const category = "toys";

//console.log('https://someurl.com/' + category + '/' + '4'); // неудобно и был придуман Интерполяция
//console.log(`https://someurl.com/${category}/5`); // обезательно использование косых кавычек ``

//const user = "Dima";

//alert(`Hello, ${user}`);

//Операторы (+ - * / % **)

//console.log("arr" + " - object");

//console.log(4 + " - object");

//console.log(4 + +" - object"); //NaN second + - унарный

//console.log(4 + +"5");

//let incr = 10,
//decr = 10;

//incr++; //оператор инкримента, т.е. увелечение на 1
//decr--; //операт декремента, т.е. уменшение на 1
//++incr;
//--decr;

//console.log(incr++); //так не работает
//console.log(--decr); //так  работает

//console.log(5%2); //% значит что 5 делится на 5 2 раза и получаем 1

//console.log(2*2 == 4); // == сравнение и неважно просто число или ""
//console.log(2*2 === "4"); // === строгое сравнение и если "" то уже это неправда
//console.log(2*2 + 2 === "4");
//console.log(2*2 + 2 != "4"); // != знак
// && - and - работает когда минимум два варианта правдивы
// || - or - работает когда один из вариантов правда
// ! - оператор отрицание меняет значение на противоположное

//const isCheked = true,
//      isClose = false;

//console.log(isCheked && isClose);
//console.log(!isCheked || isClose);

/* * Задание на урок:
1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'
2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false
3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }
Проверить, чтобы все работало без ошибок в консоли */

/* const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  tactors: {},
  genres: [],
  privat: false,
};
const a = prompt("Один из последних просмотренных фильмов?", ""),
  b = prompt("На сколько оцените его?", ""),
  c = prompt("Любимый актер?", ""),
  d = prompt("Любимая актриса?", "");

personalMovieDB.movies[a] = b;
personalMovieDB.actors[c] = d;

console.log(personalMovieDB); */

// условия if - "если" работает как на числа так и на строки
/* if (4 == 9) {
  console.log("Ok!");
} else {
  console.log("Error");
}

const num = 50;

if (num < 49) {
  console.log("Error!");
} else if (num > 100) {
  console.log("Много");
} else {
  console.log("Ok!");
}

num === 50 ? console.log("Ok!") : console.log("Error!"); */
/* тернарный оператор - в его работе участвует три аргумента 
бинарный - 2 аргумента
унарный - 1 */

/* const num = 50;

switch (num) {
  case 49:
    console.log("Error!");
    break;
  case 100:
    console.log("Error!");
    break;
  case 51:
    console.log("Ok");
    break;
  default: //если дейсвие не выполняется
    console.log("Next");
    break;
} */

//Логические операторы - "и", "или", оператор отрецания "не"

//пример - я наемся если в меню будет и гамбургер и картошка фри

/* const hamburger = true;
const fries = false;

if (hamburger && fries) {
  console.log('Я сыт');
}

console.log((hamburger && fries)); */ // результат логического пути булитовое значение true

/* const hamburger = 3;
const fries = 1;
const cola = 0;

console.log(hamburger === 3 && cola && fries);
//правда идет от 1 ("0" это уже не правда) и если возле значения нет сравнения то считается от правда от "1"
//неправда это 5 сущностей - 0, null, NaN, inderferno, 
console.log(1 && 0);
console.log(1 && 5);
console.log(null && 5);
console.log(0 && 'ggggggggjghdj');

//оператор 'i' ищет значение и если находит неправильное то возвращает его обратно и дальше код не идет...cola.есди все правильные то возвращает последнее

if (hamburger === 3 && cola === 1 && fries === 1) {
  console.log('Все сыты');
} else {
  console.log('Мы уходим');
}

console.log((hamburger && fries)); */

/* const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;

if ((hamburger === 3 && cola === 2) || (fries === 3 && nuggets)) {
  console.log("Все сыты");
} else {
  console.log("Мы уходим");
}

console.log((hamburger === 3 && cola === 2) || (fries === 3 && nuggets));

let johnReport,
  alexReport,
  samReport,
  mariaReport = "done";

console.log(johnReport || alexReport || samReport || mariaReport);

console.log(!0); // неправда возвращает */

//Циклы

//let num = 50;

//1) while - пока что какоето условие выполняется мы будем выполнять какоето действие
//while (num <= 55) {
//console.log(num);
//num++;
//}

//2) застивить чтото сделать а потом проверить условиеБ если необходимо выйти из цикла
/* do {
  console.log(num);
  num++;
} while (num < 55);

for (let i = 1; i < 8; i++) {
  console.log(i);
} */
/* for (let i = 1; i < 8; i++) {
  console.log(num);
  num++;
} */
/* for (let i = 1; i < 10; i++) {
  if (i === 6) {
    //break;прерываем цикл
    continue; //пропускаем значение с "если"и дальше продолжаем цикл
  }
  console.log(i);
} */

//Метки в цикле

/* for (let i = 0; i < 3; i++) {
  console.log(i);
  for (let j = 0; j < 3; j++) {
    console.log(j);
    
  }
} */

//*
//**
//***
//****
//*****
//******

/* let result = "";
const lenght = 7;

for (let i = 1; i < lenght; i++) {
  for (let j = 0; j < i; j++) {
    result += "*";
  }
  result += "\n"; //перенос строки//
}
console.log(result);



first: for (let i = 0; i < 3; i++) {
  console.log(`First level: ${i}`);
  for (let j = 0; j < 3; j++) {
    console.log(`Second level: ${j}`);
    for (let k = 0; k < 3; k++) {
      if (k === 2) continue first;
      console.log(`Third level: ${k}`);
    }
  }
}
first: for (let i = 0; i < 3; i++) {
  console.log(`First level: ${i}`);
  for (let j = 0; j < 3; j++) {
    console.log(`Second level: ${j}`);
    for (let k = 0; k < 3; k++) {
      if (k === 2) break first;
      console.log(`Third level: ${k}`);
    }
  }
}
 */
/* 
function firstTask() {
  for (let i = 20; i >= 10; i--) {
    if (i === 13) break;
    console.log(i);
  }
}
for (let i = 5; i <= 10; i++) {
  console.log(i);
}

for (let i = 2; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

let i = 2;

while (i <= 16) {
  if (i % 2 === 0) {
    i++;
    continue;
  } else {
    console.log(i);
  }
  i++;
}

const arrayOfNumbers = [];

for (let i = 5; i < 11; i++) {
  arrayOfNumbers[i - 5] = i;
}

console.log(arrayOfNumbers);
return arrayOfNumbers;

const arr = [3, 5, 8, 16, 20, 23, 50];
const result = [];
for (let i = 0; i < arr.length; i++) {
  result[i] = arr[i];
}
console.log(result);
return result;

const data = [5, 10, "Shopping", 20, "Homework"];
for (let i = 0; i < data.length; i++) {
  if (typeof data[i] === "number") {
    data[i] = data[i] * 2;
  } else if (typeof data[i] === "string") {
    data[i] = `${data[i]} - done`;
  }
}

console.log(data);
return data;

const data = [5, 10, "Shopping", 20, "Homework"];
const result = [];
for (let i = 1; i < data.length; i++) {
  result[i - 1] = data[data.length - i];
}

console.log(result);
return result;

const lines = 5;
let result = "";

for (let i = 0; i < lines; i++) {
  for (let j = 0; j < lines - i; j++) {
    result += " ";
  }
  for (let j = 0; j < 2 * i + 1; j++) {
    result += "*";
  }
  result += "\n";
}
console.log(result); */

/* Задание на урок:
1) Автоматизировать вопросы пользователю про фильмы при помощи цикла
2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять. (К любой строке можно обратиться как 
str.length - и получить её длину)
3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"
4) Потренироваться и переписать цикл еще двумя способами*/

/* ("use strict");

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  tactors: {},
  genres: [],
  privat: false,
};

// цикл начинается с нуля. в данном случае необходимо что бы он сработал 2 раза. начинается с нуля, потом плюс 1 и на 2 закачивается

for (let i = 0; i < 2; i++) {
  const a = prompt("Один из последних просмотренных фильмов?", ""),
    b = prompt("На сколько оцените его?", "");
  //null появляется если нажимаем отмена и в данном случае проверяем значение на наличие этих отмен, "" пустая строка на нее тоже проверяем, lenght (длина строки) не более чем 50 символов -> и если все хорошо то выполняется действие. если это не выполнилось задаем итератор i с двумя минусами и начинаем сначала. и так происходит пока пользователь не внесет правильные данные
  if (a != null && b != null && a != "" && b != "" && a.length < 50) {
    personalMovieDB.movies[a] = b;
    console.log("done");
  } else {
    console.log("error");
    i--;
  }
}

if (personalMovieDB.count < 10) {
  console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
  console.log("Вы классический зритель");
} else if (personalMovieDB >= 30) {
  console.log("Вы киноман");
} else {
  console.log("Произошла ошибка");
}

console.log(personalMovieDB); */

("use strict");
// функсии - ()-для аргументовб внутри фигрных скобок действия, !!! что бы функция заработала нужно  вызвать к имени и обезательно круглые скобки+;
//главное в функции ее имя - как правило это глагол с припиской над чем выполняется действие.
//в скобках задается аргумент который мы задаем потом в дейсвтии, а отдельно им даем значение аргументов можно задавать много
//если мы обьявляем внутри функции переменную снаружи она не доступна, а внутри сней можно работать
// переменную нужно задавать глобально вне функции, а менять можно только без использования let
//замыкание функции - это поиск функцией переменных на уровень выше до самого верха - со всеми внешними переменными какие ей доступны
// return (ret) - останавливает выполнение функции, после него ничего не задается

/* let num = 20;
function showFirstMessage(text) {
  console.log(text);
  let num = 10;
  console.log(num);
}

showFirstMessage("Hello world!");
console.log(num);

//
function calc(a, b) {
   return (a + b);
}

console.log(calc(4, 3));
console.log(calc(5, 10));
console.log(calc(12, 15));

//

function ret() {
  let num = 50;


  return num;
}

const anotherNumm = ret();
console.log(anotherNumm);
 */
//три вида функций
//1 как обычно используем Function Declaration  создается до начала выполнения скрипта можна вызвать перед выполнением
// function ret() {
//код
//}

//2 Function Expression - создается только тогда когда доходит поток кода , можно вызвать только после обьявлени и выводится через переменную
/* const logger = function() {
  console.log('Hello')
};
logger(); */

//3 Стрелочные функции - не имеют своего контекста
// ()=>

/* const calc = (a, b) => {
  return a+b;
} */

//умение писать код по принципе оптимальности и минамально доступным способом - пример конвертации валют
/* const usdCurr = 28;
const evrCurr = 32;

function convert(amount, curr) {
  console.log(curr * amount);
}

convert(500, usdCurr);
convert(500, evrCurr);
 */

// любая функция может вернет чтото как результат своей работы
//return
// конвертация валют и следующее оформлени скидки
/* const usdCurr = 32;
const discount = 0.9;

function convert(amount, curr) {
  return curr * amount;
}

function promotion(result) {
  console.log(result * discount); 
}

const res = convert(500, usdCurr);
promotion(res);

// 2 вариант - promotion (convert(500, usdCurr)); // производится вызов функции и возвращает результат (число), это число в качестве уже аргумента идет в др.функцию и производится вычесление

// return - по правило после него фольше ничего не выполняется и нельзя переносить строку,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,

function test() {
  for (let i = 0; i < 5; i++) {
    console.log(i);
    if (i ===3) {return}
  }
  console.log('Done');
}

test();

//функция даже пустая всегда чтото возвращает как пример - выдает значение и потом underfined - на примере доказательство что пустая функция вернет:

function doNothing() {};
console.log(doNothing () === undefined); */

/* function sayHello(name) {
  return `Привет, ${name}`;
}
sayHello("Aнтон");

function returnNeighboringNumbers(num) {
  return [num - 1, num, num + 1];
}

returnNeighboringNumbers(5);

function getMathResult(num, times) {
  if (typeof times !== "number" || times <= 0) {
    return num;
  }
  let str = "";

  for (let i = 1; i <= times; i++) {
    if (i === times) {
      str += `${num * i}`;
    } else {
      str +=`${num*1}---`;
    }
  }
  return str;
}
getMathResult (10, 5); */

// числа и строки

/* const str = 'test';
const arr = [1, 2, 3];

//console.log(str.toUpperCase());
console.log(str.toLocaleLowerCase());
console.log(str);
//console.log(arr.length);
//console.log(str.length);

//поиск подстроки 

const fruit = 'Some fruit!';
//console.log(fruit.indexOf('fruit'));
console.log(fruit.indexOf('a'));

//обрезание символов

const logg = 'Hello world!';

//console.log(logg.slice(5, 11));

//console.log(logg.substring(5, 11)); //то же самое что и 1 вариант только нельзя использовать минусовые значение

console.log(logg.substr(6, 5)); // сколько символов необходимо вырезать

// числа через Math
const num = 12.2;
console.log(Math.round(num));

const test = "12.2px";
console.log(parseInt(test)); //преобразование строки в число
console.log(parseFloat(test));
 */

/* Задание на урок:
1) Первую часть задания повторить по уроку
2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы
3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres
P.S. Функции вызывать не обязательно */

let numberOfFilms;

function start() {
  numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

  while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
  }
}
start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    const a = prompt("Один из последних просмотренных фильмов?", ""),
      b = prompt("На сколько оцените его?", "");

    if (a != null && b != null && a != "" && b != "" && a.length < 50) {
      personalMovieDB.movies[a] = b;
      console.log("done");
    } else {
      console.log("error");
      i--;
    }
  }
}

rememberMyFilms();

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
  } else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман");
  } else {
    console.log("Произошла ошибка");
  }
}

function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
  }
}

writeYourGenres();
