//Create a function that takes an integer as an argument and returns 
// "Even" for even numbers or "Odd" for odd numbers.

//check if >> true "Even" false "Odd"

// one way

// function evenOrOdd(number) {
  
//       if( number % 2 === 0 ){
//         return "Even";
//       } 
//       else{
//         return "Odd";
//       }
//     }
//     console.log(evenOrOdd(100));

    // two way

 function evenOrOdd(number) {
      return number % 2 === 0 ? "Even": "Odd";
}
console.log(evenOrOdd(5));
