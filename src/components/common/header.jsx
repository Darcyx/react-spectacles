import React, {Component} from 'react';
import {Link} from 'react-router'
import classNames from 'classnames'
import {connect} from 'react-redux';

import './header.scss'

class Header extends Component {
    constructor() {
        super();
    }

    componentDidMount() {
        //console.log(this.props);
    }

    render() {
        return (
            <div className={classNames({
                'header': true,
                'header-white': this.props.white,
                'header-tranparent': this.props.Opacity,
                'header-relative': this.props.relative
            })}>
                <div className='header-wrapper'>
                    <Link className={"globalheader-logo"} to="/">
                        <h1 className={"globalheader-title"} data-reactid="7">Spectacles</h1>
                    </Link>
                    <Link className={classNames({
                        buy: true,
                        cart:this.props.TotalQuantity
                    })} to={
                        this.props.TotalQuantity?'/cart':null
                    } onClick={()=>{this.props.scrollToCart()}}>{
                        this.props.TotalQuantity?this.props.TotalQuantity:'Buy'
                    }</Link>
                </div>
            </div>
        )
    }
}


function mapStateToProps(state) {
    const {headerStyle, scrollStatus} = state;
    const {scrolled} = scrollStatus;
    return {
        white:headerStyle.get('white'),
        relative:headerStyle.get('relative'),
        Opacity:headerStyle.get('Opacity'),
        scrolled
    };
}

export default connect(mapStateToProps)(Header);
