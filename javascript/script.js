function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);


$(document).ready(function () {
    $(".loader").fadeIn("slow");

    setTimeout(function () {
        $(".loader").fadeOut("slow", function () {
            $(".container").fadeIn("slow");
        });
    }, 2000);
});
const counters = document.querySelectorAll('.counter');
let counterStarted = false;

function animateCounters() {
  counters.forEach(counter => {
    const target = +counter.getAttribute('data-target');
    const speed = 200;

    const update = () => {
      const current = +counter.innerText;
      const increment = Math.ceil(target / speed);

      if (current < target) {
        counter.innerText = current + increment;
        setTimeout(update, 10);
      } else {
        counter.innerText = target;
      }
    };

    update();
  });
}

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return rect.top <= window.innerHeight && rect.bottom >= 0;
}

window.addEventListener('scroll', () => {
  const section = document.getElementById('section-two');
  if (isInViewport(section) && !counterStarted) {
    counterStarted = true;
    animateCounters();
  }
});
