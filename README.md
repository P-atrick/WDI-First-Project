# Will Says
Will says is a game in which a random sequence of tiles is generated and displayed to the player by lighting up the tiles. The player must then click the tiles repeating the sequence. Every level one more tile is added to the end of the sequence and the speed at which the sequence is displayed increases.

![Game at start](https://i.imgur.com/3DXevSF.png)
![Lit tiles displaying sequence](https://i.imgur.com/MqkJvsp.png)

## Game Instructions
* Click 'Play'
* The tiles will light up in a sequence
* After the sequence plays, click the tiles and repeat the sequence
* Click 'Check' to check your answer
* If correct the sequence will extend by 1 tile and will play faster next level
* Click 'Play' to begin the next level</li>
* If you get the sequence wrong you lose a life
* Lose all 3 lives and the game ends

### Scoring
Every level the score increases by a base score of 100. This is multiplied by 1 + (0.1 * the number of tiles in that level's sequence).

### Speed
The speed at which the sequence is displayed depends on the level. At higher levels the rate at which the speed increases is reduced.

#### Extra Features
* In levels 1-3 the player will be reminded to press the play and check buttons if not pressed in time
* Animations and sounds are played to tell the player if they were right or wrong
* Mute / Unmute button for victory and loss sounds
* A restart button appears when the game is over
* Instructions are shown when the player hovers over 'Instructions'
* An animation to show the player a new game has been started

## Built with
* HTML5
* CSS3
* Javascript
* jQuery
* PHP
* Git
* Heroku

## Links
* Project on [GitHub](https://github.com/P-atrick/WDI-First-Project)
* Project deployed with [Heroku](http://willsays.herokuapp.com/)
