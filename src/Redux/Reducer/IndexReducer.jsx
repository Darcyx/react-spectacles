/**
 * Reducer
 * Reducer 必须是同步的纯函数
 * 用户每次 `dispatch(action)` 后，都会触发 `reducer`  的执行
 *
 * @author  Darcy.X <darcyonw@163.com>
 */

import Immutable from 'immutable';
import * as types from '../ActionType/ActionTypes';

const initialState = Immutable.fromJS({
    white: false,
    Opacity: false,
    relative: false,
    TotalQuantity:0
}); //=Immutable.Map({})

/*const initialState = {
    white: false,
    Opacity: false,
    relative: false,
};*/

/**
 *
 * 根据 `action.type` 来更新 `state` 并返回 `nextState`
 * 最后会用 `reducer` 的返回值 `nextState` 完全替换掉原来的 `state`
 * 形式为 (state, action) => state
 *
 */
export const headerStyle = (state = initialState, action = {}) => {
    switch (action.type) {
        case types.HEADER_STYLE_WHITE:
            return state.set('white',action.white);
            /*return Object.assign({}, state, {
                white: action.white
            });*/
        case types.HEADER_STYLE_RELATIVE:
            return state.set('relative',action.relative);
        case types.HEADER_STYLE_OPACITY:
            return state.set('Opacity',action.Opacity);
        case types.HEADER_CART_STATUS:
            return state.set('TotalQuantity',action.TotalQuantity);
        default:
            return state
    }
};

export const scrollStatus = (state = {scrolled: false,scrollTop:0}, action = {}) => {
    switch (action.type) {
        case types.SCROLLED:
            return Object.assign({}, state, {
                scrolled: action.scrolled
            });
        case types.SCROLL_TOP:
            return Object.assign({}, state, {
                scrollTop: action.scrollTop
            });
        default:
            return state
    }
};





