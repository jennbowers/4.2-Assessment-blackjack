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
    } else if (hand[i] !== 'A'){
      parseInt(hand[i], 10);
      handArray.push(parseInt(hand[i], 10));
      console.log(handArray);
    }

  }
  for (i = 0; i < handArray.length; i++) {
    totalForA = handArray[i] + totalForA
  }
  console.log(totalForA);

  for (var i = 0; i < hand.length; i++) {
    if (hand[i] === 'A') {
      if (totalForA <= 19) {
        hand[i] = '11';
        parseInt(hand[i], 10);
        handArray.push(parseInt(hand[i], 10));
        console.log(handArray);
      } else {
        hand[i] = '1'
        parseInt(hand[i], 10);
        handArray.push(parseInt(hand[i], 10));
        console.log(handArray);
      }
    } else if (hand[i] !== 'A'){
      return totalForA;
    }
    for (i = 0; i < handArray.length; i++) {
      finalTotal = handArray[i] + finalTotal;
    }
  }


  console.log(finalTotal);


  return finalTotal;
}





/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
