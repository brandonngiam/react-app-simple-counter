import React from "react";
import Display from "./Display";
import Button from "./Button";
import "../styles/Counter.css";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: props.initial };
  }

  incrementCount() {
    this.setState(state => ({
      count: state.count + 1
    }));
  }

  decrementCount = () => {
    this.setState(state => ({
      count: state.count - 1
    }));
  };

  render() {
    return (
      <div className="container">
        <Display count={this.state.count} />
        <Button text="+" functionToCall={this.incrementCount.bind(this)} />
        <Button text="-" functionToCall={this.decrementCount.bind(this)} />
      </div>
    );
  }
}

export default Counter;
