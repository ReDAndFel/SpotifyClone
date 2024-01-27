import MainMenu from "../MainMenu/MainMenu"
import "./Playlist.css"
import { playlistsAside, songs } from "../../../public/lib/data.jsx"
import { useParams } from "react-router-dom"
import SongItem from "../SongItem/SongItem.jsx"

const Playlist = () => {

    const { idPlaylist } = useParams()
    const playlistCurrently = playlistsAside.find(p => p.id === idPlaylist)
    const songsPlaylist = songs.filter(s => s.albumId == idPlaylist)


    return (
        <div className="playlist_container">
            <div className="playlist_header">
                <MainMenu />
                <div className='playlist_header_info'>
                    <img src={playlistCurrently.cover} alt="playlist_image" />
                    <div className="playlist_header_subinfo">
                        <h3>Playlist</h3>
                        <h1>{playlistCurrently.title}</h1>
                        <h2>{playlistCurrently.artists.join(", ")}</h2>
                    </div>
                </div>
            </div>

            <section className='songs_container'>
                {songsPlaylist.map(song => <SongItem key={song.id} song={song} />
                )}
            </section>
        </div>

    )
}

export default Playlist