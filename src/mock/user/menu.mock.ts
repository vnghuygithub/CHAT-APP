import { MenuList } from '@/interface/layout/menu.interface';
import { mock, intercepter } from '../config';
const mockMenuList: MenuList = [
  {
    code: 'vouchersList',
    label: {
      en_US: 'Danh sách Voucher',
      vi_VN: 'Danh sách Voucher',
    },
    icon: 'voucher',
    path: '/voucherlist',
  },
  {
    code: 'vouchersList',
    label: {
      en_US: 'Người thụ hưởng',
      vi_VN: 'Người thụ hưởng',
    },
    icon: 'beneficiary',
    path: '/benficiary',
  },
];

mock.mock('/user/menu', 'get', intercepter(mockMenuList));
