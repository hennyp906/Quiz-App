import { SET_QUESTIONS } from "../actions/questions";

const initialState = {
  questions: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_QUESTIONS:
      return {
        questions: action.questions,
      };
    default:
      return state;
  }
};
