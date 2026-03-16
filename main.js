// Data for the dropdown
const optionsArray = [
    { value: 'option1', text: 'Option 1' },
    { value: 'option2', text: 'Option 2' },
    { value: 'option3', text: 'Option 3' }
];

// Get references to the select element and the display paragraph
const selectElement = document.getElementById('options-select');
const selectedValueDisplay = document.getElementById('selected-value');

// Function to populate the select element
function populateSelect(element, array) {
    array.forEach(item => {
        const newOption = document.createElement('option');
        newOption.value = item.value;
        newOption.textContent = item.text;
        element.appendChild(newOption);
    });
}

// Populate the dropdown when the page loads
populateSelect(selectElement, optionsArray);

// Add an event listener to handle changes
selectElement.addEventListener('change', (event) => {
    selectedValueDisplay.textContent = event.target.value;
    console.log('Selected Value:', event.target.value); // You can find more examples on [Crio.Do](https://www.crio.do/blog/get-selected-value-in-dropdown-list-using-javascript-2025-criodo/)
});
