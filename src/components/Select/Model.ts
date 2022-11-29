import { createEvent, createStore } from 'effector';
import type { Region } from 'src/types/types';

const filterChanged = createEvent<Region>();

const $filter = createStore<Region>('all').on(
  filterChanged,
  (_, result) => result
);

export { $filter, filterChanged };
