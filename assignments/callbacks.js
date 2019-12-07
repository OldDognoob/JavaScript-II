// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  // GIVEN THIS PROBLEM:

  function firstItem(arr, cb) {
    return cb(arr);
    // firstItem passes the first item of the given array to the callback function.
  }

  // SOLUTION:

  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // NOTES ON THE SOLUTION:

  // firstItem is a higher order function.
  // It expects a callback (referred to as `cb`) as its second argument.
  // To test our solution, we can use the given `items` array and a variety of callbacks.
  // Note how callbacks can be declared separately, or inlined.

  // TEST 1 (inlined callback):

  const test1 = firstItem(items, item => `I love my ${item}!`);
  console.log(test1); // "I love my Pencil!"

  // TEST 2 (declaring callback before hand):

  function logExorbitantPrice(article) {
    return `this ${article} is worth a million dollars!`;
  };

  const test2 = firstItem(items, logExorbitantPrice);
  console.log(test2); // "this Pencil is worth a million dollars!"
*/

 
  function testDemo(x,y,cb){
    return cb(x, y);
  }


 // getLength passes the length of the array into the callback.

  function getLength(arr) {
    return arr.length;
  }

 console.log(testDemo(items, "", getLength));






  // last passes the last item of the array into the callback.

   function last(arr) {
     return arr[arr.length-1];
   }

   console.log(testDemo(items, "", last));


 // sumNums adds two numbers (x, y) and passes the result to the callback.
 
   function sumNums(a,b){
     return a+b;
   }

   console.log(testDemo(1,2, sumNums));


 // multiplyNums multiplies two numbers and passes the result to the callback.

function multiplyNums (a,b){
  return a*b;
}

console.log(testDemo(2,3, multiplyNums));


// const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];


    function contains(item, list, cb) {
    
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
    return cb(list.includes(item));
    }

    contains("Notebook", items, console.log);
    
/* STRETCH PROBLEM */

  
   const namesArray =["Samsung", "Nokia", "Ericsson","Apple","Nokia","LG"]
function removeDuplicates(array) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
     const names= array.filter((obj, index, array)=> {
       return index == array.indexOf(obj);
     });

     return names;
}
console.log(testDemo(namesArray, "", removeDuplicates))
