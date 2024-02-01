import React from 'react'
import { useState } from 'react'

const StateTutorial = () => {
  const [inputValue, setInputValue] = useState("Gustavo");

  const onChange = (e) => {
    const newValue = e.target.value;
    setInputValue(newValue);
  }
  return (
    <div>
      <input placeholder='enter something' onChange={onChange}/>
      {inputValue}
    </div>
  )
}

export default StateTutorial