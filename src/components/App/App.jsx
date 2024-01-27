import { Route, Routes } from 'react-router-dom'
import AsideMenu from '../AsideMenu/AsideMenu'
import './App.css'
import Player from '../Player/Player.jsx'
import CurrentlySong from '../CurrentlySong/CurrentlySong.jsx'
import MainPage from '../MainPage/MainPage.jsx'
import Playlist from '../Playlist/Playlist.jsx'
import { useSong } from '../../hooks/SongProvider.jsx'
import Slider from '../Slider/Slider.jsx'


function App() {
    
    const { currentSong } = useSong()

    return (

        <div className='app'>
            <aside>
                <AsideMenu />
            </aside>

            <Routes>
                <Route path="/playlist/:idPlaylist" element={<Playlist />} />
                <Route path="/inicio" element={<MainPage />} />
                <Route path="/" element={<MainPage />} />
            </Routes>

            <footer>
                <section className='footer_section'>
                    {currentSong && <CurrentlySong song={currentSong} />}
                </section>

                <section className='footer_section'>
                    <Player />
                    <Slider isVolume={false}/>
                </section>

                <section className='footer_section'>
                    <div className='slider_volume_container'>
                        <Slider isVolume />
                    </div>
                
                </section>
            </footer>
        </div>

    )
}

export default App
