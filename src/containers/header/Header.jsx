import React from "react";
import "./header.css";
import people from "../../assets/people.png";
import AI from "../../assets/ai.png";

function Header() {
  return (
    <div className="maker__header section_padding" id="home">
      <div className="maker__header-content">
        <h1 className="gradient__text">
          Let's Build Something amazing with GPT-3 OpenAI
        </h1>
        <p>
          We’ve trained a model called ChatGPT which interacts in a
          conversational way. The dialogue format makes it possible for ChatGPT
          to answer followup questions, admit its mistakes, challenge incorrect
          premises, and reject inappropriate requests. ChatGPT is a sibling
          model to InstructGPT, which is trained to follow an instruction in a
          prompt and provide a detailed response.
        </p>
        <div className="maker__header-content__input">
          <input type="email" placeholder="your email address" />
          <button type="button">Get Sarted</button>
        </div>
        <div className="maker__under-content__people">
          <img src={people} alt="peoples" />
          <p>1600 people requested acces</p>
        </div>
      </div>
      <div className="maker__header-image">
        <img src={AI} alt="AI" />
      </div>
    </div>
  );
}

export default Header;
