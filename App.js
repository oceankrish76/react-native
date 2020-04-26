import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Alert, ScrollView, Image } from 'react-native';
/* import { TextInput } from 'react-native-paper'; */

const Mydata = (props) => {
  return (
    <View>
      <Text>{props.name}</Text>
    </View>
  )
}

class Data extends Component {
  render() {
    return (
      <View>
        <Text>{this.props.age}</Text>
      </View>
    )
  }
}

class App extends Component {
  state = {
    name: "John",
    status: "online",
    text: "loading",
    username: "loading"
  }
  handleState = () => {
    this.setState({ name: 'Doe' })
    console.log("updates", this.state)
  }
  handleStatus(param) {
    this.setState({ status: param })
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(data => data.json())
      .then(data2 => {
        console.log(data2)
        this.setState({
          username: data2[0].name
        })
      })
  }
  render() {

    const myarr = ['eat', 'repeat'];
    const mapreturnnewarr = myarr.map((data) => {
      return <Text style={styles.text}>{data}</Text>
    })
    return (
      <View style={styles.container} >
        <ScrollView>
          <Image source={{ uri: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", height: 100, width: 390 }} />
          <Image source={{ uri: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", height: 100, width: 390 }} />
          <Image source={{ uri: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", height: 100, width: 390 }} />
          <Image source={{ uri: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", height: 100, width: 390 }} />
          <Image source={{ uri: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", height: 100, width: 390 }} />
          <Image source={{ uri: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", height: 100, width: 390 }} />
          <Image source={{ uri: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", height: 100, width: 390 }} />
          <Image source={{ uri: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", height: 100, width: 390 }} />
        </ScrollView>
        <Text style={{ fontSize: 30 }}>{this.state.username}</Text>
        <Text style={{ fontSize: 30 }}>{this.state.text}</Text>
        {mapreturnnewarr}
        <Mydata name="krishna" />
        <Data age="26" />
        <Button title="click me" onPress={this.handleState} />
        <Text style={styles.text}>{this.state.name}</Text>

        <TextInput
          style={styles.input}
          onChangeText={(text) => this.setState({ text })}
        />
        <Button title="submit" style={styles.submit}
          onPress={() => Alert.alert('lol lol lol')} />
      </View>
    );
  }
}
// this way is bettter that const styles = {} in error checking
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    paddingTop: 1,
    marginTop: 100,
    marginLeft: 10,
  },
  text: {
    fontSize: 30,
    height: 80,
    width: 80,
    borderWidth: 3,
    backgroundColor: 'blue',
    textAlign: 'center',
    padding: 5,
    marginTop: 10,
    marginLeft: 10,
  },
  submit: {
    backgroundColor: 'skyblue'
  },
  input: {
    fontSize: 30,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    width: 400,
  }
});

export default App;