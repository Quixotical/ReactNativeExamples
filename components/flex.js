import React, { Component } from 'react';
import {View} from 'react-native';

export default class FlexStyle extends Component {
  render() {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start'
      }}>

      {/*<View style={{flex: 1, flexDirection: 'row'}}>
         <View style={{flex: 1, backgroundColor: 'powderblue'}}/>
        <View style={{flex: 2, backgroundColor: 'skyblue'}}/>
        <View style={{flex: 3, backgroundColor: 'steelblue'}}/> */}
        <View style={{height:50, width: 50, backgroundColor: 'powderblue'}}/>
        <View style={{height: 50, width: 50, backgroundColor: 'skyblue'}}/>
        <View style={{height: 50, width: 50, backgroundColor: 'steelblue'}}/>
      </View>
    )
  }
}
