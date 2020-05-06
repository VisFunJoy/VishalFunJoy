import React, { Component } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity  } from 'react-native';
import NavBarComponent  from '../NavbarComponent/index'
import FooterComponent  from '../Footer/index'

function HomeComponent({navigation}) {
    return (
      <View style={{flex: 1}}>
          <ScrollView>
              <NavBarComponent screenName="Home" navigation={navigation}></NavBarComponent>
              {/* <Text style={{fontFamily: "comicNeueRegular"}}>Home Component </Text>
              <Button
                onPress={() => navigation.navigate('Contact')}
                title="Contact"
                color="#841584"
              /> */}
              <Text style={{fontFamily: "comicNeueRegular", fontSize: 30, fontWeight: '800', margin: 10}}>
                I am a Full Stack Developer based in India.
              </Text>
              <Text style={{fontFamily: "comicNeueRegular", fontSize: 20, margin: 10}}>
                  Hello, myself Vishal Deep, I am a php, react native and angular developer. 
                  I have experience of around 2.5 years. I have built many websites and mobile apps 
                  in the above technologies.
                  I have good knowledge about HTML, CSS, javascript and mysql.              
               </Text>
               <View style={{display: 'flex', justifyContent: "center", alignItems: "center"}}>
                  <Image style={{ width: 250, height: 250, margin: 5}} source={require('../../assets/Images/vishal2.jpg')} />
               </View>
               <View style={{display: 'flex', flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'center'}}>
                  <TouchableOpacity onPress = {() => navigation.navigate("Contact")}
                        style={{display: 'flex', justifyContent: "center", alignItems: "center", margin: 20, flexWrap: "wrap"}}>
                      <Image style={{ width: 100, height: 100, margin: 5}} source={require('../../assets/Images/ContactMe.png')} />
                      <Text style={{fontFamily: "comicNeueRegular", fontSize: 20, margin: 10}}>
                              Contact-Me
                      </Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress = {() => navigation.navigate("About")}
                        style={{display: 'flex', justifyContent: "center", alignItems: "center", margin: 20, flexWrap: "wrap"}}>
                      <Image style={{ width: 100, height: 100, margin: 5}} source={require('../../assets/Images/MyWork.png')} />
                      <Text style={{fontFamily: "comicNeueRegular", fontSize: 20, margin: 10}}>
                              My-Work
                      </Text>
                  </TouchableOpacity>
               </View>
          </ScrollView>
          <FooterComponent></FooterComponent>
      </View>
    );
  };

export default HomeComponent;
