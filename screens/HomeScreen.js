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
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center",}}>
            <Main />
            <View style={{marginBottom:60}}>
            <Button style={{ width: 420, backgroundColor: '#000', marginLeft: 0, color: 'black',}}
                title="Go To Settings Screen"
                onPress={() => navigation.navigate("Settings", { dataobject: 'Display data obj prop' })}
                underlayColor='#000'
                color="#000"
            ><Text>Go to Settings Screen</Text></Button>

            <Button style={{
                width: 420,
                backgroundColor: '#000',
                marginLeft: 0,
                color: 'black',
            }}
                title="Go To Camera Screen"
                onPress={() => navigation.navigate("Camera", { dataobject: 'Display data obj prop' })}
                underlayColor='#000'
                color="#000"
            ><Text>Go to Camera Screen</Text>
        </Button>
        </View>
        </View>
    );
};
const styles = StyleSheet.create({
    titleText: {
        backgroundColor: 'black',
    },
});
export default HomeScreen;