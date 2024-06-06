import {Image, Pressable, StyleSheet, useColorScheme, View} from "react-native";
import {Text} from "@/src/components/Themed";
import {Link} from "expo-router";
import { Colors } from '@/src/constants/Colors';
import { allLocationsData } from "@/src/data";

interface PageProps {
    index: number,
    item: {
        locationID: number
    }
}

export default function TravelList(props: PageProps) {
    const colorScheme = useColorScheme()
    const locationData = allLocationsData.find((p) => p.id == props.item.locationID) // Gets location data from locationID passed into component

    return (
        <Link href="" asChild style={[styles.column, {backgroundColor: colorScheme == "light" ? Colors.light.contrastBackground : Colors.dark.contrastBackground}]}>
            <Pressable>
                <Image source={locationData?.image} style={styles.image} />

                <View style={styles.textView}>
                    <Text style={styles.listTitle}>
                        {locationData?.name}
                    </Text>
                </View>
            </Pressable>
        </Link>
    )
}

const styles = StyleSheet.create({
    column: {
        flexDirection: "column",
        alignItems: "center",
        borderRadius: 8,
        width: 180,
    },
    image: {
        width: "100%",
        height: 140,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8
    },
    textView: {
        paddingHorizontal: 8,
        paddingVertical: 16
    },
    listTitle: {
        fontWeight: 700,
        fontSize: 16,
        flexWrap: "wrap",
        textAlign: "center"
    }
});