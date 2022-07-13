import { GET_TODO, ADD_TODO, MARK_COMPLETED, DELETE, FILTER, EDIT_TODO, ADD_NEW } from "../type"
// thay đổi state khi người dùng thực hiện actions
const initialState = {
    todos: []
}

const TodoReducres = (state = initialState, action) => {
    switch(action.type){
        case GET_TODO:
            return{
                ...state,
                todos: action.payload
            }

        case EDIT_TODO:
            return{
                ...state,
                todos: state.todos.map(item => {
                    if(item.id === action.payload) item.edit = !item.edit
                    return item
                })
            }
        case ADD_NEW:
            return{
                ...state,
                todos: [
                    ...state.todos,
                    action.payload
                ]
            }
        case MARK_COMPLETED:
            return {
                ...state,
                todos : state.todos.map(item =>{
                    if(item.id === action.payload) item.completed = !item.completed
                    return item
                })      
            }
        case ADD_TODO:
            return {
                ...state,
                todos: [
                    ...state.todos,
                    action.payload
                ]
            }
        
        case DELETE :
            return{
                ...state,
                todos: state.todos.filter(item => item.id !== action.payload)
            }

        case FILTER:
            return{
                ...state,
                // todos
            }
        default:
            return state
    }
}

export default TodoReducres