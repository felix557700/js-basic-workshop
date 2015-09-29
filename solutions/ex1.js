/**
 * JavaScript Basics Workshop - Exercise 1
 * Objects, Arrays, Regexp & Exceptions
 */

(function (global) {

    "use strict";

    // TODO Exercise 1.1 - Return an object containing the following properties:
    //                     - a valid, finite number
    //                     - a non-empty string
    //                     - a boolean property
    //                     - a non-empty array
    //                     - another object
    //                     - a function
    function exercise11() {
        return {
            myNumber: 42,
            myString: 'hello',
            myBoolean: true,
            myArray: [1, 2, 3],
            myObject: {},
            myFunction: function () {
            }
        };
    }

    // TODO Exercise 1.2 - Use the standard array methods to:
    //                     - reverse the array
    //                     - append the original array length as element at the end
    //                     - then sort the array
    function exercise12(array) {
        array.reverse();
        array.push(array.length);
        array.sort();
    }

    // TODO Exercise 1.3 - Return a RegExp which matches the string 'sam'
    function exercise13() {
        return /sam/;
    }

    // TODO Exercise 1.4 - Throw an exception object with a name and message property
    function exercise14() {
        throw {
            name: 'MyName',
            message: 'my message'
        };
    }

    global.ex1 = global.ex1 || {};
    global.ex1.exercise11 = global.ex1.exercise11 || exercise11;
    global.ex1.exercise12 = global.ex1.exercise12 || exercise12;
    global.ex1.exercise13 = global.ex1.exercise13 || exercise13;
    global.ex1.exercise14 = global.ex1.exercise14 || exercise14;
}(window));