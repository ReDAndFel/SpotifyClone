import './CurrentlySong.css'
const CurrentlySong = ({ song }) => {
    return (
        <div className="currently_song">
            <img src={song.image} alt="song_image" />
            <div className="info_currently_song">
                <a href='#'>{song.title}</a>
                <span>
                    {song.artists.join(", ")}
                </span>
            </div>
        </div>
    )
}

export default CurrentlySong