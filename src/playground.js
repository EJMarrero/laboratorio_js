// 1.- ARRAY OPERATIONS

// Variables
const dogs = ['Presa canario', 'Mastin', 'Chow chow'];

// Head
const head = ([first]) => first;
console.log('HEAD', head(dogs));

// Tail
const tail = ([, ...array]) => array;
console.log('TAIL', tail(dogs));

// Init
const init = ([...array]) => array.slice(0, -1)
console.log('INIT', init(dogs));

// Last
const last = ([...array]) => array.pop();
console.log('LAST', last(dogs));

// --------------------------------------------------//


//2. CONCAT

// Variables
const array1 = ['FirstArray1', 'SecondArray1', 'ThirdArray1'];
const array2 = [1, 2, 3];
const array3 = ['Multiple 1', 'Multiple 2', 'Multiple 3'];
const array4 = ['Test 1', 'Test 2', 'Test 3'];

const myConcat = (a, b) => [...a,  ...b]
console.log('CONCAT SIMPLE', myConcat(array1, array2));

// Without rest / spread operator
console.log('CONCAT IN ONE LINE', array1.concat(array2));

// With multiples arrays
const multipleConcatArrays = (...arrays) => arrays;
console.log('MULTIPLE CONCAT', multipleConcatArrays(array1, array2, array3, array4));

// 3. CLONE 
// Variables
const complexObject = {
  name: 'John',
  surname: 'Foe',
  emails: ['John@gmail.com', 'Foe@outlook.com'],
  cities: {
    id: 1,
    locals: ['La Laguna', 'Adeje'],
    nationals: ['Madrid', 'Málaga'],
    internationals: ['L.A.', 'Londres'],
  }

}
const clone = (source) => ({...source});
const objectCloned = clone(complexObject);
objectCloned.name = 'Alice';
console.log('CLONED OBJECT', objectCloned);


//----------------------------------------------------//


//3.1 MERGE
const a = {name: 'Maria', surname: 'Ibañez', country: 'SPA'};
const b = {name: 'Luisa', age: '31', married: true};

const merge = (a, b) => ({ ...a, ...b });

const merged = merge(a, b);
console.log('MERGED OBJECT:', merged);

//4. READ BOOKS
const books = [
  { title: "Harry Potter y la piedra filosofal", isRead: true },
  { title: "Canción de hielo y fuego", isRead: false },
  { title: "Devastación", isRead: true }
];

const isBookRead = function (books, title) {
  const foundedBook = books.find((book) => { return book.title === title; });
  return foundedBook ? foundedBook.isRead : false;
};

console.log('Devastación: ', isBookRead(books, "Devastación")); // true
console.log('Canción de hielo y fuego', isBookRead(books, "Canción de hielo y fuego")); // false
console.log('Los Pilares de la Tierra', isBookRead(books, "Los Pilares de la Tierra")); // false

// ---------------------------------------------------------------------------------------------------- 

//5. SLOT MACHINE
// Variables
let counter = 0;

class SlotMachine {
  play = function (){
    while (counter < 5 ){
      let randomBoolean = Math.random() >= 0.5;
        if (randomBoolean) {
          console.log('Contratulations!!!');
        } else {
          console.log('Good luck next time!!');
        }
      counter++;
    }
  }
}

const machine1 = new SlotMachine();
machine1.play();
