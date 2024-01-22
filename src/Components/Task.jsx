/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import './Task.css'
import { BtnComplete } from './BtnComplete';
import { BtnDelete } from './BtnDelete';

export const Task = ({name, completed, onComplete, onDelete}) => {

  // const classCompleted = `item ${completed ? 'item__completed' : 'item__notcompleted'}`;
  
  return (
    <li className='item__task'>
      {/* <span className={classCompleted} onClick={onComplete}></span> */}
      <BtnComplete completed={completed} onComplete={onComplete} />
      {/* <p className={completed && 'item__dashed'}>{name}</p> */}
      <p className={completed ? 'item__dashed' : ''}>{name}</p>
      <BtnDelete onDelete={onDelete}/>
      {/* <span className='item__delete' onClick={onDelete}>x</span>   */}
    </li>
  )
}

Task.propTypes = {
  name: PropTypes.string,
  completed: PropTypes.bool
};