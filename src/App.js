import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Contact from './Components/Contact';
import Students from './Components/Students';
import Error from './Components/Error';
import UpdateStudent from './Components/UpdateStudent';
import Addstudent from './Components/Addstudent';
import NavComponent from './Components/NavComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div><NavComponent/></div>
      <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path='/Student' element={ <Students />}/>
          <Route path='/Addstudent' element={  <Addstudent /> }/>
          <Route path='/UpdateStudent' element={ <UpdateStudent />}></Route>
          <Route path='/Contact' element={<Contact/>}></Route>
          <Route path='/*' element={<Error/>}></Route>
      </Routes>
      </header>
    </div>
  );
}

export default App;

