import {
  ITYPE_CONNECT, ITYPE_PAPER,
} from './types';

export const TRANG_THAI_KET_NOI: Record<ITYPE_CONNECT, number> = {
  ONLINE: 1,
  OFFLINE: 2,
};

export const LOAI_GIAY_TO: Record<ITYPE_PAPER, string> = {
  IDENT: 'ident',
  PASSPORT: 'passport',
};