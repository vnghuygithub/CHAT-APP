import { createSlice, PayloadAction, Dispatch } from '@reduxjs/toolkit';
import { Locale, OtpState, UserState } from '@/interface/user/user';
import { getGlobalState } from '@/utils/getGloabal';
import Otp from '@/components/basic/otp';

const initialState: OtpState = {
  ...getGlobalState(),
  otp: '',
  isForgot: false,
};

const otpSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserOtp(state, action: PayloadAction<Partial<OtpState>>) {
      Object.assign(state, action.payload);
    },
    setisForgot(state, action: PayloadAction<Partial<OtpState>>) {
      Object.assign(state, action.payload);
    },
  },
});

export const { setUserOtp, setisForgot } = otpSlice.actions;

export default otpSlice.reducer;

export const storeOtpAsync = (payload: OtpState) => {
  return async (dispatch: Dispatch) => {
    localStorage.setItem('otp', JSON.stringify(payload.otp));
    dispatch(
      setUserOtp({
        otp: payload.otp,
      })
    );
    return true;
  };
};

export const storeisForgotAsync = (payload: OtpState) => {
  return async (dispatch: Dispatch) => {
    localStorage.setItem('isForgot', JSON.stringify(payload.isForgot));
    dispatch(
      setisForgot({
        isForgot: payload.isForgot,
      })
    );
    return true;
  };
};
