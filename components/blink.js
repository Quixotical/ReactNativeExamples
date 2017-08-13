import React, {Component} from 'react';
import {Text} from 'react-native';

export default class Blink extends Component {
  constructor () {
    super();
    this.state = {showText: true};


    //Toggle state every second
    setInterval(() => {
      this.setState(previousState => {
        return {showText: !previousState.showText}
      });
    }, 1000);
  }

  render () {
    let display = this.state.showText ? this.props.text : ' ';
    return (
      <Text>{display}</Text>
    )
  }
}
