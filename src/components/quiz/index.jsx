import React, { useState, useEffect, useCallback, Fragment } from "react";
import Core from "./Core";
import defaultLocale from "./Locale";

const Quiz = function ({
  quiz,
  shuffle,
  showDefaultResult,
  onComplete,
  customResultPage,
  showInstantFeedback,
  continueTillCorrect,
  revealAnswerOnSubmit,
  allowNavigation,
  onQuestionSubmit,
  disableSynopsis,
}) {
  const [start, setStart] = useState(false);
  const [questions, setQuestions] = useState(quiz.questions);
  const nrOfQuestions =
    quiz.nrOfQuestions && quiz.nrOfQuestions < quiz.questions.length
      ? quiz.nrOfQuestions
      : quiz.questions.length;

  const shuffleQuestions = useCallback(q => {
    for (let i = q.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [q[i], q[j]] = [q[j], q[i]];
    }
    q.length = nrOfQuestions;
    return q;
  }, []);

  useEffect(() => {
    if (disableSynopsis) setStart(true);
  }, []);

  useEffect(() => {
    if (shuffle) {
      setQuestions(shuffleQuestions(quiz.questions));
    } else {
      quiz.questions.length = nrOfQuestions;
      setQuestions(quiz.questions);
    }

    setQuestions(
      questions.map((question, index) => ({
        ...question,
        questionIndex: index + 1,
      }))
    );
  }, [start]);

  const validateQuiz = q => {
    if (!q) {
      console.error("Quiz object is required.");
      return false;
    }

    for (let i = 0; i < questions.length; i += 1) {
      const {
        question,
        questionType,
        answerSelectionType,
        answers,
        correctAnswer,
      } = questions[i];
      if (!question) {
        console.error("Field 'question' is required.");
        return false;
      }

      if (!questionType) {
        console.error("Field 'questionType' is required.");
        return false;
      }
      if (questionType !== "text" && questionType !== "photo") {
        console.error(
          "The value of 'questionType' is either 'text' or 'photo'."
        );
        return false;
      }

      if (!answers) {
        console.error("Field 'answers' is required.");
        return false;
      }
      if (!Array.isArray(answers)) {
        console.error("Field 'answers' has to be an Array");
        return false;
      }

      if (!correctAnswer) {
        console.error("Field 'correctAnswer' is required.");
        return false;
      }

      let selectType = answerSelectionType;

      if (!answerSelectionType) {
        // Default single to avoid code breaking due to automatic version upgrade
        console.warn(
          "Field answerSelectionType should be defined since v0.3.0. Use single by default."
        );
        selectType = answerSelectionType || "single";
      }

      if (
        selectType === "single" &&
        !(typeof selectType === "string" || selectType instanceof String)
      ) {
        console.error(
          "answerSelectionType is single but expecting String in the field correctAnswer"
        );
        return false;
      }

      if (selectType === "multiple" && !Array.isArray(correctAnswer)) {
        console.error(
          "answerSelectionType is multiple but expecting Array in the field correctAnswer"
        );
        return false;
      }
    }

    return true;
  };

  if (!validateQuiz(quiz)) {
    return null;
  }

  const appLocale = {
    ...defaultLocale,
    ...quiz.appLocale,
  };

  return (
    <div className="react-quiz-container">
      <div className="quiz-content">
        {!start && (
          <div>
            <h3>{quiz.quizTitle}</h3>
            <div>
              {appLocale.landingHeaderText.replace(
                "<questionLength>",
                nrOfQuestions
              )}
            </div>
            {quiz.quizSynopsis && (
              <div className="quiz-synopsis">{quiz.quizSynopsis}</div>
            )}
            <div className="startQuizWrapper">
              <button
                onClick={() => setStart(true)}
                className="startQuizBtn btn"
              >
                {appLocale.startQuizBtn}
              </button>
            </div>
          </div>
        )}

        {start && (
          <Core
            questions={questions}
            showDefaultResult={showDefaultResult}
            onComplete={onComplete}
            customResultPage={customResultPage}
            showInstantFeedback={showInstantFeedback}
            continueTillCorrect={continueTillCorrect}
            revealAnswerOnSubmit={revealAnswerOnSubmit}
            allowNavigation={allowNavigation}
            appLocale={appLocale}
            onQuestionSubmit={onQuestionSubmit}
          />
        )}
      </div>
      <div className="question-icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
          {/* Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) */}
          <path d="M202.021 0C122.202 0 70.503 32.703 29.914 91.026c-7.363 10.58-5.093 25.086 5.178 32.874l43.138 32.709c10.373 7.865 25.132 6.026 33.253-4.148 25.049-31.381 43.63-49.449 82.757-49.449 30.764 0 68.816 19.799 68.816 49.631 0 22.552-18.617 34.134-48.993 51.164-35.423 19.86-82.299 44.576-82.299 106.405V320c0 13.255 10.745 24 24 24h72.471c13.255 0 24-10.745 24-24v-5.773c0-42.86 125.268-44.645 125.268-160.627C377.504 66.256 286.902 0 202.021 0zM192 373.459c-38.196 0-69.271 31.075-69.271 69.271 0 38.195 31.075 69.27 69.271 69.27s69.271-31.075 69.271-69.271-31.075-69.27-69.271-69.27z" />
        </svg>
      </div>
    </div>
  );
};

export default Quiz;
