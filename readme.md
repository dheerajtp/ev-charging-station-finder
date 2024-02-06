## EV Charging Station Finder

1. Created project using expo

2. Setup expo router for routing [Install Expo Router](https://docs.expo.dev/router/installation/#manual-installation)

3. Custom App Font

We can integrate custom font to our expo application using [Expo font](https://docs.expo.dev/versions/latest/sdk/font/)

4. [Expo splash Screen](https://docs.expo.dev/versions/latest/sdk/splash-screen/)

The SplashScreen module from the expo-splash-screen library is used to tell the splash screen to remain visible until it has been explicitly told to hide. This is useful to do tasks that will happen behind the scenes such as making API calls, pre-loading fonts, animating the splash screen and so on.

5. [TouchableOpacity](https://reactnative.dev/docs/touchableopacity)

A wrapper for making views respond properly to touches. On press down, the opacity of the wrapped view is decreased, dimming it.

6. [Clerk](https://clerk.com/)

Clerk is used for social authentication in our application which is completely free

[Use Clerk With Expo](https://clerk.com/docs/quickstarts/expo)

7. [Using Environment Vairables in Expo](https://docs.expo.dev/guides/environment-variables/)

8. [Expo Web Browser](https://docs.expo.dev/versions/latest/sdk/webbrowser/)

expo-web-browser provides access to the system's web browser and supports handling redirects.

9. [Expo Secure Store](https://docs.expo.dev/versions/latest/sdk/securestore/)

expo-secure-store provides a way to encrypt and securely store key–value pairs locally on the device. Each Expo project has a separate storage system and has no access to the storage of other Expo projects.

### Clerk Authentication

SignedIn and SignedOut components from clerk can be used to show signed in and signed out contents. In here the user will be redirected into login page if the user isn't signed in. So we will place the redirect logic inside SignedOut Component
