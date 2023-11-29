import { useCallback, useEffect, useRef, useState } from "react";
import pauseIcon from "../../../assets/pause.svg";
import forwardIcon from "../../../assets/playForward.svg";
import playIcon from "../../../assets/triangle-play.png";
import { dummyData } from "../../../assets/data";
const Controls = ({
  audioRef,
  progressBarRef,
  duration,
  setTimeProgress,
  trackIndex,
  setTrackIndex,
  setCurrentTrack,
  handleNext,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const playAnimationRef = useRef();

  const repeat = useCallback(() => {
    const currentTime = audioRef.current.currentTime;
    setTimeProgress(currentTime);
    progressBarRef.current.value = currentTime;
    progressBarRef.current.style.setProperty(
      "--range-progress",
      `${(progressBarRef.current.value / duration) * 100}%`
    );

    playAnimationRef.current = requestAnimationFrame(repeat);
  }, [audioRef, duration, progressBarRef, setTimeProgress]);

  useEffect(() => {
    if (isPlaying && audioRef.current) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
    playAnimationRef.current = requestAnimationFrame(repeat);
  }, [isPlaying, audioRef, repeat]);

  const handlePrevious = () => {
    if (trackIndex === 0) {
      let lastTrackIndex = dummyData.length - 1;
      setTrackIndex(lastTrackIndex);
      setCurrentTrack(dummyData[lastTrackIndex]);
    } else {
      setTrackIndex((prev) => prev - 1);
      setCurrentTrack(dummyData[trackIndex - 1]);
    }
  };

  return (
    <div>
      <div>
        <button onClick={handlePrevious}>
          <img
            src={forwardIcon}
            alt="backwardIcon"
            className="transform rotate-180"
          />
        </button>
        <button onClick={() => setIsPlaying(!isPlaying)}>
          {isPlaying ? (
            <img src={playIcon} alt="play icon" className="w-5 h-5" />
          ) : (
            <img src={pauseIcon} alt="pause icon" />
          )}
        </button>
        <button onClick={handleNext}>
          <img src={forwardIcon} alt="forward icon" />
        </button>
      </div>
    </div>
  );
};

export default Controls;
