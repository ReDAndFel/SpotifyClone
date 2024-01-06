import { Route, Routes } from 'react-router-dom'
import AsideMenu from '../AsideMenu/AsideMenu'
import './App.css'
import Player from '../Player/Player.jsx'
import CurrentlySong from '../CurrentlySong/CurrentlySong.jsx'
import MainPage from '../MainPage/MainPage.jsx'
import Playlist from '../Playlist/Playlist.jsx'

function App() {

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
                    <CurrentlySong song={1} />
                </section>

                <section className='footer_section'>
                    <Player />
                </section>

                <section className='footer_section'>
                    volumen
                </section>
            </footer>
        </div>

    )
}

export default App
