import React, { Component } from "react";

// Show detail part
class ShowDetail extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div style={{ margin: "20px" }}>
        <h1 style={{ margin: "20px" }}>
          <b>Detail</b>
        </h1>
        {this.props.detail && (
          <span>
            {Object.keys(this.props.detail).map((cur, i) => {
              return (
                <div
                  style={{
                    margin: "20px",
                    padding: "10px",
                    width: "18rem",
                    display: "inline-block"
                  }}
                  className="card"
                >
                  <div
                    className="card-header"
                    style={{
                      backgroundColor: `${this.props.detail[cur].color}`
                    }}
                  >
                    <b>subject : {this.props.detail[cur].subject}</b>
                  </div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      day: {this.props.detail[cur].day}
                    </li>
                    <li className="list-group-item">
                      detail: {this.props.detail[cur].sub_detail}
                    </li>
                    <li className="list-group-item">
                      <button
                        className="btn btn-outline-danger"
                        onClick={() =>
                          this.props.delDetail(
                            this.props.detail[cur].day,
                            this.props.detail[cur].id
                          )
                        }
                      >
                        Delete
                      </button>
                    </li>
                  </ul>
                </div>
              );
            })}
          </span>
        )}
      </div>
    );
  }
}

export default ShowDetail;
