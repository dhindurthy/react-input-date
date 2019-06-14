import React from "react";
import "./styles.scss";

class Date extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // value: null
    };
    // this.onChange = this.onChange.bind(this);
  }
  // onChange(e){
  //   console.log(e.target.value)
  //   this.setState(state => ({
  //     value: e.target.value
  //   }));
  // }
  render() {
    return (
      <input
        type="date"
        name="bday"
        onChange={this.props.onChange}
        value={this.props.value}
      />
    );
  }
}

export default Date;
