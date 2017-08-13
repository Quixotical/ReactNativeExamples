import React, {Component} from 'react';
import { Alert, Platform, StyleSheet, Text, TouchableHighlight,
  TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, View}
  from 'react-native';

export default class ComplexButtons extends Component {
  onPressButton () {
    Alert.alert('button pressed');
  }

  onLongPress () {
    Alert.alert('long pressed');
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={() => this.onPressButton()}
          underlayColor='white'>
            <View style={styles.button}>
              <Text style={styles.buttonText}>TouchableHighlight</Text>
            </View>
          </TouchableHighlight>
          <TouchableOpacity onPress={() => this.onPressButton()}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>TouchableOpacity</Text>
            </View>
          </TouchableOpacity>
          <TouchableNativeFeedback onPress={() => this.onPressButton()}
            background={Platform.OS === 'android' ?
          TouchableNativeFeedback.SelectableBackground() : ''}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>TouchableNativeFeedback</Text>
            </View>
          </TouchableNativeFeedback>
          <TouchableWithoutFeedback onPress={() => this.onPressButton()}
            onLongPress={()=>this.onLongPress()} underlayColor='white'>
              <View style={styles.button}>
                <Text style={styles.buttonText}>TouchableWithoutFeedback & LngClick</Text>
              </View>
            </TouchableWithoutFeedback>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    alignItems: 'center'
  },
  button: {
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  buttonText: {
    padding: 20,
    color: 'white'
  }
})
