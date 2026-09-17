// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the button element
    const calculateButton = document.getElementById('calculateButton');
    
    // Add click event listener to the button
    calculateButton.addEventListener('click', calculateBill);
});

// Function to calculate the restaurant bill
function calculateBill() {
    let serviceCharge = 1;
    let foodDiscount = 1;
    let drinksDiscount = 1;
    let totalDiscount = 1;
    let mainDiscount = 1;
    let kidsEatFree = 0;
    let loyaltyCardDiscount = 1;
    // TODO: Get all input values
    let foodTotal = parseFloat(document.getElementById('foodTotal').value);
    let drinksTotal = parseFloat(document.getElementById('drinksTotal').value);
    let diners = parseInt(document.getElementById('diners').value);
    let kidsCount = parseInt(document.getElementById('kidsCount').value);
    let day = document.getElementById('day').value;
    let time = document.getElementById('time').value;
    let loyaltyCard = document.getElementById('loyaltyCard').value;

    let groupSize = diners + kidsCount;
    // TODO: Calculate service charge based on group size
    // 1-4: No mandatory charge
    // 5-8: 10%
    if (groupSize >= 5 && groupSize <= 8) {
        serviceCharge = 1.1;
    // 8+: 15%
    } else if (groupSize > 8) {
        serviceCharge = 1.15;
    }
    
    // TODO: Apply time-based discounts
    // Before 5 PM: 20% off food
    if (time < 17) {
        foodDiscount = 0.8;
    // 5-7 PM: 25% off drinks
    } else if (time <= 19) {
        drinksDiscount = 0.75;
    // After 10 PM: 10% off total
    } else {
        totalDiscount = 0.9;
    }
    
    // TODO: Apply special offers
    // Mon-Thu: Second main half price
    if (day == 'monday' || day == 'tuesday' || day == 'wednesday' || day == 'thursday') {
        mainDiscount = 0.5;
    }
    // Sunday: Kids eat free (max 2 per adult)
    if (day == 'sunday') {
        kidsEatFree = 2 * diners;
        kidsEatFree = kidsCount - kidsEatFree;
        if (kidsEatFree < 0) {
            kidsEatFree = 0;
        }
    }
    // TODO: Apply loyalty card discount
    // Bronze: 5% off
    if (loyaltyCard == 'bronze') {
        loyaltyCardDiscount = 0.95;
    // Silver: 10% off
    } else if (loyaltyCard == 'silver') {
        loyaltyCardDiscount = 0.9;
    // Gold: 15% off
    } else if (loyaltyCard == 'gold') {
        loyaltyCardDiscount = 0.85;
    }
    
    // TODO: Calculate subtotal
    let subtotal = foodTotal + drinksTotal;
    document.getElementById('subtotal').textContent = ('Subtotal: ' + subtotal);
    // TODO: Create breakdown of all discounts applied
    document.getElementById('discounts').textContent = ('Discounts: ' + ((foodDiscount * drinksDiscount * totalDiscount * loyaltyCardDiscount) * 100 - 100) + '%');
    document.getElementById('serviceCharge').textContent = ('Service charge: ' + (serviceCharge * 100 - 100) + '%');
    // TODO: Calculate and display final total
    foodTotal *= foodDiscount * mainDiscount;
    drinksTotal *= drinksDiscount;
    finalTotal = 
}
