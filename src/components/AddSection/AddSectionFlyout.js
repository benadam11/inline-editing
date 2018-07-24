import React, { Fragment } from "react";
import { Preview } from "./Preview";
import { CategoryList } from "./CategoryList";
import { categories } from "./data";
import "./AddSectionFlyout.css";

export const AddSectionFlyout = ({
  toggleFlyout,
  handleSelect,
  handleChange,
  selectedIndex
}) => {
  const items = ({ name }, i) => (
    <CategoryList
      name={name}
      index={i}
      selectedIndex={selectedIndex}
      handleSelect={handleSelect}
    />
  );

  const options = ({ name }, i) => {
    return (
      <option key={i} value={name}>
        {name}
      </option>
    );
  };
  return (
    <Fragment>
      <aside className="add-section-flyout">
        <header className="search-container">
          <input placeholder="Search" type="text" />
        </header>
        <div className="flyout-scroll-container">
          <div className="category-container">
            <ul className="category-list">{categories.map(items)}</ul>
            <div className="category-select">
              <select onChange={handleChange}>{categories.map(options)}</select>
            </div>
          </div>
          <div className="preview-container">
            {Array.from({
              length: categories.find(c => c.name === selectedIndex).count
            }).map(item => <Preview toggleFlyout={toggleFlyout} />)}
          </div>
        </div>
      </aside>
      <div className="add-section-overlay" onClick={toggleFlyout} />
    </Fragment>
  );
};
