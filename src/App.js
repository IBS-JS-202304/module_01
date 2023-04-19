import { useState } from 'react';
import { EmployeeList } from './components/EmployeeList';
import { EmployeeCard } from './components/EmployeeCard';
import './App.css';

function App() {
  const [currentEmployee, setCurrentEmployee] = useState(null);

  const onItemClick = (user) => {
    setCurrentEmployee(user);
  }

  const onGoBackClick = () => {
    setCurrentEmployee(null);
  }

  return (
    <div className="App">
      {currentEmployee ? <EmployeeCard currentEmployee={currentEmployee} onGoBack={onGoBackClick} /> : <EmployeeList onItemClick={onItemClick} />}
    </div>
  );
}

export default App;
