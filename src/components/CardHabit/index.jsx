import { HabitCard } from "../CardHabit/styles";

const CardHabit = ({ habit }) => {
  return (
    <HabitCard>
      <label>Title: {habit.title}</label>
      <label>Category: {habit.caregory}</label>
      <label>Difficulty: {habit.difficulty}</label>
      <label>Frequency: {habit.frequency}</label>
      <label>How much achieved: {habit.how_much_achieved}</label>
    </HabitCard>
  );
};

export default CardHabit;
