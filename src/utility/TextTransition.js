import React from "react";
import { CSSTransition } from "react-transition-group";
import "./TextTransition.css";

const TextTransition = ({ text }) => {
  const letters = text.split("");

  return (
    <div className="text-transition">
      {letters.map((letter, index) => (
        <CSSTransition
          key={index}
          in={true}
          timeout={index * 100}
          classNames="letter-transition"
          appear
        >
          <span
            className="letter"
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            {letter}
          </span>
        </CSSTransition>
      ))}
    </div>
  );
};

export default TextTransition;
