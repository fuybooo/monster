import * as Types from '../action-types';
const initState = {
  modalVisible: false
};
export default (state = initState, action: any) => {
  let newState = {};
  switch (action.type) {
    case Types.CHANGE_MODEL_VISIBLE:
      newState = {
        modalVisible: action.visible
      };
      break;
  }
  return {...state, ...newState};
}