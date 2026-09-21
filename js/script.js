
/* =========================
   COSMOCOURS
   JAVASCRIPT
========================= */


/*
   PLUS TARD :
   Remplace cette adresse par l'adresse
   de ton formulaire Google Forms.

   Exemple :
   const FORM_URL = "https://forms.gle/xxxxxxxxxxxx";
*/

const FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSfHLk0POiuJuf_SqATsVGYa906aQBUVavS_ZYAP7bQg53N-fA/viewform?usp=publish-editor";


/* =========================
   BOUTON "DEMANDER UN COURS"
========================= */

const courseButton = document.getElementById("course-request-button");

if (courseButton) {

    courseButton.addEventListener("click", function(event) {

        event.preventDefault();

        if (FORM_URL.includes("REMPLACE_MOI")) {

            alert(
                "Le formulaire CosmoCours n'est pas encore configuré. " +
                "Il faudra ajouter ici le lien de ton formulaire Google Forms."
            );

        } else {

            window.open(FORM_URL, "_blank");

        }

    });

}


/* =========================
   MENU MOBILE
========================= */

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", function() {

        navLinks.classList.toggle("active");

    });


    const links = navLinks.querySelectorAll("a");

    links.forEach(function(link) {

        link.addEventListener("click", function() {

            navLinks.classList.remove("active");

        });

    });

}


/* =========================
   ANNÉE AUTOMATIQUE
========================= */

const yearElement = document.getElementById("year");

if (yearElement) {

    yearElement.textContent = new Date().getFullYear();

}

