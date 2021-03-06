import { removePipe } from './test-utils';
import { GetDatePipe } from './get-date.pipe';
import { GetDayOfYearPipe } from './get-day-of-year.pipe';
import { GetDayPipe } from './get-day.pipe';
import { GetDaysInMonthPipe } from './get-days-in-month.pipe';
import { GetDaysInYearPipe } from './get-days-in-year.pipe';
import { GetHoursPipe } from './get-hours.pipe';
import { GetISODayPipe } from './get-iso-day.pipe';
import { GetISOWeekPipe } from './get-iso-week.pipe';
import { GetISOWeeksInYearPipe } from './get-iso-weeks-in-year.pipe';
import { GetISOYearPipe } from './get-iso-week-year.pipe';
import { GetMillisecondsPipe } from './get-milliseconds.pipe';
import { GetMinutesPipe } from './get-minutes.pipe';
import { GetMonthPipe } from './get-month.pipe';
import { GetQuarterPipe } from './get-quarter.pipe';
import { GetSecondsPipe } from './get-seconds.pipe';
import { GetTimePipe } from './get-time.pipe';
import { GetYearPipe } from './get-year.pipe';
import { GetUnixTimePipe } from './get-unix-time.pipe';
import { GetWeekPipe } from './get-week';
import { DateFnsWeekIndex, DateFnsFirstWeekDays } from './types';
import { GetWeekOfMonthPipe } from './get-week-of-month.pipe';
import { GetWeeksInMonthPipe } from './get-weeks-in-month.pipe';
import { GetDecadePipe } from './get-decade.pipe';
import { GetWeekYearPipe } from './get-week-year.pipe';

[
  {
    pipe: new GetDatePipe(),
    date: new Date(2012, 1, 29),
    expected: 29
  },
  {
    pipe: new GetDayOfYearPipe(),
    date: new Date(2014, 6, 2),
    expected: 183
  },
  {
    pipe: new GetDayPipe(),
    date: new Date(2012, 1, 29),
    expected: 3
  },
  {
    pipe: new GetDaysInMonthPipe(),
    date: new Date(2000, 1),
    expected: 29
  },
  {
    pipe: new GetDaysInYearPipe(),
    date: new Date(2012, 0, 1),
    expected: 366
  },
  {
    pipe: new GetHoursPipe(),
    date: new Date(2012, 1, 29, 11, 45),
    expected: 11
  },
  {
    pipe: new GetISODayPipe(),
    date: new Date(2012, 1, 29),
    expected: 3
  },
  {
    pipe: new GetISOWeekPipe(),
    date: new Date(2005, 0, 2),
    expected: 53
  },
  {
    pipe: new GetISOWeeksInYearPipe(),
    date: new Date(2015, 1, 11),
    expected: 53
  },
  {
    pipe: new GetISOYearPipe(),
    date: new Date(2005, 0, 2),
    expected: 2004
  },
  {
    pipe: new GetMillisecondsPipe(),
    date: new Date(2012, 1, 29, 11, 45, 5, 123),
    expected: 123
  },
  {
    pipe: new GetMinutesPipe(),
    date: new Date(2012, 1, 29, 11, 45, 5),
    expected: 45
  },
  {
    pipe: new GetMonthPipe(),
    date: new Date(2012, 1, 29),
    expected: 1
  },
  {
    pipe: new GetQuarterPipe(),
    date: new Date(2014, 6, 2),
    expected: 3
  },
  {
    pipe: new GetSecondsPipe(),
    date: new Date(2012, 1, 29, 11, 45, 5, 123),
    expected: 5
  },
  {
    pipe: new GetTimePipe(),
    date: new Date(1483228800000),
    expected: 1483228800000
  },
  {
    pipe: new GetUnixTimePipe(),
    date: new Date(1330512305000),
    expected: 1330512305
  },
  {
    pipe: new GetYearPipe(),
    date: new Date(2014, 6, 2),
    expected: 2014
  },
  {
    pipe: new GetDecadePipe(),
    date: new Date(1942, 10, 27),
    expected: 1940
  }
].forEach(test => {
  describe(test.pipe.constructor.name, () => {
    it(`should ${removePipe(test.pipe.constructor.name)} of ${
      test.date
    }`, () => {
      expect(test.pipe.transform(test.date)).toEqual(test.expected);
    });
  });
});

// With options
[
  {
    pipe: new GetWeekPipe(),
    date: new Date(2005, 0, 2),
    options: undefined,
    expected: 2
  },
  {
    pipe: new GetWeekPipe(),
    date: new Date(2005, 0, 2),
    options: {
      weekStartsOn: 1 as DateFnsWeekIndex,
      firstWeekContainsDate: 4 as DateFnsFirstWeekDays
    },
    expected: 53
  },
  {
    pipe: new GetWeekOfMonthPipe(),
    date: new Date(2019, 0, 6),
    options: {
      weekStartsOn: 0 as DateFnsWeekIndex
    },
    expected: 2
  },
  {
    pipe: new GetWeekOfMonthPipe(),
    date: new Date(2019, 0, 6),
    options: {
      weekStartsOn: 1 as DateFnsWeekIndex
    },
    expected: 1
  },
  {
    pipe: new GetWeeksInMonthPipe(),
    date: new Date(2015, 1, 8),
    options: undefined,
    expected: 4
  },
  {
    pipe: new GetWeeksInMonthPipe(),
    date: new Date(2017, 6, 5),
    options: { weekStartsOn: 1 as DateFnsWeekIndex },
    expected: 6
  },
  {
    pipe: new GetWeekYearPipe(),
    date: new Date(2004, 11, 26),
    options: { weekStartsOn: 0 as DateFnsWeekIndex },
    expected: 2005
  },
  {
    pipe: new GetWeekYearPipe(),
    date: new Date(2004, 11, 26),
    options: { weekStartsOn: 6 as DateFnsWeekIndex },
    expected: 2004
  },
  {
    pipe: new GetWeekYearPipe(),
    date: new Date(2004, 11, 26),
    options: { firstWeekContainsDate: 4 as DateFnsFirstWeekDays },
    expected: 2004
  }
].forEach(test => {
  describe(test.pipe.constructor.name, () => {
    it(`should ${removePipe(test.pipe.constructor.name)} of ${
      test.date
    }`, () => {
      expect(test.pipe.transform(test.date, test.options)).toEqual(
        test.expected
      );
    });
  });
});
