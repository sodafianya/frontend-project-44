import { getRandomNumber } from '../utils.js';

export const generateRound = () => {
  const number = getRandomNumber();
  const question = String(number);
  const answer = number % 2 === 0 ? 'yes' : 'no';
  return [question, answer];
};

export const rules = 'Answer "yes" if the number is even, otherwise answer "no".';