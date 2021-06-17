import React from "react";

const MusicPlayer = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
        marginRight: "12px",
        backgroundColor: 'solid black',

      }}
    >
      <audio controls autoPlay loop style = {{backgroundColor: 'solid black'}}>
        <source src="musicaDeFondo.mp3" type="audio/mpeg"></source>
        <source src="../musicaDeFondo.mp3" type="audio/mpeg"></source>
      </audio>
    </div>
  );
};

export default MusicPlayer;
