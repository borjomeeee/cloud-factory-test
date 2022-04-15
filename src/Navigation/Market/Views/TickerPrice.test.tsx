import {lowerThen} from '../Utils';

describe('hello', () => {
  it('lowerThen', () => {
    expect(lowerThen('0.00271317', '0.00271313')).toBe(false);
    expect(lowerThen('0.00271317', '0.00271319')).toBe(true);
  });
});
