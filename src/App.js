import React, { useState } from "react";
import "./App.css";

function Calculator() {
  const [result, setResult] = useState("0");
  const [input, setInput] = useState("");

  const handleClick = (event) => {
    const value = event.target.value;

    switch (value) {
      case "AC":
        setResult("0");
        setInput("");
        break;
      case "DEL":
        setResult(result.slice(0, -1));
        
        break;
      case "=":

        setResult(eval(result).toString());

        setInput("");
        break;
      default:
        if (result == "0") {

          setResult(value);
        }
        else
          setResult(result + value);
        setInput(input + value);
    }
  };

  return (
    <div className="calculator">
      <div className="screen">{result}</div>
      <div className="input">
        <button onClick={handleClick} value="AC">
          AC
        </button>
        <button onClick={handleClick} value="DEL">
          DEL
        </button>
        <button onClick={handleClick} value="/">
          /
        </button>
        <button onClick={handleClick} value="1">
          1
        </button>
        <button onClick={handleClick} value="2">
          2
        </button>
        <button onClick={handleClick} value="3">
          3
        </button>
        <button onClick={handleClick} value="*">
          *
        </button>
        <button onClick={handleClick} value="4">
          4
        </button>
        <button onClick={handleClick} value="5">
          5
        </button>
        <button onClick={handleClick} value="6">
          6
        </button>
        <button onClick={handleClick} value="+">
          +
        </button>
        <button onClick={handleClick} value="7">
          7
        </button>
        <button onClick={handleClick} value="8">
          8
        </button>
        <button onClick={handleClick} value="9">
          9
        </button>
        <button onClick={handleClick} value="-">
          -
        </button>
        <button onClick={handleClick} value=".">
          .
        </button>
        <button onClick={handleClick} value="0">
          0
        </button>
        <button onClick={handleClick} value="=">
          =
        </button>
      </div>
    </div>
  );
}

export default Calculator;
