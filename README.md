# SorenWordle

SorenWordle is a Wordle-inspired word guessing game built using HTML, CSS, JavaScript, and JSON.

## About

SorenWordle is a simple word guessing game where the player tries to guess a hidden five-letter word within a limited number of attempts.

The game is being developed to provide feedback for each guessed letter, helping players use the clues to find the hidden word.

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
- js/dom.js
- js/grid.js
- js/keyboard.js
- js/navigation.js

### Modified (M)
- css/game.css
- index.html
- js/main.js
- README.md

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

### Planned

- Guess a five-letter word
- Limited number of attempts
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
4. Word data
5. Game logic
6. Keyboard interaction
7. Win and game-over system
8. Testing and improvements
9. Additional features

## Author

**Sangram Soren**