/**
 * Created by zhaojm on 23/09/2016.
 */
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import App from './containers/App'
//import rootReducer from './reducers'
//import { createStore, compose } from 'redux'

//import Singleton from './network/Singleton'

//import createStoreWithMiddleware from './store/create'

//import DevTools from './containers/DevTools';


import '../css/common.css'
import '../css/chat.css'
import '../css/login.css'
import '../css/main.css'


// 把多个 store 增强器从右到左来组合起来，依次执行
// 这个地方完全可以不用compose，演示一下compose的使用
//const enhancer = compose(
//  DevTools.instrument()
//);

//let store = createStore(rootReducer, enhancer)
//const store = createStore(rootReducer);
const store = configureStore();


render(
    <Provider store={store}>
        <div className="height-init">
            <App />
        </div>
    </Provider>,
    document.getElementById('root')
);
