import React, {Component} from 'react';
import { Text, View } from 'react-native';
import Blink from './blink';

class Greeting extends Component {
  render() {
    return (
      <Text>Hello {this.props.name}</Text>
    )
  }
}

export default class SayStuff extends Component {
  render () {
    return (
      <View>
        <Greeting name='Tom'></Greeting>
        <Greeting name='Dick'></Greeting>
        <Greeting name='Harry'></Greeting>
        <Blink text='BLINKING'></Blink>
      </View>
    )
  }
}
