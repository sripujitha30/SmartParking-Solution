// Parking spots data
const parkingSpots = [
    { id: 1, city: "Delhi", location: "Connaught Place", price: 20, isAvailable: true },
    { id: 2, city: "Mumbai", location: "Marine Drive", price: 25, isAvailable: true },
    { id: 3, city: "Bangalore", location: "MG Road", price: 15, isAvailable: true },
    { id: 4, city: "Chennai", location: "T Nagar", price: 1, isAvailable: true },
];

// Check login 
if (localStorage.getItem('isLoggedIn') !== 'true' && window.location.pathname !== '/login.html') {
    window.location.href = "login.html";
}

// Search and render parking spots
document.getElementById('search-form')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const city = document.getElementById('city').value;
    const results = parkingSpots.filter(spot => spot.city === city && spot.isAvailable);

    const parkingList = document.getElementById('parking-list');
    parkingList.innerHTML = results.length
        ? results.map(spot => `
            <li>
                <strong>${spot.location}</strong> - ₹${spot.price}/hour
                <button onclick="bookSpot(${spot.id})">Book</button>
            </li>
        `).join('')
        : '<li>No parking spots available</li>';
});

// Book a parking spot
function bookSpot(id) {
    const spot = parkingSpots.find(spot => spot.id === id);
    if (spot) {
        spot.isAvailable = false;
        window.location.href = "success.html"; // Redirect to success page
    }
}
