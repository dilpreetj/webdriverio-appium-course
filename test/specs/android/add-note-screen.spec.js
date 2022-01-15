import AddNoteScreen from "../../screenobjects/android/add-note.screen";

describe('Add Notes', () => {
  it('Skip tutorial', async () => {
    await AddNoteScreen.skipBtn.click();

    await expect(AddNoteScreen.addNoteTxt).toBeDisplayed();
  });

  it('add a note, save changes & verify note', async () => {
    await AddNoteScreen.addNoteTxt.click();
    await AddNoteScreen.textOption.click();
    await expect(AddNoteScreen.textEditing).toBeDisplayed();

    // add note title
    await AddNoteScreen.noteHeading.addValue("Anime List");

    // add note body
    await AddNoteScreen.noteBody.addValue("Naruto\nOnePiece\nAOT");

    // save the changes
    await AddNoteScreen.saveNote();

    // assertion
    await expect(AddNoteScreen.editBtn).toBeDisplayed();
    await expect(AddNoteScreen.viewNote).toHaveText("Naruto\nOnePiece\nAOT");
  });
});