import React, { useRef, useState } from "react";
import { dummyData } from "../../../assets/data";
import Controls from "./Controls";
import DisplayTrack from "./DisplayTrack";
import ProgressBar from "./ProgressBar";
function MusicPlayer({ setCurrentTrack, currentTrack }) {
  const audioRef = useRef();
  const progressBarRef = useRef();
  const [timeProgress, setTimeProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  const handleNext = () => {
    let trackIndex = dummyData.findIndex((obj) => obj.id === currentTrack.id);
    if (trackIndex >= dummyData.length - 1) {
      setCurrentTrack(dummyData[0]);
    } else {
      setCurrentTrack(dummyData[trackIndex + 1]);
    }
  };

  return (
    <div className="w-full absolute bottom-0">
      <ProgressBar {...{ progressBarRef, audioRef, timeProgress, duration }} />
      <div className="flex justify-between items-center pr-[30px]">
        <DisplayTrack
          {...{
            currentTrack,
            audioRef,
            setDuration,
            progressBarRef,
            handleNext,
          }}
        />
        {audioRef.current && (
          <Controls
            {...{
              audioRef,
              progressBarRef,
              duration,
              setTimeProgress,
              currentTrack,
              setCurrentTrack,
              handleNext,
            }}
          />
        )}
      </div>
    </div>
  );
}

export default MusicPlayer;
