import { UserProvider } from "./user"
import { GroupsProvider } from "./Groups"
import { AuthenticateProvider } from "./Authenticate"
import { GroupIdProvider } from "./GroupId"

const Providers = ({children}) => {
    return (
        <GroupIdProvider>
        <AuthenticateProvider>
        <UserProvider>
        <GroupsProvider>
            {children}
        </GroupsProvider>
        </UserProvider>
        </AuthenticateProvider>
        </GroupIdProvider>
)
}

export default Providers;