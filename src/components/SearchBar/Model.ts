import { createEvent, createStore } from 'effector';

const inputChanged = createEvent<string>();

const $query = createStore<string>('').on(
  inputChanged,
  (_, text) => text
);

export { $query, inputChanged };
