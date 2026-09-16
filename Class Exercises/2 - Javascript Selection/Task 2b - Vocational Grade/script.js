// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the button element
    const calculateButton = document.getElementById('calculateButton');
    
    // Add click event listener to the button
    calculateButton.addEventListener('click', calculateGrade);
});
grade = 'Fail'
// Function to calculate the Hang Gliding Certificate grade
function calculateGrade() {
    // TODO: Get the theory and practical exam scores
    let theory = parseFloat(document.getElementById('theory').value);
    let practical = parseFloat(document.getElementById('practical').value);
    // TODO: Check if both scores are above 50% (Pass requirement)
    if ((theory > 50) && (practical > 50)) {
        grade = 'Pass';
    // TODO: If passed, calculate average and check if above 70% (Distinction requirement)
        average = (theory + practical) / 2;
    }
    if (average > 70) {
        grade = 'Distinction';
    }
    // TODO: Display the appropriate grade (Pass, Distinction, or Fail)
    document.getElementById('result').textContent = grade;
    // Also display the average score
    if (grade != 'Fail') {
        document.getElementById('average').textContent = average;
    }
}