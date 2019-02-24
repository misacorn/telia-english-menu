import React, { Component } from "react";

import "components/Dropdowns/Search/Search.css";

class Search extends Component {
  state = {
    inputTxt: "",
    isClose: false
  };

  inputChange = e =>
    this.setState({ inputTxt: e.target.value, isClose: false });

  closeSearch = e => {
    e.preventDefault();
    this.setState({ inputTxt: "", isClose: true });
  };

  render() {
    const { isClose, inputTxt } = this.state;
    const click_color = isClose && "click_color";
    return (
      <div className="search-input">
        <div>
          <a href="Etsi">
            <i className="fas fa-search" style={{ width: "53px" }} />
          </a>
          <input
            type="text"
            placeholder="Etsi..."
            value={inputTxt}
            onChange={this.inputChange}
          />
        </div>
        <div className="close-icon">
          <div className={click_color}>
            <i className="fas fa-times" onClick={this.closeSearch} />
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
