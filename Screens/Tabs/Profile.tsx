import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import SvgVector from '../../src/elements/icons/Vector';
import SvgMan from '../../src/elements/icons/Man';

const Profile = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          backgroundColor: '#6E6BE8',
          borderBottomLeftRadius: 75,
          borderBottomRightRadius: 75,
          height: 190,
        }}>
        <View style={{marginTop: 60}}>
          <Text style={{color: 'white', fontSize: 30, textAlign: 'center'}}>
            Your Profile
          </Text>
        </View>
      </View>
      <View style={{alignItems:"center",justifyContent:"center"}}>
        <Image source={require('../../src/assets/images/tony.png')} style={{position:"absolute",width:135,height:135,borderBottomLeftRadius:70,borderBottomRightRadius:70,borderTopRightRadius:70}}/>
      </View>
      <View style={{marginTop:80,borderBottomWidth:1,marginHorizontal:20}}>
        <Text style={{fontSize:20,fontFamily:"Poppins-Medium"}}>Your Name</Text>
        <View style={{flexDirection:"row",marginTop:10,gap:20}}>
           <SvgMan/>
        <Text style={{fontFamily:"Poppins-Medium"}}>Tony Montana</Text>
        </View>
       
      </View>
      <View style={{marginTop:40,borderBottomWidth:1,marginHorizontal:20}}>
        <Text style={{fontSize:20,fontFamily:"Poppins-Medium"}}>Phone Number</Text>
        <View style={{flexDirection:"row",marginTop:10,gap:20}}>
           <SvgMan/>
        <Text style={{fontFamily:"Poppins-Medium"}}>0502111111</Text>
        </View>
       
      </View>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({});
