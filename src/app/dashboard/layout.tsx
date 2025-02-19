import React from 'react'
import MainMenu from './components/main-menu'
import MenuTitle from './components/menu-title'

interface DashboardLayoutProps {
    children: React.ReactNode
}

const DashboardLayout:React.FC<DashboardLayoutProps> = ({children}) => {
  return (
    <div className='grid md:grid-cols-[250px_1fr]  px-3 md:px-0  h-screen'>
     
        <MainMenu  className="hidden md:flex" />
        
        <div className='p-4 flex justify-between   md:hidden sticky top-0 left-0 bg-background 
            border-b border-border'>
           <MenuTitle />       
        </div> 

        <div className='overflow-auto py-2 px-6'>
            <h1 className='pb-4 text-2xl font-bold'>환영합니다. 홍길동님!</h1>
            {children}
        </div>        
    </div>
  )
}

export default DashboardLayout