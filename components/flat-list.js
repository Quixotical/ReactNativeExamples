import React, {Component} from 'react';
import { FlatList, StyleSheet, Text, View} from 'react-native';

export default class FlatListExample extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={[
            {key: 'test 1'},
            {key: 'test 2'},
            {key: 'test 3'},
            {key: 'test 4'},
            {key: 'test 5'},
            {key: 'test 6'},
            {key: 'test 7'},
            {key: 'test 8'},
            {key: 'test 9'},
            {key: 'test 10'},
            {key: 'test 11'},
            {key: 'test 12'},
            {key: 'test 13'},
            {key: 'test 21'},
            {key: 'test 22'},
            {key: 'test 23'},
            {key: 'test 24'},
            {key: 'test 25'},
            {key: 'test 26'},
            {key: 'test 27'},
            {key: 'test 28'},
            {key: 'test 29'},
            {key: 'test 310'},
            {key: 'test 311'},
            {key: 'test 312'},
            {key: 'test 313'}
          ]}
          renderItem={
            ({item}) => <Text style={styles.item}>{item.key}</Text>
          }/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44
  }
});
