import Keypad from "./Keypad";
import Display from "./Display";

import "../scss/Calculator.scss";

const Calculator = () => {
  return (
    <div className="calculator-container">
      <Display />
      <Keypad />
    </div>
  );
};

export default Calculator;
