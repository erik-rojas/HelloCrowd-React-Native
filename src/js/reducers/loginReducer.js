import { ActionTypes } from '../constants/constants'

const initialState = {
  user: {},
  token: null
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.LOGIN_USER:
      return {
        ...state
      }
    case ActionTypes.LOGIN_USER_SUCCESS:
      return {
        ...state
      }
    case ActionTypes.LOGIN_USER_FAIL:
      return {
        ...state
      }
    default:
      return state
  }
}