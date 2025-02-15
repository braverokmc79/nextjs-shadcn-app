import React from 'react'
import MainMenu from './components/main-menu'

interface DashboardLayoutProps {
    children: React.ReactNode
}

const DashboardLayout:React.FC<DashboardLayoutProps> = ({children}) => {
  return (
    <div className='grid  grid-cols-[250px_1fr]  h-screen'>
        <div className='bg-muted overflow-auto p-3'>
          <MainMenu />
        </div>
           
        <div className='overflow-auto py-2 px-4'>
            <h1 className='pb-4 text-2xl font-bold'>환영합니다. 홍길동님!</h1>
            {children}
        </div>        
    </div>
  )
}

export default DashboardLayout