/**
 * Created by zhaojm on 23/09/2016.
 */
import {createStore,applyMiddleware,compose} from 'redux'
import rootReducer from '../reducers'

import thunk from 'redux-thunk'
import DevTools from '../containers/DevTools'

const enhancer = compose(
    //你要使用的中间件，放在前面
    applyMiddleware(thunk),
    //必须的！启用带有monitors（监视显示）的DevTools
    DevTools.instrument()
);

export default function createStoreWithMiddleware(initialState) {
    //注意：仅仅只有redux>=3.1.0支持第三个参数
    const store = createStore(rootReducer, initialState, enhancer)
    return store
}