import * as Types from '../action-types';
import {getSliders} from '../../api/home';

export const setCurrentLesson = (value: any) => ({type: Types.SET_CURRENT_LESSON, value});
export const getSlider = () => (dispatch: any) => getSliders().then(sliders => dispatch({type: Types.GET_SLIDERS, sliders}));