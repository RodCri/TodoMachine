/* eslint-disable react/prop-types */
import './NewItem.css'
export const NewItem = ({setOpenModal,openModal}) => {
  return (
    <button className="add__Task" onClick={() => {setOpenModal(!openModal)}}>+</button>
  )
}
