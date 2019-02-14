import React from 'react';
import { View } from 'react-native';
import { Container, Header, Left, Body, Right, Title, Subtitle } from 'native-base';

export default class TopBar extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let { title, subtitle } = this.props;
        return (
            <Container>
                <Header>
                    <Left />
                    <Body>
                        <Title>{title}</Title>
                        <Subtitle>{subtitle}</Subtitle>
                    </Body>
                    <Right />
                </Header>
            </Container>
        );
    }

}