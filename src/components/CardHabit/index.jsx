import { HabitCard } from "../CardHabit/styles";
import api from "../../services/api";
import { useState } from "react";
import { toast } from 'react-toastify';
import { BsFillLightningFill } from 'react-icons/bs';
import { AiOutlineArrowRight, AiOutlineClose } from 'react-icons/ai';

const CardHabit = ({ habit, func }) => {
  const [ value, setValue ] = useState(habit.how_much_achieved);
  const token = JSON.parse(localStorage.getItem("@habits:token")) || '';
  let objColor = {};

  if (habit.difficulty === "Easy") {
    objColor = {first: '#1fe4f5', second: '#3fbafe'};
  } else if (habit.difficulty === "Medium") {
    objColor = {first: '#fbc1cc', second: '#fa99b2'};
  } else if (habit.difficulty === "Hard") {
    objColor = {first: '#e97d7d', second: '#f82f2f'};
  } else {
    objColor = {first: '#f588d8', second: '#c0a3e5'};
  }

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
    <HabitCard objColor={objColor}>
      <div class="card__icon">
        <span>Title: {habit.title.length > 10 ? habit.title.substr(0, 13) + '...' : habit.title}</span>
        <span>Category: {habit.category.length > 10 ? habit.category.substr(0, 13) + '...' : habit.category}</span>
      </div>

      <p class="card__exit"><AiOutlineClose /></p>

      <h2 class="card__title">
        
        Frequency: {habit.frequency.length > 10 ? habit.frequency.substr(0, 13) + '...' : habit.frequency}
      </h2>

      <section>
        <input type='range' value={value}
          onChange={(evt) => setValue(evt.currentTarget.value)}
        /> 
        <button onClick={handleChange}>Enviar</button>
      </section>
    </HabitCard>
  );
};

export default CardHabit;

