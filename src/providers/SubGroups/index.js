import { createContext, useContext, useState } from "react"
import api from '../../services/api';

const SubGroupsContext = createContext([]);

export const SubGroupsProvider = ({ children }) => {
  const [ groups, setGroups ] = useState([]);
  
  const attGroups = () => {
    const token = JSON.parse(localStorage.getItem("@habits:token"))
    api.get("/groups/subscriptions/", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(response => console.log(response.data))
    .then(response => setGroups(response.data))
  }


  return (
    <SubGroupsContext.Provider value={{ groups, attGroups }}>
      {children}
    </SubGroupsContext.Provider>
  )
};

export const useSubGroups = () => useContext(SubGroupsContext);