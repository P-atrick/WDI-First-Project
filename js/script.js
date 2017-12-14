//Variables
let contentsEqual = false;
let displayTime = 700;
let generatedSequence = [];
let lengthEqual = false;
let lives = 3;
let score = 0;
let sequenceNumber = 2; //At level one sequence should contain 2 tiles
const tilesArray = ['tile1', 'tile2', 'tile3', 'tile4', 'tile5', 'tile6', 'tile7', 'tile8', 'tile9'];
let userCorrect = null;
let userSequence = [];

//Generate a random sequence of length sequenceNumber and push it to the generatedSequence array
const determineSequence = () => {
  for (let i = 0; i < sequenceNumber; i++) {
    //Splice out the index, splice in a new random index from tilesArray
    //Push a random index from tilesArray to the generatedSequence array
    generatedSequence.push(tilesArray[Math.floor(Math.random() * 9)]);
  }
};
determineSequence();

//Push a new tile to the generated sequence
const nextLevelSequence = () => {
  for (let i = 0; i < 1; i++) {
    //Push a random index from tilesArray to the generatedSequence array
    generatedSequence.push(tilesArray[Math.floor(Math.random() * 9)]);
    userSequence = [];
  }
};

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

$(() => {
  //$Variables
  const $audio = $('#audio').get(0);
  const $check = $('.check-button');
  const $instructionsText = $('.instructions-text');
  const $instructionsOverlay = $('.instructions-overlay');
  const $level = $('.level');
  const $lives = $('.lives');
  const $main = $('main');
  const $restart = $('.restart-button');
  const $score = $('.score');
  const $play = $('.play-button');
  const $playCheck = $('.play-check-button-wrapper');
  const $tiles = $('.tile');

  //Display instructions when hovering over 'Instructions'
  const displayInstructions = () => {
    $instructionsOverlay.css('display', 'block');
    $instructionsText.css('color', '#5CA4A9');
  };
  const removeInstructions = () => {
    $instructionsOverlay.css('display', 'none');
    $instructionsText.css('color', '#F4F1BB');
  };
  $instructionsText.hover(displayInstructions, removeInstructions);

  //Reset everything to start a new game
  const restart = () => {
    sequenceNumber = 2;
    $level.html(`Level ${sequenceNumber - 1}`);
    score = 0;
    $score.html(`Score ${score}`);
    lives = 3;
    $lives.html(`Lives ${lives}`);
    generatedSequence = [];
    userSequence = [];
    displayTime = 700;
    determineSequence();
  };

  //Display the generated sequence by lighting up the tiles
  const playSequence = () => {
    //Loop over generatedSequence array
    for (let i = 0; i < generatedSequence.length; i++) {
      //Loop over tilesArray array
      for (let j = 0; j < tilesArray.length; j++) {
        //If a tile has been chosen twice in a row replace the second occurrence
        if (generatedSequence[i] === generatedSequence[i - 1]) {
          generatedSequence.splice(i, 1);
          generatedSequence.splice(i, 0, tilesArray[Math.floor(Math.random() * 9)]);
        }
        //If the index in generatedSequence is equal to an index in tilesArray
        //$chosenId is equal to a tile id equal to the id's used in index.html, eg #tile1, #tile2...
        if (generatedSequence[i] === tilesArray[j]) {
          const $chosenId = $(`#${tilesArray[j]}`);
          //Add lit class then remove lit class to the tile with that id after set time
          //Time increases every loop so as to display in order, not all at the same time
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
    // set id variable to = the id from the clicked tile
    const id = $(e.target).attr('id');
    //Add lit class then remove lit class from the tile after 0.6s
    setTimeout(() => {
      $(e.target).addClass(`${id}-lit`);
      setTimeout(() => {
        $(e.target).removeClass(`${id}-lit`);
      }, 600);
    }, 0);
    userSequence.push(id);
  });

  //Play win sound
  const winSound = () => {
    $audio.src = 'sounds/glassbell.wav';
    $audio.play();
  };

  //Play fail sound
  const failSound = () => {
    $audio.src = 'sounds/wrong.mp3';
    $audio.play();
  };

  //Add 1 to the sequence length and thus to the level. Display new level
  const newLevel = () => {
    sequenceNumber++;
    $level.html(`Level ${sequenceNumber - 1}`);
  };

  //Increase score by 100 with a multiplier of the length of the sequence. Display new score
  const newScore = () => {
    score = score + (100 * `1.${sequenceNumber}`);
    $score.html(`Score ${score}`);
  };

  //Remove 1 life and if none left adjust visible buttons
  const removeLives = () => {
    lives = lives - 1;
    if (lives === 0) {
      $playCheck.css('display', 'none');
      $restart.css('display', 'block');
    }
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
    //If equal - User was correct
    if (lengthEqual && contentsEqual === true) {
      userCorrect = true;
      winSound();
      newLevel();
      nextLevelSequence();
      newScore();
      reduceTime();
      scoreAnimate();
    //If not equal - User was wrong
    } else {
      userCorrect = false;
      userSequence = [];
      failSound();
      removeLives();
      livesAnimate();
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
    preventClick();
    playSequence();
    $play.attr('disabled','disabled');
    $check.removeAttr('disabled');
    userSequence = [];
  });

  //When check button is clicked
  $check.on('click', () => {
    compareArrayLength();
    compareArrayContents();
    checkUserSequence();
    $check.attr('disabled','disabled');
    $play.removeAttr('disabled');
    if (userCorrect === false) {
      $check.attr('disabled','disabled');
      $play.removeAttr('disabled');
    }
  });

  //When restart button is clicked
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
