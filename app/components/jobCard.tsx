import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const jobCard = ({ maxWidth, title='UX/UI Designer', company='UFR Ingemedia', description='Lorem ipsum dolor sit amet consectetur. Placerat pharetra sit', emplacement='Toulon', hSemaine='20H/sem', hSalaire='€15/h' }: { maxWidth?: number, title?: string, company?: string, description?: string, emplacement?: string, hSemaine?: string, hSalaire?: string }) => {
  return (
    <View style={[styles.container, { maxWidth }]}>
      <View style={styles.subContainer}>
        <View style={styles.iconContainer}>
          <View style={styles.iconCircle} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{company}</Text>
        </View>
        <FontAwesome5 name='bookmark' style={styles.bookmark} />
      </View>
      <Text style={styles.description}>{description}</Text>
      <View style={styles.divider} />
      <View style={styles.infoContainer}>
        <View style={styles.infoItem}>
            <FontAwesome5 name='map-marker-alt' style={styles.infoIcon} />
            <Text style={styles.infoText}>{emplacement}</Text>
        </View>
        <View style={styles.infoItem}>
            <FontAwesome5 name='briefcase' style={styles.infoIcon} />
            <Text style={styles.infoText}>{hSemaine}</Text>
        </View>
        <View style={styles.infoItem}>
            <FontAwesome5 name='money-bill' style={styles.infoIcon} />
            <Text style={styles.infoText}>{hSalaire}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#EDEDED',
    gap: 10,
    width: '100%', 
    maxWidth: 226,
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
  textContainer: {
    gap: 3,
    alignItems: 'flex-start',
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
