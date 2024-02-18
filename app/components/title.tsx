import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Title = ({ titre, displayLink }: { titre: string, displayLink: boolean }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{titre}</Text>
            {displayLink && <Text style={styles.titleLink} onPress={() => {}}>Voir tout</Text>}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 16,
        fontFamily: 'Red Hat Text',
        fontWeight: '500',
        lineHeight: 17.12,
    },
    titleLink: {
        color: '#D62528',
        fontSize: 10,
        fontFamily: 'Red Hat Text',
        fontWeight: '400',
        lineHeight: 10.70,
    }
})

export default Title