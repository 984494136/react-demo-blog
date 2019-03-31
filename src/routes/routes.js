import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom'
import Nav from '../Nav/nav'
const basicR = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Nav></Nav>
            </Switch>
        </BrowserRouter>
    )
}
export default basicR
