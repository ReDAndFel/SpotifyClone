import { useEffect, useState } from "react"
import "./Slider.css"
import { useSong } from "../../hooks/SongProvider"
import VolumeMuteIcon from "../../../public/assets/icons/VolumeMuteIcon"
import VolumeLowIcon from "../../../public/assets/icons/VolumeLowIcon"
import VolumeMediumIcon from "../../../public/assets/icons/VolumeMediumIcon"
import VolumeHighIcon from "../../../public/assets/icons/VolumeHighIcon"

const Slider = ({ isVolume }) => {

    const { audioRef, currentSong } = useSong()
    const [valueRange, setValueRange] = useState(100)
    const [valueDuration, setValueDuration] = useState(0)
    const [isMute, setIsMute] = useState(false)
    const duration = audioRef?.current?.duration ?? 0

    const handleValueRange = (range) => {
        if (isVolume) {
            setValueRange(range)
            console.log(range)
            if (isVolume) audioRef.current.volume = range / 100
        } else {
            audioRef.current.currentTime = range
        }
    }

    useEffect(() => {
        isMute ? audioRef.current.volume = 0 / 100 : audioRef.current.volume = valueRange / 100
        console.log(isMute)
    }, [isMute])

    useEffect(() => {
        { valueRange == 0 ? setIsMute(true) : setIsMute(false) }
    }, [valueRange])


    useEffect(() => {
        audioRef.current.addEventListener('timeupdate', handleTimeUpdate)

        return () => {
            audioRef.current.removeEventListener('timeupdate', handleTimeUpdate)
        }
    }, [])

    const handleTimeUpdate = () => {
        setValueDuration(audioRef.current.currentTime)
    }

    const formatTime = time => {
        if (time == null) return `0:00`

        const seconds = Math.floor(time % 60)
        const minutes = Math.floor(time / 60)

        return `${minutes}:${seconds.toString().padStart(2, '0')}`
    }

    return (
        <div className="slider_container">
            <div onClick={() => setIsMute(!isMute)}>
                {isVolume && !isMute && valueRange < 1 && <VolumeMuteIcon />}
                {isVolume && isMute && <VolumeMuteIcon />}
                {isVolume && !isMute && valueRange <= 9 && valueRange > 0 && <VolumeLowIcon />}
                {isVolume && !isMute && valueRange < 60 && valueRange > 9 && <VolumeMediumIcon />}
                {isVolume && !isMute && valueRange >= 60 && <VolumeHighIcon />}
            </div>

            {!isVolume && <span>{formatTime(valueDuration)}</span>}
            <input className="slider" type="range" max={isVolume ? 100 : audioRef?.current?.duration ?? 0} min={0} value={isVolume ? valueRange : valueDuration} onChange={(e) => handleValueRange(e.target.value)} />
            {!isVolume && <span>
                {duration ? formatTime(duration) : '0:00'}
            </span>}
        </div>
    )
}

export default Slider

