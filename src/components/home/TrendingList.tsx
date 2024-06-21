import {Image, Pressable, StyleSheet, useColorScheme, View} from "react-native";
import {Text} from "@/src/components/Themed";
import {Link} from "expo-router";
import { allLocationsData } from "@/src/data";
import { Ionicons } from "@expo/vector-icons";

interface PageProps {
    index: number,
    item: {
        locationID: number
    }
}

export default function TrendingList(props: PageProps) {
    const colorScheme = useColorScheme()
    const locationData = allLocationsData.find((p) => p.id == props.item.locationID) // Gets location data from locationID passed into component

    return (
        <Link href={`/home/${props.item.locationID}`} asChild style={[styles.trendingRow, {
            borderTopColor: colorScheme == "light" ? "#e4e4e4" : "#444",
            borderTopWidth: props.index == 0 ? 0 : 1
        }]}>
            <Pressable>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image source={locationData?.image} style={styles.image} />

                    <View style={styles.trendingTextView}>
                        <Text style={styles.locationText}>
                            {locationData?.name}
                        </Text>
                        <Text style={styles.stateText}>
                            {locationData?.state}
                        </Text>
                    </View>
                </View>

                <Ionicons name="chevron-forward" size={24} style={{ color: 'gray' }} /> 
            </Pressable>
        </Link>
    )
}

const styles = StyleSheet.create({
    trendingRow: {
        width: "100%",
        paddingVertical: 16,
        paddingHorizontal: 12,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'space-between',
    },
    image: {
        width: 56,
        height: 56,
        borderRadius: 56/2
    },
    trendingTextView: {
        marginLeft: 12
    },
    locationText: {
        fontWeight: 700,
        fontSize: 16,
        paddingBottom: 4
    },
    stateText: {
        fontWeight: "normal"
    }
});