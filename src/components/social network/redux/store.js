import { applyMiddleware,createStore } from 'redux';
import { createLogger } from 'redux-logger';

import reducer from './rootReducer';

const logger = createLogger();

export default createStore(
    reducer,
    {add_comment:{content:['bah bah che post khargholadeii man in post shoma ro pasandidam va be hamin dalil an ra milikam','soltan post ha']}},
    applyMiddleware(logger)
);