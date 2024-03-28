import React, { useState, useEffect } from "react";
import { View, StyleSheet, Button, Text, Vibration} from "react-native";
import { Audio, ResizeMode } from "expo-av";
import VideoPlayer from "expo-video-player";
// import socket from "./utils/socket";
import {io} from "socket.io-client";

import Europapa from "./samples/europapaMusicVideo.mp4";

export default function App() {
  const port = "3000"
  // const socket = io("http://192.168.1.181:3000/" );//home
  // const socket = io("http://145.137.62.78:3000/" )//school
  const socket = io("https://npovibro.webpubsub.azure.com", {
    path: "/clients/socketio/hubs/Hub",
});
  
  useEffect(()=>{

    socket.on("connect", () => {
      console.log(socket.connected); // true
    });
    socket.on("hello",(arg)=>{
      setPlayVideo(arg)      
    })
  },[])
  // State variables for managing recording, permission response, and sound level
  const [recording, setRecording] = useState();
  const [permissionResponse, requestPermission] = Audio.usePermissions();
  const [soundLevel, setSoundLevel] = useState(null);
  const [playVideo,setPlayVideo]=useState(false)
  const [play,setPlay]=useState(false)

  // const [status, setStatus] = React.useState({});

  const Video = () => {
    return (
      <View>
        <VideoPlayer
        //  onPlaybackStatusUpdate={status =>  setStatus(() => status)}
          videoProps={{
            shouldPlay: false,
            resizeMode: ResizeMode.CONTAIN,
            debug: true,
            // ❗ source is required https://docs.expo.io/versions/latest/sdk/video/#props
            source: Europapa,
          }}
        />
        {/* <Button
         title={status.isPlaying ? 'Pause' : 'Play'}
         onPress={() =>
          {console.log(status)}
        }
      ></Button> */}
        <Button title={"emit"}onPress={()=>socket.emit("hey","hey",(response)=>{console.log(response)})}></Button>
      </View>
    );
  };

  // Function to start recording audio
  async function startRecording() {
    try {
      // Request permission if not already granted
      if (permissionResponse.status !== "granted") {
        await requestPermission();
      }
      // Set audio mode for recording
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });

      // Create a new recording instance
      const { recording } = await Audio.Recording.createAsync(
        Audio.RecordingOptionsPresets.HighQuality
      );
      setRecording(recording);

      // Update sound level when recording status changes
      recording.setOnRecordingStatusUpdate((status) => {
        if (status.isRecording) {
          setSoundLevel(status.metering + 100); // Adjust sound level for display
          // Vibrate if sound level exceeds a threshold
          if (status.metering + 100 > 30) {
            Vibration.vibrate((Math.floor(status.metering + 100) / 10) * 80);
          }
        }
      });
    } catch (err) {
      console.error("Failed to start recording", err);
    }
  }

  // Function to stop recording audio
  async function stopRecording() {
    // Stop and unload the recording
    await recording.stopAndUnloadAsync();
    setRecording(undefined);
    // Set audio mode to disallow recording
    await Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
    });
  }
  return (
    <View style={styles.container}>
      <Video />
      <Text style={styles.volumeText}>
        {soundLevel !== null
          ? `Sound Level: ${soundLevel}`
          : "Waiting for sound level data..."}
      </Text>
      <Button
        title={recording ? "Stop Recording" : "Start Recording"}
        onPress={recording ? stopRecording : startRecording}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
    padding: 10,
  },
  volumeText: {
    marginBottom: 10,
    textAlign: "center",
  },
});
