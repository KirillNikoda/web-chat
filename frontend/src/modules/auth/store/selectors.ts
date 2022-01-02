import { createSelector } from 'reselect';

export const authState = (state: any) => state.authState;

export const isAuthenticated = createSelector(
  authState,
  (authState) => authState.isAuthenticated
);
