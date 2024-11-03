document.getElementById('flight-search-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const from = document.getElementById('from').value;
    const to = document.getElementById('to').value;
    const date = document.getElementById('date').value;

    const flightList = document.getElementById('flight-list');
    flightList.innerHTML = '';

    // Sample flight data
    const flights = [
        { id: 1, from: 'New York', to: 'London', date: '2024-11-10' },
        { id: 2, from: 'New York', to: 'Paris', date: '2024-11-10' },
        { id: 3, from: 'London', to: 'New York', date: '2024-11-11' },
    ];

    const results = flights.filter(flight => flight.from.toLowerCase() === from.toLowerCase() && 
                                               flight.to.toLowerCase() === to.toLowerCase() && 
                                               flight.date === date);
    
    if (results.length > 0) {
        results.forEach(flight => {
            const li = document.createElement('li');
            li.textContent = `Flight from ${flight.from} to ${flight.to} on ${flight.date}`;
            flightList.appendChild(li);
        });
        document.getElementById('results').classList.remove('hidden');
    } else {
        const li = document.createElement('li');
        li.textContent = 'No flights found.';
        flightList.appendChild(li);
        document.getElementById('results').classList.remove('hidden');
    }
});
