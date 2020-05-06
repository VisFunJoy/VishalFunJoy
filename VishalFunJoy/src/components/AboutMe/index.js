import React, { Component } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity  } from 'react-native';
import NavBarComponent  from '../NavbarComponent/index'
import FooterComponent  from '../Footer/index'
import * as Progress from 'react-native-progress';

function AboutMeComponent({navigation}) {
    return (
      <View style={{flex: 1}}>
          <ScrollView>
              <NavBarComponent screenName="About" navigation={navigation}></NavBarComponent>
            
              <Text style={{fontFamily: "comicNeueRegular", fontSize: 30, fontWeight: '800', margin: 10}}>
                About Me:
              </Text>
              <Text style={{fontFamily: "comicNeueRegular", fontSize: 20, margin: 10, marginBottom: 30}}>
                  I am a Thapar University graduate in first division. My work includes: {'\n'}{'\n'}

                    1. https://jaohar.com in codeigniter{'\n'}
                    2. http://sskaura.com in codeigniter{'\n'}
                    3. http://visfunjoy.com in Angular and some more....{'\n'}{'\n'}

                  Currently, I am working as a freelancer on Upwork and looking for more work, so your projects are welcomed...            
              </Text>
              <View style={{display: 'flex', flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'center'}}>
  
                  <Image style={{ width: 200, height: 250, transform: [{ rotate: '10deg'}]}} source={require('../../assets/Images/vishal4.jpg')} />
                  <Image style={{ width: 200, height: 250, transform: [{ rotate: '-10deg'}]}} source={require('../../assets/Images/vishal6.jpg')} />

              </View>
              <Text style={{fontFamily: "comicNeueRegular", fontSize: 30, fontWeight: 'bold', 
                            margin: 10, marginTop: 50, fontWeight: '900'}}>
                Skills and Expertise:
              </Text>
              <TouchableOpacity style={{marginBottom: 30}}>
                  <View style={{marginBottom: 20}}>
                    <Text style={{fontFamily: "comicNeueRegular", fontSize: 20, margin: 10, marginBottom: 30}}>
                       1. Core PHP (86%)          
                    </Text>
                    <View style={{display:"flex", justifyContent:"center", alignItems: "center"}}>
                        <Progress.Bar progress={0.86} width={350} height={30} borderWidth={1} borderColor="#808080"
                                      color="#007bff"/>
                    </View>
                  </View>
                  <View style={{marginBottom: 20}}>
                    <Text style={{fontFamily: "comicNeueRegular", fontSize: 20, margin: 10, marginBottom: 30}}>
                       2. Codeigniter (80%)          
                    </Text>
                    <View style={{display:"flex", justifyContent:"center", alignItems: "center"}}>
                        <Progress.Bar progress={0.80} width={350} height={30} borderWidth={1} borderColor="#808080"
                                      color="#28a745"/>
                    </View>
                  </View>
                  <View style={{marginBottom: 20}}>
                    <Text style={{fontFamily: "comicNeueRegular", fontSize: 20, margin: 10, marginBottom: 30}}>
                      3.  HTML, CSS and Javascript (82%)          
                    </Text>
                    <View style={{display:"flex", justifyContent:"center", alignItems: "center"}}>
                        <Progress.Bar progress={0.82} width={350} height={30} borderWidth={1} borderColor="#808080"
                                      color="#17a2b8"/>
                    </View>
                  </View>
                  <View style={{marginBottom: 20}}>
                    <Text style={{fontFamily: "comicNeueRegular", fontSize: 20, margin: 10, marginBottom: 30}}>
                      4. Angular (75%)          
                    </Text>
                    <View style={{display:"flex", justifyContent:"center", alignItems: "center"}}>
                        <Progress.Bar progress={0.75} width={350} height={30} borderWidth={1} borderColor="#808080"
                                      color="#ffc107"/>
                    </View>
                  </View>
                  <View style={{marginBottom: 20}}>
                    <Text style={{fontFamily: "comicNeueRegular", fontSize: 20, margin: 10, marginBottom: 30}}>
                       5. React Native (82%)          
                    </Text>
                    <View style={{display:"flex", justifyContent:"center", alignItems: "center"}}>
                        <Progress.Bar progress={0.82} width={350} height={30} borderWidth={1} borderColor="#808080"
                                      color="#dc3545"/>
                    </View>
                  </View>
              </TouchableOpacity>
          </ScrollView>
          <FooterComponent></FooterComponent>
      </View>
    );
  };
  
export default AboutMeComponent;
