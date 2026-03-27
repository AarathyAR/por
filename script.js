// 1. Smooth Scrolling
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if(target) target.scrollIntoView({ behavior: 'smooth' });
    });
});

// 2. Hobby Data
const hobbyData = {
    dance: {
        title: "Artistic Movement",
        text: "My approach to dance is rooted in the fusion of classical discipline and contemporary freedom. I view choreography as a visual extension of web development—both require structure, timing, and an eye for aesthetics."
    },
    horology: {
        title: "Mechanical Craftsmanship",
        text: "I am a dedicated collector of vintage timepieces, with a specific focus on 1970s Japanese engineering. Understanding the intricate gear-work of a mechanical watch helps me appreciate the 'unseen' architecture in coding."
    },
    exploration: {
        title: "Curated Exploration",
        text: "I travel to find the intersection of culture and commerce. From the bustling night markets of Thailand to the historic lanes of Bangalore, I document the sensory details that make every location unique."
    }
};

// 3. Modal Functions - FIXED for Centering & Scroll Lock
function openModal(hobby) {
    const modal = document.getElementById("hobbyModal");
    const body = document.getElementById("modalBody");
    const data = hobbyData[hobby];
    
    // Injecting the content into the bubble
    body.innerHTML = `
        <h2 style="color: #00f3ff; margin-bottom: 20px; font-size: 2rem;">${data.title}</h2>
        <p style="font-size: 1.1rem; line-height: 1.8; color: #ccc;">${data.text}</p>
    `;
    
    modal.style.display = "flex"; // Centering the bubble
    document.body.style.overflow = "hidden"; // Locks the background mouse movement
}

function closeModal() {
    document.getElementById("hobbyModal").style.display = "none";
    document.body.style.overflow = "auto"; // Re-enables scrolling
}

// Close modal when clicking outside the bubble
window.onclick = function(event) {
    const modal = document.getElementById("hobbyModal");
    if (event.target == modal) closeModal();
}

// 4. Skill Bar Observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.querySelectorAll('.line').forEach(line => {
                line.style.transform = "scaleX(1)";
            });
        }
    });
}, { threshold: 0.2 });

const resumeSection = document.querySelector('.resume-grid');
if (resumeSection) observer.observe(resumeSection);