import React from "react";
import { useState } from "react";

const Ex2 = ({ array }) => {
  const [sumWeight, setSumWeight] = useState(null);

  // Hàm tính tổng cân nặng
  const alternatingSums = (array) => {
    let weight1 = 0;
    let weight2 = 0;
    let sumWeight = [];

    for (let i = 0; i < array.length; i++) {
      if (i % 2 == 0) {
        weight1 += array[i];
      } else {
        weight2 += array[i];
      }
    }

    return (sumWeight = [weight1, weight2]);
  };

  //Onclick
  const click = () => {
    setSumWeight(alternatingSums(array));
  };

  return (
    <>
      <div>INPUT: [{array.join(", ")}]</div>
      <div>
        <button onClick={click}>Play</button>
      </div>
      <div>OUTPUT: [{sumWeight ? sumWeight.join(", ") : " "}]</div>
    </>
  );
};

export default Ex2;
