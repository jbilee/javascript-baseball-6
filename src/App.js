import Computer from './Computer.js';
import Validate from './Validate.js';
import InputView from './utils/InputView.js';
import OutputView from './utils/OutputView.js';
import { STRIKE_CONDITION, REPLAY_OPTION, REGEX } from './constants/numbers.js';

class App {
  #computer;

  constructor() {
    this.#setNewGame();
    OutputView.printGameStart();
  }

  #setNewGame() {
    this.#computer = new Computer();
  }

  async play() {
    const userGuess = await this.getUserGuess();
    const matches = this.#computer.findMatches(userGuess);

    OutputView.printMatches(matches);

    return this.checkResults(matches);
  }

  async getUserGuess() {
    const userGuess = await InputView.readGuess();

    Validate.guess(userGuess);

    return userGuess.split('').map((x) => Number(x));
  }

  checkResults(matches) {
    if (matches.strikeCount === STRIKE_CONDITION) {
      OutputView.printGameEnd();
      return this.askForReplay();
    }

    return this.play();
  }

  async askForReplay() {
    const input = await InputView.readReplay();

    if (!REGEX.gameplayOption.test(input)) {
      throw new Error('[ERROR]');
    }
    if (Number(input) === REPLAY_OPTION) {
      this.#setNewGame();
      return this.play();
    }
  }
}

export default App;
