import React, { useState } from "react";

const Paragraph = () => {
  const [text, setText] = useState("");
  const [paragraphs, setParagraphs] = useState([]);

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleClick = () => {
    setParagraphs([...paragraphs, text]);
    setText("");
  };

  return (
    <div className="paragraph">
      <h2>Task2</h2>
      <input type="text" value={text} onChange={handleChange} />
      <button onClick={handleClick}>Add Paragraph</button>
      {paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  );
};

export default Paragraph;
