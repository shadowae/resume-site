import React from 'react';
import SectionHeader from '../SectionHeader';
import GridSection from './GridSection';
/* eslint-disable*/
const renderGridSections = mockData => {
  const { grids } = mockData;
  return grids.map(data => (
    <GridSection title={data.title} body={data.body} icon={data.icon} />
  ));
};

const GridDrisplay = props => {
  const { data: mockData } = props;

  return (
    <div>
      <section className="wrapper style1 align-center">
        <div className="inner">
          <SectionHeader
            title={mockData.sectionHeader.title}
            body={mockData.sectionHeader.body}
          />

          <div className="items style1 medium onscroll-fade-in">
            {renderGridSections(mockData)}
          </div>
        </div>
      </section>
    </div>
  );
};

export default GridDrisplay;
