import React, { Component } from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View
} from 'react-native';
import { Container, Button, Text } from 'native-base';
import Dstyles from '../constants/Dstyles';
import TopBar from '../components/TopBar';

export default class HomeScreen extends Component {
  constructor() {
    super();
  }
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View style={Dstyles.container}>
        <TopBar title={"Title"} subtitle={"Subtitle"}/>
        <View style={styles.middle}>
          <Button>
            <Text>Button</Text>
          </Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  middle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
