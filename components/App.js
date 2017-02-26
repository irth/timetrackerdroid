import React, { Component } from 'react'

import {
    View, Text
} from 'react-native';

export default class App extends Component {
    render() {
        console.log("penis", this.props)
        return (
            <View>
                <Text>penis</Text>
            </View>
        );
    }
}