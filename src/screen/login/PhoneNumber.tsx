import {
    StatusBar,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableWithoutFeedback,
    Keyboard,
    TouchableOpacity
} from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import { ChevronDown, ChevronLeft } from 'lucide-react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../utility/type';

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'phone'>;

interface PhoneProps {
    navigation: LoginScreenNavigationProp;
}

const PhoneNumber: React.FC<PhoneProps> = ({ navigation }) => {

    const progress = 0.3;

    return (
        <>
            <StatusBar barStyle="dark-content" />

            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <SafeAreaView style={styles.container}>

                    {/* 🔷 TOP GRADIENT PROGRESS BAR */}
                    <View style={styles.progressContainer}>
                        <LinearGradient
                            colors={['#00D1FF', '#0066FF']}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            style={[styles.progressBar, { width: `${progress * 100}%` }]}
                        />
                    </View>

                    {/* Title */}
                    <Text className="font-semibold text-[#080808] text-3xl mt-10">
                        What's your number?
                    </Text>

                    {/* Subtitle */}
                    <Text className="mt-2.5 text-sm text-[#080808]">
                        We'll send you a code to verify your phone.
                    </Text>

                    {/* Row: Country selector + Input */}
                    <View style={[styles.row, { marginTop: 30 }]} >

                        {/* Left Country Box */}
                        <View style={styles.countryBox}>
                            <Image
                                source={{ uri: "https://flagcdn.com/w40/tr.png" }}
                                style={styles.flag}
                            />
                            <Text style={styles.code}>+90</Text>
                            <ChevronDown size={20} color="#555" />
                        </View>

                        {/* Phone Input */}
                        <View style={styles.phoneBox}>
                            <TextInput
                                placeholder="555-555-55-55"
                                placeholderTextColor="#777"
                                keyboardType="number-pad"
                                style={styles.input}
                            />
                        </View>
                    </View>

                    {/* Bottom Buttons */}
                    <View className="pb-20 px-5 flex-row justify-between items-center mt-auto">

                        {/* Back Button */}
                        <TouchableOpacity
                            onPress={() => navigation.goBack()}
                            activeOpacity={0.7}
                        >
                            <View className="flex-row items-center py-3 px-4 bg-gray-300 rounded-full">
                                <ChevronLeft size={20} color="#8C8C8C" />
                                <Text className="ml-2 text-base text-[#8C8C8C]">Back</Text>
                            </View>
                        </TouchableOpacity>

                        {/* Next Button */}
                        <TouchableOpacity onPress={() => { navigation.navigate("otpVerify") }} activeOpacity={0.7}>
                            <View className="flex-row items-center py-3 px-8 bg-[#00B7DC] rounded-full">
                                <Text className="text-base text-white">Next</Text>
                            </View>
                        </TouchableOpacity>

                    </View>

                </SafeAreaView>
            </TouchableWithoutFeedback>
        </>
    );
};

export default PhoneNumber;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: "#fff"
    },

    progressContainer: {
        width: '100%',
        height: 6,
        backgroundColor: '#E5E5E5',
        borderRadius: 10,
        marginTop: 10,
    },

    progressBar: {
        height: '100%',
        borderRadius: 10,
    },

    row: {
        flexDirection: "row",
        alignItems: "center",
        gap: 5
    },

    countryBox: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#E7E7E7",
        paddingHorizontal: 12,
        paddingVertical: 14,
        borderTopLeftRadius: 12,
        borderBottomLeftRadius: 12,
        borderWidth: 1,
        borderRightWidth: 0,
        borderColor: "#e3e3e3",
    },

    flag: {
        width: 24,
        height: 16,
        borderRadius: 2,
        marginRight: 8,
    },

    code: {
        fontSize: 16,
        fontWeight: "500",
        color: "#333",
        marginRight: 4,
    },

    phoneBox: {
        flex: 1,
        backgroundColor: "#E7E7E7",
        paddingHorizontal: 12,
        paddingVertical: 4,
        borderTopRightRadius: 12,
        borderBottomRightRadius: 12,
        borderWidth: 1,
        borderLeftWidth: 0,
        borderColor: "#e3e3e3",
    },

    input: {
        fontSize: 16,
        color: "#333",
    },
});
