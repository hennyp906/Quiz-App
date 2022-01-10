import {URL} from '../../constants/config';

export const saveQuizResult = async (
  questionId,
  option,
  isCorrect,
  description,
) => {
  const response = await fetch(`${URL}/submit/`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      questionId: questionId,
      selectedOption: option,
      isCorrect: isCorrect,
      descAnswer: description,
    }),
  });

  const resData = await response.json();
  return resData;
};
