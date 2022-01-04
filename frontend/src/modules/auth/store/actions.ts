import { SET_IS_AUTHENTICATED } from '@modules/auth/store/actionTypes';

export const setIsAuthenticatedAC = (payload: boolean) => ({
  type: SET_IS_AUTHENTICATED,
  payload,
});
