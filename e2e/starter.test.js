describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp({ delete: true });
  });

  it('should have welcome screen', async () => {
    await expect(element(by.id('open-app'))).toBeVisible();
    await element(by.id('open-app')).tap();
    await expect(element(by.text('You clicked 1 times'))).toBeVisible();
  });
});
