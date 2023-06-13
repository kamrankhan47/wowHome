import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { FlatList } from 'react-native-gesture-handler';
import SvgFrame from '../../src/elements/icons/Frame';

const Bookings = () => {
  
  const favorites = useSelector((state: any) => state.favorites.data);

  return (
    <View>
      <View style={{marginTop:100,alignItems:"center"}}>
        <View>
        <Text style={{color:"#1F1F39",fontSize:20,fontFamily:"Poppins-Medium"}}>
          Your Bookings
        </Text>
        </View>
      <FlatList
      data={favorites}
      contentContainerStyle={{gap:10}}
      renderItem={({item})=>(
        

        <View style={{borderWidth:1,width:311,height:150,marginTop:20,justifyContent:"center",borderTopRightRadius:20,borderBottomLeftRadius:20,borderBottomRightRadius:20,alignItems:"center"}}>
        <Text style={{color:"#1F1F39",fontSize:14,fontFamily:"Poppins-Medium"}}>
          Working time
        </Text>
        <View style={{flexDirection:"row",gap:10,alignItems:"center",width:200}}>
        <SvgFrame/>
        <View>
          <Text>{item.workingDays}</Text>
        <Text>{item.startTime}</Text>
        <Text>{item.location}</Text>

        </View>
        

        

        </View>


          </View>

      )}

      
      />
      </View>
     
    </View>
  )
}

export default Bookings

const styles = StyleSheet.create({})