/**
 * Slider Component
 * @author Darcy <darcyonw@163.com>
 */

import React, {Component} from 'react';
import {proxyUrl, ajaxGet} from '../../public/public'
/*
 |--------------------------------------------------------------------------
 | public stylesheet
 |--------------------------------------------------------------------------
 |
 */
import './slider.scss';

const slideInterface = '';

class Slider extends Component {
    constructor() {
        super();
        this.getSlides = this.getSlides.bind(this);
        this.previousImage = this.previousImage.bind(this);
        this.nextImage = this.nextImage.bind(this);
        this.autoLoop = this.autoLoop.bind(this);
        this.state = {
            slides: [],
            duration: 1200,
            moving: false,
            offset: 0,
            slideCount: 5,
            slideIndex: 0,
        }
    }

    componentDidMount() {
        //get slide images by interface
        //this.getSlides();
        //this.autoLoop();
    }

    //get slide images
    getSlides() {
        const This = this;
        ajaxGet(slideInterface, {}, function (data) {
            This.setState({
                contentsData: data.data
            });
        })
    }

    //上一张
    previousImage() {
        console.log('previousImage');
    }

    //下一张
    nextImage() {
        console.log('nextImage');
    }

    autoLoop() {
        console.log('nextImage');
    }

    render() {
        return (
            <div className="swiper-container fullviewport">
                <a className="arrow-left" href="#" onClick={this.previousImage}><span></span></a>
                <a className="arrow-right" href="#" onClick={this.nextImage}><span></span></a>
                <div className="swiper-wrapper">
                    <div className="swiper-slide swiper-slide1">
                        <span></span>
                    </div>
                    <div className="swiper-slide swiper-slide2">
                        <span></span>
                    </div>
                    <div className="swiper-slide swiper-slide3">
                        <span></span>
                    </div>
                    <div className="swiper-slide swiper-slide4">
                        <span></span>
                    </div>
                    <div className="swiper-slide swiper-slide5">
                        <span></span>
                    </div>
                </div>
                <img className="toTop" src={require("./img/toTop.svg")}/>
                <div className="logo">
                    <div>snap to try on</div>
                    <img src={require("./img/252f8f6aa58bac049579c9284f99b90e.svg")}/>
                </div>
            </div>
        )
    }
}
;

export default Slider;
