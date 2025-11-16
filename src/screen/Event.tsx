import { Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import LinearGradient from 'react-native-linear-gradient'

const Event = () => {
    return (
        <>
            <SafeAreaView>
                <StatusBar barStyle={"dark-content"} />
                <View className=' px-7 py-6 ' >
                    <View>
                        <Text className=' text-[#121212] text-2xl font-semibold text-center ' >Suggest an Event</Text>
                    </View>
                    {/* event  */}
                    <View className=' py-4 px-4 rounded-2xl mt-10  bg-white shadow shadow-[#00000040] ' >
                        <View className=' flex flex-row gap-5  ' >
                            <View>
                                <Image className=' w-20 h-20 ' source={require("../asset/event.png")} />
                            </View>
                            <View className='mt-2' >
                                <Text className=' text-[#080808] font-semibold text-[16px] ' >Summer Music Festival</Text>
                                <Text className=' text-[#616161] text-[11px] mt-1 ' >Sat, Jun 15 • Downtown Square</Text>
                            </View>
                        </View>
                    </View>
                    {/* event  */}
                    <View className=' py-4 px-4 rounded-2xl mt-10  bg-white shadow shadow-[#00000040] ' >
                        <View className=' flex flex-row gap-5  ' >
                            <View>
                                <Image className=' w-20 h-20 ' source={require("../asset/event.png")} />
                            </View>
                            <View className='mt-2' >
                                <Text className=' text-[#080808] font-semibold text-[16px] ' >Summer Music Festival</Text>
                                <Text className=' text-[#616161] text-[11px] mt-1 ' >Sat, Jun 15 • Downtown Square</Text>
                            </View>
                        </View>
                    </View>
                    {/* event  */}
                    <View className=' py-4 px-4 rounded-2xl mt-10  bg-white shadow shadow-[#00000040] ' >
                        <View className=' flex flex-row gap-5  ' >
                            <View>
                                <Image className=' w-20 h-20 ' source={require("../asset/event.png")} />
                            </View>
                            <View className='mt-2' >
                                <Text className=' text-[#080808] font-semibold text-[16px] ' >Summer Music Festival</Text>
                                <Text className=' text-[#616161] text-[11px] mt-1 ' >Sat, Jun 15 • Downtown Square</Text>
                            </View>
                        </View>
                    </View>
                    {/* event  */}
                    <View className=' py-4 px-4 rounded-2xl mt-10  bg-white shadow shadow-[#00000040] ' >
                        <View className=' flex flex-row gap-5  ' >
                            <View>
                                <Image className=' w-20 h-20 ' source={require("../asset/event.png")} />
                            </View>
                            <View className='mt-2' >
                                <Text className=' text-[#080808] font-semibold text-[16px] ' >Summer Music Festival</Text>
                                <Text className=' text-[#616161] text-[11px] mt-1 ' >Sat, Jun 15 • Downtown Square</Text>
                            </View>
                        </View>
                    </View>
                    {/* btn  */}

                    <View className=' gap-y-5 ' >
                        <View className="mt-7  ">
                            <TouchableOpacity className='' activeOpacity={0.7}>
                                <LinearGradient
                                    colors={['#05C3DD', '#B14EFF']}
                                    start={{ x: 0, y: 0 }}
                                    end={{ x: 1, y: 0 }}
                                    className="py-4 rounded-[11px]"
                                >
                                    <Text className="text-center text-white font-semibold">
                                        Send
                                    </Text>
                                </LinearGradient>
                            </TouchableOpacity>
                        </View>

                        <View className='' >
                            <TouchableOpacity className=' py-4 rounded-[11px] border border-black  ' >
                                <Text className=' text-center ' >Cancel</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </View>
            </SafeAreaView>
        </>
    )
}

export default Event

const styles = StyleSheet.create({

})