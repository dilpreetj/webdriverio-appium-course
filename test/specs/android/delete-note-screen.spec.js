const EditNoteScreen = require("../../screenobjects/android/edit-note.screen");

describe('Delete Note', () => {
  before(async () => {
    await EditNoteScreen.skipTutorial();
    await EditNoteScreen.addAndSaveNote("TV shows", "Friends\nBreakingBad\nPeakyBlinders");
    await driver.back();
  });

  it('Delete a note & check the note in trash can', async () => {
    const note = await EditNoteScreen.firstNote.getText();

    // click on the note
    await EditNoteScreen.firstNote.click();

    // click on more icon
    await EditNoteScreen.moreIcon.click();

    // click on Delete item
    await EditNoteScreen.deleteIcon.click();

    // accept alert
    await driver.acceptAlert();

    // click on nav icon
    await EditNoteScreen.navIcon.click();

    // click on trash can item
    await EditNoteScreen.trashCanItem.click();

    // assertions
    const trashCanItem = await EditNoteScreen.firstNote;

    await expect(trashCanItem).toHaveText(note);
  });
});