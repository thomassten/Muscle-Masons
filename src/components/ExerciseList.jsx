import {Link} from 'react-router-dom'

let ExerciseList = (props) => {
  const star = '⭐️'

  return (
    <div className='card'>
        <Link to={`/exercise/${props.exercise.id}`}>
    <div className="exercises">
          <h3>{props.exercise.fields.name}</h3>
          <h4>Target Muscle:</h4>
          <p><em>{props.exercise.fields.targeted}</em></p>
          <h4>Intensity:</h4>
          <p>{star.repeat(Number(props.exercise.fields.intensity))}</p>
      </div>
        </Link>
    </div>
  )
}

export default ExerciseList