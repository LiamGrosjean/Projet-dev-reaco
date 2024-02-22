import { View, Text, StyleSheet, Image, Modal} from 'react-native'
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons'
import Colors from '@/constants/Colors'
import { Link } from 'expo-router'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useRouter } from 'expo-router'




const header = () => {
    const router = useRouter();
    return (
        <View style={styles.container}>
            <View style={styles.headerWrapper}>
                <TouchableOpacity style={styles.navContainer} onPress={() => router.push('menu')}>
                        <FontAwesome5 name="bars" size={16} color={Colors.light.primary} />
                        <View style={styles.nameWrapper}>
                                <Text style={styles.text}>Hello, </Text>
                                <Text style={styles.name}> Elisa </Text>
                        </View>
                </TouchableOpacity>
            </View>
            <View style={styles.profilContainer}>
                <FontAwesome5 name="bell" size={16} color={Colors.light.primary} />
                <View style={styles.divider} />
                <View style={styles.imageWrapper}>
                    <Image source={require('../../assets/images/userImage.jpeg')} style={styles.userImage} />
                    <View style={styles.userImage} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 33,
        paddingRight: 33,
        paddingTop: '15%',
        paddingBottom: 17,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: Colors.light.background,
    },
    headerWrapper: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    navContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 13,
    },
    nameWrapper: {
        flexDirection: 'row',
    },
    text: {
        fontSize: 16,
        fontFamily: 'Red Hat Text',
        fontWeight: '300',
        color: Colors.light.primary,
    },
    name: {
        fontSize: 16,
        fontFamily: 'Red Hat Text',
        fontWeight: '600',
        color: Colors.light.primary,
    },
    profilContainer: {
        flexDirection: 'row',
        gap: 12,
        alignItems: 'center',
    },
    divider: {
        width: 1,
        height: '100%',
        backgroundColor: '#F0F2F5',
    },
    imageWrapper: {
        width: 32,
        height: 32,
        objectFit: 'cover',
        overflow: 'hidden',
        borderRadius: 5,
    },
    userImage: {
        width: '100%',
        height: '100%',
    },
})

export default header