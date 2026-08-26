import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { curriculumData } from '../constants/curriculumData';
import { FaArrowLeft, FaChalkboardTeacher, FaBook, FaQuestionCircle, FaClipboardCheck, FaCheck } from 'react-icons/fa';
import MCQQuizEngine from '../components/MCQQuizEngine';
import { pythonAssessmentQuestions } from '../constants/curriculumData';

const CurriculumDetail = () => {
    const { skillId } = useParams();
    const data = curriculumData[skillId?.toLowerCase()];
    const [activeTab, setActiveTab] = useState('pedagogy');
    const [selectedAnswers, setSelectedAnswers] = useState({});

    if (!data) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center pt-20">
                <h2 className="text-2xl font-bold text-gray-800">Curriculum Coming Soon!</h2>
                <Link to="/" className="mt-4 text-blue-600 font-medium inline-flex items-center">
                    <FaArrowLeft className="mr-2" /> Back to Home
                </Link>
            </div>
        );
    }

    const handleOptionSelect = (qIndex, optIndex) => {
        setSelectedAnswers({ ...selectedAnswers, [qIndex]: optIndex });
    };

    return (
        <div className="min-h-screen bg-slate-50 pt-24 pb-20">
            <div className="max-w-6xl mx-auto px-6">

                {/* Back Button */}
                <Link to="/" className="text-sm font-semibold text-blue-600 hover:text-blue-800 inline-flex items-center mb-6">
                    <FaArrowLeft className="mr-2" /> Back to Portfolio
                </Link>

                {/* Page Header */}
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 mb-8">
                    <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 bg-blue-100 text-blue-700 rounded-full">
                        Teaching &amp; Course Module
                    </span>
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3">{data.title}</h1>
                    <p className="text-gray-600 mt-2">{data.subtitle}</p>
                </div>

                {/* Navigation Tabs */}
                <div className="flex border-b border-gray-200 mb-8 overflow-x-auto space-x-4">
                    <button
                        onClick={() => setActiveTab('pedagogy')}
                        className={`pb-3 px-4 font-semibold text-sm inline-flex items-center space-x-2 border-b-2 transition ${activeTab === 'pedagogy' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700'
                            }`}
                    >
                        <FaChalkboardTeacher /> <span>Teaching Methodology</span>
                    </button>

                    <button
                        onClick={() => setActiveTab('syllabus')}
                        className={`pb-3 px-4 font-semibold text-sm inline-flex items-center space-x-2 border-b-2 transition ${activeTab === 'syllabus' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700'
                            }`}
                    >
                        <FaBook /> <span>Curriculum &amp; Syllabus</span>
                    </button>

                    <button
                        onClick={() => setActiveTab('mcqs')}
                        className={`pb-3 px-4 font-semibold text-sm inline-flex items-center space-x-2 border-b-2 transition ${activeTab === 'mcqs' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700'
                            }`}
                    >
                        <FaQuestionCircle /> <span>Topic-Wise MCQs</span>
                    </button>

                    <button
                        onClick={() => setActiveTab('mock')}
                        className={`pb-3 px-4 font-semibold text-sm inline-flex items-center space-x-2 border-b-2 transition ${activeTab === 'mock' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700'
                            }`}
                    >
                        <FaClipboardCheck /> <span>Mock Tests</span>
                    </button>
                </div>

                {/* Tab 1: Pedagogy */}
                {activeTab === 'pedagogy' && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {data.pedagogy.map((item, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                                <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 font-bold flex items-center justify-center mb-4">
                                    {idx + 1}
                                </div>
                                <h3 className="font-bold text-gray-900 text-lg mb-2">{item.heading}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                )}
                {/* // Inside your Mock Tests tab: */}
                {activeTab === 'mock' && (
                    <MCQQuizEngine
                        title="Python Comprehensive Ability & Diagnostics Test"
                        questions={pythonAssessmentQuestions}
                    />
                )}

                {/* Tab 2: Syllabus */}
                {activeTab === 'syllabus' && (
                    <div className="space-y-4">
                        {data.syllabus.map((mod, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                                <div className="flex items-center space-x-3 mb-3">
                                    <span className="text-xs font-semibold px-2.5 py-1 rounded bg-slate-100 text-slate-700">{mod.module}</span>
                                    <h3 className="text-lg font-bold text-gray-900">{mod.title}</h3>
                                </div>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
                                    {mod.topics.map((t, i) => (
                                        <li key={i} className="text-sm text-gray-600 flex items-center">
                                            <FaCheck className="text-emerald-500 text-xs mr-2 flex-shrink-0" /> {t}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                )}

                {/* Tab 3: MCQs */}
                {activeTab === 'mcqs' && (
                    <div className="space-y-8">
                        {data.mcqs.map((topicBlock, bIdx) => (
                            <div key={bIdx} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                                <h3 className="text-lg font-bold text-gray-900 mb-6 border-b pb-2">{topicBlock.topic}</h3>
                                <div className="space-y-6">
                                    {topicBlock.questions.map((qItem, qIdx) => {
                                        const globalQKey = `${bIdx}-${qIdx}`;
                                        const isAnswered = selectedAnswers[globalQKey] !== undefined;
                                        return (
                                            <div key={qIdx} className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                                                <p className="font-semibold text-gray-800 text-sm mb-3">
                                                    {qIdx + 1}. {qItem.q}
                                                </p>
                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                                    {qItem.options.map((opt, oIdx) => {
                                                        const isSelected = selectedAnswers[globalQKey] === oIdx;
                                                        const isCorrect = qItem.correct === oIdx;
                                                        let btnStyle = "bg-white border-gray-200 text-gray-700 hover:bg-slate-100";

                                                        if (isAnswered) {
                                                            if (isCorrect) btnStyle = "bg-emerald-100 border-emerald-500 text-emerald-800 font-semibold";
                                                            else if (isSelected) btnStyle = "bg-red-100 border-red-500 text-red-800";
                                                        }

                                                        return (
                                                            <button
                                                                key={oIdx}
                                                                onClick={() => handleOptionSelect(globalQKey, oIdx)}
                                                                className={`text-left p-2.5 rounded-lg border text-xs sm:text-sm transition ${btnStyle}`}
                                                            >
                                                                {opt}
                                                            </button>
                                                        );
                                                    })}
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Tab 4: Mock Tests */}
                {activeTab === 'mock' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {data.mockTests.map((mock) => (
                            <div key={mock.id} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between">
                                <div>
                                    <span className="text-xs font-semibold px-2.5 py-1 rounded bg-purple-50 text-purple-700">
                                        {mock.level}
                                    </span>
                                    <h3 className="font-bold text-gray-900 text-lg mt-3 mb-2">{mock.title}</h3>
                                    <p className="text-gray-500 text-sm">{mock.questionsCount} Questions • {mock.duration}</p>
                                </div>
                                <button className="mt-6 w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg text-sm transition">
                                    Start Practice Test
                                </button>
                            </div>
                        ))}
                    </div>
                )}

            </div>
        </div>
    );
};

export default CurriculumDetail;