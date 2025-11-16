import {
    StatusBar,
    StyleSheet,
    Text,
    View,
    TouchableWithoutFeedback,
    Keyboard,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import { ChevronLeft } from 'lucide-react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../utility/type';

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'name'>;

interface PhoneProps {
    navigation: LoginScreenNavigationProp;
}

const LifeStyle: React.FC<PhoneProps> = ({ navigation }) => {


    const progress = 0.3;

    return (
        <>
            <StatusBar barStyle="dark-content" />
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <SafeAreaView style={styles.container}>

                    {/* Progress Bar */}
                    <View style={styles.progressContainer}>
                        <LinearGradient
                            colors={['#00D1FF', '#0066FF']}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            style={[styles.progressBar, { width: `${progress * 100}%` }]}
                        />
                    </View>

                    {/* Title */}
                    <Text style={styles.title}>Your lifestyle?</Text>
                    <Text style={styles.subtitle}>How often do you drink?</Text>

                    {/* Options */}
                    <ScrollView className='mb-10' contentContainerStyle={styles.optionsContainer} showsVerticalScrollIndicator={true}>
                        {/* Not for me */}
                        <View>
                            <TouchableOpacity className=' bg-[#F8F8F8] border border-[#E7E7E7] py-5 rounded-[10px] ' >
                                <Text className=' text-center text-[#606060] text-[16px]  ' >Not for me</Text>
                            </TouchableOpacity>
                        </View>
                        {/* On special occasions*/}
                        <View>
                            <TouchableOpacity className=' bg-[#F8F8F8] border border-[#E7E7E7] py-5 rounded-[10px] ' >
                                <Text className=' text-center text-[#606060] text-[16px]  ' >On special occasions</Text>
                            </TouchableOpacity>
                        </View>
                        {/* Socially*/}
                        <View>
                            <TouchableOpacity className=' bg-[#F8F8F8] border border-[#E7E7E7] py-5 rounded-[10px] ' >
                                <Text className=' text-center text-[#606060] text-[16px]  ' >Socially</Text>
                            </TouchableOpacity>
                        </View>
                        {/* Most Nights*/}
                        <View>
                            <TouchableOpacity className=' bg-[#F8F8F8] border border-[#E7E7E7] py-5 rounded-[10px] ' >
                                <Text className=' text-center text-[#606060] text-[16px]  ' >Most Nights</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Text className=' text-[#080808] text-sm my-7 ' >How often do you smoke?</Text>
                        </View>




                        {/* No */}
                        <View>
                            <TouchableOpacity className=' bg-[#F8F8F8] border border-[#E7E7E7] py-5 rounded-[10px] ' >
                                <Text className=' text-center text-[#606060] text-[16px]  ' >No</Text>
                            </TouchableOpacity>
                        </View>
                        {/* Social smoker*/}
                        <View>
                            <TouchableOpacity className=' bg-[#F8F8F8] border border-[#E7E7E7] py-5 rounded-[10px] ' >
                                <Text className=' text-center text-[#606060] text-[16px]  ' >Social smoker</Text>
                            </TouchableOpacity>
                        </View>
                        {/* Yes*/}
                        <View>
                            <TouchableOpacity className=' bg-[#F8F8F8] border border-[#E7E7E7] py-5 rounded-[10px] ' >
                                <Text className=' text-center text-[#606060] text-[16px]  ' >Yes</Text>
                            </TouchableOpacity>
                        </View>
                        {/* I prefer not to say*/}
                        <View>
                            <TouchableOpacity className=' bg-[#F8F8F8] border border-[#E7E7E7] py-5 rounded-[10px] ' >
                                <Text className=' text-center text-[#606060] text-[16px]  ' >I prefer not to say</Text>
                            </TouchableOpacity>
                        </View>


















                    </ScrollView>

                    {/* Bottom Buttons */}
                    <View style={styles.bottomButtons}>
                        <TouchableOpacity onPress={() => navigation.goBack()} activeOpacity={0.7}>
                            <View style={styles.backButton}>
                                <ChevronLeft size={20} color="#8C8C8C" />
                                <Text style={styles.backText}>Back</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.navigate("education")} activeOpacity={0.7}>
                            <View style={styles.nextButton}>
                                <Text style={styles.nextText}>Next</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                </SafeAreaView>
            </TouchableWithoutFeedback>
        </>
    );
};

export default LifeStyle;

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
        marginTop: 30,
        marginBottom: 20,
    },
    progressBar: { height: '100%', borderRadius: 10 },
    title: { fontSize: 24, fontWeight: '600', color: '#080808', marginTop: 10 },
    subtitle: { fontSize: 14, color: '#080808', marginTop: 5, marginBottom: 20 },
    optionsContainer: { paddingBottom: 20 },
    option: {
        backgroundColor: '#E7E7E7',
        paddingVertical: 14,
        paddingHorizontal: 16,
        borderRadius: 10,
        marginBottom: 12,
    },
    optionText: { color: '#606060', fontSize: 16, fontWeight: '500' },
    optionSelected: {
        paddingVertical: 14,
        paddingHorizontal: 16,
        borderRadius: 10,
        marginBottom: 12,
    },
    optionSelectedText: { color: '#fff', fontSize: 16, fontWeight: '600' },
    bottomButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 5,
        paddingBottom: 20,
    },
    backButton: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 14,
        backgroundColor: '#ccc',
        borderRadius: 50,
    },
    backText: { marginLeft: 6, color: '#8C8C8C', fontSize: 16 },
    nextButton: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#00B7DC',
        borderRadius: 50,
    },
    nextText: { color: '#fff', fontSize: 16 },
});
