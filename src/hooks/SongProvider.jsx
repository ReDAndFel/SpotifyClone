import { createContext, useContext, useEffect, useRef, useState } from "react"

const SongContext = createContext()

export const SongProvider = ({ children }) => {
    const [currentSong, setCurrentSong] = useState(null)
    const audioRef = useRef()
    const [isPlaying, setIsPlaying] = useState(false)

    const selectSong = (song) => {
        setCurrentSong(song);      
    }

    const playSong = () => {
        if (currentSong) {
            isPlaying
                ? audioRef.current.pause()
                : audioRef.current.play()
        }
        setIsPlaying(!isPlaying)
    }

    useEffect(() => {
        if (currentSong) {
            audioRef.current.src = `../../src/assets/music/${currentSong.albumId}/0${currentSong.id}.mp3`
            audioRef.current.play()
            audioRef.current.volume = 0.1
            setIsPlaying(true)
        }
    }, [currentSong]);

    return (
        <SongContext.Provider value={{ currentSong, selectSong, playSong, isPlaying, audioRef }}>
            {children}
        </SongContext.Provider>
    );
};

export const useSong = () => {
    return useContext(SongContext)
};
