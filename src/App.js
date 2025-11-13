import React, { useState } from 'react';
import './App.css';

function App() {
  const [selectedPages, setSelectedPages] = useState({
    all: false,
    page1: false,
    page2: false,
    page3: false,
    page4: false
  });

  const handleAllPagesChange = () => {
    const isChecked = !selectedPages.all;
    setSelectedPages({
      all: isChecked,
      page1: isChecked,
      page2: isChecked,
      page3: isChecked,
      page4: isChecked
    });
  };

  const handlePageChange = (page) => {
    const newSelectedPages = {
      ...selectedPages,
      [page]: !selectedPages[page]
    };

    // Check if all individual pages are selected
    const allPagesSelected = newSelectedPages.page1 &&
      newSelectedPages.page2 &&
      newSelectedPages.page3 &&
      newSelectedPages.page4;

    newSelectedPages.all = allPagesSelected;
    setSelectedPages(newSelectedPages);
  };

  const handleDone = () => {
    const selected = Object.entries(selectedPages)
      .filter(([key, value]) => value && key !== 'all')
      .map(([key]) => key);

    console.log('Selected pages:', selected);
    alert(`Selected pages: ${selected.length > 0 ? selected.join(', ') : 'none'}`);
  };

  return (
    <div className="card">
      <div className="checkbox-list">
        <div className="page-item" onClick={handleAllPagesChange}>
          <label>All pages</label>
          <input
            type="checkbox"
            checked={selectedPages.all}
            readOnly
          />
        </div>

        <div className="divider"></div>

        <div className="page-item" onClick={() => handlePageChange('page1')}>
          <label>Page 1</label>
          <input
            type="checkbox"
            checked={selectedPages.page1}
            readOnly
          />
        </div>

        <div className="page-item" onClick={() => handlePageChange('page2')}>
          <label>Page 2</label>
          <input
            type="checkbox"
            checked={selectedPages.page2}
            readOnly
          />
        </div>

        <div className="page-item" onClick={() => handlePageChange('page3')}>
          <label>Page 3</label>
          <input
            type="checkbox"
            checked={selectedPages.page3}
            readOnly
          />
        </div>

        <div className="page-item" onClick={() => handlePageChange('page4')}>
          <label>Page 4</label>
          <input
            type="checkbox"
            checked={selectedPages.page4}
            readOnly
          />
        </div>
      </div>

      <div className="divider"></div>

      <button className="done-btn" onClick={handleDone}>
        Done
      </button>
    </div>
  );
}

export default App;