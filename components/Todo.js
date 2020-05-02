import React, { Component } from 'react'
import { StyleSheet, View, Text, AsyncStorage } from 'react-native';
import { Appbar, Button, TextInput, Card, List } from 'react-native-paper';


export default class Todo extends Component {
    arr = []
    id = 0
    state = {
        text: '',
        item: [
            { id: 1, data: "loading" }
        ]
    };

    storedata = async () => {
        this.arr.push({ id: this.id, data: this.state.text })
        this.id++;
        await AsyncStorage.setItem("mylist", JSON.stringify(this.arr))
        this.setState({
            item: JSON.parse(await AsyncStorage.getItem("mylist"))
        })
        // console.log(this.state);
    }
    async componentDidMount() {
        this.setState({
            item: JSON.parse(await AsyncStorage.getItem("mylist")) || ""
        })
        this.arr = JSON.parse(await AsyncStorage.getItem("mylist")) || []
        this.id = this.arr[this.arr.length - 1].id + 1;
    }
    render() {
        if (this.state.item.length > 0) {
            renderList = this.state.item.map(item => {
                return (
                    <Card key={item.id} style={{ margin: 10 }}>
                        <List.Item
                            title={item.title}
                            description = "Todo description"
                            right={() => <List.Icon icon="delete" />}
                            onPress={() => { AsyncStorage.removeItem("mylist") }}
                        />
                        <Text key={item.id} style={{ paddingLeft: 10 }}>{item.data}</Text>
                    </Card>
                )
            })
        } else {
            renderList = <Text>no item</Text>
        }
        return (
            <View style={styles.container}>
                <Appbar.Header>
                    <Appbar.Content
                        title=" Todo List"
                    />
                </Appbar.Header>
                <TextInput label="add todo item"
                    value={this.state.text}
                    style={{ width: 320, margin: 20, backroundColor: 'white' }}
                    onChangeText={text => this.setState({ text })}
                />
                <Button mode="contained" onPress={this.storedata}>
                    <Text>Add Todo</Text>
                </Button>
                <View>
                    {renderList}
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        color: 'black',
        backgroundColor: "#d3d3d3",
        margin: 10,
        width: 380,

        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff'
    }
})
/*
To delete make a func and pass id to it then write a logic
ComponenentDidMount fires only once
note: https://stackoverflow.com/questions/42645297/function-inside-render-and-class-in-reactjs
https://stackoverflow.com/questions/46741247/nothing-was-returned-from-render-this-usually-means-a-return-statement-is-missi
*/