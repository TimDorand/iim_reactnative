import React from 'react';
import { AppRegistry, FlatList, StyleSheet, Text, View, TouchableWithoutFeedback, AsyncStorage} from 'react-native';

import style from '../assets/style'
import { connect } from 'react-redux';

function mapStateProps(state) {
    return {
        text: state.text
    }
}
class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.goToGame = this.goToGame.bind(this);
    }
    static navigationOptions = {
        title: 'Hello Games',
    };
    state = {
        games: [],
        lastGame: null,
    }
    fetchGames() {
        return fetch('http://androidlessonsapi.herokuapp.com/api/game/list')
    }
    async retrieveData() {
        try {
            const value = await AsyncStorage.getItem('lastGame');
            console.log('get data')
            if (value !== null) {
                // We have data!!
                console.log(value)
                this.setState({ lastGame: value })
            }
        } catch (error) {
            // Error retrieving data
        }
    };

    async componentWillMount() {
        try {
            const games = await this.fetchGames()
            const lastGame = await this.retrieveData()
            console.log(lastGame)
            this.setState({ games: JSON.parse(games._bodyInit) })
        } catch (e) {
            this.setState({ games: [] })
        }
    }
    goToGame(item) {
        this.props.dispatch({
            type: 'GAMEID',
            payload: item.id
        })
        this.props.dispatch({
            type: 'GAME',
            payload: item
        })
        this.props.navigation.navigate('Game')
    }
    render() {
        return (
            <View style={styles.container}>
                {!this.state.games[0] ?
                    <Text style={styles.loading}>Loading...</Text>
                    :
                    <FlatList
                        style={styles.list}
                        data={this.state.games}
                        renderItem={({ item }) =>
                            <TouchableWithoutFeedback onPress={() => this.goToGame(item)}>
                                <Text style={styles.item}>{item.name}</Text>
                            </TouchableWithoutFeedback>
                        }
                        keyExtractor={(item, index) => index.toString()}
                    />

                }
                {this.state.lastGame ?
                    <Text style={styles.item}>{this.state.lastGame}</Text>
                    :
                    null
                }
            </View>
        );
    }
}

export default connect(mapStateProps)(HomeScreen)