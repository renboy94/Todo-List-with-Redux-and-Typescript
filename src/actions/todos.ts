import {ActionTypes} from './types';
import {
  AddTodoAction,
  FetchTodosAction,
  EditTodoAction,
  CompleteTodoAction,
  DeleteTodoAction,
} from './interface';

export const addTodo = (text: string): AddTodoAction => {
  return {
    type: ActionTypes.addTodo,
    payload: text,
  };
};

export const fetchTodos = (): FetchTodosAction => {
  return {
    type: ActionTypes.fetchTodos,
  };
};

export const editTodo = (id: string, text: string): EditTodoAction => {
  return {
    type: ActionTypes.editTodo,
    payload: {id, text},
  };
};

export const completeTodo = (
  id: string,
  completed: boolean,
): CompleteTodoAction => {
  return {
    type: ActionTypes.completeTodo,
    payload: {id, completed},
  };
};

export const deleteTodo = (id: string): DeleteTodoAction => {
  return {
    type: ActionTypes.deleteTodo,
    payload: id,
  };
};
