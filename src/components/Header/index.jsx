import { HeaderDiv, MenuDiv, MenuButton, LogoImg } from "./style";
import Logo from "../../assets/Logo.png";
import { useState, useContext } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { HiOutlineMenu } from "react-icons/hi";
import { IconContext } from "react-icons";


const Header = ({page, setAuthenticated}) => {

    const [menuOpened, setMenuOpened] = useState(false);

    

    const history = useHistory();

    const redirectTo = (link) => {
        history.push(link);
    }

    const logOut = () => {
        localStorage.clear()
        setAuthenticated(false)
        return <Redirect to="/"/>
    }

    return (
        <HeaderDiv>
            <div>
                <LogoImg src={Logo} alt="logo" onClick={() => redirectTo("/dashboard")}/>
                <IconContext.Provider value={{ color: "6C63FF", size: "40px" }}>
                    <MenuButton onClick={() => setMenuOpened(!menuOpened)}>
                        <HiOutlineMenu />
                    </MenuButton>
                </IconContext.Provider>
            </div>
            <MenuDiv menuOpened={menuOpened} page={page}>
                <button onClick={() => redirectTo("/subscribedgroups")}>Subscribed Groups</button>
                <button onClick={() => redirectTo("/groups")}>Search Groups</button>
                <button onClick={() => redirectTo("/creategroup")}>Create Group</button>
                <button onClick={() => logOut()}>Log out</button>
            </MenuDiv>
        </HeaderDiv>
    )
}

export default Header;