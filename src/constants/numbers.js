export const GAMEPLAY_SETTINGS = {
  digits: 3,
  lowestGuess: 1,
  highestGuess: 9,
};

export const INITIAL_COUNT = 0;
export const COUNT_INCREMENT = 1;
export const STRIKE_CONDITION = 3;
export const REPLAY_OPTION = 1;

export const REGEX = {
  numbersToGuess: /^[1-9]+$/, // 1~9 사이의 숫자만 입력 받음
  gameplayOption: /^[12]$/, // 1 또는 2만 입력 받음
};
