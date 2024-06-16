/*
let number = prompt("What is your number?");

alert(number > 90 && number < 110 ? "I love you" : `You deserve ${number} billion dollars`);


let firstNumber = Number(prompt("input first number"));
let secondNumber = Number(prompt("input second number"));
let operand = prompt("input operand +, -, *, or /");
let result;

if (firstNumber === "Q" || secondNumber === "Q" || operand === "Q") {
    break;
}


if (!Number.isNaN(firstNumber) && !Number.isNaN(secondNumber)) {

    switch(operand) {
        case "+" : result = firstNumber + secondNumber; break;
        case "-" : result = firstNumber - secondNumber; break;
        case "*" : result = firstNumber * secondNumber; break;
        case "/" : result = firstNumber / secondNumber; break;
        default: result = "Error: invalid operand";
    }
} else {
    result = "Error: at least one of the input values is not a number";
}

alert(`${firstNumber} ${operand} ${secondNumber} = ${result}`);


let contacts = [{
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk"
}, {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com"
}, {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu"
}];

let index = 0;
let last = contacts.length - 1;

if (confirm("show first contact")) {
    alert(`${contacts[0].name} / ${contacts[0].phone} / ${contacts[0].email}`);
};
if (confirm("show last contact")) {
    alert(`${contacts[last].name} / ${contacts[last].phone} / ${contacts[last].email}`);
};
if ("add new contact") {
    let newContact = {
    name : prompt("Enter your name"),
    phone : prompt("Enter your phone number"),
    email : prompt("Enter your email")
    };
    contacts.push(newContact);
};
if ("show all contacts") {
    for (index = 0; index >= 0 && index <= last; index++) {
    last = contacts.length - 1;
    alert(`all contacts: ${contacts[index].name} / ${contacts[index].phone} / ${contacts[index].email}`);
    }
};

last = contacts.length - 1;

alert(`First contact: ${contacts[0].name} / ${contacts[0].phone} / ${contacts[0].email}`);
alert(`Last contact: ${contacts[last].name} / ${contacts[last].phone} / ${contacts[last].email}`);


let istart = prompt("enter starting number", 100);
let istop = prompt("enter stop number", 0);

if (istart > istop){
    for (i = istart; i<= istart && i >= istop; i -= 10) {
    console.log(i);
    }
} else {
    alert("ensure that the initial value is greater than the final value");
}


let numbers = [21, 45, 100, 12, 11, 78, 61, 4, 39, 22];

console.log(numbers);

for (i of numbers) {
    if (i % 2 === 0) {
        console.log(i);
    };
};
for (i of numbers){
    if (i > 10 && i < 60) {
        console.log(i);
    };
}

let movies = [];

while (true) {
    let movie = {
        title: prompt("enter movie title"),
        rating: Number(prompt("enter imdb rating")),
    };

    if (movie.title === null || movie.rating === null) {
        break
    } else {
        movies.push(movie);
    }
}

console.log(movies);

for (i of movies) {
    if (i.rating < 7) {
        console.log(`${i.title} (${i.rating})`);
    }
}

for (i of movies) {
    if (i.rating >= 7) {
        console.log(`${i.title} (${i.rating})`)
    }
}


let vessel = {
    LATITUDE: 40.07288,
    LONGITUDE: 154.48535,
    COURSE: 285.6,
    SPEED: 14.0,
    IMO: 9175717,
    NAME: "MARENO"
}

for(let key in vessel) { 
    console.log(`${key} -> ${vessel[key]}`); 
}


let inner = function() {
     console.log('inner 1');
}
 
let outer = function(callback) {
     console.log('outer 1');
     callback();
     console.log('outer 2');
}
 
console.log('test 1');
outer(inner);
console.log('test 2');


function outer() {
    let name = "outer";
    let str = inner();
    return str;
}
 
function inner() {
    let name = "inner";
    return "Hello !";
}
 
console.log("before outer() call");
console.log(outer());
console.log("after outer() call");


let numbers = [50, 10, 40, 30, 20];
function compareNumbers(a, b) {
     let retVal = 0;
     if (a < b) {
         retVal = -1;
     } else if(a > b) {
         retVal = 1;
     }
     return retVal;
}
let sorted = numbers.sort(compareNumbers);
console.log(sorted); // [10, 20, 30, 40, 50]


let counter = 0; 
let maxValue = 10; 
let result = 1; 
 
debugger; 
for (counter = 0; counter < maxValue; counter++) { 
    console.log(result); 
    if (counter < maxValue && counter > maxValue - 2) {
        break;
    }
    result *= maxValue - counter - 1; 
} 
 
console.log("Final result:", result);


try {

    ocnsole.log("start");

} catch (error) {

    console.log("error");

} finally {

    console.log("end");

}
*/

// let route = {
//     distance: 131,
//     elevation: 1.4
// };

// for (let k in route) {
//     console.log(route[k]);
// }

// live 