import {ActionTypes} from './types';

export interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

export interface FetchTodosAction {
  type: ActionTypes.fetchTodos;
}

export interface AddTodoAction {
  type: ActionTypes.addTodo;
  payload: string;
}

export interface EditTodoAction {
  type: ActionTypes.editTodo;
  payload: {
    id: string;
    text: string;
  };
}

export interface CompleteTodoAction {
  type: ActionTypes.completeTodo;
  payload: {
    id: string;
    completed: boolean;
  };
}

export interface DeleteTodoAction {
  type: ActionTypes.deleteTodo;
  payload: string;
}
