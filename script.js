document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const themeToggle = document.querySelector('#theme-toggle');
    const latestPostContent = document.getElementById('latest-post-content');

    // Hamburger menu toggle
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Theme toggle
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('light');
        themeToggle.textContent = document.body.classList.contains('light') ? '🌞' : '🌙';
        localStorage.setItem('theme', document.body.classList.contains('light') ? 'light' : 'dark');
    });

    // Load saved theme
    if (localStorage.getItem('theme') === 'light') {
        document.body.classList.add('light');
        themeToggle.textContent = '🌞';
    }

    // Display latest blog post on homepage
    const latestPost = {
        title: "NASA's Artemis III Mission Targets 2027 Lunar Landing",
        date: "May 1, 2025",
        excerpt: "NASA announced that Artemis III, the first crewed lunar landing since Apollo, is now scheduled for 2027. The mission will land astronauts near the lunar south pole, targeting water ice deposits for future exploration."
    };

    if (latestPostContent) {
        latestPostContent.innerHTML = `
            <article>
                <h2>${latestPost.title}</h2>
                <p>${latestPost.date}</p>
                <p>${latestPost.excerpt}</p>
                <a href="blog.html">Read More</a>
            </article>
        `;
    }
});

function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !message) {
        alert('Please fill in all fields!');
        return;
    }

    if (!email.includes('@') || !email.includes('.')) {
        alert('Please enter a valid email address!');
        return;
    }

    alert('Message sent successfully! We’ll get back to you soon.');
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
}