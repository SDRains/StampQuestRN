import {
  StyleSheet,
  StatusBar,
  SafeAreaView,
  ScrollView,
  View,
  Image,
  useColorScheme,
  FlatList,
  ImageBackground 
} from 'react-native';
import images from '@/src/components/images'
import { Text } from '@/src/components/Themed';
import { Colors } from '@/src/constants/Colors';
import TrendingList from "@/src/components/home/TrendingList";
import TravelList from "@/src/components/explore/TravelList";
import PopularStories from '@/src/components/home/PopularStories';
import { trendingLocations, travelList, popularStories } from '@/src/data';
import TopLocation from '@/src/components/home/TopLocation';

export default function TabOneScreen() {
  const colorScheme = useColorScheme()

  return (
    <SafeAreaView style={[styles.container, {backgroundColor: colorScheme == "dark" ? Colors.dark.background : Colors.light.background}]}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <Text style={[styles.title, {marginTop: 12}]}>
          Adventure Awaits!
        </Text>

        <View style={styles.topLocationView}>
          <TopLocation />
        </View>

        <View style={{marginVertical: 12}}>
          <Text style={[styles.subtitle]}>
            Trending
          </Text>

          <FlatList
              style={{
                margin: 12,
                backgroundColor: colorScheme == "light" ? Colors.light.contrastBackground : Colors.dark.contrastBackground,
                borderRadius: 4
              }}
              data={trendingLocations}
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              renderItem={({ item, index }) =>
                  <TrendingList index={index} item={item} key={index}/>
              }
          />
        </View>

        <View style={{marginVertical: 12}}>
          <Text style={[styles.subtitle]}>
            Travel Lists
          </Text>

          <FlatList
              style={{
                paddingHorizontal: 12,
                marginVertical: 12
              }}
              data={travelList}
              horizontal={true}
              contentContainerStyle={{gap: 16}}
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              renderItem={({ item, index }) =>
                  <TravelList index={index} item={item} key={index}/>
              }
          />
        </View>

        <View style={{marginVertical: 12}}>
          <Text style={[styles.subtitle]}>
            Popular Stories
          </Text>

          <FlatList
              style={{
                paddingHorizontal: 12,
                marginVertical: 12
              }}
              data={popularStories}
              contentContainerStyle={{gap: 12}}
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              renderItem={({ item, index }) =>
                  <PopularStories index={index} item={item} key={index}/>
              }
          />
        </View>

        <View style={{paddingVertical: 8}} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Makes background full screen
    paddingTop: StatusBar.currentHeight
  },
  scrollView: {
    paddingVertical: 12
  },
  title: {
    fontSize: 30,
    fontWeight: 700,
    marginHorizontal: 12
  },
  subtitle: {
    fontSize: 22,
    fontWeight: 600,
    marginHorizontal: 12
  },
  topLocationView: {
    marginTop: 24,
    marginBottom: 24,
    marginHorizontal: 12,
  },
});
