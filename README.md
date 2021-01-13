
# Pick you poison (Would you rather) game

![](https://i.imgur.com/dEV8OJd.png)
## Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Improvements](#improvements)

## About <a name = "about"></a>

Would you rather (Picking between two options) game built with React Native (Expo managed)

## Getting Started <a name = "getting_started"></a>

- Clone the repo
```bash
git clone git@github.com:yanacompany/pick-your-poison.git
```

- Move into the cloned repo directory
```
cd pick-your-poison
```

- Install the packages
```
npm install
```

- Run with the Expo CLI
```
expo start
```

- Run the app on your local machine (Metro Server)
1. Run on Expo Client App (Found in android/ios playstore)
```
Scan the QR code above with the Expo app or the camera app on ios
```
2. On Mac for Iphone Simulator (Easier if you have Xcode installed)
- Press the following command
```
i
```

3. On Mac for Android Emulator (Need to have Android Studio installed)
 - Open up android simulator and create/run an avd ("emulated android device")
 ```
a
 ```
4. On Windows 
No instruction yet but should be somewhat the same
- It is NOT possible to run iphone apps on windows

5.  To Refresh the app/Restart the app you must
shake the device for the developer menu to pop up. Press "Reload app"

### Prerequisites

- Expo CLI found at [Expo-cli](https://docs.expo.io/workflow/expo-cli/) 

```
npm install -g expo-cli
```

- [Android Studio](https://developer.android.com/studio/) and/or [Xcode](https://developer.apple.com/xcode/) to run on emulators

- Expo Client app


## Improvements <a name = "improvements"></a>

### Reduce the app size
Using expo component
after you done and want publish with less size or just wan't to use a native library expo give you an option called ExpoKit this also can be used with already build with native code react projects

1. run command expo eject to add ExpoKit (choose the "ExpoKit" option)
(no need to do this if you have copied files manually or using native project)
2. start expo packager with expo start.Leave this running and continue with the following steps.
3. link library for android and ios, this command mostly do this react-native link, sometime this will not work and you should do it manually for this means visit expokit
PS: Works!! (according to stackoverflow (32mb to 9mb))

Source: [Stack Overflow : How to reduce the size of an expo/react-native app on Android
](https://stackoverflow.com/questions/49993006/how-to-reduce-the-size-of-an-expo-react-native-app-on-android)
