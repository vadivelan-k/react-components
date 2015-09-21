import React from 'react';

export default class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentTime: props.time};
  }

  updateTime() {
    console.log('update time: ');
    this.setState({ currentTime: new Date().toString() });
  }

  render() {
    console.log("render timer: ", this.state.currentTime);
    setTimeout(this.updateTime.bind(this), 1000);

    return (
      <div>
        <div>
          Current Time:
          <h2>
            { this.state.currentTime }
          </h2>
        </div>
      </div>
    )
  }
}