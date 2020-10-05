export const getAllTodos = () => {
    return {
        type: GET_ALL_TODOS
    }
};

// export const addTodo = (data) => async dispatch => {
//     const response = await todoAPI.addTodo(data);
//     const { success, todo } = response.data;

//     if(success) dispatch(todoActions.addTodoAC(todo));
// };

// export const changeTodoStatus = (id) => async dispatch => {
//     const response = await todoAPI.changeTodoStatus(id);

//     if(response.data.success) dispatch(todoActions.changeTodoStatusAC(id));
// };

// export const delTodo = (id) => async dispatch => {
//     const response = await todoAPI.delTodo(id);

//     if(response.data.success) dispatch(todoActions.delTodoAC(id));
// };
