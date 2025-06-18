describe('Android native feature tests', () => {

    it('Access an activity directly', async () => {
        await driver.startActivity(
          'io.appium.android.apis',
          'io.appium.android.apis.app.AlertDialogSamples'
        );

        await driver.pause(3000)

        const textAssert = await $('//*[@text="App/Alert Dialogs"]')
        await expect(textAssert).toExist()
    })

    it.only('Working with Dialog Boxes', async () => {
        await driver.startActivity(
          'io.appium.android.apis',
          'io.appium.android.apis.app.AlertDialogSamples'
        );

        await $(
          '//*[@resource-id="io.appium.android.apis:id/two_buttons"]'
        ).click();

        //accept alert
        //await driver.acceptAlert();

        //dismiss alert
        //await driver.dismissAlert();

        //alert box is not longer displayed
        const alertBox = await $('//*[@resource-id="android:id/alertTitle"]');
        //await expect(alertBox).not.toExist()

        console.log('ALERT TEXT ---> ', await alertBox.getText())
    })
})