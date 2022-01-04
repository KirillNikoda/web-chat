import { RootState } from '@modules/core/store/store';
import { createSelector } from 'reselect';

export const authState = (state: RootState) => state.authState;

export const isAuthenticated = createSelector(
  authState,
  (authState) => authState.isAuthenticated
);
