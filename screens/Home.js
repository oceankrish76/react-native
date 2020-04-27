import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

const Home = ({ navigation }) => {
    const pressHandler = () => {
        navigation.navigate('Settings');
    }
    return (
        <View style={styles.container}>
            <Text>This is the home screen</Text>
            <Button title="go to settings" onPress={pressHandler} />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'blue',
    }
});
export default Home;