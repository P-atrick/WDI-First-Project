//Local Storage
localStorage.setItem('score', 0);

//Variables
let contentsEqual = false;
let displayTime = 700;
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
              if (generatedSequence[i] === generatedSequence[i + 1] || generatedSequence[i] === generatedSequence[i - 1]) {
                spliceDuplicates();
              }
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
              if (generatedSequence[i] === generatedSequence[i - 1]) {
                spliceDuplicates();
              }
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
  const $tileId = $('.tile').attr('id');
  const $tile1 = $('#tile1');
  const $tile2 = $('#tile2');
  const $tile3 = $('#tile3');
  const $tile4 = $('#tile4');
  const $tile5 = $('#tile5');
  const $tile6 = $('#tile6');
  const $tile7 = $('#tile7');
  const $tile8 = $('#tile8');
  const $tile9 = $('#tile9');
  const $storedScore = localStorage.getItem('score');

  //Reset everything to start a new game
  const restart = () => {
    sequenceNumber = 2; //Set sequence number to 2 / Level to 1
    $level.html(`Level ${sequenceNumber - 1}`); //Display the new level
    score = 0; //Set score to 0
    $score.html(`Score ${score}`); //Display the new score
    lives = 3; //Set lives to 3
    $lives.html(`Lives ${lives}`); //Display the new lives
    generatedSequence = []; //Clear the generated sequence
    userSequence = []; //Clear the user sequence
    displayTime = 700;
    console.log(generatedSequence);
    console.log(userSequence);
    determineSequence();
  };

  //Display the generated sequence by lighting up the tiles
  const playSequence = () => {
    for (let i = 0; i < generatedSequence.length; i++) {
      for (let j = 0; j < tilesArray.length; j++) {
        if (generatedSequence[i] === tilesArray[j]) {
          const $chosenId = $(`#${tilesArray[j]}`);
          setTimeout(() => {
            $chosenId.addClass(`${generatedSequence[i]}-lit`);
            setTimeout(() => {
              $chosenId.removeClass(`${generatedSequence[i]}-lit`);
            }, displayTime);
          }, displayTime * (i + 1));
        }
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

  //Make the sequence be displayed more quickly at higher levels, speed increase becomes less severe as it gets faster
  const reduceTime = () => {
    if (displayTime <=200) {
      displayTime = displayTime - 20;
    } else if (displayTime <=300) {
      displayTime = displayTime - 40;
    } else if (displayTime <= 500){
      displayTime = displayTime - 80;
    } else if (displayTime <= 1000) {
      displayTime = displayTime - 100;
    }
  };

  //Add one to the sequence length and to the level. Display new level
  const newLevel = () => {
    sequenceNumber++;
    $level.html(`Level ${sequenceNumber - 1}`);
  };

  //Increase score by 100 with a multiplier of the length of the sequence. Display new score
  const newScore = () => {
    score = score + (100 * `1.${sequenceNumber}`);
    $score.html(`Score ${score}`);
  };

  const removeLives = () => {
    //Remove 1 life
    lives = lives - 1;
    //When the user has no lives left
    //Remove the play and check buttons
    //Show the restart button
    if (lives === 0) {
      $playCheck.css('display', 'none');
      $restart.css('display', 'block');
    }
    //Display the number of lives left
    $lives.html(`Lives ${lives}`);
  };

  //Make score turn green and bounce
  const scoreAnimate = () => {
    setTimeout(() => {
      $score.addClass('animated rubberBand-green');
      setTimeout(() => {
        $score.removeClass('animated rubberBand-green');
      }, 1200);
    }, 0);
  };

  //Make lives red and shake
  const livesAnimate = () => {
    setTimeout(() => {
      $lives.addClass('animated tada-red');
      setTimeout(() => {
        $lives.removeClass('animated tada-red');
      }, 1300);
    }, 0);
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
      scoreAnimate(); //Make score turn green and bounce
    } else { //If not equal
      console.log('User sequence is wrong');
      userCorrect = false;
      userSequence = []; //Clear the user sequence so they can try again
      removeLives(); //Remove 1 life, if 0 allow user to restart
      livesAnimate(); //Make lives red and shake
    }
  };

  //Add and remove an overlay that prevents the user from clicking
  const preventClick = () => {
    setTimeout(() => {
      $main.addClass('overlay');
      setTimeout(() => {
        $main.removeClass('overlay');
      }, displayTime * (sequenceNumber + 1));
    }, 0);
  };


  //BUTTON CLICKS

  //When play button is clicked
  $play.on('click', () => {
    //Prevent clicking while sequence plays
    preventClick();
    //Display generated sequence
    playSequence();
    //Disable the play button
    $play.attr('disabled','disabled');
    //Enable the check button
    $check.removeAttr('disabled');
    //Clear user sequence
    userSequence = [];
  });

  //When check button is clicked
  $check.on('click', () => {
    //Log sequences
    console.log(`Generated: ${generatedSequence}`);
    console.log(`User: ${userSequence}`);
    //Check arrays are the same length
    compareArrayLength();
    //Check arrays have the same contents
    compareArrayContents();
    //Check both length and contents are the same at the same time
    checkUserSequence();
    //Disable the check button
    $check.attr('disabled','disabled');
    //Enable the play button
    $play.removeAttr('disabled');
    if (userCorrect === false) {
      $check.removeAttr('disabled');
      $play.attr('disabled','disabled');
    }
  });

  //When restart button is clicked
  $restart.on('click', () => {
    //Run restart function
    restart();
    //Show play and check buttons
    $playCheck.css('display', 'flex');
    //Remove restart button
    $restart.css('display', 'none');
    //Allow user to click play again
    $play.removeAttr('disabled');
    //Prevent user clicking check
    $check.attr('disabled','disabled');
  });

  //Display current level, score and lives
  $level.html(`Level ${sequenceNumber - 1}`);
  $score.html(`Score ${score}`);
  $lives.html(`Lives ${lives}`);

});
