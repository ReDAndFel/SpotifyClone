import "./SideMenuCard.css"

const SideMenuCard = ({ playlist, withoutFlag }) => {
    return (
        <a href={`/playlist/${playlist.id}`} className={`playlist_item ${withoutFlag && 'withoutArtist'}`}>
            <img src={playlist.cover} alt="" />
            <div className="info_side_menu_card">
                <h4>{playlist.title}</h4>
                {!withoutFlag && <span>
                    {playlist.artists.join(", ")}
                </span>}
            </div>
        </a>
    )
}

export default SideMenuCard