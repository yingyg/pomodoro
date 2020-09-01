import React, { Component } from "react";

class Session extends Component {
  render() {
    return (
      <div className="bottom-right">
        <h3 style={{ textAlign: "center" }} className="session-title">
          Session Length
        </h3>

        <i
          onClick={this.props.plus.bind(this)}
          className="fas fa-plus plus"
        ></i>
        <span className="length">{this.props.sessionLength}</span>
        <i
          onClick={this.props.minus.bind(this)}
          className="fas fa-minus minus"
        ></i>
      </div>
    );
  }
}

export default Session;
