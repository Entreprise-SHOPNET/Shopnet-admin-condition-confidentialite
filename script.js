

const loginForm = document.getElementById("loginForm");
const usernameInput = document.getElementById("username");
const accessCodeInput = document.getElementById("accessCode");

// Sélecteurs du popup & overlay
const blurOverlay = document.getElementById("blurOverlay");
const errorPopup = document.getElementById("errorPopup");
const popupMessage = document.getElementById("popupMessage");
const closePopup = document.getElementById("closePopup");
const helpBtn = document.getElementById("helpBtn");

// Identifiants ADMIN officiels
const ADMIN_USERNAME = "shopnet";
const ADMIN_PASSWORD = "123456";

// Soumission du formulaire
loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = usernameInput.value.trim().toLowerCase();
    const code = accessCodeInput.value.trim().toLowerCase();

    // Champs vides
    if (!username || !code) {
        showError("Veuillez remplir tous les champs !");
        return;
    }

    // Vérification identifiant + mot de passe (insensible à la casse)
    if (
        username !== ADMIN_USERNAME.toLowerCase() ||
        code !== ADMIN_PASSWORD.toLowerCase()
    ) {
        showError("Identifiant ou mot de passe incorrect !");
        return;
    }

    // Connexion réussie → Redirection vers AdminDashboard
    window.location.href = "AdminDashboard.html";
});

// Fonction popup d'erreur
function showError(message) {
    popupMessage.textContent = message;

    // Affiche popup + flou
    blurOverlay.style.display = "block";
    errorPopup.classList.add("active");
}

// Bouton Annuler → fermer popup
closePopup.addEventListener("click", () => {
    errorPopup.classList.remove("active");
    blurOverlay.style.display = "none";
});

// Bouton Besoin d’aide → redirection WhatsApp
helpBtn.addEventListener("click", () => {
    window.location.href =
        "https://wa.me/243896037137?text=Bonjour%2C%20j'ai%20besoin%20d'aide%20pour%20me%20connecter%20en%20tant%20qu'admin%20SHOPNET.";
});
