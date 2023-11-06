import { createSlice, PayloadAction, Dispatch } from '@reduxjs/toolkit';
import { LoginState } from '@/interface/user/user';
import { getGlobalState } from '@/utils/getGloabal';

const initialState: LoginState = {
  ...getGlobalState(),
  userName: localStorage.getItem('username') || '',
  IdUser: localStorage.getItem('IdUser') || '',
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setLoginInfo(state, action: PayloadAction<Partial<LoginState>>) {
      Object.assign(state, action.payload);
    },
    setisForgot(state, action: PayloadAction<Partial<LoginState>>) {
      Object.assign(state, action.payload);
    },
  },
});

export const { setLoginInfo } = loginSlice.actions;

export default loginSlice.reducer;

export const storeLoginAsync = (payload: LoginState) => {
  return async (dispatch: Dispatch) => {
    localStorage.setItem('username', payload.userName);
    localStorage.setItem('IdUser', payload.IdUser);
    dispatch(
      setLoginInfo({
        userName: payload.userName,
        IdUser: payload.IdUser,
      })
    );
    return true;
  };
};
