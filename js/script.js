//Variables
let contentsEqual = false;
let displayTime = 900;
let generatedSequence = [];
let lengthEqual = false;
let lives = 3;
let score = 0;
let sequenceNumber = 2;
const tilesArray = ['tile1', 'tile2', 'tile3', 'tile4', 'tile5', 'tile6', 'tile7', 'tile8', 'tile9'];
let userCorrect = null;
let userSequence = [];

//Generate a random sequence of length sequenceNumber and push it to the generatedSequence array
const determineSequence = () => {
  for (let i = 0; i < sequenceNumber; i++) {
    const spliceDuplicates = () => {
      generatedSequence.splice(i, 1);
      generatedSequence.splice(i, 0, tilesArray[Math.floor(Math.random() * 9)]);
    };
    generatedSequence.push(tilesArray[Math.floor(Math.random() * 9)]);
    //Remove and replace duplicate tiles
    if (generatedSequence[i] === generatedSequence[i + 1] || generatedSequence[i] === generatedSequence[i - 1]) {
      spliceDuplicates();
      if (generatedSequence[i] === generatedSequence[i + 1] || generatedSequence[i] === generatedSequence[i - 1]) {
        spliceDuplicates();
        if (generatedSequence[i] === generatedSequence[i + 1] || generatedSequence[i] === generatedSequence[i - 1]) {
          spliceDuplicates();
          if (generatedSequence[i] === generatedSequence[i + 1] || generatedSequence[i] === generatedSequence[i - 1]) {
            spliceDuplicates();
            if (generatedSequence[i] === generatedSequence[i + 1] || generatedSequence[i] === generatedSequence[i - 1]) {
              spliceDuplicates();
            }
          }
        }
      }
    }
    console.log(generatedSequence);
  }
};
determineSequence();

//Push a new tile to the generated sequence
const nextLevelSequence = () => {
  for (let i = 0; i < 1; i++) {
    const spliceDuplicates = () => {
      generatedSequence.splice(i, 1);
      generatedSequence.splice(i, 0, tilesArray[Math.floor(Math.random() * 9)]);
    };
    generatedSequence.push(tilesArray[Math.floor(Math.random() * 9)]);
    //Remove and replace duplicate tiles
    if (generatedSequence[i] === generatedSequence[i - 1]) {
      spliceDuplicates();
      if (generatedSequence[i] === generatedSequence[i - 1]) {
        spliceDuplicates();
        if (generatedSequence[i] === generatedSequence[i - 1]) {
          spliceDuplicates();
          if (generatedSequence[i] === generatedSequence[i - 1]) {
            spliceDuplicates();
            if (generatedSequence[i] === generatedSequence[i - 1]) {
              spliceDuplicates();
            }
          }
        }
      }
    }
    console.log(generatedSequence);
    userSequence = []; //Clear the user sequence
  }
};

$(() => {
  //$Variables
  const $body = $('body');
  const $check = $('.check-button');
  const $h1 = ('h1');
  const $level = $('.level');
  const $lives = $('.lives');
  const $main = $('main');
  const $restart = $('.restart-button');
  const $score = $('.score');
  const $play = $('.play-button');
  const $playCheck = $('.play-check-button-wrapper');
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

  const restart = () => {
    sequenceNumber = 2; //Set sequence number to 2 / Level to 1
    $level.html(`Level ${sequenceNumber - 1}`); //Display the new level
    score = 0; //Set score to 0
    $score.html(`Score ${score}`); //Display the new score
    lives = 3; //Set lives to 3
    $lives.html(`Lives ${lives}`); //Display the new lives
    generatedSequence = []; //Clear the generated sequence
    userSequence = []; //Clear the user sequence
    console.log(generatedSequence);
    console.log(userSequence);
    determineSequence();
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
      lengthEqual = true;
    }
  };

  //Compare user sequence to generated sequence - Contents
  const compareArrayContents = () => {
    for (let i = 0; i < generatedSequence.length; i++) {
      if (!(generatedSequence[i] === userSequence[i])){
        contentsEqual = false;
      } else {
        contentsEqual = true;
      }
    }
  };

  const reduceTime = () => {
    if (displayTime <=300) {
      displayTime = displayTime - 25;
    } else if (displayTime <= 500){
      displayTime = displayTime - 50;
    } else if (displayTime <= 900) {
      displayTime = displayTime - 100;
    }
  };

  const newLevel = () => {
    sequenceNumber++; //Add one to the sequence length and to the level
    $level.html(`Level ${sequenceNumber - 1}`); //Display the new level
  };

  const newScore = () => {
    score = score + (100 * `1.${sequenceNumber}`); //Increase score by 130, increasing by 10 every level
    $score.html(`Score ${score}`); //Display the new score
  };

  const removeLives = () => {
    lives = lives - 1; //Remove 1 life
    //When the user has no lives left
    //Remove the play and check buttons
    //Show the restart button
    if (lives === 0) {
      $playCheck.css('display', 'none');
      $restart.css('display', 'block');
    }
    $lives.html(`Lives ${lives}`); //Display the number of lives left
  };

  //Check if both the contents and length are equal and run functions to adjust variables as required
  const checkUserSequence = () => {
    if (lengthEqual && contentsEqual === true) { //If equal
      console.log('User sequence is correct');
      userCorrect = true;
      newLevel(); //Increase sequence number and level by 1. Display new level
      nextLevelSequence(); //Add a random tile to the sequence
      newScore(); //Increase score. Display new score
      reduceTime(); //Increase speed at which sequence is displayed
    } else { //If not equal
      console.log('User sequence is wrong');
      userCorrect = false;
      userSequence = []; //Clear the user sequence so they can try again
      removeLives(); //Remove 1 life, if 0 allow user to restart
    }
  };

  //BUTTON CLICKS
  //When play button is clicked display the generated sequence
  //Disable the play button
  //Enable the check button
  $play.on('click', () => {
    playSequence();
    $play.attr('disabled','disabled');
    $check.removeAttr('disabled');
  });

  //When check button is clicked check both the array contents and length are equal
  //Disable the check button
  //Enable the play button
  //If user was wrong re-enable the check button and diable the play button
  $check.on('click', () => {
    console.log(`Generated: ${generatedSequence}`);
    console.log(`User: ${userSequence}`);
    compareArrayLength();
    compareArrayContents();
    checkUserSequence();
    $check.attr('disabled','disabled');
    $play.removeAttr('disabled');
    if (userCorrect === false) {
      $check.removeAttr('disabled');
      $play.attr('disabled','disabled');
    }
  });

  //When restart button is clicked trigger restart function
  //Display play and check buttons, remove restart button
  $restart.on('click', () => {
    restart();
    $playCheck.css('display', 'flex');
    $restart.css('display', 'none');
    $play.removeAttr('disabled');
    $check.attr('disabled','disabled');
  });

  //Display current level, score and lives
  $level.html(`Level ${sequenceNumber - 1}`);
  $score.html(`Score ${score}`);
  $lives.html(`Lives ${lives}`);

});
