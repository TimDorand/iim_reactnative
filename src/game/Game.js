import React from 'react';
import { Text, View } from 'react-native';
import style from '../assets/style'
import { TextInput } from 'react-native-gesture-handler';
import { connect } from 'react-redux';

function mapStateProps(state) {
  return {
    gameID: state.gameID
  }
}

class GameScreen extends React.Component {
  state = {
    game: {},
    error: null
  }
  fetchGame(id) {
    return fetch(`http://androidlessonsapi.herokuapp.com/api/game/details?game_id=${id}`)
  }
  async componentWillMount() {
    try {
      const game = await this.fetchGame(this.props.gameID)
      this.setState({ game: JSON.parse(game._bodyInit) }, () => console.log(this.state.game))
    } catch (error) {
      this.setState({ error })
    }
  }

  render() {
    return (
      <View style={styles.containerGame}>
        {this.state.game.name
          ?
          <View>
            <Text style={styles.h1}>{this.state.game ? this.state.game.name : ''}</Text>
            <Text style={styles.text}>Players: {this.state.game.players}</Text>
            <Text style={styles.text}>Type: {this.state.game.type}</Text>
            <Text style={styles.text}>Year: {this.state.game.year}</Text>
            <View style={styles.card}>
              <Text>{this.state.game.description_en}</Text>
            </View>
            <View style={styles.card}>
              <Text>Open Wikipedia</Text>
            </View>
          </View>
          :
          <View style={styles.containerLoading}> 
            <Text  style={styles.loading}>Loading...</Text>
          </View>
        }
        {this.state.error?
          <Text>{`No game found: ${this.state.error}`}</Text>
          :
          null
        }
      </View>
    );
  }
}

export default connect(mapStateProps)(GameScreen)