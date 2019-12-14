// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items =["Pencil","Notebook","yo-yo","Gum"];

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
      return cb(x,y);
    }
     
 // getLength passes the length of the array into the callback.

   function getLength(arr,cb){
     return cb(arr.length);
   }
   getLength(items,Length =>{console.log(`length of the array is ${Length}.`)});
  //  console.log(testDemo(items,"",getLength));

  // last passes the last item of the array into the callback.

   function last(arr,cb){
     return cb(arr[arr.length-1]);
   }
   last(items,last =>{console.log(`last item of the array is ${last}.`)});
  //  console.log(testDemo(items,"",last));
 // sumNums adds two numbers (x, y) and passes the result to the callback.
 
  function sumNums(a,b,cb){
    let sum = a+b;
    return cb(sum);
  }
  sumNums(2,3,sumNums => {console.log(`sum is ${sumNums}.`)});
  // console.log(testDemo(2,3,sumNums));


 // multiplyNums multiplies two numbers and passes the result to the callback.

 function multiplyNums(a,b,cb){
   let total=a*b;
   return cb(total);
 }
 multiplyNums(3,5,multiplyNums=>{console.log(`multiply is ${multiplyNums}.`)});
// console.log(testDemo(3,4,multiplyNums));


// const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

  //  function contains(item,list,cb){
  //    return cb(list.includes(item));
  //  }
  //  contains("Notebook",items,console.log);

  
   
    
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
    
    
/* STRETCH PROBLEM */

  // const namesArray=["PANASONIC","APPLE","SONY","NOKIA","APPLE"];
  
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  
  function removeDuplicates(array){
    const names = array.filter((obj,index,array)=>{
      return index === array.indexOf(obj);
    })
    return names;
  }
  console.log(testDemo(items,"",removeDuplicates));

  