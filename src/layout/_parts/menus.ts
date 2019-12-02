import { IMenus } from '../types';

const menus: IMenus = {
  id: 0,
  reskey: 'aab',
  resourcesType: 0,
  resourcesName: '用户管理后台',
  resourceUrl: '',
  own: 1,
  suns: [
    {
      id: 1,
      reskey: 'abc',
      resourcesType: 0,
      resourcesName: '控制台',
      resourceUrl: 'console',
      own: 0,
    },
    {
      id: 2,
      reskey: 'acd',
      resourcesType: 0,
      resourcesName: '其它',
      resourceUrl: 'other',
      own: 0,
    },
  ],
};

export default menus;
