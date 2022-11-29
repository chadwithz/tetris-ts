"use strict";
const HEIGHT = 10;
document.addEventListener('DOMContentLoaded', () => {
    const gridContainer = document.querySelector('.grid-container');
    const createGrid = () => {
        for (let i = 0; i < 200; i++) {
            const div = document.createElement('div');
            div.classList.add('grid');
            div.classList.add(`block-no-${i}`);
            gridContainer === null || gridContainer === void 0 ? void 0 : gridContainer.appendChild(div);
        }
    };
    const createFreezingDivs = () => {
        for (let i = 0; i < 10; i++) {
            const div = document.createElement('div');
            div.classList.add('freeze');
            gridContainer === null || gridContainer === void 0 ? void 0 : gridContainer.appendChild(div);
        }
    };
    createGrid();
    createFreezingDivs();
    const squares = Array.from(document.querySelectorAll(`.grid-container div`));
    const [L, Z, T, O, I] = [[
            [1, HEIGHT + 1, HEIGHT * 2 + 1, 2],
            [HEIGHT, HEIGHT + 1, HEIGHT + 2, HEIGHT * 2 + 2],
            [1, HEIGHT + 1, HEIGHT * 2 + 1, HEIGHT * 2],
            [HEIGHT, HEIGHT * 2, HEIGHT * 2 + 1, HEIGHT * 2 + 2]
        ], [
            [0, HEIGHT, HEIGHT + 1, HEIGHT * 2 + 1],
            [HEIGHT + 1, HEIGHT + 2, HEIGHT * 2, HEIGHT * 2 + 1],
            [0, HEIGHT, HEIGHT + 1, HEIGHT * 2 + 1],
            [HEIGHT + 1, HEIGHT + 2, HEIGHT * 2, HEIGHT * 2 + 1]
        ], [
            [1, HEIGHT, HEIGHT + 1, HEIGHT + 2],
            [1, HEIGHT + 1, HEIGHT + 2, HEIGHT * 2 + 1],
            [HEIGHT, HEIGHT + 1, HEIGHT + 2, HEIGHT * 2 + 1],
            [1, HEIGHT, HEIGHT + 1, HEIGHT * 2 + 1]
        ], [
            [0, 1, HEIGHT, HEIGHT + 1],
            [0, 1, HEIGHT, HEIGHT + 1],
            [0, 1, HEIGHT, HEIGHT + 1],
            [0, 1, HEIGHT, HEIGHT + 1]
        ], [
            [1, HEIGHT + 1, HEIGHT * 2 + 1, HEIGHT * 3 + 1],
            [HEIGHT, HEIGHT + 1, HEIGHT + 2, HEIGHT + 3],
            [1, HEIGHT + 1, HEIGHT * 2 + 1, HEIGHT * 3 + 1],
            [HEIGHT, HEIGHT + 1, HEIGHT + 2, HEIGHT + 3]
        ]];
    const tetrominoes = [L, Z, T, O, I];
    let currentPosition = 0;
    let currentRotation = 0;
    let random = Math.floor(Math.random() * tetrominoes.length);
    let current = tetrominoes[random][currentRotation];
    const draw = () => {
        current.forEach(index => {
            squares[currentPosition + index].classList.add('block');
        });
    };
    const undraw = () => {
        current.forEach(index => {
            squares[currentPosition + index].classList.remove('block');
        });
    };
    const moveDown = () => {
        undraw();
        currentPosition += HEIGHT;
        draw();
    };
    const timerId = setInterval(moveDown, 1000);
    draw();
});
//# sourceMappingURL=index.js.map