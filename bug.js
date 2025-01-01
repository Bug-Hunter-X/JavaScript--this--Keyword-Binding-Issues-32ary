function myFunc() {
  console.log(this);
}

myFunc(); // this will log the global object (window in browsers, undefined in strict mode)

const obj = { myFunc };
obj.myFunc(); // this will log the object obj

const arr = [myFunc];
arr[0](); // this will log the global object (window in browsers, undefined in strict mode)