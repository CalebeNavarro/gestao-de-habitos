import { HeaderDiv, MenuDiv, MenuButton, LogoImg } from "./style";
import Logo from "../../assets/Logo.png";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { HiOutlineMenu } from "react-icons/hi";
import { IconContext } from "react-icons";

const Header = ({page}) => {

    const [menuOpened, setMenuOpened] = useState(false);

    const history = useHistory();

    const redirectTo = (link) => {
        history.push(link);
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
                <button onClick={() => redirectTo("/")}>Log out</button>
            </MenuDiv>
        </HeaderDiv>
    )
}

export default Header;