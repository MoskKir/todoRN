import { combineReducers } from 'redux';

import todos from './todo.reducers';

const rootReducer = combineReducers({
    todos
});

export default rootReducer;
