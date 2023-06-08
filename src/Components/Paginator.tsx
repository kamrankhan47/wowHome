import { StyleSheet, Text, View ,Animated,useWindowDimensions} from 'react-native'
import React from 'react'

const Paginator = ({data,scrollX}:any) => {
    const {width}=useWindowDimensions()
  return (
    <View style={{flexDirection:"row",height:64}}>
      {data.map((_:any,index:number)=>{
            const inputRange=[(index-1)*width,index*width,(index+1)*width]
            const dotWidth=scrollX.interpolate({
                inputRange,
                outputRange:[10,30,10],
                extrapolate:"clamp"
            })
            const opacity=scrollX.interpolate({
                inputRange,
                outputRange:[0.3,1,0.3],
                extrapolate:"clamp"

            })
            
              return <Animated.View style={[styles.dot,{width:dotWidth,opacity}]} key={index.toString()}/>  

      })}
    </View>
  )
}

export default Paginator

const styles = StyleSheet.create({
    dot:{
        height:10,
        borderRadius:5,
        backgroundColor:"#F7658B",
        marginHorizontal:8,
    
    

    }
})