import "./PrevNextButtons.css"
import { useNavigate } from "react-router-dom";
import BackIcon from "../../assets/icons/BackIcon"
import NextIcon from "../../assets/icons/NextIcon"


const PrevNextButtons = () => {

    const navigate = useNavigate()
    return (
        <div className="prev_next_container">
            <div className="prev_next_button" onClick={() => navigate(-1)}>
                <BackIcon />
            </div>

            <div className="prev_next_button" onClick={() => navigate(+1)}>
                <NextIcon />
            </div>
        </div>
    )
}

export default PrevNextButtons