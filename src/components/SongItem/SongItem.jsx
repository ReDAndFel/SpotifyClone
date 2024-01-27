import { useSong } from "../../hooks/SongProvider"
import "./SongItem.css"

const SongItem = ({ song }) => {

    const { selectSong } = useSong()

    return (
        <div className="song_item" onClick={() => selectSong(song)}>
            {song.id}
            <img src={song.image} alt="song_image" />
            <div className="info_song">
                <h4>{song.title}</h4>
                <span>
                    {song.artists.join(", ")}
                </span>
            </div>
        </div>
    )
}

export default SongItem