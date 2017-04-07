import React, {Component} from 'react';
import classnames from 'classnames'

import './index.scss'

export default class Index extends Component{
    constructor(){
        super();
        this.state = {
            expand:false,
            transition:false,
            screenWidth:null
        }
    }

    expand(){
        this.setState({
            transition:true,
            expand:!this.state.expand
        })
    }
    
    resizeEvent(e){
        this.setState({
            screenWidth:e.srcElement.innerWidth
        })
        if(e.srcElement.innerWidth > 999 && this.state.transition == true){
            this.setState({
                transition:false
            })
        }
    }

    componentDidMount(){
        if(window.innerWidth<1000){
            this.setState({
                transition:true
            })
        }
        this.setState({
            screenWidth:window.innerWidth
        })
    window.addEventListener('resize',this.resizeEvent.bind(this))
    }

    componentWillUnmount(){
        window.removeEventListener('resize',this.resizeEvent.bind(this))
    }

    render(){
        return(
            <div className='box'>
                <nav>
                    <ul>
                        <li className="active">My information</li>
                        <li>Shipping method</li>
                        <li>Payment method</li>
                    </ul>
                </nav>
                <button className={classnames({"order-summary-toggle":true,active:this.state.expand})} onClick={()=>{this.expand()}}>
                    <div className="wrap">
                        <div>{this.state.expand?'Hide':'Show'} order summary</div>
                        <span>$179.98</span>
                    </div>
                </button>
                <div className="content">
                    <div className="wrap clearfix">
                        <aside 
                            ref='aside'
                            className={classnames({
                                active:this.state.expand,
                                transition:this.state.transition
                            })}
                            style = {{height:this.state.expand||this.state.screenWidth>999?(this.refs.aside.querySelectorAll('.order-summary')[0].offsetHeight)+'px':0}}
                        >
                            <div className="order-summary">
                                <div className="products-info">
                                    <dl className='clearfix'>
                                        <dt>
                                            <img src={require('../cart/img/Cart_Black_medium.png')}/>
                                        </dt>
                                        <dd>
                                            <div>
                                                <span>Spectacles</span>
                                                <span>Black</span>
                                            </div>
                                            <div>
                                                4
                                            </div>
                                        </dd>
                                        <dd>$519.96</dd>
                                    </dl>
                                </div>
                                <div className="products-subTotal clearfix">
                                    <div>
                                        <span>Subtotal</span>
                                        <span>$569.95</span>
                                    </div>
                                    <div>
                                        <span>Shipping & Handling</span>
                                        <span>-</span>
                                    </div>
                                    <div>
                                        <span>Taxes</span>
                                        <span>-</span>
                                    </div>
                                </div>
                                <div className="products-price-total clearfix">
                                    <span>Total</span>
                                    <span>$569.95</span>
                                </div>
                            </div>
                        </aside>
                        <main>

                        </main>
                    </div>
                </div>
            </div>
        )
    }
}