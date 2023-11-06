import { request, requestMock } from './request';
import { USER } from '@/api/constApi';
import {
  LoginParams,
  ILogoutParams,
  ILogoutResult,
  ICheckUserParams,
  IUpdateAccountParams,
  IConfirmOtpParams,
  ICreateAccountParams,
  IForgotPasswordParams,
  ApiResult,
} from '../interface/user/login';

/** Login */
export const apiLogin = (data: LoginParams) => {
  const body = {
    username: data.username,
    password: data.password,
  };
  return request<ApiResult>('post', '/login', body);
};
/** Check User */
export const apiCheckUser = (data: ICheckUserParams) => {
  const body = {
    ApiKey: '',
    Token: '',
    UserName: data,
  };
  return request<ApiResult>('post', '/checklogin', body);
};
/** Update Acount */
export const apiUpdateAccount = (data: IUpdateAccountParams) => {
  const body = {
    ApiKey: '',
    Token: '',
    Otp: data.Otp,
    UserName: data.UserName,
    Password: data.Password,
    RePassword: data.RePassword,
  };
  return request<ApiResult>('post', '/createpasswordlogin', body);
};
/** Logout */
export const apiLogout = (data: ILogoutParams) => {
  const body = {
    Token: data.Token,
    UserName: data.userName,
  };
  return request<ApiResult>('post', '/logout', body);
};
/** Create Account */
export const apiCreateAccount = (data: ICreateAccountParams) => {
  const body = {
    ApiKey: '',
    Token: '',
    UserName: data,
  };
  return request<ApiResult>('post', '/createlogin', body);
};
/** Comfirm OTP */
export const apiConfirmOtp = (data: IConfirmOtpParams) => {
  const body = {
    Otp: data.Otp,
    UserName: data.UserName,
  };
  return request<ApiResult>('post', '/confirmotp', body);
};
/** Forgot password */
export const apiForgotPassword = (data: IForgotPasswordParams) => {
  const body = {
    UserName: data,
  };
  return request<ApiResult>('post', '/forgetlogin', body);
};
