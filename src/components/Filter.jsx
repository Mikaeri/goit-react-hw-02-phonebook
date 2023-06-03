import React, { Component } from 'react';

export class Filter extends Component {
  handleChange = e => {
    this.props.onFilterChange(e.target.value);
  };

  render() {
    const { filter } = this.props;

    return (
      <input
        type="text"
        placeholder="Find name"
        value={filter}
        onChange={this.handleChange}
      />
    );
  }
}
