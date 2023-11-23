import Validate from '../src/Validate.js';

describe('유저 입력값에 대한 예외 처리', () => {
  test('소수점이 포함된 정수일 경우 예외를 발생시킨다', () => {
    const INPUT = '2.0';

    expect(() => {
      Validate.guess(INPUT);
    }).toThrow();
  });

  test('숫자가 아닐 경우 예외를 발생시킨다', () => {
    const INPUT = 'abc';

    expect(() => {
      Validate.guess(INPUT);
    }).toThrow();
  });

  test('1~9 범위 내의 숫자가 아닐 경우 예외를 발생시킨다', () => {
    const INPUT = '012';

    expect(() => {
      Validate.guess(INPUT);
    }).toThrow();
  });

  test('3자리 이상일 경우 예외를 발생시킨다', () => {
    const INPUT = '123456789';

    expect(() => {
      Validate.guess(INPUT);
    }).toThrow();
  });

  test('중복되는 숫자가 있을 경우 예외를 발생시킨다', () => {
    const INPUT = '112';

    expect(() => {
      Validate.guess(INPUT);
    }).toThrow();
  });
});
