/* eslint-disable react/prop-types */
import DeleteI from '../../assets/d.svg?react';
import Ok from '../../assets/complete.svg?react'
import './BtnIcon.css';

const iconTypes = {
  "complete": (color) => <Ok fill={color} className="Icon-svg" />,
  "delete": (color) => <DeleteI fill={color} className="Icon-svg"/>
};

export const BtnIcon = ({type, color, onClick}) => {
  return (
    <span className={`Icon-container Icon-container-${type}`} onClick={onClick}>
      {/* <img src={iconTypes[type]} alt="" className={`Icon Icon-svg Icon-${type}`}/> */}
      {iconTypes[type] (color)}
    </span>
  )
}
