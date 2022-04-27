import React, { useState , useEffect } from 'react';
import { useParams , BrowserRouter , Link } from 'react-router-dom';
import './TestQuiz.css'


export default function TestQuiz() {
    const [counter,setCounter] = useState(10);
	const { subject } = useParams();
	const allQuestions = {
		"Maths" :[
			{
				questionText: '2+2',
				answerOptions: [
					{ answerText: 'New York', isCorrect: false },
					{ answerText: 'London', isCorrect: false },
					{ answerText: '4', isCorrect: true },
					{ answerText: 'Dublin', isCorrect: false },
				],
			},
			{
				questionText: 'Who is CEO of Tesla?',
				answerOptions: [
					{ answerText: 'Jeff Bezos', isCorrect: false },
					{ answerText: 'Elon Musk', isCorrect: true },
					{ answerText: 'Bill Gates', isCorrect: false },
					{ answerText: 'Tony Stark', isCorrect: false },
				],
			},
			{
				questionText: 'The iPhone was created by which company?',
				answerOptions: [
					{ answerText: 'Apple', isCorrect: true },
					{ answerText: 'Intel', isCorrect: false },
					{ answerText: 'Amazon', isCorrect: false },
					{ answerText: 'Microsoft', isCorrect: false },
				],
			},
			{
				questionText: 'How many Harry Potter books are there?',
				answerOptions: [
					{ answerText: '1', isCorrect: false },
					{ answerText: '4', isCorrect: false },
					{ answerText: '6', isCorrect: false },
					{ answerText: '7', isCorrect: true },
				],
			},
		],
		"Physics" :[
			{
				questionText: 'F=?',
				answerOptions: [
					{ answerText: 'New York', isCorrect: false },
					{ answerText: 'London', isCorrect: false },
					{ answerText: 'ma', isCorrect: true },
					{ answerText: 'Dublin', isCorrect: false },
				],
			},
			{
				questionText: 'Who is CEO of Tesla?',
				answerOptions: [
					{ answerText: 'Jeff Bezos', isCorrect: false },
					{ answerText: 'Elon Musk', isCorrect: true },
					{ answerText: 'Bill Gates', isCorrect: false },
					{ answerText: 'Tony Stark', isCorrect: false },
				],
			},
			{
				questionText: 'The iPhone was created by which company?',
				answerOptions: [
					{ answerText: 'Apple', isCorrect: true },
					{ answerText: 'Intel', isCorrect: false },
					{ answerText: 'Amazon', isCorrect: false },
					{ answerText: 'Microsoft', isCorrect: false },
				],
			},
			{
				questionText: 'How many Harry Potter books are there?',
				answerOptions: [
					{ answerText: '1', isCorrect: false },
					{ answerText: '4', isCorrect: false },
					{ answerText: '6', isCorrect: false },
					{ answerText: '7', isCorrect: true },
				],
			},
		],
		"Chemistry" :[
			{
				questionText: 'Water=?',
				answerOptions: [
					{ answerText: 'New York', isCorrect: false },
					{ answerText: 'London', isCorrect: false },
					{ answerText: 'H2O', isCorrect: true },
					{ answerText: 'Dublin', isCorrect: false },
				],
			},
			{
				questionText: 'Who is CEO of Tesla?',
				answerOptions: [
					{ answerText: 'Jeff Bezos', isCorrect: false },
					{ answerText: 'Elon Musk', isCorrect: true },
					{ answerText: 'Bill Gates', isCorrect: false },
					{ answerText: 'Tony Stark', isCorrect: false },
				],
			},
			{
				questionText: 'The iPhone was created by which company?',
				answerOptions: [
					{ answerText: 'Apple', isCorrect: true },
					{ answerText: 'Intel', isCorrect: false },
					{ answerText: 'Amazon', isCorrect: false },
					{ answerText: 'Microsoft', isCorrect: false },
				],
			},
			{
				questionText: 'How many Harry Potter books are there?',
				answerOptions: [
					{ answerText: '1', isCorrect: false },
					{ answerText: '4', isCorrect: false },
					{ answerText: '6', isCorrect: false },
					{ answerText: '7', isCorrect: true },
				],
			},
		]};
	 const questions=   allQuestions[subject];
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
        setCounter(10);
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
    useEffect(() => {
        const timer = counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
        if(timer==0) {
            const nextQuestion = currentQuestion + 1;
        setCounter(10);
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
        }
        return () => clearInterval(timer);
      }, [counter]);
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
					<div><Link to='/Test' className='score'>Go to Subjests</Link></div>
					<div><Link to='/Test' className='score'>Download Certificate</Link></div>
				</div>

			) : (
				<>
					<div className='question-section'>
                        <div>
                        00:{counter}
                        </div>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)} className='answer-section'>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}