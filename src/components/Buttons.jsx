import React from "react";
import "../scss/Buttons.scss";

const Digits = () => {
  const buttons = [
    { button: "AC", id: "ac" },
    { button: "+/-", id: "reverse" },
    { button: "%", id: "percentage" },
    { button: "÷", id: "division" },
    { button: 7, id: "seven" },
    { button: 8, id: "eight" },
    { button: 9, id: "nine" },
    { button: "x", id: "multiple" },
    { button: 4, id: "four" },
    { button: 5, id: "five" },
    { button: 6, id: "six" },
    { button: "-", id: "minus" },
    { button: 1, id: "one" },
    { button: 2, id: "two" },
    { button: 3, id: "three" },
    { button: "+", id: "plus" },
    { button: 0, id: "zero" },
    { button: ".", id: "decimal" },
    { button: "=", id: "calculate" },
  ];

  const buttonList = buttons.map((item) => <span key={item.id} className={`button  ${item.id}`}>{item.button}</span>);

  return <div className="digits-container">
    {buttonList}
  </div>;
};

export default Digits;
