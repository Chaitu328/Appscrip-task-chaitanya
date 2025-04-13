import { useState } from "react";

export const FilterAccordion = ({ title, defaultItems, options = [], showUnselect = false }) => {
  const [isOpen, setIsOpen] = useState(title === "IDEAL FOR");

  return (
    <div className="filter-accordion">
      <button 
        className="filter-header-btn" 
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={`${title.toLowerCase().replace(/\s+/g, '-')}-content`}
      >
        <h3>{title}</h3>
        <span className="dropdown-icon">{isOpen ? '▲' : '▼'}</span>
      </button>
      
      {isOpen && (
        <div 
          className="filter-content"
          id={`${title.toLowerCase().replace(/\s+/g, '-')}-content`}
        >
          <div className="filter-options">
            {defaultItems.map((item, index) => (
              <div key={index} className="filter-option">{item}</div>
            ))}
            
            {showUnselect && (
              <button className="unselect-btn">Unselect all</button>
            )}
            
            {options.map((option, index) => (
              <label key={index} className="filter-checkbox">
                <input type="checkbox" name={option.toLowerCase()} />
                <span className="checkbox-label">{option}</span>
              </label>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};