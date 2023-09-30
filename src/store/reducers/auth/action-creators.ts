import { AppDispatch } from "../..";
import { UserInterface } from "../../../models/User";
import {
  AuthActionsEnum,
  SetAuthAction,
  SetErrorAction,
  SetIsLoadingAction,
  SetUserAction,
} from "./types";
import UserService from "../../../api/UserService";

export const AuthActionCreators = {
  setUser: (user: UserInterface): SetUserAction => ({
    type: AuthActionsEnum.SET_USER,
    payload: user,
  }),
  setIsAuth: (isAuth: boolean): SetAuthAction => ({
    type: AuthActionsEnum.SET_AUTH,
    payload: isAuth,
  }),
  setIsLoading: (isLoading: boolean): SetIsLoadingAction => ({
    type: AuthActionsEnum.SET_IS_LOADING,
    payload: isLoading,
  }),
  setError: (error: string): SetErrorAction => ({
    type: AuthActionsEnum.SET_ERROR,
    payload: error,
  }),
  login: (username: string, password: string) => (dispatch: AppDispatch) => {
    try {
      dispatch(AuthActionCreators.setIsLoading(true));
      setTimeout(async () => {
        const responce = await UserService.getUsers();
        const mockUser = responce.data.find(
          (el) => el.username === username && el.password === password
        );
        if (mockUser) {
          localStorage.setItem("isAuth", "true");
          localStorage.setItem("username", mockUser.username);
          dispatch(AuthActionCreators.setUser(mockUser));
          dispatch(AuthActionCreators.setIsAuth(true));
        } else {
          AuthActionCreators.setError("Wrong username or password");
        }
        dispatch(AuthActionCreators.setIsLoading(false));
      }, 1000);
    } catch (e) {
      dispatch(
        AuthActionCreators.setError("An error occured while logging in")
      );
    }
  },
  logout: () => (dispatch: AppDispatch) => {
    dispatch(AuthActionCreators.setIsLoading(true));
    localStorage.removeItem("username");
    localStorage.removeItem("isAuth");
    dispatch(AuthActionCreators.setIsAuth(false));
    dispatch(AuthActionCreators.setUser({} as UserInterface));
  },
};
