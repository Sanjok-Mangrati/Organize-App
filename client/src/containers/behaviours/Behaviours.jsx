// Import necessary styles and libraries
import './behaviours.css';
import { Behaviour } from '../../components/index';

const Behaviours = (props) => {

  return (
    <div className='organize__behaviours-grid'>
      {
        // Iterate through every object in the behaviours array and render <Behaviour /> component for each
        props.behaviours?.map((behaviour) => (
          <Behaviour
            name={behaviour.behaviour} // Pass the behavior name as a prop
            key={behaviour.bid} // Use the behavior ID as a unique key
            bid={behaviour.bid} // Pass the behavior ID as a prop
            getBehaviours={props.getBehaviours} // Pass the function to get behaviors
            getBid={props.getBid} // Pass the function to get behavior ID
            getBname={props.getBname} // Pass the function to get behavior name
          />
        ))
      }
    </div>
  )
}

export default Behaviours;
