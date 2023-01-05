import React from "react";
import Style from "./Button.module.css";

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      label: props.label ? props.label : "",
    };
  }

  render() {
    const { label } = this.state;

    return (
      <div className={Style.buttonItem}>
        <button className={Style.button} onClick={this.props.click}>
          {label}
        </button>
      </div>
    );
  }
}

export default Button;
