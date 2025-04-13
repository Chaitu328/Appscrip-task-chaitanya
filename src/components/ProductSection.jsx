import { ProductFilters } from "./ProductFilters"
import { ProductGrid } from "./ProductGrid"
import  { useState } from "react"

export const ProductSection = () => {
  // State for filters toggle
  const [filtersVisible, setFiltersVisible] = useState(true);
  // State for sort option
  const [sortOption, setSortOption] = useState('RECOMMENDED');
  // State for view mode
  const [viewMode, setViewMode] = useState('grid');
  
  const toggleFilters = () => {
    setFiltersVisible(!filtersVisible);
  };
  
  return (
    <section className="products-section container">
      <div className="products-header">
        <div className="products-count">
          <span>3425 ITEMS</span>
          <button className="filter-toggle" onClick={toggleFilters}>
            {filtersVisible ? '← HIDE FILTER' : 'SHOW FILTER →'}
          </button>
        </div>
        
        <div className="view-sort-controls">
          <div className="view-options">
            <button 
              className={`view-option ${viewMode === 'grid' ? 'active' : ''}`}
              onClick={() => setViewMode('grid')}
              aria-label="Grid View"
            >
              GRID VIEW
            </button>
            <button 
              className={`view-option ${viewMode === 'list' ? 'active' : ''}`}
              onClick={() => setViewMode('list')}
              aria-label="List View"
            >
              LIST VIEW
            </button>
          </div>
          
          <div className="sort-dropdown">
            <button className="sort-button">
              {sortOption} <span className="dropdown-icon">▼</span>
            </button>
            <div className="sort-dropdown-content">
              <button 
                className={sortOption === 'RECOMMENDED' ? 'active' : ''} 
                onClick={() => setSortOption('RECOMMENDED')}
              >
                RECOMMENDED
              </button>
              <button 
                className={sortOption === 'NEWEST FIRST' ? 'active' : ''}
                onClick={() => setSortOption('NEWEST FIRST')}
              >
                NEWEST FIRST
              </button>
              <button 
                className={sortOption === 'POPULAR' ? 'active' : ''}
                onClick={() => setSortOption('POPULAR')}
              >
                POPULAR
              </button>
              <button 
                className={sortOption === 'PRICE : HIGH TO LOW' ? 'active' : ''}
                onClick={() => setSortOption('PRICE : HIGH TO LOW')}
              >
                PRICE : HIGH TO LOW
              </button>
              <button
                className={sortOption === 'PRICE : LOW TO HIGH' ? 'active' : ''}
                onClick={() => setSortOption('PRICE : LOW TO HIGH')}
              >
                PRICE : LOW TO HIGH
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="products-content">
        {filtersVisible && <ProductFilters />}
        <ProductGrid viewMode={viewMode} />
      </div>
    </section>
  );
};