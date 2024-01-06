import MainMenu from "../MainMenu/MainMenu"
import PlayListCard from "../PlayListCard/PlayListCard"
import SideMenuCard from "../SideMenuCard/SideMenuCard"
import "./MainPage.css"
import { playlistsAside, playlistsMain } from "../../lib/data.jsx"

const MainPage = () => {
    return (
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
    )
}

export default MainPage
