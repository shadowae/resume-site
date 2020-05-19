import React from 'react';

// eslint-disable-next-line
const GridSection = props => {
  // eslint-disable-next-line react/prop-types
  const { title, body, icon } = props;
  return (
    <section>
      <span className={`icon style2 major ${icon}`} />
      <h3>{title}</h3>
      <p>{body}</p>
    </section>
  );
};

export default GridSection;
