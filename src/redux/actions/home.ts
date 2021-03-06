import * as Types from '../action-types';
import {getLessons, getSliders} from '../../api/home';

export const setCurrentLesson = (currentLesson: any) => ({
  type: Types.SET_CURRENT_LESSON,
  currentLesson,
});
export const getSlider = () => (dispatch: any) => getSliders().then(sliders => dispatch({type: Types.GET_SLIDERS, sliders}));
export const getLesson = () => (dispatch: any, getState: any) => {
  const {currentLesson, lesson: {params, hasMore}} = getState().home;
  if (hasMore) {
    dispatch({type: Types.SET_LOADING_STATUS, loading: true});
    getLessons({currentLesson, ...params}).then(lessons => {
      dispatch({type: Types.SET_LOADING_STATUS, loading: false});
      dispatch({
        type: Types.GET_LESSONS,
        lessons
      });
    });
  }
};