document.addEventListener('DOMContentLoaded', function() {
    // Always set default values first, so at least something shows
    setDefaultCounters();
    
    // Then try to update with real values
    try {
        updateBookCounter();
        updateMovieCounter();
        calculateDaysSinceLaunch();
    } catch(e) {
        console.error("Error updating counters:", e);
        // Default values already set, so we're good
    }
});

// Set default values immediately so something always shows
function setDefaultCounters() {
    const bookCounter = document.getElementById('books-counter');
    const movieCounter = document.getElementById('movies-counter');
    const launchCounter = document.getElementById('launch-counter');
    
    if (bookCounter) bookCounter.textContent = '5';
    if (movieCounter) movieCounter.textContent = '10';
    
    // Calculate days since launch (this should always work)
    if (launchCounter) {
        const launchDate = new Date('2022-12-07'); // Set your actual launch date here
        const today = new Date();
        const timeDiff = Math.abs(today.getTime() - launchDate.getTime());
        const dayDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
        launchCounter.textContent = dayDiff;
    }
}

function updateBookCounter() {
    // Your existing book counter code
}

function updateMovieCounter() {
    // Your existing movie counter code
}

function calculateDaysSinceLaunch() {
    // Your existing launch counter code
}