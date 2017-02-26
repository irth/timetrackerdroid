import React, { Component } from 'react'

import { TouchableHighlight } from 'react-native'

export default class Link extends Component {
    render() {
        return (
            <TouchableHighlight
                onPress={this.props.onPress}>
                {this.props.children}
            </TouchableHighlight>
        )
    }
}