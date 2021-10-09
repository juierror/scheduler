import React, { Component } from "react";
import Block from "./block.js";

// table part contain Block
class TimeTable extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div style={{ margin: "20px" }}>
        <h1 style={{ margin: "20px" }}>
          <b>TimeTable</b>
        </h1>
        <Block
          table={this.props.table}
          getDetail={this.props.getDetail}
          delDetail={this.props.delDetail}
        />
      </div>
    );
  }
}

export default TimeTable;
