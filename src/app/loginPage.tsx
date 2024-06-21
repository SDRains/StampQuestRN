import { Text, View } from '@/src/components/Themed';
import {
    Image, Keyboard,
    KeyboardAvoidingView,
    Platform,
    Pressable,
    StyleSheet, Switch,
    TextInput, TouchableWithoutFeedback,
    useColorScheme
} from "react-native";
import {Colors} from "@/src/constants/Colors"
import {useState} from "react";
import {Dimensions} from "react-native";
import locImages from '@/src/components/images'
import {useRouter} from "expo-router";

const LoginPage = () => {
    const router = useRouter()
    const colorScheme = useColorScheme()
    const modeColors = colorScheme == "light" ? Colors.light : Colors.dark
    const [usernameText, setUsernameText] = useState('')
    const [passwordText, setPasswordText] = useState('')
    const [rememberLogin, setRememberLogin] = useState(true)

    const backgroundImgSrc = "/assets/light_mountain_illustration.png"
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

    const handleUsernameChange = (input: string) => {
        setUsernameText(input);
    }

    const handlePasswordChange = (input: string) => {
        setPasswordText(input);
    }

    const handleLoginSubmit = () => {
        router.push('/(tabs)/home')
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{ flex: 1 }}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.container}>
                    <Image
                        source={locImages.genericImages.loginImage}
                        style={[styles.backgroundImage, {width: windowWidth, height: windowHeight}]}
                    />
                    <View style={styles.loginContainer}>
                        <Text style={styles.headerText}>
                            Log Into Your Account
                        </Text>

                        <Text style={styles.textInputHeaderText}>
                            Username
                        </Text>

                        <TextInput
                            style={[styles.textInput, {marginBottom: 20}]}
                            onChangeText={handleUsernameChange}
                            value={usernameText}
                            placeholder="Username"
                            autoCorrect={false}
                            autoCapitalize="none"
                        />

                        <Text style={styles.textInputHeaderText}>
                            Password
                        </Text>

                        <TextInput
                            style={[styles.textInput, {marginBottom: 12}]}
                            onChangeText={handlePasswordChange}
                            value={passwordText}
                            placeholder="Password"
                            autoCorrect={false}
                            autoCapitalize="none"
                            secureTextEntry={true}
                        />

                        <View style={styles.rememberContainer}>
                            <Text style={styles.textInputHeaderText}>
                                Remember Login?
                            </Text>
                            <Switch
                                onValueChange={() => setRememberLogin(!rememberLogin)}
                                value={rememberLogin}
                            />
                        </View>

                        <Pressable
                            style={styles.loginButton}
                            onPress={handleLoginSubmit}
                        >
                            <Text style={styles.loginButtonText}>
                                Login
                            </Text>
                        </Pressable>

                        <Pressable style={{ width: '100%', marginTop: 16 }}>
                            <Text style={{ textAlign: 'left', fontSize: 15, fontWeight: 600 }}>
                                Forgot password?
                            </Text>
                        </Pressable>
                    </View>

                    <Pressable style={styles.signUpContainer} onPress={() => {}}>
                        <Text style={{ textAlign: 'center', fontSize: 17 }}>Don't have an account? <Text style={{fontWeight: 700}}>Sign Up</Text></Text>
                    </Pressable>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative'
    },
    backgroundImage: {
        objectFit: 'cover'
    },
    loginContainer: {
        position: 'absolute',
        width: '90%',
        top: '30%', // Partially down screen
        left: '5%', // Half of remaining width on each side (eg: 10% remaining @ 90% width / 2 = 5%
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        paddingVertical: 20,
        paddingHorizontal: 16,
        borderRadius: 5, // Optional: Add border radius
    },
    headerText: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 700,
        marginBottom: 20,
        color: 'white'
    },
    textInputHeaderText: {
        fontSize: 15,
        color: 'white',
        paddingVertical: 4,
        fontWeight: 600
    },
    textInput: {
        borderColor: '#a2a2a2',
        backgroundColor: '#343434',
        borderBottomWidth: 1,
        borderRadius: 5,
        padding: 8,
        color: '#e3e3e3',
        fontSize: 16,
    },
    rememberContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
        backgroundColor: 'rgba(0, 0, 0, 0.0)', // Set view to transparent
    },
    loginButton: {
        backgroundColor: 'white',
        width: '100%',
        borderRadius: 5
    },
    loginButtonText: {
        textAlign: 'center',
        color: 'black',
        padding: 10,
        fontSize: 18,
        fontWeight: 600
    },
    signUpContainer: {
        position: 'absolute',
        width: '90%',
        top: '90%', // Partially down screen
        left: '5%', // Half of remaining width on each side (eg: 10% remaining @ 90% width / 2 = 5%
        paddingVertical: 20,
        paddingHorizontal: 14,
        borderRadius: 5, // Optional: Add border radius
    }
})

export default LoginPage