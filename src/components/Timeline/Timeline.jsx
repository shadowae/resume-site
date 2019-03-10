import React from 'react';
import { Work } from '@material-ui/icons';
import { isEmpty } from 'lodash';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './Timeline.css';

// model
import models from '../../model';
/* eslint-disable*/

const Timeline = props => (
  <div className="timeline-container">
    <VerticalTimeline>
      {props.vtlElements.map((project, i) => (
        <VerticalTimelineElement
          date={project.date}
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<Work />}
          iconOnClick={() => {
            console.log('asdasdasd');
          }}
        >
          <div className="vertical-timeline-element--work">
            <h3>{project.title}</h3>
            <h4>{project.place}</h4>
            <p>{project.description}</p>
            {!isEmpty(project.link) && (
              <a href={project.link} target="_blank">
                Click here to a project
              </a>
            )}
          </div>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  </div>
);

Timeline.propTypes = {
  vtlElements: models.VerticalTimelineObject.isRequired,
};

export default Timeline;
