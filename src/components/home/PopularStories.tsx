import {ImageBackground, Pressable, StyleSheet, useColorScheme, View} from "react-native";
import {Text} from "@/src/components/Themed";
import {Link} from "expo-router";
import { Colors } from '@/src/constants/Colors';

interface PageProps {
    index: number,
    item: {
        image: any,
        title: string,
        link: string,
        availableStamps: number
    }
}

export default function PopularStories(props: PageProps) {
    const colorScheme = useColorScheme()

    return (
        <Link href="" asChild style={[styles.row, {backgroundColor: colorScheme == "light" ? Colors.light.contrastBackground : Colors.dark.contrastBackground}]}>
            <Pressable>
                <ImageBackground
                    source={props.item.image}
                    imageStyle={{ borderRadius: 8}}
                    style={styles.image}
                >
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {props.item.title}
                    </Text>
                    <Text style={styles.subtext}>
                        {props.item.availableStamps} Stamps
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
        height: 180,
        borderRadius: 8,
        justifyContent: 'flex-end',
    },
    textContainer: {
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        padding: 12,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8
    },
    text: {
        color: 'white',
        textAlign: 'left',
        fontWeight: 700,
        fontSize: 16,
    },
    subtext: {
        color: '#e9e9e9',
        textAlign: 'left',
        fontWeight: 400,
        fontSize: 16,
        marginTop: 4
    }
});