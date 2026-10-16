// Add your event listener and while loop code here
// When the button is clicked, display numbers 1 to N in the output area using a while loop
const countBtn = document.getElementById('countBtn');

countBtn.addEventListener('click', () => {
    countUp();
});

function countUp() {
    let count = 1;
    let number = document.getElementById('numberInput');
    while (count <= number) {
        document.getElementById('output').textContent = count;
        count ++;
    }
}