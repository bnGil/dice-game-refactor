import React, { Component } from "react";

class RestartButton extends Component {
  render() {
    return (
      <button onClick={this.props.restart}>
        <i className="fa-solid fa-arrow-rotate-left fa-2x"></i> RESETART
      </button>
    );
  }
}

export default RestartButton;
