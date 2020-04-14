import {
  FetchTodosAction,
  AddTodoAction,
  EditTodoAction,
  CompleteTodoAction,
  DeleteTodoAction,
} from './interface';

export enum ActionTypes {
  addTodo = 'ADD_TODO',
  fetchTodos = 'FETCH_TODOS',
  editTodo = 'EDIT_TODO',
  completeTodo = 'COMPLETE_TODO',
  deleteTodo = 'DELETE_TODO',
}

export type Action =
  | FetchTodosAction
  | AddTodoAction
  | EditTodoAction
  | CompleteTodoAction
  | DeleteTodoAction;
