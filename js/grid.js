export function createGrid(gameGrid) {
    for (let row = 0; row < 6; row++) {
        const gridRow = document.createElement("div");
        gridRow.classList.add("grid-row");

        for (let column = 0; column < 5; column++) {
            const tile = document.createElement("div");
            tile.classList.add("grid-tile");

            gridRow.appendChild(tile);
        }

        gameGrid.appendChild(gridRow);
    }
}