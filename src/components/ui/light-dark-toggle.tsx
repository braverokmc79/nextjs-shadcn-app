"use client"
import React, { useState } from 'react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './tooltip'
import { MoonIcon, SunIcon } from 'lucide-react'

interface LightDarkToggleProps{
    className?: string
}
const LightDarkToggle:React.FC<LightDarkToggleProps> = ({className}) => {

  const [isDarkMode, setIsDarkMode] = useState(false)


  return (
    <>
    <TooltipProvider>
        <Tooltip>
            <TooltipTrigger 
            className={className}
            onClick={()=>{
                setIsDarkMode(prevValue =>!prevValue);     
                document.body.classList.toggle('dark', isDarkMode);         
            }}>
                {isDarkMode ? <MoonIcon /> : <SunIcon /> }
            </TooltipTrigger>
            <TooltipContent>
                {isDarkMode ? '밝은 테마': '어두운 테마' }
            </TooltipContent>
        </Tooltip>
    </TooltipProvider>
    </>
  )


}

export default LightDarkToggle;