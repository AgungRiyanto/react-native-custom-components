import React from 'react';
import {
    Text
} from 'react-native';
import { Container, Button, SweetAlert } from './components';
class MyApp extends React.Component {
    constructor() {
        super();
        this.state = {
            visible: false
        }
    }

    render() {
        return (
            <Container>
                <SweetAlert 
                    type="danger" 
                    visible={this.state.visible}
                    title="Warning!"
                    textDescription="Entah apa yang merasukimu"
                    onConfirm={() => this.setState({ visible: false }) }

                />
                <Button onPress={() => this.setState({ visible: true }) }>
                    <Text style={{ color: 'white' }}>button</Text>
                </Button> 
            </Container>
        );
    }
}

export default MyApp;