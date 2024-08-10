import React, { useState } from 'react';
import profilePic from './assets/cover.jpg';
import Ques1 from './Ques1';

function Quiz() {
    const [name, setName] = useState('');
    const [started, setStarted] = useState(false);

    const handleStart = () => {
        if (name.trim() !== '') {
            setStarted(true);
        } else {
            alert('Please enter your name...');
        }
    };

    if (started) {
        return <Ques1 name={name} />;
    }

    return (
        <div className='main'>
            <img className='quiz-image' src={profilePic}/>
            <div className='quiz'>
                <h1 className='quiz-sub'>Quiz App</h1>
                <div className='cards'>
                    <input
                        type='text'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className='name'
                        placeholder='Enter your Name...'
                    />
                    <button className='start-btn' onClick={handleStart}>Start</button>
                </div>
            </div>
        </div>
    );
}

export default Quiz;
