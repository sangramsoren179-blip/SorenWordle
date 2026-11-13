# SorenWordle

SorenWordle is a Wordle-inspired word guessing game developed using HTML, CSS, JavaScript, and JSON.

## About

SorenWordle is a word guessing game where players have up to six attempts to guess a hidden word. Players can select a word length from the available options on the home screen. The game dynamically adjusts the grid and validates guesses against the word list for the selected length. It provides green, yellow, and gray feedback for each letter, updates the on-screen keyboard, and displays a result popup when the player wins or runs out of attempts.

## Project Structure

```text
SorenWordle/
├── assets/
│   └── icons/
│       └── back-button.svg
├── css/
│   ├── base.css
│   ├── game.css
│   ├── home.css
│   ├── reset.css
│   └── variables.css
├── data/
│   └── words.json
├── js/
│   ├── dom.js
│   ├── grid.js
│   ├── input.js
│   ├── keyboard.js
│   ├── main.js
│   ├── navigation.js
│   ├── popup.js
│   └── wordValidator.js
├── .gitignore
├── index.html
└── README.md
```

## Status

This section records the files added, modified, or deleted in the current development update.

### Modified (M)
- `README.md` — documents the latest word database update and records the current development changes.
- `data/words.json` — updates the word database with the latest vocabulary collection, organized by word length.

## Features

### Implemented

#### Home and Navigation
- Home screen with a Play button
- Back button to return to the home screen
- Word-length selector generated from `data/words.json`
- Responsive word-length buttons that wrap onto multiple rows
- Visual indication of the selected word length

#### Game Interface
- Dynamically generated six-row grid
- Grid columns and tile dimensions adapt to the selected word length
- Dynamically generated on-screen keyboard
- Feedback message element

#### Word Data and Validation
- Word lists organized by length in `data/words.json`
- Random hidden-word selection from the selected word-length list
- Guess validation against the available word list
- Word-data validation for structure, word length, lowercase formatting, duplicates, and alphabetical order
- Expanded vocabulary collection covering multiple word lengths

#### Guessing and Feedback
- Letter input using the on-screen keyboard
- Backspace to remove the most recently entered letter
- Enter key handling and progression between guess rows
- Green, yellow, and gray letter feedback
- Correct handling of repeated letters
- Keyboard feedback priority: correct over present over absent

#### Game Results and Replay
- Win message when the hidden word is guessed correctly
- Game-over message after six unsuccessful attempts
- Result popup displaying the outcome and hidden word
- Home button to return to the home screen
- Cancel button to close the popup and view the completed game
- Play Again button to start a new game with a newly selected hidden word
- Game reset clears previous guesses and keyboard feedback

### Planned

- Daily word challenge
- Streak system
- Statistics and game history
- Local storage for saving game data
- Animations
- Sound effects
- Dark mode
- Difficulty levels

## Game Rules

1. The player selects an available word length on the home screen.
2. The game selects a random hidden word from the list for that length.
3. The player enters a guess containing the required number of letters.
4. The game checks whether the guess belongs to the word list for the selected length.
5. Each letter receives feedback:
   - Green — the letter is correct and in the correct position.
   - Yellow — the letter is in the hidden word but in a different position.
   - Gray — the letter is absent from the word, or no additional occurrence is available.
6. The player has up to six attempts to guess the hidden word.
7. The game ends when the player guesses correctly or uses all six attempts.
8. A result popup displays the outcome and reveals the hidden word.
9. The player can return home, close the popup to view the completed game, or start a new game.

## Technologies

- HTML
- CSS
- JavaScript
- JSON
- Git for version control

## Development Plan

### Completed
1. Project setup and documentation
2. Home page and navigation
3. Game interface and dynamic grid
4. Keyboard interaction and guess input
5. Word data management and hidden-word selection
6. Guess validation and letter-by-letter feedback
7. Win and game-over system
8. Result popup and game reset
9. Word-data validation
10. Responsive home-screen word-length selector

### Upcoming
1. Daily word challenge
2. Statistics and streak tracking
3. Local storage
4. Animations and sound effects
5. Dark mode and difficulty levels
6. Additional testing and improvements

## Author

**Sangram Soren**