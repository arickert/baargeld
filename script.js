function updateText() {
    const dynamicText = document.getElementById('dynamicText');
    const viewportWidth = window.innerWidth;

    // Create a span element to measure character widths
    const span = document.createElement('span');
    span.style.position = 'absolute';
    span.style.visibility = 'hidden';
    span.style.whiteSpace = 'nowrap';
    span.style.font = window.getComputedStyle(dynamicText).font;
    document.body.appendChild(span);

    // Measure the width of the "b" part
    span.textContent = 'b';
    const bWidth = span.getBoundingClientRect().width;

    // Measure the width of the "B" part
    span.textContent = 'B';
    const BWidth = span.getBoundingClientRect().width;

    // Measure the width of the "rgeld" part
    span.textContent = 'rgeld';
    const rgeldWidth = span.getBoundingClientRect().width;

    // Measure the width of a single 'a' character
    span.textContent = 'a';
    const characterWidth = span.getBoundingClientRect().width;

    // Calculate the number of 'a's based on the viewport width, excluding "b", "B", and "rgeld"
    const numOfAs = Math.floor((viewportWidth - bWidth - BWidth - rgeldWidth) / characterWidth);

    // Create the new text with the calculated number of 'a's
    const newText = 'a'.repeat(numOfAs) + 'rgeld';

    // Update the text in the h1 element
    dynamicText.textContent = newText;

    // Clean up the span element
    document.body.removeChild(span);
}

// Event listener to update text on resize
window.addEventListener('resize', updateText);

// Initial call to set the text when the page loads
updateText();
