import './CurrentlySong.css'
const CurrentlySong = ({ song }) => {
    return (
        <div className="currently_song">
            <img src={song.cover} alt="song_image" />
            <div className="info_currently_song">
                <a href='#'>titulo{song.title}</a>
                <span>
                    nombre1, nombre 2
                </span>
            </div>
        </div>
    )
}

export default CurrentlySong