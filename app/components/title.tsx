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
        alignItems: 'center',
    },
    title: {
        fontSize: 16,
        fontFamily: 'Red Hat Text',
        fontWeight: '600',
    },
    titleLink: {
        color: '#D62528',
        fontSize: 12,
        fontFamily: 'Red Hat Text',
        fontWeight: '400',
    }
})

export default Title