const themeButton = document.querySelector(".theme-toggle");
const resumeModal = document.getElementById('resumeModal');

// Переключение между темами
if (themeButton) {
    themeButton.addEventListener("click", () => {
        const body = document.body;
        const icon = themeButton.querySelector("i");

        if (body.classList.contains("dark-mode")) {
            body.classList.remove("dark-mode");
            body.classList.add("light-mode");
            document.documentElement.classList.add('light-theme');  // Добавляем базовый класс темы для управления
            localStorage.setItem("theme", "light");
            icon.className = "fas fa-moon";
        } else {
            body.classList.remove("light-mode");
            body.classList.add("dark-mode");
            document.documentElement.classList.add('dark-theme');   // Добавляем базовый класс темы для управления
            localStorage.setItem("theme", "dark");
            icon.className = "fas fa-sun";
        }
    });
}

// Устанавливаем тему при загрузке
document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme") || "light";
    document.documentElement.classList.add(savedTheme === "dark" ? "dark-theme" : "light-theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
        document.body.classList.remove("light-mode");
    } else {
        document.body.classList.add("light-mode");
        document.body.classList.remove("dark-mode");
    }

    // Устанавливаем правильную иконку
    const icon = themeButton.querySelector("i");
    icon.className = savedTheme === "dark" ? "fas fa-sun" : "fas fa-moon";
});

// Get the modal and thumbnail
const resumeThumbnail = document.querySelector('.resume-thumbnail');
const closeModal = document.querySelector('.close-modal');

// Когда пользователь кликает на миниатюру, открываем модальное окно
if (resumeThumbnail) {
    resumeThumbnail.addEventListener('click', () => {
        resumeModal.style.display = 'flex';
    });
}

// Когда пользователь кликает на <span> (×), закрываем модальное окно
if (closeModal) {
    closeModal.addEventListener('click', () => {
        resumeModal.style.display = 'none';
    });
}

// Когда пользователь кликает где-то вне модального окна, закрываем его
window.addEventListener('click', (event) => {
    if (event.target === resumeModal) {
        resumeModal.style.display = 'none';
    }
});
