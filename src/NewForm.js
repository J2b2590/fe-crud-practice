import React, { Component } from "react";

class NewForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };
  }
  render() {
    return (
      <div>
        <h1>New Form component</h1>
        <form>
          <input value={this.state.name} />
        </form>
      </div>
    );
  }
}

export default NewForm;
