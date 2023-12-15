import { BrowserRouter as Router } from 'react-router-dom';
import AsideMenu from '../AsideMenu/AsideMenu'
import MainMenu from '../MainMenu/MainMenu'
import './App.css'
import { playlists } from "../../lib/data.jsx"
import SideMenuCard from '../SideMenuCard/SideMenuCard.jsx';

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
                        <h1>Buenos días</h1>
                        <div className='main_header_items'>
                            {
                                playlists.map(playlist => (
                                    <SideMenuCard key={playlist.id} playlist={playlist} withoutFlag={true} />
                                ))
                            }
                        </div>
                    </section>

                    <section className='main_items'>
                            
                    </section>
                </main>

                <footer>
                    player
                </footer>
            </div>
        </Router>
    )
}

export default App
