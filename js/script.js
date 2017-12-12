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
//Display by adding/removing classes

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

let sequenceNumber = 2;
let score = 0;
const tilesArray = ['tile1', 'tile2', 'tile3', 'tile4', 'tile5', 'tile6', 'tile7', 'tile8', 'tile9'];
const generatedSequence = [];
let userSequence = [];
let displayTime = 1000;
const chosen = Math.floor(Math.random() * 9);
let contentsEqual = false;
let lengthEqual = false;
let userCorrect = null;


$(() => {
  //Variables
  const $h1 = ('h1');
  const $body = $('body');
  const $main = $('main');
  const $level = $('.level');
  const $score = $('.score');
  const $lives = $('.lives');
  const $start = $('.start-button');
  const $check = $('.check-button');
  const $restart = $('.restart-button');
  const $tiles = $('.tile');
  const $tileId = $tiles.attr('id');
  const $tile1 = $('#tile1');
  const $tile2 = $('#tile2');
  const $tile3 = $('#tile3');
  const $tile4 = $('#tile4');
  const $tile5 = $('#tile5');
  const $tile6 = $('#tile6');
  const $tile7 = $('#tile7');
  const $tile8 = $('#tile8');
  const $tile9 = $('#tile9');

  //Generate a random sequence of length sequenceNumber and push it to the generatedSequence array
  const determineSequence = () => {
    for (let i = 0; i < sequenceNumber; i++) {
      generatedSequence.push(tilesArray[chosen]);
      //Remove duplicate indexes
      if (generatedSequence[i] === generatedSequence[i + 1] || generatedSequence[i] === generatedSequence[i - 1]) {
        generatedSequence.splice(i, 1);
        generatedSequence.splice(i, 0, tilesArray[Math.floor(Math.random() * 9)]);
        // If the above if statement added another dupliacate replace the duplicate index
        if (generatedSequence[i] === generatedSequence[i + 1] || generatedSequence[i] === generatedSequence[i - 1]) {
          generatedSequence.splice(i, 1);
          generatedSequence.splice(i, 0, tilesArray[Math.floor(Math.random() * 9)]);
          //Triple check for duplicates
          if (generatedSequence[i] === generatedSequence[i + 1] || generatedSequence[i] === generatedSequence[i - 1]) {
            generatedSequence.splice(i, 1);
            generatedSequence.splice(i, 0, tilesArray[Math.floor(Math.random() * 9)]);
          }
        }
      }
      console.log(generatedSequence);
    }
  };
  determineSequence();

  const nextLevelSequence = () => {
    for (let i = 0; i < 1; i++) {
      generatedSequence.push(tilesArray[Math.floor(Math.random() * 9)]);
      console.log(generatedSequence);
      userSequence = [];
    }
  };


  //Display the generated sequence by lighting up the tiles
  const playSequence = () => {
    for (let i = 0; i < generatedSequence.length; i++) {
      // if ($tileId === generatedSequence[i]) {
      //   setTimeout(() => {
      //     $tileId.addClass(`${generatedSequence[i]}-lit`);
      //     setTimeout(() => {
      //       $tileId.removeClass(`${generatedSequence[i]}-lit`);
      //     }, displayTime);
      //   }, displayTime * (i + 1));
      // }
      if (generatedSequence[i] === 'tile1') {
        setTimeout(() => {
          $tile1.addClass(`${generatedSequence[i]}-lit`);
          setTimeout(() => {
            $tile1.removeClass(`${generatedSequence[i]}-lit`);
          }, displayTime);
        }, displayTime * (i + 1));
      }
      if (generatedSequence[i] === 'tile2') {
        setTimeout(() => {
          $tile2.addClass(`${generatedSequence[i]}-lit`);
          setTimeout(() => {
            $tile2.removeClass(`${generatedSequence[i]}-lit`);
          }, displayTime);
        }, displayTime * (i + 1));
      }
      if (generatedSequence[i] === 'tile3') {
        setTimeout(() => {
          $tile3.addClass(`${generatedSequence[i]}-lit`);
          setTimeout(() => {
            $tile3.removeClass(`${generatedSequence[i]}-lit`);
          }, displayTime);
        }, displayTime * (i + 1));
      }
      if (generatedSequence[i] === 'tile4') {
        setTimeout(() => {
          $tile4.addClass(`${generatedSequence[i]}-lit`);
          setTimeout(() => {
            $tile4.removeClass(`${generatedSequence[i]}-lit`);
          }, displayTime);
        }, displayTime * (i + 1));
      }
      if (generatedSequence[i] === 'tile5') {
        setTimeout(() => {
          $tile5.addClass(`${generatedSequence[i]}-lit`);
          setTimeout(() => {
            $tile5.removeClass(`${generatedSequence[i]}-lit`);
          }, displayTime);
        }, displayTime * (i + 1));
      }
      if (generatedSequence[i] === 'tile6') {
        setTimeout(() => {
          $tile6.addClass(`${generatedSequence[i]}-lit`);
          setTimeout(() => {
            $tile6.removeClass(`${generatedSequence[i]}-lit`);
          }, displayTime);
        }, displayTime * (i + 1));
      }
      if (generatedSequence[i] === 'tile7') {
        setTimeout(() => {
          $tile7.addClass(`${generatedSequence[i]}-lit`);
          setTimeout(() => {
            $tile7.removeClass(`${generatedSequence[i]}-lit`);
          }, displayTime);
        }, displayTime * (i + 1));
      }
      if (generatedSequence[i] === 'tile8') {
        setTimeout(() => {
          $tile8.addClass(`${generatedSequence[i]}-lit`);
          setTimeout(() => {
            $tile8.removeClass(`${generatedSequence[i]}-lit`);
          }, displayTime);
        }, displayTime * (i + 1));
      }
      if (generatedSequence[i] === 'tile9') {
        setTimeout(() => {
          $tile9.addClass(`${generatedSequence[i]}-lit`);
          setTimeout(() => {
            $tile9.removeClass(`${generatedSequence[i]}-lit`);
          }, displayTime);
        }, displayTime * (i + 1));
      }
    }
  };


  //Log the user's sequence in userSequence
  $tiles.on('click', (e) => {
    const id = $(e.target).attr('id');
    setTimeout(() => {
      $(e.target).addClass(`${id}-lit`);
      setTimeout(() => {
        $(e.target).removeClass(`${id}-lit`);
      }, 600);
    }, 0);
    userSequence.push(id);
    console.log(userSequence);
  });

  //Compare user sequence to generated sequence - Length
  const compareArrayLength = () => {
    if ((generatedSequence.length === userSequence.length) === true) {
      console.log('User length correct');
      lengthEqual = true;
    } else {
      console.log('User length wrong');
    }
  };

  //Compare user sequence to generated sequence - Contents
  const compareArrayContents = () => {
    for (let i = 0; i < generatedSequence.length; i++) {
      if (!(generatedSequence[i] === userSequence[i])){
        contentsEqual = false;
        console.log('User index wrong');
      } else {
        contentsEqual = true;
        console.log('User index correct');
      }
    }
  };

  //Check if both the contents and length are equal
  const checkUserSequence = () => {
    //If equal
    if (lengthEqual && contentsEqual === true) {
      console.log('User sequence is correct');
      userCorrect = true;
      console.log(userCorrect);
      sequenceNumber++; //Add one to the sequence length and to the level
      $level.html(`Level ${sequenceNumber - 1}`); //Display the new level
      nextLevelSequence(); //Add a random tile to the sequence
      score = score + (100 * `1.${sequenceNumber}`); //Increase score by 130, increasing by 10 every level
      $score.html(`Score ${score}`); //Display the new score
      displayTime = displayTime - 100;
    //If not equal
    } else {
      console.log('User sequence is wrong');
      userCorrect = false;
      console.log(userCorrect);
    }
  };

  //When start button is clicked display the generated sequence
  $start.on('click', () => {
    playSequence();
  });

  //When check button is clicked check both the array contents and length are equal
  $check.on('click', () => {
    console.log(`Generated: ${generatedSequence}`);
    console.log(`Generated: ${userSequence}`);
    compareArrayLength();
    compareArrayContents();
    checkUserSequence();
  });

  //Display current level and score
  $level.html(`Level ${sequenceNumber - 1}`);
  $score.html(`Score ${score}`);

});
