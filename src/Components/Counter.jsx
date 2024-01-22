import PropTypes from 'prop-types';
import './Counter.css';

export const Counter = ({completed = 0, total = 0}) => {
  return (
    <p className="counter">
      Has completado <span className='counter__number'>{completed}</span> de <span className='counter__number'> {total} </span> TODOs
    </p>
  )
}

Counter.propTypes = {
  completed: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};