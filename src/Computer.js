import { Random } from '@woowacourse/mission-utils';
import { GAMEPLAY_SETTINGS, INITIAL_COUNT, COUNT_INCREMENT } from './constants/numbers.js';

class Computer {
  #numbers;

  constructor() {
    this.#numbers = this.#generateRandomNumbers();
  }

  #generateRandomNumbers = () => {
    const randomNumbers = [];

    while (randomNumbers.length < GAMEPLAY_SETTINGS.digits) {
      const newNumber = Random.pickNumberInRange(
        GAMEPLAY_SETTINGS.lowestGuess,
        GAMEPLAY_SETTINGS.highestGuess,
      );
      if (!randomNumbers.includes(newNumber)) {
        randomNumbers.push(newNumber);
      }
    }

    return randomNumbers;
  };

  findMatches(userGuess) {
    const matches = { ballCount: INITIAL_COUNT, strikeCount: INITIAL_COUNT };

    userGuess.forEach((numberGuessed, i) => {
      if (numberGuessed === this.#numbers[i]) {
        return (matches.strikeCount += COUNT_INCREMENT);
      }
      if (this.#numbers.includes(numberGuessed)) {
        return (matches.ballCount += COUNT_INCREMENT);
      }
    });

    return matches;
  }
}

export default Computer;
