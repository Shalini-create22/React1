/* components/About.js
import React from 'react';

const About = () => {
  return (
    <div>
      <h1>About Us</h1>
      
    </div>
  );
};

export default About;
import React, { useState, useRef } from "react";

function MicrophoneRecorder() {
  const [isRecording, setIsRecording] = useState(false);
  const [audioURL, setAudioURL] = useState("");
  const mediaRecorderRef = useRef(null);

  const startRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    mediaRecorderRef.current = new MediaRecorder(stream);
    const audioChunks = [];

    mediaRecorderRef.current.ondataavailable = (event) => {
      audioChunks.push(event.data);
    };

    mediaRecorderRef.current.onstop = () => {
      const audioBlob = new Blob(audioChunks, { type: "audio/mp3" });
      const audioUrl = URL.createObjectURL(audioBlob);
      setAudioURL(audioUrl);
    };

    mediaRecorderRef.current.start();
    setIsRecording(true);
  };

  const stopRecording = () => {
    mediaRecorderRef.current.stop();
    setIsRecording(false);
  };

  return (
    <div>
      <button onClick={isRecording ? stopRecording : startRecording}>
        {isRecording ? "Stop Recording" : "Start Recording"}
      </button>
      {audioURL && (
        <audio src={audioURL} controls />
      )}
    </div>
  );
}

export default MicrophoneRecorder;
import React, { useState, useRef } from "react";
function AudioRecorderPlayer() {
  // State for the audio player
  const audioRef = useRef(null);

  // State for the microphone recorder
  const [isRecording, setIsRecording] = useState(false);
  const [audioURL, setAudioURL] = useState("");
  const mediaRecorderRef = useRef(null);

  // Function to play audio
  const playAudio = () => {
    audioRef.current.play();
  };

  // Function to pause audio
  const pauseAudio = () => {
    audioRef.current.pause();
  };

  // Function to start recording from the microphone
  const startRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    mediaRecorderRef.current = new MediaRecorder(stream);
    const audioChunks = [];

    mediaRecorderRef.current.ondataavailable = (event) => {
      audioChunks.push(event.data);
    };

    mediaRecorderRef.current.onstop = () => {
      const audioBlob = new Blob(audioChunks, { type: "audio/mp3" });
      const audioUrl = URL.createObjectURL(audioBlob);
      setAudioURL(audioUrl);
    };

    mediaRecorderRef.current.start();
    setIsRecording(true);
  };

  // Function to stop recording
  const stopRecording = () => {
    mediaRecorderRef.current.stop();
    setIsRecording(false);
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      {/* Section for Audio Player 
      <h2>Audio Player</h2>
      <audio ref={audioRef} src= "/public/ringtone.mp3" controls />
      <div style={{ margin: "10px" }}>
        <button onClick={playAudio} style={buttonStyle}>
          Play Audio
        </button>
        <button onClick={pauseAudio} style={buttonStyle}>
          Pause Audio
        </button>
      </div>

      {/* Section for Microphone Recorder 
      <h2>Microphone Recorder</h2>
      <div style={{ margin: "10px" }}>
        <button onClick={isRecording ? stopRecording : startRecording} style={buttonStyle}>
          {isRecording ? "Stop Recording" : "Start Recording"}
        </button>
      </div>

      {/* Playback recorded audio *
      {audioURL && (
        <div>
          <h3>Recorded Audio</h3>
          <audio src={audioURL} controls />
        </div>
      )}
    </div>
  );
}

// Button styles
const buttonStyle = {
  padding: "10px 15px",
  margin: "5px",
  backgroundColor: "#6772e5",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};

export default AudioRecorderPlayer;*/

import React, { useRef } from 'react';

function MultipleAudioPlayer() {
  // Array of audio file sources
  const audioFiles = [
    { id: 1, src: '/Assets/song1.mp3', title: 'Song 1' },
    { id: 2, src: '/Assets/song2.mp3', title: 'song 2' },
    { id: 3, src:  '/Assets/song3.mp3', title: 'Song 3' },
    { id: 3, src: '/Assets/song4.mp3', title: 'Song 4' },
    { id: 3, src: '/Assets/song5.mp3', title: 'Song 5' },
    
  ];

  // Use an object to store multiple audio refs
  const audioRefs = useRef({});

  const playAudio = (id) => {
    // Pause all audio first
    Object.values(audioRefs.current).forEach((audio) => audio.pause());

    // Play selected audio
    audioRefs.current[id].play();
  };

  const pauseAudio = (id) => {
    audioRefs.current[id].pause();
  };

  const buttonStyle = {
    padding: '10px 15px',
    margin: '5px',
    backgroundColor: '#6772e5',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h2>Multiple Audio Players</h2>
      {audioFiles.map((audio) => (
        <div key={audio.id} style={{ marginBottom: '20px' }}>
          <h3>{audio.title}</h3>
          <audio ref={(el) => (audioRefs.current[audio.id] = el)} src={audio.src} />
          <div style={{ marginTop: '10px' }}>
            <button onClick={() => playAudio(audio.id)} style={buttonStyle}>
              Play
            </button>
            <button onClick={() => pauseAudio(audio.id)} style={buttonStyle}>
              Pause
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MultipleAudioPlayer;

