import "./SideMenuCard.css"

const SideMenuCard = ({ playlist }) => {
    return (
        <a href={`/playlist/${playlist.id}`} className="playlist_item">
            <img src={playlist.cover} alt="" />
            <div className="info_side_menu_card">
                <h4>{playlist.title}</h4>
                <span>
                    {playlist.artists.join(", ")}
                </span>
            </div>
        </a>
    )
}

export default SideMenuCard