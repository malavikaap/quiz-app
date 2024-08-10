import React, { useState } from 'react';
import profilePic from './assets/cover.jpg';
// import Popup from 'reactjs-popup';
// import 'reactjs-popup/dist/index.css';
function Quiz() {
    const [step, setStep] = useState(1); 
    const [answerQ1, setAnswerQ1] = useState(null); 
    const [showPopup, setShowPopup] = useState(false);
    const [popupMessage, setPopupMessage] = useState("");
    const [answerQ2, setAnswerQ2] = useState(null); 
    const [answerQ3, setAnswerQ3] = useState(null);
    const [answerQ4, setAnswerQ4] = useState(null);
    const [answerQ5, setAnswerQ5] = useState(null);
    const [answerQ6, setAnswerQ6] = useState(null);
    const [answerQ7, setAnswerQ7] = useState(null);
    const [answerQ8, setAnswerQ8] = useState(null);
    const [answerQ9, setAnswerQ9] = useState(null);
    const [answerQ10, setAnswerQ10] = useState(null);
    const correctAnswerQ1 = "Shortest Job First"; 
    const correctAnswerQ2 = "Charles Babbage"; 
    const correctAnswerQ3 = "Central Processing Unit";
    const correctAnswerQ4 = "Central Processing Unit";
    const correctAnswerQ5 = "Bit";
    const correctAnswerQ6 = "EDIC";
    const correctAnswerQ7 = "SNARC";
    const correctAnswerQ8 = "System Software";
    const correctAnswerQ9 = "I/O";
    const correctAnswerQ10 = "Web Client";
    const handleQues1 = (value) => {
        setAnswerQ1(value);
        if (value === correctAnswerQ1) {
            setStep(2); 
        } else {
            // setPopupMessage('You are failed in the first attempt,sorry!')
            // setShowPopup(true);
            alert('You are failed in the first attempt,sorry!');
        }
    };
    const getButtonClassQ1 = (value) => {
        if (answerQ1 === null) return 'options'; 
        return value === correctAnswerQ1 ? 'options correct' : 'options wrong';
    };



    const handleQues2 = (value) => {
        setAnswerQ2(value);
        if (value === correctAnswerQ2) {
            setStep(3);
        } else {
            alert('You selected the wrong answer, so you cannot participate now!');
        }
    };
    const getButtonClassQ2 = (value) => {
        if (answerQ2 === null) return 'options'; 
        return value === correctAnswerQ2 ? 'options correct' : 'options wrong';
    };



    const handleQues3 = (value) => {
        setAnswerQ3(value);
        if (value === correctAnswerQ3) {
            setStep(4);
        } else {
            alert('You selected the wrong answer, so you cannot participate more!');
        }
    };
    const getButtonClassQ3 = (value) => {
        if (answerQ3 === null) return 'options'; 
        return value === correctAnswerQ3 ? 'options correct' : 'options wrong';
    };

    

    const handleQues4 = (value) => {
        setAnswerQ4(value);
        if (value === correctAnswerQ4) {
            setStep(5)
        } else {
            alert('You selected the wrong answer, so you cannot participate more!');
        }
    };
    const getButtonClassQ4 = (value) => {
        if (answerQ4 === null) return 'options'; 
        return value === correctAnswerQ4 ? 'options correct' : 'options wrong';
    };


    const handleQues5 = (value) => {
        setAnswerQ5(value);
        if (value === correctAnswerQ5) {
            setStep(6)
        } else {
            alert('You selected the wrong answer, so you cannot participate more!');
        }
    };
    const getButtonClassQ5 = (value) => {
        if (answerQ5 === null) return 'options'; 
        return value === correctAnswerQ5 ? 'options correct' : 'options wrong';
    };


    const handleQues6 = (value) => {
        setAnswerQ6(value);
        if (value === correctAnswerQ6) {
            setStep(7)
        } else {
            alert('Oops,You selected the wrong answer, so you cannot participate more!');
        }
    };
    const getButtonClassQ6 = (value) => {
        if (answerQ6 === null) return 'options'; 
        return value === correctAnswerQ6 ? 'options correct' : 'options wrong';
    };


    const handleQues7 = (value) => {
        setAnswerQ7(value);
        if (value === correctAnswerQ7) {
            setStep(8)
        } else {
            alert('Sorry You selected the wrong answer,your quiz ends here..');
        }
    };
    const getButtonClassQ7 = (value) => {
        if (answerQ7 === null) return 'options'; 
        return value === correctAnswerQ7 ? 'options correct' : 'options wrong';
    };


    const handleQues8 = (value) => {
        setAnswerQ8(value);
        if (value === correctAnswerQ8) {
            setStep(9)
        } else {
            alert('You selected wrong answer see you in another attempt...!');
        }
    };
    const getButtonClassQ8 = (value) => {
        if (answerQ8 === null) return 'options'; 
        return value === correctAnswerQ8 ? 'options correct' : 'options wrong';
    };


    const handleQues9 = (value) => {
        setAnswerQ9(value);
        if (value === correctAnswerQ9) {
            setStep(10)
        } else {
            alert('Its sad!! you are selected wrong answer!!!!');
        }
    };
    const getButtonClassQ9 = (value) => {
        if (answerQ9 === null) return 'options'; 
        return value === correctAnswerQ9 ? 'options correct' : 'options wrong';
    };


    const handleQues10 = (value) => {
        setAnswerQ10(value);
        if (value === correctAnswerQ10) {
            alert("You are the Winner.....")
        } else {
            alert('Your bad luck!!! but you Well played..');
        }
    };
    const getButtonClassQ10 = (value) => {
        if (answerQ10 === null) return 'options'; 
        return value === correctAnswerQ10 ? 'options correct' : 'options wrong';
    };



    return (
        <div className='main'>
            <img className='quiz-image' src={profilePic} alt="Quiz Cover" />
                {showPopup && (
                        <Popup open={showPopup} closeOnDocumentClick onClose={() => setShowPopup(false)}>
                            <div>{popupMessage}
                            </div>
                        </Popup>
                 )}

            {step === 1 && (
                <div className='quiz'>
                    <h2 className='quiz-sub'>Question 1</h2>
                    <div className='card'>
                        <p className='ques1'>Q1: What is the full form of SJF?</p>
                        <div className='options-container'>
                            <button className={getButtonClassQ1("Shortest Job First")} onClick={() => handleQues1("Shortest Job First")}>A. Shortest Job First</button>
                            <button className={getButtonClassQ1("Shortest Jam Fly")} onClick={() => handleQues1("Shortest Jam Fly")}>B. Shortest Jam Fly</button>
                            <button className={getButtonClassQ1("Short Jam First")} onClick={() => handleQues1("Short Jam First")}>C. Short Jam First</button>
                            <button className={getButtonClassQ1("Shield Job First")} onClick={() => handleQues1("Shield Job First")}>D. Shield Job First</button>
                        </div>
                    </div>
                </div>
            )}
            {step === 2 && (
                <div className='quiz'>
                    <h2 className='quiz-sub'>Question 2</h2>
                    <div className='card'>
                        <p className='ques1'>Q2: Who is the father of computer?</p>
                        <div className='options-container'>
                            <button className={getButtonClassQ2("James Gosling")} onClick={() => handleQues2("James Gosling")}>A. James Gosling</button>
                            <button className={getButtonClassQ2("Charles Babbage")} onClick={() => handleQues2("Charles Babbage")}>B. Charles Babbage</button>
                            <button className={getButtonClassQ2("Dennis Ritchie")} onClick={() => handleQues2("Dennis Ritchie")}>C. Dennis Ritchie</button>
                            <button className={getButtonClassQ2("Bjarne Stroustrup")} onClick={() => handleQues2("Bjarne Stroustrup")}>D. Bjarne Stroustrup</button>
                        </div>
                    </div>
                </div>
            )}

            {step === 3 && (
                <div className='quiz'>
                    <h2 className='quiz-sub'>Question 3</h2>
                    <div className='card'>
                        <p className='ques1'>Q3: What is the full form of CPU?</p>
                        <div className='options-container'>
                            <button className={getButtonClassQ3("Computer Processing Unit")} onClick={() => handleQues3("Computer Processing Unit")}>A. Computer Processing Unit</button>
                            <button className={getButtonClassQ3("Control Processing Unit")} onClick={() => handleQues3("Control Processing Unit")}>B. Control Processing Unit</button>
                            <button className={getButtonClassQ3("Central Processing Unit")} onClick={() => handleQues3("Central Processing Unit")}>C. Central Processing Unit</button>
                            <button className={getButtonClassQ3("Common Processing Unit")} onClick={() => handleQues3("Common Processing Unit")}>D. Common Processing Unit</button>
                        </div>
                    </div>
                </div>
            )}

            {step === 4 && (
                <div className='quiz'>
                    <h2 className='quiz-sub'>Question 4</h2>
                    <div className='card'>
                        <p className='ques1'>Q4: Which is the brain of the computer from the following?</p>
                        <div className='options-container'>
                            <button className={getButtonClassQ4("Control Unit")} onClick={() => handleQues4("Control Unit")}>A. Control Unit</button>
                            <button className={getButtonClassQ4("Keyboard")} onClick={() => handleQues4("Keyboard")}>B. Keyboard</button>
                            <button className={getButtonClassQ4("Memory")} onClick={() => handleQues4("Memory")}>C. Memory</button>
                            <button className={getButtonClassQ4("Central Processing Unit")} onClick={() => handleQues4("Central Processing Unit")}>D. Central Processing Unit</button>
                        </div>
                    </div>
                </div>
            )}

            {step === 5 && (
                <div className='quiz'>
                    <h2 className='quiz-sub'>Question 5</h2>
                    <div className='card'>
                        <p className='ques1'>Q5: Which of the following is the smallest unit of data in a computer?</p>
                        <div className='options-container'>
                            <button className={getButtonClassQ5("Bit")} onClick={() => handleQues5("Bit")}>A. Bit</button>
                            <button className={getButtonClassQ5("KB")} onClick={() => handleQues5("KB")}>B. KB</button>
                            <button className={getButtonClassQ5("Bibble")} onClick={() => handleQues5("Bibble")}>C. Bibble</button>
                            <button className={getButtonClassQ5("Byte")} onClick={() => handleQues5("Byte")}>D. Byte</button>
                        </div>
                    </div>
                </div>
            )} 

            {step === 6 && (
                <div className='quiz'>
                    <h2 className='quiz-sub'>Question 6</h2>
                    <div className='card'>
                        <p className='ques1'>Q6: Which of the following is not the type of computer code?</p>
                        <div className='options-container'>
                            <button className={getButtonClassQ6("EDIC")} onClick={() => handleQues6("EDIC")}>A. EDIC</button>
                            <button className={getButtonClassQ6("ASCII")} onClick={() => handleQues6("ASCII")}>B. ASCII</button>
                            <button className={getButtonClassQ6("BCD")} onClick={() => handleQues6("BCD")}>C. BCD</button>
                            <button className={getButtonClassQ6("EBCEDIC")} onClick={() => handleQues6("EBCEDIC")}>D. EBCEDIC</button>
                        </div>
                    </div>
                </div>
            )}  


            {step === 7 && (
                <div className='quiz'>
                    <h2 className='quiz-sub'>Question 7</h2>
                    <div className='card'>
                        <p className='ques1'>Q7: Which of the following is the first neural network computer?</p>
                        <div className='options-container'>
                            <button className={getButtonClassQ7("AN")} onClick={() => handleQues7("AN")}>A. AN</button>
                            <button className={getButtonClassQ7("RM")} onClick={() => handleQues7("RM")}>B. RM</button>
                            <button className={getButtonClassQ7("RFD")} onClick={() => handleQues7("RFD")}>C. RFD</button>
                            <button className={getButtonClassQ7("SNARC")} onClick={() => handleQues7("SNARC")}>D. SNARC</button>
                        </div>
                    </div>
                </div>
            )}   


            {step === 8 && (
                <div className='quiz'>
                    <h2 className='quiz-sub'>Question 8</h2>
                    <div className='card'>
                        <p className='ques1'>Q8: Which of the following is designed to control the operations of a computer?</p>
                        <div className='options-container'>
                            <button className={getButtonClassQ8("User")} onClick={() => handleQues8("User")}>A. User</button>
                            <button className={getButtonClassQ8("Application Software")} onClick={() => handleQues8("Application Software")}>B. Application Software</button>
                            <button className={getButtonClassQ8("System Software")} onClick={() => handleQues8("System Software")}>C. System Software</button>
                            <button className={getButtonClassQ8("Utility Software")} onClick={() => handleQues8("Utility Software")}>D. Utility Software</button>
                        </div>
                    </div>
                </div>
            )}     


            {step === 9 && (
                <div className='quiz'>
                    <h2 className='quiz-sub'>Question 9</h2>
                    <div className='card'>
                        <p className='ques1'>Q9: Which of the following device provide the communication between a computer and outside world?</p>
                        <div className='options-container'>
                            <button className={getButtonClassQ9("Compact")} onClick={() => handleQues9("Compact")}>A. Compact</button>
                            <button className={getButtonClassQ9("I/O")} onClick={() => handleQues9("I/O")}>B. I/O</button>
                            <button className={getButtonClassQ9("Drivers")} onClick={() => handleQues9("Drivers")}>C. Drivers</button>
                            <button className={getButtonClassQ9("Storage")} onClick={() => handleQues9("Storage")}>D. Storage</button>
                        </div>
                    </div>
                </div>
            )}   


            {step === 10 && (
                <div className='quiz'>
                    <h2 className='quiz-sub'>Question 10</h2>
                    <div className='card'>
                        <p className='ques1'>Q10: Which of the following can acccess the server?</p>
                        <div className='options-container'>
                            <button className={getButtonClassQ10("Web Client")} onClick={() => handleQues10("Web Client")}>A. Web Client</button>
                            <button className={getButtonClassQ10("User")} onClick={() => handleQues10("User")}>B. User</button>
                            <button className={getButtonClassQ10("Web Browser")} onClick={() => handleQues10("Web Browser")}>C. Web Browser</button>
                            <button className={getButtonClassQ10("Web Server")} onClick={() => handleQues10("Web Server")}>D. Web Server</button>
                        </div>
                    </div>
                </div>
            )}     
  



            <div className='container'>
                {step >= 10 && <button className='optionss opt10'>earned $10,000000</button>}
                {step >= 10 && <button className='optionss opt9'>earned $50,00000</button>}
                {step >= 9 && <button className='optionss opt8'>earned $10,00000</button>}
                {step >= 8 && <button className='optionss opt7'>earned $1,00000</button>}
                {step >= 7 && <button className='optionss opt6'>earned $50,000</button>}
                {step >= 6 && <button className='optionss opt5'>earned $20,000</button>}
                {step >= 5 && <button className='optionss opt4'>earned $10,000</button>}
                {step >= 4 && <button className='optionss opt3'>earned $5000</button>}
                {step >= 3 && <button className='optionss opt2'>earned $1000</button>}
                {step >= 2 && <button className='optionss opt1'>earned $100</button>}
            </div>
        </div>
    );
}

export default Quiz;
