import * as Types from '../action-types';
import {getMenus} from "../../api/api-doc";

const transferNode = (list: any[]) => list.map((item: any) => ({
  ...item,
  title: item.name,
  key: item.id,
  isLeaf: item.type !== 1 // 1: 有子节点的文件夹 2：文件 3：没有子节点的文件夹
}));
export const getMenu = (params = {pid: 0}, isAppend = false) => (dispatch: any) => getMenus(params).then(menuList => dispatch({type: isAppend ? Types.APPEND_MENUS : Types.GET_MENUS, menuList: transferNode(menuList)}));
export const appendMenu = (params: any, isAppend = true) => getMenu(params, isAppend);
export const afterAppendMenu = () => (dispatch: any) => dispatch({type: Types.AFTER_APPEND_MENUS});
