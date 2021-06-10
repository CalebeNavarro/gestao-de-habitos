import { SubGroupsProvider } from './SubGroups'

const Providers = ({children}) => {
    return (<>
        <SubGroupsProvider>
            {children}
        </SubGroupsProvider>
    </>
    )
}

export default Providers;