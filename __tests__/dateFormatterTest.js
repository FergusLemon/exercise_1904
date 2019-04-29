import {formatDate} from '../src/dateFormatter';

const January = 0; //js Date object month is indexed from 0
const December = 11;

it('formats today as "TODAY"', () => {
  const systemDateTime = new Date(2018, December, 15, 10, 5).getTime();
  const dateTimeToFormat = new Date(2018, December, 15, 12, 50).getTime();
  expect(formatDate(dateTimeToFormat, systemDateTime)).toBe('TODAY');
});

it('formats all other days as "DD/MM/YYYY"', () => {
  const systemDateTime = new Date(2018, January, 15, 10, 5).getTime();
  const dateTimeToFormat = new Date(2018, January, 16, 12, 50).getTime();
  expect(formatDate(dateTimeToFormat, systemDateTime)).toBe('16/01/2018');
});

it('returns "Invalid Date" when unconvertable values are passed', () => {
  const systemDateTime = new Date(2018, January, 15, 10, 5).getTime();
  const dateTimeToFormat = "Invalid string to compare with valid date";
  expect(formatDate(dateTimeToFormat, systemDateTime)).toBe('Invalid Date');
});
