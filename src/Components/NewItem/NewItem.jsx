/* eslint-disable react/prop-types */
import './NewItem.css'
export const NewItem = ({setOpenModal}) => {
  return (
    <button className="add__Task" onClick={() => {setOpenModal(state => !state)}}>+</button>
  )
}
