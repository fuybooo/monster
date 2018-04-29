import * as Types from '../action-types';
const initState = {
  currentLesson: 0,
  sliders: [],
  lesson: {
    hasMore: true,
    list: [],
    params: {
      page_number: 1,
      page_size: 5
    }
  }
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
      break;
    case Types.GET_LESSONS:
      newState = {
        lesson: {
          ...state.lesson,
          list: [...state.lesson.list, ...action.lessons.list],
          params: {
            ...state.lesson.params, page_number: state.lesson.params.page_number + 1
          }
        }
      };
      break;
  }
  return {...state, ...newState};
}