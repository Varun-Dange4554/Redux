import { useState, useRef } from "react";
import PropTypes from "prop-types";
import { PinItem } from "./PinItem";

export const InputBox = ({ setMainVal, perBox, length, style }) => {

  const [values, setValues] = useState(new Array(length).fill(""));
  const inputsRef = useRef([]);

  const handleChange = (val, index) => {
    if (val.length > perBox) return;

    const updated = [...values];
    updated[index] = val;

    setValues(updated);
    setMainVal(updated.join(""));

  
    if (val !== "" && index < length - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleBackspace = (index) => {
    if (index > 0) {
      inputsRef.current[index - 1]?.focus(); 
    }
  };

  return (
    <>
      {values.map((item, index) => (
        <PinItem
          key={index}
          ref={(el) => (inputsRef.current[index] = el)}
          value={item}
          max={perBox}
          style={style}
          onChange={(val) => handleChange(val, index)}
          onBackspace={() => handleBackspace(index)}
        />
      ))}
    </>
  );
};

InputBox.propTypes = {
  setMainVal: PropTypes.func.isRequired,
  length: PropTypes.number,
  perBox: PropTypes.number,
  style: PropTypes.object
};

InputBox.defaultProps = {
  length: 4,
  perBox: 1
};
