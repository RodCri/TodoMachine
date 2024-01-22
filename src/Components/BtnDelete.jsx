/* eslint-disable react/prop-types */
import { BtnIcon } from './BtnIcon';

export const BtnDelete = ({onDelete}) => {
  return (
    <BtnIcon
      type="delete"
      color="gray"
      onClick={onDelete}
    />
  )
}