// Finds the important elements
const input = document.getElementById('input');
const messages = document.getElementById('messages');

// Listens for keypress events on the input
input.addEventListener('keypress', (event) => {
    // Checks if the key pressed was ENTER
    if (event.keyCode === 13) {
        // Checks the field is valid
        if (input.validity.valid) {
            // Creates a DOM element using the value
            const message = createMessage(input.value);
            // Appends the new message to the list
            messages.appendChild(message);
            // Clears the field
            input.value = '';
            // Scrolls the messages to the bottom
            messages.parentNode.scrollTop = messages.parentNode.scrollHeight;
        }
    }
});

// Converts value to string of HTML
function createMessage (value) {
    // Warning: Don't do this in production without sanitizing the string first!
    return stringToDom(`<li><div class="message">${value}</div></li>`)
}

// Converts string to real DOM
function stringToDom (string) {
    const template = document.createElement('template');
    template.innerHTML = string.trim();
    return template.content.firstChild;
}
