import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
//import { Permissions } from 'expo';
//import { Camera, Permissions } from 'expo';
import * as Expo from 'expo';
//import { RNCamera as Camera } from 'react-native-camera';
import { Camera } from 'expo-camera';

import Constants from 'expo-constants';
import * as Permissions from "expo-permissions";
export default class CameraComponent extends React.Component {
    state = {
        hasCameraPermission: null,
        type: Camera.Constants.Type.back,
    };

    async componentWillMount() {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ hasCameraPermission: status === 'granted' });
    }

    render() {
        const { hasCameraPermission } = this.state;
        if (hasCameraPermission === null) {
            return <View />;
        } else if (hasCameraPermission === false) {
            return <Text>No access to camera</Text>;
        } else {
            return (
                <View style={{ flex:1 }}>
                    <Camera style={{ flex: 1 }} type={this.state.type}>
                        <View style={{
                            flex: 1,
                            backgroundColor: 'transparent',
                            flexDirection: 'row',
                        }}>
                            <TouchableOpacity style={{ flex: 0.1, alignSelf: 'flex-end', alignItems: 'center',}}
                                onPress={() => {
                                    this.setState({ type: this.state.type === Camera.Constants.Type.back ? Camera.Constants.Type.front : Camera.Constants.Type.back, });
                                }
                                }>
                                <View style={styles.textWrapper}>
                                <Text style={{fontSize: 16, fontWeight:'bold', width: 45, height: 30, marginLeft: 350, marginBottom: 30, color: 'black', backgroundColor: '#ffffff', padding: 3,  borderRadius: 2,}}>
                                    {' '}Flip{' '}
                                </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </Camera>
                </View>
            );
        }
    }
}
const styles = StyleSheet.create({
    textWrapper: {
        borderBottomColor: 'red',
        borderBottomWidth: 2,
        marginBottom: 30,
        borderRadius: 2,
    }
});