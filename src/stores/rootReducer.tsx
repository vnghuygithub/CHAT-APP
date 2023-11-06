import { combineReducers } from '@reduxjs/toolkit';
import tagsViewReducer from './tags-view.store';
import globalReducer from './global.store';
import userReducer from './user.store';
import otpReducer from './otp.store';
import loginReducer from './login.store';
const rootReducer = combineReducers({
  tagsView: tagsViewReducer,
  user: userReducer,
  global: globalReducer,
  otp: otpReducer,
  login: loginReducer,
});

export default rootReducer;
