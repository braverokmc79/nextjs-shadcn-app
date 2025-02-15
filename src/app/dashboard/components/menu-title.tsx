import { PersonStandingIcon } from 'lucide-react';
import React from 'react'

const MenuTitle:React.FC = () => {
  return (
    <h4 className='flex items-center text-2xl'>
         <PersonStandingIcon size={40} className="text-pink-500 " /> SupportMe
    </h4>
  )
}

export default MenuTitle;