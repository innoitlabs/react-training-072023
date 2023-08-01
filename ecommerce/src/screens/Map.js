import { View, StyleSheet, Text } from "react-native";
import React, { useState, useEffect } from "react";
import MapView, { Marker } from 'react-native-maps'
import * as Location from "expo-location";

const Map = () => {
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

     useEffect(() => {
       (async () => {
         let { status } = await Location.requestForegroundPermissionsAsync();
         if (status !== "granted") {
           setErrorMsg("Permission to access location was denied");
           return;
         }

         let location = await Location.getCurrentPositionAsync({});
         setLocation(location);
       })();
     }, []);
    
     let text = "Waiting..";
     if (errorMsg) {
       text = errorMsg;
     } else if (location) {
       text = JSON.stringify(location);
     }
    
  return (
    <View>
      <Text>{text}</Text>
      <MapView style={styles.map}>
        <Marker
          title="This is my marker"
          coordinate={{
            latitude: 28.6090561,
            longitude: 77.2226052,
            latitudeDelta: 0.01,
            latitudeDelta: 0.01,
          }}      
        />
      </MapView>
    </View>
  );
}

// India Gate Coordinates - 28.6090561,77.2226052,
export default Map
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});