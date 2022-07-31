import { startTransition, useEffect, useState,useTransition } from 'react';
// import NAMES from "./components/data.json"
// import {PostList} from './components/PostList'
const DATA =[    {"id":1,"first_name": "first1","last_name": "last1"},
{"id":2,"first_name": "first2","last_name": "last2"},
{"id":3,"first_name": "first3","last_name": "last3"},
{"id":4,"first_name": "first4","last_name": "last4"},
{"id":5,"first_name": "first5","last_name": "last5"},
{"id":6,"first_name": "first6","last_name": "last6"},
{"id":7,"first_name": "first7","last_name": "last7"},
{"id":8,"first_name": "first8","last_name": "last8"},
{"id":9,"first_name": "first9","last_name": "last9"}
]
export const Test = ()=> {
  const [query,setQuery]= useState("")
  const [inputValue,setInputValue] = useState("")
  const[isPending, statTransition]= useTransition()


//   
  const changeHandler=(event)=>{
    setInputValue(event.target.value)
    startTransition(()=> setQuery(event.target.value))
  }
  const filteredNames= 
  DATA.filter((item)=> {
    return item.first_name.includes(query) || item.last_name.includes(query)
  })

  return (
    <div className="App">
      <input type='text' value={inputValue} onChange={changeHandler} />
      {isPending && <p>Updating list...</p>}
      {filteredNames.map((item)=>(<p key={item.id}>
          <div className='text-white'>{item.first_name}-{item.last_name}</div>
        </p>
      ))}
    </div>
)
}