function updateText() {
    const line1 = document.getElementById('line1');
    const line2 = document.getElementById('line2');
    const line3 = document.getElementById('line3');
    const viewportWidth = window.innerWidth;

    // Create a span element to measure character widths
    const span = document.createElement('span');
    span.style.position = 'absolute';
    span.style.visibility = 'hidden';
    span.style.whiteSpace = 'nowrap';
    span.style.font = window.getComputedStyle(line1).font;
    document.body.appendChild(span);

    // Measure the width of individual characters
    span.textContent = 'B';
    const BWidth = span.getBoundingClientRect().width;
    span.textContent = 'rgeld';
    const rgeldWidth = span.getBoundingClientRect().width;
    span.textContent = 'a';
    const characterWidth = span.getBoundingClientRect().width;

    // Calculate the number of 'a's for each line
    const numOfAsLine1 = Math.floor((viewportWidth - BWidth - characterWidth) / characterWidth);
    const numOfAsLine2 = Math.floor(viewportWidth / characterWidth);
    const numOfAsLine3 = Math.floor((viewportWidth - rgeldWidth) / characterWidth);

    // Create the new texts with the calculated number of 'a's
    const newTextLine1 = 'a'.repeat(numOfAsLine1);
    const newTextLine2 = 'a'.repeat(numOfAsLine2);
    const newTextLine3 = 'a'.repeat(numOfAsLine3) + 'rgeld';

    // Update the text in each line
    line1.textContent = newTextLine1;
    line2.textContent = newTextLine2;
    line3.textContent = newTextLine3;

    // Clean up the span element
    document.body.removeChild(span);
}

window.addEventListener('resize', updateText);

// Initial call to set the text when the page loads
updateText();
