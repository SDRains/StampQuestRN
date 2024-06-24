import {
  StyleSheet, 
  useColorScheme,
  StatusBar,
  SafeAreaView,
  ScrollView,
  View,
  FlatList,
  Pressable
} from 'react-native';
import { Text } from '@/src/components/Themed';
import { Colors } from '@/src/constants/Colors';
import { popularStories, allStates } from '@/src/data';
import PopularStories from '@/src/components/home/PopularStories';
import StateList from '@/src/components/explore/StateList';
import { useState } from 'react';

export default function TabOneScreen() {
  const [showAllStates, setShowAllStates] = useState(false)
  const colorScheme = useColorScheme()

  return (
    <SafeAreaView style={[styles.container, {backgroundColor: colorScheme == "dark" ? Colors.dark.background : Colors.light.background}]}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={{margin: 12}}>
          <Text style={[styles.subtitle]}>
            Expeditions
          </Text>
        </View>

        <View style={{margin: 12}}>
          <Text style={[styles.subtitle]}>
            Explore By State
          </Text>

          <Pressable onPress={() => setShowAllStates(!showAllStates)} style={{ marginTop: 4 }}>
            <Text style={{ color: Colors.light.tint }}>
              {showAllStates ? "Hide All States" : "Show All States"}
            </Text>
          </Pressable>

          <FlatList
              style={{
                marginVertical: 12
              }}
              data={showAllStates ? allStates : allStates.slice(0, 8)}
              numColumns={2}
              columnWrapperStyle={{ gap: 12 }}
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              renderItem={({ item, index }) =>
                  <StateList item={item} key={index}/>
              }
          />
        </View>

        <View style={{margin: 12}}>
          <Text style={[styles.subtitle]}>
            Popular Stories
          </Text>

          <FlatList
              style={{
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
  },
  subtitle: {
    fontSize: 22,
    fontWeight: 600
  },
});
