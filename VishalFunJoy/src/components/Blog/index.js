import React, { Component } from 'react';
import { View, ScrollView, Text, Dimensions, Image, StyleSheet, TouchableOpacity } from 'react-native';
import NavBarComponent from '../NavbarComponent/index'
import FooterComponent  from '../Footer/index'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  blogContainer: {
    width: windowWidth*0.8, 
    marginLeft: windowWidth*0.1,
    borderColor: "#808080",
    borderWidth: 1
  },
  blogImage: { 
    width: '100%',
    height: 250
  },

  blogContentContainer: {
   padding: 10,
   display: "flex",
   alignItems: "center",
   justifyContent: "center"
  },

  blogContentHeading: {
    fontFamily: "comicNeueRegular", 
    fontSize: 30
  },
  blogContentDescription: {
    fontFamily: "comicNeueRegular", 
    fontSize: 20
  }
});

function BlogComponent({navigation}) {
    return (
      <View style={{flex: 1}}>
          <ScrollView>
              <NavBarComponent screenName="Blog/My thoughts" navigation={navigation}></NavBarComponent>
            
              <Text style={{fontFamily: "comicNeueRegular", fontSize: 30, fontWeight: '800', margin: 10}}>
                Blog:
              </Text>

              <TouchableOpacity style={styles.blogContainer}
              onPress={() => navigation.navigate("MainStackNavigation", {screen : "SingleBlog"})}>
                  <Image style={styles.blogImage} source={require('../../assets/Images/WhatIsLife.jpg')} />
                  <View style={styles.blogContentContainer}>
                    <Text style={styles.blogContentHeading}>
                      What is Life and Spirituality?
                    </Text>
                    <Text style={styles.blogContentDescription}>
                      Views on life and spirituality by various masters:
                    </Text>
                  </View>
              </TouchableOpacity>
          </ScrollView>
          <FooterComponent></FooterComponent>
      </View>
    );
  };
  
export default BlogComponent;
