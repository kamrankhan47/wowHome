import {StyleSheet, Text, View, StatusBar, Image} from 'react-native';
import React from 'react';
import SvgFrame from '../src/elements/icons/Frame';
import SvgTime from '../src/elements/icons/Time';
import SvgLocation from '../src/elements/icons/Location';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorites } from '../Redux/FavoritesSlice';

const Details = ({route, navigation}: any) => {
  const dispatch = useDispatch<any>();
 
  const {item} = route.params;
  
  const addtobookings=(item:any)=>{
     dispatch(addFavorites(item))
   
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#6e6be8'} />

      <Text style={styles.headerText}>Pick a Service</Text>
      <View
        style={{width: 311, height: 143, flexDirection: 'row',borderRadius:10,}}>
        <Image
          source={{uri: item.image}}
          style={{width: 120, height: 120, borderRadius: 10, margin: 10}}
        />
        <View style={{alignItems:"center",justifyContent:"center",}}>
        <View style={{borderWidth:1,borderRadius:10,width:120,height:28,borderColor:"#583EF2"}}>
          <Text style={{color:"#583EF2",textAlign:"center"}}>${item.price}/hour</Text>
        </View>
        <Text style={styles.serviceName}>{item.name}</Text>
        </View>
      </View>
      <View style={{borderWidth:1,width:311,height:80,borderRadius:20,marginTop:20}}>
        <Text style={{textAlign:"center",fontFamily:'Poppins-Medium',color:"#38385E"}}>
          {item.description}
        </Text>
      </View>
      <View style={{borderBottomWidth:1,width:311,height:70,marginTop:20,justifyContent:"center",}}>
        <Text style={{color:"#1F1F39",fontSize:14,fontFamily:"Poppins-Medium"}}>
          Working Day
        </Text>
        <View style={{flexDirection:"row",gap:10,alignItems:"center"}}>
        <SvgFrame/>
        <Text>{item.workingDays}</Text>
        </View>
      </View>
      <View style={{borderBottomWidth:1,width:311,height:70,marginTop:20,justifyContent:"center",}}>
        <Text style={{color:"#1F1F39",fontSize:14,fontFamily:"Poppins-Medium"}}>
          Start Time
        </Text>
        <View style={{flexDirection:"row",gap:10,alignItems:"center"}}>
        <SvgTime/>
        <Text>{item.startTime}</Text>
        </View>
      </View>
      <View style={{borderBottomWidth:1,width:311,height:70,marginTop:20,justifyContent:"center",}}>
        <Text style={{color:"#1F1F39",fontSize:14,fontFamily:"Poppins-Medium"}}>
         Location
        </Text>
        <View style={{flexDirection:"row",gap:10,alignItems:"center"}}>
        <SvgLocation/>
        <Text>{item.location}</Text>
        </View>
      </View>
      <TouchableOpacity style={{width:140,height:50,backgroundColor:"#583EF2",borderRadius:10,justifyContent:"center",marginTop:20,}} onPress={()=>addtobookings(item)}>
        <Text style={{textAlign:"center",fontSize:14,color:'white',fontFamily:"Poppins-Medium"}}>
          Book Now
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  statusBar: {
    backgroundColor: '#6e6be8',
    flex: 1,
  },
  headerText: {
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'Poppins-Medium',
    color: '#6e6be8',
    marginTop: 80,
  },
  serviceName: {
    fontSize: 20,
    fontFamily: 'Poppins-Medium',
    color: '#1F126B',
    width: 120,
    textAlign: 'center',
  },
  workingDays: {
    textAlign: 'justify',
  },
});
