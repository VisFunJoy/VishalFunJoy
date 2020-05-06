import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeComponent from '../../Home/index'
import ContactMeComponent from '../../ContactMe/index'
import AboutMeComponent from '../../AboutMe/index'
import BlogComponent from '../../Blog/index'
import SingleBlogComponent from '../../SingleBlog/index'
import { NavigationContainer } from '@react-navigation/native';
// import { MainDrawerNavigation } from '../../DrawerNavigations/MainDrawerNavigation/index'

const Stack = createStackNavigator();

 export function MainStackNavigation() {
  return (
    <NavigationContainer
    independent="true">
      <Stack.Navigator 
      initialRouteName="Home"
     > 
        {/* <Stack.Screen
          name="MainDrawerNavigation"
          component={MainDrawerNavigation}
          options={{ headerShown: false}}
        /> */}
        <Stack.Screen
          name="Home"
          component={HomeComponent}
          options={{ headerShown: false}}
        />
         <Stack.Screen 
          name="About" 
          component={AboutMeComponent} 
          options={{ headerShown: false,
          }}
        /> 
        <Stack.Screen 
          name="Blog" 
          component={BlogComponent} 
          options={{ headerShown: false}}
        />
        <Stack.Screen 
          name="Contact" 
          component={ContactMeComponent} 
          options={{ headerShown: false}}
        />
         <Stack.Screen 
          name="SingleBlog" 
          component={SingleBlogComponent} 
          options={{ headerShown: false}}
      />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
