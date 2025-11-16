import { StackNavigationProp } from "@react-navigation/stack";
import { ChevronLeft } from "lucide-react-native";
import React, { useState, useRef, useEffect } from "react";
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    StatusBar,
    Dimensions,
    Animated,
} from "react-native";
import { launchImageLibrary } from "react-native-image-picker";
import LinearGradient from "react-native-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { RootStackParamList } from "../../utility/type";

const screenWidth = Dimensions.get("window").width;
const boxSpacing = 16; // margin horizontal * 2
const boxesPerRow = 3;
const boxWidth = (screenWidth - 40 - boxSpacing * boxesPerRow) / boxesPerRow;

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'name'>;

interface PhoneProps {
    navigation: LoginScreenNavigationProp;
}


const ProfileImg: React.FC<PhoneProps> = ({ navigation }) => {
    const [images, setImages] = useState<(string | null)[]>([null, null, null, null, null, null]);
    const progressAnim = useRef(new Animated.Value(0)).current;

    const pickImage = async (index: number) => {
        launchImageLibrary({ mediaType: "photo", quality: 1 }, (response) => {
            if (response.didCancel || response.error) return;
            if (response.assets && response.assets.length > 0) {
                const selectedImage = response.assets[0].uri || "";
                let newImages = [...images];
                newImages[index] = selectedImage;
                setImages(newImages);
            }
        });
    };

    const progress = images.filter(img => img !== null).length / images.length;

    useEffect(() => {
        Animated.timing(progressAnim, {
            toValue: progress,
            duration: 300,
            useNativeDriver: false,
        }).start();
    }, [progress]);

    const progressBarWidth = progressAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ["0%", "100%"],
    });

    return (
        <>
            <SafeAreaView style={{ flex: 1 }}>
                <StatusBar barStyle="dark-content" />
                <View style={styles.container}>
                    {/* Progress Bar */}
                    <View style={styles.progressContainer}>
                        <Animated.View style={{ width: progressBarWidth, height: '100%' }}>
                            <LinearGradient
                                colors={['#00D1FF', '#0066FF']}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 0 }}
                                style={{ flex: 1, borderRadius: 10 }}
                            />
                        </Animated.View>
                    </View>

                    {/* Header */}
                    <View style={{ marginBottom: 30 }}>
                        <Text style={styles.title}>Add your photos</Text>
                        <Text style={styles.subtitle}>Add at least 2 photos to continue.</Text>
                    </View>

                    {/* Image Grid */}
                    <View style={styles.grid}>
                        {images.map((img, index) => (
                            <TouchableOpacity
                                key={index}
                                style={[styles.box, { width: boxWidth, height: boxWidth }]}
                                onPress={() => pickImage(index)}
                            >
                                {img ? <Image source={{ uri: img }} style={styles.image} /> : <Text style={styles.plus}>+</Text>}
                            </TouchableOpacity>
                        ))}
                    </View>


                </View>
            </SafeAreaView>
            {/* Footer Buttons */}
            <View className=" px-5 pb-20 " style={styles.footer}>
                <TouchableOpacity onPress={() => navigation.goBack()} activeOpacity={0.7}>
                    <View style={styles.backBtn}>
                        <ChevronLeft size={20} color="#8C8C8C" />
                        <Text style={styles.backText}>Back</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate("dataBirth")} activeOpacity={0.7}>
                    <View style={styles.nextBtn}>
                        <Text style={styles.nextText}>Next</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </>
    );
};

export default ProfileImg;

const styles = StyleSheet.create({
    container: { flex: 1, paddingHorizontal: 20, paddingTop: 20 },
    progressContainer: { width: '100%', height: 6, backgroundColor: '#E5E5E5', borderRadius: 10, marginBottom: 20, overflow: "hidden" },
    grid: { flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" },
    box: { marginBottom: 16, backgroundColor: "#f6f6f6", borderRadius: 10, borderWidth: 1, borderColor: "#ccc", justifyContent: "center", alignItems: "center" },
    image: { width: "100%", height: "100%", borderRadius: 10 },
    plus: { fontSize: 35, color: "#777", fontWeight: "300" },
    title: { fontSize: 24, fontWeight: "600", color: "#080808", marginBottom: 5 },
    subtitle: { fontSize: 14, color: "#080808" },
    footer: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingVertical: 20 },
    backBtn: { flexDirection: "row", alignItems: "center", paddingVertical: 10, paddingHorizontal: 15, backgroundColor: "#E0E0E0", borderRadius: 50 },
    backText: { marginLeft: 5, color: "#8C8C8C", fontSize: 16 },
    nextBtn: { flexDirection: "row", alignItems: "center", paddingVertical: 10, paddingHorizontal: 20, backgroundColor: "#00B7DC", borderRadius: 50 },
    nextText: { color: "#fff", fontSize: 16 },
});
