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
│   └── navigation.js
├── .gitignore
├── index.html
└── README.md
```

## Status

This section tracks file changes for the current development update.

### Added (A)
- `data/words.json` — stores the available five-letter words.

### Modified (M)
- `README.md` — documents the current features and development progress.
- `css/game.css` — styles letter feedback for the grid and keyboard.
- `js/input.js` — handles guess validation, letter feedback, keyboard colors, and game-ending conditions.
- `js/main.js` — loads word data and selects a random hidden word.

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