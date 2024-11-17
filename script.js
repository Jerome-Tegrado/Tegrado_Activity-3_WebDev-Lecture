// Smooth Scroll for Navigation
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Gallery Animation
const galleryImages = document.querySelectorAll('#gallery img');
galleryImages.forEach(image => {
    image.addEventListener('mouseover', () => {
        image.style.transform = 'scale(1.05)';
        image.style.boxShadow = '0px 4px 15px rgba(0, 100, 0, 0.3)';
        image.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
    });
    image.addEventListener('mouseout', () => {
        image.style.transform = 'scale(1)';
        image.style.boxShadow = 'none';
    });
});

// Timeline Animation on Scroll
const timelineItems = document.querySelectorAll('.timeline li');
const timelineObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
            entry.target.style.transition = 'all 0.5s ease-in-out';
        } else {
            entry.target.style.opacity = 0;
            entry.target.style.transform = 'translateY(20px)';
        }
    });
}, { threshold: 0.2 });

timelineItems.forEach(item => {
    item.style.opacity = 0; // Initial state
    item.style.transform = 'translateY(20px)';
    timelineObserver.observe(item);
});

// Contact Form Feedback
document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert(`Thank you, ${name}! Your message has been sent successfully.`);
        this.reset(); // Reset form fields
    } else {
        alert('Please fill in all fields before submitting.');
    }
});

// Back to Top Button
const backToTopButton = document.createElement('button');
backToTopButton.innerText = '⬆';
backToTopButton.classList.add('back-to-top');
backToTopButton.style.position = 'fixed';
backToTopButton.style.bottom = '20px';
backToTopButton.style.right = '20px';
backToTopButton.style.display = 'none';
backToTopButton.style.backgroundColor = '#006400';
backToTopButton.style.color = '#fff';
backToTopButton.style.border = 'none';
backToTopButton.style.padding = '10px 15px';
backToTopButton.style.borderRadius = '50%';
backToTopButton.style.cursor = 'pointer';
backToTopButton.style.zIndex = 1000;
document.body.appendChild(backToTopButton);

// Show/Hide Back to Top Button
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

// Scroll to Top
backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// IntersectionObserver to handle animations
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('appear'); // Add the "appear" class when in view
        } else {
            entry.target.classList.remove('appear'); // Remove the "appear" class when out of view
        }
    });
}, { threshold: 0.3 }); // Trigger the animation when 30% of the item is visible

timelineItems.forEach(item => {
    item.style.opacity = 0; // Initial state (hidden)
    observer.observe(item);
});

// Add hover effects for portfolio cards
const portfolioCards = document.querySelectorAll('.card');
portfolioCards.forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.transform = 'scale(1.05)';
        card.style.transition = 'transform 0.3s ease';
    });
    card.addEventListener('mouseout', () => {
        card.style.transform = 'scale(1)';
    });
});

// Initialize Bootstrap Accordion
document.querySelectorAll('.accordion-button').forEach(button => {
    button.addEventListener('click', () => {
        const allPanels = document.querySelectorAll('.accordion-collapse');
        allPanels.forEach(panel => {
            if (!button.classList.contains('collapsed')) {
                panel.classList.remove('show');
            }
        });
    });
});

// Skills Chart using Chart.js
const ctx = document.getElementById('skillsCanvas').getContext('2d');

// Data for the chart
new Chart(ctx, {
    type: 'pie', // You can use 'doughnut' or 'bar' for different visuals
    data: {
        labels: ['HTML', 'CSS', 'JavaScript', 'C++', 'UI/UX'], // Skill labels
        datasets: [{
            data: [90, 85, 75, 70, 80], // Percentage values for each skill
            backgroundColor: [
                '#006400', // Green for HTML
                '#9acd32', // Light Green for CSS
                '#f4a261', // Orange for JavaScript
                '#2a9d8f', // Blue-green for C++
                '#264653'  // Dark Blue for UI/UX
            ],
            borderColor: '#fff',
            borderWidth: 2
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom', // Legend position
                labels: {
                    color: '#333', // Legend text color
                    font: {
                        size: 14
                    }
                }
            }
        }
    }
});
