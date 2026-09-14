// Add event listener to the calculate button
document.getElementById('calculateBtn').addEventListener('click', calculateOrder);

function calculateOrder() {
    // TODO:
    // 1. Get the order number and quantity from the input fields
    // 2. Calculate the total cost (£2.45 per bag)
    // 3. Display:
    //    - Order number
    //    - Quantity
    //    - Total cost (format to 2 decimal places)
let orderNumber = document.getElementById('orderNumber').value;
let quantity = parseInt(document.getElementById('quantity').value);

let totalCost = 2.45 * quantity;

document.getElementById('displayOrderNumber').textContent = orderNumber;
document.getElementById('displayQuantity').textContent = quantity;
document.getElementById('totalCost').textContent = totalCost
}
