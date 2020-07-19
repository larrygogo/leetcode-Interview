import {chromeErrorHandle, firefoxErrorHandle} from '../src';

test('Demo Error Test', () => {
  expect(
    chromeErrorHandle(`TypeError: Error raised
  at bar http://192.168.31.8:8000/c.js:2:9`)
  ).toEqual({
    message: 'Error raised',
    stack: [
      {
        line: 2,
        column: 9,
        filename: 'http://192.168.31.8:8000/c.js',
      },
    ],
  });
});

test('Chrome Error Test', () => {
  expect(
    chromeErrorHandle(`TypeError: Error raised
  at bar http://192.168.31.8:8000/c.js:2:9
  at foo http://192.168.31.8:8000/b.js:4:15
  at calc http://192.168.31.8:8000/a.js:4:3
  at <anonymous>:1:11
  at http://192.168.31.8:8000/a.js:22:3`)
  ).toEqual({
    message: 'Error raised',
    stack: [
      {
        line: 2,
        column: 9,
        filename: 'http://192.168.31.8:8000/c.js',
      },
      {
        line: 4,
        column: 15,
        filename: 'http://192.168.31.8:8000/b.js',
      },
      {
        line: 4,
        column: 3,
        filename: 'http://192.168.31.8:8000/a.js',
      },
      {
        line: 1,
        column: 11,
        filename: '<anonymous>',
      },
      {
        line: 22,
        column: 3,
        filename: 'http://192.168.31.8:8000/a.js',
      },
    ],
  });
});

test('Chrome Error Test', () => {
  expect(
    firefoxErrorHandle(`
  bar@http://192.168.31.8:8000/c.js:2:9
  foo@http://192.168.31.8:8000/b.js:4:15
  calc@http://192.168.31.8:8000/a.js:4:3
  <anonymous>:1:11
  http://192.168.31.8:8000/a.js:22:3`)
  ).toEqual({
    message: 'Error',
    stack: [
      {
        line: 2,
        column: 9,
        filename: 'http://192.168.31.8:8000/c.js',
      },
      {
        line: 4,
        column: 15,
        filename: 'http://192.168.31.8:8000/b.js',
      },
      {
        line: 4,
        column: 3,
        filename: 'http://192.168.31.8:8000/a.js',
      },
      {
        line: 1,
        column: 11,
        filename: '<anonymous>',
      },
      {
        line: 22,
        column: 3,
        filename: 'http://192.168.31.8:8000/a.js',
      },
    ],
  });
});
