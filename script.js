// Wait for DOM content to load before executing JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // ============ Navigation Toggle for Mobile ============
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navLinksItems = document.querySelectorAll('.nav-links a');

    // Toggle mobile menu when hamburger is clicked
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }

    // Close mobile menu when a nav link is clicked
    navLinksItems.forEach(item => {
        item.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // ============ Active Navigation Link Highlighting ============
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-links a');

    // Function to set active navigation link based on scroll position
    function setActiveLink() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${current}`) {
                item.classList.add('active');
            }
        });
    }

    // Listen for scroll events to update active navigation
    window.addEventListener('scroll', setActiveLink);
    
    // Call setActiveLink on page load
    setActiveLink();

    // ============ Sticky Navigation ============
    const navbar = document.getElementById('navbar');
    const heroSection = document.getElementById('home');
    
    // Function to add/remove sticky class based on scroll position
    function toggleStickyNav() {
        if (window.scrollY > 50) {
            navbar.style.padding = '10px 0';
            navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.padding = '15px 0';
            navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
    }
    
    // Listen for scroll events to update navbar styling
    window.addEventListener('scroll', toggleStickyNav);
    
    // Call toggleStickyNav on page load
    toggleStickyNav();

    // ============ Project Filtering ============
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    // Filter projects based on category
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            filterBtns.forEach(filterBtn => {
                filterBtn.classList.remove('active');
            });
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get the filter value
            const filterValue = this.getAttribute('data-filter');
            
            // Show/hide projects based on filter
            projectCards.forEach(card => {
                if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 100);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });

    // ============ Skill Progress Animation ============
    const skillProgressBars = document.querySelectorAll('.skill-progress');
    
    // Initialize animated counters for stats
    const statCounters = document.querySelectorAll('.stat-number');
    
    // Function to start counter animation
    function animateCounters() {
        statCounters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-count'));
            const duration = 2000; // 2 seconds
            const increment = target / (duration / 16); // 60fps
            let current = 0;
            
            const updateCounter = () => {
                current += increment;
                if (current < target) {
                    counter.textContent = Math.ceil(current);
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target;
                }
            };
            
            updateCounter();
        });
    }
    
    // Function to animate skill bars when in viewport
    function animateSkillBars() {
        skillProgressBars.forEach(bar => {
            const percentage = bar.getAttribute('data-percentage');
            bar.style.width = percentage + '%';
        });
    }

    // ============ Scroll Animations ============
    const animateElements = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Check which section is visible
                if (entry.target.classList.contains('skills')) {
                    animateSkillBars();
                } else if (entry.target.classList.contains('about')) {
                    animateCounters();
                }
                
                // Add fadeInUp animation to the section
                entry.target.classList.add('fadeInUp');
                observer.unobserve(entry.target);
            }
        });
    };

    // Set up Intersection Observer for animations
    const options = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver(animateElements, options);
    
    // Observe all sections for animations
    sections.forEach(section => {
        observer.observe(section);
    });

    // ============ Contact Form Handling ============
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Basic form validation
            if (!name || !email || !subject || !message) {
                alert('Please fill in all fields');
                return;
            }
            
            // In a real application, you would send this data to a server
            // For now, we'll just show a success message
            alert('Message sent successfully!');
            contactForm.reset();
        });
    }

    // ============ Smooth Scrolling for All Anchor Links ============
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Calculate offset for navbar height
                const navHeight = navbar.offsetHeight;
                const targetPosition = targetElement.offsetTop - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});