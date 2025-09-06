document.addEventListener("DOMContentLoaded", function () {
    const questionsContainer = document.getElementById("questions");
    const submitButton = document.getElementById("submit");
    const assessmentChart = document.getElementById("assessmentChart");
    const recommendationDiv = document.getElementById("recommendation");
    const resultContainer = document.getElementById("resultContainer");

    const questions = [
        "Little interest or pleasure in doing things?",
        "Feeling down, depressed, or hopeless?",
        "Trouble falling or staying asleep, or sleeping too much?",
        "Feeling tired or having little energy?",
        "Poor appetite or overeating?",
        "Feeling bad about yourself – or that you are a failure?",
        "Trouble concentrating on things?",
        "Moving or speaking so slowly or being restless?",
        "Thoughts that you would be better off dead?"
    ];

    function createQuestionElements() {
        questions.forEach((question, index) => {
            const questionDiv = document.createElement("div");
            questionDiv.classList.add("question-item");
            questionDiv.innerHTML = `
                <p class="question-text">${index + 1}. ${question}</p>
                <select class="response" data-index="${index}">
                    <option value="0">Not at all</option>
                    <option value="1">Several days</option>
                    <option value="2">More than half the days</option>
                    <option value="3">Nearly every day</option>
                </select>
            `;
            questionsContainer.appendChild(questionDiv);
        });

        gsap.from(".question-item", { opacity: 0, y: 20, stagger: 0.1, duration: 1 });
    }

    function calculateScore() {
        let totalScore = 0;
        const responses = document.querySelectorAll(".response");
        responses.forEach(response => {
            totalScore += parseInt(response.value);
        });

        localStorage.setItem("mentalHealthScore", totalScore);
        return totalScore;
    }

    function generateResults() {
        const totalScore = calculateScore();
        let message = "";
        let color = "";

        if (totalScore <= 4) {
            message = "Minimal depression - Maintain healthy habits.";
            color = "#4CAF50";
        } else if (totalScore <= 9) {
            message = "Mild depression - Consider self-care techniques.";
            color = "#FFC107";
        } else if (totalScore <= 14) {
            message = "Moderate depression - Consult a professional if needed.";
            color = "#FF9800";
        } else if (totalScore <= 19) {
            message = "Moderately severe depression - Professional help is recommended.";
            color = "#F44336";
        } else {
            message = "Severe depression - Seek professional support immediately.";
            color = "#D32F2F";
        }

        recommendationDiv.innerHTML = `<p class="result-message" style="color: ${color}; font-weight: bold; font-size: 1.2em; text-align: center;">${message}</p>`;
        resultContainer.style.display = "block";

        new Chart(assessmentChart, {
            type: 'bar',
            data: {
                labels: ['Your Score'],
                datasets: [{
                    label: 'Assessment Score',
                    data: [totalScore],
                    backgroundColor: color,
                    borderColor: 'rgba(0, 0, 0, 0.8)',
                    borderWidth: 1,
                    borderRadius: 8,
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 27
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }
        });

        gsap.from("#resultContainer", { opacity: 0, y: -20, duration: 1 });
    }

    submitButton.addEventListener("click", generateResults);
    createQuestionElements();
});
