import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducer';

export const serverStore = () => {
    return createStore(combineReducers(reducers), applyMiddleware(thunk));
};

//客户端的store创建函数
export const clientStore = () => {
    const preloadedState = window && window.context ? window.context.state : {};
    return createStore(
        combineReducers(reducers),
        preloadedState, // 同构项目中合并 state
        applyMiddleware(thunk)
    );
};
