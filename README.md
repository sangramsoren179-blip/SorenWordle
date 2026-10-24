# SorenWordle

SorenWordle is a Wordle-inspired word guessing game developed using HTML, CSS, JavaScript, and JSON.

## About

SorenWordle is a five-letter word guessing game where players have up to six attempts to guess a hidden word. The game validates guesses against a word list and provides green, yellow, and gray feedback for each letter. It also updates the on-screen keyboard and displays messages when the player wins or runs out of attempts.

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
│   └── popup.js
├── .gitignore
├── index.html
└── README.md
```

## Status

This section tracks file changes for the current development update.

### Added (A)
- `js/popup.js` — handles displaying and hiding the game result popup.

### Modified (M)
- `README.md` — updates the file change history and documents the latest development progress.
- `css/game.css` — adds styling for the result popup, its overlay, and its buttons.
- `index.html` — adds the result popup structure, result details, and three action buttons.
- `js/dom.js` — adds DOM references for the popup elements and action buttons.
- `js/input.js` — connects game-ending conditions to the result popup and resets the game state for new games.
- `js/main.js` — connects the popup actions to game restarting and navigation.
- `js/navigation.js` — keeps the home and game screens synchronized when starting a game or returning home.

## Features

### Current

- Project setup
- README documentation
- Git version control
- Home screen structure and styling
- Play button to open the game screen
- Back button to return to the home screen
- Game interface with navigation bar
- Dynamically generated 6 × 5 game grid
- Dynamically generated on-screen keyboard
- Feedback message element
- Letter input using the on-screen keyboard
- Backspace to remove the most recently entered letter
- Enter key handling and progression between guess rows
- Word data stored in `data/words.json`
- Random selection of a hidden five-letter word
- Guess validation against the available word list
- Green, yellow, and gray feedback for guessed letters
- Correct handling of repeated letters in guesses
- Keyboard colors updated according to letter feedback
- Keyboard feedback priority: correct over present over absent
- Win message when the hidden word is guessed correctly
- Game-over message when all six attempts are used
- Result popup displayed immediately after winning or losing
- Hidden word revealed in the result popup
- Home button in the popup to return to the home screen
- Cancel button to close the popup while keeping the completed game visible
- Play Again button to start a new game with a newly selected hidden word

### Planned

- Daily word
- Streak system
- Statistics
- Local storage
- Animations
- Sound effects
- Dark mode
- Difficulty levels
- Support for different word lengths

## Planned Game Rules

1. The game selects a hidden five-letter word.
2. The player enters a five-letter guess.
3. The game checks the guess against the hidden word.
4. Each letter receives feedback:
   - Green — correct letter in the correct position
   - Yellow — correct letter in the wrong position
   - Gray — letter is not in the word
5. The player continues guessing until:
   - The word is guessed correctly, or
   - All attempts are used.
6. After the game ends, a result popup displays the outcome and reveals the hidden word.
7. The player can return home, close the popup to view the completed game, or start a new game.

## Technologies

### Currently Used
- HTML
- CSS
- JavaScript
- JSON
- Git

## Development Plan

1. Project setup and documentation
2. Home page and navigation
3. Game interface
4. Basic keyboard interaction
5. Word data and random hidden-word selection
6. Guess validation and letter-by-letter feedback
7. Win and game-over system
8. Testing and improvements
9. Daily word and statistics features
10. Additional enhancements

## Author

**Sangram Soren**