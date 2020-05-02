import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import Main from './Main';

const HomeScreen = ({ navigation }) => {
    /* navigation.setOptions({
        headerRight: () => (
            <Button
                title="Save"
                onPress={() => {
                    //save the changes
                    navigation.replace("Home");
                }}
            />
        )
    }); */
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Main />
            <Button style={{ width: 420, backgroundColor: '#000', marginLeft: 0, color: 'black' }}
                title="Go To Settings Screen"
                onPress={() => navigation.navigate("Settings", { dataobject: 'Display data obj prop' })}
                underlayColor='#000'
                color="#000"
            ><Text>Go to Settings Screen</Text></Button>
        </View>
    );
};
const styles = StyleSheet.create({
    titleText: {
        backgroundColor: 'black',
    }
});
export default HomeScreen;