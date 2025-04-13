import { FilterAccordion } from '../components/FilterAccordian';

export const ProductFilters = () => {
  return (
    <aside className="product-filters">
      <div className="filter-group">
        <label className="filter-checkbox">
          <input type="checkbox" name="customizable" id="customizable" />
          <span className="checkbox-label">CUSTOMIZABLE</span>
        </label>
      </div>

      <FilterAccordion 
        title="IDEAL FOR" 
        defaultItems={['All']} 
        options={['Men', 'Women', 'Baby & Kids']}
        showUnselect={true}
      />
      
      <FilterAccordion 
        title="OCCASION" 
        defaultItems={['All']} 
        options={[]}
      />
      
      <FilterAccordion 
        title="WORK" 
        defaultItems={['All']} 
        options={[]}
      />
      
      <FilterAccordion 
        title="FABRIC" 
        defaultItems={['All']} 
        options={[]}
      />
      
      <FilterAccordion 
        title="SEGMENT" 
        defaultItems={['All']} 
        options={[]}
      />
      
      <FilterAccordion 
        title="SUITABLE FOR" 
        defaultItems={['All']} 
        options={[]}
      />
      
      <FilterAccordion 
        title="RAW MATERIALS" 
        defaultItems={['All']} 
        options={[]}
      />
      
      <FilterAccordion 
        title="PATTERN" 
        defaultItems={['All']} 
        options={[]}
      />
    </aside>
  );
};