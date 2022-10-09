describe('iOS Webview', () => {
  it('Working with dynamic webview', async () => {
    await $('~Webview').click();

    // wait until you get multiple context
    await driver.waitUntil(async () => {
      const contexts = await driver.getContexts();
      return contexts.length > 1; // true || false
    }, { timeout: 30000, timeoutMsg: 'Timed out waiting for another context' });

    // get all the contexts
    const contexts = await driver.getContexts();

    // switch to the webview context
    await driver.switchContext(contexts[1])

    // assertion
    const subtitleTxt = await $('.hero__subtitle');
    await expect(subtitleTxt).toHaveTextContaining('automation');

    // switch back to the native app
    await driver.switchContext('NATIVE_APP');
    await $('~Home').click()

    // assertion
    const webdriverTxt = await $('//*[@name="WEBDRIVER"]')
    await expect(webdriverTxt).toBeDisplayed()
  });
});