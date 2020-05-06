import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeComponent from '../../Home/index'
import ContactMeComponent from '../../ContactMe/index'
import AboutMeComponent from '../../AboutMe/index'
import BlogComponent from '../../Blog/index'
import { MainStackNavigation } from '../../StackNavigations/MainStackNavigation/index'

const Drawer = createDrawerNavigator();

class Hidden extends React.Component{
  render(){
      return null;
    }
  }

export function MainDrawerNavigation() {
  return (
    <NavigationContainer
    independent="true">
      <Drawer.Navigator initialRouteName="Home"
      drawerContentOptions= {{
        activeTintColor:'#000000',
        labelStyle: {fontFamily: 'comicNeueRegular'}
    }}>
        <Drawer.Screen 
         name="MainStackNavigation" component={MainStackNavigation} options = {{label: <Hidden/>, 
                                                                              labelStyle: {display: 'none',
                                                                              headerShown : false}}}/>
        <Drawer.Screen name="Home" component={HomeComponent}/>
        <Drawer.Screen name="About" component={AboutMeComponent} />
        <Drawer.Screen name="Blog" component={BlogComponent} />
        <Drawer.Screen name="Contact" component={ContactMeComponent} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
