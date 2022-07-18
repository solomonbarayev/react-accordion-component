import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = (props) => {
  const [isShown, setIsShown] = useState(false);
  const { info, title } = props;
  return (
    <div className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={() => setIsShown(!isShown)}>
          {isShown ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      <p className={isShown ? "isShown" : "isHidden"}>{info}</p>
    </div>
  );
};

export default Question;
