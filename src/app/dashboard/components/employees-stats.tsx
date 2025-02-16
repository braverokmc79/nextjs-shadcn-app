import { Card } from '@/components/ui/card';
import React from 'react'

const EmployeesStats:React.FC = () => {
  return (
    <div className='grid lg:grid-cols-3 gap-4'>
        <Card>card 1 </Card>
        <Card>card 2 </Card>
        <Card>card 3 </Card>
    </div>
  )
}

export default EmployeesStats;