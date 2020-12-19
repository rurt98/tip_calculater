var person = {
    firstname: 'Rafael',
    lastname: 'Torres',
    getFullName: function() {
        
        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;
        
    }
}

var logName = function(lang1, lang2) {

    console.log('Logged: ' + this.getFullName());
    console.log('Arguments: ' + lang1 + ' ' + lang2);
    console.log('-----------');
    
}

var logPersonName = logName.bind(person);
logPersonName('en');


logName.call(person, 'en', 'do');
logName.apply(person, ['en', 'es']);

(function(lang1, lang2) {

    console.log('Logged: ' + this.getFullName());
    console.log('Arguments: ' + lang1 + ' ' + lang2);
    console.log('-----------');
    
}).apply(person, ['es', 'es']);

// function borrowing
var person2 = {
    firstname: 'Uriel',
    lastname: 'Torres'
}

console.log(person.getFullName.apply(person2));


var person3 = {
    firstname: 'Uriel',
    lastname: 'Rodriguez'
}

console.log(person.getFullName.apply(person3));

// function currying
function multiply(a, b, c) {
    return a*b*c;
}

var multipleByTwo = multiply.bind(this, 2);
console.log(multipleByTwo(4, 2));

var multipleByThree = multiply.bind(this, 3);
console.log(multipleByThree(4, 2));