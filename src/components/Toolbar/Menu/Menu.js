import React, { Component } from "react";
import { Motion, spring, presets } from "react-motion";

import "components/Toolbar/Menu/Menu.css";
import Dropdowns from "components/Dropdowns/Dropdowns/";

export default class HamburgerButton extends Component {
  state = {
    menuShowing: false,
    toggle: false
  };

  showMenu = event => {
    event.preventDefault();
    event.stopPropagation();
    this.setState(prevState => ({ toggle: !prevState.toggle }));
    this.setState({ menuShowing: true }, () => {
      document.addEventListener("click", this.closeMenu);
    });
  };

  closeMenu = event => {
    if (!this.dropdownMenu.contains(event.target)) {
      this.setState({ menuShowing: false }, () => {
        document.removeEventListener("click", this.closeMenu);
      });
    }
  };

  render() {
    const { toggle, menuShowing } = this.state;
    const style = {
      overflow: "visible",
      cursor: "pointer",
      WebkitTapHighlightColor: "rgba(0,0,0,0)"
    };

    let btn_class = toggle ? "onFocused" : null;

    return (
      <div className="dropdown">
        <svg
          viewBox="0 0 100 100"
          height="1em"
          onClick={this.showMenu}
          style={style}
          className={btn_class}
        >
          <Motion
            style={{
              x: spring(this.state.toggle ? 1 : 0, presets.wobbly),
              y: spring(this.state.toggle ? 0 : 1, presets.wobbly)
            }}
          >
            {({ x, y }) => (
              <g
                id="navicon"
                fill="none"
                stroke="currentColor"
                strokeWidth="14"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line
                  transform={`translate(${x * 12}, ${x * -7}) rotate(${x *
                    45}, 7, 26)`}
                  x1="7"
                  y1="26"
                  x2="89"
                  y2="26"
                />
                <line
                  transform={`translate(${x * 12}, ${x * 7}) rotate(${x *
                    -45}, 7, 70)`}
                  x1="7"
                  y1="70"
                  x2="89"
                  y2="70"
                />
                <line
                  transform={`translate(${x * -96})`}
                  opacity={y}
                  x1="7"
                  y1="48"
                  x2="89"
                  y2="48"
                />
              </g>
            )}
          </Motion>
        </svg>
        <button
          type="button"
          className={btn_class}
          style={{
            fontSize: "24px",
            cursor: "pointer",
            padding: "25px 0",
            marginLeft: "38px",
            fontWeight: "700"
          }}
          onClick={this.showMenu}
        >
          Menu
        </button>
        {menuShowing && (
          <div
            className="dropdown-content"
            ref={element => {
              this.dropdownMenu = element;
            }}
          >
            <Dropdowns />
          </div>
        )}
      </div>
    );
  }
}
