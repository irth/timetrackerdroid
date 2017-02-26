import React, { Component } from 'react'


import {
    AppRegistry,
    StyleSheet,
    View
} from 'react-native';


import { Container, Content, ListItem, Text, Header, Body, Title, Right, Icon } from 'native-base';


class TaskList extends Component {
    render() {
        return (
            <Container>
                <Header>
                    <Body>
                        <Title>Time tracker</Title>
                    </Body>
                </Header>
                <Content>
                    {this.props.tasks.map((task) => (
                        <ListItem key={task.id}>
                            <Text>{task.name}</Text>
                            <Right>
                                <Icon name='arrow-forward'></Icon>
                            </Right>
                        </ListItem>
                    ))}
                </Content>
            </Container>
        )
    }
}
export default () => <TaskList tasks={[
    { name: "whatever", id: 1 },
    { name: "xD", id: 2 }
]}></TaskList>