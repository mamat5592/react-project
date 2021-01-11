import { applyMiddleware,createStore } from 'redux';
import { createLogger } from 'redux-logger';

import reducer from './rootReducer';

const logger = createLogger();

export default createStore(
    reducer,
    undefined,
    applyMiddleware(logger)
);