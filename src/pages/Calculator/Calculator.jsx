import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
    const [currentOperand, setCurrentOperand] = useState('');
    const [previousOperand, setPreviousOperand] = useState('');
    const [operation, setOperation] = useState(null);
    const [lastOperation, setLastOperation] = useState(null);

    const appendNumber = (number) => {
        if (number === '.' && currentOperand.includes('.')) return;
        setCurrentOperand(currentOperand + number.toString());
    };

    const chooseOperation = (op) => {
        if (currentOperand === '') return;
        if (previousOperand !== '') {
            compute();
        }
        setOperation(op);
        setPreviousOperand(currentOperand);
        setCurrentOperand('');
        setLastOperation(null);
    };

    const compute = () => {
        let result;
        const previous = parseFloat(previousOperand);
        const current = parseFloat(currentOperand);

        if (isNaN(previous) || isNaN(current)) return;

        switch (operation) {
            case '+':
                result = previous + current;
                break;
            case '-':
                result = previous - current;
                break;
            case 'x':
                result = previous * current;
                break;
            case '÷':
                result = previous / current;
                break;
            default:
                return;
        }

        setCurrentOperand(result);
        setPreviousOperand('');
        setLastOperation({ operation: operation, number: current });
        setOperation(undefined);
    };

    const repeatLastOperation = () => {
        if (!lastOperation) return;
        setPreviousOperand(currentOperand);
        const current = parseFloat(currentOperand);

        switch (lastOperation.operation) {
            case '+':
                setCurrentOperand(current + lastOperation.number);
                break;
            case '-':
                setCurrentOperand(current - lastOperation.number);
                break;
            case 'x':
                setCurrentOperand(current * lastOperation.number);
                break;
            case '÷':
                setCurrentOperand(current / lastOperation.number);
                break;
        }
    };

    const clear = () => {
        setCurrentOperand('');
        setPreviousOperand('');
        setOperation(null);
        setLastOperation(null);
    };

    const deleteLast = () => {
        setCurrentOperand(currentOperand.toString().slice(0, -1));
    };

    const formatNumber = (number) => {
        if (number === '') return '';
        const floatNumber = parseFloat(number);
        if (isNaN(floatNumber)) return '';
        return floatNumber.toLocaleString('en');
    };

    return (
        <div className="calculator">
            <div className="screen">
                <div className="previous">{formatNumber(previousOperand)} {operation}</div>
                <div className="current">{formatNumber(currentOperand)}</div>
            </div>

            <div className="cal_btn_row">
                <button className="cal_btn double" onClick={clear}>C</button>
                <button className="cal_btn" onClick={deleteLast}>⭠</button>
                <button className="cal_btn" onClick={() => chooseOperation('÷')}>÷</button>
            </div>
            <div className="cal_btn_row">
                {[7, 8, 9].map(num => (
                    <button key={num} className="cal_btn" onClick={() => appendNumber(num.toString())}>{num}</button>
                ))}
                <button className="cal_btn" onClick={() => chooseOperation('x')}>x</button>
            </div>
            <div className="cal_btn_row">
                {[4, 5, 6].map(num => (
                    <button key={num} className="cal_btn" onClick={() => appendNumber(num.toString())}>{num}</button>
                ))}
                <button className="cal_btn" onClick={() => chooseOperation('-')}>-</button>
            </div>
            <div className="cal_btn_row">
                {[1, 2, 3].map(num => (
                    <button key={num} className="cal_btn" onClick={() => appendNumber(num.toString())}>{num}</button>
                ))}
                <button className="cal_btn" onClick={() => chooseOperation('+')}>+</button>
            </div>
            <div className="cal_btn_row">
                <button className="cal_btn" onClick={() => appendNumber('.')}>.</button>
                <button className="cal_btn double" onClick={() => appendNumber('0')}>0</button>
                <button className="cal_btn" onClick={() => {
                    if (operation == null && lastOperation) {
                        repeatLastOperation();
                    } else {
                        compute();
                    }
                }}>=</button>
            </div>
        </div>
    );
};

export default Calculator;
