import React, { Component } from "react";

// Block class is table form
class Block extends Component {
  constructor(props) {
    super(props);
    this.defaultStyle = {
      width: "40px",
      height: "30px",
      backgroundColor: "white",
      border: "0px"
    };
    this.regisStyle = {
      width: "40px",
      height: "30px",
      backgroundColor: "tomato",
      border: "0px"
    };
    this.time = [
      "8.00",
      "8.30",
      "9.00",
      "9.30",
      "10.00",
      "10.30",
      "11.00",
      "11.30",
      "12.00",
      "12.30",
      "13.00",
      "13.30",
      "14.00",
      "14.30",
      "15.00",
      "15.30",
      "16.00",
      "16.30",
      "17.00",
      "17.30",
      "18.00",
      "18.30",
      "19.00",
      "19.30",
      "20.00",
      "20.30"
    ];
    this.day = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
  }
  render() {
    return (
      <table style={{ width: "100%" }} className="table">
        <thead class="thead-dark">
          <tr>
            <th>time</th>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thu</th>
            <th>Fri</th>
            <th>Sat</th>
            <th>Sun</th>
          </tr>
        </thead>
        {this.time.map((val, idx) => {
          return (
            <tr>
              <td>{val}</td>
              {this.day.map((val_day, idx_day) => {
                let col = this.props.getDetail(
                  this.props.table[val_day][idx]
                )[1];
                return (
                  <td>
                    <button
                      style={
                        this.props.table[val_day][idx] == -1
                          ? this.defaultStyle
                          : {
                              width: "40px",
                              height: "30px",
                              backgroundColor: col,
                              border: "0px"
                            }
                      }
                      title={
                        this.props.getDetail(this.props.table[val_day][idx])[0]
                      }
                      onClick={() => {
                        this.props.delDetail(
                          val_day,
                          this.props.table[val_day][idx]
                        );
                      }}
                    />
                  </td>
                );
              })}
            </tr>
          );
        })}
      </table>
    );
  }
}

export default Block;
