import React, { Component } from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";
import Control from "./components/Control";
import TaskList from "./components/TaskList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [], // id : unique, name, status
      isDisplayForm: false,
    };
  }

  componentDidMount() {
    if (localStorage && localStorage.getItem("tasks")) {
      var tasks = JSON.parse(localStorage.getItem("tasks"));
      this.setState({
        tasks: tasks,
      });
    }
  }

  generateData = () => {
    var tasks = [
      {
        id: this.generateID(),
        name: "Học lập trình ReactJS",
        status: true,
      },
      {
        id: this.generateID(),
        name: "Học lập trình Agular",
        status: false,
      },
      {
        id: this.generateID(),
        name: "Học lập trình Javascript",
        status: true,
      },
    ];

    this.setState({
      tasks: tasks,
    });

    localStorage.setItem("tasks", JSON.stringify(tasks));

    console.log(this.state.tasks);
  };

  s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }

  generateID() {
    return (
      this.s4() +
      this.s4() +
      "-" +
      this.s4() +
      "-" +
      this.s4() +
      "_" +
      this.s4() +
      "-" +
      this.s4() +
      this.s4() +
      this.s4()
    );
  }

  onToggleForm = () => {
    this.setState({
      isDisplayForm: !this.state.isDisplayForm
    })
  }

  onCloseForm = () => {
    this.setState({
      isDisplayForm: false
    })
  }

  render() {
    var { tasks, isDisplayForm } = this.state; // var tasks = this.state.tasks; (Destructuring)
    var elmTaskForm = isDisplayForm ? <TaskForm onCloseForm={this.onCloseForm}/> : "";
    return (
      <div className="container">
        <div className="text-center">
          <h1>Quản Lý Công Việc</h1>
          <hr />
        </div>
        <div className="row">
          <div
            className={
              isDisplayForm ? "col-xs-4 col-sm-4 col-md-4 col-lg-4" : ""
            }>
            {/* Form */}
            {elmTaskForm}
          </div>
          <div
            className={
              isDisplayForm
                ? "col-xs-8 col-sm-8 col-md-8 col-lg-8"
                : "col-xs-12 col-sm-12 col-md-12 col-lg-12"
            }>
            <button
              type="button"
              className="btn btn-primary"
              onClick={this.onToggleForm}>
              <span className="fa fa-plus mr-5"></span>Thêm Công Việc
            </button>
            <button
              type="button"
              className="btn btn-danger ml-5"
              onClick={this.generateData}>
              Generate Data
            </button>
            {/* Search -Sort */}
            <Control />
            {/* List */}
            <div className="row mt-15">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <TaskList tasks={tasks} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
