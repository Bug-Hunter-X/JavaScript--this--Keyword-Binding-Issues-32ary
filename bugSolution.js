function myFunc() {
  console.log(this);
}

// Using bind to explicitly set the 'this' value
const boundFunc = myFunc.bind({ name: "Bound Object" });
boundFunc(); // this will now log { name: "Bound Object" }

const obj = { myFunc };

// Using call to invoke the function with a specific 'this' value
obj.myFunc.call({ name: "Called Object" }); // logs { name: "Called Object" }

// Using apply to invoke the function with a specific 'this' value and arguments as an array
obj.myFunc.apply({ name: "Applied Object" }, []);// logs { name: "Applied Object" }

const arr = [myFunc];

// Using bind with an arrow function to maintain the correct 'this' context
arr.forEach(func => func.bind({ name: "Arrow Function" })()); // logs { name: "Arrow Function" } for each element