import React, { Component } from 'react';
import { Form } from 'react-bootstrap';

class Filter extends Component {
  render() {
    const { search, filter, handleSearch, handleFilter } = this.props;

    return (
      <div className="d-flex justify-content-between my-3">
        <Form.Control
          type="text"
          placeholder="Search by name"
          value={search}
          onChange={handleSearch}
        />
        <Form.Control as="select" value={filter} onChange={handleFilter}>
          <option value="">All</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </Form.Control>
      </div>
    );
  }
}

export default Filter;
