import React from "react";

export const PinItem = React.forwardRef(
  ({ value, style, max, onChange, onBackspace }, ref) => {
    
    const handleKeyDown = (e) => {
      if (e.key === "Backspace" && value === "") {
        onBackspace();
      }
    };

    return (
      <input
        ref={ref}
        type="text"
        value={value}
        maxLength={max}
        style={style}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
      />
    );
  }
);
