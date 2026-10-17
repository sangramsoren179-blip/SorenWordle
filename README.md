# SorenWordle

SorenWordle is a Wordle-inspired word guessing game built using HTML, CSS, JavaScript, and JSON.

## About

SorenWordle is a simple word guessing game where the player tries to guess a hidden five-letter word within a limited number of attempts.

The game gives feedback for each guessed letter so the player can use the clues to find the correct word.

## Project Structure

```text
SorenWordle/
├── css/
│   ├── base.css
│   ├── home.css
│   ├── reset.css
│   └── variables.css
├── js/
│   └── main.js
├── .gitignore
├── index.html
└── README.md
```

## Status

This section lists file changes for the current development update.

### Added (A)
- js/main.js

### Modified (M)
- index.html
- README.md

## Features

### Current

- Project setup
- README documentation
- Git version control
- Home screen structure and styling
- Play button to open the game screen
- Home button to return to the home screen

### Planned

- Guess a five-letter word
- Limited number of attempts
- Letter-by-letter feedback
- On-screen keyboard
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