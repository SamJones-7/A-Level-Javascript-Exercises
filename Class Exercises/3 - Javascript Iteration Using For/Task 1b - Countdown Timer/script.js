// TODO: Write the countdown function
function startCountdown() {
    // Get input values
    const startNum = parseInt(document.getElementById('startNum').value);
    const delay = parseInt(document.getElementById('delay').value);
    
    // Get display element and button
    const display = document.getElementById('countdownDisplay');
    const button = document.getElementById('startButton');
    
    // TODO: Validate inputs
    // Check if values are valid numbers
    // Check if start number is positive
    // Check if delay is at least 100ms
    if (startNum >= 0 && delay >= 100) {
        display.innerHTML = 'The numbers are valid'
    }
    // TODO: Disable button during countdown
    button.enabled = false;
    // TODO: Create the countdown loop
    // Use a for loop counting backwards
    // Use setTimeout to create the delay between numbers
    for (let i = startNum;
        i -= 1;
        await delay(delay);
        document.getElementById('countdownDisplay').textContent = i;)
    // TODO: Show "Blast off!" at the end
    document.getElementById('countdownDisplay').textContent = 'Blast off!';
    // TODO: Re-enable button after countdown finishes
    button.enabled = true;
}
// Initialize the page
window.onload = function() {
    document.getElementById('countdownDisplay').textContent = 'Ready to start!';
};
