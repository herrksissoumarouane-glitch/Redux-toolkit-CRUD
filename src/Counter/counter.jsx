 
import { useDispatch, useSelector } from "react-redux"
import { addOne,subOne,res, setname} from "./counterSlice"
import { useState } from "react"

 const Counter=()=>{ 
  const [newname,setnewname]=useState('')
  //get curent state
    const data=useSelector(state=>state.counterData  ) 
    const dispatch=useDispatch()

     const changeName=()=>{
    dispatch(setname(newname))
  }
    return(
        <>
          <div>
            <button onClick={()=>dispatch(subOne())} >-</button>
            <span>{data.count}</span>
            <button onClick={()=>dispatch(addOne())} >+</button>
            <button onClick={()=>dispatch(res())}>reset</button>
             <input type="text" onChange={(e)=>setnewname(e.target.value)} value={newname} />
             <button onClick={changeName}>change</button>
             <div>{data.name ?`hallo Herr ${data.name}` :'f'}</div>
          </div>
        </>
    )
}
export default Counter