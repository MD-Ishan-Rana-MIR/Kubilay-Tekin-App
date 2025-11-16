import { Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../utility/type';

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;

interface LoginProps {
    navigation: LoginScreenNavigationProp;
}

const Login: React.FC<LoginProps> = ({ navigation }) => {
    return (
        <>
            <StatusBar barStyle={"light-content"} />
            <LinearGradient
                colors={['#05C3DD', '#B14EFF', '#192f6a']}
                style={styles.container}
            >
                <View style={styles.content}>
                    <View style={styles.imageContainer}>
                        <Image source={require("../asset/login.png")} style={styles.image} />
                        <Text style={styles.imageText}>Find your match by event.</Text>
                    </View>

                    <View>
                        <Text className=' mt-10 text-white text-[16px] mb-20 ' >
                            By continuing with Phone, Apple, or Google, you agree to our
                            <Text
                                onPress={() => navigation.navigate("Term")}
                                className=' underline underline-offset-8 '
                            >
                                Terms
                            </Text>.
                            You can review our Privacy Policy to understand how we handle your data.
                        </Text>
                    </View>

                    <View style={styles.buttonContainer}>
                        <TouchableOpacity onPress={() => { navigation.navigate("phone") }} style={styles.button}>
                            <Text style={styles.buttonText}>Login with Phone</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>Login with Google</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>Login with Apple</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Text onPress={() => { navigation.navigate("help") }} className=' text-white text-[16px] mt-10  ' >Are you having trouble logging in?</Text>
                    </View>
                </View>

            </LinearGradient>
        </>
    );
};

export default Login;



const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
    },
    content: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: 30,
    },
    imageContainer: {
        alignItems: 'center',
    },
    image: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
    },
    imageText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
        marginTop: 20,
    },
    buttonContainer: {
        width: '100%',
    },
    button: {
        // backgroundColor: '#FF3B30', // red color
        paddingVertical: 14,
        borderRadius: 56,
        marginVertical: 10,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'white',
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: '600',
    },
});
