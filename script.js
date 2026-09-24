/*1. Menu mobile : #menu-btn bascule #mobile-menu avec addEventListener +
classList.toggle.*/
const menubtn = document.querySelector("#menu-btn");
const mobilemenu = document.querySelector("#mobile-menu");

menubtn.addEventListener("click", () => {
  mobilemenu.classList.toggle("hidden");
});

/*2. Accordéon FAQ : chaque .faq-question ouvre/ferme sa réponse au clic et change son icône
(+ / -). Ajoutez au moins 3 questions.*/
const faqquestion = document.querySelectorAll(".faq-question");

faqquestion.forEach((button) => {
  button.addEventListener("click", () => {
    const icon = button.querySelector(".faq-icon");
    const faqanswer = button.nextElementSibling;
    faqanswer.classList.toggle("hidden");
    if (faqanswer.classList.contains("hidden")) {
      icon.textContent = "+";
    } else {
      icon.textContent = "-";
    }
  });
});

/*3. fetch() : #fetch-btn charge une donnée d'une API publique de votre choix et l'affiche dans
#fetch-box (gérez le cas d'erreur avec .catch()).*/

const fetchbtn = document.querySelector("#fetch-btn");
const fetchbox = document.querySelector("#fetch-box");

const apiUrl = "https://www.cheapshark.com/api/1.0/deals?pageSize=1";

fetchbtn.addEventListener("click", () => {
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      const deal = data[0];
      fetchbox.textContent = `${deal.title} à $${deal.salePrice} (au lieu de $${deal.normalPrice}) chez ${deal.storeName}`;
    })
    .catch((error) => {
      fetchbox.textContent = "Erreur";
      console.log("Erreur Fetch :", error);
    });
});

/*4. Validation de formulaire : preventDefault(), vérifiez que l'email contient un @, achez un
message d'erreur ou de succès dans #form-message.*/

const contactform = document.querySelector("#contact-form");
const formmessage = document.querySelector("#form-message");

contactform.addEventListener("submit", (event) => {
  event.preventDefault();
  const contactemail = document.querySelector("#contact-email").value;
  if (!contactemail.includes("@")) {
    formmessage.textContent = "Veuillez entrer une adresse email valide.";
  } else {
    formmessage.textContent = "Adresse email valide.";
  }
});

/*5. Retour en haut : #back-to-top apparaît après environ 300px de délement (événement
scroll) et remonte la page en douceur au clic.*/

const backtotop = document.querySelector("#back-to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    backtotop.classList.remove("hidden");
  } else {
    backtotop.classList.add("hidden");
  }
});

backtotop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

/*6. Déployez : committez, poussez, et activez GitHub Pages.*/

/*⋆ Dé Bonus
Ajoutez un événement input qui ltre vos questions FAQ en direct pendant que l'utilisateur tape dans un
champ de recherche (les questions qui ne correspondent pas se cachent).*/

const faqsearch = document.querySelector("#faq-search");
const faqitem = document.querySelector("#faq-item");

faqsearch.addEventListener("input", () => {
  array.forEach((item) => {});
});
