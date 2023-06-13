import React, { useEffect, useState } from 'react';
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
import SvgSearch from '../../src/elements/icons/Search';
import cleaningServiceCategories from './cleaning';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategory } from '../../Redux/CategorySlice';
import SvgAll from '../../src/elements/icons/All';
import SvgClean from '../../src/elements/icons/Clean';
import SvgRepair from '../../src/elements/icons/Repair';
import SvgPest from '../../src/elements/icons/Pest';
import SvgFood from '../../src/elements/icons/Food';
import SvgLaundry from '../../src/elements/icons/Laundry';
import { getAllService } from '../../Redux/ServiceSlice';

const Home = ({ navigation }: any) => {
  const [first, setfirst] = useState<any>([]);
  const dispatch = useDispatch<any>();
  const services = useSelector((state: any) => state.service.data);
  const [activeCategory, setActiveCategory] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    dispatch(getAllService());
  }, []);

  const handleSearch = (text: string) => {
    setSearchQuery(text);
    if (text) {
      const filteredServices = services.filter((service: any) =>
        service.name.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredData(filteredServices);
    } else {
      setFilteredData([]);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent backgroundColor="#6e6be8" />
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Hi Tony,</Text>
          <Text style={styles.subHeaderText}>Need Some Help Today?</Text>
          <View style={styles.searchContainer}>
            <SvgSearch style={styles.searchIcon} />
            <TextInput
              placeholder="Find it Here"
              style={styles.searchInput}
              maxLength={20}
              value={searchQuery}
              onChangeText={handleSearch}
            />
          </View>
        </View>
      </View>
      <View style={styles.categoriesContainer}>
        <View style={styles.categoriesRow}>
          <TouchableOpacity
            style={[
              styles.categoryButton,
              activeCategory === 'All' && styles.activeCategoryButton,
            ]}
            onPress={() => setActiveCategory('All')}
          >
            <SvgAll />
            <Text style={styles.categoryButtonText}>All</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.categoryButton,
              activeCategory === 'Clean' && styles.activeCategoryButton,
            ]}
            onPress={() => setActiveCategory('Clean')}
          >
            <SvgClean />
            <Text style={styles.categoryButtonText}>Clean</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.categoryButton,
              activeCategory === 'Repair' && styles.activeCategoryButton,
            ]}
            onPress={() => setActiveCategory('Repair')}
          >
            <SvgRepair />
            <Text style={styles.categoryButtonText}>Repair</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.categoriesRow}>
          <TouchableOpacity
            style={[
              styles.categoryButton,
              activeCategory === 'Pest Control' && styles.activeCategoryButton,
            ]}
            onPress={() => setActiveCategory('Pest Control')}
          >
            <SvgPest />
            <Text style={styles.categoryButtonText}>Pest Control</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.categoryButton,
              activeCategory === 'Food' && styles.activeCategoryButton,
            ]}
            onPress={() => setActiveCategory('Food')}
          >
            <SvgFood />
            <Text style={styles.categoryButtonText}>Food</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.categoryButton,
              activeCategory === 'Laundry' && styles.activeCategoryButton,
            ]}
            onPress={() => setActiveCategory('Laundry')}
          >
            <SvgLaundry />
            <Text style={styles.categoryButtonText}>Laundry</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <Text style={styles.toppick}>Top Pick</Text>
      </View>
      <View style={{ height: 300, marginHorizontal: 20 }}>
        <FlatList
          style={{ flex: 1 }}
          contentContainerStyle={{ gap: 20 }}
          horizontal={true}
          data={searchQuery ? filteredData : services}
          keyExtractor={(item: any) => item._id}
          renderItem={({ item, index }) => (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                marginVertical: 10,
              }}
            >
              <TouchableOpacity
                onPress={() => navigation.navigate('Details', { item })}
              >
                <View
                  style={{
                    width: 150,
                    height: 200,
                    backgroundColor: '#e8e8fd',
                    borderRadius: 10,
                    alignItems:"center",
                    gap:10,
                    justifyContent:"center"

                  }}
                >
                  <Text style={{fontSize:16,color:"#38385E"}}>{item.name}</Text>
                  <Image
                    source={{ uri: item.image }}
                    style={{ width: 120, height: 120,borderBottomLeftRadius:60,borderBottomRightRadius:60,borderTopRightRadius:60 }}
                  />
                </View>
              </TouchableOpacity>
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
    borderColor: '#e8e8fd',
  },
  activeCategoryButton: {
    borderColor: '#6e6be8',
  },
  categoryButtonText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
  },
  toppick: {
    color: '#1F126B',
    fontSize: 20,
    fontFamily: 'Poppins-Medium',
    marginLeft: 20,
    marginTop: 10,
  },
});
