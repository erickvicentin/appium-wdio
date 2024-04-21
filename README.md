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