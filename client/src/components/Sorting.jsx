import React, {Component} from 'react';

class Sorting extends React.Component {


  render() { 

    return (
      <div className="reviewToolbar">
        <div className="sort_by">Sort by</div>

        <div className="dropdown">
          <div className="dd_box">
            <select onChange={(e) => this.props.handleChange(e)} className="select">
              <option className="far fa-circle" name="Newest">Newest</option>
              <option name="Highest Rating">Highest Rating</option>
              <option name="Lowest Rating">Lowest Rating</option>
            </select>
          </div>
        </div>
        <div className="filter">Filters</div>
        <div className="keys">
          <span className="key">
            <label className="key_unfiltered">
              <input type="checkbox" className="square"/>
              <span className="rev_1">Good for groups</span>
            </label>
          </span>

          <span className="key">
            <label className="key_unfiltered">
              <input type="checkbox" className="square"/>
              <span className="rev_1">Calamari</span>
            </label>
          </span>

          <span className="key">
            <label className="key_unfiltered">
              <input type="checkbox" className="square"/>
              <span className="rev_1">Duck Entree</span>
            </label>
          </span>

          <span className="key">
            <label className="key_unfiltered">
              <input type="checkbox" className="square"/>
              <span className="rev_1">Dumplings</span>
            </label>
          </span>
        </div>
      </div>
    )
  }
};
export default Sorting;