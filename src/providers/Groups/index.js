import { useContext, createContext, useState } from "react"
import api from '../../services/api';
import axios from 'axios';

const GroupsContext = createContext([]);

export const GroupsProvider = ({ children }) => {
  const [ groups, setGroups ] = useState({results: []});

  const searchGroups = data => {
    api.get(`/groups/?category=${data}`)
      .then(response => setGroups(response.data))
      .catch(err => console.log(err))
  }

  const handleNext = () => {
    axios.get(`${groups.next}`)
      .then(response => setGroups(response.data))
      .catch(err => console.log(err))
  }

  const handlePrev = () => {
    axios.get(`${groups.previous}`)
      .then(response => setGroups(response.data))
      .catch(err => console.log(err))
  }

  return (
    <GroupsContext.Provider value={{ groups, searchGroups, handleNext, handlePrev }}>
      {children}
    </GroupsContext.Provider>
  )
};

export const useGroups = () => useContext(GroupsContext);