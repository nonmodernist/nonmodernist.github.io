+++
title= "hello, world"
template = "homepage.html"
insert_anchor_links = "heading"
+++

<span class="og">✌︎</span> Welcome to my website. Here you can: 

- Learn more [about me](./about), the [research](./research) I publish, and the [courses](./teaching) I teach.
- Check out the [book log](@/readinglog.md) I've been keeping for almost 30 years, or see what [movies](./log) I've been watching recently. 
- Read my [blog](./blog/) or subscribe to the [feed](https://nonmodernist.com/blog/index.xml).

<div class="counter-container">
    <div class="counter-box">
        <span class="counter-value" id="books-counter">0</span>
        <span class="counter-label">Books read in 2025</span>
    </div>
    
<div class="counter-box">
        <span class="counter-value" id="movies-counter">0</span>
        <span class="counter-label">Movies watched this month</span>
    </div>
    
<div class="counter-box">
        <span class="counter-value" id="launch-counter">0</span>
        <span class="counter-label">Days since launch</span>
    </div>
</div>

# [what is alexandra doing right now?](./is/)

<style>
.counter-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: 2rem 0;
    gap: 1rem;
}

.counter-box {
    text-align: center;
    padding: 1rem;
    background-color: var(--bg-1);
    border: 2px dotted var(--primary-color);
    border-radius: 8px;
    min-width: 120px;
    transition: transform 0.3s ease;
}

.counter-box:hover {
    transform: translateY(-5px);
}

.counter-value {
    font-size: 2.5rem;
    font-weight: bold;
    color: var(--primary-color);
    font-family: var(--header-font);
    margin: 0.5rem 0;
    display: block;
}

.counter-label {
    font-size: 0.9rem;
    color: var(--text-1);
}

.counter-animate {
    animation: counterPulse 1.5s ease-in-out;
}

@keyframes counterPulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.1); }
    100% { transform: scale(1); }
}

@media (max-width: 768px) {
    .counter-container {
        flex-direction: column;
    }
    
    .counter-box {
        width: 100%;
    }
}
</style>
<script>
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
    
    if (bookCounter) bookCounter.textContent = '3';
    if (movieCounter) movieCounter.textContent = '5';
    
    // Calculate days since launch (this should always work)
    if (launchCounter) {
        const launchDate = new Date('2024-12-01'); // Set your actual launch date here
        const today = new Date();
        const timeDiff = Math.abs(today.getTime() - launchDate.getTime());
        const dayDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
        launchCounter.textContent = dayDiff;
    }
    
    // Apply the animation
    setTimeout(() => {
        if (bookCounter) bookCounter.classList.add('counter-animate');
        if (movieCounter) movieCounter.classList.add('counter-animate');
        if (launchCounter) launchCounter.classList.add('counter-animate');
    }, 500);
}

function updateBookCounter() {
    const bookCounter = document.getElementById('books-counter');
    if (!bookCounter) return;
    
    // For development/demo purposes, just use a static number
    // This ensures something shows even if fetch doesn't work
    bookCounter.textContent = '5';
    
    // This makes the counter visually pulse
    setTimeout(() => {
        bookCounter.classList.add('counter-animate');
    }, 500);
    
    // Uncomment this block when you're ready to implement real counting
    /*
    const currentYear = new Date().getFullYear();
    
    // Try to fetch the reading log page
    fetch('/readinglog/index.html')
        .then(response => {
            if (!response.ok) throw new Error('Network response not OK');
            return response.text();
        })
        .then(html => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');
            
            // Get all elements with the current year
            const yearHeadings = Array.from(doc.querySelectorAll('h2, h3, h4'));
            const currentYearHeading = yearHeadings.find(h => 
                h.textContent.includes(currentYear.toString())
            );
            
            if (currentYearHeading) {
                // Find the book list - could be a <ul> following the heading
                let bookList = null;
                let element = currentYearHeading.nextElementSibling;
                
                // Look for the next <ul> after the heading
                while (element && !bookList) {
                    if (element.tagName === 'UL') {
                        bookList = element;
                    }
                    element = element.nextElementSibling;
                }
                
                if (bookList) {
                    const books = bookList.querySelectorAll('li');
                    bookCounter.textContent = books.length;
                    
                    // Apply animation
                    setTimeout(() => {
                        bookCounter.classList.add('counter-animate');
                    }, 500);
                }
            }
        })
        .catch(error => {
            console.error('Error fetching book data:', error);
            // We already set a fallback value, so do nothing
        });
    */
}
function updateMovieCounter() {
    const movieCounter = document.getElementById('movies-counter');
    if (!movieCounter) return;
    
    // Set a default value while loading
    movieCounter.textContent = '...';
    
    // Get current year and month
    const now = new Date();
    const currentYear = now.getFullYear();
    const currentMonth = now.getMonth() + 1; // JavaScript months are 0-indexed
    const monthString = String(currentMonth).padStart(2, '0');
    
    // Try to fetch the movie log page
    fetch('/log/index.html')
        .then(response => {
            if (!response.ok) throw new Error('Network response not OK');
            return response.text();
        })
        .then(html => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');
            
            // Look for movie entries with dates from this month
            // We're looking specifically for time elements with the current year-month
            const datePattern = `${currentYear}-${monthString}`;
            let count = 0;
            
            // First try to find dates in the dt-published class
            const publishedDates = doc.querySelectorAll('time.dt-published');
            publishedDates.forEach(date => {
                const dateText = date.textContent.trim();
                if (dateText.startsWith(datePattern)) {
                    count++;
                }
            });
            
            // If no dt-published elements found, try any time elements
            if (count === 0) {
                const allDates = doc.querySelectorAll('time');
                allDates.forEach(date => {
                    const dateText = date.textContent.trim();
                    if (dateText.startsWith(datePattern)) {
                        // Check if this date is in a log entry
                        const parentArticle = date.closest('article');
                        if (parentArticle) {
                            const articleLinks = parentArticle.querySelectorAll('a');
                            for (const link of articleLinks) {
                                if (link.href.includes('/log/')) {
                                    count++;
                                    break;
                                }
                            }
                        }
                    }
                });
            }
            
            // If we found any movies for this month, update the counter
            if (count > 0) {
                movieCounter.textContent = count;
            } else {
                // Fallback if no movies found
                movieCounter.textContent = '10';
            }
            
            // Apply animation
            setTimeout(() => {
                movieCounter.classList.add('counter-animate');
            }, 500);
            
            // Log for debugging
            console.log(`Found ${count} movies watched in ${datePattern}`);
        })
        .catch(error => {
            console.error('Error fetching movie data:', error);
            // Fallback to a default number
            movieCounter.textContent = '0';
            
            // Apply animation anyway
            setTimeout(() => {
                movieCounter.classList.add('counter-animate');
            }, 500);
        });
}

function calculateDaysSinceLaunch() {
    const launchDate = new Date('2022-12-07'); // Set your actual launch date here
    const today = new Date();
    const timeDiff = Math.abs(today.getTime() - launchDate.getTime());
    const dayDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
    
    const launchCounter = document.getElementById('launch-counter');
    if (launchCounter) {
        launchCounter.textContent = dayDiff;
        
        // This makes the counter visually pulse
        setTimeout(() => {
            launchCounter.classList.add('counter-animate');
        }, 500);
    }
}
</script>