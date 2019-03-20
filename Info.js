import React from 'react';
import { Text, View } from 'react-native';
import style from './style'
import { TextInput } from 'react-native-gesture-handler';
import { connect } from 'react-redux';

class InfoScreen extends React.Component {
  state = {
    clicked: false,
  }
  test = ''
  render() {
    const {goBack} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.h1}>INFO</Text>
        <Text>Type your name</Text>
        <TextInput 
          style={styles.input}
          onChangeText={(text) => this.text = text}
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

export default connect(undefined)(InfoScreen)