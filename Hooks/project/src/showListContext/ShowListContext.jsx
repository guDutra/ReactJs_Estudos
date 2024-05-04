import React, {useState, createContext, useContext} from 'react'

const UseCreateList = (props) => {
    const [list, setList] = useState(props.list)
    console.log(list)
  return (
   
        <div className='list'>

            {list.map((item) => (
                <div className='item-list' key={item.id}>
                   {Object.keys(item).map((key) => (
                        <p key={key}>
                            {key}: {item[key]}
                        </p>
                    ))}
                
                   
                </div>
            ))}
        </div>

 
  )
}

export default UseCreateList