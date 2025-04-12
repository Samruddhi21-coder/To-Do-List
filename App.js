import logo from './logo.svg';
import './App.css';
import './Components/style.css';
import {useState} from "react";

function App() {
  let [Arr,setArr] = useState([]);
  let [task,setTask] = useState("");

  function daalo(event)
  {
    event.preventDefault();
    if(task)
    {
      setArr([...Arr,task]);
      setTask("");
    }

  }

  function nikaalo(index)
  {
    setArr(Arr.filter((ele,i)=>i!==index));

  }

  return (
    <div className='container'>
      <h2>To-Do-List</h2>
     
      <form onSubmit={daalo}>
        <input type='text' onChange={(event)=>{setTask(event.target.value)}} value={task}/>
        <button type='submit' className='add-btn'>Submit</button>

      </form>


      <div className='bottom'>
        {
          Arr.map((element,index)=>(
            <div className='card'>
              <span>
                {element}
              </span>
              <button onClick={()=>nikaalo(index)} className='delete-btn'>Delete</button>
              </div>
          ))
        }
        </div>
      </div>    
  );
}

export default App;
