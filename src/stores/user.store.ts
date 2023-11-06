import { createSlice, PayloadAction, Dispatch } from '@reduxjs/toolkit';
import {
  apiCheckUser,
  apiCreateAccount,
  apiLogin,
  apiLogout,
} from '@/api/user.api';
import {
  LoginParams,
  Role,
  ApiResult,
  ICheckUserParams,
} from '@/interface/user/login';
import { Locale, OtpState, UserState } from '@/interface/user/user';
import { createAsyncAction } from './utils';
import { getGlobalState } from '@/utils/getGloabal';
import store from '@/stores';
import { setGlobalState } from '@/stores/global.store';
import { setUserOtp } from './otp.store';
import { setLoginInfo } from './login.store';

const initialState: UserState = {
  ...getGlobalState(),

  locale: (localStorage.getItem('locale')! || 'vi_VN') as Locale,
  newUser: JSON.parse(localStorage.getItem('newUser')!) ?? true,
  menuList: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserItem(state, action: PayloadAction<Partial<UserState>>) {
      Object.assign(state, action.payload);
    },
    setUserOtp(state, action: PayloadAction<Partial<OtpState>>) {
      Object.assign(state, action.payload);
    },
  },
});

export const { setUserItem } = userSlice.actions;

export default userSlice.reducer;

export const logoutAsync = () => {
  return async (dispatch: Dispatch) => {
    localStorage.clear();
    dispatch(
      setLoginInfo({
        userName: '',
        IdUser: '',
      })
    );
    dispatch(
      setUserOtp({
        otp: '',
      })
    );
    store.dispatch(
      setGlobalState({
        loading: false,
      })
    );
    return true;
  };
};
