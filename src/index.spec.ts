import { add } from './main';

describe('CI Test App', () => {
  it('should return hello world', (done) => {
    expect(add(1, 2)).toEqual(3);
    done();
  });
});