import { UserProvider } from "./user"
import { SubGroupsProvider } from "./SubGroups"
import { GroupsProvider } from "./Groups"
import { AuthenticateProvider } from "./Authenticate"

const Providers = ({children}) => {
    return (
        <AuthenticateProvider>
        <SubGroupsProvider>
        <UserProvider>
        <GroupsProvider>
            {children}
        </GroupsProvider>
        </UserProvider>
        </SubGroupsProvider>
        </AuthenticateProvider>
        
)
}

export default Providers;