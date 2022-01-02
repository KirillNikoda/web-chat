import { DECREMENT, INCREMENT } from './actionTypes';

export const incrementAC = () => ({
  type: INCREMENT,
});

export const decrementAC = () => ({
  type: DECREMENT,
});
