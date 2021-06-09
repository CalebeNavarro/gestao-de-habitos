import { HeaderDiv, MenuDiv, MenuButton } from "./style";
import Logo from "../../assets/Logo.png";
import { useState } from "react";

const Header = () => {

    const [menuOpened, setMenuOpened] = useState(false);

    return (
        <HeaderDiv>
            <div>
                <img src={Logo} alt="logo" />
                <MenuButton onClick={() => setMenuOpened(!menuOpened)}> a </MenuButton>
            </div>
            <MenuDiv menuOpened={menuOpened}>
                <button>Subscribed Groups</button>
                <button>Search Groups</button>
                <button>Create Group</button>
                <button>Log out</button>
            </MenuDiv>
        </HeaderDiv>
    )
}

export default Header;