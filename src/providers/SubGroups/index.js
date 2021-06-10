import { createContext, useContext, useEffect, useState } from "react"
import api from '../../services/api';

const SubGroupsContext = createContext([]);

export const SubGroupsProvider = ({ children }) => {
  const [ groups, setGroups ] = useState([]);
  const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjIzNTQxNzQwLCJqdGkiOiI5ZWI2NmVlZWNlMmU0ZjYzYTU3NWQyYThhMDk2NjBkMiIsInVzZXJfaWQiOjY3NX0.46t3qFETqXhganm0o9BRKvwaGQ6nE5riOPde1ZbU0yg";

  useEffect(() => {
    api.get("/groups/subscriptions/", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(response => setGroups(response.data))
  }, [])

  return (
    <SubGroupsContext.Provider value={{ groups }}>
      {children}
    </SubGroupsContext.Provider>
  )
};

export const useSubGroups = () => useContext(SubGroupsContext);