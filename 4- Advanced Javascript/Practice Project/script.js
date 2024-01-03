// script.js
document.addEventListener("DOMContentLoaded", () => {
    const quoteElement = document.querySelector("#quote");
    const quoteButton = document.querySelector("#quoteBtn");

    async function fetchRandomQuote() {
        try {
            const response = await fetch("https://api.quotable.io/random");
            if (response.ok) {
                const data = await response.json();
                return data.content; 
            } else {
                throw new Error("Failed to fetch a quote.");
            }
        } catch (error) {
            console.error(error);
            return "Failed to fetch a quote.";
        }
    }

    async function displayRandomQuote() {
        const randomQuote = await fetchRandomQuote();
        quoteElement.textContent = randomQuote;
    }

    quoteButton.addEventListener("click", displayRandomQuote);

    // Initial display
    displayRandomQuote();
});
