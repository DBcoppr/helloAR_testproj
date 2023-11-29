import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import SongsChart from "./components/SongsChart";
import AddSongModal from "./components/AddSongModal";
import { dummyData } from "../../assets/data";
import MusicPlayer from "./components/MusicPlayer";

function Dashboard() {
  const [isOpenModal, setIsModalOpen] = useState(false);
  const [trackIndex, setTrackIndex] = useState(0);
  const [currentTrack, setCurrentTrack] = useState(dummyData[trackIndex]);

  return (
    <div className="w-full h-screen flex">
      {isOpenModal && <AddSongModal setIsModalOpen={setIsModalOpen} />}
      <Sidebar />
      <div className="w-full relative">
        <div className="border-b border-b-gray py-4 px-9">
          <div className="text-[#00000073] flex text-sm font-normal mb-3">
            <p>First-level Menu / Second-level Menu / </p>
            <p className="text-[#000000D9]">&nbsp; Current Page</p>
          </div>
          <div className="flex justify-end">
            <button className="bg-yellow text-sm font-normal px-4 py-[5px] rounded-sm">
              Add Songs
            </button>
          </div>
        </div>
        <div className="pt-8 px-6 pb-[70px] overflow-auto">
          <SongsChart
            setIsModalOpen={setIsModalOpen}
            setCurrentTrack={setCurrentTrack}
          />
        </div>
        <MusicPlayer
          {...{ setTrackIndex, setCurrentTrack, currentTrack, trackIndex }}
        />
      </div>
    </div>
  );
}

export default Dashboard;
