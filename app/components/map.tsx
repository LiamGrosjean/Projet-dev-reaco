import { View, Text } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import { FontAwesome5 } from '@expo/vector-icons';
import { faMapPin } from '@fortawesome/free-solid-svg-icons';



const initiaRegion={
  latitude: 43.1257311,
  longitude: 5.9304919,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
}


export default function Map(){
  return (
    <View style={styles.container}>
      <MapView 
      style={styles.map}
      provider={PROVIDER_GOOGLE}
      initialRegion={initiaRegion}
      showsUserLocation
      showsMyLocationButton
      
      />
       <View style={{flexDirection: 'row',  justifyContent: 'center' }}>
       <View style={{marginRight:9 , marginTop: 13 }}>

       <FontAwesome5 name="map-pin" size={15} color="#242C5D" />
       </View>

       <Text style={{ marginTop : 15, color : "#242C5D" }}>Av. 83, La valette</Text>
    </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  }

})
