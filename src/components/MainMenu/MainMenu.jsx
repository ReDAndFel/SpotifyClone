import PrevNextButtons from "../PrevNextButtons/PrevNextButtons.jsx"
import "./MainMenu.css"
import BellIcon from "../../assets/icons/BellIcon.jsx"
import ActivityIcon from "../../assets/icons/ActivityIcon.jsx"
import AccountIcon from "../../assets/icons/AccountIcon.jsx"

const MainMenu = () => {
    return (
        <nav className="main_nav">
            <div>
                <PrevNextButtons />
            </div>
            <div className="main_nav_buttons">
                <a href="/" className="main_nav_button">
                    <BellIcon />
                </a>
                <a href="/" className="main_nav_button">
                    <ActivityIcon />
                </a>
                <a href="/" className="main_nav_button">
                    <AccountIcon />
                </a>
            </div>
        </nav>
    )
}

export default MainMenu