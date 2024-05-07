import React from 'react';
import {Container} from './styles'
import {Header} from '../components/Header/index'
import {Button} from '../components/Button/index'
export function Details() {
    return (
        <Container>
            <Header/>
            <Button title = "voltar"  />
        </Container>
    );
}
