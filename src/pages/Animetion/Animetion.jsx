import React, { useState, useEffect } from 'react';
import './Animetion.css';

const Ball = () => {
    const fieldWidth = 600;
    const fieldHeight = 400;
    const diameter = 80;
    const maxLeft = fieldWidth - diameter - 2;
    const maxTop = fieldHeight - diameter - 2;
    const vx = 5;
    const vy = 5;
    const rotationSpeed = 5;

    const [running, setRunning] = useState(false);
    const [goRight, setGoRight] = useState(true);
    const [goDown, setGoDown] = useState(true);
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [rotation, setRotation] = useState(0);
    const [selectedButton, setSelectedButton] = useState('None');

    useEffect(() => {
        const handleKeyDown = (event) => {
            switch (event.key) {
                case ' ':
                    runClick();
                    break;
                case '0':
                    setNone();
                    break;
                case '1':
                    setBasketball();
                    break;
                case '2':
                    setFootball();
                    break;
                case '3':
                    setVolleyball();
                    break;
                case '4':
                    setHuman();
                    break;
                case '5':
                    setCartoon();
                    break;
                case '6':
                    setLogo();
                    break;
                default:
                    break;
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            if (running) {
                calculate();
            }
        }, 25);
        return () => clearInterval(interval);
    }, [running, x, y, goRight, goDown]);

    const runClick = () => setRunning(!running);

    const calculate = () => {
        let newX = x;
        let newY = y;
        let newGoRight = goRight;
        let newGoDown = goDown;

        if (goRight) {
            newX += vx;
            if (newX >= maxLeft) newGoRight = false;
        } else {
            newX -= vx;
            if (newX <= 0) newGoRight = true;
        }

        if (goDown) {
            newY += vy;
            if (newY >= maxTop) newGoDown = false;
        } else {
            newY -= vy;
            if (newY <= 0) newGoDown = true;
        }

        setX(newX);
        setY(newY);
        setGoRight(newGoRight);
        setGoDown(newGoDown);
        setRotation(rotation + rotationSpeed);
    };

    const updateButtonHighlight = (buttonName) => setSelectedButton(buttonName);

    const setNone = () => updateButtonHighlight('None');
    const setBasketball = () => updateButtonHighlight('Basketball');
    const setFootball = () => updateButtonHighlight('Football');
    const setVolleyball = () => updateButtonHighlight('Volleyball');
    const setHuman = () => updateButtonHighlight('Human');
    const setCartoon = () => updateButtonHighlight('Cartoon');
    const setLogo = () => updateButtonHighlight('Logo');

    const getBackground = () => {
        switch (selectedButton) {
            case 'Basketball':
                return "url('https://cdn.discordapp.com/attachments/938006565489897563/1298930893435441183/basketball.png?ex=671b5b29&is=671a09a9&hm=88f6e79889137ea60c51466f7cc1c6940db4ce78b8dd2b021aac5efcb0d921da&')";
            case 'Football':
                return "url('https://cdn.discordapp.com/attachments/938006565489897563/1298930894446395478/football.png?ex=671b5b2a&is=671a09aa&hm=6eed6982bff31ef1a37bf1f80da98af1ee2c17037195f5ce95a9cebb7726bf16&')";
            case 'Volleyball':
                return "url('https://cdn.discordapp.com/attachments/938006565489897563/1298930895335723018/volleyball.png?ex=671b5b2a&is=671a09aa&hm=40bf5245d9f70a3541fbbb47c274311caaa4ab8aabad666b569bb87b8d30cfe0&')";
            case 'Human':
                return "url('public/stdempimg.jpg')";
            case 'Cartoon':
                return "url('https://cdn.discordapp.com/attachments/938006565489897563/1276152676282794045/Untitled-1.png?ex=671ae30b&is=6719918b&hm=c98beca451fab7545ec048e55899966b1411388bf50e5401011a417eeed90ee2&')";
            case 'Logo':
                return "url('public/stdempimg.jpg')";
            default:
                return "aliceblue";
        }
    };
    
    return (
        <div id="animation-container">
            <div id="animation-field" style={{ width: fieldWidth, height: fieldHeight }}>
                <div
                    id="ball"
                    style={{
                        width: diameter,
                        height: diameter,
                        backgroundImage: getBackground(),
                        backgroundSize: '100% 100%',
                        backgroundPosition: 'center',
                        position: 'absolute',
                        left: x,
                        top: y,
                        transform: `rotate(${rotation}deg)`,
                    }}
                ></div>
            </div>
            <div id="control">
                <button id="run" className={`btn ${running ? 'btn-warning' : 'btn-success'}`} onClick={runClick}>
                    {running ? 'Pause' : 'Run'}
                </button>
                <button className={selectedButton === 'None' ? 'button-selected' : 'button-not-selected'} onClick={setNone}>None</button>
                <button className={selectedButton === 'Basketball' ? 'button-selected' : 'button-not-selected'} onClick={setBasketball}>Basketball</button>
                <button className={selectedButton === 'Football' ? 'button-selected' : 'button-not-selected'} onClick={setFootball}>Football</button>
                <button className={selectedButton === 'Volleyball' ? 'button-selected' : 'button-not-selected'} onClick={setVolleyball}>Volleyball</button>
                <button className={selectedButton === 'Human' ? 'button-selected' : 'button-not-selected'} onClick={setHuman}>Human</button>
                <button className={selectedButton === 'Cartoon' ? 'button-selected' : 'button-not-selected'} onClick={setCartoon}>Cartoon</button>
                <button className={selectedButton === 'Logo' ? 'button-selected' : 'button-not-selected'} onClick={setLogo}>Logo</button>
            </div>
        </div>
    );
};

export default Ball;