import React, { Component, useState } from 'react';
import { View, ScrollView, Text, TextInput, StyleSheet, Dimensions, Button, Alert, ActivityIndicator } from 'react-native';
import NavBarComponent  from '../NavbarComponent/index'
import FooterComponent  from '../Footer/index'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  inputBox: {
    width: windowWidth*0.8, 
    borderBottomColor: "#808080",
    borderBottomWidth: 1,
    height: 100,
    fontSize: 20
  }
});
    
export class ContactMeComponent extends Component {

  constructor(props){

    super(props);
    
    this.state={
          projectTitle : '',
          fullName : '',
          emailAddress : '',
          contactNumber : '',
          displayIndicator : false
        }
  }

  clearForm() {
      this.textInput1.clear();
      this.textInput2.clear();
      this.textInput3.clear();
      this.textInput4.clear();
  }

  formSubmitted(projectTitle, fullName, emailAddress, contactNumber) {

    this.setState({displayIndicator: true});
    if (projectTitle == '' || fullName == '' || emailAddress == '' || contactNumber == '') {
      // Works on both Android and iOS
      Alert.alert(
        "VisFunJoy",
        "Parameter missing",
        [
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ],
        { cancelable: false }
      );

      return;
    }

    fetch('http://visfunjoy.com/apis.visfunjoy.com/createContactMessage.php', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            projectTitle: projectTitle,
            fullName: fullName,
            emailAddress: emailAddress,
            phoneNumber: contactNumber
          })
        }) 
        .then((response) => response.json())
        .then((json) => {
          this.setState({displayIndicator: false});

           if (json != {}) {
             // Works on both Android and iOS
             Alert.alert(
              "VisFunJoy",
              "Form Submitted Properly",
              [
                { text: "OK", onPress: () => this.clearForm()}
              ],
              { cancelable: false }
            );
           }
           else {
             // Works on both Android and iOS
             Alert.alert(
              "VisFunJoy",
              "Error while submitting form",
              [
                { text: "OK", onPress: () => this.props.navigation.navigate("Contact") }
              ],
              { cancelable: false }
            );
           }
        })
        .catch((error) => {
          console.error(error);
        });;
      }

  render() {
    return (
      <View style={{flex: 1}}>
            <ScrollView>
                <NavBarComponent screenName="Contact" navigation={this.props.navigation}></NavBarComponent>
                <View style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                    <Text style={{marginLeft: 40 , fontSize: 30, marginTop:20, marginBottom: 20}}>
                        Get in touch with me regarding your Project
                    </Text>
                    <ActivityIndicator size="large" color="#808080" animating={this.state.displayIndicator}/>
                    <TextInput
                      style={styles.inputBox}
                      placeholder="Your Project title"
                      onChangeText={text => this.setState({ projectTitle : text })}
                      ref={input => { this.textInput1 = input }}
                    />
                     <TextInput
                      style={styles.inputBox}
                      placeholder="Your Full Name"
                      onChangeText={text => this.setState({ fullName : text })}
                      ref={input => { this.textInput2 = input }}
                    />
                     <TextInput
                      style={styles.inputBox}
                      placeholder="Your Email Address"
                      onChangeText={text => this.setState({ emailAddress : text })}
                      ref={input => { this.textInput3 = input }}
                    />
                     <TextInput
                      style={styles.inputBox}
                      placeholder="Your Contact number"
                      onChangeText={text => this.setState({ contactNumber : text })}
                      ref={input => { this.textInput4 = input }}
                    />

                    <View style={{marginTop: 80, width: 250}}>
                      <Button
                        onPress={() => this.formSubmitted(this.state.projectTitle, this.state.fullName,
                                                     this.state.emailAddress, this.state.contactNumber)}
                        title="Send"
                        color="#000000"
                      />
                    </View>
                </View>
            </ScrollView>
            <FooterComponent></FooterComponent>
        </View>
    );
  }
}

