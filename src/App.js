import React, { useState } from "react";
import "./style.css";

const Box = ({ onPress, style }) => {
  return <div style={style} onClick={onPress} className="box" />;
};

export default function App() {
  /*
This is the main part of the app, here we create a state called checked which 
will hold the last two indexes of checked boxes, and based on that index, 
we will conditionally set the background color of the Box component to either 
red or blue. 
*/
  const [checked, setChecked] = useState([]);
  let array = Array.from({ length: 16 }, () => 0);
  // console.log(array);
  return (
    <div className="container">
      {array?.map((_, index) => (
        <Box
          key={index}
          onPress={() => {
            if (checked.length === 2) {
              checked.shift();
            }
            if (!checked.includes(index)) setChecked([...checked, index]);
          }}
          style={{ backgroundColor: checked.includes(index) ? "red" : "blue" }}
        />
      ))}
    </div>
  );
}
