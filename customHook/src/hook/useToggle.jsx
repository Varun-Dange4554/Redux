
import { useState } from "react";

export const useToggle = (initialValue = false) => {
  const [value, setValue] = useState(initialValue);
 

  function toggleValue(val) {
    console.log('🚀 ~ val:', val);
    if (typeof val === "boolean") {
      setValue(val);          
    } else {
      setValue(prev => !prev); 
    }
  }

  return [value, toggleValue];
};
