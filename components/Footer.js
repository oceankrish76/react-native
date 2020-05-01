import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";

export default class Footer extends React.Component {
    render() {
        return (
            <Appbar style={styles.bottom} justify="space-between" spacing={60}>

                <Grid>
                    <Col>
                        <Appbar.Action icon="home" onPress={() => console.log("pressed home")} />
                    </Col>
                    <Col>
                        <Appbar.Action icon="settings" onPress={() => console.log('Pressed mail')} />
                    </Col>
                    <Col>
                        <Appbar.Action icon="account-arrow-right-outline" onPress={() => console.log('Pressed label')} />
                    </Col>
                    <Col>
                        <Appbar.Action icon="phone" onPress={() => console.log('Pressed delete')} />
                    </Col>
                </Grid>
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
        /* backgroundColor: '#38393b', */
        backgroundColor: '#fff',
    },
});