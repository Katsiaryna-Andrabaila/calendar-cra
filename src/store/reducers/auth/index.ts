import { UserInterface } from "../../../models/User";
import { AuthState, AuthAction, AuthActionsEnum } from "./types";

const initialState: AuthState = {
  isAuth: false,
  user: {} as UserInterface,
  isLoading: false,
  error: "",
};

export default function authReducer(
  state: AuthState = initialState,
  action: AuthAction
): AuthState {
  switch (action.type) {
    case AuthActionsEnum.SET_AUTH:
      return { ...state, isAuth: action.payload, isLoading: false };
    case AuthActionsEnum.SET_USER:
      return { ...state, user: action.payload };
    case AuthActionsEnum.SET_IS_LOADING:
      return { ...state, isLoading: action.payload };
    case AuthActionsEnum.SET_ERROR:
      return { ...state, error: action.payload, isLoading: false };
    default:
      return state;
  }
}
