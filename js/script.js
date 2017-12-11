//Pseudocode

//Game start
//Set sequenceNumber to 1 (level 1)
//Create array containing all tiles tilesArray
//Create empty array for randomly generated sequence generatedSequence
//Create empty array for user inputted sequence userSequence
//Loop over all tiles tilesArray
//Randomly choose tiles
//Push to generatedSequence
//Display generatedSequence sequence on tiles
//Loop over generatedSequence
//Display index[0], setTimeout(1s), display index [1], setTimeout(1s), display index [2].........
//Display by toggling classes
//End computers turn
//Reset board

//Allow user input
//User is repeating sequence
//On click, push clicked tile to userSequence array

//Check user sequence is correct
//When userSequence.length === sequence number
//Loop over generatedSequence and userSequence
//Compare the indexes
//If indexes are equal user sequence is correct
//sequenceNumber + 1
//Level + 1
//Score + 1
//Reduce setTimeout by 0.1s
//Reset board
//Repeat lines 9 to 30

//If indexes are not equal then user sequence is wrong
//User lost
//End game
console.log('JS loaded');

$(() => {
  //toggleClass test - Successful
  const $tile1 = $('.tile1');
  $tile1.on('click', () => {
    $tile1.toggleClass('tile1-lit');
  });

});
