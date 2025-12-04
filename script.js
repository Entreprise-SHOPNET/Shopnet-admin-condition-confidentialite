

const loginForm = document.getElementById("loginForm");
const usernameInput = document.getElementById("username");
const accessCodeInput = document.getElementById("accessCode");

// Sélecteurs du popup & overlay
const blurOverlay = document.getElementById("blurOverlay");
const errorPopup = document.getElementById("errorPopup");
const popupMessage = document.getElementById("popupMessage");
const closePopup = document.getElementById("closePopup");
const helpBtn = document.getElementById("helpBtn");

// Liste des administrateurs autorisés
const allowedUsers = [
    "Tegra Kanyinda",
    "Pasua Ndaye Jonathan",
    "katubayi bamusamba Melissa",
    "Umba lenge joseph",
    "David Kubaka",
    "Dorcas shopnet",
    "Jean Salumu"
];

// Code d’accès correct
const correctCode = "Adminshopnet.2025";

// Soumission du formulaire
loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const username = usernameInput.value.trim();
    const code = accessCodeInput.value.trim();

    // Champs vides
    if (!username || !code) {
        showError("Veuillez remplir tous les champs !");
        return;
    }

    // Mauvais nom ou mauvais code
    if (!allowedUsers.includes(username) || code !== correctCode) {
        showError("Informations incorrectes !");
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
    errorPopup.style.display = "block";
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
