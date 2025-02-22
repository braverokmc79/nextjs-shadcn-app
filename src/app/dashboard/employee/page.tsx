import React from 'react'
import { setTimeout } from 'timers/promises';


const EmployeePage:React.FC = async() => {
  
  await setTimeout(5000);



  return (
    <div>
      <h2>직원</h2>
    
    </div>
  )
}

export default EmployeePage;