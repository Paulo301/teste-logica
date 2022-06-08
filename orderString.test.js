import { orderString } from './orderString';

describe('', () => {
  it('shoud order the string', () => {
    expect(orderString(['zebra', 'cálice', 'borboleata' ])).toEqual(['borboleata', 'cálice', 'zebra']);
  });
});