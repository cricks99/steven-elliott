// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        
        // Animate hamburger to X
        const spans = hamburger.querySelectorAll('span');
        if (navMenu.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
    
    // Close menu when clicking on a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            const spans = hamburger.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        });
    });
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerHeight = document.querySelector('.main-header').offsetHeight;
            const targetPosition = target.offsetTop - headerHeight;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Donation Amount Selection (enhanced)
document.querySelectorAll('.amount-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        // Remove active class from all buttons
        document.querySelectorAll('.amount-btn').forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        this.classList.add('active');
        
        // Handle custom amount
        if (this.dataset.amount === 'custom') {
            const customAmount = prompt('Enter custom donation amount (max $2,900):');
            if (customAmount && !isNaN(customAmount)) {
                const amount = parseFloat(customAmount);
                if (amount > 2900) {
                    alert('Maximum donation amount is $2,900 per election cycle.');
                    return;
                }
                if (amount < 1) {
                    alert('Minimum donation amount is $1.');
                    return;
                }
                this.textContent = `$${amount}`;
                this.dataset.amount = amount;
                document.getElementById('donation-amount').value = amount;
            }
        } else {
            document.getElementById('donation-amount').value = this.dataset.amount;
        }
        
        // Show immediate feedback
        const donateBtn = document.querySelector('.btn-donate-large');
        donateBtn.classList.add('highlight-pulse');
        setTimeout(() => {
            donateBtn.classList.remove('highlight-pulse');
        }, 1000);
    });
});

// Modal functionality
const modal = document.getElementById('modal');
const modalBody = document.getElementById('modal-body');
const closeBtn = document.querySelector('.close');

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Volunteer Form
function showVolunteerForm() {
    modalBody.innerHTML = `
        <h2>Volunteer for Steven Elliott</h2>
        <form id="volunteer-form">
            <div class="form-group">
                <label for="name">Full Name *</label>
                <input type="text" id="name" name="name" required>
            </div>
            <div class="form-group">
                <label for="email">Email *</label>
                <input type="email" id="email" name="email" required>
            </div>
            <div class="form-group">
                <label for="phone">Phone</label>
                <input type="tel" id="phone" name="phone">
            </div>
            <div class="form-group">
                <label for="zip">ZIP Code *</label>
                <input type="text" id="zip" name="zip" required>
            </div>
            <div class="form-group">
                <label for="volunteer-type">How would you like to help?</label>
                <select id="volunteer-type" name="volunteer-type">
                    <option value="">Select an option</option>
                    <option value="phone-bank">Phone Banking</option>
                    <option value="door-knock">Door Knocking</option>
                    <option value="sign-wave">Sign Waving</option>
                    <option value="office">Office Support</option>
                    <option value="events">Event Support</option>
                    <option value="social-media">Social Media</option>
                </select>
            </div>
            <div class="form-group">
                <label for="message">Additional Comments</label>
                <textarea id="message" name="message"></textarea>
            </div>
            <button type="submit" class="form-submit">Sign Up to Volunteer</button>
        </form>
    `;
    modal.style.display = 'block';
    
    // Handle form submission
    document.getElementById('volunteer-form').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for volunteering! We will contact you soon.');
        modal.style.display = 'none';
    });
}

// Event Hosting Form
function showEventForm() {
    modalBody.innerHTML = `
        <h2>Host an Event with Steven</h2>
        <form id="event-form">
            <div class="form-group">
                <label for="host-name">Your Name *</label>
                <input type="text" id="host-name" name="host-name" required>
            </div>
            <div class="form-group">
                <label for="host-email">Email *</label>
                <input type="email" id="host-email" name="host-email" required>
            </div>
            <div class="form-group">
                <label for="host-phone">Phone *</label>
                <input type="tel" id="host-phone" name="host-phone" required>
            </div>
            <div class="form-group">
                <label for="event-type">Event Type</label>
                <select id="event-type" name="event-type">
                    <option value="">Select an option</option>
                    <option value="meet-greet">Meet & Greet</option>
                    <option value="fundraiser">Fundraiser</option>
                    <option value="town-hall">Town Hall</option>
                    <option value="coffee">Coffee with Steven</option>
                </select>
            </div>
            <div class="form-group">
                <label for="event-date">Preferred Date</label>
                <input type="date" id="event-date" name="event-date">
            </div>
            <div class="form-group">
                <label for="event-location">Event Location/Address</label>
                <input type="text" id="event-location" name="event-location">
            </div>
            <div class="form-group">
                <label for="expected-attendees">Expected Number of Attendees</label>
                <input type="number" id="expected-attendees" name="expected-attendees">
            </div>
            <button type="submit" class="form-submit">Submit Event Request</button>
        </form>
    `;
    modal.style.display = 'block';
    
    // Handle form submission
    document.getElementById('event-form').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for offering to host an event! Our team will contact you soon.');
        modal.style.display = 'none';
    });
}

// Yard Sign Request Form
function showSignForm() {
    modalBody.innerHTML = `
        <h2>Request a Yard Sign</h2>
        <form id="sign-form">
            <div class="form-group">
                <label for="sign-name">Full Name *</label>
                <input type="text" id="sign-name" name="sign-name" required>
            </div>
            <div class="form-group">
                <label for="sign-email">Email *</label>
                <input type="email" id="sign-email" name="sign-email" required>
            </div>
            <div class="form-group">
                <label for="sign-phone">Phone</label>
                <input type="tel" id="sign-phone" name="sign-phone">
            </div>
            <div class="form-group">
                <label for="sign-address">Street Address *</label>
                <input type="text" id="sign-address" name="sign-address" required>
            </div>
            <div class="form-group">
                <label for="sign-city">City *</label>
                <input type="text" id="sign-city" name="sign-city" required>
            </div>
            <div class="form-group">
                <label for="sign-zip">ZIP Code *</label>
                <input type="text" id="sign-zip" name="sign-zip" required>
            </div>
            <div class="form-group">
                <label for="sign-quantity">Number of Signs</label>
                <select id="sign-quantity" name="sign-quantity">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5+</option>
                </select>
            </div>
            <button type="submit" class="form-submit">Request Yard Sign</button>
        </form>
    `;
    modal.style.display = 'block';
    
    // Handle form submission
    document.getElementById('sign-form').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your yard sign request! We will arrange delivery soon.');
        modal.style.display = 'none';
    });
}

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroFlag = document.querySelector('.hero-flag');
    if (heroFlag) {
        heroFlag.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Add scroll reveal animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for scroll animations
document.querySelectorAll('.issue-card, .cta-card, .bio-section').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Enhanced Header scroll effect
let lastScroll = 0;
const header = document.querySelector('.main-header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    // Hide header on scroll down, show on scroll up
    if (currentScroll > lastScroll && currentScroll > 200) {
        header.style.transform = 'translateY(-100%)';
    } else {
        header.style.transform = 'translateY(0)';
    }
    
    lastScroll = currentScroll;
});

// Quick donate functionality
function quickDonate(amount) {
    // Remove active class from all buttons
    document.querySelectorAll('.amount-btn').forEach(btn => btn.classList.remove('active'));
    
    // Add active class to clicked button
    const clickedBtn = document.querySelector(`[data-amount="${amount}"]`);
    if (clickedBtn) {
        clickedBtn.classList.add('active');
    }
    
    // Set the amount in the hidden form field
    document.getElementById('donation-amount').value = amount;
    
    // Scroll to the donation form
    document.querySelector('.btn-donate-large').scrollIntoView({ 
        behavior: 'smooth', 
        block: 'center' 
    });
    
    // Add highlight effect to donate button
    const donateBtn = document.querySelector('.btn-donate-large');
    donateBtn.classList.add('highlight-pulse');
    setTimeout(() => {
        donateBtn.classList.remove('highlight-pulse');
    }, 2000);
}

// Donation form handler
document.getElementById('donation-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    let amount = document.getElementById('donation-amount').value;
    
    // If no amount selected, check for active button
    if (!amount) {
        const selectedAmount = document.querySelector('.amount-btn.active');
        if (selectedAmount) {
            amount = selectedAmount.dataset.amount === 'custom' ? 
                selectedAmount.textContent.replace('$', '') : 
                selectedAmount.dataset.amount;
        }
    }
    
    if (amount && amount !== 'custom') {
        // Simulate redirect to secure donation processor
        window.open(`https://secure.actblue.com/donate/stevenelliott?amount=${amount}`, '_blank');
        
        // Show thank you message
        alert(`Thank you for your $${amount} contribution! You're being redirected to our secure donation processor.`);
        
        // Track conversion (in real implementation, this would be analytics)
        console.log(`Donation conversion: $${amount}`);
    } else {
        alert('Please select a donation amount.');
    }
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Sticky donate button functionality
document.addEventListener('DOMContentLoaded', function() {
    const stickyDonate = document.querySelector('.sticky-donate');
    const donateSection = document.getElementById('donate');
    
    if (stickyDonate && donateSection) {
        window.addEventListener('scroll', () => {
            const donateRect = donateSection.getBoundingClientRect();
            const isInView = donateRect.top < window.innerHeight && donateRect.bottom > 0;
            
            if (isInView) {
                stickyDonate.style.display = 'none';
            } else {
                stickyDonate.style.display = 'block';
            }
        });
    }
});

// Donation section enhancements
document.addEventListener('DOMContentLoaded', function() {
    // Auto-highlight most popular amount
    setTimeout(() => {
        const popularBtn = document.querySelector('.amount-popular');
        if (popularBtn) {
            popularBtn.classList.add('recommended-flash');
            setTimeout(() => {
                popularBtn.classList.remove('recommended-flash');
            }, 3000);
        }
    }, 2000);
    
    // Progress bar animation
    const progressFill = document.querySelector('.progress-fill');
    if (progressFill) {
        const targetWidth = progressFill.style.width;
        progressFill.style.width = '0%';
        
        setTimeout(() => {
            progressFill.style.transition = 'width 2s ease-out';
            progressFill.style.width = targetWidth;
        }, 500);
    }
});