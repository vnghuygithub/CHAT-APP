import { IMyCardItemProps } from '@/components/core/card-item';
export interface IVoucherData {
  title: string;
  voucherCode: string;
  valueVoucher: string;
  fromDate: string;
  toDate: string;
  coverUrl: string;
  id: string;
}
export interface IVoucherDataList extends IMyCardItemProps {
  listCardData: IListVoucher[];
  loading: boolean;
  setIsShowDatail: any;
  isShowDatail: boolean;
  setCodeVoucherSelected: any;
}

export interface IGetListVouchersParams {
  ApiKey?: string;
  Token?: string;
  UserName: string;
  Id: string;
  KeyValue: string;
}

// GetVoucher By Code
export interface IGetListVoucherByCode {
  status: string;
  result: IGetListVoucherByCodeData;
}

export interface IGetListVoucherByCodeData {
  Id: number;
  Name: string;
  UserName: string;
  Phone: string;
  Email: string;
  IdCard: any;
  IdCardDate: string;
  BirthDay: string;
  Gender: string;
  AttachmentFiles: any;
  StrListVoucher: string;
  StrListBeneficiary: string;
  ListVoucher: IListVoucher[];
  ListBeneficiary: any[];
}

export interface IListVoucher {
  Type: number;
  VoucherType: string;
  NumberUse: number;
  MaximunAmount: number;
  Code: string;
  Name: string;
  Value: number;
  PaymentId: number;
  PaymentName: string;
  DepartmentId: number;
  DepartmentName: string;
  DateStart: string;
  DateEnd: string;
  Description: string;
  AppConditions: string;
  AttachmentFile: string;
  CustomerName: string;
  Phone: string;
  Email: string;
  IdCard: string;
  HotelName: string;
  HotelId: string;
  IsPercent: string;
  Status: string;
  ValueType: string;
  RoomTypeId: string;
  RoomTypeName: string;
  ListHotel: string;
  UserBeneficialFullName: string;
  UserBeneficialPhone: string;
  UserBeneficialEmail: string;
  UserBeneficialIdCard: string;
  UserBeneficialAttachmentFiles: string;
  Message: string;
  IsError: boolean;
  AmountRemain: number;
  ImageVoucher: string;
  ListHistory: any[];
}

// History information
export interface IHistoryByCodeParams {
  ApiKey?: string;
  Token?: string;
  UserName: string;
  Code: string;
}

export interface IHistoryByCodeResult {
  status: string;
  result: IHistoryByCodeData;
}

export interface IHistoryByCodeData {
  Type: number;
  VoucherType: string;
  NumberUse: number;
  MaximunAmount: number;
  Code: string;
  Name: string;
  Value: string;
  PaymentId: number;
  PaymentName: string;
  DepartmentId: number;
  DepartmentName: string;
  DateStart: string;
  DateEnd: string;
  Description: string;
  AppConditions: string;
  AttachmentFile: string;
  ImageVoucher: string;
  CustomerName: string;
  Phone: string;
  Email: string;
  IdCard: string;
  HotelName: string;
  HotelId: string;
  IsPercent: string;
  Status: string;
  ValueType: string;
  RoomTypeId: string;
  RoomTypeName: string;
  ListHotel: string;
  UserBeneficialFullName: string;
  UserBeneficialPhone: string;
  UserBeneficialEmail: string;
  UserBeneficialIdCard: string;
  UserBeneficialAttachmentFiles: any;
  Message: string;
  IsError: boolean;
  AmountRemain: string;
  ListHistory: IListHistory[];
}

export interface IListHistory {
  AmountUse: number;
  AmountRemain: number;
  TranCode: string;
  HotelName: string;
  CreatedDate: string;
  NameUse: string;
  VoucherType: string;
  DataCustomer: string;
  Message: string;
  IsError: boolean;
}

export interface ISaleLocationParams{
  ApiKey?: string;
  Token?: string;
  UserName: string;
  Code: string;
}
export interface ISaleLocationResult {
  status: string;
  result: ISaleLocationData[];
  reason?: string;
  message?: string;
}
export interface ISaleLocationData {
  HotelName: string;
  HotelCode: string;
  SaleLocations: ISaleLocation[]
}
export interface ISaleLocation{
  HotelName: string;
  HotelCode: string;
  SaleName: string;
  SaleCode: string;
}