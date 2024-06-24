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
import {Link, useRouter} from "expo-router";
import { StatusBar } from "expo-status-bar";

const SignupPage = () => {
    const router = useRouter()
    const colorScheme = useColorScheme()
    const modeColors = colorScheme == "light" ? Colors.light : Colors.dark
    const [fnameText, setFnameText] = useState('')
    const [lnameText, setLnameText] = useState('')
    const [usernameText, setUsernameText] = useState('')
    const [passwordText, setPasswordText] = useState('')

    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

    const handleFnameChange = (input: string) => {
        setFnameText(input)
    }

    const handleLnameChange = (input: string) => {
        setLnameText(input)
    }

    const handleUsernameChange = (input: string) => {
        setUsernameText(input);
    }

    const handlePasswordChange = (input: string) => {
        setPasswordText(input);
    }

    const handleSignupButton = () => {
        alert('Sign Up')
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{ flex: 1 }}
        >
            <StatusBar style="light" />

            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.container}>
                    <Image
                        source={locImages.genericImages.loginImage}
                        style={[styles.backgroundImage, {width: windowWidth, height: windowHeight}]}
                    />
                    <View style={styles.loginContainer}>
                        <Image
                            source={locImages.genericImages.logoLight}
                            style={{ width: '100%', height: 40, objectFit: 'fill', marginBottom: 24 }}
                        />

                        <Text style={styles.headerText}>
                            Create an Account
                        </Text>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', gap: 12, backgroundColor: 'rgba(0,0,0,0.0)' }}>
                            <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.0)' }}>
                                <Text style={styles.textInputHeaderText}>
                                    First Name
                                </Text>

                                <TextInput
                                    style={[styles.textInput, {marginBottom: 20}]}
                                    onChangeText={handleFnameChange}
                                    value={fnameText}
                                    placeholder="First Name"
                                    autoCorrect={false}
                                    autoCapitalize="words"
                                />
                            </View>

                            <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.0)' }}>
                                <Text style={styles.textInputHeaderText}>
                                    Last Name
                                </Text>

                                <TextInput
                                    style={[styles.textInput, {marginBottom: 20}]}
                                    onChangeText={handleLnameChange}
                                    value={lnameText}
                                    placeholder="Last Name"
                                    autoCorrect={false}
                                    autoCapitalize="words"
                                />
                            </View>
                        </View>

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

                        <Pressable
                            style={styles.signupButton}
                            onPress={handleSignupButton}
                        >
                            <Text style={styles.signupButtonText}>
                                Sign Up
                            </Text>
                        </Pressable>

                        <Link style={{ marginTop: 24, textAlign: 'center'}} href='/loginPage'>
                            <Text style={{ fontSize: 17, color: 'white' }}>Already have an account? <Text style={{fontWeight: 700, color: 'white'}}>Log In</Text></Text>
                        </Link>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    backgroundImage: {
        objectFit: 'cover'
    },
    loginContainer: {
        position: 'absolute',
        width: '90%',
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
    signupButton: {
        backgroundColor: 'white',
        width: '100%',
        borderRadius: 5,
        marginTop: 4
    },
    signupButtonText: {
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

export default SignupPage