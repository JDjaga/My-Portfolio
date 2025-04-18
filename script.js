/*==== toggle icon navbar ===*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/*==== scroll section active link ===*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*="' + id + '"]').classList.add('active');
            });
        }
    });

    /*======= sticky navbar =======*/
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /*======= Removing toggle icon and navbar when click navbar link (scroll) =======*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

/*======= scroll reveal =======*/
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

/*-------- typed js ----------*/
const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Data Analyst', 'ML Engineer'],
    typeSpeed: 100,  // Corrected the typo from 'typespeed'
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const btn = document.getElementById('submit-btn');
    const originalText = btn.textContent;
    btn.textContent = 'Sending...';

    const form = event.target;
    const formData = new FormData(form);

    fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            btn.textContent = 'Sended';
            form.reset();
            setTimeout(() => {
                btn.textContent = originalText;
            }, 3000);
        } else {
            btn.textContent = 'Failed';
            setTimeout(() => {
                btn.textContent = originalText;
            }, 3000);
        }
    }).catch(() => {
        btn.textContent = 'Failed';
        setTimeout(() => {
            btn.textContent = originalText;
        }, 3000);
    });
});

// Blue neon particles background using tsParticles
window.addEventListener('DOMContentLoaded', () => {
  tsParticles.load("tsparticles", {
    fullScreen: { enable: true, zIndex: -1 },
    background: { color: "transparent" },
    particles: {
      number: { value: 40, density: { enable: true, value_area: 800 } },
      color: { value: "#0ef" }, // Neon blue
      shape: { type: "circle" },
      opacity: {
        value: 0.8,
        random: true,
        animation: { enable: true, speed: 1, minimumValue: 0.2, sync: false }
      },
      size: {
        value: 6,
        random: true,
        animation: { enable: true, speed: 2, minimumValue: 0.8, sync: false }
      },
      links: {
        enable: true,
        distance: 180,
        color: "#0ef", // Neon blue for links
        opacity: 0.4,
        width: 1.2
      },
      move: {
        enable: true,
        speed: 4,
        direction: "none",
        random: true,
        straight: false,
        outModes: { default: "bounce" },
        attract: { enable: true, rotateX: 800, rotateY: 1500 }
      },
      life: {
        duration: { sync: false, value: 20 },
        count: 1,
        delay: { random: { enable: true, minimumValue: 0.2 } }
      }
    },
    interactivity: {
      detectsOn: "window",
      events: {
        onHover: { enable: true, mode: "repulse" },
        onClick: { enable: true, mode: "push" },
        resize: true
      },
      modes: {
        repulse: { distance: 150, duration: 0.6 },
        push: { quantity: 2 }
      }
    },
    detectRetina: true,
    emitters: {
      direction: "top",
      rate: { quantity: 1, delay: 0.2 },
      size: { width: 100, height: 10 },
      position: { x: 50, y: 100 },
      life: { duration: 0.2, count: 1 }
    }
  });
});




