/*test('adds 1 + 2 to equal 3', () => {
  expect(3).toBe(3);
});
*/
describe('adding numbers', () => {
  it('add two number', () => {
    expect(1 +2).toBe(3); // Fails!
  });
  it('sub two number', () => {
    expect(1 - 2).toBe(3); // Fails!
  });
});
