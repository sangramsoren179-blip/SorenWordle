# SorenWordle

SorenWordle is a Wordle-inspired word guessing game being developed using HTML, CSS, and JavaScript, with JSON planned for word data.

## About

SorenWordle is a five-letter word guessing game in development. Players will try to find a hidden word within a limited number of attempts, using feedback on each guessed letter.

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

This section lists file changes for the current development update.

### Added (A)
- `js/input.js`

### Modified (M)
- `README.md`
- `css/game.css`
- `js/grid.js`
- `js/keyboard.js`
- `js/main.js`

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

### Planned

- Hidden-word selection
- Guess validation against the word list
- Letter-by-letter feedback
- Win and game-over messages
- Word data stored in JSON
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
- Git

### Planned
- JSON

## Development Plan

1. Project setup and documentation
2. Home page and navigation
3. Game interface
4. Basic keyboard interaction
5. Word data and guess validation
6. Letter-by-letter feedback
7. Win and game-over system
8. Testing and improvements
9. Additional features

## Author

**Sangram Soren**