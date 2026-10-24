export function createGrid(gameGrid, wordLength) {
    gameGrid.innerHTML = "";
    
    for (let row = 0; row < 6; row++) {
        const gridRow = document.createElement("div");
        gridRow.classList.add("grid-row");

        for (let column = 0; column < wordLength; column++) {
            const tile = document.createElement("div");
            tile.classList.add("grid-tile");
            tile.dataset.row = row;
            tile.dataset.column = column;
            gridRow.appendChild(tile);
        }

        gameGrid.appendChild(gridRow);
    }
}