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
    //Splice out the index, splice in a new random index from tilesArray
    const spliceDuplicates = () => {
      generatedSequence.splice(i, 1);
      generatedSequence.splice(i, 0, tilesArray[Math.floor(Math.random() * 9)]);
    };
    //Push a random index from tilesArray to the generatedSequence array
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
    //Push a random index from tilesArray to the generatedSequence array
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
    userSequence = [];
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
    sequenceNumber = 2;
    $level.html(`Level ${sequenceNumber - 1}`);
    score = 0;
    $score.html(`Score ${score}`);
    lives = 3;
    $lives.html(`Lives ${lives}`);
    generatedSequence = [];
    userSequence = [];
    displayTime = 700;
    console.log(generatedSequence);
    console.log(userSequence);
    determineSequence();
  };

  //Display the generated sequence by lighting up the tiles
  const playSequence = () => {
    //Loop over generatedSequence array
    for (let i = 0; i < generatedSequence.length; i++) {
      //Loop over tilesArray array
      for (let j = 0; j < tilesArray.length; j++) {
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
    //id = the id from the clicked tile
    const id = $(e.target).attr('id');
    //Add lit class then remove lit class to the tile after 0.6s
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
    //If equal
    if (lengthEqual && contentsEqual === true) {
      console.log('User sequence is correct');
      userCorrect = true;
      newLevel();
      nextLevelSequence();
      newScore();
      reduceTime();
      scoreAnimate();
    //If not equal
    } else {
      console.log('User sequence is wrong');
      userCorrect = false;
      userSequence = [];
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
