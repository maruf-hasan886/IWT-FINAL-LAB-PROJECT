// Function to show/hide sections
function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Show the selected section
    document.getElementById(sectionId).classList.add('active');
    
    // Update navigation active state
    document.querySelectorAll('.nav-card').forEach(card => {
        card.classList.remove('active');
    });
    
    // Add active class to the clicked nav card
    event.currentTarget.classList.add('active');
    
    // Scroll to top
    window.scrollTo(0, 0);
}

// Modal functions
function openLoginModal() {
    document.getElementById('loginModal').style.display = 'flex';
}

function closeLoginModal() {
    document.getElementById('loginModal').style.display = 'none';
}

function openRegisterModal() {
    document.getElementById('registerModal').style.display = 'flex';
}

function closeRegisterModal() {
    document.getElementById('registerModal').style.display = 'none';
}

// Close modals when clicking outside
window.onclick = function(event) {
    const loginModal = document.getElementById('loginModal');
    const registerModal = document.getElementById('registerModal');
    
    if (event.target === loginModal) {
        closeLoginModal();
    }
    
    if (event.target === registerModal) {
        closeRegisterModal();
    }
}

// Form submission handlers
document.addEventListener('DOMContentLoaded', function() {
    // Bill form submission
    const billForm = document.getElementById('billForm');
    if (billForm) {
        billForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const billMsg = document.getElementById('billMsg');
            billMsg.textContent = 'Payment processed successfully!';
            billMsg.style.display = 'block';
            billForm.reset();
            
            // Hide message after 3 seconds
            setTimeout(() => {
                billMsg.style.display = 'none';
            }, 3000);
        });
    }
    
    // Room form submission
    const roomForm = document.getElementById('roomForm');
    if (roomForm) {
        roomForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Room allocation request submitted successfully!');
            roomForm.reset();
        });
    }
    
    // Notice form submission
    const noticeForm = document.getElementById('noticeForm');
    if (noticeForm) {
        noticeForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Notice posted successfully!');
            noticeForm.reset();
        });
    }
    
    // Booking form submission
    const bookingForm = document.getElementById('bookingForm');
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Facility booking request submitted!');
            bookingForm.reset();
        });
    }
    
    // Complaint form submission
    const complaintForm = document.getElementById('complaintForm');
    if (complaintForm) {
        complaintForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Complaint submitted successfully!');
            complaintForm.reset();
        });
    }
    
    // Set minimum date for booking to today
    const bookingDate = document.getElementById('bookingDate');
    if (bookingDate) {
        const today = new Date().toISOString().split('T')[0];
        bookingDate.setAttribute('min', today);
    }
    
    // Initialize stats counter animation
    animateStats();
});

// Stats counter animation
function animateStats() {
    const statCards = document.querySelectorAll('.stat-card');
    
    statCards.forEach(card => {
        const valueElement = card.querySelector('h3');
        const finalValue = parseInt(valueElement.textContent);
        let currentValue = 0;
        const duration = 2000; // 2 seconds
        const increment = finalValue / (duration / 16); // 60fps
        
        const timer = setInterval(() => {
            currentValue += increment;
            if (currentValue >= finalValue) {
                valueElement.textContent = finalValue;
                clearInterval(timer);
            } else {
                valueElement.textContent = Math.floor(currentValue);
            }
        }, 16);
    });
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // Set home as active section
    showSection('home');
    
    // Add active class to home nav card
    document.querySelector('.nav-card[onclick="showSection(\'home\')"]').classList.add('active');
});