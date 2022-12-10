# Rock, Paper, Scissors, Lizard, Spock!

Rock, Paper, Scissors, Lizard, Spock! The title says it all. This is a minigame of the extended version of the rock, paper, scissors game. Adding the lizard and spock as extra possibilities. The game was originally invented by Sam Kass and Karen Bryla, but it wasn't widely known until the comedy central show "The Big Bang Theory" made it popular.

This minigame was build in a fully responsive JavaScript website. The human player will play against a computer based on a random number generator. The chances of you winning are as high as the chances of you losing.

![Responsice Mockup](assets/images/mock_up.png)

## Features 

### Existing Features

- __The Title and the Heading__

  - Featured at the top of the page, the title and heading are easy to see for the user. It should be immediatly clear to the user what kind of website it is and which game you can play on this site.

![Title_heading](assets/images/title_heading.png)

- __The Game Rules__

  - This section shows the rules of the Rock, Paper, Scissors, Lizard, Spock! game. 
  - The rules are written in such a way, it should make clear to the user why some choices beat another choice. For example why does a rock beat a lizard? The rock crushes the lizard.
  - The rules are on top of the game. This way the user can always check why he or she lost or won the game.

![Game_rules](assets/images/game_rules.png)

- __The Game Section__

  - In this section the game begins when the user clicks one of the five option buttons. The buttons are made with font icons from Fontawesome. 
  - When the user clicks a button, the random number generator will activate to generate the computer choice of action.
  - The game will show both choices and presents the result of the round above the option buttons. 

![Game_section](assets/images/game_section.png)

- __The Score Section__

  - This section displays the scores of the player and the computer.
  - The score of the player is green and the score of the computer is red.

![Game_score](assets/images/game_score.png)

- __The Footer__

  - This section displays the creator of this "Rock, Paper, Scissors, Lizard, Spock!" minigame.

![Footer](assets/images/footer.png)

### Feature Ideas

- An idea for a new feature is to implement a highscore  section. This way the users can see how they stack up against other players

## Testing 

- Game function
    - Before implementing the 'gameMessage.innerHTML = "- game message -";', I used the alert function to send a message to the user. The problem here was that the icons wouldn't change until the user clicked the 'okay' button from the popup. This slowed down the game process because the user had to click an extra button before seeing the computer choice.

- Game over function
    - After testing the game function multiple times, I needed to implement the game over function. But the question was: When was the game over? 10 points was too long, seeing as the game is literally a 50-50 percent chance of winning or losing. 3 points was way too short. During the testing the game too often over af ter 3 clicks. This is why I have chosen to implement the first to 5 points wins.

- Reset function
    - The first tests after putting in the reset function code in Javascript, the gamer-score did not reset to 0. After that I implemented this code into the function: 
    'computerScore.innerText = 0;'
    'gamerScore.innerText = 0;'
    Now it works properly

- Styling the footer
    - The site does not have much content. When the screenheight was higher than 850 pixels, the footer would float   above the bottom of the page. 
    I fixed it by adding this code to the body element in css:
      - display: flex;
      - flex-direction: column;
      - min-height: 100vh;
    And by adding "flex: 1 0 auto;" to #main-game in css.

### Validator Testing 

- HTML
    - No errors were returned when passing through the official [W3C validator](https://validator.w3.org/nu/?doc=https%3A%2F%2F8000-jdzelhorst-codeinstitut-9ozhtgbjal7.ws-eu78.gitpod.io%2F)
- CSS
    - No errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2F8000-jdzelhorst-codeinstitut-9ozhtgbjal7.ws-eu78.gitpod.io%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)
- JavaScript
    - No errors were found when passing through the official [Jshint validator](https://jshint.com/)
      - The following metrics were returned: 
      - There are 9 functions in this file.
      - Function with the largest signature take 1 arguments, while the median is 0.
      - Largest function has 22 statements in it, while the median is 2.
      - The most complex function has a cyclomatic complexity value of 31 while the median is 1.
- Lighthouse
![Lighthouse](assets/images/lighthouse.png)


### Unfixed Bugs

- No unfixed bugs are known

## Deployment

- This website was deployed to GitHub pages. The steps to deploy are:
  - In the GitHub repository, navigate to the Settings tab.
  - From settings click on "Pages" on the left.
  - Here we select the main branch and click save. 
- This the live [Link](https://jdzelhorst.github.io/Hacks4Life/)


## Credits 

- The Javascript code is inspired and based on the following repositories:
    -   CodeInstitute Rock, Paper, Scissors project
    -   CodeInstitute Love Maths walkthrough project
    -   Rock Paper Scissors by Christo107 [Link](https://github.com/Christo107/CI-PP-02-Rock_Paper_Scissors)
        - Big thank you to Christo107! It gave a lot of inspiration and ideas to write my code.
    - The icons on the entire website were taken from [Font Awesome](https://fontawesome.com/)
