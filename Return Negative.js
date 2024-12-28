// In this simple assignment you are given a number and have to make it negative. But maybe 
// the number is already negative?

// check if number > 0 then -number else number;

// if normal
function makeNegative(num) {
      num.map( (ele) => {
       ele > 0 ? -ele : ele;
      })

    
  }

  console.log( makeNegative([2, -5 ,-10 , 9 ,12 , 100]));