/**
 * JavaScript Basics Workshop - Exercise 2
 * Functions, Parameters & Arguments Object
 */

(function (global) {
    "use strict";

    // TODO: Task 1 - Implement a max function, which accepts one ore more arguments
    function max() {
        var max = arguments[0];
        for (var i = 1, l = arguments.length; i < l; i++) {
            if (max < arguments[i]) {
                max = arguments[i];
            }
        }
        return max;
    }

    // TODO: Task 2.a - Modify the function's signature
    //                  Note: The function accepts another function as first argument
    //                  Note: The function accepts a string value as second argument
    function print(formatFunc, value) {
        // TODO: Task 2.b - Check if the given function is defined, otherwise throw an exception
        if (!formatFunc) {
            throw 'No formatFunc given';
        }
        // TODO: Task 2.c - Call the given function with the given value as parameter and return the result
        return formatFunc(value);
    }

    global.ex2 = global.ex2 || {};
    global.ex2.max = global.ex2.max || max;
    global.ex2.print = global.ex2.print || print;
}(window));