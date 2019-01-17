import React from 'react';
import {View, Text, TextInput} from 'react-native';

export default class HelloWorld extends React.Component {
  
  render() {
    return (
      <View>
          <Text>{this.props.data}</Text>
          <Text>Password:</Text>
          <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => this.props.onTextChange(text)}
        />
      </View>
    )
  }
}