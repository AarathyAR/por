document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if(target) target.scrollIntoView({ behavior: 'smooth' });
    });
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.querySelectorAll('.line').forEach(line => {
                line.style.transform = "scaleX(1)";
            });
        }
    });
}, { threshold: 0.3 });

const resume = document.querySelector('.resume-grid');
if (resume) observer.observe(resume);

window.addEventListener('scroll', () => {
    let current = "";
    const sections = document.querySelectorAll("section, header");
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 150) {
            current = section.getAttribute("id");
        }
    });

    document.querySelectorAll(".nav-links a").forEach((a) => {
        a.classList.remove("active");
        if (a.getAttribute("href").includes(current)) {
            a.classList.add("active");
        }
    });
});