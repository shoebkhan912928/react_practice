import React from "react";
import { useState } from "react";
const PasswordInput = () => {
    const [visible, setVisible]= useState(false);
  return (
    <div>
        <input type={visible ? "text" : "password"} />
        <button onClick={() => setVisible(!visible)}>
            {visible ? "Hide" : "show  "} password
        </button>
      
    </div>
  );
};

export default PasswordInput;