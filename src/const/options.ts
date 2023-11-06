import { LOAI_GIAY_TO, TRANG_THAI_KET_NOI } from './consts';

export const loaiCuaHangOptions = [
  {
    label: 'Offline',
    value: TRANG_THAI_KET_NOI.OFFLINE,
  },
  {
    label: 'Online',
    value: TRANG_THAI_KET_NOI.ONLINE,
  },
];

export const loaiGiayToOption = [
  {
    label: 'CCCD gắn chip',
    value: LOAI_GIAY_TO.IDENT,
  },
  {
    label: 'Passport',
    value: LOAI_GIAY_TO.PASSPORT,
  }
]