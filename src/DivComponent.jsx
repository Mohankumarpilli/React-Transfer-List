import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import UlComponent from "./UlComponent";

const DivComponent = () => {
  const arrLeft = [
    { status: false, value: "one" },
    { status: false, value: "two" },
    { status: false, value: "three" },
    { status: false, value: "four" },
  ];
  const arrRight = [
    { status: false, value: "five" },
    { status: false, value: "six" },
    { status: false, value: "seven" },
    { status: false, value: "eight" },
  ];
  const [leftEle, setLeftEle] = useState([]);
  const [rightEle, setRightEle] = useState([]);
  useEffect(() => {
    const left = arrLeft;
    const right = arrRight;
    setLeftEle(() => left);
    setRightEle(() => right);
  }, []);
  const handleAll = (side) => {
    if (side === "left") {
      setLeftEle([...leftEle, ...rightEle]);
      setRightEle([]);
    } else {
      setRightEle([...leftEle, ...rightEle]);
      setLeftEle([]);
    }
  };
  const handleChange = (e) => {
    const [side, index] = e.split("-");
    const idx = parseInt(index);
    if (side === "left") {
      setLeftEle((prevLeft) =>
        prevLeft.map((ele, i) =>
          i === idx ? { ...ele, status: !ele.status } : ele
        )
      );
    } else {
      setRightEle((prevRight) =>
        prevRight.map((ele, i) =>
          i === idx ? { ...ele, status: !ele.status } : ele
        )
      );
    }
  };

  const handleClick = (side) => {
    if (side === "left") {
      let changingEle = rightEle
        .filter((ele) => ele.status)    
        .map((ele) => ({ ...ele, status: false }));
      if (changingEle.length > 0) {
        setRightEle((prev) => prev.filter((ele) => !ele.status));
        setLeftEle((pre) => [...pre, ...changingEle]);
      }
    } else if (side == "right") {
      let changingEle = leftEle
        .filter((ele) => ele.status)
        .map((ele) => ({ ...ele, status: false }));
      if (changingEle.length > 0) {
        setLeftEle((prev) => prev.filter((ele) => !ele.status));
        setRightEle((pre) => [...pre, ...changingEle]);
      }
    }
  };
  return (
    <div className="h-full w-full flex p-5">
      <UlComponent data={leftEle} side={"left"} handleChange={handleChange} />
      <div className="flex flex-col gap-3 border-1 border-gray-400 p-4 w-full items-center">
        <button
          className="h-7 w-10 bg-gray-300 border-1"
          onClick={() => handleAll("right")}
        >
          {">>"}
        </button>
        <button
          onClick={() => handleClick("right")}
          className="h-7 w-10 bg-gray-300 border-1"
        >
          {">"}
        </button>
        <button
          onClick={() => handleClick("left")}
          className="h-7 w-10 bg-gray-300 border-1"
        >
          {"<"}
        </button>
        <button
          className="h-7 w-10 bg-gray-300 border-1"
          onClick={() => handleAll("left")}
        >
          {"<<"}
        </button>
      </div>
      <UlComponent data={rightEle} side={"right"} handleChange={handleChange} />
    </div>
  );
};

export default DivComponent;
