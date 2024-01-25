/* eslint-disable react/prop-types */
import './ListTasks.css'
export const ListTasks = ({children}) => {
  return (
    <ul className="list_items">
      {children}
    </ul>
  )
}
