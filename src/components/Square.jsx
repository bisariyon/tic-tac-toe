import React from "react";

function Square(props) {
  let bgColorClass = "bg-slate-900";

  if (props.value === "X") {
    bgColorClass = "bg-lime-600";
  } else if (props.value === "O") {
    bgColorClass = "bg-purple-600";
  }

  return (
    <div
      onClick={props.onClick}
      className={`border-2 text-3xl text-white w-20 h-20 sm:w-28 sm:h-28 flex justify-center items-center cursor-pointer ${bgColorClass} lg:w-32 lg:h-32 lg:text-4xl`}
    >
      {props.value}
    </div>
  );
}

export default Square;
