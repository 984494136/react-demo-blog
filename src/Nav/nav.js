import React, { Component } from 'react';
import { Route, Link, withRouter } from "react-router-dom";
import Home from '../Home/home'
import Index from '../Index/index'
import About from '../About/about'
import Details from '../Details/details'
import './nav.css'
class Nav extends Component {
    render() {
        console.log(this.props)
        const { location } = this.props
        return (
            <div>
                <div>
                    <Home></Home>
                    <nav>
                        <ul>
                            <Link to="/">Index</Link>
                            <Link to="/about">About</Link>
                        </ul>
                    </nav>
                    <Route path="/" exact component={Index} />
                    <Route path="/about/:id" exact component={About} />
                </div>
                <Route path="/details" exact component={Details} />
            </div>
        )
    }
}
export default withRouter(Nav)