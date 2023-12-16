// Get elements from the HTML
const decrementButton = document.getElementById("decrement");
const incrementButton = document.getElementById("increment");
const countDisplay = document.getElementById("count");

// Initialize the counter value
let count = 0;

// Update the counter display
function updateCount() {
    countDisplay.textContent = count;
}

// Event listeners for increment and decrement buttons
decrementButton.addEventListener("click", () => {
    count--;
    updateCount();
});

incrementButton.addEventListener("click", () => {
    count++;
    updateCount();
});

// Initial update
updateCount();
