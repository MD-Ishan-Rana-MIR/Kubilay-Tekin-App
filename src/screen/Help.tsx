import { StatusBar, StyleSheet, View, TouchableOpacity, TextInput, Keyboard, TouchableWithoutFeedback } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text } from 'react-native-gesture-handler';
import { ArrowLeft } from 'lucide-react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../utility/type';

type HelpScreenNavigationProp = StackNavigationProp<RootStackParamList, 'help'>;

interface HelpProps {
    navigation: HelpScreenNavigationProp;
}

const Help: React.FC<HelpProps> = ({ navigation }) => {
    const [text, setText] = useState('');

    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView style={styles.container} className="mt-7">
                {/* Wrap everything with TouchableWithoutFeedback */}
                <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                    <View style={{ flex: 1 }}>
                        <View className="flex-row items-center">
                            <TouchableOpacity
                                onPress={() => navigation.goBack()}
                                style={styles.backButton}
                            >
                                <ArrowLeft size={24} color="#000" />
                            </TouchableOpacity>

                            <Text className="font-semibold text-3xl ml-3" style={styles.headerTitle}>
                                Help
                            </Text>
                        </View>

                        <View className=' mt-6 '>
                            <Text className=' text-[16px] text-black '>
                                Can't log in? Try these steps
                            </Text>
                        </View>

                        <View style={styles.divider} />

                        <View>
                            <Text className=' font-semibold text-lg  ' >Try connecting with phone</Text>
                            <Text className=' mt-4 text-[#080808] text-sm '>Make sure your phone has a stable internet connection and try again.</Text>
                        </View>

                        <View style={styles.divider} />

                        <View>
                            <Text className=' font-semibold text-lg  ' >Is your app up-to-date?</Text>
                            <Text className=' mt-4 text-[#080808] text-sm '>Check for updates in your app store to make sure you have the latest version.</Text>
                        </View>

                        <View style={styles.divider} />

                        <View style={styles.textInputContainer}>
                            <TextInput
                                style={styles.textArea}
                                multiline={true}
                                numberOfLines={4}
                                placeholder="Describe your issue here..."
                                value={text}
                                onChangeText={setText}
                            />
                            <View className=' mt-10 bg-[#00B7DC]  text-center rounded-[24] py-4   ' >
                                <TouchableOpacity>
                                    <Text className=' text-center text-white text-[16px] ' >Submit Feedback</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </TouchableWithoutFeedback>


            </SafeAreaView>
        </>
    );
};

export default Help;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
    },
    backButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#F2F2F2',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerTitle: {
        color: '#000',
    },
    divider: {
        height: 2,
        backgroundColor: '#B5B5B5',
        marginVertical: 25,
        width: '100%',
        opacity: 0.2,
    },
    textArea: {
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 20,
        textAlignVertical: 'top',
        borderRadius: 10,
        height: 151,
        backgroundColor: "#E7E7E7"
    },
    textInputContainer: {
        marginTop: 20,
    },
});
