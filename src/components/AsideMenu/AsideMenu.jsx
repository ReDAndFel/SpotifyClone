import AsideItem from "../AsideItem/AsideItem"
import HomeIcon from "../../assets/icons/HomeICon.jsx"
import SearchIcon from "../../assets/icons/SearchIcon.jsx"
import LibraryIcon from "../../assets/icons/LibraryIcon.jsx"
import "./AsideMenu.css"
import { playlists } from "../../lib/data.jsx"
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
                {
                    playlists.map(playlist => (
                        <SideMenuCard key={playlist.id} playlist={playlist} withoutFlag={false} />
                    ))
                }

            </section>
        </nav>
    )
}

export default AsideMenu