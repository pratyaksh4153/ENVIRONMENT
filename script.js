
 // 1. Mobile Navigation Menu
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", function () {
    const isOpen = navMenu.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.textContent = isOpen ? "✕" : "☰";
});

// Menu link click karne par menu close hoga
navMenu.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
        navMenu.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.textContent = "☰";
    });
});


// 2. Eco-Friendly Checklist Progress
const tasks = document.querySelectorAll(".eco-task");
const progressFill = document.getElementById("progressFill");
const progressText = document.getElementById("progressText");

function updateProgress() {
    const completed = document.querySelectorAll(".eco-task:checked").length;
    const total = tasks.length;

    progressFill.style.width = (completed / total) * 100 + "%";
    progressText.textContent = completed + " of " + total + " actions";
}

tasks.forEach(function (task) {
    task.addEventListener("change", updateProgress);
});


// 3. Environmental Awareness Quiz
const quizOptions = document.querySelectorAll(".quiz-option");
const quizFeedback = document.getElementById("quizFeedback");
const resetQuiz = document.getElementById("resetQuiz");

quizOptions.forEach(function (option) {
    option.addEventListener("click", function () {

        // Disable all options after selecting an answer
        quizOptions.forEach(function (button) {
            button.disabled = true;

            if (button.dataset.correct === "true") {
                button.classList.add("correct");
            }
        });

        // Check whether the selected answer is correct
        if (option.dataset.correct === "true") {
            quizFeedback.textContent =
                "Correct! Reusable bags help reduce plastic waste. 🌱";

            quizFeedback.style.color = "#16804b";
        } else {
            option.classList.add("incorrect");

            quizFeedback.textContent =
                "Not quite! A reusable shopping bag is the better choice.";

            quizFeedback.style.color = "#b84b3d";
        }
    });
});


// 4. Reset Quiz Button
resetQuiz.addEventListener("click", function () {
    quizOptions.forEach(function (option) {
        option.disabled = false;
        option.classList.remove("correct", "incorrect");
    });

    quizFeedback.textContent =
        "Choose an answer to see your result.";

    quizFeedback.style.color = "";
});


// 5. Automatically Update Copyright Year
document.getElementById("year").textContent =
    new Date().getFullYear();