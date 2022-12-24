import React from "react";
import Style from "./InputDate.module.css";

class InputDate extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            date: props.today
        };

        this.onChangeDate = this.onChangeDate.bind(this);
    }

    onChangeDate(event) {
        this.setState({date: event.target.value});
        this.props.change(event.target.value);
    }

    render() {
        return (
            <div className={Style.inputItem}>
                <input className={Style.inputDate} type="date" value={this.state.date} onChange={this.onChangeDate}></input>
            </div>
        );
    }
}

export default InputDate;