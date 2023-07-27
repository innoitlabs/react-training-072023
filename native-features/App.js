import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Camera, CameraType } from 'expo-camera';

export default function App() {
  return (
    <View style={styles.container}>
      <Camera type={CameraType.back}>
        
      </Camera>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
