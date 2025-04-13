import { useState } from "react";

export const FilterAccordion = ({ title, defaultItems }) => {
    const [isOpen, setIsOpen] = useState(false);
  
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
            <ul>
              {defaultItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  };