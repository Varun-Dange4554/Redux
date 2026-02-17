import React from "react";
export const PinItem = React.forwardRef (({style,max, handleChange,BackSpacehandle }, ref) => {

  const handleKeyUp = (e) =>{

    switch (e.keyCode) {
      case 8 :
        BackSpacehandle()
        break;

        default:
          handleChange(e.target.value);
    }
  }
  return (
    <>
    <input ref={ref} style={style} maxLength={max} onKeyUp={handleKeyUp}/>
    </>
  )
});


