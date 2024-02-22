import React from 'react';
import { View } from 'react-native'
import Tile from './tile';
import Colors from '@/constants/Colors';


const quickaccess = () => {

  return (
      <View style={styles.tilesWrapper}>
        <View style={styles.column}>
          <View style={styles.item}>
            <Tile iconName='briefcase' text='Jobs' bgColor={Colors.light.accent} lien='jobs'/>
          </View>
          <View style={styles.item}>
            <Tile iconName='percent' text='Bons Plans' bgColor='#FF8A00' lien='' />
          </View>
          <View style={styles.item}>
            <Tile iconName='comment-dots' text='Messagerie' bgColor='#BE0A96' lien='messagerie'  />
          </View>
        </View>
        <View style={styles.column}>
          <View style={styles.item}>
            <Tile iconName='building' text='Logements' bgColor='#8934AD' lien='logements'/>
          </View>
          <View style={styles.item}>
            <Tile iconName='calendar-alt' text='Evènements' bgColor='#0784DE' lien=''/>
          </View>
        </View>
      </View>
  );
};



import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
tilesWrapper: {
  gap: 16,
  marginTop: 19,
  display: 'flex',
  flexDirection: 'row',
},
column: {
  flex: 1,
  gap: 16,
},
item: {
  maxWidth: '100%',
  backgroundColor: Colors.light.background,
  borderRadius: 8,
  shadowOffset: {
    width: 0,
    height: 4,
  },
  shadowOpacity: 0.1,
  shadowRadius: 9.600000381469727,
},
});

export default quickaccess