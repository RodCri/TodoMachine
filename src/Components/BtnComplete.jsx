/* eslint-disable react/prop-types */
import { BtnIcon } from './BtnIcon';

export const BtnComplete = ({completed, onComplete}) => {
  return (
    <BtnIcon
      type="complete"
      color={completed ? 'green' : 'gray'}
      onClick={onComplete}
    />
  )
}