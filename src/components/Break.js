import React, { Component } from "react";

class Break extends Component {
  render() {
    return (
      <div className="top-left">
        <h3 className="break-title" style={{ textAlign: "center" }}>
          Break Length
        </h3>
        <div className="btn-box">
          <i onClick={this.props.plus} className="fas fa-plus plus"></i>
          <span className="length">{this.props.breakLength}</span>
          <i onClick={this.props.minus} className="fas fa-minus minus"></i>
        </div>
      </div>
    );
  }
}

export default Break;
