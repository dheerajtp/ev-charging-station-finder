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


10. [MapView](https://docs.expo.dev/versions/latest/sdk/map-view/)


while integrating map-view i got encountered an error "Invariant Violation: Tried to register two views with the same name AIRMap, js engine what is this issue ??" and upgrading the project using **expo upgrade** fixed the issue. 

- When integrating the Map component we can either manually tell which provider to be used which is by mentioning the provider in the map view. By default it will take default of mobile os for the map. 

```
provider={PROVIDER_GOOGLE}
```

- To show user location we can use showsUserLocation={true}

- To change the default google map style and go to [Map Style With Google Map](https://mapstyle.withgoogle.com/) and select the desired map style and and click on finish after updating the style with desired value. After that copy the JSON format and create a new file in the *utils folder* named **MapViewStyle.json** . And import this custom map style in the MapView component inside customMapStyle. 


11. [Expo Location](https://docs.expo.dev/versions/latest/sdk/location/)

This package can be used for getting user location from the device.

12. [AsyncStorage](https://react-native-async-storage.github.io/async-storage/docs/usage/)

13. For showing marker we can import Marker from react-native-maps.


