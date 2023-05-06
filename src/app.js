document.addEventListener("DOMContentLoaded", function () {
  // Add active class to the current section on scroll
    const navLinks = document.querySelectorAll("#ul .nav-link");
    const sections = document.querySelectorAll("section");
    const options = {
      rootMargin: "-50px",
      threshold: 0.5,
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = [...sections].indexOf(entry.target);
          navLinks.forEach((link) => link.classList.remove("active"));
          navLinks[index].classList.add("active");
        }
      });
    }, options);
    sections.forEach((section) => observer.observe(section));

    // Add active class to the current section on click
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.forEach((link) => link.classList.remove("active"));
        link.classList.add("active");
      });
    });


    // TypeWriter Effects
    // const text = "Hi, my name is"; // the text to display
    // const delay = 70; // the delay between each letter, in milliseconds

    // function typeWriterEffect(text, delay) {
    //   const element = document.getElementById("typewriter");
    //   let i = 0;
    //   function typeLetter() {
    //     if (i < text.length) {
    //       element.innerHTML += text.charAt(i);
    //       i++;
    //       setTimeout(typeLetter, delay);
    //     }
    //   }
    //   typeLetter();
    // }

    // typeWriterEffect(text, delay);
});
