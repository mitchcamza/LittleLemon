// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            
            // Animate hamburger icon
            const icon = this.querySelector('i') || this;
            if (navLinks.classList.contains('active')) {
                icon.textContent = '✕';
            } else {
                icon.textContent = '☰';
            }
        });
    }

    // Close mobile menu when clicking a link
    const navLinkItems = document.querySelectorAll('.nav-links a');
    navLinkItems.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                navLinks.classList.remove('active');
                const toggle = document.querySelector('.mobile-menu-toggle');
                if (toggle) {
                    toggle.textContent = '☰';
                }
            }
        });
    });

    // Navbar scroll effect
    const nav = document.querySelector('nav');
    let lastScroll = 0;

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    });

    // Scroll Animation Observer
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe cards and features
    const animatedElements = document.querySelectorAll('.card, .feature-item');
    animatedElements.forEach(el => observer.observe(el));

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && document.querySelector(href)) {
                e.preventDefault();
                document.querySelector(href).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Form validation and submission
    const bookingForm = document.getElementById('booking-form');
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic validation
            const name = document.getElementById('name').value.trim();
            const guests = document.getElementById('guests').value;
            const date = document.getElementById('date').value;

            if (!name || !guests || !date) {
                showAlert('Please fill in all fields', 'error');
                return;
            }

            // Submit form (will be handled by Django)
            this.submit();
        });
    }

    // Delete booking confirmation
    const deleteButtons = document.querySelectorAll('.delete-booking');
    deleteButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            if (!confirm('Are you sure you want to cancel this booking?')) {
                e.preventDefault();
            }
        });
    });

    // Set active nav link based on current page
    const currentLocation = window.location.pathname;
    const navLinksArray = document.querySelectorAll('.nav-links a');
    navLinksArray.forEach(link => {
        if (link.getAttribute('href') === currentLocation) {
            link.classList.add('active');
        }
    });

    // Alert system
    window.showAlert = function(message, type = 'info') {
        const alertDiv = document.createElement('div');
        alertDiv.className = `alert alert-${type}`;
        alertDiv.textContent = message;
        
        const container = document.querySelector('.container') || document.body;
        container.insertBefore(alertDiv, container.firstChild);
        
        setTimeout(() => {
            alertDiv.style.opacity = '0';
            setTimeout(() => alertDiv.remove(), 300);
        }, 3000);
    };

    // Add stagger animation delay to cards
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });

    // Add stagger animation delay to features
    const features = document.querySelectorAll('.feature-item');
    features.forEach((feature, index) => {
        feature.style.animationDelay = `${index * 0.15}s`;
    });

    // Parallax effect for hero section
    const hero = document.querySelector('.hero');
    if (hero) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        });
    }

    // Load menu items dynamically (if on menu page)
    const menuContainer = document.getElementById('menu-items');
    if (menuContainer && menuContainer.dataset.loadDynamic === 'true') {
        loadMenuItems();
    }

    async function loadMenuItems() {
        try {
            const response = await fetch('/restaurant/menu/');
            const data = await response.json();
            
            if (data && data.length > 0) {
                displayMenuItems(data);
            }
        } catch (error) {
            console.error('Error loading menu items:', error);
        }
    }

    function displayMenuItems(items) {
        const container = document.getElementById('menu-items');
        container.innerHTML = '';
        
        items.forEach((item, index) => {
            const card = document.createElement('div');
            card.className = 'card';
            card.style.animationDelay = `${index * 0.1}s`;
            
            card.innerHTML = `
                <img src="/static/restaurant/images/food-${(index % 6) + 1}.jpg" alt="${item.title}" class="card-image">
                <div class="card-content">
                    <h3 class="card-title">${item.title}</h3>
                    <div class="card-footer">
                        <span class="card-price">$${item.price}</span>
                        <span class="card-inventory">Available: ${item.inventory}</span>
                    </div>
                </div>
            `;
            
            container.appendChild(card);
            
            // Trigger animation
            setTimeout(() => card.classList.add('visible'), 50);
        });
    }

    // Add to date input default min date (today)
    const dateInputs = document.querySelectorAll('input[type="date"]');
    dateInputs.forEach(input => {
        const today = new Date().toISOString().split('T')[0];
        input.setAttribute('min', today);
    });
});
