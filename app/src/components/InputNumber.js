import React from "react";
import Style from "./InputNumber.module.css";

class InputNumber extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      label: props.label ? props.label : "kk",
      value: 0,
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    this.setState({ value: event.target.value });
    this.props.change(event.target.value);
  }

  render() {
    const { label } = this.state;
    return (
      <div className={Style.inputItem}>
        <input
          className={Style.weightNumber}
          type="number"
          value={this.state.value}
          onChange={this.onChange}
        ></input>{" "}
        {label}
      </div>
    );
  }
}

export default InputNumber;
