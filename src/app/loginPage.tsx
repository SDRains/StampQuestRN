import { Text, View } from '@/src/components/Themed';
import {StyleSheet, useColorScheme} from "react-native";
import {Link} from "expo-router";
import {Colors} from "@/src/constants/Colors"

const LoginPage = () => {
    const colorScheme = useColorScheme()
    const modeColors = colorScheme == "light" ? Colors.light : Colors.dark

    return (
        <View style={styles.container}>
            <Text>Login Page</Text>

            <Link href="/(tabs)/home" style={{ color: modeColors.text }}>
                Go to home page
            </Link>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        paddingHorizontal: 8
    }
})

export default LoginPage