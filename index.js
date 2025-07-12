 const questions = [
      {
        question: "What is the capital of Pakistan?",
        options: ["Karachi", "Islamabad", "Lahore", "Peshawar"],
        answer: "Islamabad"
      },
      {
        question: "HTML stands for?",
        options: ["Hyper Trainer Marking Language", "Hyper Text Markup Language", "High Text Machine Language", "Hyper Text Marketing Language"],
        answer: "Hyper Text Markup Language"
      },
      {
        question: "Which year JavaScript was invented?",
        options: ["1995", "2000", "1990", "2005"],
        answer: "1995"
      },
      {
        question: "CSS is used for?",
        options: ["Database", "Styling", "Programming", "Networking"],
        answer: "Styling"
      },
      {
        question: "Which tag is used for line break in HTML?",
        options: ["<br>", "<lb>", "<break>", "<line>"],
        answer: "<br>"
      },
      {
        question: "Which one is a JavaScript framework?",
        options: ["Laravel", "Django", "React", "Flask"],
        answer: "React"
      },
      {
        question: "Which attribute sets the background color in HTML?",
        options: ["bg", "background", "bgcolor", "color"],
        answer: "bgcolor"
      },
      {
        question: "What does SQL stand for?",
        options: ["Structured Query Language", "Strong Question Language", "Simple Query Language", "Stylish Question Language"],
        answer: "Structured Query Language"
      },
      {
        question: "Which symbol is used for comments in JavaScript?",
        options: ["//", "#", "<!-- -->", "**"],
        answer: "//"
      },
      {
        question: "JavaScript is a _____ language?",
        options: ["Markup", "Styling", "Scripting", "Database"],
        answer: "Scripting"
      }
    ];

    let currentQuestion = 0;
    let score = 0;

    const questionEl = document.getElementById("question");
    const optionsEl = document.getElementById("options");
    const nextBtn = document.getElementById("nextBtn");
    const restartBtn = document.getElementById("restartBtn");
    const scoreDisplay = document.getElementById("scoreDisplay");

    function loadQuestion() {
      const current = questions[currentQuestion];
      questionEl.textContent = `Q${currentQuestion + 1}: ${current.question}`;
      optionsEl.innerHTML = "";

      current.options.forEach(option => {
        const btn = document.createElement("button");
        btn.textContent = option;
        btn.onclick = () => checkAnswer(btn, current.answer);
        optionsEl.appendChild(btn);
      });

      nextBtn.disabled = true;
    }

    function checkAnswer(button, correctAnswer) {
      const buttons = optionsEl.querySelectorAll("button");
      buttons.forEach(btn => {
        btn.disabled = true;
        if (btn.textContent === correctAnswer) {
          btn.classList.add("correct");
        }
        if (btn !== button && btn.textContent !== correctAnswer && button.textContent !== correctAnswer) {
          btn.classList.add("wrong");
        }
      });

      if (button.textContent === correctAnswer) {
        score += 10;
      } else {
        button.classList.add("wrong");
      }

      scoreDisplay.textContent = `Score: ${score}`;
      nextBtn.disabled = false;

      if (currentQuestion === questions.length - 1) {
        nextBtn.disabled = true;
        nextBtn.textContent = "End";
      }
    }

    nextBtn.onclick = () => {
      currentQuestion++;
      if (currentQuestion < questions.length) {
        loadQuestion();
      }
    };

    restartBtn.onclick = () => {
      currentQuestion = 0;
      score = 0;
      nextBtn.textContent = "Next";
      scoreDisplay.textContent = "";
      loadQuestion();
    };

    // Start quiz on load
    loadQuestion();