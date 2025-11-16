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
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import { ChevronLeft } from 'lucide-react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../utility/type';

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'name'>;

interface PhoneProps {
    navigation: LoginScreenNavigationProp;
}

const Looking: React.FC<PhoneProps> = ({ navigation }) => {
    const [selected, setSelected] = useState<string | null>(null);
    const options = [
        "Concert",
        "Theater",
        "Stand-up",
        "Workshop",
        "Dance & Performance",
        "Festival",
        "Sports",
        "Concert",
        "Theater",
        "Stand-up",
        "Workshop",
        "Dance & Performance",
        "Festival",
        "Sports",
    ];

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
                    <Text style={styles.title}>Your interests?</Text>
                    <Text style={styles.subtitle}>Pick a few things you're into.</Text>

                    {/* Options */}
                    <ScrollView className='mb-10' contentContainerStyle={styles.optionsContainer} showsVerticalScrollIndicator={true}>
                        {options.map((opt, idx) => (
                            <TouchableOpacity key={idx} onPress={() => setSelected(opt)} activeOpacity={0.7}>
                                {selected === opt ? (
                                    <LinearGradient
                                        colors={['#00D1FF', '#0066FF']}
                                        start={{ x: 0, y: 0 }}
                                        end={{ x: 1, y: 0 }}
                                        style={styles.optionSelected}
                                    >
                                        <Text style={styles.optionSelectedText}>{opt}</Text>
                                    </LinearGradient>
                                ) : (
                                    <View style={styles.option}>
                                        <Text style={styles.optionText}>{opt}</Text>
                                    </View>
                                )}
                            </TouchableOpacity>
                        ))}
                    </ScrollView>

                    {/* Bottom Buttons */}
                    <View style={styles.bottomButtons}>
                        <TouchableOpacity onPress={() => navigation.goBack()} activeOpacity={0.7}>
                            <View style={styles.backButton}>
                                <ChevronLeft size={20} color="#8C8C8C" />
                                <Text style={styles.backText}>Back</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.navigate("bio")} activeOpacity={0.7}>
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

export default Looking;

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
