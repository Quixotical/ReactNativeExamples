import React, { Component } from 'react';
import { AppRegistry, Text, View, Button, Alert, ScrollView } from 'react-native';
import Banana from './components/banana';
import SayStuff from './components/greeting';
import FlexStyle from './components/flex';
import PizzaTranslator from './components/text-input';
import ButtonExamples from './components/button-examples';
import ComplexButtons from './components/complex-buttons';
import FlatListExample from './components/flat-list';
import SectionListExample from './components/section-list';
import HttpRequestFetch from './components/http-requests';

export default class HelloWorldApp extends Component {
  _buttonClick () {
    Alert.alert('GOOD');
  }

  render() {
    return (
      <ScrollView>
        <HttpRequestFetch></HttpRequestFetch>

        <SectionListExample></SectionListExample>
        <FlatListExample></FlatListExample>
        <View style={{flex: 1}}>
          <Text>Hello world!</Text>
          <Banana></Banana>
          <SayStuff></SayStuff>
          <PizzaTranslator></PizzaTranslator>
          <ButtonExamples></ButtonExamples>
          <ComplexButtons></ComplexButtons>
          <Button
            onPress={() => {this._buttonClick()}}
            title='I want you to press me'/>
          <FlexStyle/>
        </View>
      </ScrollView>
    );
  }
}

// skip this line if using Create React Native App
// AppRegistry.registerComponent('AwesomeProject', () => HelloWorldApp);
