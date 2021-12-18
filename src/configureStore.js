import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './reducers/rootReducer'

// const loggerMiddleware = createLogger()

const middleware = applyMiddleware(thunkMiddleware);
const store = createStore(rootReducer, middleware);

export default store;