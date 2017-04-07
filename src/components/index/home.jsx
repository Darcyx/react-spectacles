/**
 * Index Components
 */
import React, {Component} from 'react';
import {Link} from 'react-router';
import classnames from 'classnames'
import {connect} from 'react-redux';

import {
    headerStyleWhite,
    headerStyleRelative,
    headerStyleOpacity,
    scrolledAction,
} from '../../Redux/Action/IndexAction'
/*
 |--------------------------------------------------------------------------
 | dependencies components module
 |--------------------------------------------------------------------------
 */
import Slider from './slider';

/*
 |--------------------------------------------------------------------------
 | Index Component stylesheet
 |--------------------------------------------------------------------------
 |
 */
import './index.scss'
import ThumbImageV from './img/bfc97a68c023b1e8526607e2127f7f12.jpg'
import ThumbImageB from './img/a5cda99d912e4f6284d25739d92232cd.jpg'

/*
 |--------------------------------------------------------------------------
 | Index Component
 |--------------------------------------------------------------------------
 | define Index Component and export
 */
class Index extends Component {
    constructor() {
        super();
        this.handleScroll = this.handleScroll.bind(this);
        this.state = {
            tab: [true, false, false, false, false],
            tab1:[true,false,false]
        }
    }

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(headerStyleWhite(true));
        dispatch(headerStyleOpacity(true));
        window.addEventListener('scroll', this.handleScroll)
    }

    componentWillUnmount() {
        const { dispatch } = this.props;
        dispatch(headerStyleWhite(false));
        dispatch(headerStyleOpacity(false));
        window.removeEventListener('scroll', this.handleScroll)
    }

    //滚动事件
    handleScroll(e) {
        let pos = parseInt(e.srcElement.body.scrollTop);
        const { dispatch } = this.props;
        //this.props.white = true
        let header = e.srcElement.body.getElementsByClassName('header')[0];
        if (pos == 0) {
            dispatch(headerStyleOpacity(true));
            dispatch(scrolledAction(false));
            //$('.header').addClass('header-tranparent');
            //header.setAttribute('class','header header-white header-tranparent')
        } else if(!this.props.scrolled){
            dispatch(headerStyleOpacity(false));
            dispatch(scrolledAction(true));
            //$('.header').removeClass('header-tranparent');
            //header.setAttribute('class','header header-white');
        }
    }

    tab(e, index) {
        let tab = this.state.tab;
        tab.forEach(function (el, idx, arr) {
            idx == index ? (el ? null : arr[idx] = !el) : (el ? arr[idx] = !el : null)
        })
        this.setState({
            tab: tab
        })
    }
    tab1(e,index) {
        let tab1 = this.state.tab1;
        tab1.forEach(function (el,idx,arr) {
            idx == index ? (el ? null : arr[idx] = !el) : (el ? arr[idx] = !el : null)
        })
        this.setState({
            tab1:tab1
        })
    }
    render() {
        return (
            <div className="container">
                {/*-- Slider Component --*/}
                <Slider/>

                <div className="videoshow fullviewport">
                    <h2>just for<span> Snapchat</span></h2>
                    <div className="videoContainer">
                        <video poster={ThumbImageV} preload="auto" autoPlay="autoplay" loop="loop" muted="muted"
                               playsInline data-scroll-visble>
                            {/*<source src="http://gslb.miaopai.com/stream/jr9wemZsZgCNuqkhwqpVDA__.mp4"/>   */}
                            <source
                                src="https://storage.googleapis.com/spectacles/2ae77833-8d66-40ac-8604-cfd2991e0f7d/circle.mp4"/>
                            <source src="../media/circle.webm"></source>
                            <source src="../media/circle.mp4"/>
                        </video>
                    </div>
                </div>
                <div className="tab fullviewport">
                    <div className="content">
                        <div className={classnames({active: this.state.tab[0]})}>
                            <div className="videobox active">
                                <video poster={ThumbImageV} preload="auto" autoPlay="autoplay" loop="loop" muted="muted"
                                       playsInline data-scroll-visble>
                                    {/*<source src="http://gslb.miaopai.com/stream/jr9wemZsZgCNuqkhwqpVDA__.mp4"/>*/}
                                    <source
                                        src="https://storage.googleapis.com/spectacles/3c8f9e6e-0b76-4cc1-9dc8-a89fa3687e3d.mp4"/>
                                    <source src="../media/show.webm"></source>
                                    <source src="../media/show.mp4"/>
                                </video>
                            </div>
                        </div>
                        <div className={classnames({active: this.state.tab[1]})}></div>
                        <div className={classnames({active: this.state.tab[2]})}></div>
                        <div className={classnames({active: this.state.tab[3]})}></div>
                        <div className={classnames({active: this.state.tab[4]})}></div>
                    </div>
                    <div className="footer">
                        <ul>
                            <li className={classnames({active: this.state.tab[0]})} onClick={(e, index) => {
                                this.tab(e, 0)
                            }}>
                                <p>Specs make memories,from your perspective</p>
                            </li>
                            <li className={classnames({active: this.state.tab[1]})} onClick={(e, index) => {
                                this.tab(e, 1)
                            }}>
                                <p>Press the button to make 10-second Snap</p>
                            </li>
                            <li className={classnames({active: this.state.tab[2]})} onClick={(e, index) => {
                                this.tab(e, 2)
                            }}>
                                <p>Lights show friends you're Snapping</p>
                            </li>
                            <li className={classnames({active: this.state.tab[3]})} onClick={(e, index) => {
                                this.tab(e, 3)
                            }}>
                                <p>Wirelessly add your Snaps to Memories on Snapchat</p>
                            </li>
                            <li className={classnames({active: this.state.tab[4]})} onClick={(e, index) => {
                                this.tab(e, 4)
                            }}>
                                <p>Specs charge in their case</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="section-shop" ref='section-shop'>
                    <div className="shop-product">
                        <div className="product-container">
                            <div className="product-preview">
                                <div className={
                                    classnames({
                                        active:this.state.tab1[0]
                                    })
                                }></div>
                                <div className={
                                    classnames({
                                        active:this.state.tab1[1]
                                    })
                                }></div>
                                <div className={
                                    classnames({
                                        active:this.state.tab1[2]
                                    })
                                }></div>
                            </div>
                            <div className="product-info">
                                <div className="product-info-section">
                                    <div className="product-info-head">
                                        <div className="product-info-color">Coral</div>
                                        <div className="product-info-money">$129.99</div>
                                    </div>
                                    <ul className="product-selector">
                                        <li className={
                                            classnames({
                                                active:this.state.tab1[0]
                                            })
                                        } onClick = {(e,index) =>
                                            this.tab1(e,0)
                                        }><span></span></li>
                                        <li className={
                                            classnames({
                                                active:this.state.tab1[1]
                                            })
                                        } onClick = {(e,index) =>
                                            this.tab1(e,1)
                                        }><span></span></li>
                                        <li className={
                                            classnames({
                                                active:this.state.tab1[2]
                                            })
                                        } onClick = {(e,index) =>
                                            this.tab1(e,2)
                                        }><span></span></li>
                                    </ul>
                                </div>
                                <div className="product-info-section">
                                    <Link className="btn" to="/cart">Add To Cart</Link>
                                    <div className="product-info-caption">
                                        <p>Delivers in<span>1-2 weeks</span></p>
                                        <p>Includes charging case and cable</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section-store fullviewport">
                    <div className="bg">
                        <div className="sref">
                            <a href="#">701 Ocean Front Walk, Venice, CA 90291</a>
                            <span>11am–Sunset Daily</span>
                        </div>
                    </div>
                </div>
                <div className="section-bot fullviewport">
                    <video poster={ThumbImageB} preload="auto" autoPlay="autoplay" loop="loop" muted="muted" playsInline
                           data-scroll-visble>-->
                        {/*<source src="http://gslb.miaopai.com/stream/jr9wemZsZgCNuqkhwqpVDA__.mp4"/>*/}
                        <source
                            src="https://storage.googleapis.com/spectacles/0c7494a8-59cb-43c5-955f-bb3ca109adb3.mp4"/>
                        <source src="../media/bot.webm"/>
                        <source src="../media/bot.mp4"/>
                    </video>
                    <a className="btn" href="#">Find A Bot</a>
                </div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    const {scrollStatus,headerStyle} = state;
    const {scrolled} = scrollStatus;
    const {TotalQuantity} = headerStyle
    return {
        scrolled,
        TotalQuantity
    };
}
export default connect(mapStateToProps)(Index);