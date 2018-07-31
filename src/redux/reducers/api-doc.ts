import * as Types from '../action-types';
const initState = {
  menuList: [],
  currentMenuList: [],
  expandedKeys: [],
  autoExpandParent: true,
};
export default (state = initState, action: any) => {
  let newState = {};
  switch (action.type) {
    case Types.GET_MENUS:
      newState = {
        menuList: action.menuList
      };
      break;
    case Types.APPEND_MENUS:
      newState = {
        currentMenuList: action.menuList,
      };
      break;
    case Types.AFTER_APPEND_MENUS:
      newState = {
        menuList: state.menuList,
      };
      break;
  }
  return {...state, ...newState};
}