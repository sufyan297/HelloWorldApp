import React from 'react';
import { View, Text, TextInput, Button } from  'react-native';
import HelloWorld from './components/HelloWorld';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      text2: ''
    }
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontSize: 35}}>Login</Text>
        </View>
        <View style={{flex: 2, paddingLeft: 15, paddingRight: 15}}>
          <View style={{flexDirection: 'row'}}>
            <View style={{flex: 1, justifyContent: 'center',alignItems:  'center'}}>
              <Text>Username:</Text>
            </View>
            <View style={{flex: 3}}>
              <TextInput
              style={{height: 40, borderColor: 'gray', borderWidth: 1}}
              onChangeText={(text) => this.setState({text: text})}
              value={this.state.text}
            />
            </View>
          </View>

          <View style={{flexDirection: 'row', marginTop: 10}}>
            <View style={{flex: 1, justifyContent: 'center',alignItems:  'center'}}>
              <Text>Username:</Text>
            </View>
            <View style={{flex: 3}}>
              <TextInput
              style={{height: 40, borderColor: 'gray', borderWidth: 1}}
              onChangeText={(text) => this.setState({text: text})}
              value={this.state.text}
            />
            </View>
          </View>


          <View style={{flexDirection: 'row', marginTop: 10}}>
            <View style={{flex: 1, justifyContent: 'center',alignItems:  'center'}}>
              <Text>Username:</Text>
            </View>
            <View style={{flex: 3}}>
              <TextInput
              style={{height: 40, borderColor: 'gray', borderWidth: 1}}
              onChangeText={(text) => this.setState({text: text})}
              value={this.state.text}
            />
            </View>
          </View>

        <View style={{marginTop: 10}}>
           <Button  title={'Login'} />
        </View>

        </View>
      </View>
    )
  }
  // render() {
  //   return (
  //     <View style={{flex: 1}}>
  //       <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
  //         <Text style={{fontSize: 35}}>Login</Text>
  //       </View>
  //       <View style={{flex: 2, paddingLeft: 20, paddingRight: 20}}>
  //         <Text>Username:</Text>
  //         <TextInput
  //           style={{height: 40, borderColor: 'gray', borderWidth: 1}}
  //           onChangeText={(text) => this.setState({text: text})}
  //           value={this.state.text}
  //         />
  //         <HelloWorld data={this.state.text} onTextChange={(text) =>  this.setState({text2: text})} />
  //         <Text>{this.state.text2}</Text>
  //       <Button  title={'Login'} />
  //       </View>
  //       <View style={{flex: 1}}></View>
  //     </View>
  //   )
  // }
}