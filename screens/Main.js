import React, { Component } from 'react';
import { StyleSheet, Text, View, Alert, ScrollView, Image } from 'react-native';
import { TextInput, Appbar, Button } from 'react-native-paper';
import Display from '../components/Display';
import Footer from '../components/Footer';
import { Icon } from 'react-native-elements';

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

                    <Image source={{ uri: "https://i.pinimg.com/originals/c7/54/cf/c754cf649aaa402cd20d70df9d494636.png", height: 200, width: 390 }} />
                    <Image source={{ uri: "https://info.usertesting.com/rs/709-WMS-542/images/UT-Logo-LP.png", height: 100, width: 390 }} />

                    <Image source={{ uri: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", height: 100, width: 390 }} />
                    <Image source={{ uri: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", height: 100, width: 390 }} />
                    <Image source={{ uri: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", height: 100, width: 390 }} />
                    <Image source={{ uri: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", height: 100, width: 390 }} />
                    <Image source={{ uri: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", height: 100, width: 390 }} />
                </ScrollView>

                <Appbar.Header
                    style={{ backgroundColor: 'rgb(238, 238, 229)' }}>
                    {/* <Appbar.BackAction
            onPress={this._goBack}
          /> */}
                    <Icon
                        name='sc-telegram'
                        type='evilicon'
                        color='#517fa4'
                    />
                    <Appbar.Content
                        title="MatchMaking"
                        subtitle="Lets get social"
                        style={{ fontWeight: 'bold' }}
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
                <Button style={styles.submitbutton} icon="rocket" mode="contained"
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
        paddingTop: 0,
        paddingLeft: 10,
        paddingRight: 13,
        /* backgroundColor: 'rgba(119, 119, 119, 0.8)' */
    },
    text: {
        color: '#fff',
        fontSize: 30,
        height: 50,
        width: 80,
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
        marginRight: 4,
        /* backgroundColor: 'rgba(62, 61, 61, 0.8)' */
        backgroundColor: '#525252',
        backgroundColor: '#5f8ffa',
        color: 'black',
    },
    input: {
        color: '#fff',
        fontSize: 17,
        height: 45,
        borderColor: "#c1c0c07d",
        borderWidth: 1,
        width: 400,
        /*backgroundColor: 'rgba(52, 52, 52, 0.8)',*/
        backgroundColor: 'transparent',
        lineHeight: 1,
    },
    footer: {
        marginLeft: -10,
        marginRight: -10,
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
        background: 'red',
        backgroundColor: '#eff0f3'
    },
};
export default Main;