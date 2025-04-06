// Main JavaScript file for portfolio website

document.addEventListener('DOMContentLoaded', function() {
    // Initialize animations and interactions once DOM is loaded
    initTypewriterEffect();
    initProjectFilters();
    initScrollAnimations();
    setupContactForm();
    initSkillBars();
    
    // Mobile menu toggle
    const menuToggle = document.getElementById('mobile-menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            menuToggle.classList.toggle('open');
        });
    }
});

// Typewriter effect for hero section
function initTypewriterEffect() {
    const typewriterElement = document.getElementById('typewriter-text');
    if (!typewriterElement) return;
    
    const titles = ['Web Developer', 'Data Scientist', 'Problem Solver', 'Tech Enthusiast'];
    let titleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    function type() {
        const currentTitle = titles[titleIndex];
        
        if (isDeleting) {
            typewriterElement.textContent = currentTitle.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typewriterElement.textContent = currentTitle.substring(0, charIndex + 1);
            charIndex++;
        }
        
        // Speed adjustments for realistic typing effect
        let typeSpeed = isDeleting ? 50 : 150;
        
        // If complete word
        if (!isDeleting && charIndex === currentTitle.length) {
            typeSpeed = 1500; // Pause at end of word
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            titleIndex = (titleIndex + 1) % titles.length;
            typeSpeed = 500; // Pause before typing next word
        }
        
        setTimeout(type, typeSpeed);
    }
    
    setTimeout(type, 1000);
}

// Project filtering functionality
function initProjectFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectItems = document.querySelectorAll('.project-item');
    
    if (filterBtns.length === 0 || projectItems.length === 0) return;
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons and add to clicked button
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter');
            
            // Show/hide projects based on filter
            projectItems.forEach(item => {
                if (filterValue === 'all' || item.classList.contains(filterValue)) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = 1;
                        item.style.transform = 'scale(1)';
                    }, 50);
                } else {
                    item.style.opacity = 0;
                    item.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

// Animate elements when scrolled into view
function initScrollAnimations() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    if (elements.length === 0) return;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2
    });
    
    elements.forEach(element => {
        observer.observe(element);
    });
}

// Contact form validation and submission
function setupContactForm() {
    const contactForm = document.getElementById('contact-form');
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');
        const statusMsg = document.getElementById('form-status');
        
        if (validateForm(nameInput, emailInput, messageInput)) {
            // Form is valid - in a real application, you would send data to server here
            // Simulate form submission
            statusMsg.textContent = "Thanks for your message! I'll get back to you soon.";
            statusMsg.className = 'success';
            contactForm.reset();
            
            // Hide success message after 5 seconds
            setTimeout(() => {
                statusMsg.textContent = '';
                statusMsg.className = '';
            }, 5000);
        }
    });
    
    function validateForm(nameInput, emailInput, messageInput) {
        let isValid = true;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        // Reset previous validation messages
        document.querySelectorAll('.error-message').forEach(el => el.remove());
        
        // Validate name
        if (nameInput.value.trim() === '') {
            showError(nameInput, 'Please enter your name');
            isValid = false;
        }
        
        // Validate email
        if (!emailRegex.test(emailInput.value)) {
            showError(emailInput, 'Please enter a valid email address');
            isValid = false;
        }
        
        // Validate message
        if (messageInput.value.trim() === '') {
            showError(messageInput, 'Please enter your message');
            isValid = false;
        }
        
        return isValid;
    }
    
    function showError(input, message) {
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.textContent = message;
        input.parentNode.appendChild(errorDiv);
        input.classList.add('error');
        
        // Remove error styling when input changes
        input.addEventListener('input', function() {
            this.classList.remove('error');
            const error = this.parentNode.querySelector('.error-message');
            if (error) {
                error.remove();
            }
        }, { once: true });
    }
}

// Animate skill bars to show proficiency
function initSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    if (skillBars.length === 0) return;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target;
                const percentage = progressBar.getAttribute('data-progress');
                progressBar.style.width = percentage + '%';
                observer.unobserve(progressBar);
            }
        });
    }, {
        threshold: 0.2
    });
    
    skillBars.forEach(bar => {
        observer.observe(bar);
    });
}

// Dark mode toggle functionality
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    
    // Save preference to localStorage
    localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');
    
    // Update toggle button text/icon if it exists
    const toggleBtn = document.getElementById('dark-mode-toggle');
    if (toggleBtn) {
        toggleBtn.innerHTML = isDarkMode ? 
            '<i class="fas fa-sun"></i>' : 
            '<i class="fas fa-moon"></i>';
    }
}

// Check for saved dark mode preference on load
function checkDarkModePreference() {
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
        
        const toggleBtn = document.getElementById('dark-mode-toggle');
        if (toggleBtn) {
            toggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
        }
    }
}

// Initialize dark mode preferences
checkDarkModePreference();