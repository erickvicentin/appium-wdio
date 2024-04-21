# Automation Mobile Framework
## Using WebdriverIO & Appium

Setup ANDROID_HOME environment variable

Open the Environment Variable file:
```vim ~/.zshenv```

Add the environment variables:
```
export ANDROID_HOME=/Users/username/Library/Android/sdk/
export PATH=$ANDROID_HOME/platform-tools:$PATH
export PATH=$ANDROID_HOME/tools:$PATH
```
Source the changes:
```source ~/.zshenv```

Test changes: 

```echo $ANDROID_HOME```

```adb devices``` - should return list of devices attached

Note: the same changes can be added to ```.zshrc``` or ```.bashprofile``` file as well

Anotaciones del curso.

1. Remote Port: Update port to 4724 and run Appium on the same port as well by doing ```appium -p 4724```
2. Remote Path: Set the path to ```/``` instead of ```/wd/hub/```

Chequear que se configure correctamente lo siguiente: 
* NodeJS
* Java JDK 
    * Set JAVA_HOME path
* Android Studio
    * Set ANDROID_HOME path
    * Setup simulator
* Appium Desktop Inspector
* Appium Installation ```npm install -g appium```
* Appium-doctor installation ```npm install -g appium-doctor```

Adicionalmente instalar los drivers de appium:
```
appium driver install xcuitest
appium driver install uiautomator2
```

