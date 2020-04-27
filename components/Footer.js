import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { StyleSheet } from 'react-native';

export default class Footer extends React.Component {
    render() {
        return (
            <Appbar style={styles.bottom}>
                <Appbar.Action icon="home" onPress={() => console.log("pressed home")} />
                <Appbar.Action icon="email" onPress={() => console.log('Pressed mail')} />
                <Appbar.Action icon="label" onPress={() => console.log('Pressed label')} />
                <Appbar.Action icon="delete" onPress={() => console.log('Pressed delete')} />
            </Appbar>
        );
    }
}

const styles = StyleSheet.create({
    bottom: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
    },
});