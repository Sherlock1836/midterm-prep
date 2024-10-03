import { useNavigate } from "react-router-dom";

function NavBarButton({ text, target }) {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(target);
    }

    return ( 
        <button className="nav-bar-button" onClick={handleClick}>{text}</button>
    );
}

export default NavBarButton;