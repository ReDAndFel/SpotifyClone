import "./Player.css"
import PlayIcon from "../../assets/icons/PlayIcon"
import PauseIcon from "../../assets/icons/PauseIcon"
import BackwardStepIcon from "../../assets/icons/BackwardStepIcon"
import ForwardStepIcon from "../../assets/icons/ForwardStepIcon"
import RepeatIcon from "../../assets/icons/RepeatIcon"
import ShufleIcon from "../../assets/icons/ShuffleIcon"
import { useState } from "react"

const Player = () => {

    const [isPlay, setIsPlay] = useState(true)

    const handleClickPlay = () => {
        setIsPlay(!isPlay)
    }

    return (
        <div className="player_container">
            <button className="player_button">
                <ShufleIcon />
            </button>
            <button className="player_button">
                <BackwardStepIcon />
            </button>
            <button className="player_button play" onClick={handleClickPlay}>
                {isPlay ? <PlayIcon /> : <PauseIcon />}
            </button>
            <button className="player_button">
                <ForwardStepIcon />
            </button>
            <button className="player_button">
                <RepeatIcon />
            </button>
        </div>
    )
}

export default Player