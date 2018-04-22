import * as Types from '../action-types';
const initState = {
  currentLesson: 0,
  sliders: []
};
export default (state = initState, action: any) => {
  let newState = {};
  switch (action.type) {
    case Types.SET_CURRENT_LESSON:
      newState = {
        currentLesson: action.value
      };
      break;
    case Types.GET_SLIDERS:
      newState = {
        sliders: action.sliders
      };
  }
  return {...state, ...newState};
}