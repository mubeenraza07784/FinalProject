
$(document).ready(function () {
    $(".loader").fadeIn("slow");

    setTimeout(function () {
        $(".loader").fadeOut("slow", function () {
            $(".container").fadeIn("slow");
        });
    }, 2000);
});
document.addEventListener("DOMContentLoaded", function () {
    // Scroll Animation Trigger
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__fadeInUp');
                entry.target.classList.add('animate__animated');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('section, .home-section-three-about-container, .home-section-four-service-card-container').forEach((section) => {
        observer.observe(section);
    });

    // Counter Animation
    const counterObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counters = document.querySelectorAll('.home-section-two-counter');
                counters.forEach(counter => {
                    counter.innerText = '0';
                    const updateCounter = () => {
                        const target = +counter.getAttribute('data-target');
                        const current = +counter.innerText;
                        const increment = target / 100;
                        if (current < target) {
                            counter.innerText = `${Math.ceil(current + increment)}`;
                            setTimeout(updateCounter, 25);
                        } else {
                            counter.innerText = target;
                        }
                    };
                    updateCounter();
                });
                counterObserver.disconnect();
            }
        });
    }, { threshold: 0.5 });

    const counterSection = document.querySelector('#section-two');
    if (counterSection) counterObserver.observe(counterSection);
});

