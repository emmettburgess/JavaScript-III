/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. window binding is outside of a function and becomes global
* 2. implicit binding uses objects within a function
* 3. new binding calls a constructor function
* 4. explicit binding overrides constructor objects and assign new ones
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
var x = this;

// Principle 2

// code example for Implicit Binding
var name = function() {
    return `${this.firstName} ${lastName}`
};

// Principle 3

// code example for New Binding
function Person(greeter) {
    this.greeting = "Hello";
    this.greeter = greeter;
    this.speak =function() {
    console.log(this.greeting + this.greeter);
    console.log(this);
    }
};
const emmett = new Person('Emerson');
const emerson = new Person('Emmett');

emmett.speak();

// Principle 4

// code example for Explicit Binding

emmett.speak.call(emerson);
emerson.speak.apply(emmett);