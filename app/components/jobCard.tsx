import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const jobCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.iconContainer}>
          <View style={styles.iconCircle} />
          <View style={styles.smallIconContainer}>
            <View style={styles.smallIcon} />
            <View style={[styles.smallIcon, styles.smallIconOffset]} />
          </View>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>UI/UX Designer</Text>
          <Text style={styles.subtitle}>UFR Ingémédia</Text>
        </View>
        <FontAwesome5 name='bookmark' style={styles.bookmark} />
      </View>
      <Text style={styles.description}>
        Lorem ipsum dolor sit amet consectetur. Placerat pharetra sit
      </Text>
      <View style={styles.divider} />
      <View style={styles.infoContainer}>
        <View style={styles.infoItem}>
            <FontAwesome5 name='map-marker-alt' style={styles.infoIcon} />
            <Text style={styles.infoText}>La valette du var</Text>
        </View>
        <View style={styles.infoItem}>
            <FontAwesome5 name='briefcase' style={styles.infoIcon} />
            <Text style={styles.infoText}>20H / Sem</Text>
        </View>
        <View style={styles.infoItem}>
            <FontAwesome5 name='money-bill' style={styles.infoIcon} />
            <Text style={styles.infoText}>€15/Hr</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginRight: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#EDEDED',
    gap: 10,
    display: 'flex',
    maxWidth: '80%',
    minWidth: 226,
  },
  subContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    gap: 48,
    display: 'flex',
  },
  iconContainer: {
    position: 'relative',
  },
  iconCircle: {
    width: 32,
    height: 32,
    position: 'absolute',
    backgroundColor: '#F3F4FB',
    borderRadius: 9999,
    borderWidth: 1,
    borderColor: '#EDEDED',
  },
  smallIconContainer: {
    position: 'absolute',
    left: 6,
    top: 6,
  },
  smallIcon: {
    width: 20,
    height: 20,
    position: 'absolute',
    backgroundColor: '#8934AD',
    borderRadius: 50,
  },
  smallIconOffset: {
    left: 6,
    top: 5,
    width: 8,
    height: 10,
    backgroundColor: '#F2A809',
  },
  textContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    gap: 3,
    display: 'flex',
  },
  title: {
    color: '#242C5D',
    fontSize: 16,
    fontWeight: '600',
  },
  subtitle: {
    color: '#696969',
    fontSize: 14,
    fontWeight: '400',
  },
  bookmark: {
    color: '#D62528',
  },
  description: {
    color: '#353558',
    fontSize: 12,
    fontFamily: 'Red Hat Text',
    fontWeight: '300',
  },
  divider: {
    width: '100%',
    height: 0.5,
    borderWidth: 0.5,
    borderColor: '#E0E0E0',
  },
  infoContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%'
  },
  infoItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
  },
  infoIcon: {
    color: '#242C5D',
    fontSize: 8,
  },
  infoText: {
    color: '#242C5D',
    fontSize: 10,
    fontWeight: '300',
  },
});

export default jobCard;
