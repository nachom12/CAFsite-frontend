import '../assets/scss/pages/newPlayer.scss';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

const NewPlayer = () => {

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      age: "",
      position: "",
    }
  });

  if(errors) {
    console.log(errors);
  }

  const onSubmit = (playerData) => {
    alert(JSON.stringify(playerData));
  }

  return (
    <div className="newPlayerForm">
      <h1>Add a new player</h1>
      <form className="newPlayerForm__fields" onSubmit={handleSubmit(onSubmit)}>
        <label>
          First Name:
          <input {...register("firstName", { required: "You must insert first name" })} />
          <span>{errors.firstName?.message}</span>
        </label>
        <label>
          Last name:
          <input {...register("lastName", { required: "You must insert last name" })} />
          <span>{errors.lastName?.message}</span>
        </label>
        <label>
          Age
          <input type="number" {...register("age", { required: "Insert valid number", min: 18, max: 35 })} />
          <span>{errors.age?.message}</span>
        </label>
        <label>
          Position
          <input {...register("position")} />
          <span>{errors.position?.message}</span>
        </label>
        <label>
          Playing Since
          <input type="number" {...register("playingSince")} />
        </label>
        <input className="submitButton" type="submit"></input>
      </form>
    </div>
  );
};

export default NewPlayer;
