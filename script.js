const catImage = document.querySelector('.cat');
const messageElement = document.querySelector('.message'); // Reference the new "message" element
const buttons = document.querySelectorAll('.button');

const alternatives = [
    { text: "That's amazing! Buckle up for an unforgettable time!", image: "images/cat-02.gif" },
    { text: "Think again! You won't regret it ", image: "images/cat-03.gif" },
    { text: "Come on, take a chance and say yes!", image: "images/cat-04.gif" },
    { text: "Don't let fear hold you back! What could go wrong? ", image: "images/cat-05.gif" }
];

const yesResponse = { text: "I knew you'd say yes! muah muah muah ", image: "images/cat-yes.gif" };

function updateMessage(newMessage) {
    messageElement.textContent = newMessage; // Set the content of the "message" element
}

function updateImage(newImage) {
    catImage.src = newImage;
}

function showButtons() {
    buttons.forEach(button => button.style.display = 'inline-block');
}

function hideButtons() {
    buttons.forEach(button => button.style.display = 'none');
}

// Handle "Yes" button click
buttons[0].addEventListener('click', () => {
    updateMessage(yesResponse.text);
    updateImage(yesResponse.image);
    hideButtons();
});

// Handle "Let me think..." button click
buttons[1].addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * alternatives.length);
    const chosenAlternative = alternatives[randomIndex];
    updateMessage(chosenAlternative.text);
    updateImage(chosenAlternative.image);
});
