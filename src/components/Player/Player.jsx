import "./Player.css"
import PlayIcon from "../../assets/icons/PlayIcon"
import PauseIcon from "../../assets/icons/PauseIcon"
import BackwardStepIcon from "../../assets/icons/BackwardStepIcon"
import ForwardStepIcon from "../../assets/icons/ForwardStepIcon"
import RepeatIcon from "../../assets/icons/RepeatIcon"
import ShufleIcon from "../../assets/icons/ShuffleIcon"
import { useState } from "react"
import { useSong } from "../../hooks/SongProvider"

const Player = () => {

    const { audioRef,playSong, isPlaying} = useSong()

    return (
        <div className="player_container">
            <button className="player_button">
                <ShufleIcon />
            </button>
            <button className="player_button">
                <BackwardStepIcon />
            </button>
            <button className="player_button play" onClick={() => playSong()}>
                {!isPlaying ? <PlayIcon /> : <PauseIcon />}
            </button>
            <button className="player_button">
                <ForwardStepIcon />
            </button>
            <button className="player_button">
                <RepeatIcon />
            </button>
            <audio ref={audioRef} />
        </div>
    )
}

export default Player