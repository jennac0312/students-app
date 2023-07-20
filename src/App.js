import { useContext } from 'react';
import './App.css';
import { AppContext } from './contexts/app_context';
import Student from './components/Student'

function App() {
  let { students } = useContext(AppContext)
  return (
    <div className="App">
      {students.map((student) => {
        return <Student student={student}/>
      })}
    </div>
  );
}

export default App;
