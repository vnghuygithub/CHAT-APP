/** user's role */
export type Role = 'guest' | 'admin';

// Result Data
export interface ApiResult {
  status: string;
  result: IApiResultData;
}

export interface IApiResultData {
  Id: string;
  Token: string;
  UserName: any;
  IsError: boolean;
  Message: string;
}

// Login
export interface LoginParams {
  /** 用户名 */
  username: string;
  /** 用户密码 */
  password: string;
}
// Check User Exist
export interface ICheckUserParams {
  ApiKey: string;
  Token: string;
  UserName: string;
  Id: string;
}
// Create Account
export interface ICreateAccountParams {
  ApiKey: string;
  Token: string;
  UserName: string;
}

// Logout
export interface ILogoutParams {
  userName: string;
  Token?: string;
}

export interface ILogoutResult {}
// Update Account
export interface IUpdateAccountParams {
  ApiKey: string;
  Token: string;
  Otp: string;
  UserName: string;
  Password: string;
  RePassword: string;
}

// Confirm OTP
export interface IConfirmOtpParams {
  Otp: string;
  UserName?: string;
}
// Forgot Password
export interface IForgotPasswordParams {
  userName: string;
}
