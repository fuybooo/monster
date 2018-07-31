import {post} from './index';
export const getMenus = (params: any) => post('/menus', params);