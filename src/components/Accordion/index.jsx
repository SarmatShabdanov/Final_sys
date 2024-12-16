import React, { useState } from 'react';
import "./index.css";

export function Accordion(props) {
  const { children, title, initiallyOpen = false } = props;

  // Если пропс initiallyOpen присутствует, аккордеон будет открыт
  const [isOpen, setIsOpen] = useState(initiallyOpen);

  const toggleAccordion = () => {
    setIsOpen(!isOpen); // Переключаем состояние
  };

  return (
    <div className="accordion">
      <div className="accordion-header">
        <h2>{title}</h2>
        <button className="accordion-toggle" onClick={toggleAccordion}>
          {isOpen ? '-' : '+'}
        </button>
      </div>
      {isOpen && <p className="accordion-content">{children}</p>}
    </div>
  );
}
