import React from 'react';
// eslint-disable-next-line
const SectionHeader = props => {
  // eslint-disable-next-line react/prop-types
  const { title, body } = props;
  return (
    <>
      <h2>{title}</h2>
      <p>{body}</p>
    </>
  );
};

export default SectionHeader;
