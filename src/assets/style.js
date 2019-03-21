import { StyleSheet } from 'react-native';
export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#f1f2f6'
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  h1: {
    fontSize: 70,
    marginTop: 5,
    marginBottom: 5,
  },
  h2: {
    fontSize: 30,
  },
  text: {
    fontSize: 14,
    color: '#151c27'
  },
  input: {
    height: 30,
    width: 300,
    borderColor: '#ddd',
    borderWidth: 1,
    margin: 10,
  },
  list: {
    width: '100%',
  },
  item: {
    // padding: 10,
    // fontSize: 14,
    // height: 35,
    // borderColor: '#ddd',
    // borderWidth: 1,
    // marginBottom:-1,
    fontWeight: "500",
    shadowOffset: { width: 0, height: 10, },
    shadowColor: '#a9b1c7',
    shadowOpacity: 0.7,
    borderColor: '#fff',
    backgroundColor: '#fff',
    borderWidth: 1,
    overflow: 'scroll',
    margin: 10,
    marginBottom: 5,
    marginTop: 5,
    borderRadius: 4,
    paddingLeft: 10,
    paddingTop: 20,
    paddingBottom: 20,
  },
  containerLoading: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  containerGame: {
    width: '100%',
    height: '100%',
    padding: 10,
    alignItems: 'flex-start',
    backgroundColor: '#f1f2f6'
  },
  loading: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 10,
    marginTop: 100,
    fontSize: 30
  },
  card: {
    borderColor: '#fff',
    backgroundColor: '#fff',
    borderWidth: 1,
    overflow: 'scroll',
    borderRadius: 4,
    marginTop: 15,
    marginLeft: -4,
    marginRight: -4,
    padding: 8,
  }
});