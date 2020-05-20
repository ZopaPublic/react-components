export interface MockDate {
  startMocking(): void;
  finishMocking(): void;
}

export function mockDate(date: Date): MockDate {
  const RealDate = Date;

  return {
    startMocking() {
      global.Date = jest.fn(() => date) as any;
      global.Date.UTC = RealDate.UTC;
      global.Date.parse = RealDate.parse;
      global.Date.now = RealDate.now;
    },
    finishMocking() {
      global.Date = RealDate;
    },
  };
}
