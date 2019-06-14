import React from "react";
import "./styles.scss";

class Datedemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null
    };
    this.onChange = this.onChange.bind(this);
  }
  onChange(e){
    console.log(e.target.value)
    this.setState(state => ({
      value: e.target.value
    }));
  }
  render() {
    return (

    )

  }

}

export default Datedemo;