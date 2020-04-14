import {Todo, Action, ActionTypes} from '../actions';
import createUUID from '../helpers/createUUID';

const initialState: Todo[] = [
  {
    id: createUUID(),
    text: 'Milk',
    completed: false,
  },
  {
    id: createUUID(),
    text: 'Eggs',
    completed: false,
  },
  {
    id: createUUID(),
    text: 'Bread',
    completed: false,
  },
  {
    id: createUUID(),
    text: 'Juice',
    completed: false,
  },
  {
    id: createUUID(),
    text: 'Green Tea',
    completed: false,
  },
];

export const todosReducer = (state: Todo[] = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.fetchTodos:
      return state;
    case ActionTypes.addTodo:
      return [
        {
          id: createUUID(),
          text: action.payload,
          completed: false,
        },
        ...state,
      ];
    case ActionTypes.editTodo:
      return state.map((item: Todo) =>
        item.id === action.payload.id
          ? {
              ...item,
              id: action.payload.id,
              text: action.payload.text,
            }
          : item,
      );
    case ActionTypes.completeTodo:
      return state.map((item: Todo) =>
        item.id === action.payload.id
          ? {...item, completed: action.payload.completed}
          : item,
      );
    case ActionTypes.deleteTodo:
      return state.filter((todo: Todo) => todo.id !== action.payload);
    default:
      return state;
  }
};
