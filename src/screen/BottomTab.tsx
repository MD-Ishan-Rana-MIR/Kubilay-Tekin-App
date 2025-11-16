import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LinearGradient from "react-native-linear-gradient";



// icons
import { HomeIcon, User, Settings as SettingsIcon } from "lucide-react-native";
import LifeStyle from "./login/LifeStyle";
import Gender from "./login/Gender";
import Education from "./login/Education";

const Tab = createBottomTabNavigator();

export default function AppTabs() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: styles.tabBarStyle,
            }}
        >
            {/* HOME TAB */}
            <Tab.Screen
                name="Home"
                component={LifeStyle}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <TabItem
                            focused={focused}
                            label="Life"
                            Icon={HomeIcon}
                        />
                    ),
                }}
            />

            {/* PROFILE TAB */}
            <Tab.Screen
                name="Profile"
                component={Gender}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <TabItem
                            focused={focused}
                            label="Profile"
                            Icon={User}
                        />
                    ),
                }}
            />

            {/* SETTINGS TAB */}
            <Tab.Screen
                name="Settings"
                component={Education}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <TabItem
                            focused={focused}
                            label="Settings"
                            Icon={SettingsIcon}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

const TabItem = ({ focused, label, Icon }) => {
    return (
        <TouchableOpacity activeOpacity={0.8} style={styles.tabItem}>
            {focused ? (
                <LinearGradient
                    colors={["#00D1FF", "#0066FF"]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={styles.activeTab}
                >
                    <Icon size={20} color="#fff" />
                    <Text style={styles.activeText}>{label}</Text>
                </LinearGradient>
            ) : (
                <View style={styles.inactiveTab}>
                    <Icon size={20} color="#777" />
                    <Text style={styles.inactiveText}>{label}</Text>
                </View>
            )}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    tabBarStyle: {
        position: "absolute",
        bottom: 20,
        left: 20,
        right: 20,
        height: 70,
        borderRadius: 20,
        backgroundColor: "#fff",
        elevation: 5,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 6,
        shadowOffset: { width: 0, height: 3 },
        paddingBottom: 10,
    },

    tabItem: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },

    activeTab: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 8,
        paddingHorizontal: 14,
        borderRadius: 30,
    },

    inactiveTab: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 8,
        paddingHorizontal: 14,
        borderRadius: 30,
    },

    activeText: {
        color: "#fff",
        marginLeft: 6,
        fontSize: 12,
        fontWeight: "600",
    },

    inactiveText: {
        color: "#777",
        marginLeft: 6,
        fontSize: 12,
    },
});
