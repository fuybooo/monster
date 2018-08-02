import * as Types from '../action-types';
export const changeModelVisible = (visible: boolean = true) => (dispatch: any) => dispatch({type: Types.CHANGE_MODEL_VISIBLE, visible});