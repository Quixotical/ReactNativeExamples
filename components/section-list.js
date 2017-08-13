import React, {Component} from 'react';
import {SectionList, View, StyleSheet, Text} from 'react-native';

export default class SectionListExample extends Component {
    render() {
      return (
        <View style={styles.container}>
          <SectionList
            sections={[
              {title: 'D', data: ['Dark Souls', 'Digimon']},
              {title: 'O', data: ['Onimusha Warlords']},
              {title: 'M', data: ['Monster Ranger','Monster Rancher 2']}
            ]}
            renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
            renderSectionHeader={
              ({section}) => <Text style={styles.header}>{section.title}</Text>}
            />
        </View>
      )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
  header: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247, 247, 247, 0.1)'
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44
  },
});
