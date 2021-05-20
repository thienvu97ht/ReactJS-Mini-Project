import React, { Component } from "react";
import { Prompt } from "react-router-dom";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: false,
    };
  }

  onClick = (isChecked) => {
    this.setState({ isChecked: isChecked });
  };

  render() {
    var { isChecked } = this.state;
    return (
      <div>
        Đây là trang liên hệ
        <br />
        <button
          onClick={() => {
            this.onClick(false);
          }}
          type="button"
          className="btn btn-info mt-5">
          Cho Phép
        </button>
        <br />
        <button
          onClick={() => {
            this.onClick(true);
          }}
          type="button"
          className="btn btn-danger mt-5">
          Không Cho Phép
        </button>
        <br />
        <Prompt
          when={isChecked}
          message={(location) =>
            `Bạn chắc chắn muốn đi đến ${location.pathname}`
          }
        />
      </div>
    );
  }
}

export default Contact;
