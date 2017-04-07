import React, {Component} from 'react';
import {Link,IndexLink} from 'react-router'

import './index.scss'

export default class Index extends Component {
    constructor(){
        super();
    }
    render(){
        return(
            <div>
                <section>
                    <div className="cart-container">
                        <table>
                            <thead>
                                <tr>
                                    <th colSpan="2">
                                        <h1>Your Cart</h1>
                                        <a className="btn" href="account.html">checkout</a>
                                    </th>
                                    <th> Price</th>
                                    <th>Quantity </th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>
                                        <img src={require("./img/Cart_Black_medium.png")}/>
                                    </th>
                                    <td>
                                        <div className="title">Spectacles (Black)</div>
                                        <div className="desc">Includes charging case and&nbsp;cable</div>
                                    </td>
                                    <td>$129.99</td>
                                    <td>
                                        <span className="remove"></span>
                                        <span className="num">1</span>
                                        <span className="add"></span>
                                    </td>
                                    <td>$129.99</td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td colSpan="2">Delivers in 1 – 2 weeks</td>
                                    <td colSpan="2">Subtotal</td>
                                    <td>$129.99</td>
                                </tr>
                            </tfoot>
                        </table>
                        <div className="cart-footer">
                            <div className="cart-footer-note">Limit 6 Spectacles per household. Available in the U.S. only. Requires Snapchat and a <a href="#">compatible device</a>.</div>
                            <div className="cart-footer-actions"><Link className="btn" to="/checkout">Checkout</Link><Link className="btn" to="/">Continue Shopping</Link></div>
                        </div>
                    </div>
                </section>
                <section className="emptycontent">
                    <div>
                        <h1>Your cart is empty!</h1>
                        <Link className="btn" to="/">Continue Shopping</Link>
                    </div>
                </section>
                <aside>
                    <div className="extra-products-container">
                        <h1 className="extra-title">Extra Accessories</h1>
                        <div className="extra-products">
                            <div className="extra-product">
                                <div className="img"></div>
                                <h2 className="title">Charging Case</h2>
                                <a className="btn">add to cart</a>
                                <span className="price">$49.99</span>
                            </div>
                            <div className="extra-product">
                                <div className="img"></div>
                                <h2 className="title">Charging Cable</h2>
                                <a className="btn">add to cart</a>
                                <span className="price">$9.99</span>
                            </div>
                        </div>
                    </div>
                </aside>                
            </div>
        )
    }
}