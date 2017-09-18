/**
 *   @author Bates, Howard (hbates@northmen.org)
 *   @version 0.0.1
 *   @summary Code demonstrating basic file layout || created: 04.27.2017
 *   @todo Nothing
 */

"use strict";
const PROMPT = require('readline-sync');

// ----Above this line is section 1, comment header block & pragmas/library calls----

let var1, var2;
const CONST1 = 'Something';

// ----Above this line is section 2, global variable declarations & global constant declarations/assignments----

/**
 * The dispatch method for our program
 * @returns {null}
 */
function main() {
    setVar1();
    setVar2();
}

main();

// ----Above this line is section 3, dispatch method & call to dispatch method----

/**
 * var1 mutator
 * @returns {null}
 */
function setVar1() {
    var1 = PROMPT.question(`\nPlease enter value: `);
}

/**
 * var2 mutator
 * @returns {null}
 */
function setVar2() {
    var2 = 0;
}

// ----Above this line is section 4, mutator & worker/utility methods----

/*
 Demonstrating very basic code layout following a four-section model for ease of learning.
 Topics: Creating a new project, code layout, pragma, .gitignore, .eslintrc, importing into Git & GitHub
 */