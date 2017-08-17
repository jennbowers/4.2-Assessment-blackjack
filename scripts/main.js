/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/



function handValue (hand) {
  var handArray = [];
  var total = 0;
  var totalForA = 0;
  for (var i = 0; i < hand.length; i++) {
    if (hand[i] === 'J' || hand[i] === 'Q' || hand[i] === 'K') {
      hand[i] = '10';
      parseInt(hand[i], 10);
      handArray.push(parseInt(hand[i], 10));
      console.log(handArray);
    } else if (hand[i] === 'A') {
      for (var j = 0; j < handArray.length; j++) {
        totalForA = handArray[j] + totalForA;
      }
      console.log(totalForA);
      if (totalForA <= 10) {
        hand[i] = '11';
        parseInt(hand[i], 10);
        handArray.push(parseInt(hand[i], 10));
        console.log(handArray);
      } else if (totalForA > 9){
        hand[i] = '1';
        parseInt(hand[i], 10);
        handArray.push(parseInt(hand[i], 10));
        console.log(handArray);
      }
    } else {
      parseInt(hand[i], 10);
      handArray.push(parseInt(hand[i], 10));
      console.log(handArray);
    }
  }

  for (var k = 0; k < handArray.length; k++) {
    total = handArray[k] + total;
  }
  console.log(total);



  return total;
}



// THIS DIDN'T WORK

/*function handValue (hand) {
  var handArray = [];
  var total = 0;
  // var totalForA = 0;
  for (var i = 0; i < hand.length; i++) {
    if (hand[i] === 'J' || hand[i] === 'Q' || hand[i] === 'K') {
      hand[i] = '10';
      parseInt(hand[i], 10);
      handArray.push(parseInt(hand[i], 10));
      // console.log(handArray);
      for (i = 0; i < handArray.length; i++) {
        total = handArray[i] + total
      }
      // console.log(total);
    } else if (hand[i] === 'A') {
      if (total <= 19) {
        hand[i] = '11';
        parseInt(hand[i], 10);
        handArray.push(parseInt(hand[i], 10));
        // console.log(handArray);
        for (i = 0; i < handArray.length; i++) {
          total = handArray[i] + total;
        }
      } else {
        hand[i] = '1'
        parseInt(hand[i], 10);
        handArray.push(parseInt(hand[i], 10));
        // console.log(handArray);
        for (i = 0; i < handArray.length; i++) {
          total = handArray[i] + total;
        }
      }
    } else {
      parseInt(hand[i], 10);
      handArray.push(parseInt(hand[i], 10));
      // console.log(handArray);
      for (i = 0; i < handArray.length; i++) {
        total = handArray[i] + total
      }
    }
  }

  console.log(handArray)
  console.log(total);
  return total;
}
*/



/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
