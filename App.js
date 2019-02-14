import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { Asset, Font, Icon, SplashScreen } from 'expo';
import AppNavigator from './navigation/AppNavigator';
import { Spinner } from 'native-base';
import ErrorBoundary from './components/ErrorBoundary';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    SplashScreen.preventAutoHide();
    SplashScreen.hide();
  }

  state = {
    isReady: false
  };

  async componentWillMount() {
    await this._loadResourcesAsync();
    this._handleFinishLoading();
  }

  render() {
    if (!this.state.isReady && !this.props.skipLoadingScreen) {
      return (
        <ErrorBoundary>
          <View style={styles.spinnerContainer}>
            <Spinner color='green' />
          </View>
        </ErrorBoundary>
      );
    } else {
      return (
        <View style={styles.container}>
          
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          <AppNavigator />
        </View>
      );
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./assets/images/robot-dev.png'),
        require('./assets/images/robot-prod.png'),
      ]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Icon.Ionicons.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        'Roboto': require("./assets/fonts/Roboto/Roboto-Regular.ttf"),
        'Roboto_medium': require("./assets/fonts/Roboto/Roboto-Medium.ttf"),
        'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
      }),
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isReady: true });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: '100%',
    height: '100%',
    marginTop: Platform.OS === 'ios' ? 0:24
  },
  spinnerContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
