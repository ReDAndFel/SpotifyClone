import "./PlayListCard.css"

const PlayListCard = ({playlist}) => {
    return (
        <a href={`/playlist/${playlist.id}`} className="playlist_card">
            <img src={playlist.cover} alt="" />
            <div className="info_playlist_card">
                <h4>{playlist.title}</h4>
                <span>
                    {playlist.artists.join(", ")}
                </span>
            </div>
        </a>
    )
}

export default PlayListCard