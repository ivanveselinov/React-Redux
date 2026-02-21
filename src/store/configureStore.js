import { legacy_createStore as createStore} from 'redux'
import reducer from './tasks'

const configureStorestore = createStore(reducer);

export default configureStorestore
