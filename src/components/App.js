import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom'
import Main from './Radio.js'
const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    font-family: "Helvetica Neue";
    background:#201F2C;
`;

const App = () => (
    <Container>
        <Switch>
            <Route exact path="/" component={Main}/>
        </Switch>
    </Container>
);

export default App;
