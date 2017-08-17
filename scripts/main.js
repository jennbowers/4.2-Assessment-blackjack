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
      handArray.push(10);
    } else if (hand[i] === 'A') {
      for (var j = 0; j < handArray.length; j++) {
        totalForA += handArray[j];
      }
      if (totalForA <= 10) {
        handArray.push(11);
      } else if (totalForA > 9){
        handArray.push(1);
      }
    } else {
      handArray.push(parseInt(hand[i], 10));
    }
  }

  for (i = 0; i < handArray.length; i++) {
    total += handArray[i];
  }
  
  console.log(total);

  return total;
}
