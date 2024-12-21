import { useState } from 'react'
import Button from './components/Button'
import Switch from './components/Switch'
import axios from 'axios'
function App() {
 const [value, setValue] = useState("")
 const [rating, setRating] = useState("PG13")
 const [output, setOutput] = useState("Truth or Dare?")
 
  const changeRating = (e)=>{
    setRating(e)
  }

  const changeVal = (e)=>{
    setValue(e);
    setOutput(e);
    
  }

  const send_request = async (val)=>{
    
    const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}`, {value: val, rating});
    const data = response.data;
    changeVal(data);
  }

  return (
    <>
      <div className="relative min-h-screen bg-slate-950 overflow-hidden">
        <div className="z-0 absolute bottom-0 left-[-10%] right-0 top-[-10%] size-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]" />
        <div className="z-0 absolute bottom-0 right-[-10%] top-[-10%] size-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]" />
{/****************************************************************** BG-Ends ******************************************************************/}

{/********************************************************** Main Content Starts here **********************************************************/}
        <div className="text-4xl sm:text-7xl text-white content-wrapper z-10 relative flex flex-col min-h-screen tracking-tighter items-center justify-evenly">

          <div className="rating-switches flex min-w-full justify-evenly">
            <Switch name={"R"} isChecked={rating == "R"} onClick={()=>changeRating("R")}/>
            <Switch name={"PG13"} isChecked={rating == "PG13"} onClick={()=>changeRating("PG13")} />
            <Switch name={"PG"} isChecked={rating == "PG"} onClick={()=>changeRating("PG")} />
          </div>

          <div className="out tracking-wider font-[impact] flex text-center">
            {output}
          </div>

          <div className="buttons flex gap-5 select-none">
            <Button name="TRUTH"  onClick={()=> send_request("truth")}/>
            <Button name="DARE"  onClick={() => send_request("dare")}/>
          </div>

          <div className="heding font-bold ">Choose one!</div>
          
        </div>
      </div>
    </>
  )
}

export default App
