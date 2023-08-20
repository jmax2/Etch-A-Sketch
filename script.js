const container = document.querySelectorAll('.container');
let squaresPerSide = 16; // Default value

// Create initial grid
createGrid(squaresPerSide);

// Function to create grid
function createGrid(squaresPerSide) {
    for (let j = 0; j < 2; j++) {
        container[j].style.setProperty('--squares-per-side', squaresPerSide);
        container[j].innerHTML = ''; // Clear existing grid

        // Generate new grid of divs
        for (let i = 0; i < squaresPerSide * squaresPerSide; i++) {
            const div = document.createElement('div');
            div.classList.add('grid-square');
            container[j].appendChild(div);

            let intensity = 100; // Starting intensity
            let interactions = 0; // Number of interactions

            // Add event listener for hover effect
            div.addEventListener('mouseover', function () {
                // div.style.backgroundColor = getRandomColor();

                interactions++; // Increment interactions on each hover

                if (interactions <= 10) {
                    intensity -= 10; // Reduce intensity by 10% on each interaction
                }
                let hue = Math.floor(Math.random() * 360);
                if(j === 0)
                    div.style.backgroundColor = `hsl(${hue}, 100%, ${intensity}%)`;
                else    div.style.backgroundColor = `hsl(240, 100%, ${intensity}%)`;
            });
        }
    }
}

// Function to generate random color
// function getRandomColor() {
//     const letters = '0123456789ABCDEF';
//     let color = '#';
//     for (let i = 0; i < 6; i++) {
//         color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
// }

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


