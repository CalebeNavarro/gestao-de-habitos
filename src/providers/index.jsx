import { UserProvider } from "./user"
import { SubGroupsProvider } from './SubGroups'

const Providers = ({children}) => {
    return (
        <SubGroupsProvider>
        <UserProvider>
            {children}
        </UserProvider>
        </SubGroupsProvider>
)
}

export default Providers;