// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the button element
    const calculateButton = document.getElementById('calculateButton');
    
    // Add click event listener to the button
    calculateButton.addEventListener('click', calculatePremium);
});

// Function to calculate the insurance premium
function calculatePremium() {
    // TODO: Get values from input fields
    let age = parseInt(document.getElementById('age').value);
    let noClaims = parseInt(document.getElementById('noClaims').value);
    let previousClaims = parseInt(document.getElementById('previousClaims').value);
    // TODO: Calculate base premium (£500)
    let basePremium = 500
    // TODO: Apply age adjustment
    let ageAdjustment = 1
    // Under 25: +50%
    if (age < 25) {
        ageAdjustment = 1.5;
    }
    // 25-40: No change
    // Over 40: -15%
    if (age > 40) {
        ageAdjustment = 0.85;
    }
    // TODO: Apply no claims bonus
    let noClaimsBonus = 1
    // 0 years: No discount
    // 1-2 years: 10% discount
    if (noClaims <= 2) {
        noClaimsBonus = 0.9;
    }
    // 3-5 years: 25% discount
    else if (noClaims >= 3 && noClaims <= 5) {
        noClaimsBonus = 0.75
    }
    // Over 5 years: 35% discount
    else {
        noClaimsBonus = 0.65;
    }
    // TODO: Add previous claims adjustment
    // Each claim adds 20%
    let previousClaimsAdjustment = 1 + (0.2 * previousClaims);
    // TODO: Display the final premium and the breakdown of calculations
    document.getElementById('breakdownSection').textContent = ('Age adjustment: ' + ((ageAdjustment * 100) - 100) + '%' + ' Claims bonus: ' + (noClaimsBonus * 100 - 100) + '%' + ' Previous claims adjustment: ' + (previousClaimsAdjustment * 100 - 100) + '%');
    let result = basePremium * ageAdjustment * noClaimsBonus * previousClaimsAdjustment;
    document.getElementById('result').textContent = ('Final premium: £' + result);
    
}
