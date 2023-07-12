import { useState, useEffect } from 'react'
import './App.css';

const Litem = (props)=>{
  return(
    <div style={{border:'1px solid black'}}> 
       {props.val.title && <h6>{props.val.title}</h6>}
       {!props.val.title && <div className='skeleton skeleton-t'></div>}
       {props.val.body && <p >{props.val.body}</p>}
       {!props.val.body && <div className='skeleton skeleton-t'></div>}
    </div>
  )
}

function App() {
  const [data, setData] = useState({})
  const fetchData = async () => {
    await fetch('https://jsonplaceholder.typicode.com/posts')
      .then(async (response) => {
        const dataa = await response.json()
        setData(dataa)
      }
      )
  }
  useEffect(() => {
    fetchData()
  }, [])
  return (
    <div>
    {
      Object.keys(data).map((d)=>{
        return <Litem keys={d} val={data[d]}/>
      })
    }
    </div>
  );
}

export default App;
