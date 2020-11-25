import { ADD_DROP_ZONE } from '../types';

export const dragEnter = () => ({
  type: ADD_DROP_ZONE,
  payload: true,
});

export const dragOver = () => ({
  type: ADD_DROP_ZONE,
  payload: true,
});
