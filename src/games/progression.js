import { getRandomNumber } from '../utils.js';

const generateProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i);
  }
  return progression;
};

export const generateRound = () => {
  const start = getRandomNumber(1, 50);
  const step = getRandomNumber(1, 10);
  const length = getRandomNumber(5, 10);
  const hiddenIndex = getRandomNumber(0, length - 1);
  
  const progression = generateProgression(start, step, length);
  const answer = String(progression[hiddenIndex]);
  
  progression[hiddenIndex] = '..';
  const question = progression.join(' ');

  return [question, answer];
};

export const rules = 'What number is missing in the progression?';