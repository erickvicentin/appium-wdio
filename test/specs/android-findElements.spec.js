describe('Android elements tests', () => {
  it('Find elements by accesibility ID', async () => {
    //find element by accesibility id
    const homeOption = await $('~App');
    //click on element
    await homeOption.click();
    //assertion
    const actionBar = await $('~Action Bar');
    await expect(actionBar).toBeExisting();
  });

  it('Find elements by className', async () => {
    //find element by className
    const className = await $$('android.widget.TextView');
    //assertion
    await expect(className[0]).toHaveText('API Demos');
  });

  xit('Find element by Xpath', async () => {
    //xpath structure: //tagName[@attribute='value']

    const homeOption = await $('~App');
    await homeOption.click();
    //click element
    const alertDialogsOption = await $(
      '//android.widget.TextView[@content-desc="Alert Dialogs"]'
    );
    await alertDialogsOption.click();

    const alertDialogsTitle = await $(
      '//android.widget.TextView[@text="App/Alert Dialogs"]'
    );
    await expect(alertDialogsTitle).toBeExisting();

    //find by resource id
    await $(
      '//android.widget.Button[@resource-id="io.appium.android.apis:id/select_button"]'
    ).click();

    //find by text
    await $('//android.widget.TextView[@text="Command two"]').click();
    const textAssert = await $(
      '//android.widget.TextView[@text="You selected: 1 , Command two"]'
    );
    await expect(textAssert).toBeExisting();
  });

  it('Find elements by UIAutomator', async () => {
    //find by text contains
    await $('android=new UiSelector().textContains("Alert")').click();
  });

  it('Find multiple elements', async () => {
    const expectedList = [
      'API Demos',
      "Access'ibility",
      'Accessibility',
      'Animation',
      'App',
      'Content',
      'Graphics',
      'Media',
      'NFC',
      'OS',
      'Preference',
      'Text',
    ]
    const actualList = []
    //find elements
    const textList = await $$('android.widget.TextView');

    //loop through elements
    for (const element of textList) {
      actualList.push(await element.getText());
    }
    //assert the list
    expect(actualList).toEqual(expectedList);
  })

  it.only('Scroll to element with Accessibility ID and click', async () => {
    // Accessibility ID del elemento que buscamos
    const accessibilityId = 'Views';

    // Construir el selector UIAutomator para hacer scroll hasta el elemento.
    // new UiScrollable() busca un contenedor desplazable.
    // .scrollIntoView() hace scroll hasta que el elemento con el UiSelector interno sea visible.
    // new UiSelector().description("${accessibilityId}") busca el elemento por su content-desc (Accessibility ID).
    const selector = `android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().description("${accessibilityId}"))`;

    // Encontrar el elemento; Appium hará scroll automáticamente si es necesario.
    const viewsOption = await $(selector);
    await viewsOption.click();

    //Assertion
    const autoCompleteScreenElement = await $('~Auto Complete');
    await expect(autoCompleteScreenElement).toBeExisting();
    await autoCompleteScreenElement.click();

    const screenTopOption = await $('~1. Screen Top');
    await screenTopOption.click();

    const editText = await $('android.widget.EditText');
    await expect(editText).toBeExisting();
    await editText.addValue('Argentina');

    expect(editText).toHaveText('Argentina');
  });
});
