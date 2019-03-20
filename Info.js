import React from 'react';
import { Text, View } from 'react-native';
import style from './style'
import { TextInput } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
function mapStateProps(state) {
  return {
      text: state.text
  }
}
class InfoScreen extends React.Component {
  // state = {
  //   clicked: false,
  // }
  test = ''
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.h1}>INFO</Text>
        <Text>{ this.props.text ? 'Change your name' : 'Type your name'}</Text>
        <TextInput 
          style={styles.input}
          onChangeText={(text) => this.text = text}
          value={this.props.text}
        ></TextInput>

        <Text
          style={styles.text}
          onPress={() => this.props.dispatch({ type: 'TEXT', payload: this.text }, this.props.navigation.navigate('Home'))}
        >
          Validate
        </Text>
        {/* <Text style={styles.text} onPress={() => goBack()}>Go Back</Text> */}

        {/* <Text style={styles.text} onPress={() => { this.setState({ clicked: !this.state.clicked })}}>
          {this.state.clicked ? 'Cliqué' : 'Pas cliqué'}
        </Text> */}

      </View>
    );
  }
}

export default connect(mapStateProps)(InfoScreen)