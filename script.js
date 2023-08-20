const container = document.querySelector('.container');
let squaresPerSide = 16; // Default value

// Create initial grid
createGrid(squaresPerSide);

// Function to create grid
function createGrid(squaresPerSide) {
    container.style.setProperty('--squares-per-side', squaresPerSide);
    container.innerHTML = ''; // Clear existing grid

    // Generate new grid of divs
    for (let i = 0; i < squaresPerSide * squaresPerSide; i++) {
        const div = document.createElement('div');
        div.classList.add('grid-square');
        container.appendChild(div);

        // Add event listener for hover effect
        div.addEventListener('mouseover', function () {
            div.style.backgroundColor = getRandomColor();
        });
    }
}

// Function to generate random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Function to prompt user for number of squares per side
function generateGrid() {
    const userInput = prompt('Enter the number of squares per side (maximum: 100):');
    const newSquaresPerSide = parseInt(userInput);

    if (newSquaresPerSide && newSquaresPerSide > 0 && newSquaresPerSide <= 100) {
        squaresPerSide = newSquaresPerSide;
        createGrid(squaresPerSide);
    } else {
        alert('Invalid input! Please enter a number between 1 and 100.');
    }
}
