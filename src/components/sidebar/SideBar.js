import React from 'react';

import { SIDEBAR } from '../../data/sidebar';
import './SideBar.css';

const SideBar = ({ navigate, handleFilter }) => {
  const renderSideCard = () => {
    return SIDEBAR.map((item) => {
      if (item.type === 'section') {
        return (
          <div
            key={item.id}
            className='sideButton'
            onClick={() => navigate(item.value)}
          >
            <p>{item.label}</p>
          </div>
        );
      }
      if (item.type === 'filter') {
        return (
          <div>
            <p className='industries'>Industries</p>
            {item.filter_values.map((filter) => (
              <div
                className='filterParam'
                onClick={() => handleFilter(filter.value)}
              >
                <p className='filterParamText'>{filter.label}</p>
              </div>
            ))}
          </div>
        );
      }
      return null;
    });
  };
  return <div className='sideBar'>{renderSideCard()}</div>;
};

export default SideBar;
