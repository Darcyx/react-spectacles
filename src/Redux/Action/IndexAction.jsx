/**
 * Action（动作）实质上是包含 `type` 属性的普通对象
 * Action Creator 可以是同步的，也可以是异步的
 * Action Creator 是 action 的创造者，本质上就是一个函数，返回值是一个 action（对象）
 * @author  Darcy.X <darcyonw@163.com>
 */
import fetch from 'isomorphic-fetch'
import {
    proxyUrl,
    ajaxGet,
    ajaxPost,
    ajaxPut,
    ajaxDel
} from '../../public/public'

import * as types from '../ActionType/ActionTypes';

//头部样式状态
export const headerStyleWhite = (white) => {
    return {
        type: types.HEADER_STYLE_WHITE,
        white
    }
};

//头部样式状态
export const headerStyleRelative = (relative) => {
    return {
        type: types.HEADER_STYLE_RELATIVE,
        relative
    }
};

//头部样式状态
export const headerStyleOpacity = (Opacity) => {
    return {
        type: types.HEADER_STYLE_OPACITY,
        Opacity
    }
};

//头部购物车物品数量
export const headerCartStatus = (TotalQuantity) => {
    return {
        type:types.HEADER_CART_STATUS,
        TotalQuantity
    }
}

//是否滚动状态
export const scrolledAction = (scrolled) => {
    return {
        type: types.SCROLLED,
        scrolled,
    }
};








