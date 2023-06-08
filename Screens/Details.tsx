import { StyleSheet, Text, View,StatusBar } from 'react-native'
import React from 'react'

const Details = ({route,navigation}:any) => {
    const {item}=route.params
    
 
  return (
    
    <View>
        <StatusBar translucent backgroundColor="#e8e8fd" />
      <Text style={{fontSize:100}}>{item.name}</Text>
      <Text style={{textAlign:"justify"}}>{item.workingDays}</Text>
    </View>
  )
}

export default Details

const styles = StyleSheet.create({})