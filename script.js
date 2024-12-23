document.querySelectorAll('a.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        window.scrollTo({
            top: target.offsetTop - document.querySelector('.navbar').offsetHeight - 20, // Adds space above
            behavior: 'smooth'
        });
    });
});

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
    item.style.opacity = 0;
    item.style.transform = 'translateY(20px)';
    timelineObserver.observe(item);
});

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

const ctx = document.getElementById('skillsCanvas').getContext('2d');
new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Eat', 'Sleep', 'Phone', 'Desktop'],
        datasets: [{
            data: [90, 90, 90, 90],
            backgroundColor: [
                '#006400',
                '#9acd32',
                '#f4a261',
                '#2a9d8f',
                '#264653'
            ],
            borderColor: '#fff',
            borderWidth: 2
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    color: '#333',
                    font: {
                        size: 14
                    }
                }
            }
        }
    }
});

document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert(`Thank you, ${name}! Your message has been sent successfully.`);
        this.reset();
    } else {
        alert('Please fill in all fields before submitting.');
    }
});

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

const backToTopLink = document.createElement('a');
backToTopLink.href = '#';
backToTopLink.style.backgroundImage = "url('assets/images/up-arrow.webp')";
backToTopLink.style.backgroundSize = 'cover';
backToTopLink.style.backgroundRepeat = 'no-repeat';
backToTopLink.style.backgroundPosition = 'center';
backToTopLink.style.width = '50px';
backToTopLink.style.height = '50px';
backToTopLink.style.position = 'fixed';
backToTopLink.style.bottom = '20px';
backToTopLink.style.right = '20px';
backToTopLink.style.display = 'none';
backToTopLink.style.border = 'none';
backToTopLink.style.borderRadius = '50%';
backToTopLink.style.cursor = 'pointer';
backToTopLink.style.zIndex = 1000;
backToTopLink.style.boxShadow = '0px 4px 10px rgba(0, 0, 0, 0.2)';
backToTopLink.style.animation = 'scaleEffect 2s infinite, haloEffect 1.5s infinite';
document.body.appendChild(backToTopLink);

const style = document.createElement('style');
style.innerHTML = `
    @keyframes scaleEffect {
        0%, 100% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.1);
        }
    }

    @keyframes haloEffect {
        0%, 100% {
            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
        }
        50% {
            box-shadow: 0px 0px 20px rgba(0, 255, 0, 0.6);
        }
    }
`;
document.head.appendChild(style);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopLink.style.display = 'block';
        backToTopLink.style.opacity = '1';
    } else {
        backToTopLink.style.display = 'none';
    }
});
