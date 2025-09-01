// index.js

// Function to show a section by ID
function showSection(sectionId) {
  // Hide all sections
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    section.classList.remove('active');
  });

  // Show the selected section
  const activeSection = document.getElementById(sectionId);
  if (activeSection) {
    activeSection.classList.add('active');
    // Optional: scroll to top of section
    activeSection.scrollIntoView({ behavior: 'smooth' });
  }
}

// Open Login Modal
function openLoginModal() {
  document.getElementById('loginModal').style.display = 'flex';
}

// Close Login Modal
function closeLoginModal() {
  document.getElementById('loginModal').style.display = 'none';
}

// Open Register Modal
function openRegisterModal() {
  document.getElementById('registerModal').style.display = 'flex';
}

// Close Register Modal
function closeRegisterModal() {
  document.getElementById('registerModal').style.display = 'none';
}

// Optional: Close modal when clicking outside the content
window.addEventListener('click', function (e) {
  const loginModal = document.getElementById('loginModal');
  const registerModal = document.getElementById('registerModal');

  if (e.target === loginModal) closeLoginModal();
  if (e.target === registerModal) closeRegisterModal();
});
// JS for Service Section Modal
document.addEventListener('DOMContentLoaded', () => {
  const serviceButtons = document.querySelectorAll(
    '#services .service-card button'
  );
  const modalContainer = document.createElement('div');
  modalContainer.id = 'serviceModal';
  modalContainer.classList.add('modal');
  modalContainer.innerHTML = `
    <div class="modal-content">
      <span class="close">&times;</span>
      <h2 id="serviceTitle"></h2>
      <p id="serviceDescription"></p>
    </div>
  `;
  document.body.appendChild(modalContainer);

  const modal = document.getElementById('serviceModal');
  const closeModalBtn = modal.querySelector('.close');
  const titleElem = document.getElementById('serviceTitle');
  const descElem = document.getElementById('serviceDescription');

  // Service descriptions (customize as needed)
  const servicesData = {
    'Reading Room':
      'Quiet, well-ventilated study rooms with desks, chairs, and ample lighting for focused study.',
    Canteen:
      'Clean, hygienic canteen serving multiple food options including breakfast, lunch, and snacks.',
    'Study Room':
      'Equipped with computers and high-speed Wi-Fi for research, assignments, and academic work.',
    'Sports Ground':
      'Large, well-maintained sports ground with proper lighting for football, cricket, and other sports.',
    'Medical Support':
      'Doctor on call and first-aid available for emergencies along with basic health checkups.',
    Security:
      '24/7 trained security personnel with CCTV monitoring and controlled entry for student safety.',
  };

  // Show modal on button click
  serviceButtons.forEach(btn => {
    btn.addEventListener('click', e => {
      const card = e.target.closest('.service-card');
      const serviceName = card.querySelector('h3').innerText;
      titleElem.innerText = serviceName;
      descElem.innerText =
        servicesData[serviceName] || 'Details not available.';
      modal.style.display = 'flex';
    });
  });

  // Close modal on clicking X
  closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  // Close modal on clicking outside content
  window.addEventListener('click', e => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
});
// Animate Admin Card on Button Click
const adminButtons = document.querySelectorAll('.admin-btn');

adminButtons.forEach(btn => {
  btn.addEventListener('click', e => {
    const card = e.target.closest('.admin-card');

    // Add animation class
    card.classList.add('clicked-card');

    // Remove animation class after 0.5s
    setTimeout(() => {
      card.classList.remove('clicked-card');
    }, 500);

    alert('Appointment scheduling feature coming soon!'); // placeholder action
  });
});
 // Simple interactivity for the dashboard
        document.addEventListener('DOMContentLoaded', function() {
            // Add click event to action buttons
            const actionButtons = document.querySelectorAll('.action-btn');
            actionButtons.forEach(button => {
                button.addEventListener('click', function() {
                    alert('Action triggered: ' + this.textContent.trim());
                });
            });
            
            // Add hover effect to stat cards
            const statCards = document.querySelectorAll('.stat-card');
            statCards.forEach(card => {
                card.addEventListener('mouseenter', function() {
                    this.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.15)';
                });
                
                card.addEventListener('mouseleave', function() {
                    this.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
                });
            });
        });
