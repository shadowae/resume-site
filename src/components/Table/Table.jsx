import React, { PureComponent } from 'react';
import { Table as bootstrapTable } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { MovieObject } from '../../model';

class Table extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  getTTT = () => {
    const {
      movieData,
    } = this.props;
    return movieData.forEach((movie, index) => (
      <tr>
        <td>{index}</td>
        <td>movie.id</td>
        <td>movie.title</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
      </tr>
    ));
  }

  render() {
    return (
      <div>
        <bootstrapTable responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Table heading</th>
              <th>Table heading</th>
              <th>Table heading</th>
              <th>Table heading</th>
              <th>Table heading</th>
              <th>Table heading</th>
            </tr>
          </thead>
          <tbody>
            { this.getTTT() }
          </tbody>
        </bootstrapTable>
      </div>
    );
  }
}

Table.propTypes = {
  movieData: PropTypes.arrayOf(MovieObject).isRequired,
};

export default Table;
