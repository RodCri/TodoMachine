import PropTypes from 'prop-types';
import './Task.css'

export const Task = ({name, completed}) => {

  const classCompleted = `item ${completed ? 'item__completed' : 'item__notcompleted'}`;
  
  return (
    <li className='item__task'>
      <span className={classCompleted}></span>  
      <p className={completed && 'item__dashed'}>{name}</p>
      <span className='item__delete'>x</span>  
    </li>
  )
}

Task.propTypes = {
  name: PropTypes.string,
  completed: PropTypes.bool
};