import React from 'react'
import { useState } from 'react';
import '../Dice/Dice.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faDiceOne} from '@fortawesome/free-solid-svg-icons/faDiceOne'
import {faDiceTwo} from '@fortawesome/free-solid-svg-icons/faDiceTwo'
import {faDiceThree} from '@fortawesome/free-solid-svg-icons/faDiceThree'
import {faDiceFour} from '@fortawesome/free-solid-svg-icons/faDiceFour'
import {faDiceFive} from '@fortawesome/free-solid-svg-icons/faDiceFive'
import {faDiceSix} from '@fortawesome/free-solid-svg-icons/faDiceSix'

const Common = () => {
  let [randNumber,setRandNumber]=useState(1);
  let [iconName,setIconName]=useState(faDiceOne)
  const clickFunc = (e) => {
    setRandNumber(Math.floor(Math.random() * (6 - 1 + 1) + 1))
    switch (randNumber) {
      case 1:
        setIconName(faDiceOne)
        break;
      case 2:
        setIconName(faDiceTwo)
        break;
      case 3:
        setIconName(faDiceThree)
        break;
      case 4:
        setIconName(faDiceFour)
        break;
      case 5:
        setIconName(faDiceFour)
        break;
      case 6:
        setIconName(faDiceFive)
        break;
      default:
        setIconName(faDiceSix)
        break;
    }
  };
  return (
    <div>
      <FontAwesomeIcon onClick={clickFunc} icon={iconName} className='dice'/>
    </div>
    
    
  )
}

export default Common