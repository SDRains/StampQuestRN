import {ImageBackground, Pressable, StyleSheet, View} from "react-native";
import {Text} from "@/src/components/Themed";
import {Link} from "expo-router";
import { locationOfMonth, allLocationsData } from "@/src/data";

export default function TopLocation() {
    const locationData = allLocationsData.find((p) => p.id == locationOfMonth) // Gets location data from locationID from global component 'locationOfMonth'

    return (
        <Link href="" asChild style={styles.row}>
            <Pressable>
                <ImageBackground
                    source={locationData?.image}
                    imageStyle={{ borderRadius: 8}}
                    style={styles.image}
                >
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {locationData?.name}
                    </Text>
                </View>
            </ImageBackground>
            </Pressable>
        </Link>
    )
}

const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        alignItems: "center",
    },
    image: {
        width: '100%',
        height: 300,
        borderRadius: 8,
        justifyContent: 'flex-end',
    },
    textContainer: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        paddingVertical: 16,
        paddingHorizontal: 8,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8
    },
    text: {
        color: 'white',
        textAlign: 'left',
        fontSize: 16,
        fontWeight: 600
    },
});