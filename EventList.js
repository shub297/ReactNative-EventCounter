import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import EventCard from './EventCard';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#000',
  }
});

class EventList extends React.Component {
  state = {
    events: []
  }

  componentDidMount() {
      setInterval(() => {
        this.setState({
          events: this.state.events.map(evt => ({
            ...evt,
            timer: Date.now(),
          })),
        });
      }, 1000);

      const events = require('./db.json').events.map(e => ({
        ...e,
        date: new Date(e.date), //converting string to date format using map function
      }));
      this.setState({events});
  }

  render () {
    return (
      <View style= {styles.container}>
        <FlatList
          data= {this.state.events}
          renderItem = {({item}) => <EventCard event={item} />}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
}

export default EventList;
