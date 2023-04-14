import React from 'react'
import { useSelector } from 'react-redux'
import TableRow from './TableRow';
import { useNavigate } from 'react-router-dom';
import './Student.css'
const Students = () => {
  const navigate=useNavigate();
 const data= useSelector((state)=>state.student);
//  console.log("Data is here",data)
const AddNewStudent=()=>{
  navigate('/Addstudent')

}


  return (
    <>
    <header className='student'>
      <h3>Student Details</h3>
      <button className='btn' onClick={AddNewStudent}>Add New Student</button>
    </header>
    <div className='tablediv'>
    <table className='tabledata'>
      <thead>
          <th>Name</th>
          <th>Age</th>
          <th>Course</th>
          <th>Batch</th>
          <th>Change</th>
      </thead>
      <tbody>
        {
          data.map((student)=>{
            return(
              <tr key={student.id}>
                <TableRow student={student}/>
              </tr>
            )
          })
        }
      </tbody>
    </table>
    </div>
    </>
  )
}

export default Students