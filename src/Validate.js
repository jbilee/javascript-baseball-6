import { GAMEPLAY_SETTINGS, REGEX } from './constants/numbers.js';
import hasDuplicateChar from './utils/utilities.js';

const Validate = {
  guess(input) {
    if (!REGEX.numbersToGuess.test(input)) {
      throw new Error('[ERROR]');
    }
    if (hasDuplicateChar(input)) {
      throw new Error('[ERROR]');
    }
    if (input.length !== GAMEPLAY_SETTINGS.digits) {
      throw new Error('[ERROR]');
    }
  },
};

export default Validate;
