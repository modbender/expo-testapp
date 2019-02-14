import React from 'react';
import { SplashScreen } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import { View, StyleSheet } from 'react-native';
import { Spinner } from 'native-base';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    SplashScreen.hide();
    SplashScreen.preventAutoHide();
    this.state = { 
      hasError: false 
    };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // You can also log the error to an error reporting service
    logErrorToMyService(error, info);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <View style={styles.container}>
          <View>
            <Ionicons name="closecircle" size={40} color="red"/>
            Error
          </View>
        </View>
      );
    }

    return this.props.children;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
});