import React, { Component } from "react";

const DEFAULT_STATE = {
  day: "mon", subj: "", detail: "",
  h1: 8, m1: 0, h2: 8, m2: 30,
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
    };
  }

  // random color for each subject
  randomColor = () => {
    let out = "#"+Math.floor(Math.random()*16777215).toString(16);
    console.log(out);
    return out;
  };

  // function wrap randomColor
  changeColor = () => {
    this.setState({ color: this.randomColor() });
  };

  addEntry = () => {
    if (this.state.subj == "") {
      alert("subject field is required");
      return;
    }

    let start = this.encoder[this.state.h1 + " " + this.state.m1];
    let end = this.encoder[this.state.h2 + " " + this.state.m2];

    if (start >= end) {
      alert("start time must be earlier than end time");
      return;
    }

    if (this.props.changeTable(this.state.day, start, end)) {
      this.props.addDetail(
        this.state.day,
        this.state.subj,
        this.state.detail,
        this.state.color
      );
      this.props.incrementId();
    } else {
      alert("this time slot is already occupied");
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
                this.setState({ day: e.target.value });
              }}
              value={this.state.day}
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
                this.setState({ subj: e.target.value });
              }}
              value={this.state.subj}
            />
          </h5>

          <h5>
            Detail:{"  "}
            <input
              style={{ maxWidth: "100%" }}
              id="det"
              type="text"
              onChange={e => {
                this.setState({ detail: e.target.value });
              }}
              value={this.state.detail}
            />
          </h5>

          <h5>
            Time:{"  "}
            <input
              id="h1"
              type="number"
              min="8"
              max="20"
              step="1"
              value={this.state.h1}
              onChange={e => {
                this.setState({ h1: e.target.value });
              }}
            />{" "}
            <input
              id="m1"
              type="number"
              min="0"
              max="30"
              step="30"
              value={this.state.m1}
              onChange={e => {
                this.setState({ m1: e.target.value });
              }}
            />{" "}
            to{" "}
            <input
              id="h2"
              type="number"
              min="8"
              max="21"
              step="1"
              value={this.state.h2}
              onChange={e => {
                this.setState({ h2: e.target.value });
              }}
            />{" "}
            <input
              id="m2"
              type="number"
              min="0"
              max="30"
              step="30"
              value={this.state.m2}
              onChange={e => {
                this.setState({ m2: e.target.value });
              }}
            />
          </h5>
          <div className="adder-button">
            <button
              className="btn btn-outline-primary"
              onClick={this.addEntry}
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
