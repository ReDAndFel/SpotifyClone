import MainMenu from "../MainMenu/MainMenu"
import "./Playlist.css"
import { playlistsAside, songs } from "../../lib/data.jsx"
import { useEffect, useState } from "react"
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
                        <h2>{playlistCurrently.title}</h2>
                        <h3>{playlistCurrently.artists.join(", ")}</h3>
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