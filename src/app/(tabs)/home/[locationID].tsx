import {
    StyleSheet,
    SafeAreaView,
    ScrollView,
    useColorScheme,
    Image,
    View,
    Pressable
  } from 'react-native';
  import { Text } from '@/src/components/Themed';
  import { Colors } from '@/src/constants/Colors';
import { Link, Stack, useLocalSearchParams } from 'expo-router';
import { allLocationsData } from '@/src/data';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import stamps from '@/src/components/stamps';
import * as Location from 'expo-location';
  
  export default function LocationDetails() {
    const colorScheme = useColorScheme();
    const {locationID} = useLocalSearchParams();
    const locationData = allLocationsData.find((p) => p.id == Number(locationID)) // Gets location data from locationID passed into component
    const [stampInRange, setStampInRange] = useState(true)
    const [stampCollected, setStampCollected] = useState(false)

    async function collectStamp() {
      let { status } = await Location.requestForegroundPermissionsAsync();
      
      if (status !== 'granted') {
        alert('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      console.log(location)
    }

    if (locationID == undefined) {
      return <Text>Error! Could not find location!</Text>
    }
  
    return (
      <SafeAreaView style={[styles.container, {backgroundColor: colorScheme == "dark" ? Colors.dark.background : Colors.light.background}]}>
        <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
            <Stack.Screen options={{title: "", headerBackTitle: "Back", headerTintColor: colorScheme == "light" ? Colors.light.tint : Colors.dark.tint, headerRight: () => (
              <Pressable>
                <Ionicons name="heart-outline" size={26} style={{ color: 'white' }} /> 
              </Pressable>
            )}} />

            <Image source={locationData?.image} style={styles.headerImage} />

            <View style={styles.mainViewContainer}>
              <Text style={[styles.title]}>
                {locationData?.name}
              </Text>

              <Link href="" asChild>
                <Pressable style={{ marginVertical: 12 }}>
                  <Text style={[styles.addressText, {color: Colors.light.tint}]}>
                    {locationData?.address1}
                  </Text>
                  <Text style={[styles.addressText, {color: Colors.light.tint}]}>
                    {locationData?.city}, {locationData?.state} {locationData?.zip}
                  </Text>
                </Pressable>
              </Link>

              <View style={styles.starRatingView}>
                <View style={{ flexDirection: 'row', alignContent: 'center', gap: 4 }}>
                  <Text style={{ color: 'white', fontSize: 16}}>
                    4.8 
                  </Text>
                  <Ionicons name='star-outline' size={17} style={{ color: 'white' }} />
                </View>
              </View>

              <Text style={[styles.descriptionText, {color: colorScheme == 'light' ? Colors.light.secondaryText : Colors.dark.secondaryText}]}>
                {locationData?.description}
              </Text>

              <Pressable style={[styles.collectStampButton, {backgroundColor: Colors.light.tint }]} onPress={collectStamp}>
                <Text style={{ fontSize: 17, fontWeight: 600, color: 'white'}}>Collect This Stamp</Text>
              </Pressable>

              <View style={{ marginVertical: 12, flexDirection: 'row', flexWrap: 'wrap', width: '100%', gap: 12 }}>
                <Pressable style={[styles.locationDetailsButton, { backgroundColor: colorScheme == 'light' ? Colors.light.contrastBackground : Colors.dark.contrastBackground }]}>
                  <Ionicons name='map-outline' size={30} style={{ color: colorScheme == 'light' ? Colors.light.text : Colors.dark.text }} />

                  <Text style={styles.locationDetailsButtonText}>Get Directions</Text>
                </Pressable>

                <Pressable style={[styles.locationDetailsButton, { backgroundColor: colorScheme == 'light' ? Colors.light.contrastBackground : Colors.dark.contrastBackground }]}>
                  <Ionicons name='link-outline' size={30} style={{ color: colorScheme == 'light' ? Colors.light.text : Colors.dark.text }} />

                  <Text style={styles.locationDetailsButtonText}>Visit Website</Text>
                </Pressable>
              </View>

              <View style={{ marginVertical: 32, alignItems: 'center' }}>
                <Image source={stamps.blankStamp} style={{ height: 120, width: 120, objectFit: 'cover'}} />

                <Text style={{ marginTop: 16 }}>
                  Stamp Not Collected Yet
                  </Text>
              </View>

            </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1, // Makes background full screen
    },
    scrollView: {
      paddingBottom: 20
    },
    headerImage: {
      width: "100%",
      height: 260,
      objectFit: 'cover'
    },
    mainViewContainer: {
      margin: 12
    },
    title: {
      fontSize: 26,
      fontWeight: 700,
    },
    addressText: {
      fontSize: 16,
      fontWeight: 'normal',
    },
    starRatingView: {
      backgroundColor: 'gray',
      width: 94,
      borderRadius: 6,
      alignItems: 'center',
      paddingVertical: 5
    },
    descriptionText: {
      marginVertical: 24,
      fontSize: 14,
      lineHeight: 20
    },
    collectStampButton: {
      width: '100%',
      paddingVertical: 16,
      alignItems: 'center',
      borderRadius: 8,
    },
    locationDetailsButton: {
      flex: 1,
      borderRadius: 8,
      paddingVertical: 20,
      paddingHorizontal: 4,
      alignItems: 'center'
    },
    locationDetailsButtonText: {
      fontSize: 16,
      paddingTop: 12,
      fontWeight: 600
    }
  });
  