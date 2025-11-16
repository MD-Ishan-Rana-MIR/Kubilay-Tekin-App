import {
    StatusBar,
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableWithoutFeedback,
    Keyboard,
    TouchableOpacity,
} from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import { ChevronLeft } from 'lucide-react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../utility/type';

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'bio'>;

interface PhoneProps {
    navigation: LoginScreenNavigationProp;
}

const OtpVerify: React.FC<PhoneProps> = ({ navigation }) => {
    const progress = 0.7;

    return (
        <>
            <SafeAreaView style={styles.container}>
                <StatusBar barStyle="dark-content" />

                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={{ flex: 1 }}>

                        {/* 🔷 Top Gradient Progress Bar */}
                        <View style={styles.progressContainer}>
                            <LinearGradient
                                colors={['#00D1FF', '#0066FF']}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 0 }}
                                style={[styles.progressBar, { width: `${progress * 100}%` }]}
                            />
                        </View>

                        {/* Title */}
                        <Text style={styles.title}>Your bio?</Text>

                        {/* Subtitle */}
                        <Text style={styles.subtitle}>Tell us a bit about yourself.</Text>

                        {/* Bio Input */}
                        <View style={styles.inputContainer}>
                            <TextInput
                                placeholder="Demo user living in Dhaka, looking for new connections."
                                placeholderTextColor="#777"
                                multiline
                                style={styles.textInput}
                                textAlignVertical="top"
                            />
                        </View>



                    </View>
                </TouchableWithoutFeedback>
                {/* Bottom Buttons */}
                <View style={styles.bottomButtons}>

                    {/* Back Button */}
                    <TouchableOpacity onPress={() => navigation.goBack()} activeOpacity={0.7}>
                        <View style={styles.backButton}>
                            <ChevronLeft size={20} color="#8C8C8C" />
                            <Text style={styles.backText}>Back</Text>
                        </View>
                    </TouchableOpacity>

                    {/* Next Button */}
                    <TouchableOpacity onPress={() => navigation.navigate("lifestyle")} activeOpacity={0.7}>
                        <View style={styles.nextButton}>
                            <Text style={styles.nextText}>Next</Text>
                        </View>
                    </TouchableOpacity>

                </View>
            </SafeAreaView>
        </>
    );
};

export default OtpVerify;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: '#fff',
    },
    progressContainer: {
        width: '100%',
        height: 6,
        backgroundColor: '#E5E5E5',
        borderRadius: 10,
        marginTop: 30,
        marginBottom: 20,
        overflow: 'hidden',
    },
    progressBar: {
        height: '100%',
        borderRadius: 10,
    },
    title: {
        fontSize: 26,
        fontWeight: '700',
        color: '#080808',
        marginBottom: 5,
    },
    subtitle: {
        fontSize: 14,
        color: '#080808',
        marginBottom: 20,
    },
    inputContainer: {
        backgroundColor: '#E7E7E7',
        borderRadius: 10,
        padding: 16,
    },
    textInput: {
        fontSize: 16,
        color: '#333',
        height: 160, // fixed height
    },
    bottomButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,
        paddingBottom: 20,
    },
    backButton: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 16,
        backgroundColor: '#ccc',
        borderRadius: 50,
    },
    backText: {
        marginLeft: 6,
        color: '#8C8C8C',
        fontSize: 16,
    },
    nextButton: {
        paddingVertical: 10,
        paddingHorizontal: 24,
        backgroundColor: '#00B7DC',
        borderRadius: 50,
    },
    nextText: {
        color: '#fff',
        fontSize: 16,
    },
});
