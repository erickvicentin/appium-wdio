describe('Android elements tests', () => {
    
    it('Find elements by accesibility ID', async () => {
        //find element by accesibility id
        const homeOption = await $('~App')
        //click on element
        await homeOption.click()
        //assertion
        const actionBar = await $('~Action Bar')
        await expect(actionBar).toBeExisting();
        await driver.back();
    })

    it('Find elements by className', async () => {
        //find element by className
        const className = await $$('android.widget.TextView')
        //assertion 
        await expect(className[0]).toHaveText('API Demos')
    })

    it('Find element by Xpath', async () => {
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
    })
        
})