import {URL} from '../../constants/config';
export const SET_QUESTIONS = 'SET_QUESTIONS';

export const getQuestions = () => {
  return async dispatch => {
    const response = await fetch(`${URL}/questions/`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    });

    if (!response.status) {
      const errorResData = await response.json();
      console.log(errorResData);
      let message = 'Something went wrong!';
      if (errorResData.message) message = errorResData.message;
      throw new Error(message);
    }
    const resData = await response.json();

    dispatch({
      type: SET_QUESTIONS,
      questions: resData.questions,
    });
  };
};
