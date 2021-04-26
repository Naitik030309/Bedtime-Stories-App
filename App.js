import React from 'react';
import { Image, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import WriteStory from './screens/WriteStoryScreen';
import ReadStory from './screens/ReadStoryScreen';

export default class App extends React.Component {
  render() {
    return <Container />;
  }
}

const Navigator = createBottomTabNavigator(
  {
        Write: { screen: WriteStory },
    Read: { screen: ReadStory },

  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: () => {
        const routeName = navigation.state.routeName;
        if (routeName === 'Write') {
          return (
            <Image
              source={require('./assets/write.png')}
              style={{ width: 30, height: 30 }}
            />
          );
        } else if (routeName === 'Read') {
          return (
            <Image
              source={require('./assets/read.png')}
              style={{ width: 30, height: 30 }}
            />
          );
        }
      },
    }),
  }
);

const Container = createAppContainer(Navigator);
