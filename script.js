// Navbar scroll effect
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

// Buat backdrop element secara dinamis
const backdrop = document.createElement('div');
backdrop.classList.add('nav-backdrop');
document.body.appendChild(backdrop);

// Fungsi buka menu
function openMenu() {
    hamburger.classList.add('active');
    navLinks.classList.add('active');
    backdrop.classList.add('active');
    document.body.classList.add('menu-open');
    document.documentElement.classList.add('menu-open'); // kunci html juga
}

// Fungsi tutup menu
function closeMenu() {
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
    backdrop.classList.remove('active');
    document.body.classList.remove('menu-open');
    document.documentElement.classList.remove('menu-open'); // buka kunci html
}

hamburger.addEventListener('click', () => {
    if (navLinks.classList.contains('active')) {
        closeMenu();
    } else {
        openMenu();
    }
});

// Tutup menu saat klik backdrop
backdrop.addEventListener('click', closeMenu);

// Close mobile menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        closeMenu();
    });
});

// Page transition smooth out
document.querySelectorAll('.page-transition').forEach(link => {
    link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        // If it's a real link (not an anchor id on the same page)
        if (href && !href.startsWith('#')) {
            e.preventDefault();
            document.body.classList.add('fade-out');
            setTimeout(() => {
                window.location.href = href;
            }, 400); // 400ms matches the CSS transition
        }
    });
});
