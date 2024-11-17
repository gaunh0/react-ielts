import React from 'react';
import TestTabs from '../TestTabs/TestTabs';
import FilterBar from '../FilterBar/FilterBar';
import TestGroups from '../TestGroups/TestGroups';
import Pagination from '../Pagination/Pagination';
import './MainContent.css';

const MainContent = () => {
  return (
    <div className="main-content">
      <h2>IELTS Exam Library</h2>
      <TestTabs />
      <FilterBar />
      <TestGroups />
      <Pagination />
    </div>
  );
};

export default MainContent;
