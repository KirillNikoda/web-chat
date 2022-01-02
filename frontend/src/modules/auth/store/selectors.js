import { createSelector } from 'reselect';

export const authState = (state) => state.authState;

export const isAuthenticated = createSelector(
  authState,
  (authState) => authState.isAuthenticated
);
