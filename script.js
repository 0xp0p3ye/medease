// Event listener for DOM content loaded
document.addEventListener('DOMContentLoaded', function () {
    // Example: Displaying motivational quote on the homepage
    const quoteElement = document.getElementById('quote');
    if (quoteElement) {
        const quotes = [
            "Take one step at a time.",
            "You are stronger than you think.",
            "Believe in yourself!",
            "Every day is a new opportunity.",
            "Progress is progress, no matter how small."
        ];
        
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        quoteElement.innerText = randomQuote;
    }

    // Example: Simple form validation for self-assessment (if applicable)
    const form = document.getElementById('self-assessment-form');
    if (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault(); // Prevent form submission

            // Example: Simple validation to check if any field is left blank
            const inputs = form.querySelectorAll('input');
            let isValid = true;

            inputs.forEach(input => {
                if (!input.value) {
                    isValid = false;
                    input.classList.add('error');  // Add error class to invalid fields
                } else {
                    input.classList.remove('error');
                }
            });

            if (isValid) {
                // Proceed with form submission logic
                alert('Form submitted successfully!');
            } else {
                alert('Please fill in all the fields.');
            }
        });
    }

    // Example: Chatbot UI toggle (if applicable)
    const chatbotToggleBtn = document.getElementById('chatbot-toggle');
    const chatbotWindow = document.getElementById('chatbot-window');
    
    if (chatbotToggleBtn) {
        chatbotToggleBtn.addEventListener('click', function () {
            chatbotWindow.classList.toggle('active');
        });
    }
});

// Example: Simple function to handle updates in the self-assessment results
function updateSelfAssessmentResults(score) {
    const resultContainer = document.getElementById('assessment-result');
    if (resultContainer) {
        resultContainer.innerText = `Your mental health score is: ${score}`;
        resultContainer.classList.add(score > 7 ? 'positive' : 'negative');
    }
}

// Example: Function to load and show notifications (for notifications page)
function loadNotifications() {
    const notifications = [
        "Reminder: Your therapy session is tomorrow at 10 AM.",
        "New meditation session added: 'Mindful Breathing' for relaxation.",
        "Don't forget to take a break and relax your mind."
    ];

    const notificationContainer = document.getElementById('notifications-list');
    if (notificationContainer) {
        notifications.forEach(notification => {
            const notificationElement = document.createElement('li');
            notificationElement.innerText = notification;
            notificationContainer.appendChild(notificationElement);
        });
    }
}

// Call loadNotifications on page load if on notifications page
if (window.location.pathname === '/notifications.html') {
    loadNotifications();
}
