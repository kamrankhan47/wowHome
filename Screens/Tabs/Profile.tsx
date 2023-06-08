import {Image, SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';



const Profile = () => {
  return (
    <SafeAreaView style={{flex:1,}}>
      <View
        style={{
          backgroundColor: '#6E6BE8',
          borderBottomLeftRadius: 75,
          borderBottomRightRadius: 75,
          height: 190,
        }}>
        <View style={{marginTop:60}}>
          <Text style={{color: 'white',fontSize:30,textAlign:"center"}}>Your Profile</Text>
        </View>
      </View>
      <View>
        
      </View>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({});
