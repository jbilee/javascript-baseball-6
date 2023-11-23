import { Console } from '@woowacourse/mission-utils';
import { MATCHES, MESSAGES } from '../constants/strings.js';

const OutputView = {
  printGameStart() {
    Console.print(MESSAGES.startGame);
  },

  printMatches({ ballCount, strikeCount }) {
    if (ballCount && strikeCount) {
      return Console.print(
        `${ballCount}${MATCHES.ball} ${strikeCount}${MATCHES.strike}`,
      );
    }
    if (ballCount) {
      return Console.print(`${ballCount}${MATCHES.ball}`);
    }
    if (strikeCount) {
      return Console.print(`${strikeCount}${MATCHES.strike}`);
    }
    return Console.print(MATCHES.nothing);
  },

  printGameEnd() {
    Console.print(MESSAGES.winGame);
  },
};

export default OutputView;
