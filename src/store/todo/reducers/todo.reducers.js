import * as todoTypes from "../todo.types";

const initialState = {
    todos: [
        {
            title: 'Upload 1099-R to TurboTax',
            category: '💰 Finance',
            status: 'incomplete',
        },
        {
            title: 'Submit 2019 tax return',
            category: '💰 Finance',
            status: 'incomplete',
        },
        {
            title: 'Print parking passes',
            category: '💞 Wedding',
            status: 'incomplete',
        },
        {
            title: 'Sign contract, send back',
            category: '🖥️ Freelance',
            status: 'incomplete',
        },
        {
            title: 'Hand sanitizer',
            category: '🛒 Shopping List',
            status: 'incomplete',
        },
        {
            title: 'Hand sanitizer',
            category: '🛒 Shopping List',
            status: 'incomplete',
        },
        {
            title: 'Hand sanitizer',
            category: '🛒 Shopping List',
            status: 'incomplete',
        },
    ]
};

const reducer = (state = initialState, action ) => {
    switch (action.type) {
        case todoTypes.GET_ALL_TODOS:
            return state.todos
        default:
            return state;
    }
};

export default reducer;
