import { UserProvider } from "./user"
import { GroupsProvider } from "./Groups"
import { AuthenticateProvider } from "./Authenticate"

const Providers = ({children}) => {
    return (
        <AuthenticateProvider>
        <UserProvider>
        <GroupsProvider>
            {children}
        </GroupsProvider>
        </UserProvider>
        </AuthenticateProvider>
)
}

export default Providers;