import React,{useState} from 'react'
import { useLocation,useNavigate } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import {studentUpdated} from '../features/StudentSlice'
import './Addstudent.css'
const UpdateStudent = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate();
    const data=useLocation();
    const dataid=data.state.id;
    const StdDetail=useSelector((state)=>state.student.filter((item)=>item.id===dataid));
  
    const stdName=StdDetail[0].Name
    const stdAge=StdDetail[0].Age
    const stdCourse=StdDetail[0].Course
    const stdBatch=StdDetail[0].Batch

    
    const [Name,setName]=useState(stdName);
    const [Age,setAge]=useState(stdAge);
    const [Course,setCourse]=useState(stdCourse);
    const [Batch,setBatch]=useState(stdBatch);
    const SubmitHandler=()=>{
      if(Name && Age && Course && Batch){
        dispatch(studentUpdated({
          "id":dataid,
          "Name":Name,
          "Age":Age,
          "Course":Course,
          "Batch":Batch
        }))
        navigate('/Student')
      }
    }
    const cancelupdateStudent=()=>{
      navigate("/Student");
      
  }
  return (
    <>
     <div>
            <input className='input1' type='text' name='Name' placeholder='Name'value={Name} onChange={(e)=>setName(e.target.value)}/>
            <input className='input2' type='text' name='Age' placeholder='Age'value={Age} onChange={(e)=>setAge(e.target.value)}/>
            <input className='input3' type='text' name='Course' placeholder='Course'value={Course} onChange={(e)=>setCourse(e.target.value)}/>
            <input className='input4' type='text' name='Batch' placeholder='Batch'value={Batch} onChange={(e)=>setBatch(e.target.value)}/>
        </div>
      
      
        
    <button className='submit' onClick={SubmitHandler}>Update</button>
    <button  className='cancel' onClick={cancelupdateStudent} >Cancel</button>
    
    </>
  )
}

export default UpdateStudent;