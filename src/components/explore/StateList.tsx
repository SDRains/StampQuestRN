import {Image, Pressable, StyleSheet, useColorScheme, View} from "react-native";
import {Text} from "@/src/components/Themed";
import {Link} from "expo-router";
import { Colors } from '@/src/constants/Colors';

interface PageProps {
    item: {
        state: string,
        code: string
    }
}

export default function StateList(props: PageProps) {
    const colorScheme = useColorScheme()

    return (
        <Link href="" asChild style={[styles.row, {backgroundColor: colorScheme == "light" ? Colors.light.contrastBackground : Colors.dark.contrastBackground}]}>
            <Pressable>
                <Text style={styles.stateText}>{props.item.state}</Text>
            </Pressable>
        </Link>
    )
}

const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 8,
        marginVertical: 6, 
        flexWrap: 'wrap',
        flex: 1,
        padding: 4
    },
    stateText: {
        fontWeight: 500,
        fontSize: 16,
        flexWrap: "wrap",
        textAlign: "center",
        width: '100%',
        paddingVertical: 12
    }
});