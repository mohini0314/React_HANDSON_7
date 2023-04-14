import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { studentAdded } from '../features/StudentSlice';
import { useDispatch,useSelector } from 'react-redux';
import './Addstudent.css' 
const Addstudent = () => {
    const data=useSelector((state)=>state.student);
    const [Name,setName]=useState("");
    const [Age,setAge]=useState("");
    const [Course,setCourse]=useState("");
    const [Batch,setBatch]=useState("");
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const cancelAddStudent=()=>{
        navigate("/Student");
        
    }

    const SubmitNewStudent=()=>{
        if(Name && Age && Course && Batch){
            dispatch(studentAdded({
             "id":data.length,
                "Name":Name,
                "Age":Age,
                "Course":Course,
                "Batch":Batch
            }))
            navigate("/Student")
            
        }

    }
  return (
    <>
    <div>
      
            <input className='input1' type='text' name='Name' placeholder='Name'value={Name} onChange={(e)=>setName(e.target.value)}/>
            <input className='input2' type='text' name='Age' placeholder='Age'value={Age} onChange={(e)=>setAge(e.target.value)}/>
            <input className='input3' type='text' name='Course' placeholder='Course'value={Course} onChange={(e)=>setCourse(e.target.value)}/>
            <input className='input4' type='text' name='Batch' placeholder='Batch'value={Batch} onChange={(e)=>setBatch(e.target.value)}/>
        
    </div>

        <button className='cancel' onClick={cancelAddStudent}>Cancel</button>
        <button className='submit' onClick={SubmitNewStudent}>Submit</button>

    </>
  )
}

export default Addstudent;