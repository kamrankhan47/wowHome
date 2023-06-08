import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  FlatList,
} from 'react-native';
import React from 'react';
import SvgSearch from '../../src/elements/icons/Search';
import cleaningServiceCategories from './cleaning';



const Home = ({navigation}:any) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent backgroundColor="#6e6be8" />
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Hi John,</Text>
          <Text style={styles.subHeaderText}>Need Some Help Today?</Text>
          <View style={styles.searchContainer}>
            <SvgSearch style={styles.searchIcon} />
            <TextInput
              placeholder="Find it Here"
              style={styles.searchInput}
              maxLength={20}
            />
          </View>
        </View>
      </View>
      <View style={styles.categoriesContainer}>
        <View style={styles.categoriesRow}>
          <TouchableOpacity style={styles.categoryButton}>
            <Text style={styles.categoryButtonText}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryButton}>
            <Text style={styles.categoryButtonText}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryButton}>
            <Text style={styles.categoryButtonText}>Home</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.categoriesRow}>
          <TouchableOpacity style={styles.categoryButton}>
            <Text style={styles.categoryButtonText}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryButton}>
            <Text style={styles.categoryButtonText}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryButton}>
            <Text style={styles.categoryButtonText}>Home</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <Text style={styles.toppick}>Top Pick</Text>
      </View>
      <View style={{height:200}}>
  <FlatList
    contentContainerStyle={{ gap: 20, marginHorizontal: 40 }}
    data={cleaningServiceCategories}
    keyExtractor={(item) => item.id.toString()}
    renderItem={({ item }) => (
      <View style={{ flexDirection: "row", justifyContent: "space-between", marginVertical: 10 }}>
        <TouchableOpacity onPress={()=>navigation.navigate("Details",{item})}>
          <View style={{ width: 150, height: 200, backgroundColor: "#ffebf0" }}>
            <Text>{item.name}</Text>
          </View>
        </TouchableOpacity>
        <View style={{ flexDirection: "column", justifyContent: "space-between", marginLeft: 10 }}>
          <TouchableOpacity>
            <View style={{ height: 90, width: 145, backgroundColor: "#eaeaff", alignItems: "center" }}>
              <Text style={{ marginTop: 10 }}>{item.name}</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={{ height: 90, width: 145, backgroundColor: "#ecfcff" }}>
              <Text>{item.name}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    )}
  />
</View>

   
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  content: {
    backgroundColor: '#6e6be8',
    borderBottomLeftRadius: 75,
    borderBottomRightRadius: 75,
    
  },
  header: {
    margin: 30,
  },
  headerText: {
    fontSize: 30,
    fontFamily: 'Poppins-Medium',
    color: 'white',
  },
  subHeaderText: {
    fontFamily: 'Poppins-Medium',
    color: 'white',
  },
  searchContainer: {
    backgroundColor: 'white',
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    width: 300,
    alignSelf: 'center',
    
  },
  searchIcon: {
    marginLeft: 5,

  },
  searchInput: {
    color: '#78789D',
    marginLeft: 5,
  
  },
  categoriesContainer: {
    marginTop: 10,
    rowGap: 10,

  },
  categoriesRow: {
    flexDirection: 'row',
    gap: 20,
    justifyContent: 'center',

  },
  categoryButton: {
    borderWidth: 2,
    width: 90,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
    borderColor: "#e8e8fd",

  },
  categoryButtonText: {
    // Add any specific styles for the category button text here
  },
  toppick: {
    color: "#1F126B",
    fontSize: 20,
    fontFamily: "Poppins-Medium",
    marginLeft: 20,
    marginTop: 10,
  },
  
});
