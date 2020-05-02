import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { useIsFocused } from "@react-navigation/core";
import Todo from '../components/Todo';

const SettingsScreen = ({ route, navigation }) => {
    const { dataobject } = route.params;
    const isFocused = useIsFocused();
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "", paddingTop: 12 }}>
            <Text style={{ color: isFocused ? "green" : "black" }}>
                SettingsScreen
            </Text>
            <Text>Wow, passing data from home screen to this screen</Text>
            <Text>OtherParam: {JSON.stringify(dataobject)}</Text>
            <Text>Remember to use me ~route.params & maybe this.props.navigation.getParam(dataobject)</Text>
            <Button title="Go To Home Screen" onPress={() => navigation.goBack()} />

            <Todo />
        </View>
    );
};
const styles = StyleSheet.create({
    gohommebtn: {
        color: 'black',
        backgroundColor: 'black',
    }
});
export default SettingsScreen; 