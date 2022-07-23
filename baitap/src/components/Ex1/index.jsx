import React from "react";
import { useState } from "react";

const Ex1 = ({ array }) => {
  const [max, setMax] = useState(null);

  // Hàm tìm max
  const adjacentElementsProduct = (array) => {
    let max = 0;
    for (let i = 0, j = 1; i < array.length - 1; i++, j++) {
      if (array[i] * array[j] > max) {
        max = array[i] * array[j];
      }
    }
    return max;
  };

  //Onclick
  const click = () => {
    setMax(adjacentElementsProduct(array));
  };

  return (
    <>
      <div>INPUT: [{array.join(", ")}]</div>
      <div>
        <button onClick={click}>Play</button>
      </div>
      <div>OUTPUT: {max && max}</div>
    </>
  );
};

export default Ex1;
