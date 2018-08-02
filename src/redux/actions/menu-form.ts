import * as Types from '../action-types';
export const save = (visible: boolean = true) => (dispatch: any) => dispatch({type: Types.CHANGE_MODEL_VISIBLE, visible});