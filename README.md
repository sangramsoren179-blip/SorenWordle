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
│   └── popup.js
├── .gitignore
├── index.html
└── README.md
```

## Status

This section tracks file changes for the current development update.

### Added (A)
- None.

### Modified (M)
- `README.md` — documents the dynamic word-length feature, updated game rules, and current development status.
- `css/game.css` — adjusts tile dimensions for different word lengths and mobile screens.
- `css/home.css` — styles the word-length selector and distinguishes selected and unselected buttons.
- `index.html` — contains the word-length selector structure.
- `data/words.json` — organizes words by length and provides words for testing different grid sizes.
- `js/dom.js` — provides a DOM reference for the word-length buttons.
- `js/grid.js` — generates the grid according to the selected word length.
- `js/input.js` — supports guesses and game resets using the selected word length.
- `js/main.js` — generates word-length buttons, updates the selected length, and loads the matching word list.

## Features

### Current

- Project setup
- README documentation
- Git version control
- Home screen structure and styling
- Play button to open the game screen
- Back button to return to the home screen
- Game interface with navigation bar
- Dynamically generated six-row game grid
- Support for selecting different word lengths
- Word-length options generated from `data/words.json`
- Visual distinction between selected and unselected word-length buttons
- Grid columns and tile dimensions adapt to the selected word length
- Dynamically generated on-screen keyboard
- Feedback message element
- Letter input using the on-screen keyboard
- Backspace to remove the most recently entered letter
- Enter key handling and progression between guess rows
- Word data stored in `data/words.json`
- Random selection of a hidden word from the selected word-length list
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
- Words organized by length in `data/words.json`

### Planned

- Daily word
- Streak system
- Statistics
- Local storage
- Animations
- Sound effects
- Dark mode
- Difficulty levels

## Planned Game Rules

1. The player selects an available word length on the home screen.
2. The game selects a hidden word of the chosen length.
3. The player enters a guess containing the required number of letters.
4. The game checks the guess against the word list for the selected length.
5. Each letter receives feedback:
   - Green — correct letter in the correct position
   - Yellow — correct letter in the wrong position
   - Gray — letter is not in the word, or no additional occurrence is available
6. The player continues guessing until:
   - The word is guessed correctly, or
   - All six attempts are used.
7. After the game ends, a result popup displays the outcome and reveals the hidden word.
8. The player can return home, close the popup to view the completed game, or start a new game.

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
10. Additional enhancements and improvements

## Author

**Sangram Soren**