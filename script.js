// JavaScript to handle form submission and show an alert
document.getElementById('donationForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the default form submission

    // Get form data
    const restaurantName = document.getElementById('restaurantName').value;
    const foodType = document.getElementById('foodType').value;
    const quantity = document.getElementById('quantity').value;
    const contactEmail = document.getElementById('contactEmail').value;

    // Simple validation (could be expanded)
    if (restaurantName && foodType && quantity && contactEmail) {
        alert(`Thank you for donating!\n\nRestaurant: ${restaurantName}\nFood Type: ${foodType}\nQuantity: ${quantity} kg\nContact Email: ${contactEmail}`);
    } else {
        alert('Please fill out all fields.');
    }

    // Reset form
    document.getElementById('donationForm').reset();


    
});


