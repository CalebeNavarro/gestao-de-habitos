import { HabitCard } from "../CardHabit/styles";
import api from "../../services/api";
import { useState } from "react";
import { toast } from 'react-toastify';

const CardHabit = ({ habit, func }) => {
  const [ value, setValue ] = useState(habit.how_much_achieved);
  const token = JSON.parse(localStorage.getItem("@habits:token")) || '';

  const achievedDone = () => {
    toast(`Congratulations, your task ${habit.title} is done. Get a time to rest now!`);
    func();
  }

  const handleChange = () => {
    let data = {};
    let reload = false;
    if (value === "100") {
      data = { achieved : true, how_much_achieved: value }
      reload = true;
    } else {
      data = { how_much_achieved: value}

    }
    console.log(data)
    api.patch(`/habits/${habit.id}/`, data , {
      headers: {
        Authorization: `Bearer ${ token }`
      }
    })
      .then(response => {
        reload && achievedDone();
        return response
      })
      .catch(err => console.log(err, err.response))
  }

  return (
    <HabitCard>
      <label>Title: {habit.title}</label>
      <label>Category: {habit.category}</label>
      <label>Difficulty: {habit.difficulty}</label>
      <label>Frequency: {habit.frequency}</label>
      <div>
        <input type='range' value={value} onChange={(evt) => setValue(evt.currentTarget.value)}/> 
        <button onClick={handleChange}>Enviar</button>
      </div>
    </HabitCard>
  );
};

export default CardHabit;
