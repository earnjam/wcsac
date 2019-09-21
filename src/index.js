var person = {
  name: 'William',
  greet() {
    console.log('Hello ' + this.name)
  }
}
person.greet() // Hello William

function whatIsThis() {
    console.log(this) // [object Window]
}
whatIsThis();

function greet() {
    console.log( this.name );
}

var person = {
    name: 'William'
};
greet.apply( person, [args]); // William


function greet() {
    console.log( 'Hello ' + this.name );
}

var person = {
    name: 'William'
};

var sayHi = greet.bind( person );
sayHi(); // Hello William
