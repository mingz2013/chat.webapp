/**
 * Created by zhaojm on 23/09/2016.
 */
import { createStore, applyMiddleware, compose } from 'redux';
import { persistState } from 'redux-devtools';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import DevTools from '../containers/DevTools';

export default function configureStore(preloadedState) {
    const store = createStore(
        rootReducer,
        preloadedState,
        compose(
            applyMiddleware(thunk),
            DevTools.instrument()
            //window.devToolsExtension ? window.devToolsExtension() : f => f
            //persistState(
            //  window.location.href.match(
            //    /[?&]debug_session=([^&#]+)\b/
            //  )
            //)
        ));

    //if (module.hot) {
    //  module.hot.accept('../reducers', () =>
    //    store.replaceReducer(require('../reducers').default)
    //  );
    //}

    return store;
}