import React from 'react';

function Display() {
  return <div>Display Here</div>; // Example placeholder for display
}

function NumberButtons() {
  return (
    <div className="number-buttons">
      <div>
        <Button value="7">7</Button>
        <Button value="8">8</Button>
        <Button value="9">9</Button>
      </div>
      <div>
        <Button value="4">4</Button>
        <Button value="5">5</Button>
        <Button value="6">6</Button>
      </div>
      <div>
        <Button value="1">1</Button>
        <Button value="2">2</Button>
        <Button value="3">3</Button>
      </div>
      <div>
        <Button value="0">0</Button>
      </div>
    </div>
  );
}

function OperatorButtons() {
  return (
    <div className="operator-buttons">
      <div>
        <Button value="+">+</Button>
      </div>
      <div>
        <Button value="-">-</Button>
      </div>
      <div>
        <Button value="*">*</Button>
      </div>
      <div>
        <Button value="/">/</Button>
      </div>
    </div>
  );
}

function Buttons() {
  return (
    <div className="buttons-container">
      <NumberButtons />
      <OperatorButtons />
    </div>
  );
}

function Button({ value }) {
  return <button>{value}</button>;
}

export default function Calculator() {
  return (
    <>
      <Display />
      <Buttons />
    </>
  );
}
