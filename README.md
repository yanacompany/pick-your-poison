# undefined

## Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Usage](#usage)
- [Contributing](../CONTRIBUTING.md)

## About <a name = "about"></a>

Write about 1-2 paragraphs describing the purpose of your project.

## Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See [deployment](#deployment) for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them.

```
Give examples
```

### Installing

A step by step series of examples that tell you how to get a development env running.

Say what the step will be

```
Give the example
```

And repeat

```
until finished
```

End with an example of getting some data out of the system or using it for a little demo.

## Usage <a name = "usage"></a>

Add notes about how to use the system.

### Reduce the app size
using expo component
after you done and want publish with less size or just wan't to use a native library expo give you an option called ExpoKit this also can be used with already build with native code react projects

1. run command expo eject to add ExpoKit (choose the "ExpoKit" option)
(no need to do this if you have copied files manually or using native project)
2. start expo packager with expo start.Leave this running and continue with the following steps.
3. link library for android and ios, this command mostly do this react-native link, sometime this will not work and you should do it manually for this means visit expokit
PS: Works!! (according to stackoverflow (32mb to 9mb))