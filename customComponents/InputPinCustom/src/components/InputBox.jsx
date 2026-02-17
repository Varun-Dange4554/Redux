import { useState, useRef } from "react"
import PropTypes from 'prop-types'
import { PinItem } from "./pinItem"

export const InputBox = ({ setMainVal, perBox, length, style }) => {

  const [values, setValues] = useState(new Array(length).fill(""))
  const elements = useRef(new Array(length).fill(0));

  const handleChange = (v, i) => {

    const vals = [...values]

    vals[i] = v;

    setValues(vals);

  

    if ( i < vals.length - 1) {
      elements.current[i + 1]?.focus();
      setMainVal(vals.join(""));
    }
  }

  const BackSpacehandle = (i) =>{

    const vals = [...values];

    vals[i] = "";

    setValues(vals);

    if(i === 0) return
    elements.current[i - 1].focus();
    setMainVal(vals.join(""))
  }

  return (
    <>
      {
        values.map((items, index) => 
          <PinItem
            ref={(v) => elements.current[index] = v}
            key={index}
            max={perBox}
            style={style}
            handleChange={(dataVal) => handleChange(dataVal, index)}
            BackSpacehandle={() => BackSpacehandle(index)}
          />
        )
      }
    </>
  )
}

InputBox.propTypes = {
  label:PropTypes.string,
  length: PropTypes.number.isRequired,
  perBox: PropTypes.number.isRequired
}

InputBox.defaultProps = {
  length: 3,
  perBox: 1
}
