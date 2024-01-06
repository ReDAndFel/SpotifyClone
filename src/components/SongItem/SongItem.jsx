import PlayIcon from "../../assets/icons/PlayIcon"
import "./SongItem.css"

const SongItem = ({ song }) => {
    return (
        <div className="song_item">
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