import React from 'react';
import { Text, TouchableHighlight, View } from 'react-native';

class EventForm extends React.Component {
  handleAddPress = () => {
    //Navigation logic
  }

  render () {
    return (
      <View>
        <TouchableHighlight onPress={this.handleAddPress}>
          <Text>Add</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default EventForm;
