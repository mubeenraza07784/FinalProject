//------------------------------------------------------------------------------------------------------ loader page start
$(document).ready(function () {
  $(".loader").fadeIn("slow", function () {
    // After 2 seconds, hide the loader
    setTimeout(function () {
      $(".loader").fadeOut("slow", function () {
        // Show the container
        $(".container").fadeIn("slow", function () {
          AOS.init();
          setTimeout(() => {
            AOS.refresh(); // Ensure all animations are triggered after layout
          }, 500);
          var $gallery = $('.gallery');
          // Ensure all images have loaded before initializing Masonry

          $gallery.masonry({
            itemSelector: '.gallery-item',
            columnWidth: '.gallery-item',
            percentPosition: true
          });



          // Initialize Slick slider after container is visible
          $('.responsive').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]
          });
        });
      });
    }, 2000);
  });


  $(".mobile-menu-icon").click(function () {
    $("header nav ul").toggleClass("show");
  });
  //------------------------------------------------------------------------------------------------------ services page faq
  $(".question").click(function () {
    // Close all other answers
    $(".answer").slideUp();

    // Store the current answer in a variable
    var currentAnswer = $(this).next(".answer");

    // Toggle the current answer
    currentAnswer.slideToggle();
  });
  //------------------------------------------------------------------------------------------------------ index page counter
  // Counter animation
  const counterObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        document.querySelectorAll(".home-section-two-counter").forEach(counter => {
          counter.innerText = "0";
          const target = parseInt(counter.getAttribute("data-target")) || 0;
          const increment = target / 100;

          const updateCounter = () => {
            const current = parseInt(counter.innerText);
            if (current < target) {
              counter.innerText = `${Math.ceil(current + increment)}`;
              setTimeout(updateCounter, 25);
            } else {
              counter.innerText = `${target}`;
            }
          };
          updateCounter();
        });
        counterObserver.disconnect();
      }
    });
  }, { threshold: 0.5 });

  const counterSection = document.querySelector("#section-two");
  if (counterSection) counterObserver.observe(counterSection);



  //------------------------------------------------------------------------------------------------------ services page form
  $("#services-section-six-myforms").validate({
    rules: {
      name: {
        required: true,
        minlength: 3
      },
      email: {
        required: true,
        email: true
      },
      phone: {
        required: true,
        digits: true,
        minlength: 10,
        maxlength: 15
      },
      city: {
        required: true
      },
      appointmentDate: {
        required: true,
        date: true
      },
      service: {
        required: true
      },
      bio: {
        required: true,
        minlength: 5
      }
    },
    messages: {
      name: "Please enter your full name (at least 3 characters).",
      email: "Please enter a valid email address.",
      phone: "Please enter a valid phone number (10–15 digits).",
      city: "Please select a city.",
      appointmentDate: "Please select a valid date.",
      service: "Please select a service.",
      bio: "Please describe your request (at least 5 characters)."
    },
    submitHandler: function (form) {
      // Show success modal
      $("#services-section-six-successModal").fadeIn();

      // Optional: Reset form
      form.reset();

      return false; // prevent actual form submission
    }
  });

  // Close modal functionality
  $(".services-section-six-close-btn").click(function () {
    $("#services-section-six-successModal").fadeOut();
  });

  //------------------------------------------------------------------------------------------------------ about page masonry gallery

  $("#home-section-nine-contact-form").validate({
    rules: {
      "first-name": {
        required: true,
        minlength: 2
      },
      "last-name": {
        required: true,
        minlength: 2
      },
      email: {
        required: true,
        email: true
      },
      subject: {
        required: true,
        minlength: 3
      },
      message: {
        required: true,
        minlength: 10
      }
    },
    messages: {
      "first-name": {
        required: "Please enter your first name",
        minlength: "First name must be at least 2 characters long"
      },
      "last-name": {
        required: "Please enter your last name",
        minlength: "Last name must be at least 2 characters long"
      },
      email: {
        required: "Please enter your email address",
        email: "Please enter a valid email address"
      },
      subject: {
        required: "Please enter a subject",
        minlength: "Subject must be at least 3 characters long"
      },
      message: {
        required: "Please enter your message",
        minlength: "Message must be at least 10 characters long"
      }
    },
    submitHandler: function (form) {
      // Show the success modal
      $("#home-section-nine-successModal").fadeIn();
      // Optionally, reset the form
      form.reset();
    }
  });

  // Close modal on clicking the close button
  $(".home-section-nine-close-btn").on("click", function () {
    $("#home-section-nine-successModal").fadeOut();
  });


  //------------------------------------------------------------------------------------------------------ index page form




});



// ----------------------------------------------------------------------------------------------------------services page start




