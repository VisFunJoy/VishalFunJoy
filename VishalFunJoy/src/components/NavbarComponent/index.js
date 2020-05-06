import React, { Component } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements'
import { HeaderBackButton } from '@react-navigation/stack';

function NavBarComponent(props) {
        function BackButton() {
            if (props.screenName == "SingleBlog") {
                return (
                    <HeaderBackButton onPress={() => props.navigation.navigate("Blog")} />
                )
            } else {
                return (
                    <Text></Text>
                )
            }
        } 
    return (
        <View style={{borderBottomWidth: 1, borderBottomColor: '#808080', flexWrap: 'wrap', flexDirection: 'row'}}>
            {/* <BackButton></BackButton> */}
            <TouchableOpacity
            onPress={() => props.navigation.navigate("Home")}>
                <Image style={{ width: 50, height: 50, margin: 5}} 
                    source={require('../../assets/Images/FunJoyLogoCircle.png')} 
                />
            </TouchableOpacity>
            <Text style={{marginTop: 15, fontSize: 20, fontFamily: 'comicNeueRegular'}}>{props.screenName}</Text>
            <View style={{position: 'absolute', right: 10, top: 20}}>
                <Icon
                    name='menu'
                    type='material'
                    color='#808080'
                    onPress={() => props.navigation.toggleDrawer()}
                />
            </View>
        </View>
    );
  };

export default NavBarComponent;
