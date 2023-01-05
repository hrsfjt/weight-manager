import moment from "moment";
import React from "react";
import Button from "../components/Button";
import InputDate from "../components/InputDate";
import InputNumber from "../components/InputNumber";
import WeightList from "../components/WeightList";
import Style from "./AppContainer.module.css";
import { db } from "../db";

class AppContainer extends React.Component {
  constructor(props) {
    super(props);

    const today = moment().format("yyyy-MM-DD");
    this.state = {
      weight: 0,
      date: today,
      records: [],
    };

    this.onChangeWeight = this.onChangeWeight.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.register = this.register.bind(this);
    this.reset = this.reset.bind(this);
  }

  async componentDidMount() {
    const weight = await db.weight.toArray();
    this.setState({ records: weight });
  }

  onChangeWeight(weight) {
    this.setState({ weight: weight });
  }

  onChangeDate(date) {
    this.setState({ date: date });
  }

  async register() {
    await db.weight.add({
      weight: this.state.weight,
      date: this.state.date,
    });
    const records = await db.weight.toArray();
    this.setState({ records: records });
  }

  async reset() {
    await db.weight.clear();
    const records = await db.weight.toArray();
    this.setState({ records: records });
  }

  render() {
    const { date, records } = this.state;
    const weightLabel = "kg";
    const registerButtonLabel = "Register";
    const resetButtonLabel = "Reset";

    return (
      <main>
        <div className={Style.inputItem}>
          <InputDate today={date} change={this.onChangeDate}></InputDate>
          <InputNumber
            label={weightLabel}
            change={this.onChangeWeight}
          ></InputNumber>
        </div>
        <div className={Style.buttons}>
          <Button label={registerButtonLabel} click={this.register}></Button>
          <Button label={resetButtonLabel} click={this.reset}></Button>
        </div>
        <div>
          <h2>Records</h2>
          <WeightList weightList={records}></WeightList>
        </div>
      </main>
    );
  }
}

export default AppContainer;
