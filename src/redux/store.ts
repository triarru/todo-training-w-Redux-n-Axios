import { applyMiddleware, createStore } from "redux";
import {
  ADD_TODO,
  DELETE_TODO,
  CHECK_TODO,
  UPDATE_TODO,
  GET_TODO,
  SET_TODO,
  SET_FILTER,
} from "./action";
import thunk from "redux-thunk";

export interface ITodo {
  id: number;
  name: string;
  isCompleted: boolean;
  deadline: string;
}

export enum EFilter{
  ALL,
  ACTIVE,
  COMPLETE
}

export interface IState {
  todoList: ITodo[];
}

const initialState: IState = {
  todoList: [
    {
      id: 1,
      name: "Todo 1",
      isCompleted: false,
      deadline: "",
    },
  ],
};

const addTodo = (todoList: ITodo[], todo: string) => {
  return [...todoList, todo];
};

const checkTodo = (todoList: ITodo[], id: ITodo) => {

  return todoList.map((todo: ITodo) => {
    if (todo.id === id.id) {
      const completed = todo.isCompleted;
      return {
        ...todo,
        isCompleted: !completed,
      };
    } else return todo;
  });
};

const deleteTodo = (todoList: ITodo[], id: number) => {
  return todoList.filter((todo) => todo.id !== id);
};

const updateTodo = (todoList: ITodo[], name: ITodo) => {
  return todoList.map((todo: ITodo) => {
    if (todo.id === name.id) {
      const newName = name.name;
      const newDeadline = name.deadline
      return {
        ...todo,
        name: newName,
        deadline: newDeadline
      };
    } else return todo;
  });
};

const setFilter = (todoList: ITodo[], filter: EFilter) => {
  const newList = [...todoList];
  if (filter === EFilter.COMPLETE) {
    return newList.filter((todo) => todo.isCompleted === true);
  } else if (filter === EFilter.ACTIVE) {
    return newList.filter((todo) => todo.isCompleted === false);
  } else {
    return newList;
  }
};

const appReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case ADD_TODO: {
      return {
        ...state,
        todoList: addTodo(state.todoList, action.payload),
        todoListFilter: addTodo(state.todoList, action.payload),
      };
    }

    case UPDATE_TODO: {
      return {
        ...state,
        todoList: updateTodo(state.todoList, action.payload),
        todoListFilter: updateTodo(state.todoList, action.payload),
      };
    }

    case CHECK_TODO: {
      return {
        ...state,
        todoList: checkTodo(state.todoList, action.payload),
        todoListFilter: checkTodo(state.todoList, action.payload),
      };
    }

    case DELETE_TODO: {
      return {
        ...state,
        todoList: deleteTodo(state.todoList, action.payload),
        todoListFilter: deleteTodo(state.todoList, action.payload),
      };
    }

    case SET_TODO: {
      return {
        ...state,
        todoList: action.payload,
        todoListFilter: action.payload,
      };
    }

    case GET_TODO: {
      return {
        ...state,
        todoList: action.payload,
      };
    }

    case SET_FILTER: {
      return {
        ...state,
        filter: action.payload,
        todoList: setFilter(state.todoListFilter, action.payload),
      };
    }

    default:
      return state;
  }
};

export const store = createStore(appReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof appReducer>;

export default store;
