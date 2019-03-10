import PropTypes from 'prop-types';

const VerticalTimelineObject = PropTypes.arrayOf(
  PropTypes.shape({
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    place: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  })
);

export default VerticalTimelineObject;
