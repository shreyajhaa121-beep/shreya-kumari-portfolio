
// ==========================================
// PORTFOLIO WEBSITE - JAVASCRIPT
// ==========================================


// ==========================================
// ACTIVE NAVIGATION LINK
// ==========================================

const sections =
  document.querySelectorAll(
    "section"
  );


const navLinks =
  document.querySelectorAll(
    ".nav-links a"
  );


window.addEventListener(

  "scroll",

  function () {

    let currentSection =
      "";


    sections.forEach(
      section => {

        const sectionTop =
          section.offsetTop;


        const sectionHeight =
          section.offsetHeight;


        if (

          window.scrollY >=
          sectionTop - 150

          &&

          window.scrollY <
          sectionTop + sectionHeight - 150

        ) {

          currentSection =
            section.getAttribute(
              "id"
            );

        }

      }

    );


    navLinks.forEach(
      link => {

        link.classList.remove(
          "active"
        );


        if (

          link.getAttribute(
            "href"
          ) ===
          "#" + currentSection

        ) {

          link.classList.add(
            "active"
          );

        }

      }

    );

  }

);


// ==========================================
// SMOOTH NAVIGATION
// ==========================================

navLinks.forEach(
  link => {

    link.addEventListener(

      "click",

      function (event) {

        const target =
          link.getAttribute(
            "href"
          );


        if (
          target.startsWith(
            "#"
          )
        ) {

          event.preventDefault();


          const targetSection =
            document.querySelector(
              target
            );


          if (
            targetSection
          ) {

            targetSection.scrollIntoView({

              behavior:
                "smooth"

            });

          }

        }

      }

    );

  }

);


// ==========================================
// PORTFOLIO READY MESSAGE
// ==========================================

console.log(
  "Shreya Kumari Portfolio loaded successfully."
);
