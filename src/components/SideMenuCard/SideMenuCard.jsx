import { Link } from "react-router-dom"
import "./SideMenuCard.css"

const SideMenuCard = ({ playlist, withoutFlag }) => {
    return (
        <Link to={`/playlist/${playlist.id}`} className={`playlist_item ${withoutFlag && 'withoutArtist'}`}>
            <img src={playlist.cover} alt="" />
            <div className="info_side_menu_card">
                <h4>{playlist.title}</h4>
                {!withoutFlag && <span>
                    {playlist.artists.join(", ")}
                </span>}
            </div>
        </Link>
    )
}

export default SideMenuCard