import { View, Text, Button } from 'react-native'
import React from 'react'
import { Video, ResizeMode } from "expo-av";

const Videos = () => {
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});

    return (
      //style={{ width: 100, height: 100, alignItems:'center'}}
      <View>
        <Text>Videos</Text>
        <Video
          style={{
            width: '100%',
            height: 400,
            alignItems: "center",
            justifyContent: "center",
          }}
          ref={video}
          isLooping
          isMuted
          source={{
            uri: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
          }}
          resizeMode={ResizeMode.CONTAIN}
          onPlaybackStatusUpdate={(status) => setStatus(() => status)}
        />
        <View>
          <Button
            title={status.isPlaying ? "Pause" : "Play"}
            onPress={() =>
              status.isPlaying
                ? video.current.pauseAsync()
                : video.current.playAsync()
            }
          />
        </View>
      </View>
    );
}

export default Videos