import React, { Component, useState } from 'react';
import { View, ScrollView, Text, TextInput, StyleSheet, Dimensions } from 'react-native';
import NavBarComponent  from '../NavbarComponent/index'
import FooterComponent  from '../Footer/index'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  inputBox: {
    width: windowWidth*0.8, 
    borderBottomColor: "#808080",
    borderBottomWidth: 1,
    height: 100
  }
});

const [title] = useState
function setParameter(parameter, value) {

}

function ContactMeComponent({navigation}) {
    return (
      <View style={{flex: 1}}>
            <ScrollView>
                <NavBarComponent screenName="Contact" navigation={navigation}></NavBarComponent>
                <View style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                    <Text style={{marginLeft: 40 , fontSize: 30}}>
                        Get in touch with me regarding your Project
                    </Text>
                    <TextInput
                      style={styles.inputBox}
                      placeholder="Your Project title"
                      onChangeText={text => setParameter('title', text)}
                    />
                </View>
            </ScrollView>
            <FooterComponent></FooterComponent>
        </View>
    );
  };
  
export default ContactMeComponent;
