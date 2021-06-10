import { UserProvider } from "./user"
import { SubGroupsProvider } from "./SubGroups"
import { GroupsProvider } from "./Groups"

const Providers = ({children}) => {
    return (
        
        <SubGroupsProvider>
        <UserProvider>
        <GroupsProvider>
            {children}
        </GroupsProvider>
        </UserProvider>
        </SubGroupsProvider>
        
)
}

export default Providers;