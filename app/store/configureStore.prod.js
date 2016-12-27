/**
 * Created by zhaojm on 23/09/2016.
 */
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'


export default (preloadedState) => {
    return createStore(
        rootReducer,
        preloadedState,
        applyMiddleware(
            thunk
        )
    );
}