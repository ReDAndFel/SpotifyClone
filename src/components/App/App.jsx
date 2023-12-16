import { BrowserRouter as Router } from 'react-router-dom';
import AsideMenu from '../AsideMenu/AsideMenu'
import MainMenu from '../MainMenu/MainMenu'
import './App.css'
import { playlistsAside, playlistsMain } from "../../lib/data.jsx"
import SideMenuCard from '../SideMenuCard/SideMenuCard.jsx';
import PlayListCard from '../PlayListCard/PlayListCard.jsx';
import Player from '../Player/Player.jsx';

function App() {

    return (
        <Router>
            <div className='app'>
                <aside>
                    <AsideMenu />
                </aside>

                <main>
                    <section className='main_header'>
                        <MainMenu />
                        <h2>Buenos días</h2>
                        <div className='main_header_items'>
                            {
                                playlistsAside.map(playlist => (
                                    <SideMenuCard key={playlist.id} playlist={playlist} withoutFlag={true} />
                                ))
                            }
                        </div>
                    </section>
                    <section className='main_items_container'>
                        <h2>Creado para tí </h2>

                        <div className='main_items'>
                            {
                                playlistsMain.map(playlist => (
                                    <PlayListCard key={playlist.id} playlist={playlist} />
                                ))
                            }
                        </div>


                    </section>
                </main>

                <footer>
                    <section className='footer_section'>
                        Cancion actual
                    </section>

                    <section className='footer_section'>
                        <Player />
                    </section>

                    <section className='footer_section'>
                        volumen
                    </section>
                </footer>
            </div>
        </Router>
    )
}

export default App
