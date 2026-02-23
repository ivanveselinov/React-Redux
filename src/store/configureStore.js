import { legacy_createStore as createStore, applyMiddleware } from 'redux'
import { thunk } from 'redux-thunk';
import { devToolsEnhancer } from 'redux-devtools-extension'; 
import reducer from './tasks'

const configureStorestore = createStore(
    reducer,
    devToolsEnhancer({trace: true}) // Enable DevTools into react + trace
    // applyMiddleware(thunk)
);

export default configureStorestore
