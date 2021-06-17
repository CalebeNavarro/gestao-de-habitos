import { createContext, useState } from "react";

export const GroupIdContext = createContext();

export const GroupIdProvider = ({ children }) => {

    const [groupId, setGroupId] = useState("");

    return (
        <GroupIdContext.Provider value={{ groupId, setGroupId }}>
        {children}
        </GroupIdContext.Provider>
    );
};