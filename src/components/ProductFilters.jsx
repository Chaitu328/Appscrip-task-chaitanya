import { useState } from 'react';
import { FilterAccordion } from '../components/FilterAccordian';

export const ProductFilters = () => {
    const [mobileFiltersVisible, setMobileFiltersVisible] = useState(false);
    
    const toggleMobileFilters = () => {
      setMobileFiltersVisible(!mobileFiltersVisible);
    };
    
    return (
      <aside className="product-filters-container">
        
        <button className="mobile-filter-toggle" onClick={toggleMobileFilters}>
          {mobileFiltersVisible ? 'HIDE FILTERS' : 'SHOW FILTERS'}
        </button>
        
        <div className={`filters-sidebar ${mobileFiltersVisible ? 'visible' : ''}`}>
          <div className="filter-group">
            <h3>CUSTOMIZABLE</h3>
            <input type="checkbox" id="customizable" />
            <label htmlFor="customizable"></label>
          </div>
  
          <FilterAccordion title="IDEAL FOR" defaultItems={['All']} />
          <FilterAccordion title="OCCASION" defaultItems={['All']} />
          <FilterAccordion title="WORK" defaultItems={['All']} />
          <FilterAccordion title="FABRIC" defaultItems={['All']} />
          <FilterAccordion title="SEGMENT" defaultItems={['All']} />
          <FilterAccordion title="SUITABLE FOR" defaultItems={['All']} />
          <FilterAccordion title="RAW MATERIALS" defaultItems={['All']} />
          <FilterAccordion title="PATTERN" defaultItems={['All']} />
        </div>
      </aside>
    );
  };