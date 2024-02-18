import { View, Text } from 'react-native'
import React from 'react'
import Tile from './tile';
import Colors from '@/constants/Colors';

const quickaccess = () => {

    return (
        <View style={styles.tilesWrapper}>
            <Tile iconName='briefcase' text='Jobs' bgColor={Colors.accent} lien='jobs'/>
            <Tile iconName='building' text='Logements' bgColor='#8934AD' lien='logements'/>
            <Tile iconName='percent' text='Bons Plans' bgColor='#FF8A00' lien='' />
            <Tile iconName='calendar-alt' text='Events' bgColor='#0784DE' lien=''/>
            <Tile iconName='comment-dots' text='Messagerie' bgColor='#BE0A96' lien='messagerie'  />
        </View>
    );
};

const styles = {
  tilesWrapper: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
    marginTop: 19,
  },
};

export default quickaccess