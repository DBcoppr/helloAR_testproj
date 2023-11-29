import React, { useRef, useState } from "react";
import { dummyData } from "../../../assets/data";
import Controls from "./Controls";
import DisplayTrack from "./DisplayTrack";
import ProgressBar from "./ProgressBar";
function MusicPlayer({
  setTrackIndex,
  setCurrentTrack,
  currentTrack,
  trackIndex,
}) {
  const audioRef = useRef();
  const progressBarRef = useRef();
  const [timeProgress, setTimeProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  const handleNext = () => {
    if (trackIndex >= dummyData.length - 1) {
      setTrackIndex(0);
      setCurrentTrack(dummyData[0]);
    } else {
      setTrackIndex((prev) => prev + 1);
      setCurrentTrack(dummyData[trackIndex + 1]);
    }
  };

  return (
    <div className="w-full absolute bottom-0">
      <ProgressBar {...{ progressBarRef, audioRef, timeProgress, duration }} />
      <div className="flex">
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
              trackIndex,
              setTrackIndex,
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
