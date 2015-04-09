// This section sets up some basic app metadata,
// the entire section is optional.
App.info({
  id: 'com.example.matt.uber',
  name: 'Map Roulette',
  description: 'Learn about the world every day!',
  author: 'Orbitist',
  email: 'support@oebitist.com',
  website: 'http://orbitist.com'
});
 
// Set up resources such as icons and launch screens.
App.icons({
  'iphone': 'public/icons/icon-60.png',
  'iphone_2x': 'public/icons/icon-120.png',
  // ... more screen sizes and platforms ...
});
 
App.launchScreens({
  'iphone': 'public/splash/splash.png',
  'iphone_2x': 'public/splash/splash.png',
  // ... more screen sizes and platforms ...
});
 
// Set PhoneGap/Cordova preferences
App.setPreference('BackgroundColor', '0xff0000ff');
App.setPreference('HideKeyboardFormAccessoryBar', true);
 
App.accessRule('*');