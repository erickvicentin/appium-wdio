# Appium-WDIO
Anotaciones del curso. 

1. Remote Port: Update port to 4724 and run Appium on the same port as well by doing appium -p 4724
2. Remote Path: Set the path to / instead of /wd/hub/

Chequear que se configure correctamente lo siguiente: (se puede usar Appium-doctor para esto) 
* NodeJS
* Java JDK
    * Set JAVA_HOME path
* Android Studio
    * Set ANDROID_HOME path
    * Setup simulator
* Appium Desktop Inspector

* Appium Installation
```
npm install -g appium
```
* Appium-doctor installation
```
npm install -g appium-doctor
```

Para chequear si android esta bien configurado: appium-doctor —android, para iOS appium-doctor —ios

Adicionalmente instalar los drivers de appium:
```
appium driver install xcuitest
appium driver install uiautomator2
```

Appium inspector releases: https://github.com/appium/appium-inspector/releasesTo 
avoid issues to open Appium inspector: 
```
sudo xattr -rd com.apple.quarantine /Applications/Appium\ Inspector.app
```
Appium inspector capabilities
￼

WebDriver IO config:
* Walkthrough the repository
* Add test app ( main-folder/app/android/app.apk )
* Update capabilities: 
    * Platform name
    * Device name
    * App path
* Setup test folder
* Run app with WebdriverIO
```
capabilities: [
    {
      'appium:platformName': 'Android',
      'appium:platformVersion': '15.0',
      'appium:deviceName': 'Pixel 9',
      'appium:automationName': 'UIAutomator2',
      'appium:app': path.join(process.cwd(), 'app/android/ApiDemos-debug.apk'),
    },
  ],
```
Para usar ```path.join()``` es necesario importarlo
```
import path from "path"
```
Luego ```process.cwd()``` obtiene la ruta en la cual estamos trabajando (currently working directory) y la concatena con el string siguiente.

SETUP EMULATOR FOR TESTING

* Add emulator on android studio
    * Ejemplo: Small phone (android v10)
    * Mantener una version de Android distinta
* Agregar las capabilities en Appium
    * Platform name
    * Platform version
    * Device name
    * App path

Encontrar elementos por accessibility id, se debe poner el signo de equivalencia previo al id de accesibilidad, ejemplo:
```
$('~App')
```

Encontrar elementos por xpath
```
$('//android.widget.TextView[@content-desc="Alert Dialogs"]');
```

Por ClassName
```
$('android.widget.TextView')
````

UiSelector doc:
https://developer.android.com/reference/androidx/test/uiautomator/UiSelector
https://appium.readthedocs.io/en/latest/en/writing-running-appium/android/uiautomator-uiselector/
https://webdriver.io/docs/selectors/#android-uiautomator

