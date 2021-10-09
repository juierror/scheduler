import React, { Component } from "react";
import firebase from "firebase";
import TimeTable from "./components/TimeTable.js";
import ShowDetail from "./components/ShowDetail.js";
import Adder from "./components/Adder.js";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    /*
     * edit this config to sync with firebase
     * copy from firebase project
     */
    this.config = {
      apiKey: "<API key>",
      authDomain: "<Auth Domain>",
      databaseURL: "<Database URL>",
      projectId: "<Project ID>",
      storageBucket: "<Bucket>",
      messagingSenderId: "<Sender ID>"
    };
    firebase.initializeApp(this.config);
    /*
     * table : contain schedule of each day , in each contain id of subject
     * detail : contain detail of each subject
     * id : use to generate new subject
     */
    this.state = {
      a: -72,
      table: {
        mon: [
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1
        ],
        tue: [
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1
        ],
        wed: [
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1
        ],
        thu: [
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1
        ],
        fri: [
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1
        ],
        sat: [
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1
        ],
        sun: [
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1
        ]
      },
      detail: {},
      id: 0
    };
  }

  componentDidMount() {
    // First, read data from database
    firebase
      .database()
      .ref("schedule/")
      .once("value")
      .then(snapshot => {
        // if we doesn't have detail in database, we will first add dummy data to database
        if (snapshot.val().detail == undefined) {
          let dummy = {
            "-3": {
              day: "mon",
              subject: "Example",
              sub_detail: "Don't delete this.",
              id: -3,
              color: "#ffaaaa"
            }
          };
          firebase
            .database()
            .ref()
            .update({ "schedule/detail": dummy });
        }
        // set data from database to state
        this.setState({
          table: snapshot.val().table,
          id: snapshot.val().id,
          detail: snapshot.val().detail
        });
      });
  }
  changeTable = (d, start, end) => {
    var tmpT = this.state.table;
    for (var i = start; i < end; i++) {
      if (tmpT[d][i] >= 0) {
        return false;
      }
      tmpT[d][i] = this.state.id;
    }

    this.setState({ table: tmpT });

    return true;
  };

  addDetail = (date, sub, det, col) => {
    var idx = this.state.id;
    var tmpList_detail = this.state.detail;
    tmpList_detail[idx] = {
      day: date,
      subject: sub,
      sub_detail: det,
      id: idx,
      color: col
    };
    this.setState({ detail: tmpList_detail });
  };

  delDetail = (day, id) => {
    var tmp_del1 = this.state.detail;
    var tmp_del2 = this.state.table;

    for (var k = 0; k < this.state.table[day].length; k++) {
      if (id == tmp_del2[day][k]) {
        tmp_del2[day][k] = -1;
      }
    }
    for (let a in tmp_del1) {
      if (id == a) {
        delete tmp_del1[a];
      }
    }
    this.setState({ detail: tmp_del1, table: tmp_del2 });
  };

  getDetail = id => {
    let out1 = "";
    let out2 = "";
    for (let a in this.state.detail) {
      if (id == a) {
        out1 = this.state.detail[a].subject;
        out2 = this.state.detail[a].color;
      }
    }
    return [out1, out2];
  };

  incrementId = () => {
    var tmp_id = this.state.id;
    tmp_id += 1;
    this.setState({ id: tmp_id });
  };

  render() {
    return (
      <div className="App">
        <nav
          class="navbar navbar-dark bg-dark"
          style={{ position: "fixed", width: "100%", top: "0" }}
        >
          <a href="#" class="badge badge-primary">
            S
          </a>
          <h3 style={{ color: "white", textAlign: "left" }}>Scheduler</h3>
        </nav>
        <Adder
          changeTable={this.changeTable}
          addDetail={this.addDetail}
          id={this.state.id}
          incrementId={this.incrementId}
        />
        <ShowDetail detail={this.state.detail} delDetail={this.delDetail} />
        <TimeTable
          table={this.state.table}
          detail={this.state.detail}
          getDetail={this.getDetail}
          delDetail={this.delDetail}
        />
        <button
          style={{ margin: "20px" }}
          className="btn btn-outline-primary"
          onClick={() => {
            var updates = {};
            updates["/schedule/detail"] = this.state.detail;
            updates["/schedule/id"] = this.state.id;
            updates["/schedule/table"] = this.state.table;
            firebase
              .database()
              .ref()
              .update(updates);
          }}
        >
          Save
        </button>
      </div>
    );
  }
}

export default App;
