export class UI {
  constructor() {}

  /**
   * @param {string} text question to render
   *
   */
  showQuestion(text) {
    const questionTitle = document.getElementById("question");
    questionTitle.innerText = text;
  }

  /**
   *
   * @param {string} choices the choices of the question
   */

  showChoices(choices, callback) {
    const choicesContainer = document.getElementById("choices");

    choicesContainer.innerHTML = "";

    for (let i = 0; i < choices.length; i++) {
      const btn = document.createElement("button");
      btn.innerText = choices[i];
      btn.addEventListener("click", () => callback(choices[i]));
      btn.className = "btn";

      choicesContainer.append(btn);
    }
  }

  /**
   *
   * @param {number} score the total score
   */
  showScores(score) {
    const quizEndHTML = `
    <h1>Result</h1>
    <h2>Your Score: ${score}</h2>
    `;
    const element = document.getElementById("quiz");
    element.innerHTML = quizEndHTML;
  }

  /**
   *
   * @param {number} currenIndex the current index of the quiz
   * @param {number} total the total question
   */
  showProgress(currenIndex, total) {
    const element = document.getElementById("progress");
    element.innerHTML = `Question ${currenIndex} of ${total}`;
  }
}
