// Question 1 : Create one function with zero parameter having a console statement;
function hello() {
    console.log("monday");
}

hello();

// Questtion 2 - Create one function which takes two values as a parameter and print the sum of them as "Sum of 3, 4 is 7"

function Add(a,b) {
    console.log(a+b);
}
Add(10,12);

//Question 3 - Create one arrow function:

const Multiply = (a,b) => {
    console.log(a*b);
}
Multiply(8,9);

// Question 4 - "Print output: 
var y = 21;
var girl = function () {
    console.log(y);

};
girl ();

// Soln: Undefined

// Question 5 - "Print output: 
var z = 21;
girl ();
console.log(z)
function girl() {
    console.log(z);
    var z = 20;
};

// Soln: 21

// Question 6 - "Print output

var X = 21;
a();
b();
console.log(a);
a = function() {
    
   X = 20;
  console.log(r);
};
b = function() {
    
    X = 40;
   console.log(X);
};

// Soln: ReferenceError: a not defined

// Question 7 - Write a function that accepts parameter n and returns factorial of n


function factorial(n){
  let f = 1;
  for(let i=1; i<=n ; i++)
  {
    f= f*i;
  }
  console.log(f);
}
factorial(5);
Footer
