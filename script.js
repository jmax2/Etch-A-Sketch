const container = document.querySelector('.container');

// Create 16x16 grid of divs
for (let i = 0; i < 16 * 16; i++) {
    const div = document.createElement('div');
    div.classList.add('grid-square');
    container.appendChild(div);
}