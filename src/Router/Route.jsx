/**
 * Route
 */
import React, {Component} from 'react';
import {Router, Route, Redirect, IndexRoute, browserHistory, hashHistory} from 'react-router';

/*
 |--------------------------------------------------------------------------
 | dependencies components module
 |--------------------------------------------------------------------------
 */
import Header from '../components/common/header'
import Footer from '../components/common/footer'

// const history = process.env.NODE_ENV !== 'production' ? browserHistory : hashHistory;

/*
 |--------------------------------------------------------------------------
 | Document Layout
 |--------------------------------------------------------------------------
 |
 */
class App extends Component {
    constructor() {
        super();
    }
    scrollToCart(){
       $('html,body').animate({'scrollTop':this.refs.main.querySelector('.section-shop').offsetTop - 46},1000)
    }
    render(){
        return (
            <div>
                <Header ref='header' scrollToCart = {()=>this.scrollToCart()}/>
                <div ref='main'>{this.props.children}</div>
                <Footer/>
            </div>
        )
    }
}

/*
 |--------------------------------------------------------------------------
 | route
 |--------------------------------------------------------------------------
 */
const home = (nextState, cb) => {
    // do asynchronous stuff to find the components
    require.ensure([],require=>{
        cb(null,require('../components/index/home').default)
    }, 'home')
};

const Carts = (nextState, cb) => {
    // do asynchronous stuff to find the components
    require.ensure([],require=>{
        cb(null,require('../components/cart/cart').default)
    }, 'Carts')
};

const CheckOuts = (nextState, cb) => {
    // do asynchronous stuff to find the components
    require.ensure([],require=>{
        cb(null,require('../components/checkout/checkout').default)
    }, 'CheckOuts')
};

const RouteConfig = (
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute getComponent={home}></IndexRoute>
            <Route path='/cart' getComponent={Carts}></Route>
            <Route path='/checkout' getComponent={CheckOuts}></Route>
            <Redirect from='*' to='/'  />
        </Route>
    </Router>
);

export default RouteConfig;