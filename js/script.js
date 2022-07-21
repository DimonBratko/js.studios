//console.log(1);
"use strict"; //команда для работы в современном режиме
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

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
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

console.log(personalMovieDB);
