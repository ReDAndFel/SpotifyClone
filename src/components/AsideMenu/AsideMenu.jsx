import AsideItem from "../AsideItem/AsideItem"
import HomeIcon from "/public/assets/icons/HomeIcon.jsx"
import SearchIcon from "/public/assets/icons/SearchIcon.jsx"
import LibraryIcon from "/public/assets/icons/LibraryIcon.jsx"
import "./AsideMenu.css"
import { playlistsAside } from "/public/lib/data.jsx"
import SideMenuCard from "../SideMenuCard/SideMenuCard.jsx"

const AsideMenu = () => {
    return (
        <nav className="nav_aside">
            <section className="section_up">
                <ul>
                    <AsideItem href="/">
                        <HomeIcon />
                        Inicio
                    </AsideItem>

                    <AsideItem href="/">
                        <SearchIcon />
                        Buscar
                    </AsideItem>
                </ul>
            </section>

            <section className="section_library">
                <ul>
                    <AsideItem href="/">
                        <LibraryIcon />
                        Tu biblioteca
                    </AsideItem>


                </ul>

                <div className="section_library_items">
                    {
                        playlistsAside.map(playlist => (
                            <SideMenuCard key={playlist.id} playlist={playlist} withoutFlag={false} />
                        ))
                    }
                </div>


            </section>
        </nav>
    )
}

export default AsideMenu