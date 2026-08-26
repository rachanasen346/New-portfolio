import React, { useState, useEffect } from 'react';
import { 
  FaCheckCircle, 
  FaTimesCircle, 
  FaRedo, 
  FaClock, 
  FaChartPie, 
  FaAward, 
  FaLightbulb 
} from 'react-icons/fa';

const MCQQuizEngine = ({ questions, title = "Skill Assessment" }) => {
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(questions.length * 60); // 60 seconds per question

  // Timer Countdown
  useEffect(() => {
    if (isSubmitted || timeLeft <= 0) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setIsSubmitted(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isSubmitted, timeLeft]);

  // Handle Option Select
  const handleSelectOption = (optionIndex) => {
    if (isSubmitted) return;
    setSelectedAnswers({
      ...selectedAnswers,
      [currentQIndex]: optionIndex,
    });
  };

  // Performance Calculations
  const calculateResults = () => {
    let score = 0;
    const categoryStats = {};

    questions.forEach((q, idx) => {
      const category = q.category || 'General';
      if (!categoryStats[category]) {
        categoryStats[category] = { total: 0, correct: 0 };
      }
      categoryStats[category].total += 1;

      if (selectedAnswers[idx] === q.correct) {
        score += 1;
        categoryStats[category].correct += 1;
      }
    });

    const percentage = Math.round((score / questions.length) * 100);

    let feedback = "";
    let badgeColor = "";
    if (percentage >= 80) {
      feedback = "Advanced Mastery: Excellent conceptual understanding and problem-solving speed.";
      badgeColor = "text-emerald-600 bg-emerald-50 border-emerald-200";
    } else if (percentage >= 50) {
      feedback = "Intermediate Level: Good foundational knowledge, but needs practical code debugging exercises.";
      badgeColor = "text-amber-600 bg-amber-50 border-amber-200";
    } else {
      feedback = "Foundational Level: Recommend revising core theory and stepwise dry-run implementations.";
      badgeColor = "text-rose-600 bg-rose-50 border-rose-200";
    }

    return { score, percentage, categoryStats, feedback, badgeColor };
  };

  const handleReset = () => {
    setSelectedAnswers({});
    setIsSubmitted(false);
    setCurrentQIndex(0);
    setTimeLeft(questions.length * 60);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const currentQ = questions[currentQIndex];
  const results = isSubmitted ? calculateResults() : null;

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-8 max-w-4xl mx-auto">
      
      {/* Quiz Header */}
      <div className="flex flex-wrap items-center justify-between pb-6 border-b border-gray-100 gap-4">
        <div>
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-50 text-blue-700">
            {currentQ?.category || "Module Test"}
          </span>
          <h3 className="text-xl font-bold text-gray-900 mt-2">{title}</h3>
        </div>

        {!isSubmitted && (
          <div className="flex items-center space-x-2 text-sm font-semibold text-gray-700 bg-slate-100 px-4 py-2 rounded-lg">
            <FaClock className="text-blue-600" />
            <span>Time Left: {formatTime(timeLeft)}</span>
          </div>
        )}
      </div>

      {/* ACTIVE QUIZ VIEW */}
      {!isSubmitted ? (
        <div className="mt-6">
          {/* Question Indicator */}
          <div className="flex justify-between text-xs font-medium text-gray-500 mb-2">
            <span>Question {currentQIndex + 1} of {questions.length}</span>
            <span>{Object.keys(selectedAnswers).length} Answered</span>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-slate-100 h-2 rounded-full mb-6">
            <div 
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentQIndex + 1) / questions.length) * 100}%` }}
            />
          </div>

          {/* Question Text */}
          <h4 className="text-lg font-semibold text-gray-800 mb-6">
            {currentQIndex + 1}. {currentQ.q}
          </h4>

          {/* Options Grid */}
          <div className="space-y-3 mb-8">
            {currentQ.options.map((option, optIdx) => {
              const isSelected = selectedAnswers[currentQIndex] === optIdx;
              return (
                <button
                  key={optIdx}
                  onClick={() => handleSelectOption(optIdx)}
                  className={`w-full text-left p-4 rounded-xl border text-sm font-medium transition-all ${
                    isSelected
                      ? 'border-blue-600 bg-blue-50 text-blue-900 shadow-sm'
                      : 'border-gray-200 bg-white hover:bg-slate-50 text-gray-700'
                  }`}
                >
                  <span className="inline-block w-6 font-bold text-gray-400">
                    {String.fromCharCode(65 + optIdx)}.
                  </span>
                  {option}
                </button>
              );
            })}
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-between items-center pt-4 border-t border-gray-100">
            <button
              onClick={() => setCurrentQIndex((prev) => Math.max(0, prev - 1))}
              disabled={currentQIndex === 0}
              className="px-5 py-2.5 rounded-lg border border-gray-300 text-sm font-medium text-gray-600 disabled:opacity-40"
            >
              Previous
            </button>

            {currentQIndex < questions.length - 1 ? (
              <button
                onClick={() => setCurrentQIndex((prev) => Math.min(questions.length - 1, prev + 1))}
                className="px-6 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium transition"
              >
                Next
              </button>
            ) : (
              <button
                onClick={() => setIsSubmitted(true)}
                className="px-6 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium transition shadow-sm"
              >
                Submit &amp; Analyze
              </button>
            )}
          </div>
        </div>
      ) : (
        /* SUBMITTED RESULTS & STUDENT ABILITY ANALYSIS VIEW */
        <div className="mt-8 space-y-8">
          
          {/* Score Hero Summary */}
          <div className="text-center p-8 bg-slate-50 rounded-2xl border border-gray-200">
            <div className="w-16 h-16 mx-auto bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-2xl mb-4">
              <FaAward />
            </div>
            <h4 className="text-3xl font-extrabold text-gray-900">
              {results.score} / {questions.length}
            </h4>
            <p className="text-sm font-medium text-gray-500 mt-1">
              Overall Score: {results.percentage}%
            </p>

            <div className={`mt-4 inline-block px-4 py-2 rounded-xl border text-sm font-semibold ${results.badgeColor}`}>
              {results.feedback}
            </div>
          </div>

          {/* Category / Topic-wise Ability Breakdown */}
          <div>
            <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <FaChartPie className="text-blue-600" />
              <span>Skill &amp; Topic Diagnostic Analysis</span>
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {Object.entries(results.categoryStats).map(([cat, stat]) => {
                const catPercent = Math.round((stat.correct / stat.total) * 100);
                return (
                  <div key={cat} className="p-4 rounded-xl border border-gray-200 bg-white">
                    <div className="flex justify-between text-sm font-semibold text-gray-800 mb-1">
                      <span>{cat}</span>
                      <span>{catPercent}% ({stat.correct}/{stat.total})</span>
                    </div>
                    <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                      <div
                        className={`h-2 rounded-full ${
                          catPercent >= 75 ? 'bg-emerald-500' : catPercent >= 50 ? 'bg-amber-500' : 'bg-rose-500'
                        }`}
                        style={{ width: `${catPercent}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Detailed Question Review with Explanations */}
          <div>
            <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <FaLightbulb className="text-amber-500" />
              <span>Question Solutions &amp; Explanations</span>
            </h4>

            <div className="space-y-4">
              {questions.map((q, idx) => {
                const userAns = selectedAnswers[idx];
                const isCorrect = userAns === q.correct;
                return (
                  <div key={idx} className="p-5 rounded-xl border border-gray-200 bg-slate-50">
                    <div className="flex items-start justify-between gap-4">
                      <p className="font-semibold text-gray-900 text-sm">
                        {idx + 1}. {q.q}
                      </p>
                      {isCorrect ? (
                        <span className="flex items-center text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded border border-emerald-200">
                          <FaCheckCircle className="mr-1" /> Correct
                        </span>
                      ) : (
                        <span className="flex items-center text-xs font-bold text-rose-600 bg-rose-50 px-2 py-1 rounded border border-rose-200">
                          <FaTimesCircle className="mr-1" /> Incorrect
                        </span>
                      )}
                    </div>

                    <div className="mt-3 text-xs text-gray-600 space-y-1">
                      <div>Your Answer: <strong className={isCorrect ? 'text-emerald-700' : 'text-rose-700'}>{userAns !== undefined ? q.options[userAns] : 'Not Attempted'}</strong></div>
                      {!isCorrect && <div>Correct Answer: <strong className="text-emerald-700">{q.options[q.correct]}</strong></div>}
                      {q.explanation && (
                        <div className="p-3 bg-white border border-gray-200 rounded-lg mt-2 text-slate-700">
                          <strong>Concept Explanation:</strong> {q.explanation}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Retake Button */}
          <div className="text-center pt-4">
            <button
              onClick={handleReset}
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium text-sm transition shadow-sm"
            >
              <FaRedo /> Retake Assessment
            </button>
          </div>

        </div>
      )}

    </div>
  );
};

export default MCQQuizEngine;