import React, { useState } from 'react';

function Display({ value }) {
  return <div>{value}</div>; // Example placeholder for display
}

function NumberButtons({ onNumberClick }) {
  return (
    <div className="number-buttons">
      <div>
        <Button value="7" onClick={onNumberClick}>7</Button>
        <Button value="8" onClick={onNumberClick}>8</Button>
        <Button value="9" onClick={onNumberClick}>9</Button>
      </div>
      <div>
        <Button value="4" onClick={onNumberClick}>4</Button>
        <Button value="5" onClick={onNumberClick}>5</Button>
        <Button value="6" onClick={onNumberClick}>6</Button>
      </div>
      <div>
        <Button value="1" onClick={onNumberClick}>1</Button>
        <Button value="2" onClick={onNumberClick}>2</Button>
        <Button value="3" onClick={onNumberClick}>3</Button>
      </div>
      <div>
        <Button value="0" onClick={onNumberClick}>0</Button>
      </div>
    </div>
  );
}

function OperatorButtons({ onOperatorClick }) {
  return (
    <div className="operator-buttons">
      <div>
        <Button value="+" onClick={onOperatorClick}>+</Button>
        <Button value="-" onClick={onOperatorClick}>-</Button>
        <Button value="*" onClick={onOperatorClick}>*</Button>
        <Button value="/" onClick={onOperatorClick}>/</Button>
      </div>
    </div>
  );
}

function Buttons({ onNumberClick, onOperatorClick, onClearClick, onEqualClick }) {
  return (
    <div className="buttons-container">
      <NumberButtons onNumberClick={onNumberClick} />
      <OperatorButtons onOperatorClick={onOperatorClick} />
      <Button value="=" onClick={onEqualClick}>/</Button>
      <Button value="C" onClick={onClearClick}>/</Button>
    </div>
  );
}

function Button({ value, onClick }) {
  const handleClick = () => {
    onClick(value);
  }

  return <button onClick={handleClick}>{value}</button>;
}

export default function Calculator() {
  const [currentValue, setCurrentValue] = useState('');
  const [previousValue, setPreviousValue] = useState(null);
  const [operator, setOperator] = useState(null);

  const handleNumberClick = (number) => {
    const operators = ['+', '-', '*', '/'];
    if (operators.includes(currentValue)) {
      setCurrentValue('')
    }
    setCurrentValue((prev) => prev + number);
    console.log(number);
  };

  const handleOperatorClick = (op) => {
    if (currentValue !== '') {
      setPreviousValue(currentValue);
      setCurrentValue(op);
      setOperator(op);
    }
    console.log(op)
  }

  const handleClearClick = () => {
    setCurrentValue('');
    setPreviousValue(null);
    setOperator(null);
  }

  const handleEqualClick = () => {
    if (previousValue !== null && currentValue !== '' && operator) {
      const num1 = parseFloat(previousValue);
      const num2 = parseFloat(currentValue);

      let result;
      switch (operator) {
        case '+':
          result = num1 + num2;
          break;
        case '-':
          result = num1 - num2;
          break;
        case '*':
          result = num1 * num2;
          break;
        case '/':
          if (num2 === 0) {
            result = 'Error, cannot divide by zero';
          } else {
            result = num1 / num2;
          }
          break;
        default:
          result = 0;
      }

      setCurrentValue(result.toString());
      setPreviousValue(null);
      setOperator(null);
      console.log(result);
    }
  }

  return (
    <>
      <Display value={currentValue || '0'} />
      <Buttons
        onNumberClick={handleNumberClick}
        onOperatorClick={handleOperatorClick}
        onClearClick={handleClearClick}
        onEqualClick={handleEqualClick}
      />
    </>
  );
}
