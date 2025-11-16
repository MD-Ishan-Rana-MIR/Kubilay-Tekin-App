import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RootStackParamList } from '../../utility/type';
import { StackNavigationProp } from '@react-navigation/stack';

const ITEM_HEIGHT = 50;

const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

const years = Array.from({ length: 100 }, (_, i) => 1970 + i);
const days = Array.from({ length: 31 }, (_, i) => i + 1);
type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'dataBirth'>;

interface PhoneProps {
    navigation: LoginScreenNavigationProp;
}

const DateBirth: React.FC<PhoneProps> = ({ navigation }) => {
    const [selectedMonth, setSelectedMonth] = useState(0);
    const [selectedDay, setSelectedDay] = useState(0);
    const [selectedYear, setSelectedYear] = useState(0);

    const progress = 0.3;

    const renderList = (data, onSelect, selectedIndex) => (
        <FlatList
            data={data}
            keyExtractor={(item, index) => index.toString()}
            showsVerticalScrollIndicator={false}
            snapToInterval={ITEM_HEIGHT}
            decelerationRate="fast"
            initialScrollIndex={selectedIndex}
            getItemLayout={(_, index) => ({
                length: ITEM_HEIGHT,
                offset: ITEM_HEIGHT * index,
                index,
            })}
            onMomentumScrollEnd={(e) => {
                const index = Math.round(e.nativeEvent.contentOffset.y / ITEM_HEIGHT);
                onSelect(index);
            }}
            renderItem={({ item, index }) => (
                <View style={styles.item}>
                    <Text style={[
                        styles.text,
                        index === selectedIndex ? styles.selectedText : styles.normalText
                    ]}>
                        {item}
                    </Text>
                </View>
            )}
        />
    );

    return (
        <>
            <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
                <StatusBar barStyle="dark-content" />

                <View style={styles.container}>

                    {/* Progress Bar */}
                    <View style={styles.progressContainer}>
                        <LinearGradient
                            colors={['#00D1FF', '#0066FF']}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            style={[styles.progressBar, { width: `${progress * 100}%` }]}
                        />
                    </View>

                    <View className=' mt-9 ' >
                        <Text className=' text-3xl font-semibold text-[#080808]  ' >When’s your birthday?</Text>
                        <Text className=' text-[#080808] text-sm mt-2.5 ' >Your age will be public.</Text>
                    </View>

                    {/* Scroll box container */}
                    <View className=' h-[250px] ' >

                        {/* Highlight (center selection) */}
                        <LinearGradient
                            colors={["#A7F3FF", "#E3B0FF"]}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 1 }}
                            style={styles.gradientHighlight}
                        />

                        {/* Scroll Columns */}
                        <View style={styles.row}>
                            <View style={styles.column}>
                                {renderList(months, setSelectedMonth, selectedMonth)}
                            </View>

                            <View style={styles.column}>
                                {renderList(days, setSelectedDay, selectedDay)}
                            </View>

                            <View style={styles.column}>
                                {renderList(years, setSelectedYear, selectedYear)}
                            </View>
                        </View>

                    </View>

                </View>
            </SafeAreaView>
            <SafeAreaView className="bg-white flex-1 justify-end pb-20">
                <View className="items-center">
                    <TouchableOpacity onPress={() => { navigation.navigate("gender") }} className="w-[362px] bg-[#00B7DC] py-3 rounded-[23px]">
                        <Text className="text-white text-center font-semibold">Continue</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </>
    );
}

export default DateBirth;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
    },

    progressContainer: {
        width: '100%',
        height: 6,
        backgroundColor: '#E5E5E5',
        borderRadius: 10,
        marginTop: 30,
    },

    progressBar: {
        height: '100%',
        borderRadius: 10,
    },

    row: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        position: "absolute",
        top: 0,
    },

    column: {
        width: "30%",
        height: 250,
    },

    item: {
        height: ITEM_HEIGHT,
        justifyContent: "center",
        alignItems: "center",
    },

    text: {
        fontSize: 20,
    },

    selectedText: {
        color: "#fff",
        fontWeight: "bold",
    },

    normalText: {
        color: "#555",
    },

    gradientHighlight: {
        position: "absolute",
        width: "100%",
        height: ITEM_HEIGHT,
        top: (250 - ITEM_HEIGHT) / 2,  // <-- PERFECT CENTER
        borderRadius: 30,
        zIndex: -1,
    },
});
