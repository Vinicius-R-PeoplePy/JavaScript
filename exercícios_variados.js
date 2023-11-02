/* javascript basics */



let favoriteTrilogies = [
    {
        title: "His Dark Materials",
        author: "Philip Pullman",
        books: ["Northern Lights", "The Subtle Knife", "The Amber Spyglass"]
    },
    {
        title: "Broken Earth",
        author: "N. K. Jemisin",
        books: ["The Fifth Season", "The Obelisk Gate", "The Stone Sky"]
    }
];

console.log(favoriteTrilogies)

let cent = { name: "Cent", value: 1, weight: 2.5};
let nickel = { name: "Nickel", value: 5, weight: 5};
let dime = { name: "Dime", value: 10, weight: 2.268 };
let quarter = { name: "Quarter", value: 25, weight: 5.67 };
let change = [quarter, quarter, dime, cent, cent, cent];
change[0].value;

console.log(cent, nickel)

let casablanca = { 
    "title": "Casablanca",
    "released": 1942,
    "director": "Michael Curtiz"
};
console.log(casablanca)

let obj = { key1: 1, key_2: 2, "key 3": 3};
console.log(obj)

console.log(obj["key 3"])

console.log(casablanca["title"])

let num = [1, 2, 3];
console.log(num.length);

let dictionary = {};
dictionary.mouse = "A small rodent";
dictionary["computer mouse"] = "A pointing device for computers";
console.log(dictionary)

let favTrilogies = [
    {
        title: "His Dark Materials",
        author: "Philip Pullman",
        books: ["Northern Lights", "The Subtle Knife", "The Amber Spyglass"]
    },
    {
        title: "Broken Earth",
        author: "N. K. Jemisin",
        books: ["The Fifth Season", "The Obelisk Gate", "The Stone Sky"]
    }
];
console.log(favTrilogies)

console.log("Book 1:"); console.log(favTrilogies[1].books[0])
console.log("Book 1:", favTrilogies[1].books[0])

let centt = { name: "Cent", value: 1, weight: 2.5};
let nickell = { name: "Nickel", value: 5, weight: 5};
let dimee = { name: "Dime", value: 10, weight: 2.228};
let quarterr = { name: "Quarter", value: 25, weight: 5.67};
let changee = [quarterr, quarterr, dimee, centt, centt, centt];
change[0].value;
console.log(centt, nickell, dimee, quarterr)

centt.weight = 2.49;
change[3].weight;
/* change 3, 4 and 5 refer to the same object */ 
change[4].weight;
change[5].weight;
console.log(centt)

let nested = { 
    name: "Outer",
    content: {
        name: "Middle",
        content: { 
            name: "Inner",
            content: "Whoa..."
        }
    }
};
console.log(nested.content.content.content);
console.log(nested);

console.log(JSON.stringify(nested));

/* about constructors:

a constructor is a type of function used to create objects, 
and static methods are methods defined directly on the constructor. 
*/

let cats = {"Kiki": "Black and white", "Mei": "Tabby", "Moona": "Gray"};
console.log("Cats:", Object.keys(cats));

/*let precocompras = {"Pães": 5, "Ovos": 5, "Bananas": 7};
console.log(sum.precocompras)*/

let precocompras = {"Pães": 5, "Ovos": 5, "Bananas": 7};

let sum = 0 
for (let item in precocompras) {
    if (precocompras.hasOwnProperty(item)) {
        sum += precocompras[item];
    }
}

console.log(Object.keys(precocompras)); console.log(sum)
console.log("")
console.log(JSON.stringify(precocompras)); console.log("Total: R$", sum)

/* to get an array of the keys and values you use Object.entries.
This static method returns an array of two-element arrays, where the first 
element of the inner array is the key and the second is the value. */ 

let chromosomes = {
    koala: 16,
    snail: 24,
    giraffe: 30,
    cat: 38
};
console.log(Object.entries(chromosomes));

console.log("")

/* Combining objects */ 

let physical = { pages: 208, binding: "Hardcover"};
let contents = { genre: "Fiction", subgenre: "Mystery" };
let target = {}; 
console.log("About the book:", Object.assign(target, physical, contents));

let speed = 30;
console.log(`Your current speed is ${speed} mph.`);
if (speed > 25) {
    console.log("Slow down!")
}


let speeed = 20 
console.log(`Your current speed is ${speeed} mph.`);
if (speeed > 25) {
    console.log('Slow down!');
} else if (speeed > 15) {
    console.log("You're driving at a good speed.");
} else {
    console.log("You're driving too slowly.");
}

let spd = 20 
if (speed > 25) { 
    console.log("Slow down!");
} else if (spd > 20) {
    console.log("You're driving at a good speed.");
} else if (spd > 15) {
    console.log("You're driving a little bit too slowly.");
} else if (spd > 10) {
    console.log("You're driving too slowly.")
} else {
    console.log("You're driving far too slowly!")
}

/* without braces -> */

if (speed > 25)
    console.log("Slow down!")
else
    console.log("You're driving under the speed limit.");

if (speed > 25) console.log("Slow down!");
else console.log("You're driving under the speed limit.");

/* Repeating code with loops */ 

/*while (speed = 30) { 
    console.log(`Your current speed is ${speed} mph.`);
speed--;
}
console.log(`Now your speed is ${speed} mph.`)*/

for (let speed = 30; speed > 25; speed --) {
    console.log(`Your current speed is ${speed} mph.`);
}

/* The first line of the for loop has three parts: we set up the initial variable value with let speed = 30, set the condition with speed > 25, and then update the variable in the same line with speed-- to decrement the variable with each loop. You separate each part with a semicolon.
The only difference is that we don't have access to the speed variable outside of the for loop, so we can't log the final speed at the end. This is actually one of the advantages of nfor loops: the looping variable stays within the scope of the loop and can't be accidentally used outside of the loop.
*/ 

/* Looping Over an Array With for... of */ 

let colors = ["Red", "Green", "Blue"];

for (let color of colors) {
    console.log(`${color} is color.`);
}

let primarycolors = ["Red", "Blue", "Yellow"]
let secondarycolors = ["Green: Red + Blue", "Orange: Red + Yellow", "Purple: Blue + Red", "Cyan: Blue + Green", "Magenta: Blue + Red", "Brown: Red + Green", "Yellow-Green: Yellow + Green", "Red-Orange: Red + Orange", "Blue-Green: Blue + Green", "Yellow-Orange: Yellow + Orange" ]
for (let color of primarycolors) {
    console.log(`${color} is a primary color`)
}
for (let color of secondarycolors) { 
    console.log(`${color} is a secondary color`)
}

for (let index = 0; index < colors.length; index++) {
    console.log(`${colors[index]} is a color`)
}

for (let [index, color] of colors.entries()) {
    console.log(`${index}: ${color} is a color`)
}

/* The entries() method gives you a list of elements where each original item is paired with the index of that item. */

naame = ("Vinícius")
for (let[index, letter] of naame.split("").entries()) {
    console.log(`${letter}`);
}

/* for... in loops */ 

/* to loop over the keys in an object you can use a for... in loop.
This works similarly to a for... of loop, but with objects instead of arrays, looping over the keys, not the values. */ 

let me = { 
    firstName: "Nick",
    lastName: "Morgan",
    age: 35
};

for (let key in me) {
    console.log(`My ${key} is ${me[key]}.`);
}

/* functions */ 

function sayHello (name) {
    console.log(`Hello, ${name}!`);
}
sayHello("Nick");

/* the distinction between arguments and parameters can be confusing.
Put simply, the parameters are the names of a function's inputs. 
Each function has only one set of parameters. The arguments are
the actual values passed to the function when you call it, and so every time a function is called it can have a new set of arguments. 
The sayHello function has one parameter, name, but could be called with a different argument each time, for example, sayHello("Mei"), sayHello("JavaScript"), and so on. */ 

function add(x, y) { 
    return x + y;
}
let soma = add(500, 500);
console.log(`I walked ${soma} miles`);
console.log(add(1, "1"));
console.log(add({}, {}));
console.log(123, null);

/*let addCalls = 0; 

function add(x, y) { 
    addCalls++;
    console.log(`x was ${x} and y was ${y}`);
    return x + y;
}

console.log(add(Math.PI, Math.E));
*/

function sayHi() { 
    console.log("Hi!");
}
console.log(setTimeout(sayHi, 2000));

let sayHola = function () {
    console.log("Hola!");
};
sayHola();

/*setInterval(function () {
    console.log("Beep");
}, 21000);*/

let addArrow = (x, y) => { 
    return x + y;
}
console.log(addArrow(2, 2));

/* setInterval *(() => {
    console.log("Beep.");
}, 1000); */ 

let sayBonjour = nome => console.log(`Bonjour, ${nome}!`);
sayBonjour("Nick");


/* a function that takes a number from zero to five and returns the English word for that number. Hint: use an array to define the mapping from number to string. */ 

/*let numbers = (1,2,3,4,5) => {
    return ["one", "two", "three", "four", "five"];
}
console.log(numbers)*/

function numberToWord(number) { 
    const words = ["zero", "one", "two", "three", "four", "five"];

    if (number>= 0 && number <= 5) {
        return words[number];
    } else {
        return "Number out of range";
    }
}

console.log(numberToWord(1));
console.log(numberToWord(3));
console.log(numberToWord(6));

let myColors = (name, ...favoriteColors) => { 
    let colorString = favoriteColors.join(", ");
    console.log(`My name is ${name} and my favorite colors are ${colorString}`);
};
myColors("Nick", "Blue", "Green", "Orange");

/* 
A rest parameter looks like an ordinary parameter preceded by three periods, and it always has to be the last parameter. When the function is called, the rest parameter contains however many arguments come after the regular parameter and bundles them into an array.
In Listing 6-21, name is a regular parameter, and favoriteColors is rest parameter. When we call the function, the argument "Nick" is assigned to the name parameter. The remaining arguments "Blue", "Green", "Orange" are collected together into a single array and assigned to the favoriteColors parameter. Because favoriteColors is an array, we can use the join method to convert the array into a string, which we then combine into a larger string and print using console.log */ 

function sum(...numbers) { 
    let total = 0;
    for (let number of numbers) {
        total += numbers;
    }
    return total;
}
sum(1, 2, 3, 4, 5)

/* A higher-order fuction is a function that takes another function as an argument, or returns another function as it return value. You've already seen two higher-order functions, setTimeout and setInterval, which both take a function as an argument to execute later.
Functions that are passed as arguments are often called callbacks, because they allow the other function to "call back" to the function that was passed in. */ 

let shoppingList = ["Milk", "Sugar", "Bananas", "Ice Cream"];
shoppingList.find(item => item.length > 6);

/* The callback function is item => item.length > 6. This callback uses two useful syntatic features of arrow functions. First, because our function only has one parameter, we're leaving off the parentheses around the parameter list. Second, we're using the concise body syntax, so we leave off the return keyword and the braces around the body. These features let us define the logic for finding the element as compactly as possible, so arrow functions are ideal for callback arguments. */ 

shoppingList.find(item => item[0] === 'A');
/* output: undefined */ 

/* The filter method returns a new array containing all the elements from the original array that satisfy some predicate. */ 

let shoppingListt = ["milk", "bananas", "ice cream"];
shoppingListt.filter(item => item.length > 6);

/* map method */ 

let stockList = [
    { name: "cheese", pricne: 3},
    { name: "bread", price: 1},
    { name: "butter", price: 2}
];
let prices = stockList.map(item => item.price);
prices; 

/* creating functions using Callbacks */ 

function doubler(callback) {
    callback();
    callback();
}
doubler(() => console.log("Hi there"));

/* ------------ */ 

function callMultipleTimes(times, callback) { 
    for (let i = 0; i < times; i++) { 
        callback(i);
    }
}
callMultipleTimes(3, time => console.log(`This was time
${time}`)); 

/* functions that returns functions */ 

/* we'll create a function that always adds some suffix to the end of a string. We want to ocntrol what that suffix is, so outr function will take a suffix and returns a functions that takes a string and appends the suffix. */ 

function makeAppender(suffix) {
    return function (text) { 
        return text + suffix;
    };
}

/* There are two return keywords here. The first is used by the makeAppender function to return the anonymous function. The second return keyword is inside the anonymous function, and returns a value when that function is called. To be able to call the inner function, we first have nto call the outer function. */ 

let exciting = makeAppender("!!!");
console.log(exciting("Hello"));

/* Calling makeAppender("!!!") returns a new function, which is assigned to the exciting variable. The exciting variable now contains the function expression that was returned from makeAppender, which takes a string. When we call exciting("Hello") we get the string "Hello!!!", which is the result of adding the two strings together. 
One important thing to note is that the function we returned from makeAppender remembers the value of suffix. Even though the call to makeAppender has completed, the inner function it returned is able to hold onto a parameter that was in scopoe when it was defined. Functions that hold onto variables and parameters from their enclosing scopes are known as closures, because they "close over" their environments. */ 

/* in the following listing, the body of the while loop is able to access a variable defined outside the loop, but code outside of the loop can't access a variable defined inside the loop: */ 

let outerVariable = 10;

while (outerVariable > 0) { 
    let innerVariable = "hello!";
    outerVariable--;
}

console.log(innerVariable);

/* the body of the while loop can access nouterVariable and increment it down to 0, since it was declared outside of the loop. However, trying to access innerVariable outside the loop results in an error. innerVariable only has scope within the while loop. */ 

/* Write a function called makeWrapper that takes a prefix and a suffix, and returns a new function that takes a string, and returns the string surrounded by the prefix and suffix. For example, you could enter let bracketWrapper = makeWrapper("[", " ]"); and then call bracketWrapper("Bracket Me!"); to get the string "[Bracket Me!" */ 

function makeWrapper(prefix, suffix) { 
    return function (str) {
        return prefix + str + suffix;
    };
}

const bracketWrapper = makeWrapper("[", "]");
const result = bracketWrapper("Bracket Me!");

console.log(result);

/* You learned how to create and work with functions. You saw the four main ways to create functions: function declarations, function expressions, block body arrow functions, and concise body arrow functions. */

/* DOM(Document Object Model) é a representação de dados dos objetos que compõem a estrutura e o conteúdo de um documento na Web. */ 






