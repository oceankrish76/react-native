import React from 'react';
import { StyleSheet, Text, View, Alert, ScrollView, Image } from 'react-native';
import { TextInput, Appbar, Button } from 'react-native-paper';

const Display = (props) => {
    console.log(props);
    if (props.data == "loading") {
        return <Text>Waiting for a while</Text>
    }
    if (props.data.message) {
        return <Text>Sorry! something went wrong.</Text>
    }
    else {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>{props.data.percentage} %</Text>
                <Text style={styles.text}>{props.data.result}</Text>
            </View>
        );
    }

}
const styles = StyleSheet.create({
    container: {
        height: 200
    },
    text: {
        fontSize: 30,
        textAlign: 'center',
    }
});
export default Display;

