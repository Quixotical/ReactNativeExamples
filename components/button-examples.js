import React, {Component} from 'react';
import { View, Button, StyleSheet, Alert} from 'react-native';

export default class ButtonExamples extends Component {
  _onPressButton () {
    Alert.alert('You shouldn\'t have');
  }
  
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button
            onPress={() => {this._onPressButton()}}
            title='CLICK ME!'/>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  buttonContainer: {
    margin: 20
  }
})
