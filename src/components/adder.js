import React, { Component } from "react";

const DEFAULT_STATE = {
  da: "mon",  s: "",  t: "",
  a: 8,  b: 0,  c: 8,  d: 30,
  color: "#ff55ff"
};

// This class use to make part of input to add subject to table
class Adder extends Component {
  constructor() {
    super();
    // state keep temporary data
    this.state = DEFAULT_STATE;
    // encoder change time to index
    this.encoder = {
      "8 0": 0,
      "8 30": 1,
      "9 0": 2,
      "9 30": 3,
      "10 0": 4,
      "10 30": 5,
      "11 0": 6,
      "11 30": 7,
      "12 0": 8,
      "12 30": 9,
      "13 0": 10,
      "13 30": 11,
      "14 0": 12,
      "14 30": 13,
      "15 0": 14,
      "15 30": 15,
      "16 0": 16,
      "16 30": 17,
      "17 0": 18,
      "17 30": 19,
      "18 0": 20,
      "18 30": 21,
      "19 0": 22,
      "19 30": 23,
      "20 0": 24,
      "20 30": 25,
      "21 0": 26,
      "21 30": 26
    };
    // color encoder change number to hex code of color
    this.color_encoder = {
      0: "0",
      1: "1",
      2: "2",
      3: "3",
      4: "4",
      5: "5",
      6: "6",
      7: "7",
      8: "8",
      9: "9",
      10: "a",
      11: "b",
      12: "c",
      13: "d",
      14: "e",
      15: "f",
      16: "f"
    };
  }

  // random color for each subject
  randomColor = () => {
    let out = "#";
    for (let i = 0; i < 6; i++) {
      out += this.color_encoder[Math.floor(Math.random() * 17)];
    }
    console.log(out);
    return out;
  };

  // function wrap randomColor
  changeColor = () => {
    this.setState({ color: this.randomColor() });
  };

  add = () => {
    if (this.state.s == "") {
      alert("put some subject");
      return;
    }
    var start = this.encoder[this.state.a + " " + this.state.b];
    var end = this.encoder[this.state.c + " " + this.state.d];
    var check = this.props.changeTable(
      this.state.da,
      parseInt(this.props.id),
      parseInt(start),
      parseInt(end)
    );
    if (check > 0) {
      this.props.addDetail(
        this.state.da,
        this.state.s,
        this.state.t,
        this.props.id,
        this.state.color
      );
      this.props.incrementId();
    } else {
      alert("conflict");
    }
  }

  render() {
    return (
      <div style={{ margin: "20px", marginTop: "100px" }}>
        <h1>
          <b>Fill the time table information</b>
        </h1>
        <div className="adder">
          <h5>
            Select Date:{"  "}
            <select
              name="day"
              onChange={e => {
                this.setState({ da: e.target.value });
              }}
              value={this.state.da}
              style={{ maxWidth: "100%" }}
            >
              <option value="mon">Mon</option>
              <option value="tue">Tue</option>
              <option value="wed">Wed</option>
              <option value="thu">Thu</option>
              <option value="fri">Fri</option>
              <option value="sat">Sat</option>
              <option value="sun">Sun</option>
            </select>
          </h5>

          <h5>
            Subject:{"  "}
            <input
              style={{ maxWidth: "100%" }}
              id="sub"
              type="text"
              onChange={e => {
                console.log(e.target.value);
                this.setState({ s: e.target.value });
              }}
              value={this.state.s}
            />
          </h5>

          <h5>
            Detail:{"  "}
            <input
              style={{ maxWidth: "100%" }}
              id="det"
              type="text"
              onChange={e => {
                this.setState({ t: e.target.value });
              }}
              value={this.state.t}
            />
          </h5>

          <h5>
            Time:{"  "}
            <input
              id="a"
              type="number"
              min="8"
              max="20"
              step="1"
              value={this.state.a}
              onChange={e => {
                this.setState({ a: e.target.value });
              }}
            />{" "}
            <input
              id="b"
              type="number"
              min="0"
              max="30"
              step="30"
              value={this.state.b}
              onChange={e => {
                this.setState({ b: e.target.value });
              }}
            />{" "}
            to{" "}
            <input
              id="c"
              type="number"
              min="8"
              max="21"
              step="1"
              value={this.state.c}
              onChange={e => {
                this.setState({ c: e.target.value });
              }}
            />{" "}
            <input
              id="d"
              type="number"
              min="0"
              max="30"
              step="30"
              value={this.state.d}
              onChange={e => {
                this.setState({ d: e.target.value });
              }}
            />
          </h5>
          <div className="adder-button">
            <button
              className="btn btn-outline-primary"
              onClick={this.add}
            >
              Add
            </button>
            {"          "}
            <button
              className="btn btn-outline-success"
              onClick={this.changeColor}
            >
              ChangeColor
            </button>
            {"         "}
            <button
              className="btn btn-outline-dark"
              onClick={this.setState(DEFAULT_STATE)}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Adder;
