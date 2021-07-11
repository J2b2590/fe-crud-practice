import React, { Component } from "react";

class NewForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      arrNames: [],
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSumbit = (e) => {
    e.preventDefault();
    let formData = { name: this.state.name };
    let dataArray = this.state.arrNames.concat(formData);
    this.setState({ arrNames: dataArray });
  };
  render() {
    return (
      <div>
        <h1>New Form component</h1>
        <form onSubmit={(e) => this.handleSumbit(e)}>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <button>enter</button>
        </form>
      </div>
    );
  }
}

export default NewForm;
