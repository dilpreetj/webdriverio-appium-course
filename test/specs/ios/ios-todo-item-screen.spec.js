const ListScreen = require('../../screenobjects/ios/list.screen');
const ItemScreen = require('../../screenobjects/ios/item.screen');

describe('Todo Item', () => {
  it('Create a Todo Item', async () => {
    // Create TODO List
    await ListScreen.createListBtn.click();
    await ListScreen.listNameInput.addValue("Things to do today");
    await ListScreen.createBtn.click();
    await expect(await ListScreen.listNameField("Things to do today")).toBeExisting();

    // Create Todo Item
    await ListScreen.listNameField("Things to do today").click();
    await ItemScreen.createItem.click();
    await ItemScreen.title.addValue("Buy groceries");
    await ItemScreen.dueDate.click();
    await ItemScreen.datePicker.click();
    await ItemScreen.getByAccessibility("Tuesday, November 30").click();
    await ItemScreen.secondWindow.click();
    await ItemScreen.createBtn.click();

    // assertion
    await expect(await ItemScreen.getByAccessibility("Buy groceries")).toBeExisting();
    await expect(await ItemScreen.getByAccessibility("Due November 30, 2021")).toBeExisting();
  });
});