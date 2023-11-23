import { Console } from '@woowacourse/mission-utils';
import { PROMPTS } from '../constants/strings.js';

const InputView = {
  async readGuess() {
    const input = await Console.readLineAsync(PROMPTS.guessNumbers);
    return input;
  },

  async readReplay() {
    const input = await Console.readLineAsync(PROMPTS.replayOrQuit);
    return input;
  },
};

export default InputView;
