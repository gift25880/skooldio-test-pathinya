import React, { useEffect, useState } from 'react';
import './App.css';
import { Department } from './types/department.type';
import { DepartmentCard } from './components/department_card';


function App() {
  const [departments, setDepartments] = useState<Department[]>([])

  useEffect(() => {
    fetchDepartments()
    return () => {
      setDepartments([])
    }
  }, [])

  const fetchDepartments = async () => {
    //please run `npx json-server data/db.json --port 8000` first!
    const response = await fetch('http://localhost:8000/departments')
    const departmentsData = await response.json()
    setDepartments(departmentsData)
  }
  
  return (
    <div>
      {
        departments.length > 0 && (
          <div className='space-y-4'>
            {
              departments.map((department) => (
                <DepartmentCard key={department?.id} data={department} />
              ))
            }
          </div>
        )
      }
    </div>
  );
}

export default App;
