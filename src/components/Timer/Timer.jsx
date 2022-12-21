import React, { Component } from "react";
import Clock from "./Clock";
import Button from "./Button";
import "./timer.css";

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timerRunning: true,
      currentTime: this.getTime(),
      date: ""
    };
    this.startTimer = this.startTimer.bind(this);
    this.componentWillUnmount = this.componentWillUnmount.bind(this);
  }

  componentDidMount() {
    const today = new Date();
    this.setState({date:`${today.getDate()}/${today.getMonth()}/${today.getFullYear()}`});
    this.startTimer();
  }

  startTimer() {
    this.setState({ timerRunning: true });
    this.timer = setInterval(() => {
      this.setState({ currentTime: this.getTime() });
     
    }, "1000");
  }
  componentWillUnmount() {
    if (this.state.timerRunning === true) {
      clearInterval(this.timer);
      this.setState({ timerRunning: false });
    } else {
      this.startTimer();
    }
  }

  getTime() {
    const currentTime = new Date();
    const hour = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();

    return `
    ${hour}:${minutes}:${seconds}`;
  }

  render() {
    return (
      <div className="timer card">
        <Clock currentTime={`
         ${this.state.date}
         ${this.state.currentTime}`
         }/>
        <Button stopTime={this.componentWillUnmount} />
      </div>
    );
  }
}

export default Timer;
