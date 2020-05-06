import React, { Component } from 'react';
import { View, ScrollView, Text, Dimensions, Image, StyleSheet, TouchableOpacity } from 'react-native';
import NavBarComponent from '../NavbarComponent/index'
import FooterComponent  from '../Footer/index'
import { WebView } from 'react-native-webview';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  blogContainer: {
    width: windowWidth, 
  },
  blogImage: { 
    width: '100%',
    height: 250
  },

  blogContentContainer: {
   padding: 10
  },

  blogContentHeading: {
    fontFamily: "comicNeueRegular", 
    fontSize: 30
  },
  blogContentDescription: {
    fontFamily: "comicNeueRegular", 
    fontSize: 20
  },
  webViewContainer: {
    height: 400
  }
});


function SingleBlogComponent({navigation}) {
    return (
      <View style={{flex: 1}}>
          <ScrollView>
              <NavBarComponent screenName="SingleBlog" navigation={navigation}></NavBarComponent>

              <TouchableOpacity style={styles.blogContainer}>
                  <Image style={styles.blogImage} source={require('../../assets/Images/WhatIsLife.jpg')} />
                  <View style={styles.blogContentContainer}>
                    <Text style={styles.blogContentHeading}>
                      What is Life and Spirituality?
                    </Text>
                    <Text style={styles.blogContentDescription}>
                      Views on life and spirituality by various masters:{'\n'}
                    </Text>
                    <View>
                        <Text style={styles.blogContentHeading}>
                        1. Sadhguru Jaggi Vasudev:{'\n'}
                        </Text>
                        <View>
 
                            <WebView
                                    style={ styles.webViewContainer }
                                    javaScriptEnabled={true}
                                    domStorageEnabled={true}
                                    source={{uri: 'https://youtu.be/vQ7ZvPghdy8' }}
                            />

                            <Text style={styles.blogContentDescription}>
                            {'\n'}{'\n'}Jaggi Vasudev is an Indian yogi and mystic who founded the Isha Foundation,
                                a non-profit organization which offers yoga programs around the world. 
                                A multi-faceted personality, he is also an author, motivational speaker,
                                and philanthropist along with being a spiritual master.{'\n'}{'\n'}              
                            </Text>
                        </View>
                    </View>
                    <View>
                        <Text style={styles.blogContentHeading}>
                        2. Osho:{'\n'}
                        </Text>
                        <View>
 
                            <WebView
                                    style={ styles.webViewContainer }
                                    javaScriptEnabled={true}
                                    domStorageEnabled={true}
                                    source={{uri: 'https://youtu.be/2_x55URARJY' }}
                            />

                            <Text style={styles.blogContentDescription}>
                            {'\n'}{'\n'}Rajneesh (born Chandra Mohan Jain, 11 December 1931 – 19 January 1990), 
                            also known as Acharya Rajneesh, Bhagwan Shri Rajneesh, and later as Osho,
                             was an Indian spiritual teacher and founder of the Rajneesh movement.{'\n'}{'\n'}              
                            </Text>
                        </View>
                    </View>
                  </View>
              </TouchableOpacity>
          </ScrollView>
          <FooterComponent></FooterComponent>
      </View>
    );
  };
  
export default SingleBlogComponent;
