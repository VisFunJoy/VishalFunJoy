import React, { Component } from 'react';
import { Linking, Text, TouchableOpacity, View, ImageBackground } from 'react-native';
import { Icon } from 'react-native-elements'

function FooterComponent() {
    return (
        <View style={{borderTopWidth: 1, borderTopColor: '#808080', flexWrap: 'wrap', flexDirection: 'row'}}>
            <ImageBackground style={{ width: 40, height: 40, margin: 5}} 
                 source={require('../../assets/Images/FacebookIcon.png')} >
                 <TouchableOpacity
                    onPress={() => Linking.openURL('https://www.facebook.com/vishal.deep.35110418')}
                    style={{flex: 1}}>
                </TouchableOpacity>
            </ImageBackground>
            <ImageBackground style={{ width: 40, height: 40, margin: 5}} 
                 source={require('../../assets/Images/UpworkIcon.png')} >
                 <TouchableOpacity
                    onPress={() => Linking.openURL('https://www.upwork.com/o/profiles/users/~01154f3437eec3dcf6/')}
                    style={{flex: 1}}>
                </TouchableOpacity>
            </ImageBackground>
            <Text style={{marginTop: 15, fontSize: 20, fontFamily: 'comicNeueRegular', position: 'absolute', right: 10}}>CopyRight 2020</Text>
        </View>
    );
  };

export default FooterComponent;
