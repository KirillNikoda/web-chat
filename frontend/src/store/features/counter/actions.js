import { DECREMENT, INCREMENT } from './actionTypes';

export const incrementAC = (counterValue) => ({
  type: INCREMENT,
});

export const decrementAC = (counterValue) => ({
  type: DECREMENT,
});
