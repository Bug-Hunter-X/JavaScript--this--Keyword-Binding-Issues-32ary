# JavaScript 'this' Keyword Binding Issues

This repository demonstrates a common source of confusion in JavaScript: the unpredictable binding of the 'this' keyword.

The `bug.js` file shows how the value of 'this' changes depending on how a function is called.  The `bugSolution.js` file offers solutions to resolve this ambiguity, primarily focusing on using `bind()`, `call()`, and `apply()` to explicitly set the 'this' context.