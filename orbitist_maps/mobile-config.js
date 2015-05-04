// This section sets up some basic app metadata,
// the entire section is optional.
App.info({
  id: 'com.orbitist.maps',
  name: 'Orbitist',
  description: 'Maps that explain our world. Audio maps, data visualizations and multimedia mixed together to create a new type of storytelling that will blow your mind!',
  author: 'Orbitist',
  email: 'support@orbitist.com',
  website: 'http://orbitist.com'
});
 
// Set up resources such as icons and launch screens.
App.icons({
  'iphone': 'public/icons/icon-60.png',
  'iphone_2x': 'public/icons/icon-60.png',
  'iphone_3x': 'public/icons/icon-60.png',
  'ipad': 'public/icons/icon-120.png',
  'ipad_2x': 'public/icons/icon-120.png',
  'android_ldpi': 'public/icons/icon-120.png',
  'android_mdpi': 'public/icons/icon-120.png',
  'android_hdpi': 'public/icons/icon-120.png',
  'android_xhdpi': 'public/icons/icon-120.png'
});
 
App.launchScreens({
  'iphone': 'public/splash/splash.png',
  'iphone_2x': 'public/splash/splash.png',
  'iphone5': 'public/splash/splash.png',
  'iphone6': 'public/splash/splash.png',
  'iphone6p_portrait': 'public/splash/splash.png',
  'iphone6p_landscape': 'public/splash/splash.png',
  'ipad_portrait': 'public/splash/splash.png',
  'ipad_portrait_2x': 'public/splash/splash.png',
  'ipad_landscape': 'public/splash/splash.png',
  'ipad_landscape_2x': 'public/splash/splash.png',
  'android_ldpi_portrait': 'public/splash/splash.png',
  'android_ldpi_landscape': 'public/splash/splash.png',
  'android_mdpi_portrait': 'public/splash/splash.png',
  'android_mdpi_landscape': 'public/splash/splash.png',
  'android_hdpi_portrait': 'public/splash/splash.png',
  'android_hdpi_landscape': 'public/splash/splash.png',
  'android_xhdpi_portrait': 'public/splash/splash.png',
  'android_xhdpi_landscape': 'public/splash/splash.png'
});
 
// Set PhoneGap/Cordova preferences
App.setPreference('BackgroundColor', '0xff0000ff');
App.setPreference('HideKeyboardFormAccessoryBar', true);
 
App.accessRule('*');