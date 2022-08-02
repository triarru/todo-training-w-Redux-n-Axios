// kho chung để dùng cho các components con
import { createStore, applyMiddleware  } from "redux";
import thunk from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension";
import {
    ADD_TODO,  DELETE_TODO,
    GET_TODOS, SET_FILTER,
    SET_TODOS, TOGGLE_TODO,
    UPDATE_TODO
} from "./actions";


// trong 1 cái kho cần có 
//1.Reducer: là 1 function dùng để cập nhật lại các giá trị state trong kho chung dựa trến các actions hiện tại
//2.initValue: khi tạo ra cái kho mà muốn xét 1 số giá trị mặc định nào đó
//3.enhacncers: mít đồ where(thunk)

// const composedEndacncers = composeWithDevTools();

const initState = {
    todoList: [],
    filter: 'All',
    todoListFilter: [],
    // success:''
}

const addtodo = (todoList, todo) => {
    // console.log(todoList)
    console.log([todo,...todoList])
    return[todo,...todoList]

}

const checkTodo = (todoList,id) => 
    // console.log(todoList)
    todoList.map(todo => {
        if(todo.id === id) {
            // console.log(todo)
            return{
                ...todo,
                complete :!todo.complete
            }
            // console.log(todoList)
        }else{
            return todo
        }
    })

const deleteTodo = (todoList, id) => {
    return todoList.filter(e => e.id !== id)
}

const editTodo = (todoList, todo) => 
    // console.log(todo)
    todoList.map(e => {
        if(e.id === todo.id) {
            return todo
        }else {
            return e
        }
    })

    

const setFilter = (todoList, filter) => {
    // const newList = [...todoList];
    // console.log(todoList)
    if (filter === "All") {
        // console.log(newList)    
        return todoList;
    } else if (filter === "Active") {
        // console.log(newList)    
       const listActive =  todoList.filter((todo) => todo.complete === false);
        console.log(listActive)
        return listActive
        // console.log(todoList)
        
    } else if (filter === "Completed"){
        // console.log(newList)    
        console.log(todoList.filter((todo) => todo.complete === true));
        return todoList.filter((todo) => todo.complete === true)
    }
    console.log(todoList)
};



const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_TODO :
            console.log(action.payload)
            return{
                ...state,
                todoList : addtodo(state.todoList, action.payload),
                todoListFilter: addtodo(state.todoList, action.payload)
            }
            
        case TOGGLE_TODO :
            return{
                ...state,
                todoList: checkTodo(state.todoList, action.payload),
                todoListFilter: checkTodo(state.todoList, action.payload)
            }
        
        case DELETE_TODO:
            return {
                ...state,
                todoList: deleteTodo(state.todoList, action.payload),
                todoListFilter: deleteTodo(state.todoList, action.payload)
            }
            
        case UPDATE_TODO :
            return {
                ...state,
                todoList: editTodo(state.todoList, action.payload),
                todoListFilter: editTodo(state.todoList, action.payload)
            }
        
        case SET_FILTER :
            return {
                ...state,
                filter : action.payload,
                todoList: setFilter(state.todoListFilter, action.payload)
            }
        case SET_TODOS :
            return {
                ...state,
                todoList: action.payload,
                todoListFilter: action.payload
            }

        case GET_TODOS:
            return {
                ...state,
                todoList: action.payload
            }
        default:
            return state    
    }
} 

const store = createStore(rootReducer, applyMiddleware(thunk));

// export type RootState = ReturnType<typeof appReducer>;

export default store