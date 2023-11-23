import { Random } from '@woowacourse/mission-utils';
import Computer from '../src/Computer.js';

const mockRng = (mockValues) => {
  Random.pickNumberInRange = jest.fn();
  mockValues.reduce((acc, cur) => {
    return acc.mockReturnValueOnce(cur);
  }, Random.pickNumberInRange);
};

describe('Computer 클래스 테스트', () => {
  test('숫자 매칭 기능 테스트', () => {
    const RANDOM_NUMBERS = [1, 2, 3];
    const GUESSES = [
      [4, 5, 6],
      [1, 4, 2],
      [2, 1, 4],
      [1, 4, 3],
      [1, 2, 3],
    ];
    const MATCHES = [
      { ballCount: 0, strikeCount: 0 },
      { ballCount: 1, strikeCount: 1 },
      { ballCount: 2, strikeCount: 0 },
      { ballCount: 0, strikeCount: 2 },
      { ballCount: 0, strikeCount: 3 },
    ];

    mockRng(RANDOM_NUMBERS);

    const computer = new Computer();

    for (let i = 0; i < GUESSES.length; i += 1) {
      expect(computer.findMatches(GUESSES[i])).toEqual(MATCHES[i]);
    }
  });
});
