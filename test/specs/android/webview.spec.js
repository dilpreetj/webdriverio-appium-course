describe('Web Browser Access', () => {
  before(async () => {
    // skip tutorial
    await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip"]')
      .click();
    await expect($('//*[@text="Add note"]')).toBeDisplayed();
  });

  it('Access external link and verify content in the browser ', async () => {
    // click on the nav icon
    await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]')
      .click()

    // click on the fb link
    await $('//*[@text="Like us on Facebook"]').click()

    // assert the cover image is displayed
    const coverImg = await $('.img.coverPhoto');
    await expect(coverImg).toBeDisplayed()
  });
});