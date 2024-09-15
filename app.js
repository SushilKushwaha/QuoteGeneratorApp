// Sample quotes for different categories
const quotes = {
  science: [
    "Science is a way of thinking much more than it is a body of knowledge. – Carl Sagan",
    "The important thing is not to stop questioning. – Albert Einstein",
    "Equipped with his five senses, man explores the universe around him and calls the adventure Science. – Edwin Hubble",
  ],
  philosophy: [
    "The unexamined life is not worth living. – Socrates",
    "Happiness is not an ideal of reason but of imagination. – Immanuel Kant",
    "He who thinks great thoughts, often makes great errors. – Martin Heidegger",
  ],
};

let currentCategory = "science";
let currentIndex = 0;

// DOM Elements
const quoteDisplay = document.getElementById("quote");
const categorySelect = document.getElementById("categories");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const randomButton = document.getElementById("random");
const themeSwitch = document.getElementById("theme");
const increaseFontButton = document.getElementById("increase-font");
const decreaseFontButton = document.getElementById("decrease-font");

// Display initial quote
function displayQuote() {
  quoteDisplay.textContent = quotes[currentCategory][currentIndex];
}

// Category change handler
categorySelect.addEventListener("change", function () {
  currentCategory = this.value;
  currentIndex = 0;
  displayQuote();
});

// Next button functionality
nextButton.addEventListener("click", function () {
  currentIndex = (currentIndex + 1) % quotes[currentCategory].length;
  displayQuote();
});

// Previous button functionality
prevButton.addEventListener("click", function () {
  currentIndex =
    (currentIndex - 1 + quotes[currentCategory].length) %
    quotes[currentCategory].length;
  displayQuote();
});

// Random button functionality
randomButton.addEventListener("click", function () {
  currentIndex = Math.floor(Math.random() * quotes[currentCategory].length);
  displayQuote();
});

// Theme switcher functionality
themeSwitch.addEventListener("change", function () {
  document.body.classList.toggle("dark-mode", this.checked);
});

// Font size control functionality
let fontSize = 16; // Default font size in px

increaseFontButton.addEventListener("click", function () {
  fontSize += 2;
  quoteDisplay.style.fontSize = fontSize + "px";
});

decreaseFontButton.addEventListener("click", function () {
  if (fontSize > 12) {
    fontSize -= 2;
    quoteDisplay.style.fontSize = fontSize + "px";
  }
});

// Initialize the app with the first quote
displayQuote();
