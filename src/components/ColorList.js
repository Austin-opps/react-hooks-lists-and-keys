import React from "react";

function ColorList() {
  const colors = [
    "firebrick",
    "rebeccapurple",
    "salmon",
    "darkslategray",
    "hotpink",
    "darkblue",
    "mediumorchid",
  ];

  const colorElements = colors.map((color) => {
    return (
    <li key={color} style={{ color: color }}>
    {color}
  </li>
  )
  });
  return (
    <div>
      <h1>Top 5 CSS Colors</h1>
      <ol>
        {/* display the array of <li> elements here! */}
        {colorElements}
      </ol>
    </div>
  );
}

export default ColorList;
