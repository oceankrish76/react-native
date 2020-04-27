import React, { Component } from 'react';
import { StyleSheet, Text, View, Alert, ScrollView, Image } from 'react-native';
import { TextInput, Appbar, Button } from 'react-native-paper';
import Display from './components/Display';
import Footer from './components/Footer';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useIsFocused } from "@react-navigation/core";

const Stack = createStackNavigator();
const HomeScreen = ({ navigation }) => {
  navigation.setOptions({
    headerRight: () => (
      <Button
        title="Save"
        onPress={() => {
          //save the changes
          navigation.replace("Home");
        }}
      />
    )
  });
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Main />
      <Button style={{ width: 420, backgroundColor: '#000', marginLeft: 0 }}
        title="Go To Settings Screen"
        onPress={() => navigation.navigate("Settings")}
        underlayColor='#fff'
        color="#fff"
      ><Text>Go to Settings Screen</Text></Button>
    </View>
  );
};
const SettingsScreen = ({ navigation }) => {
  const isFocused = useIsFocused();
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ color: isFocused ? "green" : "black" }}>
        SettingsScreen
      </Text>
      <Button title="Go To Home Screen" onPress={() => navigation.goBack()} />
    </View>
  );
};

class Main extends Component {
  state = {
    fname: '',
    sname: '',
    result: 'Loading',
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
  handleSubmit() {
    fetch(`https://love-calculator.p.rapidapi.com/getPercentage?fname=${this.state.fname}&sname=${this.state.sname}`,
      {
        headers: {
          "X-RapidAPI-Host": "love-calculator.p.rapidapi.com",
          "X-RapidAPI-Key": "0448046cc5msh2f6b58392af8d47p1d282ajsn911c565198d7"
        }
      })
      .then(data => data.json())
      .then(data2 => {
        console.log(data2);
        this.setState({
          result: data2
        })
      })
  }
  render() {
    console.log(this.props)
    const myarr = ['eat', 'repeat'];
    const mapreturnnewarr = myarr.map((data) => {
      return <Text style={styles.text}>{data}</Text>
    })
    // {mapreturnnewarr} in jsx if want to display

    return (

      <View style={styles.container}>

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

        <Appbar.Header>
          <Appbar.BackAction
            onPress={this._goBack}
          />
          <Appbar.Content
            title="MatchMaking"
            subtitle="Lets get social"
          />
          <Appbar.Action icon="magnify" onPress={this._handleSearch} />
          <Appbar.Action icon="dots-vertical" onPress={this._handleMore} />
        </Appbar.Header>
        <Text style={styles.fromapi}>From Api: {this.state.username}</Text>

        <TextInput label="Male"
          value={this.state.fname}
          style={styles.input}
          onChangeText={(text) => this.setState({ fname: text })}
        />
        <TextInput label="Female"
          value={this.state.sname}
          style={styles.input}
          onChangeText={(text) => this.setState({ sname: text })}
        />
        {/*<Button title="submit" style={styles.submit}
          onPress={() => Alert.alert('lol lol lol')} />*/}
        <Button style={styles.submitbutton} icon="camera" mode="contained"
          onPress={this.handleSubmit.bind(this)}>
          Press me
        </Button>
        <Display data={this.state.result} />

        <View style={styles.footer}>
          <Footer />
        </View>

      </View>
    );
  }
}
// this way is bettter that const styles = {} in error checking
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    color: '#fff',
    flexDirection: 'column',
    paddingTop: 1,
    paddingLeft: 10,
    paddingRight: 13,
    backgroundColor: 'rgba(52, 52, 52, 0.8)'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    height: 50,
    width: 80,
    borderWidth: 3,
    backgroundColor: 'blue',
    textAlign: 'center',
    padding: 5,
    marginTop: 10,
    marginLeft: 10,
  },
  submit: {
    backgroundColor: 'skyblue',
  },
  submitbutton: {
    marginTop: 10,
    marginBottom: 20,
    marginRight: 4
  },
  input: {
    color: '#fff',
    fontSize: 17,
    height: 45,
    borderColor: "gray",
    borderWidth: 1,
    width: 400,
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
  },
  footer: {
    marginLeft: -10,
  },
  fromapi: {
    marginTop: 40,
    fontSize: 20,
  },
  navbar: {
    backgroundColor: 'black'
  },
  navbutton: {
    backgroundColor: '#000',
    color: 'white'
  },
});
const MyTheme = {
  colors: {
    background: 'red'
  },
};
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ title: "Home" }}
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen name="Settings" component={SettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}