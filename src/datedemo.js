import React from "react";
import "./styles.scss";
import Date from "./date.js";

class Datedemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "2019-08-08"
    };
    this.onChange = this.onChange.bind(this);
  }
  onChange(e) {
    this.setState({ value: e.target.value });
  }
  render() {
    return (
      <section>
        <Date
          onChange={this.onChange}
          value={this.state.value}
          label="Date"
          id="daty"
        />
        <h3>Date selected: {this.state.value}</h3>
      </section>
    );
  }
}

export default Datedemo;
