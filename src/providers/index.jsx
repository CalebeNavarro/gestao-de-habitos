import { UserProvider } from "./user"
import { SubGroupsProvider } from './SubGroups'
import { AuthenticateProvider } from './authentication'

const Providers = ({children}) => {
    return (
        <AuthenticateProvider>
        <SubGroupsProvider>
        <UserProvider>
            {children}
        </UserProvider>
        </SubGroupsProvider>
        </AuthenticateProvider>
)
}

export default Providers;