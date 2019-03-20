import React from 'react';
import { Text, View } from 'react-native';
import style from './style'
import { connect } from 'react-redux';

function mapStateProps(state){
    return{
        text: state.text
    }
}
class HomeScreen extends React.Component {
    state = {
        clicked: false,
        iteration: 0,
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.h1}>HOME</Text>
                <Text style={styles.h2} onPress={() =>
                    this.props.navigation.navigate('Info', { name: "lol" })}
                    >Info</Text>
                <Text>{this.props.text ? 'Name: '+ this.props.text : 'Please inform your name'}</Text>
            </View>
        );
    }
}

export default connect(mapStateProps)(HomeScreen)