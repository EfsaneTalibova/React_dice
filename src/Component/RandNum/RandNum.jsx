import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import '../RandNum/RandNum.css'
const RandNum = () => {
    let [randNum,setRandNum]=useState(Math.floor(Math.random() * (6 - 1 + 1) + 1))
    let changeNum =()=>{
        setRandNum(Math.floor(Math.random() * (100 - 1 + 1) + 1))
        
    }
    
    useEffect((e)=>{
        window.addEventListener('click',()=>{
            changeNum()
        })
      })
  return (
    <div>
    <p className='randNum'>{randNum}</p>
    </div>
  )
}

export default RandNum
